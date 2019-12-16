package com.hms.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.dto.ResponseDTO;
import com.hms.dto.UserDTO;
import com.hms.exeception.HmsException;
import com.hms.service.UserService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController 
@RequestMapping ("/user")
@Validated 
@CrossOrigin 

public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
         this.userService = userService;
    }


    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody @Valid UserDTO userDTO) throws HmsException{
        userService.registerUser(userDTO);
        return new ResponseEntity<>(new ResponseDTO("Conta criada com sucesso."), HttpStatus.CREATED);
    }
    
    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser(@RequestBody @Valid UserDTO userDTO) throws HmsException {
        userService.loginUser(userDTO);
        return new ResponseEntity<>(new ResponseDTO("Login efetuado com sucesso."), HttpStatus.CREATED);
    }
    


    
}
