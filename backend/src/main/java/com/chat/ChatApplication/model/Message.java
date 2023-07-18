package com.chat.ChatApplication.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "messages")
@Entity
public class Message {

    @Id
    private Long id;
    @Column
    private String message;
    @Column
    private String who;
    @Column
    private String room;
}
