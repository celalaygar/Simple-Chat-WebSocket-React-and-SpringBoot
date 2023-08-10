package com.chat.ChatApplication.controller;


import com.chat.ChatApplication.model.Message;
import com.chat.ChatApplication.service.MessageService;
import com.chat.ChatApplication.util.PathUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(PathUtil.MESSAGE)
@RequiredArgsConstructor
public class MessageController {


    private final MessageService messageService;

    @GetMapping("/{room}")
    public ResponseEntity<List<Message>> getMessages(@PathVariable String room) {
        return ResponseEntity.ok(messageService.getMessages(room));
    }



}
