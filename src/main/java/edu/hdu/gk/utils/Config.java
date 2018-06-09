package edu.hdu.gk.utils;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author: Keynes Zhang
 * @E-mail: 13757164035@163.com @time：2016年10月18日, 下午10:29:11
 * @annotation: 定义相关常量
 */

public class Config {

	private Config(){}
	
	// 返回值常量
	public static final String Data = "data";
	public static final String Success = "success";

	// 数据库常量
	public static final String DBURL = "mongodb://localhost:27017";

	// 参数名常量
	public static final String Query = "query";
	public static final String Page = "page";
	public static final String PageSize = "pageSize"; 

	public static final String QueryKeyValueParameterReg;
	public static final String QueryBasicParameterReg = "\\s*(\"[\\s\\S]*?\"|[\\S]*)";
	
	public static final Map<String, String> Mapping = new HashMap<>();
	public static final Map<String, String> GroupMapping = new HashMap<>();
	
	static {
		Mapping.put("port", "port");
		Mapping.put("端口","port");
		Mapping.put("端口号", "port");
		
		Mapping.put("transport", "transport");
		Mapping.put("传输", "transport");
		Mapping.put("网络协议", "transport");
		
		Mapping.put("country", "location.country_code");
		Mapping.put("国家", "location.country_code");
		
		Mapping.put("countryName", "location.country_name");
		Mapping.put("国家名", "location.country_name");
		
		Mapping.put("city", "location.city");
		Mapping.put("城市", "location.city");
		
		Mapping.put("module", "module");
		Mapping.put("协议", "module");
		Mapping.put("设备协议", "module");
		
		Mapping.put("isp", "isp");
		Mapping.put("供应商", "isp");
		Mapping.put("服务提供商", "isp");
		
		Mapping.put("org", "org");
		Mapping.put("企业", "org");
		
		Mapping.put("ip", "ip_str");
		
		Mapping.put("data", "data");
		Mapping.put("tags", "tags");
		
		Mapping.put("server", "http.server");
		Mapping.put("服务", "http.server");
		
		QueryKeyValueParameterReg = Mapping.keySet().stream().collect(Collectors.joining("|","(",")\\s*:\\s*(\"[\\s\\S]*?\"|[\\S]*)"));
		
		GroupMapping.put("port", "port");
		GroupMapping.put("domains", "domains_row");
		GroupMapping.put("hostnames", "hostnames_row");
		GroupMapping.put("isp", "isp_row");
		GroupMapping.put("city", "location.city_row");
		GroupMapping.put("country", "location.country_name_row");
		GroupMapping.put("countryCode", "location.country_code");
		GroupMapping.put("module", "module_row");
		GroupMapping.put("org", "org_row");
		GroupMapping.put("os", "os_row");
		GroupMapping.put("product", "product_row");
		GroupMapping.put("tags", "tags");
		GroupMapping.put("server", "http.server_row");
	}
	
}
