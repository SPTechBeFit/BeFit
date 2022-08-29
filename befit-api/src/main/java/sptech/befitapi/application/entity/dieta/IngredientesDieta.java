package sptech.befitapi.application.entity.dieta;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class IngredientesDieta {

    private Double quantidade;
    private String nivel;
    private Ingrediente ingrediente;
}
