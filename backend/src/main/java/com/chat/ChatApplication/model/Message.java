package com.chat.ChatApplication.model;

import jakarta.persistence.*;

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

    @Enumerated(EnumType.ORDINAL)
    private MessageType messageType;
}
