package sptech.befitapi.application.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sptech.befitapi.application.entity.*;
import sptech.befitapi.application.entity.strategy.XpStrategy;
import sptech.befitapi.application.entity.strategy.XpAvancadoStrategy;
import sptech.befitapi.application.entity.strategy.XpInicianteStrategy;
import sptech.befitapi.application.entity.strategy.XpIntermediarioStrategy;
import sptech.befitapi.resources.repository.UsuarioRepository;
import sptech.befitapi.resources.repository.entity.*;
import sptech.befitapi.resources.repository.entity.types.NivelType;

import java.util.List;


@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    private XpStrategy strategy;

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
            this.setStrategy(new XpInicianteStrategy());
        } else if (usuario.getNivel().equals(NivelType.INTERMEDIARIO)) {
            this.setStrategy(new XpIntermediarioStrategy());
        } else if (usuario.getNivel().equals(NivelType.AVANCADO)) {
            this.setStrategy(new XpAvancadoStrategy());
        }

        this.executeStrategy(usuario);

        usuarioRepository.save(usuario);

        return usuario;
    }

    private void setStrategy(XpStrategy strategy){
        this.strategy = strategy;
    }

    private void executeStrategy(Usuario usuario){
        this.strategy.ganharXp(usuario);
    }
}
