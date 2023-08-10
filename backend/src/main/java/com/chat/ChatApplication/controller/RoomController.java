package com.chat.ChatApplication.controller;

import com.chat.ChatApplication.dto.RoomDto;
import com.chat.ChatApplication.model.Room;
import com.chat.ChatApplication.util.PathUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(PathUtil.ROOM)
public class RoomController {


    @GetMapping(PathUtil.GET_ALL)
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
