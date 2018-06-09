package edu.hdu.gk.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Component;

import edu.hdu.gk.utils.CommonUtil;

@Component("MapDAO")
public class MapDAOImpl implements MapDAO {

	@Resource(name = "transportClient")
	TransportClient transportClient;
	
	@Resource(name = "ICSDAO")
	ICSDAO icsDAO;
	
	@Override
	public JSONObject getEarth(Map<String, String> queryMap) {
		
		BoolQueryBuilder boolQuery = CommonUtil.getBoolQueryFromQueryMap(queryMap);
		
		SearchRequestBuilder search = transportClient.prepareSearch("ics")
                .setTypes("ics")
                .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
                .setQuery(boolQuery)
                .setFrom(0).setSize(100)
                .setExplain(false);
		
		SearchResponse response = search.execute().actionGet();
        
		
		SearchHit[] hits = response.getHits().getHits();
		
        JSONArray matches = new JSONArray();
        
        for(SearchHit hit : hits) {
        	matches.put(new JSONObject(hit.getSourceAsString()));
        }
        
        JSONObject orgGroup = icsDAO.group(queryMap, Arrays.asList("org_row"), 1, -1).getJSONObject("aggregations").getJSONObject("org_row").getJSONArray("buckets").getJSONObject(0);
        JSONObject countryGroup = icsDAO.group(queryMap, Arrays.asList("location.country_code"), 1, -1).getJSONObject("aggregations").getJSONObject("location.country_code").getJSONArray("buckets").getJSONObject(0);
        
        JSONArray country = new JSONArray();
        JSONArray org = new JSONArray();
        
        country.put(new JSONObject().put("count", countryGroup.getInt("doc_count")).put("value", countryGroup.getString("key").toUpperCase()));
        org.put(new JSONObject().put("count", orgGroup.getInt("doc_count")).put("value", orgGroup.getString("key")));
        
        JSONObject facets = new JSONObject();
        facets.put("country", country)
         	  .put("org", org);
        
		return new JSONObject().put("matches", matches)
							   .put("total", response.getHits().getTotalHits())
							   .put("facets", facets);
		
	}

	@Override
	public JSONObject getCoordinate(Map<String, String> queryMap, int size) {
		BoolQueryBuilder boolQuery = CommonUtil.getBoolQueryFromQueryMap(queryMap);
		
		SearchRequestBuilder search = transportClient.prepareSearch("ics")
                .setTypes("ics")
                .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
                .setQuery(boolQuery)
                .addFields("location.longitude", "location.latitude","location.country_code")
                .setFrom(0).setSize(size)
                .setExplain(false);
		
		SearchResponse response = search.execute().actionGet();
		
		JSONArray jsonArray = new JSONArray();
        SearchHits hits = response.getHits();
        
        for(SearchHit hit : hits) {
        	JSONObject result = new JSONObject();
        	try {
        		result.put("longitude", hit.getFields().get("location.longitude").getValues().get(0));
        		result.put("latitude", hit.getFields().get("location.latitude").getValues().get(0));
        		result.put("countryCode", hit.getFields().get("location.country_code").getValues().get(0));
        	} catch(java.lang.NullPointerException e) {
        		continue;
        	}
        	jsonArray.put(result);
        }
        return new JSONObject().put("result", jsonArray).put("total", response.getHits().getTotalHits());
		
	}

	@Override
	public JSONObject getCoordinateArray(Map<String, String> queryMap) {
		BoolQueryBuilder boolQuery = CommonUtil.getBoolQueryFromQueryMap(queryMap);
		
		SearchRequestBuilder search = transportClient.prepareSearch("ics")
                .setTypes("ics")
                .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
                .setQuery(boolQuery)
                .addFields("location.longitude", "location.latitude")
                .setFrom(0).setSize(10000)
                .setExplain(false);
		
		SearchResponse response = search.execute().actionGet();
		
		JSONArray jsonArray = new JSONArray();
        SearchHits hits = response.getHits();
        
        List<Object> arr = new ArrayList<>();
        
        for(SearchHit hit : hits) {
        	try {
        		arr.add(hit.getFields().get("location.latitude").getValues().get(0));
        		arr.add(hit.getFields().get("location.longitude").getValues().get(0));
        		arr.add(1);
        	} catch(java.lang.NullPointerException e) {
        		continue;
        	}
        }
        jsonArray.put(arr);
        return new JSONObject().put("result", jsonArray);
		
	}
	
}

