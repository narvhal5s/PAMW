package pl.pw.edu.demo.security.jwt;

import io.jsonwebtoken.*;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;


@Component
public class JwtProvider {

    private String jwtSecret = "super_sekretny_sekret";

    private int jwtExpiration = 300000;

    public String generateJwtToken(Authentication authentication) {

        return Jwts.builder().setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpiration ))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public Boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {

        } catch (MalformedJwtException e) {

        } catch (UnsupportedJwtException e) {

        } catch (IllegalArgumentException e) {
        }

        return false;
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser().setSigningKey(jwtSecret)
                .parseClaimsJws(token)
                .getBody().getSubject();
    }
}
