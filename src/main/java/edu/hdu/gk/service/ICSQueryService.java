package edu.hdu.gk.service;

import java.util.List;

/**
 * @author: Keynes Zhang
 * @E-mail: 13757164035@163.com @time：2016年10月20日, 下午8:25:55
 * @annotation: 设备信息业务逻辑接口
 */

public interface ICSQueryService {
	
	String query(String query, int page, int pageSize, String...fields);

	String host(String query);
	
	String group(String query, List<String> groupBy, int limit, int sort);
	
	String group2(String query, List<String> groupBy, int limit, int sort);
	
	String count(String query);
	
}
