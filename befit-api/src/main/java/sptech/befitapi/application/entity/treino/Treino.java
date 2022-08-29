package sptech.befitapi.application.entity.treino;

import lombok.Data;

import java.util.List;

@Data

public class Treino {

    private String nome;
    private String descricao;
    private List<Serie> series;
    private Integer ativo;

}
