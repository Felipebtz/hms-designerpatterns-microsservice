package com.hms.utility;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Retornar o erro padronizado ao frontend
 */
@Data 
@AllArgsConstructor 
@NoArgsConstructor 

public class ErrorInfo {
    private String errorMessage;
    private Integer errorCode;
    private LocalDateTime timestamp;
}
