const PROVINCEMAPPING = {"hebei":"河北","shanxi":"陕西","jilin":"吉林","liaoning":"辽宁","heilongjiang":"黑龙江","gansu":"甘肃","qinghai":"青海","shandong":"山东","fujian":"福建","zhejiang":"浙江","taiwan":"台湾","henan":"河南","hubei":"湖北","hunan":"湖南","jiangxi":"江西","jiangsu":"江苏","anhui":"安徽","guangdong":"广东","hainan":"海南","sichuan":"四川","guizhou":"贵州","yunnan":"云南","beijing":"北京","tianjin":"天津","shanghai":"上海","chongqing":"重庆","neimenggu":"内蒙古","xinjiang":"新疆","ningxia":"宁夏","guangxi":"广西","xizang":"西藏","xianggang":"香港","aomen":"澳门"};

var Util = {
  getUrlParam: function(url, param) {
      var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
      var r = url.substr(1).match(reg);
      if (r != null) return unescape(r[2]); return null;
  },
  fuckXSS: function(str) {
    return str.replace(/[<>"'']/g,function(arg) {
        if(arg === '<')
          return '&lt;'
        else if(arg === '>')
          return '&gt;'
        else if(arg === '"') 
          return '&quot;'
        else if(arg === '\'')
          return '&apos;'
      }).replace(/&lt;em class=&apos;hlt&apos;&gt;|&lt;\/em&gt;/g,function(arg) {
        if(arg === "&lt;em class=&apos;hlt&apos;&gt;")
          return '<em class="hlt">'
        else if(arg === '&lt;/em&gt;')
          return '</em>'
      })
  },
  mappingProvince: function(namePY) {
    return PROVINCEMAPPING[namePY] || '未知'
  }
}

export default Util;


