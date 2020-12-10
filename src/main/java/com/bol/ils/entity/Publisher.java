package com.bol.ils.entity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

// there was an unknown property  in the JSON String while deserializing. Added @JsonIgnoreProperties to ignore.
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name="publishers")
public class Publisher implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String street;
    private String city;

    @ManyToMany(mappedBy = "publishers", fetch = FetchType.LAZY)
    private Set<Author> authors = new HashSet<>();

    @OneToMany(mappedBy = "publisher", fetch = FetchType.LAZY)
    private Set<Journal> journals = new HashSet<>();

    // Define book and publisher relationship (many to one)
    @JsonBackReference
    @OneToMany(mappedBy = "publisher", fetch = FetchType.LAZY)
    private Set<Book> books;

    public Publisher(){
    }

    public Publisher(long id, String name, String street, String city, Set<Author> authors, Set<Journal> journals, Set<Book> books) {
        this.id = id;
        this.name = name;
        this.street = street;
        this.city = city;
        this.authors = authors;
        this.journals = journals;
        this.books = books;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Set<Author> getAuthors() {
        return authors;
    }

    public void setAuthors(Set<Author> authors) {
        this.authors = authors;
    }

    public Set<Journal> getJournals() {
        return journals;
    }

    public void setJournals(Set<Journal> journals) {
        this.journals = journals;
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
        return "Publisher{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
