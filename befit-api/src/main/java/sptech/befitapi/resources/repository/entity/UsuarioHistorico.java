package sptech.befitapi.resources.repository.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class UsuarioHistorico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToMany(mappedBy="Treino")
    private Integer usuarioId;

    private Integer xp;

    private Double peso;

    private LocalDateTime criadoEm;
}
