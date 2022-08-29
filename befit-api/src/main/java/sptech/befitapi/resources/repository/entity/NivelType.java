package sptech.befitapi.resources.repository.entity;

import sptech.befitapi.application.entity.Login;
import sptech.befitapi.application.entity.treino.Treino;
import sptech.befitapi.application.service.TreinoAvancadoService;
import sptech.befitapi.application.service.TreinoInicianteService;
import sptech.befitapi.application.service.TreinoIntermediarioService;

import java.util.List;

public enum NivelType {

    INICIANTE {
        @Override
        public List<Treino> obterTreino(){
            return new TreinoInicianteService().retornaTreinoUsuario();
        }
    },
    INTERMEDIARIO{
        @Override
        public List<Treino> obterTreino(){
            return new TreinoIntermediarioService().retornaTreinoUsuario();
        }
    },
    AVANCADO{
        @Override
        public List<Treino> obterTreino(){
            return new TreinoAvancadoService().retornaTreinoUsuario();
        }
    };


    public abstract List<Treino> obterTreino();

}
