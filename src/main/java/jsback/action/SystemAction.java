package jsback.action;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jsback.service.SystemService;

import javax.annotation.Resource;

@RestController
@RequestMapping(value = "/situation/system", produces = "application/json;charset=utf-8")
public class SystemAction {
    @Resource(name = "SystemService")
    private SystemService systemService;

    @RequestMapping("/latest")
    public String systemInfo() {
        return systemService.getSystemInfo();
    }

}
