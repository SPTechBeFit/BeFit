package sptech.befitapi.application.entity.dieta;

import lombok.Data;
import lombok.ToString;
import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@ToString
@Entity
public class DietaFavorita {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Temporal(TemporalType.DATE)
    private Date criadoEm;

    private Integer diaSequencial;

    @Temporal(TemporalType.DATE)
    private Date atualizadoEm;

}
