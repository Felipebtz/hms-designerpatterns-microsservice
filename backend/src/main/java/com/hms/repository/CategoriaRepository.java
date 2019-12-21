package com.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hms.entity.Categoria;
import java.util.List;
import java.util.Optional;


public interface CategoriaRepository extends JpaRepository <Categoria, Long> {

    Optional<Categoria> findById(Long id);

}