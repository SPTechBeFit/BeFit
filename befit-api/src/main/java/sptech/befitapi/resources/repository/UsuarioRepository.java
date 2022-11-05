package sptech.befitapi.resources.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sptech.befitapi.application.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Usuario findUsuarioByEmailAndSenha(String email, String senha);

    Usuario findByPersonId(String personId);

}
