package com.bol.ils.repository;
import com.bol.ils.entity.Book;
import org.springframework.data.repository.CrudRepository;
import java.util.List;


public interface BookRepository extends CrudRepository<Book,Long>{
    List<Book> findAll();
}
