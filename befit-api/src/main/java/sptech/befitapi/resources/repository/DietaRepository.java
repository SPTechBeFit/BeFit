package sptech.befitapi.resources.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sptech.befitapi.application.entity.Dieta;

@Repository
public interface DietaRepository extends JpaRepository<Dieta, Integer> {
}
