package sptech.befitapi.resources.repository.entity;

import lombok.Data;
import sptech.befitapi.application.entity.dieta.Dieta;
import sptech.befitapi.application.entity.treino.Treino;
import sptech.befitapi.resources.repository.entity.types.FuncaoType;
import sptech.befitapi.resources.repository.entity.types.NivelType;
import sptech.befitapi.resources.repository.entity.types.ObjetivoType;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    private String nome;

    private String email;

    private String senha;

    private String personId = UUID.randomUUID().toString();

    @Enumerated(EnumType.STRING)
    private ObjetivoType objetivo;

    private Double altura;

    private Double peso;

    @Temporal(TemporalType.DATE)
    private Date dataNascimento;

    @Enumerated(EnumType.STRING)
    private FuncaoType funcao;

    @Enumerated(EnumType.STRING)
    private NivelType nivel;

    private Integer xp = 0;

    private Boolean logado = false;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_USUARIO")
    private List<Dieta> dietas;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_USUARIO")
    private List<Treino> treinos;

    @ManyToMany
    @JoinTable(name = "TREINO_FAVORITO",
    joinColumns = @JoinColumn (name = "FK_USUARIO"),
    inverseJoinColumns = @JoinColumn(name = "FK_TREINO"))
    private List<Treino> treinoFavorito;

    @ManyToMany
    @JoinTable(name = "DIETA_FAVORITO",
            joinColumns = @JoinColumn (name = "FK_USUARIO"),
            inverseJoinColumns = @JoinColumn(name = "FK_DIETA"))
    private List<Dieta> dietaFavorita;


    public NivelType getNivel() {
        return nivel;
    }

    public void setNivel(NivelType nivel) {
        this.nivel = nivel;
    }

    public Integer getXp() {
        return xp;
    }

    public void setXp(Integer xp) {
        this.xp = xp;
    }

    public Boolean getLogado() {
        return logado;
    }

    public void setLogado(Boolean logado) {
        this.logado = logado;
    }
}
