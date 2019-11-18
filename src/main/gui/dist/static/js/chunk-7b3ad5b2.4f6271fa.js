(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b3ad5b2","chunk-16e095cf"],{5039:function(t,e,o){},"5dae":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"form",staticClass:"form-container",attrs:{model:t.form,rules:t.rules}},[o("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.form.status}},[o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitBlog}},[t._v("\n        发布\n      ")]),t._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:t.draftBlog}},[t._v("\n        保存草稿\n      ")])],1),t._v(" "),o("div",{staticClass:"createPost-main-container"},[o("el-row",[o("el-row",[o("el-col",{attrs:{span:18}},[o("el-form-item",{attrs:{prop:"title",label:"标题: ","label-width":"60px"}},[o("el-input",{attrs:{placeholder:"请输入标题",clearable:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),o("el-form-item",{attrs:{"label-width":"60px",label:"摘要: ",prop:"summary"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:3},placeholder:"请输入摘要"},model:{value:t.form.summary,callback:function(e){t.$set(t.form,"summary",e)},expression:"form.summary"}})],1),t._v(" "),o("el-row",[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{prop:"categoryId","label-width":"60px",label:"分类: "}},[o("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择文章分类"},model:{value:t.form.categoryId,callback:function(e){t.$set(t.form,"categoryId",e)},expression:"form.categoryId"}},t._l(t.categoryOptions,(function(t){return o("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1)],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"60px",label:"推荐: ",prop:"support"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.form.support,callback:function(e){t.$set(t.form,"support",e)},expression:"form.support"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:8}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"60px",label:"评论: ",prop:"comment"}},[o("el-radio-group",{model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}},[o("el-radio",{attrs:{label:!0}},[t._v("开启")]),t._v(" "),o("el-radio",{attrs:{label:!1}},[t._v("关闭")])],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"postInfo-container"},[o("el-row",[o("el-col",{attrs:{span:8}},[o("el-form-item",{attrs:{"label-width":"60px",label:"权重: ",prop:"weight"}},[o("el-rate",{staticStyle:{display:"inline-block"},attrs:{max:5,colors:["#99A9BF","#F7BA2A","#FF9900"],"low-threshold":1,"high-threshold":5},model:{value:t.form.weight,callback:function(e){t.$set(t.form,"weight",e)},expression:"form.weight"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:16}},[o("el-form-item",{attrs:{"label-width":"60px",label:"标签: ",prop:"tag"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"","default-first-option":"",filterable:"",remote:"",loading:t.loading,"remote-method":t.getRemoteTagList,"allow-create":"",placeholder:"请选择文章标签"},model:{value:t.form.tag,callback:function(e){t.$set(t.form,"tag",e)},expression:"form.tag"}},t._l(t.blogTagOptions,(function(t){return o("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1)],1)],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{prop:"headerImg","label-width":"60px",label:"封面"}},[o("drop-zone",{attrs:{id:"myVueDropzone",url:"https://httpbin.org/post",defaultImg:t.form.headerImg},on:{"dropzone-removedFile":t.dropzoneR,"dropzone-success":t.dropzoneS}})],1)],1)],1)],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[o("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1)],1)],1)},a=[],n=(o("28a5"),o("b804")),i=o("8256"),s=o("1eef"),l=o("89d1"),c=o("8bc5"),m={name:"BlogDetail",components:{Tinymce:i["a"],DropZone:s["a"],Sticky:n["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{form:{weight:1,tag:[],comment:!0,support:!1},loading:!1,tempRoute:{},categoryOptions:[],blogTagOptions:[],rules:{title:[{required:!0,message:"文章标题不能为空",trigger:"blur"},{min:3,max:50,message:"长度在 3 到 50 个字符",trigger:"change"}],summary:[{required:!0,message:"文章摘要不能为空",trigger:"blur"},{min:10,max:150,message:"长度在 10 到 150 个字符",trigger:"change"}],categoryId:[{required:!0,message:"文章分类不能为空",trigger:"change"}],comment:[{required:!0,message:"评论不能为空",trigger:"change"}],tag:[{required:!0,message:"至少选择一个标签",trigger:"change"}]}}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}this.tempRoute=Object.assign({},this.$route),this.getCategory()},methods:{getRemoteTagList:function(t){var e=this;""!==t?(this.loading=!0,setTimeout((function(){e.loading=!1,Object(l["f"])(t).then((function(t){e.blogTagOptions=t.rows,e.loading=!1}))}),200)):this.blogTagOptions=[]},getCategory:function(){var t=this;Object(c["b"])().then((function(e){t.categoryOptions=e.rows}))},dropzoneS:function(t){console.log(t),this.$message({message:"上传成功",type:"success"})},dropzoneR:function(t){console.log(t),this.$message({message:"删除成功",type:"success"})},fetchData:function(t){var e=this;Object(l["e"])(t).then((function(t){200==t.code?(console.log(t.data.tag),"undefined"!=typeof t.data.tag&&(t.data.tag=t.data.tag.split(",")),e.form=t.data):e.msgError(t.msg)}))},setPageTitle:function(){var t="编辑文章";document.title="".concat(t," - ").concat(this.form.id)},submitBlog:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.loading=!0,t.form.status=!0,t.form.tag=t.form.tag.join(","),void 0==t.form.id?Object(l["a"])(t.form).then((function(e){200===e.code?t.msgSuccess("发布成功"):t.msgError(e.msg),t.loading=!1,t.form.tag=t.form.tag.split(",")})):Object(l["g"])(t.form).then((function(e){200===e.code?(t.msgSuccess("发布成功"),t.$store.dispatch("tagsView/delView",view).then((function(e){var o=e.visitedViews;t.isActive(view)&&t.toLastView(o,view)}))):t.msgError(e.msg),t.loading=!1,t.form.tag=t.form.tag.split(",")})))}))},draftBlog:function(){var t=this;0!==this.form.content.length&&0!==this.form.title.length?(this.form.status=!1,void 0==this.form.id?Object(l["b"])(this.form).then((function(e){200===e.code?t.msgSuccess("保存草稿成功"):t.msgError(e.msg)})):Object(l["h"])(this.form).then((function(e){200===e.code?t.msgSuccess("保存草稿成功"):t.msgError(e.msg)}))):this.$message({message:"请填写必要的标题和内容",type:"warning"})}}},u=m,g=(o("a0f1"),o("2877")),d=Object(g["a"])(u,r,a,!1,null,"2b3596c2",null);e["default"]=d.exports},"730d":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("blog-detail",{attrs:{"is-edit":!0}})},a=[],n=o("5dae"),i={name:"EditBlog",components:{BlogDetail:n["default"]}},s=i,l=o("2877"),c=Object(l["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports},"89d1":function(t,e,o){"use strict";o.d(e,"e",(function(){return a})),o.d(e,"a",(function(){return n})),o.d(e,"g",(function(){return i})),o.d(e,"d",(function(){return s})),o.d(e,"c",(function(){return l})),o.d(e,"f",(function(){return c})),o.d(e,"b",(function(){return m})),o.d(e,"h",(function(){return u}));var r=o("b775");function a(t){return Object(r["a"])({url:"/blog/blog/"+t,method:"get"})}function n(t){return Object(r["a"])({url:"/blog/blog",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/blog/blog",method:"put",data:t})}function s(t,e){var o={id:t,support:e};return Object(r["a"])({url:"/blog/blog/support",method:"put",data:o})}function l(t,e){var o={id:t,comment:e};return Object(r["a"])({url:"/blog/blog/comment",method:"put",data:o})}function c(t){return Object(r["a"])({url:"/blog/blog/tag/"+t,method:"get"})}function m(t){return Object(r["a"])({url:"/blog/blog/draft",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/blog/blog/draft",method:"put",data:t})}},"8bc5":function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"a",(function(){return i}));var r=o("b775");function a(t){return Object(r["a"])({url:"/blog/category/list",method:"get",params:t})}function n(t){return Object(r["a"])({url:"/blog/category",method:"put",data:t})}function i(t,e){var o={id:t,support:e};n(o)}},a0f1:function(t,e,o){"use strict";var r=o("5039"),a=o.n(r);a.a}}]);