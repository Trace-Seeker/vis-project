package jsback.util;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 定时执行 程序
 */
@Component
public class ScheduledTask {
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    // 每天执行一次，获得计算机内存 cpu使用情况，记录到数据库中
    @Scheduled(fixedRate = 1000*60*60*24)
    public void getComputerInfo() {
        System.out.println(String.format("获取 cpu, mem. 执行. 当前时间: %s", dateFormat.format(new Date())));

    }

    // 一周执行一次，获取漏洞趋势分布信息，记录到数据库中
    @Scheduled(fixedRate = 1000*60*60*24*7)
    public void getFlawTrend() {
        System.out.println(String.format("获取漏洞趋势信息. 执行. 当前时间: %s", dateFormat.format(new Date())));
    }

}
