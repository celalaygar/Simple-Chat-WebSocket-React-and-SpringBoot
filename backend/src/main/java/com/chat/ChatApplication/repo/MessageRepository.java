package com.chat.ChatApplication.repo;

import com.chat.ChatApplication.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {

    List<Message> findAllByRoom(String room);
}
