(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"BD+o":function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("miYZ");var r=n(a("tsqr"));a("/zsF");var d=n(a("PArb"));a("Znn+");var i=n(a("ZTPi"));a("Pwec");var o=n(a("CtXQ")),u=n(a("2Taf")),c=n(a("vZ4D")),f=n(a("l4Ni")),m=n(a("ujKo")),s=n(a("MhPg")),p=l(a("q1tI")),g=a("Y2fQ"),E=n(a("cPMy")),h=a("ZqYi"),w=n(a("jICn")),R=n(a("kOgO")),v=n(a("ab+C")),b=function(e){function t(){var e;return(0,u.default)(this,t),e=(0,f.default)(this,(0,m.default)(t).apply(this,arguments)),e.columns=[{title:p.default.createElement(g.FormattedMessage,{id:"app.crawler.rule-conf.label.region.selector"}),dataIndex:"selector"},{title:p.default.createElement(g.FormattedMessage,{id:"app.crawler.rule-conf.label.region.name"}),dataIndex:"name"},{title:p.default.createElement(g.FormattedMessage,{id:"app.common.label.memo"}),dataIndex:"remarks"},{title:p.default.createElement(g.FormattedMessage,{id:"app.common.label.operation"}),align:"center",key:"operation",width:200,render:function(t,a){return p.default.createElement(p.default.Fragment,null,p.default.createElement(w.default,{title:(0,g.formatMessage)({id:"component.common.text.detail"}),element:p.default.createElement("a",null,p.default.createElement(o.default,{type:"info-circle"}),p.default.createElement(g.FormattedMessage,{id:"component.common.text.detail"})),fullScreen:!0,maxmin:!1,footer:!1},p.default.createElement(i.default,{tabPosition:"left"},p.default.createElement(i.default.TabPane,{tab:(0,g.formatMessage)({id:"app.crawler.rule-conf.label.region.fields"}),key:"1"},p.default.createElement(v.default,{regionId:a.id})),p.default.createElement(i.default.TabPane,{tab:(0,g.formatMessage)({id:"app.crawler.rule-conf.label.region.links"}),key:"2"},p.default.createElement("p",null,"Content of Tab Pane 2"),p.default.createElement("p",null,"Content of Tab Pane 2")))),p.default.createElement(d.default,{type:"vertical"}),p.default.createElement(h.ModalForm,{title:(0,g.formatMessage)({id:"component.common.text.edit"}),element:p.default.createElement("a",null,p.default.createElement(o.default,{type:"edit"}),p.default.createElement(g.FormattedMessage,{id:"component.common.text.edit"})),formItems:R.default,formValues:a,onSubmit:e.handleEdit}))}}],e.handleAdd=function(t){return e.handleAddOrEdit("ruleConf/createPageRegion",t)},e.handleEdit=function(t){return e.handleAddOrEdit("ruleConf/modifyPageRegion",t)},e.handleAddOrEdit=function(t,a){var l=e.props.dispatch;return l({type:t,payload:a}).then(function(){r.default.success((0,g.formatMessage)({id:"component.common.text.".concat(-1!==t.indexOf("create")?"add":"edit","-success")}))})},e}return(0,s.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.data;return p.default.createElement(E.default,{columns:this.columns,data:e})}}]),t}(p.PureComponent),y=b;t.default=y},BHza:function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=n(a("2/Rp"));a("5NDa");var d=n(a("5rEg"));a("y8nQ");var i=n(a("Vl3Y"));a("jCWc");var o=n(a("kPKH"));a("miYZ");var u=n(a("tsqr"));a("/zsF");var c=n(a("PArb"));a("Pwec");var f=n(a("CtXQ")),m=n(a("2Taf")),s=n(a("vZ4D")),p=n(a("l4Ni")),g=n(a("ujKo")),E=n(a("rlhR")),h=n(a("MhPg")),w=l(a("q1tI")),R=a("Hg0r"),v=a("Y2fQ"),b=a("Ag2N"),y=n(a("CDBU")),x=a("ZqYi"),M=a("c+yx"),F=n(a("PkMP")),I=n(a("BD+o")),P=n(a("kOgO")),k=function(e,t,a,l){var n,r=arguments.length,d=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,t,a,l);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(d=(r<3?n(d):r>3?n(t,a,d):n(t,a))||d);return r>3&&d&&Object.defineProperty(t,a,d),d},C=function(e){function t(){var e;return(0,m.default)(this,t),e=(0,p.default)(this,(0,g.default)(t).apply(this,arguments)),e.state={selectedRows:[]},e.pageRef=w.default.createRef(),e.columns=[{title:w.default.createElement(v.FormattedMessage,{id:"app.crawler.rule-conf.label.name"}),dataIndex:"name",width:"10%"},{title:w.default.createElement(v.FormattedMessage,{id:"app.crawler.rule-conf.label.url-regex"}),dataIndex:"urlRegex",width:"10%"},{title:w.default.createElement(v.FormattedMessage,{id:"app.crawler.rule-conf.label.example-url"}),dataIndex:"urlExample",width:"10%",render:function(e){return w.default.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",title:(0,v.formatMessage)({id:"app.common.label.open-in-new-window"}),onClick:function(t){t.preventDefault(),t.stopPropagation(),(0,M.openWindow)(e)}},e)}},{title:w.default.createElement(v.FormattedMessage,{id:"app.crawler.rule-conf.label.enable-js"}),dataIndex:"jsRendering",render:function(e){return(0,v.formatMessage)({id:"app.common.label.".concat(1===e?"yes":"no")})},width:"10%"},{title:w.default.createElement(v.FormattedMessage,{id:"app.crawler.rule-conf.label.method"}),dataIndex:"method",width:"10%"},{title:w.default.createElement(v.FormattedMessage,{id:"app.crawler.rule-conf.label.example-params"}),dataIndex:"pageParamsExample",width:"10%"},{title:w.default.createElement(v.FormattedMessage,{id:"app.crawler.rule-conf.label.validation-selector"}),dataIndex:"pageValidationSelector"},{title:w.default.createElement(v.FormattedMessage,{id:"app.common.label.operation"}),align:"center",key:"operation",width:200,render:function(t,a){return w.default.createElement(w.default.Fragment,null,w.default.createElement(x.ModalForm,{title:(0,v.formatMessage)({id:"component.common.text.edit"}),onSubmit:e.handleEdit,element:w.default.createElement("a",null,w.default.createElement(f.default,{type:"edit"}),w.default.createElement(v.FormattedMessage,{id:"component.common.text.edit"})),formItems:F.default,formValues:a}),w.default.createElement(c.default,{type:"vertical"}),w.default.createElement(x.ModalForm,{title:(0,v.formatMessage)({id:"app.crawler.rule-conf.add-new-page-region"}),onSubmit:e.handleAddPageRegion,element:w.default.createElement("a",null,w.default.createElement(f.default,{type:"plus"}),w.default.createElement(v.FormattedMessage,{id:"app.crawler.rule-conf.operation.label.add-region"})),formItems:P.default,formValues:{pageInfo:{id:a.id}}}),w.default.createElement(c.default,{type:"vertical"}),w.default.createElement(y.default,{onConfirm:function(){return e.onDelete([a.id])}}))}}],e.expandedRowRender=function(t){var a=e.props.dispatch;return t.pageRegions&&t.pageRegions.length>0?w.default.createElement(I.default,{data:{list:t.pageRegions||[],pagination:t.pageRegions.length>10&&void 0},dispatch:a}):null},e.onDelete=function(t){var a=e.props.dispatch,l=e.state.selectedRows;if(t){var n=(0,E.default)(e);a({type:"ruleConf/remove",payload:{ids:t.join(",")}}).then(function(){n.setState({selectedRows:l.filter(function(e){return-1===t.indexOf(e.id)})}),n.pageRef.current&&n.pageRef.current.doSearch(),u.default.success((0,v.formatMessage)({id:"component.common.text.deleted-success"}))}).catch(function(){})}},e.handleAddPageRegion=function(t){return e.handleAddOrEdit("ruleConf/createPageRegion",t)},e.handleAdd=function(t){return e.handleAddOrEdit("ruleConf/create",t)},e.handleEdit=function(t){return e.handleAddOrEdit("ruleConf/modify",t)},e.handleAddOrEdit=function(t,a){var l=e.props.dispatch,n=(0,E.default)(e);return l({type:t,payload:a}).then(function(){(t.endsWith("create")||t.endsWith("modify"))&&n.pageRef.current&&n.pageRef.current.doSearch(),u.default.success((0,v.formatMessage)({id:"component.common.text.".concat(-1!==t.indexOf("create")?"add":"edit","-success")}))})},e.handleSelectRows=function(t){e.setState({selectedRows:t})},e.searchFormRender=function(e){var t=e.getFieldDecorator;return w.default.createElement(o.default,{md:8,sm:24},w.default.createElement(i.default.Item,{label:w.default.createElement(v.FormattedMessage,{id:"app.crawler.site.filter.name"})},t("name")(w.default.createElement(d.default,{placeholder:"\u8bf7\u8f93\u5165"}))))},e.operatorRender=function(){return w.default.createElement(x.ModalForm,{title:w.default.createElement(v.FormattedMessage,{id:"app.crawler.rule-conf.add-new-rule-conf"}),onSubmit:e.handleAdd,formItems:F.default,element:w.default.createElement(r.default,{type:"primary",icon:"plus"},w.default.createElement(v.FormattedMessage,{id:"component.common.text.add"}))})},e}return(0,h.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.dispatch,l=t.loading,n=t.ruleConf.data,r=this.state.selectedRows;return w.default.createElement(b.TablePage,{ref:this.pageRef,title:(0,v.formatMessage)({id:"menu.rule-conf"}),action:"ruleConf/fetch",columns:this.columns,expandedRowRender:this.expandedRowRender,data:n,loading:l,searchFormRender:this.searchFormRender,operatorRender:this.operatorRender,handleSelectRows:this.handleSelectRows,selectedRows:r,onDelete:function(t){return e.onDelete(t.map(function(e){return e.id}))},dispatch:a,tableOptions:{scroll:{x:!1},expandRowByClick:!0}})}}]),t}(w.Component);C=k([(0,R.connect)(function(e){var t=e.ruleConf,a=e.loading;return{ruleConf:t,loading:a.models.ruleConf}})],C);var D=C;t.default=D},PkMP:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("d6i3"));a("7Kak");var r=l(a("9yH6"));a("BoS7");var d=l(a("Sdc0"));a("5NDa");var i=l(a("5rEg")),o=l(a("1l/V")),u=l(a("q1tI")),c=a("Y2fQ"),f=a("Qymd");function m(e,t){return s.apply(this,arguments)}function s(){return s=(0,o.default)(n.default.mark(function e(t,a){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,f.checkUrlRegex)(this.getFieldValue("urlRegex"),this.getFieldValue("urlExample"),this.getFieldValue("id")).then(function(e){var t=e.data;return t?Promise.resolve(a):Promise.reject(new Error((0,c.formatMessage)({id:"app.common.err.record.exist"})))}));case 1:case"end":return e.stop()}},e,this)})),s.apply(this,arguments)}function p(){var e={labelCol:{span:"en-US"===(0,c.getLocale)()?7:5},wrapperCol:{span:"en-US"===(0,c.getLocale)()?13:15}};return[{label:"id",name:"id",itemRender:u.default.createElement(i.default,{type:"hidden"}),hidden:!0},{label:u.default.createElement(c.FormattedMessage,{id:"app.crawler.rule-conf.label.name"}),name:"name",rules:[{required:!0,message:u.default.createElement(c.FormattedMessage,{id:"app.crawler.rule-conf.validation.name.not-empty"})}],itemRender:u.default.createElement(i.default,{placeholder:(0,c.formatMessage)({id:"app.crawler.rule-conf.label.name"})}),formItemLayout:e},{label:u.default.createElement(c.FormattedMessage,{id:"app.crawler.rule-conf.label.url-regex"}),name:"urlRegex",rules:[{required:!0,message:u.default.createElement(c.FormattedMessage,{id:"app.crawler.rule-conf.validation.url-regex.not-empty"})},{validator:m.bind(this)}],itemRender:u.default.createElement(i.default,{placeholder:"URL\u6b63\u5219\u8868\u8fbe\u5f0f"}),formItemLayout:e},{label:u.default.createElement(c.FormattedMessage,{id:"app.crawler.rule-conf.label.example-url"}),name:"urlExample",rules:[{type:"url",message:u.default.createElement(c.FormattedMessage,{id:"app.crawler.rule-conf.validation.url.not-match"})}],itemRender:u.default.createElement(i.default,{placeholder:"URL\u793a\u4f8b"}),formItemLayout:e},{label:u.default.createElement(c.FormattedMessage,{id:"app.crawler.rule-conf.label.enable-js"}),name:"enableJs",itemRender:u.default.createElement(d.default,null),formItemLayout:e,defaultValue:!1,fieldDecoratorProps:{valuePropName:"checked"},rules:[{required:!0}]},{label:u.default.createElement(c.FormattedMessage,{id:"app.crawler.rule-conf.label.enable-redirect"}),name:"enableRedirect",itemRender:u.default.createElement(d.default,null),formItemLayout:e,defaultValue:!0,fieldDecoratorProps:{valuePropName:"checked"},rules:[{required:!0}]},{label:u.default.createElement(c.FormattedMessage,{id:"app.crawler.rule-conf.label.method"}),name:"method",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8bf7\u6c42\u65b9\u5f0f"}],itemRender:u.default.createElement(r.default.Group,null,u.default.createElement(r.default,{value:"GET"},"GET"),u.default.createElement(r.default,{value:"POST"},"POST"),u.default.createElement(r.default,{value:"PUT"},"PUT"),u.default.createElement(r.default,{value:"DELETE"},"DELETE")),defaultValue:"GET",formItemLayout:e,formItemProps:{className:"wrap-label"}},{label:u.default.createElement(c.FormattedMessage,{id:"app.crawler.rule-conf.label.example-params"}),name:"pageParamsExample",itemRender:u.default.createElement(i.default.TextArea,{placeholder:"\u8bf7\u8f93\u5165JSON\u683c\u5f0f\u7684\u5185\u5bb9",style:{minHeight:100}}),formItemLayout:e,formItemProps:{className:"wrap-label"}},{label:u.default.createElement(c.FormattedMessage,{id:"app.crawler.rule-conf.label.validation-selector"}),name:"pageValidationSelector",itemRender:u.default.createElement(i.default.TextArea,{placeholder:"\u9875\u9762\u9a8c\u8bc1\u89e3\u6790\u8868\u8fbe\u5f0f",style:{minHeight:100}}),formItemLayout:e,formItemProps:{className:"wrap-label"}},{label:u.default.createElement(c.FormattedMessage,{id:"app.common.label.memo"}),name:"remarks",itemRender:u.default.createElement(i.default.TextArea,{placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",style:{minHeight:100}}),formItemLayout:e}]}var g=p;t.default=g},"ab+C":function(e,t,a){"use strict";var l=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("qIgq")),d=n(a("gWZ8"));a("+L6B");var i=n(a("2/Rp"));a("miYZ");var o=n(a("tsqr")),u=n(a("p0pE")),c=n(a("Y/ft"));a("qVdP");var f=n(a("jsC+"));a("/zsF");var m=n(a("PArb"));a("Pwec");var s=n(a("CtXQ"));a("lUTK");var p=n(a("BvKs"));a("BoS7");var g=n(a("Sdc0"));a("5NDa");var E=n(a("5rEg")),h=n(a("2Taf")),w=n(a("vZ4D")),R=n(a("l4Ni")),v=n(a("ujKo")),b=n(a("rlhR")),y=n(a("MhPg")),x=l(a("q1tI")),M=a("Hg0r"),F=a("Y2fQ"),I=n(a("Wwog")),P=a("Ag2N"),k=n(a("CDBU")),C=function(e){function t(e){var a;return(0,h.default)(this,t),a=(0,R.default)(this,(0,v.default)(t).call(this,e)),a.columns=[{title:x.default.createElement(F.FormattedMessage,{id:"app.crawler.rule-conf.label.region.fields.name"}),dataIndex:"name",editingRender:{fieldDecoratorOptions:{rules:[{required:!0,message:x.default.createElement(F.FormattedMessage,{id:"app.common.validation.not-empty"})}]},itemRender:function(){return x.default.createElement(E.default,null)}},width:300,fixed:"left"},{title:x.default.createElement(F.FormattedMessage,{id:"app.crawler.rule-conf.label.region.fields.alias"}),dataIndex:"alias",editingRender:{fieldDecoratorOptions:{rules:[{required:!0,message:x.default.createElement(F.FormattedMessage,{id:"app.common.validation.not-empty"})}]},itemRender:function(){return x.default.createElement(E.default,null)}},width:100},{title:x.default.createElement(F.FormattedMessage,{id:"app.crawler.rule-conf.label.region.fields.selector"}),dataIndex:"selector",ellipsis:!0,editingRender:{fieldDecoratorOptions:{rules:[{required:!0,message:x.default.createElement(F.FormattedMessage,{id:"app.common.validation.not-empty"})}]},itemRender:function(){return x.default.createElement(E.default.TextArea,{autoSize:!0})}},width:100},{title:x.default.createElement(F.FormattedMessage,{id:"app.crawler.rule-conf.label.region.fields.validation-selector"}),dataIndex:"validationSelector",ellipsis:!0,editingRender:{itemRender:function(){return x.default.createElement(E.default.TextArea,{autoSize:!0})}},width:100},{title:x.default.createElement(F.FormattedMessage,{id:"app.crawler.rule-conf.label.region.fields.required"}),dataIndex:"required",render:function(e,t){return x.default.createElement(g.default,{defaultChecked:e,disabled:!t.editing})},editingRender:{fieldDecoratorOptions:{valuePropName:"checked"},itemRender:function(){return x.default.createElement(g.default,null)}},width:100},{title:x.default.createElement(F.FormattedMessage,{id:"app.crawler.rule-conf.label.region.fields.primary-key"}),dataIndex:"primaryKey",render:function(e,t){return x.default.createElement(g.default,{defaultChecked:e,disabled:!t.editing})},editingRender:{fieldDecoratorOptions:{valuePropName:"checked"},itemRender:function(){return x.default.createElement(g.default,null)}},width:100},{title:x.default.createElement(F.FormattedMessage,{id:"app.crawler.rule-conf.label.region.fields.repeated"}),dataIndex:"repeated",render:function(e,t){return x.default.createElement(g.default,{defaultChecked:e,disabled:!t.editing})},editingRender:{fieldDecoratorOptions:{valuePropName:"checked"},itemRender:function(){return x.default.createElement(g.default,null)}},width:100},{title:x.default.createElement(F.FormattedMessage,{id:"app.crawler.rule-conf.label.region.fields.temp"}),dataIndex:"temp",render:function(e,t){return x.default.createElement(g.default,{defaultChecked:e,disabled:!t.editing})},editingRender:{fieldDecoratorOptions:{valuePropName:"checked"},itemRender:function(){return x.default.createElement(g.default,null)}},width:100},{title:x.default.createElement(F.FormattedMessage,{id:"app.crawler.rule-conf.label.region.fields.download"}),dataIndex:"download",render:function(e,t){return x.default.createElement(g.default,{defaultChecked:e,disabled:!t.editing})},editingRender:{fieldDecoratorOptions:{valuePropName:"checked"},itemRender:function(){return x.default.createElement(g.default,null)}},width:100},{title:x.default.createElement(F.FormattedMessage,{id:"app.common.label.memo"}),dataIndex:"remarks",editingRender:{itemRender:function(){return x.default.createElement(E.default.TextArea,{autoSize:!0})}},width:100},{title:x.default.createElement(F.FormattedMessage,{id:"app.common.label.operation"}),align:"center",key:"operation",fixed:"right",width:300,render:function(e,t,l,n){var r="";null!=a.state.editingRecord&&(r=a.state.editingRecord.id);var d=x.default.createElement(p.default,null,x.default.createElement(p.default.Item,{disabled:""!==r,onClick:function(){return a.handleAddClick(t.id)}},x.default.createElement("a",null,x.default.createElement(s.default,{type:"plus"}),x.default.createElement(F.FormattedMessage,{id:"app.crawler.rule-conf.operation.label.add-field"}))));return x.default.createElement(x.default.Fragment,null,t.editing?x.default.createElement(x.default.Fragment,null,x.default.createElement("a",{onClick:function(){return a.handleEditSave(n)}},x.default.createElement(s.default,{type:"check"}),x.default.createElement(F.FormattedMessage,{id:"component.common.text.save"})),"\xa0\xa0\xa0\xa0",x.default.createElement("a",{onClick:function(){return a.handleEditCancel()}},x.default.createElement(s.default,{type:"close"}),x.default.createElement(F.FormattedMessage,{id:"component.common.text.cancel"}))):x.default.createElement("a",{disabled:""!==r,onClick:function(){return a.handleEditClick(t)}},x.default.createElement(s.default,{type:"edit"}),x.default.createElement(F.FormattedMessage,{id:"component.common.text.edit"})),t.id!==a.newKey&&x.default.createElement(x.default.Fragment,null,x.default.createElement(m.default,{type:"vertical"}),x.default.createElement(k.default,{onConfirm:function(){return a.onDelete([t.id])}}),x.default.createElement(m.default,{type:"vertical"}),x.default.createElement(f.default,{overlay:d},x.default.createElement("a",{className:"ant-dropdown-link",href:"#"},x.default.createElement(F.FormattedMessage,{id:"app.common.bale.more"})," ",x.default.createElement(s.default,{type:"down"})))))}}],a.newKey="new",a.newDataExpandRowKey="",a.pageRef=x.default.createRef(),a.assemblyDataByMemoize=(0,I.default)(function(e,t,l){a.newDataExpandRowKey="";var n=l&&l.parentId!==a.props.regionId?t.map(function(t){return a.assemblyDataListWithNew(t,l,[],e)}):t.map(function(t){return a.assemblyDataList(t,e)});return[n,a.newDataExpandRowKey]}),a.handleAddClick=function(e){var t={id:a.newKey,name:"",selector:"",parentId:e,pageRegion:{id:a.props.regionId,name:"",selector:""}};a.setState({editingRecord:t})},a.handleEditClick=function(e){a.setState({editingRecord:e})},a.fixRowHeightAlign=function(){window.dispatchEvent(new CustomEvent("resize"))},a.handleEditSave=function(e){e&&e.validateFields().then(function(e){if(null!=a.state.editingRecord){var t=a.state.editingRecord,l=t.id,n=t.parentId,r=t.pageRegion,d=(e.id,(0,c.default)(e,["id"])),i=l===a.newKey?a.handleAdd((0,u.default)({},d,{pageRegion:r,parentId:n})):a.handleEdit((0,u.default)({id:l},e,{pageRegion:r,parentId:n}));i.then(function(){a.resetEditingState()})}})},a.handleEditCancel=function(){a.resetEditingState()},a.handleAdd=function(e){return a.handleAddOrEdit("regionFields/create",e)},a.handleEdit=function(e){return a.handleAddOrEdit("regionFields/modify",e)},a.handleAddOrEdit=function(e,t){var l=a.props.dispatch,n=(0,b.default)(a);return l({type:e,payload:t}).then(function(){(e.endsWith("create")||e.endsWith("modify"))&&n.pageRef.current&&n.pageRef.current.doSearch(),""!==a.newDataExpandRowKey&&a.setState({expandRowKeys:a.state.expandRowKeys.concat(a.newDataExpandRowKey)}),o.default.success((0,F.formatMessage)({id:"component.common.text.".concat(-1!==e.indexOf("create")?"add":"edit","-success")}))})},a.resetEditingState=function(){a.state.editingRecord&&(a.state.editingRecord.id,a.newKey),a.setState({editingRecord:null})},a.onDelete=function(e){var t=a.props.dispatch;if(e){var l=(0,b.default)(a);t({type:"regionFields/remove",payload:{ids:e.join(",")}}).then(function(){l.pageRef.current&&l.pageRef.current.doSearch();var t="";a.state.editingRecord&&(t=a.state.editingRecord.id),""!==t&&-1!==e.findIndex(function(e){return e===t})&&a.resetEditingState(),o.default.success((0,F.formatMessage)({id:"component.common.text.deleted-success"}))}).catch(function(){})}},a.operatorRender=function(){return x.default.createElement(i.default,{type:"primary",icon:"plus",disabled:null!=a.state.editingRecord,onClick:function(){return a.handleAddClick(a.props.regionId)}},x.default.createElement(F.FormattedMessage,{id:"component.common.text.add"}))},a.assemblyDataList=function(e,t){var l=e.children,n=e.id,r=(0,c.default)(e,["children","id"]);return(0,u.default)({id:n},r,{editing:n===t,children:l&&l.length>0?l.map(function(e){return a.assemblyDataList(e,t)}):void 0})},a.assemblyDataListWithNew=function(e,t,l,n){var r=e.children,i=e.id,o=(0,c.default)(e,["children","id"]),f=r;return t.parentId===i?(void 0===f&&(f=[]),f=[t].concat((0,d.default)(f)),f=f.map(function(e){return a.assemblyDataList(e,n)}),a.newDataExpandRowKey=i):f=f&&f.length>0?f.map(function(e){return a.assemblyDataListWithNew(e,t,[].concat((0,d.default)(l),[i]),n)}):void 0,(0,u.default)({id:i},o,{editing:i===n,children:f})},a.state={editingRecord:null,expandRowKeys:[]},a}return(0,y.default)(t,e),(0,w.default)(t,[{key:"componentDidMount",value:function(){this.fixRowHeightAlign()}},{key:"componentDidUpdate",value:function(){this.fixRowHeightAlign()}},{key:"render",value:function(){var e,t=this,a=this.props,l=a.dispatch,n=a.loading,i=a.regionFields.data,o=a.regionId,u=this.state.editingRecord,c="";u&&(c=u.id,c===this.newKey&&(e=u));var f=i.list,m=i.pagination,s=e&&e.parentId===o?[e].concat((0,d.default)(f)):f,p=this.assemblyDataByMemoize(c,s,e),g=(0,r.default)(p,2),E=g[0],h=g[1],w=""===c?i:{list:E,pagination:m};return x.default.createElement(P.TablePage,{ref:this.pageRef,columns:this.columns,dispatch:l,loading:n,data:w,action:"regionFields/fetch",searchParams:{regionId:o},operatorRender:{left:this.operatorRender,right:[{title:"refresh"}]},onDelete:function(e){return t.onDelete(e.map(function(e){return e.id}))},tableOptions:{expandedRowKeys:this.state.expandRowKeys.concat(h),onExpandedRowsChange:function(e){t.setState({expandRowKeys:e})}}})}}]),t}(x.Component),D=(0,M.connect)(function(e){var t=e.regionFields,a=e.loading;return{regionFields:t,loading:a.models.regionFields}})(C);t.default=D},kOgO:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("5NDa");var n=l(a("5rEg")),r=l(a("q1tI")),d=a("Y2fQ"),i=[{label:"id",name:"id",itemRender:r.default.createElement(n.default,{type:"hidden"}),hidden:!0},{label:"pageInfoId",name:"pageInfo.id",itemRender:r.default.createElement(n.default,{type:"hidden"}),hidden:!0},{label:r.default.createElement(d.FormattedMessage,{id:"app.crawler.rule-conf.label.region.name"}),name:"name",itemRender:r.default.createElement(n.default,{placeholder:""}),rules:[{required:!0,message:r.default.createElement(d.FormattedMessage,{id:"app.common.validation.not-empty"})}]},{label:r.default.createElement(d.FormattedMessage,{id:"app.crawler.rule-conf.label.region.selector"}),name:"selector",itemRender:r.default.createElement(n.default,null),rules:[{required:!0,message:r.default.createElement(d.FormattedMessage,{id:"app.common.validation.not-empty"})}]},{label:r.default.createElement(d.FormattedMessage,{id:"app.common.label.memo"}),name:"remarks",itemRender:r.default.createElement(n.default.TextArea,{placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",style:{minHeight:100}})}],o=i;t.default=o}}]);