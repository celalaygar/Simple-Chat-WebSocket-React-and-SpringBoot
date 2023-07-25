package com.chat.ChatApplication.dto;

import com.chat.ChatApplication.model.Room;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomDto {
    private Room room;
    private String roomValue;
}
