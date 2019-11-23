package pl.pw.edu.demo.dto;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class SingInRequest {
    @NotNull
    private String username;

    @NotNull
    private String password;

}
