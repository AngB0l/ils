package com.bol.ils.repository;
import com.bol.ils.entity.Journal;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@CrossOrigin
public interface JournalRepository extends CrudRepository<Journal,Long> {
    List<Journal> findAll();
}
