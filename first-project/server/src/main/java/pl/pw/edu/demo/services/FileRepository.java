package pl.pw.edu.demo.services;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.pw.edu.demo.entity.FileName;

@Repository
public interface FileRepository extends JpaRepository<FileName, Long> {

}
