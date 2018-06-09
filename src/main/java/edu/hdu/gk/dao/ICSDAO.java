package edu.hdu.gk.dao;

import java.util.List;
import java.util.Map;

import org.json.JSONObject;



/**
 * @author: Keynes Zhang
 * @E-mail: 13757164035@163.com @time：2016年10月20日, 下午8:23:01
 * @annotation: 设备数据操作层接口
 */

public interface ICSDAO {

	/** 
	 * 查询
	 * @param queryMap 映射完毕的查询字段表
	 * @param page 默认1
	 * @param pageSize 默认10
	 * @param fields 查询结果中需要显示的字段，不填则为全部
	 * @return
	 */
	JSONObject find(Map<String, String> queryMap, int page, int pageSize, String...fields);
	
	/**
	 * 得到某个查询条件下、某个列的聚合
	 * @param queryMap 映射完毕的查询字段表
	 * @param groupBy	聚合列
	 * @return
	 */
	JSONObject group(Map<String, String> queryMap, List<String> groupBy, int limit, int sort);
	
	JSONObject group2(Map<String, String> queryMap, List<String> groupBy, int limit, int sort);

	/**
	 * 得到某个查询条件下的总数
	 * @param queryMap 映射完毕的查询字段表
	 * @return
	 */
	JSONObject count(Map<String, String> queryMap);
}
