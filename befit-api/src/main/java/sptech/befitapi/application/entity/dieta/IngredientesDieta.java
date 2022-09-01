package sptech.befitapi.application.entity.dieta;

import lombok.Data;
import lombok.ToString;
import sptech.befitapi.resources.repository.entity.NivelType;

import javax.persistence.*;

@Data
@ToString
@Entity
public class IngredientesDieta {


    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private Double quantidade;

    @Enumerated(EnumType.STRING)
    private NivelType nivel;

}
