package edu.hdu.gk.utils;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;

import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;

public final class CommonUtil {

	private CommonUtil(){}
	
	public static final Map<String, String> getQueryMapFromQueryString(String query) {
		Map<String, String> queryMapKeyNotFormat = HttpUtils.getQueryCriteria(query);
		
		Map<String, String> queryMap = new HashMap<String, String>();
		
		queryMapKeyNotFormat.forEach((key, value) -> {
			queryMap.put(Config.Mapping.get(key), value);
		});

		return queryMap;
	}
	
	public static final BoolQueryBuilder getBoolQueryFromQueryMap(final Map<String, String> queryMap) {
		BoolQueryBuilder boolQuery = new BoolQueryBuilder();
		queryMap.forEach((key, value) -> {
			if("data".equals(key)) {
				BoolQueryBuilder dataQuery = new BoolQueryBuilder();
				
				Stream.of(value.split("\\|")).forEach(str -> {
					dataQuery.should(QueryBuilders.matchPhraseQuery("data", str));
				});
				
				boolQuery.must(dataQuery);
			} else {
				boolQuery.must(QueryBuilders.matchPhraseQuery(key, value));
			}
		});
		return boolQuery;
	}
	
}
