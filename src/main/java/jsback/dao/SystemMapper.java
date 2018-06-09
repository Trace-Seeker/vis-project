package jsback.dao;

import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import jsback.entity.SystemEntity;

import java.util.List;

@Repository
public interface SystemMapper {

    @Select("select * from system order by date desc limit 0,10")
    List<SystemEntity> getSystemInfo();

}
