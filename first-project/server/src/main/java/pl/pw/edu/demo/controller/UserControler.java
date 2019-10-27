package pl.pw.edu.demo.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.pw.edu.demo.dto.SaveUserRequest;

import javax.validation.Valid;


@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class UserControler {

    @PostMapping("/saveUser")
    public  ResponseEntity<?> saveUser(@Valid @RequestBody SaveUserRequest request){
        return new ResponseEntity<>(request,HttpStatus.CREATED);
    }

    @GetMapping("/checkUsername/{username}")
    public ResponseEntity<Boolean> getUser(@PathVariable String username) {
        if(username.equals("present")){
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.OK);
    }
}