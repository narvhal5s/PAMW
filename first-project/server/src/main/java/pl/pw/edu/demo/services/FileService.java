package pl.pw.edu.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.pw.edu.demo.entity.FileName;

import java.util.ArrayList;
import java.util.List;

@Service
public class FileService {

    @Autowired
    FileRepository fileRepository;

    public void addFile(FileName file){
        fileRepository.save(file);
    }

    public List<String> getAllFiles(){
        ArrayList<String> results = new ArrayList<>();
        List<FileName> list =fileRepository.findAll();
        for (FileName file:list) {
            results.add(file.getFilename());
        }
        return results;
    }

}
