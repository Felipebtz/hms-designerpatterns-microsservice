package com.hms.service;

import org.springframework.stereotype.Service;

import com.hms.entity.Categoria;
import com.hms.repository.CategoriaRepository;

import jakarta.transaction.Transactional;

@Service 
public class CategoriaService {
    
    private CategoriaRepository categoriaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository){
        this.categoriaRepository = categoriaRepository;
    }

    @Transactional 

    public Categoria registerCategoria(Categoria categoria){

        if(categoriaRepository.existsByName(categoria.getName())){

             throw new IllegalArgumentException(
                "Categoria já existe");
        }
          return categoriaRepository.save(categoria);

    }

}
