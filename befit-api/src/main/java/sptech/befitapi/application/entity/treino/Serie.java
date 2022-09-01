package sptech.befitapi.application.entity.treino;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Time;

@Data
@ToString
@Entity
public class Serie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer quantidade;
    private Integer repeticao;

    @Temporal(TemporalType.TIME)
    private Time Tempo;

}
