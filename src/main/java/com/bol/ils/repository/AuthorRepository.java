package com.bol.ils.repository;
import com.bol.ils.entity.Author;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
public interface AuthorRepository extends CrudRepository<Author, Long> {
    List<Author> findByLastName(String lastName);
    List<Author> findAll();

}
