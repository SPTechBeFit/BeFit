package sptech.befitapi.application.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
public class UsuarioHistorico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    private Usuario usuario;

    private Integer xp;

    private Double peso;

    private LocalDateTime criadoEm;
}
