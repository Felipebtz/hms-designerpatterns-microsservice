package com.hms.service;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hms.dto.UserDTO;
import com.hms.entity.User;
import com.hms.exeception.HmsException;
import com.hms.repository.UserRepository;

@Service 
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
        
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder ){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        
    }
    @Override
    public void registerUser(UserDTO userDTO) throws HmsException {
    
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(userDTO.toEntity());
    }

    @Override
    public UserDTO loginUser(UserDTO userDTO) throws HmsException {
        User user = userRepository.findByEmail(userDTO.getEmail()).orElseThrow(()->new HmsException("USER_NOT_FOUND"));
        if(!passwordEncoder.matches(userDTO.getPassword(), user.getPassword())){
            throw new HmsException("INVALID_CREDENTIALS");
        }
        user.setPassword(null);
        return user.toDto();
    }

    @Override
    public UserDTO getUserById(Long id) throws HmsException  {
        return
        userRepository.findById(id).orElseThrow(()->new HmsException("USER_NOT_FOUND")).toDto();
    }

    @Override
    public void updateUser(UserDTO userDTO) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }
    
}
