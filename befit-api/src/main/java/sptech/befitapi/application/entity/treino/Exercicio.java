package sptech.befitapi.application.entity.treino;

import lombok.Data;
import lombok.ToString;
import sptech.befitapi.application.entity.dieta.Dieta;
import sptech.befitapi.resources.repository.entity.types.NivelType;

import javax.persistence.*;
import java.util.List;

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

    @ManyToMany
    @JoinTable(name = "SERIE",
            joinColumns = @JoinColumn (name = "FK_EXERCICIO"),
            inverseJoinColumns = @JoinColumn(name = "FK_TREINO"))
    private List<Dieta> serie;
}
