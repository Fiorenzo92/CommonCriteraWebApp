package com.unicampania.ccwebapp.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@ToString
@Entity
@Table(name = "fcousernotes")
public class FcoUserNotes implements Serializable {


    @Getter
    @Setter
    @Column(name = "type")
    private String type;

    @Id
    @Column(name = "id")
    @Getter
    @Setter
    private String id;

    @Getter
    @Setter
    @Column(name = "para")
    private String para;

    @Getter
    @Setter
    @Column(name = "idf")
    private String idf;


}
