package com.bol.ils.repository;
import com.bol.ils.entity.Publisher;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@CrossOrigin
public interface PublisherRepository extends CrudRepository<Publisher,Long> {
    List<Publisher> findAll();
}
