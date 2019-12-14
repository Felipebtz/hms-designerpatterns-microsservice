package com.hms.dto;

import com.hms.entity.User;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
public class UserDTO {

    private Long id;
    private String name;
    private String email;
    private String password;
    private String role;

    public User toEntity(){
        return new User(this.id, this.name, this.email, this.password, this.role);
    }
    
}
