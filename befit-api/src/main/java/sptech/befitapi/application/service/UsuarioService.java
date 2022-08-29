package sptech.befitapi.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sptech.befitapi.application.entity.Login;
import sptech.befitapi.application.entity.Logout;
import sptech.befitapi.application.entity.treino.Treino;
import sptech.befitapi.resources.repository.UsuarioRepository;
import sptech.befitapi.resources.repository.entity.NivelType;
import sptech.befitapi.resources.repository.entity.Usuario;

import java.util.List;


@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> usuarios(){
            return usuarioRepository.findAll();
    }

    public Usuario cadastrar(Usuario usuario) {
            usuarioRepository.save(usuario);
            return usuario;
    }

    public Usuario login(Login login) {
            Usuario usuario = usuarioRepository.findUsuarioByEmailAndSenha(login.getEmail(), login.getSenha());

            if(usuario == null || usuario.getLogado()) {
                return null;
            }

            usuario.setLogado(true);

            usuarioRepository.save(usuario);

            return usuario;

    }

    public Usuario logout(Logout logout) {
            Usuario usuario = usuarioRepository.findByPersonId(logout.getPersonId());

            if(usuario == null || !usuario.getLogado()) {
                return null;
            }

            usuario.setLogado(false);

            usuarioRepository.save(usuario);

            return usuario;
    }

    public List<Treino> obterTreinoStratergy(Login login){

        Usuario usuario = usuarioRepository.findUsuarioByEmailAndSenha(login.getEmail(), login.getSenha());

        NivelType nivelType = NivelType.valueOf(usuario.getNivel().toString());

        return   nivelType.obterTreino();
    }

}
