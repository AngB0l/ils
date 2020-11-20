package com.bol.ils.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="journal")
public class Journal extends Publication{
//    TODO Add publisher
    @Column
    private String volume;
    @Column
    private String issue;
    @Column
    private String ISBN;

    public Journal() {
    }

    public Journal(String title, int yearOfPublication, int pages, int copies, String refCode, String field,
                   String volume, String issue, String ISBN) {
        super(title, yearOfPublication, pages, copies, refCode, field);
        this.volume = volume;
        this.issue = issue;
        this.ISBN = ISBN;
    }


}
