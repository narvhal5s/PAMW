package pl.pw.edu.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@AllArgsConstructor
public class AllFilesResponse {

    @NotNull
    private List<String> filesLinks;
}
