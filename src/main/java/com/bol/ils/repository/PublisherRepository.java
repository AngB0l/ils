package com.bol.ils.repository;

import com.bol.ils.entity.Author;
import com.bol.ils.entity.Publisher;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PublisherRepository extends CrudRepository<Publisher,Long> {
    List<Publisher> findAll();
}
