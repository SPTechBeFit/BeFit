package sptech.befitapi.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sptech.befitapi.application.service.DietaService;
import sptech.befitapi.resources.repository.entity.Dieta;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/dietas")
public class DietaController {

    @Autowired
    private DietaService dietaService;

    @PostMapping
    public ResponseEntity<Dieta> cadastrar(@RequestBody Dieta dieta) {
        return ResponseEntity.status(HttpStatus.CREATED).body(dietaService.cadastrar(dieta));
    }

    @GetMapping
    public ResponseEntity<List<Dieta>> getAll() {
        List<Dieta> dietas = dietaService.getAll();

        return (!dietas.isEmpty()) ? ResponseEntity.status(HttpStatus.OK).body(dietas) : ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Dieta>> get(@PathVariable int id) {
        Optional<Dieta> dieta = dietaService.get(id);

        return (dieta.isPresent()) ? ResponseEntity.status(HttpStatus.OK).body(dieta) : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

}
