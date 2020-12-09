package com.bol.ils.repository;
import com.bol.ils.entity.Thesis;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@CrossOrigin
public interface ThesisRepository extends CrudRepository<Thesis,Long> {
    List<Thesis> findAll();
}
