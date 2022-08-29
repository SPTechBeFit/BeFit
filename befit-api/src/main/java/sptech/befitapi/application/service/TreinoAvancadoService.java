package sptech.befitapi.application.service;

import org.springframework.stereotype.Service;
import sptech.befitapi.application.entity.treino.Treino;
import sptech.befitapi.resources.repository.Stratergy;
import sptech.befitapi.resources.repository.UsuarioRepository;

import java.util.List;

@Service
public class TreinoAvancadoService implements Stratergy {

    UsuarioRepository usuarioRepository;

    public List<Treino> retornaTreinoUsuario() {

        List<Treino> treinos = usuarioRepository.findTreinoByNivel("AVANCADO");
        return treinos;

    }
}
