package com.hms.utility;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice 
public class ExeceptionControllerAdvince {

    @ExceptionHandler(Exeception.class){
        public ResponseEntity<ErrorInfo> exceptionHandler(Exception e){
            ErrorInfo error = new ErrorInfo(("Some error Ocurred"), HttpStatus.INTERNAL_SERVER_ERROR.value(), LocalDateTime.now());
            return  new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
        }
    }
      
}
