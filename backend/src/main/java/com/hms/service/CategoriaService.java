package com.hms.service;

import com.hms.entity.Categoria;
import com.hms.repository.CategoriaRepository;

import jakarta.transaction.Transactional;

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
