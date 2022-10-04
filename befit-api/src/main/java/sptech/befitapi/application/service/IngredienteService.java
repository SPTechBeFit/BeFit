package sptech.befitapi.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sptech.befitapi.resources.repository.IngredienteRepository;
import sptech.befitapi.resources.repository.entity.Ingrediente;

import java.util.List;
import java.util.Optional;

@Service
public class IngredienteService {
    @Autowired
    private IngredienteRepository ingredienteRepository;

    public Ingrediente cadastrar(Ingrediente ingrediente) {
        ingredienteRepository.save(ingrediente);
        return ingrediente;
    }

    public List<Ingrediente> getAll() {
        return ingredienteRepository.findAll();
    }

    public Optional<Ingrediente> get(int id) {
        return ingredienteRepository.findById(id);
    }
}
