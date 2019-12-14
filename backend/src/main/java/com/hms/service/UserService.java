package com.hms.service;

import com.hms.dto.UserDTO;
import com.hms.dto.UserDto;

public interface UserService {

    public void registerUser (UserDTO userDTO);
    public UserDTO loginUser(UserDTO userDTO);
    public UserDTO getUserById(Long id);
    public void  updateUser(UserDTO userDTO);
    
}
