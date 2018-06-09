package edu.hdu.gk.action;


import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import edu.hdu.gk.service.ICSQueryService;

@RestController
@RequestMapping(value = "/ics", produces = "application/json;charset=utf-8")
public class QueryAction {
	
	@Resource(name = "ICSQueryService")
	private ICSQueryService queryService;
	
	@GetMapping("/query")
	public String query(
			@RequestParam(value = "q", required = true) String query,
			@RequestParam(value = "page", required = false, defaultValue = "1") int page,
			@RequestParam(value = "pageSize", required = false, defaultValue = "10") int pageSize
			) {
		String[] fields = {"ip_str","location.country_name","location.city","org","data","tags","module"};
		return queryService.query(query.replaceAll("\\+", " "), page, pageSize, fields);
	}
	
	/**
	 * @param query 查询条件
	 * @param by	分组依据
	 * @param limit 分组后的数量
	 * @param sort  排序 1正序 非1倒序
	 * @return
	 */
	@GetMapping("/group")
	public String group(
			@RequestParam(value = "q", required = true) String query,
			@RequestParam(value = "by", required = true) List<String> by,
			@RequestParam(value = "limit", required = false, defaultValue = "10") int limit,
			@RequestParam(value = "sort", required = false, defaultValue = "-1") int sort
			) {
		return queryService.group(query.replaceAll("\\+", " "), by, limit, sort);
	}
	
	/**
	 * @param query 查询条件
	 * @param by	分组依据
	 * @param limit 分组后的数量
	 * @param sort  排序 1正序 非1倒序
	 * @return
	 */
	@GetMapping("/group2")
	public String group2(
			@RequestParam(value = "q", required = true) String query,
			@RequestParam(value = "by", required = true) List<String> by,
			@RequestParam(value = "limit", required = false, defaultValue = "10") int limit,
			@RequestParam(value = "sort", required = false, defaultValue = "-1") int sort
			) {
		return queryService.group2(query.replaceAll("\\+", " "), by, limit, sort);
	}
	
	/**
	 * @param query
	 * @return
	 */
	@GetMapping("/host")
	public String query(
			@RequestParam(value = "q", required = true) String query
			) {
		return queryService.host(query.replaceAll("\\+", " "));
	}
	
	@GetMapping("/count")
	public String count(
			@RequestParam(value = "q", required = true) String query
			) {
		return queryService.count(query.replaceAll("\\+", " "));
	}
	
	@ExceptionHandler(java.lang.Exception.class)
	public String exception() {
		return "{\"error\":1}";
	}
	
}
