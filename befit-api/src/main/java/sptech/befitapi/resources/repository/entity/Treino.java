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
}
