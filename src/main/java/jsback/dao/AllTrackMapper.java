package jsback.dao;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import jsback.entity.TrackEntity;

import java.util.List;

@Repository
public interface AllTrackMapper {
    @Select("select * from ics.all_track where type=#{type} and online=#{online} limit 0, 350")
    List<TrackEntity> getByTypeAndOnline(@Param("type") String type, @Param("online") Integer online);
}
