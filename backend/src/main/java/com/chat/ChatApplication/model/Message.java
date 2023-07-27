package com.chat.ChatApplication.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name = "messages")
@Entity
public class Message {

    @Id
    private Long id;
    @Column
    private String systemNumber;
    @Column
    private String message;
    @Column
    private String who;
    @Column
    private Room room;

    @Enumerated(EnumType.ORDINAL)
    private MessageType messageType;
}
