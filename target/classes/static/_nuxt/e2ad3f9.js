(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{379:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(133).default)("1b7833da",content,!0,{sourceMap:!1})},384:function(t,e,n){"use strict";n(379)},385:function(t,e,n){var o=n(132)(!1);o.push([t.i,"body{margin:0;background-color:#faebd7}.container{margin-left:auto;margin-right:auto;padding:0 15px;max-width:86rem;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column}.title{font-size:20px;margin-bottom:10px}.card{width:100%}.card>.el-card__body{display:flex}.img{width:360px;height:240px}.img .image-slot{display:flex;justify-content:center;align-items:center;width:100%;height:100%;background:#f5f7fa;color:#909399;font-size:24px}.upload{margin-top:10px;width:360px}.text{width:100%;margin-left:30px}",""]),t.exports=o},386:function(t,e,n){"use strict";n.r(e);n(22),n(48),n(50),n(380),n(252);var o={name:"IndexPage",data:function(){return{videoUrl:"",text:"",loading:!1}},methods:{beforeUpload:function(t){var e=[];return e.push(t),this.videoUrl=window.URL.createObjectURL(new Blob(e)),this.loading=!0,!0},handleUploadSuccess:function(t,e){this.loading=!1,this.text=t},handleUploadRemove:function(){this.videoUrl="",this.text=""}}},l=(n(384),n(67)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"title"},[t._v("\n    视频上传\n  ")]),t._v(" "),n("el-card",{staticClass:"card"},[n("div",[n("h4",[t._v("视频预览")]),t._v(" "),n("video",{attrs:{src:t.videoUrl,width:"360",height:"240",controls:""}}),t._v(" "),n("el-upload",{staticClass:"upload",attrs:{action:"upload","before-upload":t.beforeUpload,"on-success":t.handleUploadSuccess,"on-remove":t.handleUploadRemove,limit:1}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("\n          点击上传\n        ")]),t._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("\n          只能上传视频文件\n        ")])],1)],1),t._v(" "),n("div",{staticClass:"text"},[n("h4",[t._v("结果码")]),t._v(" "),n("el-input",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"textarea",rows:11},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);