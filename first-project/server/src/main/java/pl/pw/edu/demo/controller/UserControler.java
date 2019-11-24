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
import pl.pw.edu.demo.services.ValidTokensService;
import pl.pw.edu.demo.services.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
    ValidTokensService tokensService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signup")
    public ResponseEntity<?> singUpUser(@Valid @RequestBody SignUpRequest request){
        log.info("Request for sign up new user " + request.getUsername());

        User user = new User(request.getUsername(),passwordEncoder.encode(request.getPassword()),request.getEmail());

        userService.saveUser(user);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody SignInRequest loginRequest) {
        log.info("Request for sign in user: " + loginRequest.getUsername());
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateJwtToken(authentication);
        tokensService.addToken(jwt);
        return ResponseEntity.ok(new JwtResponse(jwt, loginRequest.getUsername()));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logoutUser( @RequestBody JwtResponse request ){
        String token = request.getToken();

        log.info("Token to logout" + token);

        tokensService.deleteToken(token);

        return ResponseEntity.ok("deleted");
    }

    @GetMapping("/checkUsername/{username}")
    public ResponseEntity<Boolean> getUser(@PathVariable String username) {
        if(username.equals("present")){
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.OK);
    }


}