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
@Table(name="fcodependencies")
public class FcoDependencies implements Serializable {

    @Id
    @Getter
    @Setter
    @Column(name = "fcomponent")
    private String fcomponent;


    @Getter
    @Setter
    @Column(name = "idf")
    private String idf;

}
