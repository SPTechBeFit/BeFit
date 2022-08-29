package sptech.befitapi.application.entity.dieta;

import lombok.Data;
import lombok.ToString;

import java.util.List;

@Data
@ToString
public class Dieta {

    private String nome;
    private String descricao;
    private Integer ativo;
    private List<IngredientesDieta> ingredientesDietas;
}
