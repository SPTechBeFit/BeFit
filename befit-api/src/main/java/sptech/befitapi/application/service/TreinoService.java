package sptech.befitapi.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sptech.befitapi.resources.repository.TreinosRepository;
import sptech.befitapi.application.entity.Treino;

import java.util.List;

@Service
public class TreinoService {

    @Autowired
    TreinosRepository repository;

    public Treino cadastrarTreino(Treino treino){
        
        repository.save(treino);
        return treino;
    }

    public List<Treino> getAll(){
        return repository.findAll();
    }

    public List<Treino> getAllByUser(Integer id){
        return repository.findAllByCriadorId(id);
    }
}
