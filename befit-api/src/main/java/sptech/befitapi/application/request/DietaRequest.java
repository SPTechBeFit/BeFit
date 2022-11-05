package sptech.befitapi.application.request;

import lombok.Data;
import sptech.befitapi.application.entity.Dieta;
import sptech.befitapi.application.entity.IngredientesDieta;

import java.util.List;

@Data
public class DietaRequest {
    private Dieta dieta;
    private String personId;
    private List<IngredientesDieta> ingredientesDieta;
}
