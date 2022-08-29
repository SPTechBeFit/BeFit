package sptech.befitapi.application.entity.treino;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@ToString
public class TreinoFavorito {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Temporal(TemporalType.DATE)
    private Date criadoEm;

    private Integer diasSequencia;

    @Temporal(TemporalType.DATE)
    private Date autalizadoEm;

    @OneToMany
    private List<Treino> treinos;
}
