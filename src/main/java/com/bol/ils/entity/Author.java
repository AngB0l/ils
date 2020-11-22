package com.bol.ils.entity;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.Email;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="authors")
public class Author implements Serializable{

    //define fields
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String firstName;

    private String lastName;

    @Email(message = "Please enter a valid email")
    private String email;

    private Date dob;

    private String about;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinTable(name = "author_publisher",
    joinColumns = {
           @JoinColumn(name="author_id", referencedColumnName = "id", nullable = false, updatable = false)},
    inverseJoinColumns = {
            @JoinColumn(name = "publisher_id", referencedColumnName = "id", nullable = false, updatable = false)})

    private Set<Publisher> publishers = new HashSet<>();

//    // Define book and author relationship (many to many)
//    @ManyToMany(mappedBy = "authors", fetch = FetchType.LAZY)
//    private Set<Book> books = new HashSet<>();
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinTable(name = "books_authors",
            joinColumns = {
                    @JoinColumn(name = "book_id", referencedColumnName = "id", nullable = false, updatable = false)},
            inverseJoinColumns = {
                    @JoinColumn(name = "author_id",referencedColumnName = "id", nullable = false, updatable = false)
            })
    private Set<Book> books = new HashSet<>();

    // Define constructors
    public Author(){
    }

    public Author(Long id, String firstName, String lastName, @Email(message = "Please enter a valid email") String email, Date dob, String about, Set<Publisher> publishers, Set<Book> books) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.about = about;
        this.publishers = publishers;
        this.books = books;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public Set<Publisher> getPublishers() {
        return publishers;
    }

    public void setPublishers(Set<Publisher> publishers) {
        this.publishers = publishers;
    }

    public Set<Book> getBooks() {
        return books;
    }

    public void setBooks(Set<Book> books) {
        this.books = books;
    }

    // Override toString method
    @Override
    public String toString() {
        return "Author{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
