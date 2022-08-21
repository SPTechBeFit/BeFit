package sptech.befitapi.application.response;

import sptech.befitapi.application.entity.ValorNutricional;

import java.util.List;

public class ValorNutricionalResponse {

    private Double proteina;

    private Integer porcao;

    private Double lipidio;

    private Double carboidrato;

    private Double sodio;

    private Double caloria;

    private List<ValorNutricional> valorNutricionalCalculado;

    public ValorNutricionalResponse(Double proteina,
                                    Integer porcao,
                                    Double lipidio,
                                    Double carboidrato,
                                    Double sodio,
                                    Double caloria,
                                    List<ValorNutricional> valorNutricionalList) {
        this.proteina = proteina;
        this.porcao = porcao;
        this.lipidio = lipidio;
        this.carboidrato = carboidrato;
        this.sodio = sodio;
        this.caloria = caloria;
        this.valorNutricionalCalculado = valorNutricionalList;
    }

    public Double getProteina() {
        return proteina;
    }

    public void setProteina(Double proteina) {
        this.proteina = proteina;
    }

    public Integer getPorcao() {
        return porcao;
    }

    public void setPorcao(Integer porcao) {
        this.porcao = porcao;
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

    public List<ValorNutricional> getValorNutricionalCalculado() {
        return valorNutricionalCalculado;
    }

    public void setValorNutricionalCalculado(List<ValorNutricional> valorNutricionalCalculado) {
        this.valorNutricionalCalculado = valorNutricionalCalculado;
    }
}
