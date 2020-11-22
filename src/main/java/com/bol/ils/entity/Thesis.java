package com.bol.ils.entity;
import javax.persistence.*;
import javax.validation.constraints.Pattern;

@Entity
@Table(name="thesis")
public class Thesis extends Publication{
    @Column
    private String supervisingProfessor;
    @Column
    @Pattern(regexp = "Bachelor thesis|Master thesis|PhD thesis" , message = "Please select on of the valid options")
    private String type;
    @Column
    private String department;
    @Column
    private String university;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "author_id", nullable = false)
    private Author author;

    //define constructors
    public Thesis() {
    }

    public Thesis(String title, int yearOfPublication, int pages, int copies, String refCode, String field,
                  String supervisingProfessor, String type, String department, String university, Author author) {
        super(title, yearOfPublication, pages, copies, refCode, field);
        this.supervisingProfessor = supervisingProfessor;
        this.type = type;
        this.department = department;
        this.university = university;
        this.author = author;
    }

    // Setters and Getters
    public String getSupervisingProfessor() {
        return supervisingProfessor;
    }

    public void setSupervisingProfessor(String supervisingProfessor) {
        this.supervisingProfessor = supervisingProfessor;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    // Override toString method
    @Override
    public String toString() {
        return "Thesis{" +
                ", title='" + title + '\'' +
                ", author=" + author +
                "type='" + type + '\'' +
                ", university='" + university + '\'' +
                ", department='" + department + '\'' +
                ", yearOfPublication=" + yearOfPublication +
                '}';
    }
}
