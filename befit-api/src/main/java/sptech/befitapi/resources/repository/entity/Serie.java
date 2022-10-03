package sptech.befitapi.resources.repository.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Time;

@Data
@ToString
public class Serie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToMany(mappedBy="Treino")
    private Integer treinoId;

    @OneToMany(mappedBy="Exercicio")
    private Integer exercicioId;

    private Integer quantidade;
    private Time tempo;
    private Integer repeticao;



}
