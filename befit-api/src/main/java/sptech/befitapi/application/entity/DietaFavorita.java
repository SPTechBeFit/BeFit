package sptech.befitapi.application.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class DietaFavorita {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private Usuario usuario;

    @ManyToOne
    private Dieta dieta;

    private LocalDate criadoEm;

    private Integer diasSequencia;

    private LocalDate atualizadoEm;

}
