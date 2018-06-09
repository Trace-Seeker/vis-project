import React from 'react';
import Item from './Item.js';

export default ({condition}) => (
  <div>
    <Item title="国家/地区" value={condition.location.country_name_row}/>
    <Item title="城市" value={condition.location.city}/>
    <Item title="企业" value={condition.org}/>
    <Item title="服务供应商" value={condition.isp}/>
    <Item title="ASN" value={condition.asn}/>
  </div>
)
