package sptech.befitapi.resources.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sptech.befitapi.application.entity.Ingrediente;

@Repository
public interface IngredienteRepository extends JpaRepository<Ingrediente, Integer> {

}
