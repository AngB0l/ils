package com.bol.ils.repository;
import com.bol.ils.entity.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@CrossOrigin
public interface BookRepository extends CrudRepository<Book,Long>{
    List<Book> findAll();
}
