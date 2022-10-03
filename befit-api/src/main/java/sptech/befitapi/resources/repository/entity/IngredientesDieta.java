package sptech.befitapi.resources.repository.entity;

import lombok.Data;
import lombok.ToString;
import sptech.befitapi.resources.repository.entity.types.NivelType;

import javax.persistence.*;

@Data
@ToString
public class IngredientesDieta {


    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    @OneToMany(mappedBy="Dieta")
    private Integer dietaId;

    @OneToMany(mappedBy="Ingrediente")
    private Integer ingredienteId;

    private Double quantidade;



}
