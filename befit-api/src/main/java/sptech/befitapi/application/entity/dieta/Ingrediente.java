package sptech.befitapi.application.entity.dieta;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@ToString
@Entity
public class Ingrediente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nome;
    private Integer porcao;
    private Double proteina;
    private Double lipidio;
    private Double carboidrato;
    private Double sodio;
    private Double caloria;
    private Integer ativo;

    @ManyToMany
    @JoinTable(name = "INGREDIENTE_DIETA",
            joinColumns = @JoinColumn (name = "FK_INGREDIENTE"),
            inverseJoinColumns = @JoinColumn(name = "FK_DIETA"))
    private List<Dieta> ingredienteDieta;
}
