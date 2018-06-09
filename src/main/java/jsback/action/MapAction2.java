package jsback.action;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import jsback.service.MapService;

import javax.annotation.Resource;

@RestController
@RequestMapping(value = "/situation/map", produces = "application/json;charset=utf-8")
public class MapAction2 {
    @Resource(name = "MapService")
    private MapService mapService;

    // 指定地区设备数量
    // q=city:hangzhou || q=area:zhejiang etc.
    @RequestMapping("/area")
    public String area(@RequestParam("q") String query) { return mapService.area(query); }

    // 指定地区设备各种评分
    // q=area:zhejiang etc.
    @RequestMapping("/score")
    public String score(@RequestParam("q") String query) {
        return mapService.score(query);
    }

    // 线上线下各种设备总数，随时间变化
    @RequestMapping("/all")
    public String all() {
        return mapService.all();
    }

    // 行政区块 group
    @RequestMapping("/group/area")
    public String groupArea() {
        return mapService.groupArea();
    }

    // port group
    // q=area:zhejiang etc.
    @RequestMapping("/group/port")
    public String groupPort(@RequestParam("q") String query) {
        return mapService.groupPort(query);
    }

    // 漏洞趋势变化
    @RequestMapping("/trend")
    public String trend() {
        return mapService.trend();
    }

    // 主机跟踪
    @RequestMapping("/track")
    public String track() {
        return mapService.track();
    }

    @ExceptionHandler(java.lang.Exception.class)
    public String exception(Exception e) {
        System.out.println(e);
        return "{\"error\":1}";
    }
}
