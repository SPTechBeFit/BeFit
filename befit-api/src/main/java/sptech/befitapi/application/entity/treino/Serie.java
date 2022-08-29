package sptech.befitapi.application.entity.treino;

import lombok.Data;
import lombok.ToString;
import java.sql.Time;
import java.util.List;

@Data
@ToString
public class Serie {

    private Integer quantidade;
    private Integer repeticao;
    private Time Tempo;
    private Exercicio exercicio;

}
