package com.hms.utility;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hms.exeception.HmsException;

@RestControllerAdvice 
public class ExeceptionControllerAdvince {

    @ExceptionHandler(Exeception.class){
        public ResponseEntity<ErrorInfo> exceptionHandler(Exception e){
            ErrorInfo error = new ErrorInfo("Erro entre em contato com suporte", HttpStatus.INTERNAL_SERVER_ERROR.value(), LocalDateTime.now());
            return  new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @ExceptionHandler(HmsException.class){
        public ResponseEntity<ErrorInfo> HmsExceptionHandler(HmsException e) {
            ErrorInfo error = new ErrorInfo(e.getMessage(),
            HttpStatus.INTERNAL_SERVER_ERROR.value(), LocalDateTime.now());
            return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
                }
    }
}
