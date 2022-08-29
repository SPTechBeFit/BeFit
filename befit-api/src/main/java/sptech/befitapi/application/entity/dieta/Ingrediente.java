package sptech.befitapi.application.entity.dieta;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@ToString
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
    private Integer ativo;
}
