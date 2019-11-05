package com.hms.controller;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.service.UserService;
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


    @PostMapping("path")
    public String postMethodName(@RequestBody String entity) {
        //TODO: process POST request
        
        return entity;
    }
    


    
}
