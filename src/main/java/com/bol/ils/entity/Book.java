package com.bol.ils.entity;
import javax.persistence.*;

@Entity
@Table(name="books")
public class Book extends Publication {
    @Column
    private String ISBN;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "author_id", nullable = false)
    private Author author;

    // Define constructors
    public Book(){
    }

    public Book(String title, int yearOfPublication, int pages, int copies, String refCode, String field, String ISBN,
                Author author) {
        super(title, yearOfPublication, pages, copies, refCode, field);
        this.ISBN = ISBN;
        this.author = author;
    }

    // Setters and Getters
    public String getISBN() {
        return ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }
}
