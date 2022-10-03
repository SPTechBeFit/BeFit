package sptech.befitapi.resources.repository.entity;

import lombok.Data;
import lombok.ToString;
import sptech.befitapi.resources.repository.entity.types.NivelType;

import javax.persistence.*;

@Data
@ToString
@Entity
public class Exercicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    private String descricao;

    @Enumerated(EnumType.STRING)
    private NivelType nivel;

    private Boolean ativo = true;
}
