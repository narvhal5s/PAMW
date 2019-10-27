package pl.pw.edu.demo.controller;
import lombok.extern.java.Log;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class UserControler {

    @GetMapping("/checkUsername")
    public ResponseEntity<Boolean> getUser() {
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}