package sptech.befitapi.resources.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sptech.befitapi.application.entity.Treino;

import java.util.List;

public interface TreinosRepository extends JpaRepository<Treino, Integer> {

    List<Treino> findAllByCriadorId(Integer id);
}
