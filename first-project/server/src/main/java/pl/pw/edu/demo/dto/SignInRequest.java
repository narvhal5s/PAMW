package pl.pw.edu.demo.dto;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class SignInRequest {
    @NotNull
    private String username;

    @NotNull
    private String password;

}
