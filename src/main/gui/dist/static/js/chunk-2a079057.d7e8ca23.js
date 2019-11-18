(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a079057","chunk-3454a91b"],{"17e6":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"文件名"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入文件名",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name",t)},expression:"queryParams.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"文件类型"}},[a("el-select",{attrs:{placeholder:"文件类型",clearable:"",size:"small"},model:{value:e.queryParams.type,callback:function(t){e.$set(e.queryParams,"type",t)},expression:"queryParams.type"}},e._l(e.fileTypeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.key,value:e.value}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{size:"small","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索\n      ")]),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary",icon:"el-icon-upload"},on:{click:e.handleAdd}},[e._v("文件上传\n      ")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.localStorageList}},[a("el-table-column",{attrs:{prop:"name",width:"150px",label:"文件名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{content:"file/"+t.row.type+"/"+t.row.realName,placement:"top-start",title:"路径",width:"200",trigger:"hover"}},[a("a",{staticClass:"el-link--primary",staticStyle:{"word-break":"keep-all","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",color:"#1890ff","font-size":"13px"},attrs:{slot:"reference",href:e.baseApi+"/file/"+t.row.type+"/"+t.row.realName,target:"_blank"},slot:"reference"},[e._v("\n            "+e._s(t.row.name)+"\n          ")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"path",label:"预览图"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("el-image",{staticClass:"el-avatar",attrs:{src:e.baseApi+"/file/"+l.type+"/"+l.realName,"preview-src-list":[e.baseApi+"/file/"+l.type+"/"+l.realName],fit:"contain",lazy:""}},[a("div",{attrs:{slot:"error"},slot:"error"},[a("i",{staticClass:"el-icon-document"})])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"suffix",label:"文件类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类别"}}),e._v(" "),a("el-table-column",{attrs:{prop:"size",label:"大小"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createBy",label:"操作人"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改\n        ")]),e._v(" "),a("el-popover",{ref:t.row.id,attrs:{placement:"top",width:"180"}},[a("p",[e._v("确定删除本条数据吗？")]),e._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"0"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){e.$refs[t.row.id].doClose()}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{loading:e.loading,type:"primary",size:"mini"},on:{click:function(a){return e.handleSubDelete(t.row.id)}}},[e._v("确定\n            ")])],1),e._v(" "),a("el-button",{attrs:{slot:"reference",type:"text",icon:"el-icon-delete",size:"mini"},slot:"reference"},[e._v("删除\n          ")])],1)]}}])})],1),e._v(" "),a("LocalStorageUpload",{ref:"localStorageUpload",attrs:{"is-add":e.isAdd}}),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},o=[],r=(a("7f7f"),a("6b70")),i=a("afd2"),n={components:{LocalStorageUpload:i["default"]},data:function(){return{baseApi:"/prod-api",isAdd:!1,loading:!0,total:0,localStorageList:[],fileTypeOptions:[],dateRange:[],queryParams:{pageNum:1,pageSize:10,name:void 0,type:void 0,suffix:void 0}}},created:function(){this.getList()},methods:{handleSubDelete:function(e){var t=this;this.loading=!0,Object(r["a"])(e).then((function(a){t.$refs[e].doClose(),t.loading=!1,200==a.code?t.msgSuccess("删除成功"):t.msgError("删除失败"),t.getList()})).catch((function(a){t.msgError("删除失败"),t.$refs[e].doClose(),t.loading=!1}))},getList:function(){var e=this;this.loading=!0,Object(r["b"])(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){e.localStorageList=t.rows,e.total=t.total,e.loading=!1}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleAdd:function(){this.isAdd=!0,this.$refs.localStorageUpload.open=!0},handleUpdate:function(e){this.isAdd=!1;var t=this.$refs.localStorageUpload;t.form={id:e.id,name:e.name},t.open=!0}}},s=n,c=a("2877"),d=Object(c["a"])(s,l,o,!1,null,null,null);t["default"]=d.exports},"6b70":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return i}));var l=a("b775");function o(e){return Object(l["a"])({url:"/tool/localStorage/list",method:"get",params:e})}function r(e){return Object(l["a"])({url:"/tool/localStorage/"+e,method:"delete"})}function i(e){return Object(l["a"])({url:"/tool/localStorage",method:"put",data:e})}},afd2:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"append-to-body":!0,"close-on-click-modal":!1,"before-close":e.cancel,visible:e.open,title:e.isAdd?"上传文件":"编辑文件",width:"500px"},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"small","label-width":"80px"}},[a("el-form-item",{attrs:{label:"文件名"}},[a("el-input",{staticStyle:{width:"370px"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),e.isAdd?a("el-form-item",{attrs:{label:"上传"}},[a("el-upload",{ref:"upload",attrs:{limit:1,"before-upload":e.beforeUpload,"auto-upload":!1,headers:e.headers,"on-success":e.handleSuccess,"on-error":e.handleError,action:e.fileUploadApi+"?name="+e.form.name}},[a("div",[a("i",{staticClass:"el-icon-upload"}),e._v(" 添加文件")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("可上传任意格式文件，且不超过100M")])])],1):e._e()],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.submitForm}},[e._v("确认")])],1)],1)},o=[],r=a("5f87"),i=a("6b70"),n={props:{isAdd:{type:Boolean,required:!0}},data:function(){return{loading:!1,open:!1,fileUploadApi:"/prod-api/tool/localStorage",headers:{Authorization:"Bearer "+Object(r["a"])()},form:{id:"",name:""},rules:{}}},methods:{cancel:function(){this.resetForm()},submitForm:function(){this.loading=!0,this.isAdd?this.$refs.upload.submit():this.handleUpdate()},handleUpdate:function(){var e=this;Object(i["c"])(this.form).then((function(t){e.resetForm(),e.msgSuccess("修改成功"),e.loading=!1,e.$parent.getList()})).catch((function(t){e.loading=!1,console.log(t.response.data.message)}))},resetForm:function(){this.open=!1,this.$refs["form"].resetFields(),this.form={id:"",name:""}},beforeUpload:function(e){var t=!0;return t=e.size/1024/1024<100,t||this.msgError("上传文件大小不能超过 100MB!"),this.loading=!1,t},handleSuccess:function(e,t,a){this.open=!1,this.resetForm(),this.$refs.upload.clearFiles(),this.$parent.getList()},handleError:function(e,t,a){var l=JSON.parse(e.msg);this.msgError(l),this.loading=!1}}},s=n,c=a("2877"),d=Object(c["a"])(s,l,o,!1,null,"7509867a",null);t["default"]=d.exports}}]);