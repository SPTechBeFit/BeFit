package sptech.befitapi.application.entity.tabelasFuturas;

import lombok.Data;
import lombok.ToString;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Time;

@Data
@ToString
public class Serie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer quantidade;
    private Integer repeticao;

    //@Temporal(TemporalType.TIME)
    private Time Tempo;

}
