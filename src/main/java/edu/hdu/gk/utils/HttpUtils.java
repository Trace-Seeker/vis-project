package edu.hdu.gk.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;


/**
 * @author: Keynes Zhang
 * @E-mail: 13757164035@163.com @time：2016年10月2日, 下午5:11:17
 * @annotation: http相关工具类
 */

public class HttpUtils {

	private HttpUtils() {}

	/**
	 * @param query 查询参数 - 例如：port:102 country:CN basic
	 * @return key-value 类型的map
	 */
	public static Map<String, String> getQueryCriteria(final String query) {
		Map<String, String> queryMap = new HashMap<>();
		// 构建提取key:value 类型的查询关键词的pattern
		Pattern patternKeyValue = Pattern.compile(Config.QueryKeyValueParameterReg);
		Matcher matcherKeyValue = patternKeyValue.matcher(query);
		try {
			while(matcherKeyValue.find()) {
	            queryMap.put(matcherKeyValue.group(1), matcherKeyValue.group(2));
	        }
		} catch(Exception e) {
			// TODO throw or log it
		}
		
		// 将key:value 类型查询关键词删除，以便提取basic类型查询关键词
		final String basicQuery = query.replaceAll(Config.QueryKeyValueParameterReg, "");
		// 构建提取basic 类型的查询关键词的pattern
		Pattern patternBasic = Pattern.compile(Config.QueryBasicParameterReg);
		Matcher matcherBasic = patternBasic.matcher(basicQuery);
		
		try {
			List<String> basicArrayString = new ArrayList<>();
			while(matcherBasic.find()) {
				// 所有的basic均从data中查询,过滤掉空的查询条件
				String findResult = matcherBasic.group(1).trim();
				if(findResult.length() > 0) {
					basicArrayString.add(findResult.replaceAll("\"", ""));
				}
			}
			if(!basicArrayString.isEmpty()) {
				queryMap.put(
					"data", basicArrayString.stream().collect(Collectors.joining("|"))
				);
			}
		} catch(Exception e) {
			// TODO throw or log it
		}
		
		return queryMap;
	}
}
