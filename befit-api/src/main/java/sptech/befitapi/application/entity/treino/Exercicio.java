package sptech.befitapi.application.entity.treino;

import lombok.Data;
import lombok.ToString;
import sptech.befitapi.resources.repository.entity.NivelType;

import javax.persistence.*;

@Data
@ToString
@Entity
public class Exercicio {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nome;

    private String descricao;

    @Enumerated(EnumType.STRING)
    private NivelType nivel;

    private Integer ativo;

}
