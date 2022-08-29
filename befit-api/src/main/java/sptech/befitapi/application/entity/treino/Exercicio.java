package sptech.befitapi.application.entity.treino;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Exercicio {

    private String nome;
    private String descricao;
    private String nivel;
    private Integer ativo;

}
