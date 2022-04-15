"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9692],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},169:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:5,id:"cdc_kafka_multi_source_merge",title:"Flink CDC \u548c Kafka \u591a\u6e90\u5408\u5e76"},l=void 0,u={unversionedId:"extend/practice_guide/cdc_kafka_multi_source_merge",id:"extend/practice_guide/cdc_kafka_multi_source_merge",title:"Flink CDC \u548c Kafka \u591a\u6e90\u5408\u5e76",description:"\u7f16\u8f91:\u8c22\u5e2e\u6842",source:"@site/docs/extend/practice_guide/cdc_kafka_multi_source_merge.md",sourceDirName:"extend/practice_guide",slug:"/extend/practice_guide/cdc_kafka_multi_source_merge",permalink:"/docs/next/extend/practice_guide/cdc_kafka_multi_source_merge",editUrl:"https://github.com/DataLinkDC/dinky-website/tree/master/docs/extend/practice_guide/cdc_kafka_multi_source_merge.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"cdc_kafka_multi_source_merge",title:"Flink CDC \u548c Kafka \u591a\u6e90\u5408\u5e76"},sidebar:"tutorialSidebar",previous:{title:"Flink CDC",permalink:"/docs/next/extend/practice_guide/flinkcdc"},next:{title:"Hive",permalink:"/docs/next/extend/practice_guide/hive"}},p={},s=[],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flink-cdc-\u548c-kafka-\u8fdb\u884c\u591a\u6e90\u5408\u5e76\u548c\u4e0b\u6e38\u540c\u6b65\u66f4\u65b0"},"Flink CDC \u548c Kafka \u8fdb\u884c\u591a\u6e90\u5408\u5e76\u548c\u4e0b\u6e38\u540c\u6b65\u66f4\u65b0"),(0,i.kt)("p",null,"\u7f16\u8f91:\u8c22\u5e2e\u6842"),(0,i.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u662f\u9488\u5bf9 Flink SQL \u4f7f\u7528 Flink CDC \u65e0\u6cd5\u5b9e\u73b0\u591a\u5e93\u591a\u8868\u7684\u591a\u6e90\u5408\u5e76\u95ee\u9898\uff0c\u4ee5\u53ca\u591a\u6e90\u5408\u5e76\u540e\u5982\u4f55\u5bf9\u4e0b\u6e38 Kafka \u540c\u6b65\u66f4\u65b0\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u76ee\u524d Flink SQL \u4e5f\u53ea\u80fd\u8fdb\u884c\u5355\u8868 Flink CDC \u7684\u4f5c\u4e1a\u64cd\u4f5c\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u6570\u636e\u5e93 CDC \u7684\u8fde\u63a5\u6570\u8fc7\u591a\u3002"),(0,i.kt)("p",null,"\u4f46\u662f Flink CDC \u7684 DataStream API \u662f\u53ef\u4ee5\u8fdb\u884c\u591a\u5e93\u591a\u8868\u7684\u540c\u6b65\u64cd\u4f5c\u7684\uff0c\u672c\u6587\u5e0c\u671b\u5229\u7528 Flink CDC \u7684 DataStream API \u8fdb\u884c\u591a\u6e90\u5408\u5e76\u540e\u5bfc\u5165\u4e00\u4e2a\u603b\u7ebf Kafka\uff0c\u4e0b\u6e38\u53ea\u9700\u8fde\u63a5\u603b\u7ebf Kafka \u5c31\u53ef\u4ee5\u5b9e\u73b0 Flink SQL \u7684\u591a\u6e90\u5408\u5e76\u95ee\u9898\uff0c\u8d44\u6e90\u590d\u7528\u3002"),(0,i.kt)("h1",{id:"\u73af\u5883"},"\u73af\u5883"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Flink"),(0,i.kt)("th",{parentName:"tr",align:"left"},"1.13.3"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Flink CDC"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Kafka"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.13")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Java"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.8")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Dinky"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5.0")))),(0,i.kt)("p",null,"\u6211\u4eec\u5148\u6253\u5370\u4e00\u4e0b Flink CDC \u9ed8\u8ba4\u7684\u5e8f\u5217\u5316 JSON \u683c\u5f0f\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"SourceRecord{sourcePartition={server=mysql_binlog_source}, sourceOffset={ts_sec=1643273051, file=mysql_bin.000002, pos=5348135, row=1, server_id=1, event=2}}\nConnectRecord{topic='mysql_binlog_source.gmall.spu_info', kafkaPartition=null, key=Struct{id=12}, keySchema=Schema{mysql_binlog_source.gmall.spu_info.Key:STRUCT}, value=Struct{before=Struct{id=12,spu_name=\u534e\u4e3a\u667a\u6167\u5c4f 14222K1 \u5168\u9762\u5c4f\u667a\u80fd\u7535\u89c6\u673a,description=\u534e\u4e3a\u667a\u6167\u5c4f 4K \u5168\u9762\u5c4f\u667a\u80fd\u7535\u89c6\u673a,category3_id=86,tm_id=3},after=Struct{id=12,spu_name=\u534e\u4e3a\u667a\u6167\u5c4f 2K \u5168\u9762\u5c4f\u667a\u80fd\u7535\u89c6\u673a,description=\u534e\u4e3a\u667a\u6167\u5c4f 4K \u5168\u9762\u5c4f\u667a\u80fd\u7535\u89c6\u673a,category3_id=86,tm_id=3},source=Struct{version=1.4.1.Final,connector=mysql,name=mysql_binlog_source,ts_ms=1643273051000,db=gmall,table=spu_info,server_id=1,file=mysql_bin.000002,pos=5348268,row=0,thread=3742},op=u,ts_ms=1643272979401}, valueSchema=Schema{mysql_binlog_source.gmall.spu_info.Envelope:STRUCT}, timestamp=null, headers=ConnectHeaders(headers=)}\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u79cd\u683c\u5f0f\u7684 JSON\uff0c\u4f20\u7ed9\u4e0b\u6e38\u6709\u5f88\u5927\u7684\u95ee\u9898\uff0c\u8981\u5b9e\u73b0\u591a\u6e90\u5408\u5e76\u548c\u540c\u6b65\u66f4\u65b0\uff0c\u6211\u4eec\u8981\u89e3\u51b3\u4ee5\u4e0b\u4e24\u4e2a\u95ee\u9898\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u2460\u603b\u7ebf Kafka \u4f20\u6765\u7684 Json\uff0c\u65e0\u6cd5\u8bc6\u522b\u6e90\u5e93\u548c\u6e90\u8868\u6765\u8fdb\u884c\u5177\u4f53\u7684\u8868\u521b\u5efa\u64cd\u4f5c\uff0c\u56e0\u4e3a\u4e0d\u662f\u56fa\u5b9a\u7684 Json \u683c\u5f0f\uff0c\u5efa\u8868 with \u914d\u7f6e\u91cc\u4e5f\u65e0\u6cd5\u6307\u5b9a\u5177\u4f53\u7684\u5e93\u548c\u8868\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u2461\u603b\u7ebf Kafka \u4f20\u6765\u7684 Json \u5982\u4f55\u8fdb\u884c CRUD \u7b49\u4e8b\u4ef6\u5bf9  Kafka \u6d41\u7684\u540c\u6b65\u64cd\u4f5c\uff0c\u7279\u522b\u662f Delete\uff0c\u4e0b\u6e38 kafka \u5982\u4f55\u611f\u77e5\u6765\u66f4\u65b0 ChangeLog\u3002")),(0,i.kt)("h1",{id:"\u67e5\u770b\u6587\u6863"},"\u67e5\u770b\u6587\u6863"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/cdc_kafka_multi_source_merge/see_debezium_document.png",alt:"see_debezium_document"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/cdc_kafka_multi_source_merge/see_debezium_document_create_table.png",alt:"see_debezium_document_create_table"})),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u7ea2\u6846\u90e8\u5206\uff0c\u57fa\u4e8e Debezium \u683c\u5f0f\u7684 json \u53ef\u4ee5\u5728 Kafka connector \u5efa\u8868\u4e2d\u53ef\u4ee5\u5b9e\u73b0\u8868\u7684 CRUD \u540c\u6b65\u64cd\u4f5c\u3002\u53ea\u8981\u603b\u7ebf Kafka \u7684 json \u683c\u5f0f\u7b26\u5408\u8be5\u6a21\u5f0f\u5c31\u53ef\u4ee5\u5bf9\u4e0b\u6e38 kafka \u8fdb\u884c CRUD \u7684\u540c\u6b65\u66f4\u65b0\uff0c\u521a\u597d Flink CDC \u4e5f\u662f\u57fa\u4e8e Debezium\u3002"),(0,i.kt)("p",null,"\u90a3\u8fd9\u91cc\u5c31\u5df2\u7ecf\u89e3\u51b3\u4e86\u95ee\u9898\u2461\u3002"),(0,i.kt)("p",null,"\u5269\u4e0b\u95ee\u9898\u2460\uff0c\u5982\u4f55\u89e3\u51b3\u4f20\u6765\u7684\u591a\u5e93\u591a\u8868\u8fdb\u884c\u6307\u5b9a\u8868\u548c\u5e93\u7684\u8bc6\u522b\uff0c\u6bd5\u7adf\u5efa\u8868\u8bed\u53e5\u6ca1\u6709\u8fdb\u884c where \u7684\u8bbe\u7f6e\u53c2\u6570\u3002"),(0,i.kt)("p",null,"\u518d\u5f80\u4e0b\u7ffb\u6587\u6863\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/cdc_kafka_multi_source_merge/see_debezium_document_create_table_info.png",alt:"see_debezium_document_create_table_info"})),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u57fa\u4e8e Debezium-json \u683c\u5f0f\uff0c\u53ef\u4ee5\u628a\u4e0a\u9762\u7684 schema \u5b9a\u4e49\u7684 json \u683c\u5f0f\u7684\u5143\u6570\u636e\u7ed9\u53d6\u51fa\u6765\u653e\u5728\u5b57\u6bb5\u91cc\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u628a table \u548c database \u7ed9\u653e\u5728\u5efa\u8868\u8bed\u53e5\u91cc\uff0c\u90a3\u6837\u6211\u5c31\u53ef\u4ee5\u5728 select \u8bed\u53e5\u4e2d\u8fdb\u884c\u5e93\u548c\u8868\u7684\u8fc7\u6ee4\u4e86\u3002"),(0,i.kt)("p",null,"\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Kafka_Table (\n    origin_database STRING METADATA FROM 'value.source.database' VIRTUAL, //schema \u5b9a\u4e49\u7684 json \u91cc\u7684\u5143\u6570\u636e\u5b57\u6bb5\n    origin_table STRING METADATA FROM 'value.source.table' VIRTUAL,\n    `id` INT,\n    `spu_name` STRING,\n    `description` STRING,\n    `category3_id` INT,\n    `tm_id` INT\n) WITH (\n  'connector' = 'kafka',\n  'topic' = 'input_kafka4',\n  'properties.group.id' = '57',\n  'properties.bootstrap.servers' = '10.1.64.156:9092',\n  'scan.startup.mode' = 'latest-offset',\n  'debezium-json.ignore-parse-errors' = 'true',\n  'format' = 'debezium-json'\n);\n\nselect * from Kafka_Table where origin_database='gmall' and origin_table = 'spu_info'; //\u8fd9\u91cc\u5c31\u5b9e\u73b0\u4e86\u6307\u5b9a\u5e93\u548c\u8868\u7684\u8fc7\u6ee4\u64cd\u4f5c\n")),(0,i.kt)("p",null,"\u90a3\u8fd9\u6837\u95ee\u9898\u2461\u5c31\u89e3\u51b3\u4e86\u3002\n\u90a3\u6211\u4eec\u73b0\u5728\u5c31\u8981\u505a\u4e24\u4e2a\u4e8b\u60c5:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u2460\u5199\u4e00\u4e2aFlink CDC \u7684 DataStream \u9879\u76ee\u8fdb\u884c\u591a\u5e93\u591a\u8868\u540c\u6b65\uff0c\u4f20\u7ed9\u603b\u7ebf Kafka\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u2461\u81ea\u5b9a\u4e49\u603b\u7ebf Kafka \u7684 json \u683c\u5f0f\u3002")),(0,i.kt)("h1",{id:"\u65b0\u5efaflink-cdc\u7684datastream\u9879\u76ee"},"\u65b0\u5efaFlink CDC\u7684dataStream\u9879\u76ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.alibaba.ververica.cdc.connectors.mysql.MySQLSource;\nimport com.alibaba.ververica.cdc.connectors.mysql.table.StartupOptions;\nimport com.alibaba.ververica.cdc.debezium.DebeziumSourceFunction;\nimport com.alibaba.ververica.cdc.debezium.StringDebeziumDeserializationSchema;\nimport org.apache.flink.api.common.serialization.SimpleStringSchema;\nimport org.apache.flink.runtime.state.filesystem.FsStateBackend;\nimport org.apache.flink.streaming.api.CheckpointingMode;\nimport org.apache.flink.streaming.api.datastream.DataStreamSource;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.streaming.connectors.kafka.FlinkKafkaProducer;\n\npublic class FlinkCDC {\n\n    public static void main(String[] args) throws Exception {\n\n        //1.\u83b7\u53d6\u6267\u884c\u73af\u5883\n        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n        env.setParallelism(1);\n\n        //1.1 \u8bbe\u7f6e CK&\u72b6\u6001\u540e\u7aef\n        //\u7565\n\n        //2.\u901a\u8fc7 FlinkCDC \u6784\u5efa SourceFunction \u5e76\u8bfb\u53d6\u6570\u636e\n        DebeziumSourceFunction<String> sourceFunction = MySQLSource.<String>builder()\n                .hostname("10.1.64.157")\n                .port(3306)\n                .username("root")\n                .password("123456")\n                .databaseList("gmall") //\u8fd9\u4e2a\u6ce8\u91ca,\u5c31\u662f\u591a\u5e93\u540c\u6b65\n                //.tableList("gmall.spu_info") //\u8fd9\u4e2a\u6ce8\u91ca\uff0c\u5c31\u662f\u591a\u8868\u540c\u6b65\n                .deserializer(new CustomerDeserialization()) //\u8fd9\u91cc\u9700\u8981\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u683c\u5f0f\n                //.deserializer(new StringDebeziumDeserializationSchema()) //\u9ed8\u8ba4\u662f\u8fd9\u4e2a\u5e8f\u5217\u5316\u683c\u5f0f\n                .startupOptions(StartupOptions.latest())\n                .build();\n        DataStreamSource<String> streamSource = env.addSource(sourceFunction);\n\n        //3.\u6253\u5370\u6570\u636e\u5e76\u5c06\u6570\u636e\u5199\u5165 Kafka\n        streamSource.print();\n        String sinkTopic = "input_kafka4";\n        streamSource.addSink(getKafkaProducer("10.1.64.156:9092",sinkTopic));\n\n        //4.\u542f\u52a8\u4efb\u52a1\n        env.execute("FlinkCDC");\n    }\n\n    //kafka \u751f\u4ea7\u8005\n    public static FlinkKafkaProducer<String> getKafkaProducer(String brokers,String topic) {\n        return new FlinkKafkaProducer<String>(brokers,\n                topic,\n                new SimpleStringSchema());\n    }\n\n}\n')),(0,i.kt)("h2",{id:""}),(0,i.kt)("h1",{id:"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u7c7b"},"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u7c7b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport com.alibaba.fastjson.JSONObject;\nimport com.alibaba.ververica.cdc.debezium.DebeziumDeserializationSchema;\nimport io.debezium.data.Envelope;\nimport org.apache.flink.api.common.typeinfo.BasicTypeInfo;\nimport org.apache.flink.api.common.typeinfo.TypeInformation;\nimport org.apache.flink.util.Collector;\nimport org.apache.kafka.connect.data.Field;\nimport org.apache.kafka.connect.data.Schema;\nimport org.apache.kafka.connect.data.Struct;\nimport org.apache.kafka.connect.source.SourceRecord;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class CustomerDeserialization implements DebeziumDeserializationSchema<String> {\n\n   \n    @Override\n    public void deserialize(SourceRecord sourceRecord, Collector<String> collector) throws Exception {\n\n        //1.\u521b\u5efa JSON \u5bf9\u8c61\u7528\u4e8e\u5b58\u50a8\u6700\u7ec8\u6570\u636e\n        JSONObject result = new JSONObject();\n\n        //2.\u83b7\u53d6\u5e93\u540d&\u8868\u540d\u653e\u5165 source\n        String topic = sourceRecord.topic();\n        String[] fields = topic.split("\\\\.");\n        String database = fields[1];\n        String tableName = fields[2];\n        JSONObject source = new JSONObject();\n        source.put("database",database);\n        source.put("table",tableName);\n\n        Struct value = (Struct) sourceRecord.value();\n        //3.\u83b7\u53d6"before"\u6570\u636e\n        Struct before = value.getStruct("before");\n        JSONObject beforeJson = new JSONObject();\n        if (before != null) {\n            Schema beforeSchema = before.schema();\n            List<Field> beforeFields = beforeSchema.fields();\n            for (Field field : beforeFields) {\n                Object beforeValue = before.get(field);\n                beforeJson.put(field.name(), beforeValue);\n            }\n        }\n\n        //4.\u83b7\u53d6"after"\u6570\u636e\n        Struct after = value.getStruct("after");\n        JSONObject afterJson = new JSONObject();\n        if (after != null) {\n            Schema afterSchema = after.schema();\n            List<Field> afterFields = afterSchema.fields();\n            for (Field field : afterFields) {\n                Object afterValue = after.get(field);\n                afterJson.put(field.name(), afterValue);\n            }\n        }\n\n        //5.\u83b7\u53d6\u64cd\u4f5c\u7c7b\u578b  CREATE UPDATE DELETE \u8fdb\u884c\u7b26\u5408 Debezium-op \u7684\u5b57\u6bcd\n        Envelope.Operation operation = Envelope.operationFor(sourceRecord);\n        String type = operation.toString().toLowerCase();\n        if ("insert".equals(type)) {\n            type = "c";\n        }\n        if ("update".equals(type)) {\n            type = "u";\n        }\n        if ("delete".equals(type)) {\n            type = "d";\n        }\n        if ("create".equals(type)) {\n            type = "c";\n        }\n\n        //6.\u5c06\u5b57\u6bb5\u5199\u5165 JSON \u5bf9\u8c61\n        result.put("source", source);\n        result.put("before", beforeJson);\n        result.put("after", afterJson);\n        result.put("op", type);\n\n        //7.\u8f93\u51fa\u6570\u636e\n        collector.collect(result.toJSONString());\n\n    }\n\n    @Override\n    public TypeInformation<String> getProducedType() {\n        return BasicTypeInfo.STRING_TYPE_INFO;\n    }\n}\n')),(0,i.kt)("p",null,"OK\uff0c\u8fd0\u884c flinkCDC \u9879\u76ee\uff0c\u540c\u6b65\u7684\u6570\u636e\u5e93\u8868\u63d2\u5165\u4e00\u6761\u8bb0\u5f55\uff0c\u5f97\u51fa\u4ee5\u4e0b\u81ea\u5b9a\u4e49\u683c\u5f0f\u540e\u7684 JSON\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "u",\n    "before": {\n        "spu_name": "\u9999\u5948\u513f\uff08Chanel\uff09\u5973\u58eb\u9999\u6c34 5 \u53f7\u9999\u6c34 \u7c89\u9082\u9005\u67d4\u60c5\u6de1\u9999\u6c34 EDT ",\n        "tm_id": 11,\n        "description": "\u9999\u5948\u513f\uff08Chanel\uff09\u5973\u58eb\u9999\u6c34 5 \u53f7\u9999\u6c34 \u7c89\u9082\u9005\u67d4\u60c5\u6de1\u9999\u6c34 EDT 111",\n        "id": 11,\n        "category3_id": 473\n    },\n    "source": {\n        "database": "gmall",\n        "table": "spu_info"\n    },\n    "after": {\n        "spu_name": "\u9999\u5948\u513f\uff08Chanel\uff09\u5973\u58eb\u9999\u6c34 5 \u53f7\u9999\u6c34 \u7c89\u9082\u9005\u67d4\u60c5\u6de1\u9999\u6c34 EDTss ",\n        "tm_id": 11,\n        "description": "\u9999\u5948\u513f\uff08Chanel\uff09\u5973\u58eb\u9999\u6c34 5 \u53f7\u9999\u6c34 \u7c89\u9082\u9005\u67d4\u60c5\u6de1\u9999\u6c34 EDT 111",\n        "id": 11,\n        "category3_id": 473\n    }\n}\n')),(0,i.kt)("p",null,"PS\uff1a\u6ca1\u653e schema{}\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u770b\u6587\u6863\u8bf4\u52a0\u4e86\u8bc6\u522b\u4f1a\u5f71\u54cd\u6548\u7387\u3002"),(0,i.kt)("h1",{id:"\u603b\u7ebf-kafka"},"\u603b\u7ebf Kafka"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/cdc_kafka_multi_source_merge/kafka_consumer_info.png",alt:"kafka_consumer_info"})),(0,i.kt)("h1",{id:"dinky-\u91cc\u9762\u8fdb\u884c\u5efa\u8868\u63d0\u4ea4\u4f5c\u4e1a"},"Dinky \u91cc\u9762\u8fdb\u884c\u5efa\u8868\uff0c\u63d0\u4ea4\u4f5c\u4e1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/cdc_kafka_multi_source_merge/dinky_create_kafka_table.png",alt:"dinky_create_kafka_table"}),"\nPS\uff1ayarn-session \u6a21\u5f0f\uff0c\u8bb0\u5f97\u5f00\u542f\u9884\u89c8\u7ed3\u679c\u548c\u6253\u5370\u6d41\uff0c\u4e0d\u7136\u89c2\u5bdf\u4e0d\u5230\u6570\u636e changelog"),(0,i.kt)("h1",{id:"\u67e5\u770b\u7ed3\u679c"},"\u67e5\u770b\u7ed3\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/cdc_kafka_multi_source_merge/mysql_insert_one_data.png",alt:"mysql_insert_one_data"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/cdc_kafka_multi_source_merge/dinky_show_data.png",alt:"dinky_show_data"})),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5728\u6307\u5b9a\u5e93\u548c\u8868\u4e2d\u65b0\u589e\u4e00\u6761\u6570\u636e\uff0c\u5728\u4e0b\u6e38 kafka \u4f5c\u4e1a\u4e2d\u5b9e\u73b0\u4e86\u540c\u6b65\u66f4\u65b0\uff0c\u7136\u540e\u8bd5\u8bd5\u5bf9\u6570\u636e\u5e93\u8be5\u8868\u7684\u8bb0\u5f55\u8fdb\u884c delete\uff0c\u6548\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/cdc_kafka_multi_source_merge/dinky_show_data_again.png",alt:"dinky_show_data_again"})),(0,i.kt)("p",null,'\u53ef\u4ee5\u770b\u5230"\u662f\u662f\u662f.."\u8fd9\u6761\u8bb0\u5f55\u540c\u6b65\u5220\u9664\u4e86\u3002'),(0,i.kt)("p",null,"\u6b64\u65f6 Flink CDC \u7684\u8bb0\u5f55\u662f\u8fd9\u6837\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/cdc_kafka_multi_source_merge/show_cdc_data.png",alt:"show_cdc_data"})),(0,i.kt)("p",null,"\u539f\u7406\u4e3b\u8981\u662f op \u53bb\u540c\u6b65\u4e0b\u6e38 kafka \u7684 changeLog \u91cc\u7684 op"),(0,i.kt)("p",null,"\u6211\u4eec\u6d4f\u89c8\u4e00\u4e0b changeLog\uff1a\uff08Dinky \u9009\u4e2d\u6253\u5370\u6d41\u5373\u53ef\uff09"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/extend/practice_guide/cdc_kafka_multi_source_merge/print_streaming.png",alt:"print_streaming"})),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0cop \u81ea\u52a8\u8bc6\u522b\u603b\u7ebf kafka \u53d1\u6765\u7684 JSON \u8fdb\u884c\u4e86\u540c\u6b65\u6765\u8bb0\u5f55\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u540e\u7eed\u6211\u4eec\u5c31\u53ef\u4ee5\u63d2\u5165 upsert-kafka \u8868\u8fdb\u884c\u5177\u4f53\u7684\u8868\u64cd\u4f5c\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5b8c\u6210\uff01\u8fd9\u6837\u53ea\u9700\u5efa\u4e00\u4e2a DataStream \u7684\u603b\u7ebf jar\uff0c\u5728 Dinky \u4e2d\u8fdb\u884c\u63d0\u4ea4\uff0c\u540e\u7eed\u4e0b\u6e38\u7684\u4f5c\u4e1a\u53ea\u9700\u8981 kafka \u53bb\u63a5\u603b\u7ebf kafka \u5c31\u53ef\u4ee5\u8fdb\u884c Flink CDC \u5728 Flink SQL \u91cc\u7684\u591a\u6e90\u5408\u5e76\u548c\u540c\u6b65\u66f4\u65b0\u3002")),(0,i.kt)("p",null,"\u7075\u611f\u548c\u4ee3\u7801\u6765\u81ea\u4e8e\u5c1a\u7845\u8c37\uff0c\u8bf7\u652f\u6301 Dinky \u548c\u5c1a\u7845\u8c37\uff0c\u53e6\u5916\u662f\u5728\u6d4b\u8bd5\u73af\u5883\u8fdb\u884c\uff0c\u751f\u4ea7\u73af\u5883\u8c03\u4f18\u81ea\u884c\u89e3\u51b3\uff0c\u5982\u6709\u66f4\u597d\u7684\u5b9e\u8df5\u6b22\u8fce\u5bf9\u6587\u6863\u8fdb\u884c pr\uff0c\u611f\u8c22\uff01"))}d.isMDXComponent=!0}}]);