package sptech.befitapi.resources.repository.entity;

import sptech.befitapi.resources.repository.entity.types.NivelType;

import javax.persistence.*;
import java.util.List;


@Entity
public class Treino {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;
    private String descricao;

    @Enumerated(EnumType.STRING)
    private NivelType nivel;

    @OneToMany(mappedBy="Usuario")
    private Integer criador_id;
    private Boolean ativo = true;
}
