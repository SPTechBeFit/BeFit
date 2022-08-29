package sptech.befitapi.application.entity.dieta;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Ingrediente {

    private String nome;
    private Integer porcao;
    private Double proteina;
    private Double lipidio;
    private Double carboidrato;
    private Double sodio;
    private Double caloria;
    private Integer ativo;
}
