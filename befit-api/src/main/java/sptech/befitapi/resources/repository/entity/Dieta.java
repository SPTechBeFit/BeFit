package sptech.befitapi.resources.repository.entity;

import lombok.Data;
import lombok.ToString;
import sptech.befitapi.resources.repository.entity.types.NivelType;

import javax.persistence.*;
import java.util.List;

@Data
@ToString
@Entity
public class Dieta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;
    private String descricao;

    @Enumerated(EnumType.STRING)
    private NivelType nivel;

    @OneToMany(mappedBy="Usuario")
    private Integer criadorId;

    private Boolean ativo = true;
}
