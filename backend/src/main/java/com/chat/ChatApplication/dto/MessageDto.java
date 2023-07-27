package com.chat.ChatApplication.dto;

import com.chat.ChatApplication.model.Message;
import com.chat.ChatApplication.model.MessageType;
import com.chat.ChatApplication.model.Room;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageDto {

    private Long id;
    private String systemNumber;
    private String message;
    private String who;
    private Room room;
    private MessageType messageType;

    public MessageDto(Message message){
        this.id = message.getId();
        this.systemNumber = message.getSystemNumber();
        this.message = message.getMessage();
        this.who = message.getWho();
        this.room = message.getRoom();
        this.messageType = message.getMessageType();
    }
}
