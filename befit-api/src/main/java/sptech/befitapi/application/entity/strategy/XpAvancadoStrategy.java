package sptech.befitapi.application.entity.strategy;

import sptech.befitapi.resources.repository.entity.Usuario;

public class XpAvancadoStrategy implements XpStrategy {


    @Override
    public void ganharXp(Usuario usuario) {
        usuario.setXp(usuario.getXp() + 200);
    }
}
