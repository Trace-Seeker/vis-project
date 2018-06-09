package edu.hdu.gk.service;

public interface ICSMapService {

	String earth(String query);

	String coordinate(String query, int size);

	public String coordinateArray(String query);
}
