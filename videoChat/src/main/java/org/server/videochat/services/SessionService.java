package org.server.videochat.services;


import org.server.videochat.models.Session;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
@Service
public class SessionService {
	private final Map<String, Session> sessions = new ConcurrentHashMap<>();

	public String createSession(){
		String sessionId = UUID.randomUUID().toString();
		sessions.put(sessionId, new Session(sessionId));
		return sessionId;
	}
	 public Session getSession(String sessionId) {
        return sessions.get(sessionId);
    }

    public void removeSession(String sessionId) {
        sessions.remove(sessionId);
    }
}
