package pl.pw.edu.demo.dto;

import java.util.Collection;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

@Getter
@Setter
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private String username;
    private Long expired;
    private Collection<? extends GrantedAuthority> authorities;

    public JwtResponse(String accessToken, String username) {
        this.token = accessToken;
        this.username = username;
    }

}
