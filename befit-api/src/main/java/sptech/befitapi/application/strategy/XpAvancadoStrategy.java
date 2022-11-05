package sptech.befitapi.application.strategy;

import sptech.befitapi.application.entity.Usuario;

public class XpAvancadoStrategy implements XpStrategy {


    @Override
    public void ganharXp(Usuario usuario) {
        usuario.setXp(usuario.getXp() + 200);
    }
}
