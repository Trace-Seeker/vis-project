package edu.hdu.gk.dao;

import java.util.Map;

import org.json.JSONObject;

public interface MapDAO {
	JSONObject getEarth(Map<String, String> queryMap);
	
	JSONObject getCoordinate(Map<String, String> queryMap, int size);

	JSONObject getCoordinateArray(Map<String, String> queryMap);
}
