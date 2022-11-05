package sptech.befitapi.application.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Exercicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    private String descricao;


    private Boolean ativo = true;
}
