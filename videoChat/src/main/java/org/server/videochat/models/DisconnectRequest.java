package org.server.videochat.models;

public class DisconnectRequest {
	private String username;
	private String sessionId;

	public void setUsername(String username) {
		this.username = username;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	public String getUsername() {
		return username;
	}
	public String getSessionId() {
		return sessionId;
	}
}
