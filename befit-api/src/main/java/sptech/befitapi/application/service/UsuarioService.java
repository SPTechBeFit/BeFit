package sptech.befitapi.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sptech.befitapi.application.entity.*;
import sptech.befitapi.application.entity.strategy.StrategyXp;
import sptech.befitapi.application.entity.strategy.XpAvancado;
import sptech.befitapi.application.entity.strategy.XpIniciante;
import sptech.befitapi.application.entity.strategy.XpIntermediario;
import sptech.befitapi.resources.repository.UsuarioRepository;
import sptech.befitapi.resources.repository.entity.*;
import sptech.befitapi.resources.repository.entity.types.NivelType;

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

    public Usuario logout(String personId) {
            Usuario usuario = usuarioRepository.findByPersonId(personId);

            if(usuario == null || !usuario.getLogado()) {
                return null;
            }

            usuario.setLogado(false);

            usuarioRepository.save(usuario);

            return usuario;
    }

    public Usuario xp(String personId) {
        Usuario usuario = usuarioRepository.findByPersonId(personId);
        if(usuario == null || !usuario.getLogado()) {
            return null;
        }

        if (usuario.getNivel().equals(NivelType.INICIANTE)) {
            this.setStrategy(new XpIniciante());
        } else if (usuario.getNivel().equals(NivelType.INTERMEDIARIO)) {
            this.setStrategy(new XpIntermediario());
        } else if (usuario.getNivel().equals(NivelType.AVANCADO)) {
            this.setStrategy(new XpAvancado());
        }

        this.executeStrategy(usuario);

        usuarioRepository.save(usuario);

        return usuario;
    }

    private StrategyXp strategy;

    private void setStrategy(StrategyXp strategy){
        this.strategy = strategy;
    }

    private void executeStrategy(Usuario usuario){
        this.strategy.ganharXp(usuario);
    }
}
