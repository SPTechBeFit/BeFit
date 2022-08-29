package sptech.befitapi.resources.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sptech.befitapi.application.entity.treino.Treino;
import sptech.befitapi.resources.repository.entity.NivelType;
import sptech.befitapi.resources.repository.entity.Usuario;

import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Usuario findUsuarioByEmailAndSenha(String email, String senha);

    Usuario findByPersonId(String personId);

    List<Treino> findTreinoByNivel(String nivel);

}
