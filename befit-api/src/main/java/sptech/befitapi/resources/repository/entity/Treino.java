package sptech.befitapi.resources.repository.entity;

import javax.persistence.*;
import java.util.List;


@Entity
public class Treino {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String nome;
    private String descricao;
    private Integer ativo;

    @ManyToOne
    @JoinColumn(name = "FK_USUARIO")
    private Usuario usuario;

    @ManyToMany(mappedBy = "treinoFavorito")
    private List<Usuario> usuarios;

    @ManyToMany(mappedBy = "serie")
    private List<Exercicio> exercicios;

}
