package pl.pw.edu.demo.controller;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.pw.edu.demo.dto.JwtResponse;
import pl.pw.edu.demo.dto.SignInRequest;
import pl.pw.edu.demo.dto.SignUpRequest;
import pl.pw.edu.demo.entity.User;
import pl.pw.edu.demo.security.jwt.JwtProvider;
import pl.pw.edu.demo.services.UserService;

import javax.validation.Valid;

@Log
@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class UserControler {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signup")
    public ResponseEntity<?> singUpUser(@Valid @RequestBody SignUpRequest request){
        log.info("Request for siging up new user " + request.getUsername());

        User user = new User(request.getUsername(),passwordEncoder.encode(request.getPassword()),request.getEmail());

        userService.saveUser(user);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody SignInRequest loginRequest) {
        log.info("impra jest tu: " + loginRequest.getPassword());
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        log.info("impra jest tu: " + loginRequest.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        log.info("impra jest tu: " + loginRequest.getPassword());
        String jwt = jwtProvider.generateJwtToken(authentication);
        return ResponseEntity.ok(new JwtResponse(jwt, loginRequest.getUsername()));
    }


}