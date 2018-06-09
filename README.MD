# 鉴势——工控设备在线搜索与可视化平台

<div align="center">
<img width="250" height="250" src="https://raw.githubusercontent.com/Trace-Seeker/vis-project/master/src/main/devlop/src/resource/image/logo_banner.png"/>
</div>

这里是 **鉴势——工控设备在线搜索与可视化平台**

## 项目说明
工控设备在线搜索与可视化平台，可以针对互联网存活设备的资产核查与可视化展示，并且针对平台数据进行态势感知及定制搜索。

## 开发说明

### 0. 开发环境
* JDK 8 及以上
* MySQL 5.1.7 及以上
* ElasticSearch2.4.1 及以上
* Tomcat 8.0 及以上
* node v8.9.0

建议使用`IntelliJ Idea + Sublime / VSCode`进行开发

### 1. 项目目录
```
vis-project
 - src // 源代码目录
  - main
   - devlop // 前端开发目录
   - java // 后端开发目录
    - edu // 大后端
    - jsback // 态势感知页面使用的后端
   - webapp // 打包时需要整合的代码 
    - WEB-INF // 项目配置文件
     - web.xml
     - bean.xml
     - sqlMapConfig.xml
    - META-INF
     - MANIFEST.MF
  - test // 原谅我没有写任何测试
 - pom.xml // maven包管理
 - .gitignore // git提交管理
 - README.MD // 说明
```

### 2. 申请开发资格
因为涉及数据敏感性，所以开发之前需要先申请相应的开发资格。

mail to <a href="mail:jiahao.zhang@hduzplus.xyz">jiahao.zhang@hduzplus.xyz</a>，邮件内需注明:
 - 开发方: 单位/机构/个人
 - 申请开发时间: x月x日 - x月x日
 - 开发时访问搜索数据库的ip
 - 开发目的: 个人学习/机构测试…
 - 联系方式

收到邮件并审核通过后，会提供相应的数据文档以及接口给开发者。

### 3. 前端开发
在
```
src
 - main
  - devlop
```
中为前端代码。**注意，不要修改目录结构。**

前端使用`React + Redux`进行构建，使用`yarn`进行包管理，使用`webpack`进行打包与整体架构。

```
// 安装依赖
yarn

// 开始开发
yarn start

// 开发完成打包
yarn build

// 打包完成部署到项目内
yarn deploy

// 将项目内已部署的前端代码清除
yarn undeploy
```

注意，在没有申请开发资格的条件下，也是可以简单浏览前端页面的。

### 4. 后端开发
将项目导入到相关IDE内，并配置容器为tomcat，运行即可。

## 打包说明
先进行前端打包。当前端代码开发完毕之后，使用`yarn build`打包。之后运行`yarn deploy`将打包好的代码整合到`webapp`内。

之后进行后端打包，使用maven install进行整合。

## 部署说明
**前提: 项目需要的数据文件、数据接口需要申请获取或自行提供**

将打包好的war包部署至tomcat内的一级路径下即可。

例如:
```
http://127.0.0.1:9090/
```

---
如果有其他问题，请发邮件给<a href="mail:jiahao.zhang@hduzplus.xyz">jiahao.zhang@hduzplus.xyz</a>，感谢。


