package com.chat.ChatApplication.model;

public enum Room {
    BTC("BITCOIN"),
    ETH("ETHERIUM"),
    PEPE("PEPE"),
    PUMPETH("PUMP ETH"),
    SHIB("SHIBA");


    private String value;
    public String getValue() {
        return this.value;
    }
    private Room(String value) {
        this.value = value;
    }
}
