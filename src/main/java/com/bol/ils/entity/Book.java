package com.bol.ils.entity;
import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="books")
public class Book extends Publication {
    @Column
    private String ISBN;

    // Define book and author relationship (many to many) (constraint to max 5 entries)
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @Size(min=1,max=5, message = "1 to 5 authors are allowed")
    @JoinTable(name = "books_authors",
    joinColumns = {
            @JoinColumn(name = "book_id", referencedColumnName = "id", nullable = false, updatable = false)},
            inverseJoinColumns = {
            @JoinColumn(name = "author_id",referencedColumnName = "id", nullable = false, updatable = false)
    })
   private Set<Author> authors = new HashSet<>();

    // Define book and publisher relationship (many to one)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "publisher_id", nullable = false)
    private Publisher publisher;
    // Define constructors
    public Book(){
    }

    public Book(String title, int yearOfPublication, int pages, int copies, String refCode, String field, String ISBN, Set<Author> authors, Publisher publisher) {
        super(title, yearOfPublication, pages, copies, refCode, field);
        this.ISBN = ISBN;
        this.authors = authors;
        this.publisher = publisher;
    }

    // Setters and Getters
    public String getISBN() {
        return ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }

    public Set<Author> getAuthors() {
        return authors;
    }

    public void setAuthors(Set<Author> authors) {
        this.authors = authors;
    }

    public Publisher getPublisher() {
        return publisher;
    }

    public void setPublisher(Publisher publisher) {
        this.publisher = publisher;
    }

    @Override
    public String toString() {
        return "Book{" +
                "ISBN='" + ISBN + '\'' +
                ", authors=" + authors +
                ", title='" + title + '\'' +
                ", yearOfPublication=" + yearOfPublication +
                '}';
    }
}
