package com.hms.utility;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hms.exeception.HmsException;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;

@RestControllerAdvice 
public class ExceptionControllerAdvice {

    // 1. Trata erros genéricos inesperados
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorInfo> exceptionHandler(Exception e) {
        ErrorInfo error = new ErrorInfo(
            "Erro interno, entre em contato com o suporte", 
            HttpStatus.INTERNAL_SERVER_ERROR.value(), 
            LocalDateTime.now()
        );
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // 2. Trata exceções personalizadas do sistema (regras de negócio)
    @ExceptionHandler(HmsException.class)
    public ResponseEntity<ErrorInfo> hmsExceptionHandler(HmsException e) {
        ErrorInfo error = new ErrorInfo(
            e.getMessage(),
            HttpStatus.INTERNAL_SERVER_ERROR.value(), 
            LocalDateTime.now()
        );
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // 3. Trata erros de validação de campos (@Valid / @Validated)
    @ExceptionHandler({MethodArgumentNotValidException.class, ConstraintViolationException.class})
    public ResponseEntity<ErrorInfo> handleValidationExceptions(Exception e) {
        String errorMessage = "Erro de validação nos dados enviados";

        if (e instanceof MethodArgumentNotValidException exception) {
            // Pega todas as mensagens de erro dos campos inválidos e junta com vírgula
            errorMessage = exception.getBindingResult().getFieldErrors().stream()
                    .map(err -> err.getDefaultMessage())
                    .collect(Collectors.joining(", "));
        } else if (e instanceof ConstraintViolationException exception) {
            errorMessage = exception.getConstraintViolations().stream()
                    .map(ConstraintViolation::getMessage)
                    .collect(Collectors.joining(", "));
        }

        ErrorInfo error = new ErrorInfo(
            errorMessage,
            HttpStatus.BAD_REQUEST.value(), 
            LocalDateTime.now()
        );
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
} 