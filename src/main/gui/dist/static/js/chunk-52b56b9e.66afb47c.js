(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52b56b9e"],{3528:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return l}));var r=n("b775");function o(e){return Object(r["a"])({url:"/system/role/list",method:"get",params:e})}function a(e){return Object(r["a"])({url:"/system/role/"+e,method:"get"})}function i(e){return Object(r["a"])({url:"/system/role",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/system/role",method:"put",data:e})}function l(e,t){var n={id:e,status:t};return Object(r["a"])({url:"/system/role/changeStatus",method:"put",data:n})}},"70eb":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"角色名称"}},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入角色名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.roleName,callback:function(t){e.$set(e.queryParams,"roleName",t)},expression:"queryParams.roleName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"权限字符"}},[n("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入权限字符",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.roleKey,callback:function(t){e.$set(e.queryParams,"roleKey",t)},expression:"queryParams.roleKey"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"角色状态",clearable:"",size:"small"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return n("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"创建时间"}},[n("el-date-picker",{staticStyle:{width:"240px"},attrs:{size:"small","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),e._v(" "),n("el-row",{staticClass:"mb8",attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增\n      ")])],1),e._v(" "),n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"success",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:function(t){return e.handleUpdate(null)}}},[e._v("修改\n      ")])],1),e._v(" "),n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini",loading:e.delLoading,disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除\n      ")])],1),e._v(" "),n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"warning",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出\n      ")])],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.list},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"角色编号",align:"center",prop:"id"}}),e._v(" "),n("el-table-column",{attrs:{label:"角色名称",align:"center",prop:"roleName","show-overflow-tooltip":!0}}),e._v(" "),n("el-table-column",{attrs:{label:"权限字符",prop:"roleKey",align:"center","show-overflow-tooltip":!0}}),e._v(" "),n("el-table-column",{attrs:{label:"显示顺序",align:"center",prop:"roleSort"}}),e._v(" "),n("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-value":"0","inactive-value":"1"},on:{change:function(n){return e.handleStatusChange(t.row)}},model:{value:t.row.status,callback:function(n){e.$set(t.row,"status",n)},expression:"scope.row.status"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("修改\n        ")]),e._v(" "),n("el-popover",{ref:t.row.id,attrs:{placement:"top",width:"180"}},[n("p",[e._v("确定删除本条数据吗？")]),e._v(" "),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){e.$refs[t.row.id].doClose()}}},[e._v("取消\n            ")]),e._v(" "),n("el-button",{attrs:{loading:e.loading,type:"primary",size:"mini"},on:{click:function(n){return e.handleSubDelete(t.row.id)}}},[e._v("确定\n            ")])],1),e._v(" "),n("el-button",{attrs:{slot:"reference",type:"text",icon:"el-icon-delete",size:"mini"},slot:"reference"},[e._v("删除\n          ")])],1)]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.init}}),e._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.title,visible:e.open,width:"500px"},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[n("el-input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.form.roleName,callback:function(t){e.$set(e.form,"roleName",t)},expression:"form.roleName"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"权限字符",prop:"roleKey"}},[n("el-input",{attrs:{placeholder:"请输入权限字符"},model:{value:e.form.roleKey,callback:function(t){e.$set(e.form,"roleKey",t)},expression:"form.roleKey"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"角色顺序",prop:"roleSort"}},[n("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:e.form.roleSort,callback:function(t){e.$set(e.form,"roleSort",t)},expression:"form.roleSort"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,(function(t){return n("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel)+"\n          ")])})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"菜单权限"}},[n("el-tree",{ref:"menu",attrs:{data:e.menuOptions,"show-checkbox":"","node-key":"id","empty-text":"加载中，请稍后",props:e.defaultProps}})],1),e._v(" "),n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},o=[],a=n("3528"),i=n("a6dc"),s=n("dc00"),l={mixins:[s["a"]],data:function(){return{statusOptions:[],menuOptions:[],queryParams:{roleName:void 0,roleKey:void 0,status:void 0},defaultProps:{children:"children",label:"label"},rules:{roleName:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],roleKey:[{required:!0,message:"权限字符不能为空",trigger:"blur"}],roleSort:[{required:!0,message:"角色顺序不能为空",trigger:"blur"}]}}},created:function(){var e=this;this.$nextTick((function(){e.init()})),this.getDicts("sys_normal_disable").then((function(t){e.statusOptions=t.data}))},methods:{beforeInit:function(){return this.base="/system/role",this.modelName="角色",!0},getMenuTreeselect:function(){var e=this;Object(i["f"])().then((function(t){e.menuOptions=t.data}))},getDeptTreeselect:function(){var e=this;deptTreeselect().then((function(t){e.deptOptions=t.data}))},getMenuAllCheckedKeys:function(){var e=this.$refs.menu.getHalfCheckedKeys(),t=this.$refs.menu.getCheckedKeys();return e.unshift.apply(e,t),e},getDeptAllCheckedKeys:function(){var e=this.$refs.dept.getHalfCheckedKeys(),t=this.$refs.dept.getCheckedKeys();return e.unshift.apply(e,t),e},getRoleMenuTreeselect:function(e){var t=this;Object(i["e"])(e).then((function(e){t.getMenuTreeselect(),t.$refs.menu.setCheckedKeys(e.data)}))},getRoleDeptTreeselect:function(e){var t=this;roleDeptTreeselect(e).then((function(e){t.getDeptTreeselect(),t.$refs.dept.setCheckedKeys(e.data)}))},handleStatusChange:function(e){var t=this,n="0"===e.status?"启用":"停用";this.$confirm('确认要"'+n+'""'+e.roleName+'"角色吗?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(a["b"])(e.id,e.status)})).then((function(e){200==e.code?t.msgSuccess(n+"成功"):t.msgError(n+"失败")})).catch((function(){e.status="0"===e.status?"1":"0"}))},reset:function(){void 0!=this.$refs.tree&&this.$refs.tree.setCheckedKeys([]),this.form={id:void 0,roleName:void 0,roleKey:void 0,roleSort:0,status:"0",menuIds:[],deptIds:[],remark:void 0},this.resetForm("form")},handleAdd:function(){this.reset(),this.getMenuTreeselect(),this.open=!0,this.title="添加角色"},handleUpdate:function(e){var t=this;this.reset(),this.$nextTick((function(){t.getRoleMenuTreeselect(e.id)})),Object(a["c"])(e.id).then((function(e){t.form=e.data,t.open=!0,t.title="修改角色"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.id?(e.form.menuIds=e.getMenuAllCheckedKeys(),Object(a["e"])(e.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.init()):e.msgError(t.msg)}))):(e.form.menuIds=e.getMenuAllCheckedKeys(),Object(a["a"])(e.form).then((function(t){200===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.open()):e.msgError(t.msg)}))))}))}}},u=l,c=n("2877"),d=Object(c["a"])(u,r,o,!1,null,null,null);t["default"]=d.exports},a6dc:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"b",(function(){return c}));var r=n("b775");function o(e){return Object(r["a"])({url:"/system/menu/list",method:"get",params:e})}function a(e){return Object(r["a"])({url:"/system/menu/"+e,method:"get"})}function i(){return Object(r["a"])({url:"/system/menu/treeselect",method:"get"})}function s(e){return Object(r["a"])({url:"/system/menu/roleMenuTreeselect/"+e,method:"get"})}function l(e){return Object(r["a"])({url:"/system/menu",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/system/menu",method:"put",data:e})}function c(e){return Object(r["a"])({url:"/system/menu/"+e,method:"delete"})}},dc00:function(e,t,n){"use strict";n("96cf");var r=n("3b8d"),o=n("b775");function a(e,t){return Object(o["a"])({url:e+"/list",method:"get",params:t})}function i(e,t){return Object(o["a"])({url:e+"/"+t,method:"delete"})}function s(e){return Object(o["a"])({url:e+"/clean",method:"delete"})}function l(e,t){return Object(o["a"])({url:e,method:"post",data:t})}function u(e,t){return Object(o["a"])({url:e,method:"put",data:t})}t["a"]={data:function(){return{title:"",modalName:"",ids:[],single:!0,multiple:!0,row:void 0,loading:!0,delLoading:!1,total:0,list:[],open:!1,dateRange:[],form:{},queryParams:{pageNum:1,pageSize:10,orderByColumn:"createTime",isAsc:"desc"},time:50,base:""}},methods:{init:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.beforeInit();case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.abrupt("return",new Promise((function(e,n){t.loading=!0,a(t.base,t.queryParams).then((function(n){t.total=n.total,t.list=n.rows,setTimeout((function(){t.loading=!1}),t.time),e(n)})).catch((function(e){t.loading=!1,n(e)}))})));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleQuery:function(){this.queryParams.pageNum=1,this.init()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.row=e[0],this.ids=e.map((function(e){return e.id})),this.single=1!=e.length,this.multiple=!e.length},handleSubDelete:function(e){var t=this;return this.delLoading=!0,new Promise((function(n,r){i(t.base,e).then((function(r){t.delLoading=!1,200==r.code?(t.$refs[e].doClose(),t.init(),t.msgSuccess("删除成功")):t.msgError("删除失败"),n(r)})).catch((function(e){t.delLoading=!1,r(e)}))}))},handleAdd:function(){this.reset(),this.form={},this.open=!0,this.title="添加"+this.modelName},submitForm:function(e){var t=this;void 0==this.$refs[e]&&(e="form"),this.$refs[e].validate((function(e){e&&(void 0!=t.form.id?u(t.base,t.form).then((function(e){200===e.code?(t.msgSuccess("修改成功"),t.open=!1,t.init()):t.msgError(e.msg)})):l(t.base,t.form).then((function(e){200===e.code?(t.msgSuccess("新增成功"),t.open=!1,t.init()):t.msgError(e.msg)})))}))},cancel:function(){this.open=!1,this.form={}},reset:function(){this.resetForm("form")},handleUpdate:function(e){var t=e||this.row;this.form=t,this.open=!0,this.title="修改"+this.modelName},handleExport:function(){},handleDelete:function(){this.delLoading=!0;var e=this;this.$confirm('是否确认删除主键为"'+e.ids+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i(e.base,e.ids).then((function(t){e.delLoading=!1,200==t.code?(e.init(),e.msgSuccess("删除成功")):e.msgError("删除失败")})).catch((function(t){e.delLoading=!1}))})).catch((function(t){e.delLoading=!1}))},handleClean:function(){this.delLoading=!0;var e=this;this.$confirm("是否确认清空所有数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){s(e.base).then((function(t){e.delLoading=!1,200==t.code?(e.init(),e.msgSuccess("清空成功")):e.msgError("清空失败:"+t.msg)})).catch((function(t){e.delLoading=!1}))})).catch((function(t){e.delLoading=!1}))}}}}}]);