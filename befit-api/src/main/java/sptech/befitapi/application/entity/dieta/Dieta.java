package sptech.befitapi.application.entity.dieta;

import lombok.Data;
import lombok.ToString;
import sptech.befitapi.resources.repository.entity.Usuario;

import javax.persistence.*;
import java.util.List;

@Data
@ToString
@Entity
public class Dieta {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "FK_USUARIO")
    private Usuario usuario;

    private String nome;
    private String descricao;
    private Integer ativo;

    @ManyToMany(mappedBy = "dietaFavorita")
    private List<Usuario> usuarios;

    @ManyToMany(mappedBy = "ingredienteDieta")
    private List<Ingrediente> ingredientes;

}
