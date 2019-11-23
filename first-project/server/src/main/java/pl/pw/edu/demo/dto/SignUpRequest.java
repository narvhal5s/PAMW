package pl.pw.edu.demo.dto;


import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class SignUpRequest {

    @NotNull
    private String username;

    @NotNull
    private String password;

    @NotNull
    private String email;
}
