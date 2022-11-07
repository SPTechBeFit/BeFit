package sptech.befitapi.resources.repository.entity;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import sptech.befitapi.resources.repository.entity.types.FuncaoType;
import sptech.befitapi.resources.repository.entity.types.NivelType;
import sptech.befitapi.resources.repository.entity.types.ObjetivoType;

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

    public Usuario(Integer id, String nome, String email, String senha, String personId, ObjetivoType objetivo, Double altura, Double peso, LocalDate dataNascimento, FuncaoType funcao, NivelType nivel, Integer xp, Boolean logado) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.personId = personId;
        this.objetivo = objetivo;
        this.altura = altura;
        this.peso = peso;
        this.dataNascimento = dataNascimento;
        this.funcao = funcao;
        this.nivel = nivel;
        this.xp = xp;
        this.logado = logado;
    }

    public Usuario(Integer id) {
        this.id = id;
    }
}
