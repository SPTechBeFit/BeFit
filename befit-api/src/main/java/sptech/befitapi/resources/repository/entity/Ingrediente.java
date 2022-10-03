package sptech.befitapi.resources.repository.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Ingrediente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nome;
    private Integer porcao;
    private Double proteina;
    private Double lipidio;
    private Double carboidrato;
    private Double sodio;
    private Double caloria;
    private Boolean ativo = true;

    @ManyToMany
    @JoinTable(name = "INGREDIENTE_DIETA",
            joinColumns = @JoinColumn (name = "FK_INGREDIENTE"),
            inverseJoinColumns = @JoinColumn(name = "FK_DIETA"))
    private List<Dieta> ingredienteDieta;

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

    public Integer getPorcao() {
        return porcao;
    }

    public void setPorcao(Integer porcao) {
        this.porcao = porcao;
    }

    public Double getProteina() {
        return proteina;
    }

    public void setProteina(Double proteina) {
        this.proteina = proteina;
    }

    public Double getLipidio() {
        return lipidio;
    }

    public void setLipidio(Double lipidio) {
        this.lipidio = lipidio;
    }

    public Double getCarboidrato() {
        return carboidrato;
    }

    public void setCarboidrato(Double carboidrato) {
        this.carboidrato = carboidrato;
    }

    public Double getSodio() {
        return sodio;
    }

    public void setSodio(Double sodio) {
        this.sodio = sodio;
    }

    public Double getCaloria() {
        return caloria;
    }

    public void setCaloria(Double caloria) {
        this.caloria = caloria;
    }

    public Boolean getAtivo() {
        return ativo;
    }

    public void setAtivo(Boolean ativo) {
        this.ativo = ativo;
    }
}
