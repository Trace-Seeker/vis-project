package jsback.dao;

import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;
import jsback.entity.Trend;

import java.util.HashMap;
import java.util.List;

@Repository
public interface IcsmainMapper {

    @Select("select count(*) from icsmain where tags=#{tags} and countrycode = 'CN'")
    int getCountByTags(@Param("tags") String tags);

    @Select("select count(*) from icsmain where area=#{area} and tags=#{tags}")
    int getCountByAreaTags(@Param("area") String area, @Param("tags") String tags);

    @Select("select count(*) from icsmain where city=#{city} and tags=#{tags}")
    int getCountByCityTags(@Param("city") String city, @Param("tags") String tags);

    @Select("select area,count(*) as num from ics.icsmain where area != '' group by area order by count(*) desc")
    List<HashMap<String, Object>> getCountGroupByArea();

    @Select("select port, count(*) as num from ics.icsmain where area != '' group by port order by count(*) desc limit 0, 7")
    List<HashMap<String, Object>> getCountGroupByPort();

    @Select("select port, count(*) as num from ics.icsmain where area=#{area} group by port order by count(*) desc limit 0, 7")
    List<HashMap<String, Object>> getCountGroupByPortArea(@Param("area") String area);

    @Select("select port, count(*) as num from ics.icsmain where city=#{city} group by port order by count(*) desc limit 0, 7")
    List<HashMap<String, Object>> getCountGroupByPortCity(@Param("city") String city);

    @Select("select * from ics.trend order by day limit 0, 6;")
    @Results({@Result(property = "notRepaired",column = "notrepaired")})
    List<Trend> getTrend();

    @Select("select ip, area, datetime from ics.icsmain where countrycode='CN' and area != '' limit #{index}, 10;")
    List<HashMap<String, Object>> getTrack(@Param("index") int index);
}
