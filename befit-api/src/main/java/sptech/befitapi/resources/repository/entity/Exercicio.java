package sptech.befitapi.resources.repository.entity;

import javax.persistence.*;

@Entity
public class Exercicio {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nome;

    private String descricao;

    @Enumerated(EnumType.STRING)
    private NivelType nivel;

    private Boolean ativo = true;
}
