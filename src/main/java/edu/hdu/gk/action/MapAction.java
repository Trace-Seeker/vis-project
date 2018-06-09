package edu.hdu.gk.action;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.hdu.gk.service.ICSMapService;

@RestController
@RequestMapping(value = "/map", produces = "application/json;charset=utf-8")
public class MapAction {

	@Resource(name = "ICSMapService")
	private ICSMapService mapService;
	
	// 可视化地球页面使用
	@GetMapping("/earth")
	public String area(
			@RequestParam("q") String query
			) {
		return mapService.earth(query);
	}
	
	// 地图页面使用
	@GetMapping("/coordinate")
	public String coordinate(
			@RequestParam("q") String query,
			@RequestParam(value = "size", required = false, defaultValue = "1000") int size
			) {
		return mapService.coordinate(query, size);
	}

	// 搜索地球页面使用
	@GetMapping("/coordinateArr")
	public String coordinateArray(
			@RequestParam("q") String query
			) {
		return mapService.coordinateArray(query);
	}
	
	@ExceptionHandler(java.lang.Exception.class)
	public String exception() {
		return "{\"error\":1}";
	}
	
}
