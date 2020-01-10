package com.hms.dto;

import com.hms.entity.Roles;
import com.hms.entity.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@NoArgsConstructor 
@AllArgsConstructor 
public class UserDTO {

    private Long id;
    @NotBlank (message = "O nome é obrigátorio")
    private String name;
    @NotBlank (message = "O email é obrigátorio")
    @Email (message = "Formato do e-mail precisa ser válido")
    private String email;
    @NotBlank (message = "A senha é obrigátoria")
    @Size (min = 6, max = 30, message = "A senha deve ter entre 8 e 64 caracteres")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9\\s])\\S+$", message = "A senha deve conter uma letra maiúscula, uma minúscula, um número e um caractere especial, sem espaços")
    private String password;
    private Roles role;

    public User toEntity(){
        return new User(this.id, this.name, this.email, this.password, this.role);
    }
    
}
