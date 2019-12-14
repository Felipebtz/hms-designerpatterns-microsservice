package com.hms.repository;

import org.springframework.data.repository.CrudRepository;

import com.hms.entity.User;

public interface UserRepository extends CrudRepository <User, Long> {
    
}
