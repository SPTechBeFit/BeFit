package sptech.befitapi.resources.repository.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Data
@ToString
public class DietaFavorita {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToMany(mappedBy="Usuario")
    private Integer usuarioId;

    @OneToMany(mappedBy="Dieta")
    private Integer dietaId;

    private LocalDate criadoEm;

    private Integer diasSequencia;

    private LocalDate atualizadoEm;

}
