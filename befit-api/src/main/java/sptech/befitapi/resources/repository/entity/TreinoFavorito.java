package sptech.befitapi.resources.repository.entity;


import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Data
@ToString
public class TreinoFavorito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToMany(mappedBy="Usuario")
    private Integer usuarioId;

    @OneToMany(mappedBy="Treino")
    private Integer treinoId;

    private LocalDate criadoEm;

    private Integer diasSequencia;

    private LocalDate autalizadoEm;

}
