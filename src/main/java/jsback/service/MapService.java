package jsback.service;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jsback.dao.AllTrackMapper;
import jsback.dao.IcsmainMapper;
import jsback.entity.TrackEntity;
import jsback.entity.Trend;
import jsback.util.Config;

import java.util.HashMap;
import java.util.List;
import java.util.Random;


@Service("MapService")
public class MapService {

    @Autowired
    IcsmainMapper icsMapper;

    @Autowired
    AllTrackMapper allTrackMapper;

    // area: online and offline
    public String area(String query) {
        JSONObject mainJson = new JSONObject();
        try {
            mainJson.put("online", areaOnline(query))
                    .put("offline", areaOffline(query));
        } catch (JSONException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return mainJson.toString();
    }

    private JSONArray areaOnline(String query) {
        JSONArray jsArr = new JSONArray();

        if (query.equals("all")) {
            int count = 0;
            for (String tag : Config.tags) {
                JSONObject j = new JSONObject();
                count = icsMapper.getCountByTags(tag);
                try {
                    j.put("count", count);
                    j.put("key", tag);
                } catch (JSONException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
                jsArr.put(j);
            }
            return jsArr;
        }

        String[] q = query.split(":");
        if(q.length != 2) {
            throw new RuntimeException();
        }

        // 查询 city 范围
        if (q[0].equals("city")) {
            int count = 0;
            for (String tag : Config.tags) {
                JSONObject j = new JSONObject();
                count = icsMapper.getCountByCityTags(q[1], tag);
                try {
                    j.put("count", count);
                    j.put("key", tag);
                } catch (JSONException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
                
                jsArr.put(j);
            }
            return jsArr;
        }
        // 查询 province 范围
        else if(q[0].equals("area")) {
            int count = 0;
            for (String tag : Config.tags) {
                JSONObject j = new JSONObject();
                count = icsMapper.getCountByAreaTags(q[1], tag);
                try {
                    j.put("count", count);
                    j.put("key", tag);
                } catch (JSONException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
                
                jsArr.put(j);
            }
            return jsArr;
        }

        throw new RuntimeException();
    }

    private JSONArray areaOffline(String query) {
        JSONArray jsArr = new JSONArray();

        int count = 0;
        for (String tag : Config.tags) {
            JSONObject j = new JSONObject();
            try {
                j.put("count", count);
                j.put("key", tag);
            } catch (JSONException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            
            jsArr.put(j);
        }
        return jsArr;
    }


    public String score(String query) {
        JSONObject mainJson = new JSONObject();
        JSONObject j = new JSONObject();
        Random r = new Random();

        try {
            j.put("security", (r.nextInt(50) + 50))
             .put("system", (r.nextInt(50) + 50))
             .put("knowledge", (r.nextInt(50) + 50))
             .put("firewall", (r.nextInt(50) + 50))
             .put("network", (r.nextInt(50) + 50));
            mainJson.put("score", j);
        } catch (JSONException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return mainJson.toString();
    }

    // 未考虑线下
    public String groupArea() {
        JSONArray jsArr = new JSONArray();
        List<HashMap<String, Object>> results = icsMapper.getCountGroupByArea();
        for (HashMap<String, Object> result : results) {
            JSONObject j = new JSONObject();
            try {
                j.put("area", result.get("area")).put("num", Integer.parseInt(result.get("num").toString()));
            } catch (NumberFormatException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            } catch (JSONException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            jsArr.put(j);
        }
        return jsArr.toString();
    }

    // 未考虑线下
    public String groupPort(String query) {
        JSONArray jsArr = new JSONArray();
        List<HashMap<String, Object>> results;
        // all branch
        if (query.equals("all")) {
            results = icsMapper.getCountGroupByPort();
        }
        else {
            String[] q = query.split(":");
            // area and city branch
            switch (q[0]) {
                case ("city"):
                    results = icsMapper.getCountGroupByPortCity(q[1]);
                    break;
                case ("area"):
                    results = icsMapper.getCountGroupByPortArea(q[1]);
                    break;
                default:
                    throw new RuntimeException();
            }
        }

        for (HashMap<String, Object> result : results) {
            JSONObject j = new JSONObject();
            try {
                j.put("port", result.get("port")).put("num", Integer.parseInt(result.get("num").toString()));
            } catch (NumberFormatException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            } catch (JSONException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            jsArr.put(j);
        }

        return jsArr.toString();
    }

    public String trend() {
        List<Trend> trends = icsMapper.getTrend();
        JSONArray jsArr = new JSONArray();
        for (Trend t : trends) {
            JSONObject j = new JSONObject();
            try {
                j.put("day", Config.week[t.getDay()])
                 .put("repaired", t.getRepaired())
                 .put("notRepaired", t.getNotRepaired())
                 .put("total", t.getTotal());
            } catch (JSONException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            jsArr.put(j);

        }
        return jsArr.toString();
    }

    public String track() {
        Random rand = new Random();
        int index = rand.nextInt(50);
        JSONArray jsArr = new JSONArray();
        List<HashMap<String, Object>> results = icsMapper.getTrack(index);
        for (HashMap<String, Object> r : results) {
            JSONObject j = new JSONObject();
            try {
                j.put("ip", r.get("ip")).put("area", r.get("area"));
           
                String date = r.get("datetime").toString();
                date = date.split("T")[0];
                j.put("date", date);
                j.put("type", "scanner");
            } catch (JSONException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            jsArr.put(j);
        }
        return jsArr.toString();
    }

    public String all() {
        String[] types = {"ics", "camera"};
        JSONArray js_arr = new JSONArray();
        List<TrackEntity> results;
        try {
            for(int i = 0; i < types.length; i++) {
                for(int j = 0; j < 2; j++) {
                    results = allTrackMapper.getByTypeAndOnline(types[i], j);
                    JSONObject js_obj = new JSONObject();
                    js_obj.put("type", types[i]);
                    js_obj.put("online", j);
                    JSONArray ja = new JSONArray();
                    for (TrackEntity te : results) {
                        JSONObject o = new JSONObject();
                        o.put("date", te.getDate());
                        o.put("num", te.getNumber());
                        ja.put(o);
                    }
                    js_obj.put("info", ja);
                    js_arr.put(js_obj);
                }
            }
        } catch (JSONException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return js_arr.toString();
    }

}
