package sptech.befitapi.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sptech.befitapi.application.service.IngredienteService;
import sptech.befitapi.resources.repository.entity.Ingrediente;
import java.util.List;

@RestController
@RequestMapping("/ingrediente")
public class IngredienteController {

    @Autowired
    private IngredienteService ingredienteService;

    @GetMapping("/catalogo")
    public List<Ingrediente> getCatalogo() {
        return ingredienteService.findCatalogo();
    }

}
