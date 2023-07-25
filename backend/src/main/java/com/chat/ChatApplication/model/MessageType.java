package com.chat.ChatApplication.model;

public enum MessageType {
    CHANNEL("ch"),
    ROOM("rm"),
    PERSONAL("pr");

    public final String label;

    private MessageType(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
