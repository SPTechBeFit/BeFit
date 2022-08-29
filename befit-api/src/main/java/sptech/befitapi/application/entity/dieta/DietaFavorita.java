package sptech.befitapi.application.entity.dieta;

import lombok.Data;
import lombok.ToString;

import java.util.Date;
import java.util.List;

@Data
@ToString
public class DietaFavorita {

    private Date criadoEm;
    private Integer diaSequencial;
    private Date atualizadoEm;
    private List<Dieta> dietas;
}
