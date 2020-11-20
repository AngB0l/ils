package com.bol.ils.repository;
import com.bol.ils.entity.Journal;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface JournalRepository extends CrudRepository<Journal,Long> {
    List<Journal> findAll();
}
