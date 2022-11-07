package sptech.befitapi.resources.repository.entity;

import lombok.Data;
import sptech.befitapi.resources.repository.entity.types.NivelType;

import javax.persistence.*;

@Data
@Entity
public class Treino {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;
    private String descricao;

    @Enumerated(EnumType.STRING)
    private NivelType nivel;

    @ManyToOne
    private Usuario criador;

    private Boolean ativo = true;

    public Treino(Integer id, String nome, String descricao, NivelType nivel, Usuario criador, Boolean ativo) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.nivel = nivel;
        this.criador = criador;
        this.ativo = ativo;
    }

    public Treino(String nome, String descricao, Usuario criador) {
        this.nome = nome;
        this.descricao = descricao;
        this.criador = criador;
    }

    public Treino(Integer id) {
        this.id = id;
    }
}
