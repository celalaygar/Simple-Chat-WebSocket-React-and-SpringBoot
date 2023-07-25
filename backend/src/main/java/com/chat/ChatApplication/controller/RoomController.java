package com.chat.ChatApplication.controller;

import com.chat.ChatApplication.dto.RoomDto;
import com.chat.ChatApplication.model.Message;
import com.chat.ChatApplication.model.Room;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomController {


    @GetMapping("/all")
    public ResponseEntity<List<RoomDto>> getMessages() {

        List<Room> rooms= Arrays.asList(Room.values());
        ArrayList<RoomDto> list= new ArrayList<RoomDto>();
        rooms.forEach(room ->{
            RoomDto roleClass = new RoomDto(room, room.getValue());
            list.add(roleClass);
        });
        return ResponseEntity.ok(list);
    }
}
