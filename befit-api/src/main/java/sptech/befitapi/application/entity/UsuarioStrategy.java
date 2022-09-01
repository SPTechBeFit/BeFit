package sptech.befitapi.application.entity;

import sptech.befitapi.resources.repository.entity.FuncaoType;
import sptech.befitapi.resources.repository.entity.NivelType;
import sptech.befitapi.resources.repository.entity.ObjetivoType;
import java.util.Date;
import java.util.UUID;

public abstract class UsuarioStrategy {

    private String nome;

    private String email;

    private String senha;

    private String personId = UUID.randomUUID().toString();

    private ObjetivoType objetivo;

    private Double altura;

    private Double peso;

    private Date dataNascimento;

    private FuncaoType funcao;

    private NivelType nivel;

    private Integer xp = 0;

    private Boolean logado = false;

    public UsuarioStrategy(String nome, String email, String senha, ObjetivoType objetivo, Double altura, Double peso, Date dataNascimento, FuncaoType funcao, NivelType nivel) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.objetivo = objetivo;
        this.altura = altura;
        this.peso = peso;
        this.dataNascimento = dataNascimento;
        this.funcao = funcao;
        this.nivel = nivel;
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

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
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

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public FuncaoType getFuncao() {
        return funcao;
    }

    public void setFuncao(FuncaoType funcao) {
        this.funcao = funcao;
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

    // TODO: implementar na sprint 2 public abstract List<Treino> findCatalogoTreino();
}

