package org.server.videochat.models;

import java.util.ArrayList;
import java.util.List;

public class Session {
    private String id;
    private List<String> participants = new ArrayList<>();

	public Session(String id) {
		this.id = id;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public List<String> getParticipants() {
		return participants;
	}
	public void setParticipants(List<String> participants) {
		this.participants = participants;
	}
}