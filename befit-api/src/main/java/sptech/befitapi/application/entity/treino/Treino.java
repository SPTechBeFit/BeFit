package sptech.befitapi.application.entity.treino;

import lombok.Data;
import sptech.befitapi.resources.repository.entity.Usuario;

import javax.persistence.*;
import java.util.List;

@Data
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
