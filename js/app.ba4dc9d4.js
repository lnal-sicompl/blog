(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e97dd":"d5f3e45a","chunk-2d2167ff":"6e6ecf63"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,s){n=a[t]=[e,s]}));e.push(n[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/blog/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0308":function(t,e,n){"use strict";n("9f8f")},"034f":function(t,e,n){"use strict";n("85ec")},"0b2a":function(t){t.exports=JSON.parse('{"links":[{"title":"Website title","desc":"Website description","link":"Website link"}]}')},1541:function(t,e,n){"use strict";n("59cb")},"56d7":function(t,e,n){"use strict";n.r(e);n("99af"),n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",attrs:{id:"app"}},[n("Navbar"),n("router-view"),t._l(10,(function(t){return n("br",{key:t})})),n("div",{staticClass:"wrapper"},[n("Footer")],1)],2)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vs-navbar",{attrs:{"shadow-scroll":"",fixed:"","center-collapsed":"","not-line":""},scopedSlots:t._u([{key:"left",fn:function(){return[n("vs-button",{staticClass:"menu-btn",staticStyle:{"margin-right":"20px"},attrs:{flat:"",icon:""},on:{click:function(e){t.activeSidebar=!t.activeSidebar}}},[n("i",{staticClass:"bx bx-menu"})]),n("router-link",{staticClass:"navbar-link",attrs:{to:"/"}},[n("h3",[t._v(t._s(t.config.blogTitle))])])]},proxy:!0},{key:"right",fn:function(){return[n("vs-navbar-item",[n("vs-switch",{on:{click:function(e){return t.changeTheme()}},scopedSlots:t._u([{key:"on",fn:function(){return[n("i",{staticClass:"bx bxs-sun"})]},proxy:!0},{key:"off",fn:function(){return[n("i",{staticClass:"bx bxs-moon"})]},proxy:!0}])})],1)]},proxy:!0}])},t._l(t.links,(function(e,s){return n("vs-navbar-item",{key:s,attrs:{active:t.active.name===e.name,to:t.active.name===e.name?null:e.url}},[t._v(" "+t._s(e.name)+" ")])})),1),n("vs-sidebar",{attrs:{open:t.activeSidebar},on:{"update:open":function(e){t.activeSidebar=e}},scopedSlots:t._u([{key:"logo",fn:function(){return[n("h3",[t._v(t._s(t.config.blogTitle))])]},proxy:!0}]),model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},t._l(t.links,(function(e,s){return n("vs-sidebar-item",{key:s,attrs:{to:e.url,id:e.name}},[t._v(" "+t._s(e.name)+" ")])})),1),n("div",{staticStyle:{"margin-bottom":"100px"}})],1)},i=[],c=null;try{c=n("eba3")}catch(Se){c=n("bd35")}var l={name:"Navbar",data:function(){return{config:c.config,activeItem:"Home",activeSidebar:!1,dark:!1,links:[{name:"Home",url:"/"},{name:"Posts",url:"/posts"},{name:"Projects",url:"/projects"},{name:"Links",url:"/links"},{name:"Tags",url:"/tags"},{name:"About",url:"/about"}]}},methods:{changeTheme:function(){this.dark?(document.getElementsByTagName("body")[0].setAttribute("vs-theme","light"),this.dark=!1):(document.getElementsByTagName("body")[0].setAttribute("vs-theme","dark"),this.dark=!0)}},computed:{active:function(){for(var t=this.$route.path,e={name:null,url:null},n=0;n<this.links.length;n++)this.links[n].url===t&&(e=this.links[n]);return e}}},u=l,p=n("2877"),d=Object(p["a"])(u,o,i,!1,null,null,null),f=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container text-center"},[n("h3",[t._v(t._s(t.config.blogTitle))]),n("p",[n("i",[t._v(t._s(t.config.description))])]),n("br"),t.curYear===t.config.blogStartYear?n("p",[t._v(" © "+t._s(t.curYear)+" "+t._s(t.config.name)+". Powered by "),n("a",{attrs:{href:"https://github.com/samzhangjy/VueBlogger",target:"_blank"}},[t._v("VueBlogger")]),t._v(". ")]):n("p",[t._v(" © "+t._s(t.config.blogStartYear)+" - "+t._s(t.curYear)+" "+t._s(t.config.name)+". Powered by "),n("a",{attrs:{href:"https://github.com/samzhangjy/VueBlogger",target:"_blank"}},[t._v("VueBlogger")]),t._v(". ")])])])},g=[],m={name:"Footer",data:function(){return{config:this.getConfig().config,curYear:(new Date).getFullYear()}},methods:{getYear:function(){return(new Date).getFullYear()}}},v=m,_=Object(p["a"])(v,h,g,!1,null,null,null),b=_.exports,x={name:"App",components:{Navbar:f,Footer:b}},k=x,y=(n("034f"),Object(p["a"])(k,a,r,!1,null,null,null)),C=y.exports,w=(n("d81d"),n("d3b7"),n("96cf"),n("1da1")),P=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("div",{staticClass:"center"},[n("Avatar",{attrs:{size:"300",home:"true"}})],1),n("h1",[t._v(t._s(t.config.name))]),n("h4",{staticStyle:{color:"#666666"}},[t._v(t._s(t.config.username))]),n("p",[t._v(t._s(t.config.description))])]),n("h2",[t._v("Latest Posts")]),n("hr"),t.posts.length?n("div",{staticClass:"grid-3_xs-1_sm-2_md-2"},t._l(t.posts.slice(Math.max(t.posts.length-6,0)).reverse(),(function(t,e){return n("div",{key:e,staticClass:"col"},[n("PostCard",{staticClass:"center",attrs:{post:t}})],1)})),0):n("Nothing")],1)])},O=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.home?"avatar-home":""},[n("vs-avatar",{attrs:{size:t.size,circle:""}},[n("img",{attrs:{src:t.config.avatarPath}})])],1)},S=[],E={name:"Avatar",data:function(){return{config:this.getConfig().config}},props:["size","home"]},N=E,$=(n("1541"),Object(p["a"])(N,T,S,!1,null,"bd4942ba",null)),R=$.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{attrs:{to:"/posts/"+t.post.id}},[n("vs-card",{staticClass:"post-card",scopedSlots:t._u([{key:"title",fn:function(){return[n("h3",[t._v(t._s(t.post.title))]),n("small",[t._v(t._s(t.post.date[0])+"/"+t._s(t.post.date[1])+"/"+t._s(t.post.date[2]))])]},proxy:!0},{key:"img",fn:function(){return[n("img",{attrs:{src:t.post.cover,alt:""}})]},proxy:!0},{key:"text",fn:function(){return[n("p",{staticClass:"post-txt"},[t._v(t._s(t.post.des))]),n("small",{staticClass:"post-card-tag"},t._l(t.post.tags,(function(e,s){return n("b",{key:s,staticStyle:{"margin-right":"5px"}},[t._v(" "+t._s(e)+" ")])})),0)]},proxy:!0},{key:"interactions",fn:function(){return[n("vs-tooltip",{attrs:{right:"",shadow:"",interactivity:""},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" Posted by "),n("b",[t._v(t._s(t.config.username))])]},proxy:!0}])},[n("Avatar")],1)]},proxy:!0}])})],1)},F=[],M={name:"PostCard",props:["post"],data:function(){return{config:this.getConfig().config}},components:{Avatar:R}},V=M,B=(n("7e87"),Object(p["a"])(V,A,F,!1,null,null,null)),L=B.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("p",[t._v(t._s(t.config.nothing))])])},D=[],I={name:"Nothing",data:function(){return{config:this.getConfig().config}}},H=I,Y=Object(p["a"])(H,z,D,!1,null,null,null),J=Y.exports,W={name:"Home",components:{Avatar:R,PostCard:L,Nothing:J},data:function(){return{posts:this.getConfig("posts.json").posts,config:this.getConfig().config}},mounted:function(){this.changeTitle("Home")}},U=W,G=Object(p["a"])(U,j,O,!1,null,null,null),q=G.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"cover",attrs:{src:t.post.cover}}),n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"headline"},[t._v(t._s(t.post.title))]),n("p",[t._v(" Posted on: "+t._s(t.post.date[0]+"/"+t.post.date[1]+"/"+t.post.date[2])+" ")]),n("div",{staticClass:"center"},[n("Avatar"),n("span",{staticClass:"margin"},[t._v(" "+t._s(t.config.username)+" ")])],1)]),n("hr"),n("router-view",{staticClass:"post"}),n("PostTags",{attrs:{postTags:t.post.tags}}),n("PostNavBtn",{attrs:{prev:t.prevPost,next:t.nextPost}})],1)])},K=[],X=(n("c740"),n("ac1f"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vs-row",{attrs:{justify:"space-between"}},[t.next.id?n("vs-col",{attrs:{w:"2"}},[n("vs-button",{attrs:{size:"large",block:"",border:"",to:"/posts/"+t.next.id}},[n("i",{staticClass:"bx bx-left-arrow-alt",staticStyle:{"margin-right":"10px"}}),t._v(" "+t._s(t.next.title)+" ")])],1):t._e(),n("vs-col",{attrs:{w:"2"}}),t.prev.id?n("vs-col",{staticClass:"align-right",attrs:{w:"2"}},[n("vs-button",{attrs:{size:"large",block:"",border:"",to:"/posts/"+t.prev.id}},[t._v(" "+t._s(t.prev.title)+" "),n("i",{staticClass:"bx bx-right-arrow-alt",staticStyle:{"margin-left":"10px"}})])],1):t._e()],1)],1)}),Q=[],tt={name:"PostNavBtn",props:["next","prev"]},et=tt,nt=(n("7626"),Object(p["a"])(et,X,Q,!1,null,"afa932a4",null)),st=nt.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vs-alert",{staticClass:"text-center alert",scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Tags ")]},proxy:!0}])},[t.postTags.length?n("div",{staticClass:"center-tags"},t._l(t.postTags,(function(e,s){return n("vs-button",{key:s,attrs:{transparent:"",size:"large",to:"/tags/"+e}},[t._v(" "+t._s(e)+" ")])})),1):n("div",[n("p",[t._v("This post does not have any tags yet!")])])])},rt=[],ot={name:"PostTags",props:["postTags"]},it=ot,ct=(n("c21b"),Object(p["a"])(it,at,rt,!1,null,"d7c3e528",null)),lt=ct.exports,ut={name:"ViewPost",components:{Avatar:R,PostNavBtn:st,PostTags:lt},data:function(){return{postId:this.$route.path.split("posts/")[1],posts:this.getConfig("posts.json").posts,post:{title:null,date:[null,null,null],tags:[]},config:this.getConfig().config,prevPost:{title:null,id:null},nextPost:{title:null,id:null}}},methods:{getPost:function(){var t=this;this.postId=this.$route.path.split("posts/")[1];var e=this.posts.findIndex((function(e){return e.id===t.postId}));if(e>=0){this.post=this.posts[e],this.changeTitle(this.post.title);try{e>0?(this.nextPost.title=this.posts[e-1].title,this.nextPost.id=this.posts[e-1].id):this.nextPost.id=null,e<this.posts.length-1?(this.prevPost.title=this.posts[e+1].title,this.prevPost.id=this.posts[e+1].id):this.prevPost.id=null}catch(n){console.log(n)}}}},mounted:function(){this.getPost()},watch:{$route:function(t,e){this.getPost()}}},pt=ut,dt=(n("9817"),Object(p["a"])(pt,Z,K,!1,null,null,null)),ft=dt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center"},[t._v("Tag "),n("code",[t._v(t._s(t.tagName))])]),n("hr"),n("br"),n("vs-row",{attrs:{id:"row"}},t._l(t.tag.posts,(function(t,e){return n("vs-col",{key:e,staticStyle:{"margin-bottom":"30px"},attrs:{lg:"4",sm:"12",md:"6",id:"col"}},[n("PostCard",{attrs:{post:t}})],1)})),1)],1)},gt=[],mt={name:"ViewTag",components:{PostCard:L},data:function(){return{tagName:this.$route.params.tag}},computed:{tag:function(){for(var t=0;t<this.tags.length;t++)if(this.tags[t].name===this.tagName)return this.tags[t];return null}}},vt=mt,_t=Object(p["a"])(vt,ht,gt,!1,null,null,null),bt=_t.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AboutMe"),n("Contacts")],1)},kt=[],yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container text-center"},[n("h1",[t._v(" About Me ")]),n("hr"),n("About")],1)},Ct=[],wt=null;try{wt=n("c23e")}catch(Se){wt=n("d9f8")}var Pt={name:"AboutMe",components:{About:wt.vue.component},mounted:function(){this.changeTitle("About")}},jt=Pt,Ot=Object(p["a"])(jt,yt,Ct,!1,null,null,null),Tt=Ot.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",staticStyle:{"margin-top":"100px"}},[n("h2",{staticClass:"text-center"},[t._v(" Contact Me ")]),t.contacts.length?n("div",{staticClass:"grid-3_xs-1_sm-2_md-2"},t._l(t.contacts,(function(e,s){return n("div",{key:s,staticClass:"col"},[n("a",{attrs:{href:e.link,target:"_blank"}},[n("vs-card",{staticClass:"center",attrs:{type:"3"},scopedSlots:t._u([{key:"title",fn:function(){return[n("h3",[t._v(t._s(e.name))])]},proxy:!0},{key:"text",fn:function(){return[n("p",[t._v(" "+t._s(e.value)+" ")])]},proxy:!0}],null,!0)})],1)])})),0):t._e(),n("Nothing")],1)},Et=[],Nt={name:"Contacts",computed:{contacts:function(){return this.getConfig().contacts}},components:{Nothing:J}},$t=Nt,Rt=Object(p["a"])($t,St,Et,!1,null,null,null),At=Rt.exports,Ft={name:"About",components:{AboutMe:Tt,Contacts:At}},Mt=Ft,Vt=Object(p["a"])(Mt,xt,kt,!1,null,null,null),Bt=Vt.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center"},[t._v("Tags")]),n("hr"),t.tags.length?n("div",{staticClass:"grid-3_xs-1_sm-2_md-2"},t._l(t.tags,(function(e,s){return n("div",{key:s,staticClass:"col"},[n("router-link",{attrs:{to:"/tags/"+e.name}},[n("vs-card",{staticClass:"center",attrs:{type:"3"},scopedSlots:t._u([{key:"title",fn:function(){return[n("h3",[t._v(t._s(e.name))])]},proxy:!0},{key:"text",fn:function(){return[n("p",[t._v(" "+t._s(e.posts.length)+" post"+t._s(1!==e.posts.length?"s":"")+" ")])]},proxy:!0}],null,!0)})],1)],1)})),0):n("Nothing")],1)},zt=[],Dt={name:"ViewTags",mounted:function(){this.changeTitle("Tags")},components:{Nothing:J}},It=Dt,Ht=Object(p["a"])(It,Lt,zt,!1,null,null,null),Yt=Ht.exports,Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center"},[t._v("Projects")]),n("hr"),n("ProjectDes",{staticClass:"text-center"}),n("br"),t.projects.length?n("div",{staticClass:"grid-3_xs-1_sm-2_md-2"},t._l(t.projects,(function(e,s){return n("div",{key:s,staticClass:"col center"},[n("a",{attrs:{href:e.link,target:"_blank"}},[n("vs-card",{attrs:{type:"5"},scopedSlots:t._u([{key:"title",fn:function(){return[n("h3",[t._v(t._s(e.name))])]},proxy:!0},{key:"text",fn:function(){return[n("p",[t._v(" "+t._s(e.des)+" ")])]},proxy:!0},{key:"img",fn:function(){return[n("img",{attrs:{src:e.img}})]},proxy:!0},{key:"interactions",fn:function(){return[n("vs-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" GitHub ")]},proxy:!0}],null,!0)},[n("vs-button",{attrs:{size:"large",dark:"",icon:"",href:e.github,blank:""}},[n("i",{staticClass:"bx bxl-github"})])],1)]},proxy:!0}],null,!0)})],1)])})),0):n("Nothing")],1)},Wt=[],Ut=null;try{Ut=n("b2f2")}catch(Se){Ut=n("7b68")}var Gt={name:"ViewProjects",components:{ProjectDes:Ut.vue.component,Nothing:J},data:function(){return{projects:this.getConfig("projects.json").projects}},mounted:function(){this.changeTitle("Projects")}},qt=Gt,Zt=Object(p["a"])(qt,Jt,Wt,!1,null,null,null),Kt=Zt.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center"},[t._v("Links")]),n("hr"),t.links.length?n("div",{staticClass:"grid-3_xs-1_sm-2_md-2"},t._l(t.links,(function(t,e){return n("div",{key:e,staticClass:"col w-full"},[n("ExchangeLink",{staticClass:"center",attrs:{link:t.link,title:t.title,desc:t.desc}})],1)})),0):n("Nothing")],1)},Qt=[],te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("a",{staticClass:"w-full",attrs:{href:t.link,target:"_blank"}},[n("vs-card",{staticClass:"w-full",attrs:{type:"3"},scopedSlots:t._u([{key:"title",fn:function(){return[n("h3",[t._v(t._s(t.title))])]},proxy:!0},{key:"text",fn:function(){return[n("p",[t._v(t._s(t.desc))]),n("h5",{staticClass:"subtitle"},[t._v(t._s(t.link))])]},proxy:!0}])})],1)])},ee=[],ne={name:"ExchangeLink",props:["title","desc","link"],mounted:function(){this.changeTitle("Links")}},se=ne,ae=(n("0308"),Object(p["a"])(se,te,ee,!1,null,"4eb906b7",null)),re=ae.exports,oe={name:"Links",data:function(){return{links:this.getConfig("links.json").links}},components:{ExchangeLink:re,Nothing:J}},ie=oe,ce=Object(p["a"])(ie,Xt,Qt,!1,null,null,null),le=ce.exports,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center"},[t._v("Posts")]),n("hr"),t.getPosts().length?n("div",[n("br"),n("div",{staticClass:"grid-3_xs-1_sm-2_md-2"},t._l(t.getPosts(),(function(t,e){return n("div",{key:e,staticClass:"col center"},[n("PostCard",{attrs:{post:t}})],1)})),0),n("div",{staticClass:"center con-pagination"},[n("vs-pagination",{attrs:{length:t.allPosts.length,"not-margin":"",progress:""},model:{value:t.curPage,callback:function(e){t.curPage=e},expression:"curPage"}})],1)]):n("Nothing")],1)},pe=[],de=(n("fb6a"),{name:"ViewPosts",components:{PostCard:L,Nothing:J},data:function(){return{allPosts:this.getConfig("posts.json").posts,curPage:1,config:this.getConfig().config}},mounted:function(){this.changeTitle("Posts");var t=this.allPosts;this.allPosts=[];for(var e=0;e<t.length;e+=6)this.allPosts.push(t.slice(e,e+6))},methods:{getPosts:function(){try{return this.allPosts[this.curPage-1].slice().reverse()}catch(Se){return[]}}}}),fe=de,he=Object(p["a"])(fe,ue,pe,!1,null,null,null),ge=he.exports,me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container text-center"},[n("h1",[t._v("404")]),n("hr"),n("br"),t._v(" The page you are looking for is lost in the fields. "),n("div",{staticClass:"center"},[n("vs-button",{attrs:{size:"large"},on:{click:function(e){return t.$router.push("/")}}},[t._v("Go back home")])],1)])},ve=[],_e={name:"NotFound",mounted:function(){this.changeTitle("404")}},be=_e,xe=Object(p["a"])(be,me,ve,!1,null,null,null),ke=xe.exports,ye=[],Ce=null;try{Ce=n("765a")}catch(Se){Ce=n("91d6")}Ce.posts.map((function(t){ye.push({path:t.id,component:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n("ca6b")("./".concat(t.id,".md")).then((function(t){s=t}));case 2:return e.abrupt("return",s.vue.component);case 3:case"end":return e.stop()}}),e)})));function s(){return e.apply(this,arguments)}return s}()})})),s["default"].use(P["a"]);var we=[{path:"/",name:"Home",component:q},{path:"/posts",name:"ViewPosts",component:ge},{path:"/posts",name:"ViewPost",component:ft,children:ye},{path:"/tags/:tag",name:"ViewTag",component:bt},{path:"/about",name:"About",component:Bt},{path:"/tags",name:"ViewTags",component:Yt},{path:"/projects",name:"ViewProjects",component:Kt},{path:"/links",name:"Links",component:le},{path:"*",name:"NotFound",component:ke}],Pe=new P["a"]({mode:"hash",base:"/blog/",routes:we}),je=Pe,Oe=n("574d"),Te=n.n(Oe);n("04f2"),n("3357"),n("678e");console.log("\n_   __         ___  __\n| | / /_ _____ / _ )/ /__  ___ ____ ____ ____\n| |/ / // / -_) _  / / _ \\/ _ `/ _ `/ -_) __/\n|___/\\_,_/\\__/____/_/\\___/\\_, /\\_, /\\__/_/\n                        /___//___/\n\nFor geeks who wanted to write their blog site in Vue                 v0.1.0\n\nPowered by %cVueBlogger%cv0.1.0%c\n\nGitHub: https://github.com/samzhangjy/VueBlogger\nPlease star & fork to support the author!","background-color: #1A55ED; padding: 7px; color: #fff;","background-color: #FCBF23; color: #000; padding: 7px;","font-weight: bold"),s["default"].config.productionTip=!1,s["default"].use(Te.a,{}),s["default"].mixin({methods:{changeTitle:function(t){var e=null;try{e=n("eba3")}catch(Se){e=n("bd35")}document.title="".concat(t," - ").concat(e.config.blogTitle)},getConfig:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"config.json",e=null;try{e=n("5d9c")("./".concat(t))}catch(Se){e=n("9d91")("./".concat(t))}return e}},computed:{tags:function(){var t=null;try{t=n("765a")}catch(Se){t=n("91d6")}for(var e=t.posts,s=[],a=0;a<e.length;a++)for(var r=0;r<e[a].tags.length;r++){for(var o=-1,i=0;i<s.length;i++)if(s[i].name===e[a].tags[r]){o=i;break}-1===o?s.push({name:e[a].tags[r],posts:[e[a]]}):s[o].posts.push(e[a])}return s}}}),je.afterEach((function(t,e,n){window.scrollTo(0,0)})),new s["default"]({router:je,render:function(t){return t(C)}}).$mount("#app")},"59cb":function(t,e,n){},"5d9c":function(t,e,n){var s={"./about.md":"c23e","./config":"eba3","./config.json":"eba3","./links":"0b2a","./links.json":"0b2a","./posts":"765a","./posts.json":"765a","./project-des.md":"b2f2","./projects":"cc99","./projects.json":"cc99"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=r,t.exports=a,a.id="5d9c"},6e3:function(t,e,n){},7626:function(t,e,n){"use strict";n("6000")},"765a":function(t){t.exports=JSON.parse('{"posts":[{"title":"Adapting VueBlogger: A simple blogging site for Vue","tags":["Vue.js","project","frontend"],"cover":"https://dev-to-uploads.s3.amazonaws.com/i/95lvt23xz4ozer5byomi.png","des":"I was looking for a simple web site generator to build Blogs and a portfolio, built in Vue so I could learn it. Then I found VueBlogger from Sam Zhang. That\'s exactly what I need. 谢谢你","date":[2023,12,10],"id":"post-1-adapting-vueblogger"},{"title":"Push notification: Angular, Chrome","tags":["webpush","angular","fullstack"],"cover":"https://images.unsplash.com/photo-1632298095711-d546888879ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHB1c2glMjBub3RpZmljYXRpb258ZW58MHx8MHx8fDA%3D","des":"How did we implement a web push notification on Angular.","date":[2023,12,10],"id":"post-2-pushnotification"}]}')},"7b68":function(t,e){function n(){var t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[t._v("Below are my personal projects made in my free time.")])])}];return{render:t,staticRenderFns:e}}const s=n();t.exports={attributes:{},vue:{component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=s.render,this.$options.staticRenderFns=s.staticRenderFns}}}}},"7e87":function(t,e,n){"use strict";n("da78")},"85ec":function(t,e,n){},"91d6":function(t){t.exports=JSON.parse('{"posts":[]}')},9817:function(t,e,n){"use strict";n("dc47")},"9d91":function(t,e,n){var s={"./about.md":"d9f8","./config":"bd35","./config.json":"bd35","./links":"ff63","./links.json":"ff63","./posts":"91d6","./posts.json":"91d6","./project-des.md":"7b68","./projects":"c8bb","./projects.json":"c8bb"};function a(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=r,t.exports=a,a.id="9d91"},"9f8f":function(t,e,n){},ac65:function(t,e,n){},b2f2:function(t,e){function n(){var t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[t._v("Below are some of the projects I built or contributed to build during the last years.")])])}];return{render:t,staticRenderFns:e}}const s=n();t.exports={attributes:{},vue:{component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=s.render,this.$options.staticRenderFns=s.staticRenderFns}}}}},bd35:function(t){t.exports=JSON.parse('{"config":{"username":"A Programmer in the Wild","avatarPath":"https://api.dicebear.com/7.x/open-peeps/svg?seed=Sam&flip=true&scale=150&radius=30&accessories=glasses3&accessoriesProbability=100&face=calm,explaining,old,smile&facialHairProbability=0&head=grayShort&mask[]&skinColor=edb98a,ffdbb4","description":"Labore voluptate ea elit nisi minim quis laborum.","name":"Switnerval","blogTitle":"Discovering discovery","blogStartYear":2022,"theme":"default","nothing":"There\'s nothing here, yet."},"contacts":[]}')},c21b:function(t,e,n){"use strict";n("ac65")},c23e:function(t,e){function n(){var t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h1")])}];return{render:t,staticRenderFns:e}}const s=n();t.exports={attributes:{},vue:{component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=s.render,this.$options.staticRenderFns=s.staticRenderFns}}}}},c8bb:function(t){t.exports=JSON.parse('{"projects":[]}')},ca6b:function(t,e,n){var s={"./data/about.md":["c23e"],"./data/project-des.md":["b2f2"],"./post-1-adapting-vueblogger.md":["c370","chunk-2d2167ff"],"./post-2-pushnotification.md":["8e82","chunk-2d0e97dd"]};function a(t){if(!n.o(s,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=s[t],a=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n.t(a,7)}))}a.keys=function(){return Object.keys(s)},a.id="ca6b",t.exports=a},cc99:function(t){t.exports=JSON.parse('{"projects":[{"name":"Węgielek administration portal","des":"A web application to manage data flow of 6 schools associated with the Węgielek Association in KAtowice and Gliwice (Poland)","img":"./images/wegadmin.png","link":"https://admin.wegielek.edu.pl/easysite.sekret","github":""},{"name":"Węgielek administration portal","des":"A web application to manage data flow of 6 schools associated with the Węgielek Association in KAtowice and Gliwice (Poland)","img":"./images/wegadmin.png","link":"https://admin.wegielek.edu.pl/easysite.sekret","github":""}]}')},d9f8:function(t,e){function n(){var t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[t._v("Magna consequat magna incididunt in. Pariatur sit velit pariatur cupidatat proident sint occaecat excepteur adipisicing. Reprehenderit mollit sunt velit dolore reprehenderit duis velit nulla est sunt sunt. In non tempor esse cillum mollit tempor laborum nisi labore elit. Deserunt duis Lorem consectetur ut ut incididunt consectetur ad minim occaecat nulla sint cupidatat.")]),t._v(" "),n("p",[t._v('//\n//"https://avatars.dicebear.com/api/miniavs/Johndoe.svg",')])])}];return{render:t,staticRenderFns:e}}const s=n();t.exports={attributes:{},vue:{component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=s.render,this.$options.staticRenderFns=s.staticRenderFns}}}}},da78:function(t,e,n){},dc47:function(t,e,n){},eba3:function(t){t.exports=JSON.parse('{"config":{"username":"Laurent Nal","avatarPath":"https://api.dicebear.com/7.x/open-peeps/svg?seed=Sam&scale=130&radius=30&translateX=-10&accessories=glasses3&accessoriesProbability=100&face=calm,explaining,old,smile&facialHairProbability=0&head=grayShort&mask[]&skinColor=edb98a,ffdbb4","description":"Web application development made easier","name":"SICOM.PL","blogTitle":"Sicom\'s blog","blogStartYear":2023},"contacts":[{"name":"Email","value":"lnal@sicom.pl","link":"mailto:lnal@sicom.pl"},{"name":"linkedIn","value":"https://linkedin.com/in/laurent-nal","link":"https://linkedin.com/in/laurent-nal"},{"name":"github.io","value":"https://lnal-sicompl.github.io/blog","link":"https://lnal-sicompl.github.io/blog"}]}')},ff63:function(t){t.exports=JSON.parse('{"links":[]}')}});
//# sourceMappingURL=app.ba4dc9d4.js.map