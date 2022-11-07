package sptech.befitapi.resources.repository.entity;

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
    private String imagem;
    private Boolean ativo = true;

    public Exercicio(String nome, String descricao, String imagem) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
    }

    public Exercicio(Integer id, String nome, String descricao, String imagem, Boolean ativo) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.ativo = ativo;
    }

    public Exercicio(Integer id) {
        this.id = id;
    }
}
