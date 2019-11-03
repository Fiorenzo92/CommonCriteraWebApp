package com.unicampania.ccwebapp.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@ToString
@Entity
@Table(name="fcohierarchical")
public class FcoHierarchical {

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
