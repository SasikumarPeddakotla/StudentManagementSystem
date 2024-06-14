package com.mySpringProjects.studentManagementSystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

/**
 * This annotation specifies that the class is an entity and is mapped to a database table.
 * In this case, the table name will be the same as the class name by default.
 */
@Entity
@Getter // Lombok annotation to automatically generate getter methods for all fields.
@Setter // Lombok annotation to automatically generate setter methods for all fields.
@AllArgsConstructor // Lombok annotation to generate a constructor with parameters for all fields.
@NoArgsConstructor // Lombok annotation to generate a no-argument constructor.
public class Student {

    @Id  // To make id as primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // To make the id auto-increment
    private Long id;
    private String firstname;
    private String lastname;

    @NaturalId(mutable = true)    //To make the email unique key. By default it can not be modified so we use mutable param
    private String email;
    private String department;
}
