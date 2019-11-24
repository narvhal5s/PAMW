package pl.pw.edu.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "files")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FileName {

    public FileName(String name){
        this.filename = name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String filename;
}
