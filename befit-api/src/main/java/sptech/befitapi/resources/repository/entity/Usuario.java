package sptech.befitapi.resources.repository.entity;

import sptech.befitapi.resources.repository.entity.types.FuncaoType;
import sptech.befitapi.resources.repository.entity.types.NivelType;
import sptech.befitapi.resources.repository.entity.types.ObjetivoType;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    private String email;

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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPersonId() {
        return personId;
    }

    public void setPersonId(String personId) {
        this.personId = personId;
    }

    public ObjetivoType getObjetivo() {
        return objetivo;
    }

    public void setObjetivo(ObjetivoType objetivo) {
        this.objetivo = objetivo;
    }

    public Double getAltura() {
        return altura;
    }

    public void setAltura(Double altura) {
        this.altura = altura;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public FuncaoType getFuncao() {
        return funcao;
    }

    public void setFuncao(FuncaoType funcao) {
        this.funcao = funcao;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public NivelType getNivel() {
        return nivel;
    }

    public void setNivel(NivelType nivel) {
        this.nivel = nivel;
    }

    public Integer getXp() {
        return xp;
    }

    public void setXp(Integer xp) {
        this.xp = xp;
    }

    public Boolean getLogado() {
        return logado;
    }

    public void setLogado(Boolean logado) {
        this.logado = logado;
    }
}
