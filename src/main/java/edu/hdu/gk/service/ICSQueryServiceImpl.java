package edu.hdu.gk.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import edu.hdu.gk.dao.ICSDAO;
import edu.hdu.gk.utils.CommonUtil;
import edu.hdu.gk.utils.Config;

import org.springframework.stereotype.Service;

/**
 * @author: Keynes Zhang
 * @E-mail: 13757164035@163.com @time：2016年10月20日, 下午8:28:07
 * @annotation: 设备信息业务逻辑实现
 */

@Service("ICSQueryService")
public class ICSQueryServiceImpl implements ICSQueryService {
	
	@Resource(name = "ICSDAO")
	ICSDAO icsDAO;
	
	@Override
	public String query(String query, int page, int pageSize, String...fields)  {
		int queryPage = page <= 0 ? 1 : page;
		int queryPageSize = pageSize <= 0 ? 10 : pageSize;
		Map<String, String> queryMap = CommonUtil.getQueryMapFromQueryString(query);
		return icsDAO.find(queryMap, queryPage, queryPageSize, fields).toString();
	}

	@Override
	public String group(final String query, final List<String> groupBy, int limit, int sort) {
		int queryLimit = limit < 0 ? 10 : limit;
		Map<String, String> queryMap = CommonUtil.getQueryMapFromQueryString(query);
		List<String> by = new ArrayList<>();
		for(String group : groupBy) {
			if(Config.GroupMapping.containsKey(group)) {
				by.add(Config.GroupMapping.get(group));
			} else {
				throw new RuntimeException();
			}
		}
		return icsDAO.group(queryMap, by, queryLimit, sort).toString();
	}
	
	@Override
	public String group2(final String query, final List<String> groupBy, int limit, int sort) {
		int queryLimit = limit < 0 ? 10 : limit;
		Map<String, String> queryMap = CommonUtil.getQueryMapFromQueryString(query);
		List<String> by = new ArrayList<>();
		for(String group : groupBy) {
			if(Config.GroupMapping.containsKey(group)) {
				by.add(Config.GroupMapping.get(group));
			} else {
				throw new RuntimeException();
			}
		}
		return icsDAO.group2(queryMap, by, queryLimit, sort).toString();
	}

	@Override
	public String count(String query) {
		Map<String, String> queryMap = CommonUtil.getQueryMapFromQueryString(query);
		
		return icsDAO.count(queryMap).toString();
	}

	@Override
	public String host(String query) {
		Map<String, String> queryMap = CommonUtil.getQueryMapFromQueryString(query);
		queryMap.keySet().stream().filter(key -> !"ip_str".equals(key)).forEach(key -> queryMap.remove(key));
		return icsDAO.find(queryMap,1,100).toString();
	}

}
