package jsback.service;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jsback.dao.SystemMapper;
import jsback.entity.SystemEntity;

import java.util.List;

@Service("SystemService")
public class SystemService {
    @Autowired
    SystemMapper systemMapper;

    public String getSystemInfo() {
        List<SystemEntity> list = systemMapper.getSystemInfo();
        JSONArray jsArr = new JSONArray();
        for (SystemEntity l : list) {
            JSONObject j = new JSONObject();
            try {
                j.put("cpu", l.getCpu())
                 .put("mem", l.getMem())
                 .put("date", l.getDate());
            } catch (JSONException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            jsArr.put(j);
        }
        return jsArr.toString();
    }
}
