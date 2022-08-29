package sptech.befitapi.application.entity.treino;

import lombok.Data;
import lombok.ToString;

import java.util.Date;
import java.util.List;

@Data
@ToString
public class TreinoFavorito {

    private Date criadoEm;
    private Integer diasSequencia;
    private Date autalizadoEm;
    private List<Treino> treinos;
}
