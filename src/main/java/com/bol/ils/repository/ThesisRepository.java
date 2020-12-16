package com.bol.ils.repository;
import com.bol.ils.entity.Thesis;
import org.springframework.data.repository.CrudRepository;
import java.util.List;


public interface  ThesisRepository extends CrudRepository<Thesis,Long> {
    List<Thesis> findAll();
}
