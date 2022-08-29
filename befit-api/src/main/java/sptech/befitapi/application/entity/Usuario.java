package sptech.befitapi.application.entity;

import lombok.Data;
import lombok.ToString;
import sptech.befitapi.application.entity.dieta.Dieta;
import sptech.befitapi.application.entity.dieta.DietaFavorita;
import sptech.befitapi.application.entity.treino.Treino;
import sptech.befitapi.application.entity.treino.TreinoFavorito;

import java.util.Date;
import java.util.List;

@Data
@ToString
public class Usuario {

    private String nome;
    private String email;
    private String senha;
    private String objetivotype;
    private Double altrua;
    private Double peso;
    private Date dataNascimento;
    private String funcao;
    private String nivel;
    private List<Treino> treinos;
    private TreinoFavorito treinoFavorito;
    private List<Dieta> dietas;
    private DietaFavorita dietaFavorita;
    private Integer xp;
}
