package sptech.befitapi.application.entity;

import sptech.befitapi.resources.repository.entity.FuncaoType;
import sptech.befitapi.resources.repository.entity.NivelType;
import sptech.befitapi.resources.repository.entity.ObjetivoType;

import java.util.Date;

public class UsuarioIntermediario extends UsuarioStrategy{
    public UsuarioIntermediario(String nome, String email, String senha, ObjetivoType objetivo, Double altura, Double peso, Date dataNascimento, FuncaoType funcao) {
        super(nome, email, senha, objetivo, altura, peso, dataNascimento, funcao, NivelType.INTERMEDIARIO
        );
    }
}
