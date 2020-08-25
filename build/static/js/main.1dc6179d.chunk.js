(this.webpackJsonpwunderdb=this.webpackJsonpwunderdb||[]).push([[0],{61:function(e,t,a){e.exports=a(80)},66:function(e,t,a){},67:function(e,t,a){},74:function(e,t,a){e.exports=a.p+"static/media/wdb.b252aa84.png"},75:function(e,t,a){e.exports=a.p+"static/media/wdb-complete.fd2dfd03.png"},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),i=(a(66),a(67),a(55)),c=a(24),s=a(117),m=a(83),d=a(35),u=a.n(d),g=a(109),p=a(15),f=a(107),h=a(110),E=a(34);var y=function(){return r.a.createElement(f.a,null,r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement("img",{src:a(74),style:{height:"30px"},alt:"logo"}),r.a.createElement(h.a,{variant:"h5",underline:"none",href:"https://github.com/TanmoySG/wunderDB",target:"_blank",style:{float:"right",color:"#26242F"}},r.a.createElement(p.a,{icon:E.a,style:{color:"#26242F"}})))))},b=a(81);var x=function(){return r.a.createElement(f.a,null,r.a.createElement(u.a,{fonts:[{font:"DM Sans",weights:[400,500,700]},{font:"Work Sans",weights:[100,200,300,400,500,600,700,800,900]}]}),r.a.createElement(g.a,{container:!0,justify:"center",alignItem:"center",style:{padding:"10px"}},r.a.createElement(g.a,{item:!0,xs:10,sm:6,md:3,lg:3,xl:3},r.a.createElement("img",{src:a(75),style:{height:"100%",width:"100%"},alt:"logo"}))),r.a.createElement(g.a,{container:!0,justify:"center",alignItem:"center",style:{padding:"10px"}},r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:10,lg:10,xl:10},r.a.createElement(b.a,{variant:"h5",style:{fontFamily:"Work Sans",textAlign:"center"}},"wunderDB is a JSON-based micro Document Database, inspired by ",r.a.createElement(h.a,{underline:"always",href:"https://www.mongodb.com",target:"_blank",style:{color:"#00d263"}},"MongoDB"),"."))),r.a.createElement(g.a,{container:!0,justify:"center",alignItem:"center",style:{padding:"10px"},spacing:3},r.a.createElement(h.a,{variant:"subtitle1",underline:"none",href:"#registration",style:{fontFamily:"DM Sans",fontWeight:"400",backgroundColor:"#A6FFCB",color:"#307D51",padding:"10px",borderRadius:"5px",margin:"5px"}},"Get-started"),r.a.createElement(h.a,{variant:"subtitle1",underline:"none",href:"https://github.com/TanmoySG/wunderDB/blob/master/documentation/documentation.md",target:"_blank",style:{fontFamily:"DM Sans",fontWeight:"400",backgroundColor:"#C3DFFF",color:"#395a7f",padding:"10px",borderRadius:"5px",margin:"5px"}},"Documentation"),r.a.createElement(h.a,{variant:"subtitle1",underline:"none",href:"https://github.com/TanmoySG/wunderDB/blob/master/documentation/deep-dive.md",target:"_blank",style:{fontFamily:"DM Sans",fontWeight:"400",backgroundColor:"#e5c7ff",color:"#734999",padding:"10px",borderRadius:"5px",margin:"5px"}},"Deep Dive")))},v=a(14),w=a(82),S=a(114),D=a(113),j=a(20),F=a(116),k=a(112),O=a(111),C=a(41),W=a(52),M=a(115),I=a(118);a(79);function R(){var e=Object(w.b)(),t=Object(v.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:a({display:"flex",alignItems:"center",paddingRight:n.sizing.scale500,color:n.colors.negative400})},r.a.createElement(O.a,{size:"18px"}))}var T=function(){var e=Object(n.useState)("<cluster-id>"),t=Object(v.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(["<one-of-the-three-tokens-generated>"]),i=Object(v.a)(l,2),c=i[0],s=i[1],m=Object(n.useState)("Send Request"),d=Object(v.a)(m,2),u=d[0],E=d[1],y=Object(n.useState)("2"),x=Object(v.a)(y,2),w=x[0],O=x[1],T=Object(n.useState)({}),_=Object(v.a)(T,2),A=_[0],B=_[1],P=Object(n.useState)(""),G=Object(v.a)(P,2),N=G[0],q=G[1],J=Object(n.useState)(""),z=Object(v.a)(J,2),H=z[0],L=z[1],U=Object(n.useState)(""),$=Object(v.a)(U,2),K=$[0],Q=$[1],V=r.a.useState(!1),X=Object(v.a)(V,2),Y=X[0],Z=X[1],ee=r.a.useState(!1),te=Object(v.a)(ee,2),ae=te[0],ne=te[1],re=!Y&&ae,oe={name:N,username:H,password:K},le="{ \n\t 'name' : '"+N+"', \n\t 'username' : '"+H+"', \n\t 'password' : '"+K+"' \n }",ie="https://wdb.tanmoysg.com/connect?cluster="+a+"&token="+c[Math.floor(Math.random()*c.length)],ce=function(e){console.log(oe),e.preventDefault(),fetch("https://wdb.tanmoysg.com/register",{method:"POST",cache:"no-cache",headers:{content_type:"application/json"},body:JSON.stringify(oe)}).then((function(e){return e.json()})).then((function(e){B(e),console.log(e),E(e.response),"1"===e.status_code?(O(e.status_code),o(e.cluster_id),s(e.access_tokens)):O(e.status_code)}))};return r.a.createElement(f.a,null,r.a.createElement(g.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(b.a,{variant:"h5",style:{fontFamily:"DM Sans",fontWeight:"500",color:"#307D51",padding:"10px"}},r.a.createElement(p.a,{icon:j.c,style:{color:"#307D51",marginRight:"5px",marginLeft:"5px"}})," Get Started "),r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(g.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6,justify:"center",alignItems:"center"},r.a.createElement(b.a,{variant:"subtitle1",style:{fontFamily:"DM Sans",fontWeight:"500",color:"black",textAlign:"center"}},"Unified Actions API Endpoint"),r.a.createElement(k.a,{endEnhancer:r.a.createElement(C.CopyToClipboard,{text:ie},r.a.createElement(S.a,{title:"Click to copy"},r.a.createElement(p.a,{icon:j.b}))),value:ie,style:{boxShadow:"0px 0px 32px -6px rgba(0,0,0,0.72)"}})))),r.a.createElement(g.a,{container:!0,direction:"row",spacing:3},r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:4,lg:4,xl:4,style:{marginTop:"15px"}},r.a.createElement(D.a,{style:{padding:"20px"},elevation:5},r.a.createElement("form",{onSubmit:ce},r.a.createElement(b.a,{variant:"h5",style:{fontFamily:"DM Sans",fontWeight:"500",color:"#395a7f"}},"Register"),r.a.createElement(F.a,{label:"Name"},r.a.createElement(k.a,{startEnhancer:r.a.createElement(p.a,{icon:j.f}),onChange:function(e){return q(e.target.value)}})),r.a.createElement(F.a,{label:"Email",error:re?"Please input a valid email address":null},r.a.createElement(k.a,{startEnhancer:r.a.createElement(p.a,{icon:j.a}),onChange:function(e){var t=e.target.value;Z(Object(W.validate)(t)),L(t)},onBlur:function(){return ne(!0)},error:re,overrides:re?{After:R}:{},type:"email",required:!0})),r.a.createElement(F.a,{label:"Password"},r.a.createElement(k.a,{startEnhancer:r.a.createElement(p.a,{icon:j.e}),type:"password",onChange:function(e){return Q(e.target.value)}})),r.a.createElement(F.a,{label:"Payload",caption:"Payload to be sent to the API."},r.a.createElement(I.a,{value:le,disabled:!0})),r.a.createElement(M.a,{preventDefault:!0,onClick:ce,style:{fontFamily:"DM Sans",fontWeight:"400",backgroundColor:"#C3DFFF",color:"#395a7f",padding:"10px",borderRadius:"5px",margin:"5px"}}," ",r.a.createElement(p.a,{icon:j.d,style:{color:"#395a7f",marginRight:"5px",marginLeft:"5px"}})," Create Cluster")))),r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:8,lg:8,xl:8,style:{marginTop:"15px"}},r.a.createElement(D.a,{style:{padding:"20px"},elevation:5},r.a.createElement(g.a,{container:!0,direction:"row",alignItems:"center",justify:"space-between"},r.a.createElement(g.a,{item:!0},r.a.createElement(b.a,{variant:"h5",style:{fontFamily:"DM Sans",fontWeight:"500",color:"#395a7f"}},"Response")),r.a.createElement(g.a,{item:!0},r.a.createElement(S.a,{title:"2"===w?"No Request in Pipeline":"1"===w?"Request Successful":"Request Unsuccessful"},"2"===w?r.a.createElement("status-indicator",{pulse:!0}):"1"===w?r.a.createElement("status-indicator",{positive:!0,pulse:!0}):r.a.createElement("status-indicator",{negative:!0,pulse:!0})))),r.a.createElement(I.a,{value:JSON.stringify(A,void 0,4),overrides:{Input:{style:{maxHeight:"300px",minHeight:"200px",minWidth:"300px",width:"100vw"}},InputContainer:{style:{maxWidth:"100%",width:"min-content"}}},style:{overflow:"auto"}}),r.a.createElement(b.a,{variant:"subtitle1",style:{fontFamily:"DM Sans",fontWeight:"400"}}," Response:"),r.a.createElement(b.a,{variant:"h6",style:{fontFamily:"DM Sans",fontWeight:"600",color:"#395a7f",overflow:"auto"}},u),r.a.createElement(b.a,{variant:"subtitle1",style:{fontFamily:"DM Sans",fontWeight:"400"}}," Cluster ID:"),r.a.createElement(C.CopyToClipboard,{text:a},r.a.createElement(S.a,{title:"Click to copy"},r.a.createElement(b.a,{variant:"h6",style:{fontFamily:"DM Sans",fontWeight:"600",color:"#395a7f",overflow:"auto"}},a))),r.a.createElement(b.a,{variant:"subtitle1",style:{fontFamily:"DM Sans",fontWeight:"400"}},"Access Tokens:"),c.map((function(e){return r.a.createElement(C.CopyToClipboard,{text:e},r.a.createElement(S.a,{title:"Click to copy"},r.a.createElement(b.a,{variant:"h6",style:{fontFamily:"DM Sans",fontWeight:"600",color:"#395a7f",overflow:"auto"}},e)))}))),r.a.createElement(g.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",style:{textAlign:"center",paddingTop:"20px"}},r.a.createElement(b.a,{variant:"subtitle1"},"Developed by ",r.a.createElement(h.a,{variant:"subtitle1",underline:"none",target:"_blank",href:"https://www.tanmoysg.com",style:{fontFamily:"DM Sans",fontWeight:"400",color:"#734999"}},"Tanmoy Sen Gupta")))))))},_=new i.a;var A=function(){return r.a.createElement(c.a,{value:_},r.a.createElement(s.a,{theme:m.a},r.a.createElement(u.a,{fonts:[{font:"DM Sans",weights:[400,500,700]},{font:"Work Sans",weights:[100,200,300,400,500,600,700,800,900]}]}),r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{container:!0,direction:"row",alignItems:"center",style:{width:"100vw",height:"12vh",boxShadow:"-1px 12px 70px -1px rgba(161,161,161,0.15)"}},r.a.createElement(y,null)),r.a.createElement(g.a,{container:!0,direction:"row",alignItems:"center",style:{height:"88vh"}},r.a.createElement(x,null))),r.a.createElement("section",{id:"registration"},r.a.createElement(g.a,{container:!0,direction:"row",alignItems:"center",style:{height:"100vh",padding:"20px"}},r.a.createElement(T,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.1dc6179d.chunk.js.map