package org.server.videochat.controllers;

import org.server.videochat.models.ConnectRequest;
import org.server.videochat.models.DisconnectRequest;
import org.server.videochat.models.Session;
import org.server.videochat.models.SessionMessage;
import org.server.videochat.services.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class VideoChatController {

    @Autowired
    private SessionService sessionService;

    @MessageMapping("/connect")
    @SendTo("/topic/session")
    public SessionMessage connect(@Payload ConnectRequest request) {
        String sessionId = sessionService.createSession();
        Session session = sessionService.getSession(sessionId);
        session.getParticipants().add(request.getUsername());
        return new SessionMessage(sessionId, session.getParticipants());
    }

    @MessageMapping("/disconnect")
    @SendTo("/topic/session")
    public SessionMessage disconnect(@Payload DisconnectRequest request) {
        Session session = sessionService.getSession(request.getSessionId());
        session.getParticipants().remove(request.getUsername());
        if (session.getParticipants().isEmpty()) {
            sessionService.removeSession(request.getSessionId());
        }
        return new SessionMessage(request.getSessionId(), session.getParticipants());
    }
}
