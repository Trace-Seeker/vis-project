package edu.hdu.gk.service;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import edu.hdu.gk.dao.MapDAO;
import edu.hdu.gk.utils.CommonUtil;

@Service("ICSMapService")
public class ICSMapServiceImpl implements ICSMapService {

	@Resource(name = "MapDAO")
	MapDAO mapDAO;
	
	@Override
	public String earth(String query) {
		Map<String, String> queryMap = CommonUtil.getQueryMapFromQueryString(query);
		return mapDAO.getEarth(queryMap).toString();
	}

	@Override
	public String coordinate(String query, int size) {
		Map<String, String> queryMap = CommonUtil.getQueryMapFromQueryString(query);
		if(size > 10000) {
			throw new RuntimeException();
		}
		return mapDAO.getCoordinate(queryMap, size).toString();
	}
	
	@Override
	public String coordinateArray(String query) {
		Map<String, String> queryMap = CommonUtil.getQueryMapFromQueryString(query);
		return mapDAO.getCoordinateArray(queryMap).toString();
	}

}
