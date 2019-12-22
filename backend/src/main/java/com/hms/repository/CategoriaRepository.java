package com.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.entity.Categoria;
public interface CategoriaRepository extends JpaRepository <Categoria, Long> {

    boolean existsByName(String name);

}