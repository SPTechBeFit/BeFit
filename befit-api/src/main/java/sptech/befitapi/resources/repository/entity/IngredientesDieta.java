package sptech.befitapi.resources.repository.entity;

import lombok.Data;
import lombok.ToString;
import sptech.befitapi.resources.repository.entity.types.NivelType;

import javax.persistence.*;

@Data
@ToString
public class IngredientesDieta {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private Double quantidade;

    @Enumerated(EnumType.STRING)
    private NivelType nivel;


}
