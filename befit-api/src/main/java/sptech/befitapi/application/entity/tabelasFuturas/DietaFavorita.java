package sptech.befitapi.application.entity.tabelasFuturas;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Data
@ToString
public class DietaFavorita {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Temporal(TemporalType.DATE)
    private Date criadoEm;

    private Integer diaSequencial;

    @Temporal(TemporalType.DATE)
    private Date atualizadoEm;

}
