package sptech.befitapi.application.entity;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class TreinoFavorito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private Usuario usuario;

    @ManyToOne
    private Treino treino;

    private LocalDate criadoEm;

    private Integer diasSequencia;

    private LocalDate autalizadoEm;

}
