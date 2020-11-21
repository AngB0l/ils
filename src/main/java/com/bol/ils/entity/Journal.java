package com.bol.ils.entity;

import javax.persistence.*;

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
//    TODO Edit sql file
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "publisher_id", nullable = false)
    private Publisher publisher;

    public Journal() {
    }

    public Journal(String title, int yearOfPublication, int pages, int copies, String refCode, String field,
                   String volume, String issue, String ISBN, Publisher publisher) {
        super(title, yearOfPublication, pages, copies, refCode, field);
        this.volume = volume;
        this.issue = issue;
        this.ISBN = ISBN;
        this.publisher = publisher;
    }

    public String getVolume() {
        return volume;
    }

    public void setVolume(String volume) {
        this.volume = volume;
    }

    public String getIssue() {
        return issue;
    }

    public void setIssue(String issue) {
        this.issue = issue;
    }

    public String getISBN() {
        return ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }

    public Publisher getPublisher() {
        return publisher;
    }

    public void setPublisher(Publisher publisher) {
        this.publisher = publisher;
    }
}
