package edu.hdu.gk.dao;

import java.util.ArrayList;
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
import org.elasticsearch.search.aggregations.AggregationBuilders;
import org.elasticsearch.search.aggregations.bucket.terms.Terms;
import org.elasticsearch.search.aggregations.bucket.terms.TermsBuilder;
import org.elasticsearch.search.sort.SortBuilders;
import org.elasticsearch.search.sort.SortOrder;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Component;

import edu.hdu.gk.utils.CommonUtil;


/**
 * @author: Keynes Zhang
 * @E-mail: 13757164035@163.com @time：2016年10月19日, 下午3:35:35
 * @annotation: 设备数据操作层实现
 */
@Component("ICSDAO")
public class ICSDAOImp implements ICSDAO {

	@Resource(name = "transportClient")
	TransportClient transportClient;
	

	
	@Override
	public JSONObject find(final Map<String, String> queryMap, final int page, final int pageSize, final String... fields) {
		BoolQueryBuilder boolQuery = CommonUtil.getBoolQueryFromQueryMap(queryMap);
		
		int queryPage = (page - 1) * pageSize;

		SearchRequestBuilder search = transportClient.prepareSearch("ics")
                .setTypes("ics")
                .addSort(SortBuilders.fieldSort("timestamp").order(SortOrder.DESC))
                .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
                .setQuery(boolQuery)
                .addHighlightedField("data")
                .setHighlighterPreTags("<em class='hlt'>")
                .setHighlighterPostTags("</em>")
                .setHighlighterFragmentSize(500)
                .setFrom(queryPage).setSize(pageSize).setExplain(false);
		
		for(String field : fields) {
			search.addField(field);
		}
		
        SearchResponse response = search.execute().actionGet();
        
        JSONArray jsonArray = new JSONArray();
        SearchHits hits = response.getHits();
        
        for(SearchHit hit : hits) {
        	JSONObject result = new JSONObject();
        	if(fields.length != 0) {
        		for(String field : fields) {
        			try {
        				if("data".equals(field) && hit.getHighlightFields().get(field) != null) {
        					result.put(field, hit.getHighlightFields().get(field).getFragments()[0]);
        				} else {
        					result.put(field, hit.getFields().get(field).getValues().get(0));
        				}
        			} catch(java.lang.NullPointerException e) {
        				result.put(field, "");
        			}
        		}
        		jsonArray.put(result);
        	} else {
        		jsonArray.put(new JSONObject(hit.getSourceAsString()));
        	}
        }
        
		long totalResult = response.getHits().totalHits();
		long time = response.getTookInMillis();
		JSONObject result = new JSONObject();
		result.put("result", jsonArray)
			  .put("total", totalResult)
			  .put("time", time)
			  .put("page", page)
			  .put("pageSize", pageSize);
		return result;
	}

	@Override
	public JSONObject group(final Map<String, String> queryMap, final List<String> by, final int limit, final int sort) {
		BoolQueryBuilder boolQuery = CommonUtil.getBoolQueryFromQueryMap(queryMap);
		
		List<TermsBuilder> terms = new ArrayList<>();
		
		for(String condition : by) {
            TermsBuilder temp = AggregationBuilders.terms(condition).field(condition);
            terms.add(temp);
        }
		TermsBuilder gradeTermsBuilder = terms.stream().reduce((TermsBuilder father, TermsBuilder child)->father.subAggregation(child)).get();
		gradeTermsBuilder.size(limit).order(Terms.Order.count(sort == 1));
		SearchResponse response = transportClient.prepareSearch("ics")
                .setTypes("ics")
                .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
                .setQuery(boolQuery)                 // Query
                .addAggregation(gradeTermsBuilder)
                .setFrom(0).setSize(0).setExplain(false)
                .execute()
                .actionGet();
		
		return new JSONObject(response.toString());
	}
	
	@Override
	public JSONObject group2(final Map<String, String> queryMap, final List<String> by, final int limit, final int sort) {
		BoolQueryBuilder boolQuery = CommonUtil.getBoolQueryFromQueryMap(queryMap);
		
		List<TermsBuilder> terms = new ArrayList<>();
		
		for(String condition : by) {
            TermsBuilder temp = AggregationBuilders.terms(condition).field(condition);
            terms.add(temp);
        }
		TermsBuilder gradeTermsBuilder = terms.stream().reduce((TermsBuilder father, TermsBuilder child)->father.subAggregation(child)).get();
		gradeTermsBuilder.size(limit).order(Terms.Order.count(sort == 1));
		SearchResponse response = transportClient.prepareSearch("ics")
                .setTypes("ics")
                .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
                .setQuery(boolQuery)                 // Query
                .addAggregation(gradeTermsBuilder)
                .setFrom(0).setSize(0).setExplain(false)
                .execute()
                .actionGet();
		
		JSONObject result = new JSONObject(response.toString()).getJSONObject("aggregations");
		String key = result.keys().next();
		result = result.getJSONObject(key);
		return result;
	}


	@Override
	public JSONObject count(Map<String, String> queryMap) {
		
		BoolQueryBuilder boolQuery = CommonUtil.getBoolQueryFromQueryMap(queryMap);
		
		SearchResponse response = transportClient.prepareSearch("ics")
                .setTypes("ics")
                .setSearchType(SearchType.DFS_QUERY_THEN_FETCH)
                .setQuery(boolQuery)     
                .setFrom(0).setSize(0).setExplain(false)
                .execute()
                .actionGet();
		return new JSONObject(response.toString());
	}

}
