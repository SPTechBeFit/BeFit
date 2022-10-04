package sptech.befitapi.resources.repository.entity;

import lombok.Data;

import javax.persistence.*;
import java.sql.Time;

@Data
@Entity
public class Serie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private Treino treino;

    @ManyToOne
    private Exercicio exercicio;

    private Integer quantidade;

    private Time tempo;

    private Integer repeticao;



}
