package sptech.befitapi.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import sptech.befitapi.resources.repository.DietaRepository;
import sptech.befitapi.resources.repository.entity.Dieta;

import java.util.List;
import java.util.Optional;

@Service
public class DietaService {

    @Autowired
    private DietaRepository dietaRepository;

    public Dieta cadastrar(@RequestBody Dieta dieta) {
        dietaRepository.save(dieta);
        return dieta;
    }

    public List<Dieta> getAll() {
        return dietaRepository.findAll();
    }

    public Optional<Dieta> get(int id) {
        return dietaRepository.findById(id);
    }
}
