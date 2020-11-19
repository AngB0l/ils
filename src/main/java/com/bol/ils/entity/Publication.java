package com.bol.ils.entity;
import javax.persistence.*;

@MappedSuperclass
public abstract class Publication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
    @Column
    protected String title;
    @Column
    protected int yearOfPublication;
    @Column
    protected int pages;
    @Column
    protected int copies;
    @Column
    protected String refCode;
    @Column
    protected String field;


    public Publication(){
    }
    public Publication(String title, int yearOfPublication, int pages, int copies, String refCode, String field) {
        this.title = title;
        this.yearOfPublication = yearOfPublication;
        this.pages = pages;
        this.copies = copies;
        this.refCode = refCode;
        this.field = field;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYearOfPublication() {
        return yearOfPublication;
    }

    public void setYearOfPublication(int yearOfPublication) {
        this.yearOfPublication = yearOfPublication;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public int getCopies() {
        return copies;
    }

    public void setCopies(int copies) {
        this.copies = copies;
    }

    public String getRefCode() {
        return refCode;
    }

    public void setRefCode(String refCode) {
        this.refCode = refCode;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }
}
