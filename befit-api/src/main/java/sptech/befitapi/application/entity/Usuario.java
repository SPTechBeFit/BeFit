package sptech.befitapi.application.entity;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import sptech.befitapi.application.entity.types.FuncaoType;
import sptech.befitapi.application.entity.types.NivelType;
import sptech.befitapi.application.entity.types.ObjetivoType;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Data
@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    private String email;

    @Getter(AccessLevel.NONE)
    private String senha;

    private String personId = UUID.randomUUID().toString();

    @Enumerated(EnumType.STRING)
    private ObjetivoType objetivo;

    private Double altura;

    private Double peso;

    private LocalDate dataNascimento;

    @Enumerated(EnumType.STRING)
    private FuncaoType funcao;

    @Enumerated(EnumType.STRING)
    private NivelType nivel;

    private Integer xp = 0;

    private Boolean logado = false;
}
