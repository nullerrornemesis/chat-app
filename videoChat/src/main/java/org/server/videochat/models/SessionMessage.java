package org.server.videochat.models;

import java.util.List;

public class SessionMessage {
	private String sessionId;
	private List<String> participants;
	public SessionMessage(String sessionId, List<String> participants) {
		this.sessionId = sessionId;
	}
	public String getSessionId() {
		return sessionId;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
}
