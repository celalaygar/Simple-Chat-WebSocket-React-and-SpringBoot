package com.chat.ChatApplication.repo;

import com.chat.ChatApplication.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}
