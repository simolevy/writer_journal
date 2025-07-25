package com.example.writerjournal;
import jakarta.persistence.*;



@Entity
@Table(name = "entry") // ← this ensures correct table name
    public class Entry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subject;
    private String body;
    private String date; // or you can auto-set this

    public Entry(){}

    public Entry(String subject, String body, String date) {
        this.subject = subject;
        this.body = body;
        this.date = date;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject){
        this.subject = subject;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body){
        this.body = body;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date){
        this.date = date;
    }

    @Override
    public String toString() {
        return "Entry [subject=" + subject + ", body=" + body +
                ", date=" + date +"]";
    }



    
}
