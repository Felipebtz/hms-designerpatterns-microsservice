package com.hms.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.hms.dto.ResponseDTO;
import com.hms.entity.Categoria;
import com.hms.service.CategoriaService;


@RestController 
@RequestMapping (value = "/categories")


public class CategoriaController {
    private final CategoriaService categoriaService;
    

    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO>registerCategoria(@RequestBody Categoria categoria) {

        categoriaService.registerCategoria(categoria);

        return ResponseEntity
        .status(HttpStatus.CREATED)
        .body(new ResponseDTO(
            "Categoria criada com sucesso!"
        ));
    }
}