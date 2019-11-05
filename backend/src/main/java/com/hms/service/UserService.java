package com.hms.service;

import com.hms.dto.UserDTO;
import com.hms.exeception.HmsException;


public interface UserService {

    public void registerUser (UserDTO userDTO)throws HmsException ;
    public UserDTO loginUser(UserDTO userDTO) throws HmsException;
    public UserDTO getUserById(Long id) throws HmsException ;
    public void  updateUser(UserDTO userDTO);
    
}
