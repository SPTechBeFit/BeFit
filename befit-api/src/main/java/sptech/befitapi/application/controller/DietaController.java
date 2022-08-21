package sptech.befitapi.application.controller;

import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sptech.befitapi.application.entity.ValorNutricional;
import sptech.befitapi.application.response.ValorNutricionalResponse;
import sptech.befitapi.application.service.DietaService;
import java.util.List;

@RequestMapping("/dieta")
@RestController
public class DietaController {

    @Autowired
    private DietaService dietaService;

    @GetMapping("/valor-nutricional")
    public ValorNutricionalResponse getValorNutricional(@RequestBody @NotNull List<ValorNutricional> valorNutricional){
        return dietaService.findValorNutricional(valorNutricional);
    }
}
