package sptech.befitapi.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sptech.befitapi.application.entity.Login;
import sptech.befitapi.application.entity.Logout;
import sptech.befitapi.application.service.UsuarioService;
import sptech.befitapi.resources.repository.entity.Usuario;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Usuario>> usuarios() {
        List<Usuario> usuarios = usuarioService.usuarios();

        return (!usuarios.isEmpty()) ? ResponseEntity.status(HttpStatus.OK).body(usuarios) : ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    @PostMapping
    public ResponseEntity<Usuario> cadastrar(@RequestBody Usuario usuario) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.cadastrar(usuario));
    }

    @PatchMapping("/login")
    public ResponseEntity<Usuario> login(@RequestBody Login login) {

        Usuario usuario = usuarioService.login(login);

        return (usuario != null) ? ResponseEntity.status(HttpStatus.OK).body(usuario) : ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

    @PatchMapping("/logout")
    public ResponseEntity<Usuario> logout(@RequestBody Logout logout) {

        Usuario usuario = usuarioService.logout(logout);

        return (usuario != null) ? ResponseEntity.status(HttpStatus.OK).body(usuario) : ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
}
