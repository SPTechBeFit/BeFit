package sptech.befitapi.application.entity.treino;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Treino {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nome;
    private String descricao;

    @OneToMany
    private List<Serie> series;

    private Integer ativo;

}
