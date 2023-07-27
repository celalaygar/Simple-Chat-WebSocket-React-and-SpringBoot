package com.chat.ChatApplication.controller;


import com.chat.ChatApplication.dto.MessageDto;
import com.chat.ChatApplication.model.Message;
import com.chat.ChatApplication.service.MessageService;
import com.chat.ChatApplication.util.WebSocketUMessageUtil;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/message")
@RequiredArgsConstructor
public class MessageSocketController {
    Logger logger = LoggerFactory.getLogger(MessageSocketController.class);


    private final MessageService messageService;

    @MessageMapping(WebSocketUMessageUtil.ADD_MESSAGE_END_POINT)
    @SendTo("/topic/add-user")
    public MessageDto send(@Payload Message message) {
        message.setSystemNumber(UUID.randomUUID().toString());
        if(StringUtils.isEmpty(message.getSystemNumber())){
            logger.error("Message system number is not added");
        }else{
            logger.info("Message system number is added");
        }
        System.out.println(message);
        logger.info("Message is added");
        return new MessageDto(message);
    }
}
