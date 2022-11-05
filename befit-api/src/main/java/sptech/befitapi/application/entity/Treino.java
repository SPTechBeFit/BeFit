package sptech.befitapi.application.entity;

import lombok.Data;
import sptech.befitapi.application.entity.types.NivelType;

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
}
