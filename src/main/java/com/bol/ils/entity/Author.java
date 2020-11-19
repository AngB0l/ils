package com.bol.ils.entity;
import javax.validation.constraints.Email;
import javax.persistence.*;
import java.io.Serializable;
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

    private String dob;

    private String about;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinTable(name = "author_publisher",
    joinColumns = {
           @JoinColumn(name="author_id", referencedColumnName = "id", nullable = false, updatable = false)},
    inverseJoinColumns = {
            @JoinColumn(name = "publisher_id", referencedColumnName = "id", nullable = false, updatable = false)})

    private Set<Publisher> publishers = new HashSet<>();

    // Define constructors
    public Author(){
    }

    public Author(String firstName, String lastName, @Email(message = "Please enter a valid email") String email, String dob, String about, Set<Publisher> publishers) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.about = about;
        this.publishers = publishers;
    }

    // Setters and Getters
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

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
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
