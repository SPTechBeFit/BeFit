package sptech.befitapi.application.service;

import sptech.befitapi.application.entity.treino.Treino;
import sptech.befitapi.resources.repository.Stratergy;
import sptech.befitapi.resources.repository.UsuarioRepository;

import java.util.List;

public class TreinoInicianteService implements Stratergy {

    UsuarioRepository usuarioRepository;

    public List<Treino> retornaTreinoUsuario() {

        List<Treino> treinos = usuarioRepository.findTreinoByNivel("INICIANTE");
        return treinos;

    }
}
