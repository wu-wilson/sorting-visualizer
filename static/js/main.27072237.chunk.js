(this.webpackJsonpsorting_visualizer=this.webpackJsonpsorting_visualizer||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var i=o(2),n=o.n(i),c=o(7),s=o.n(c),d=o(3),r=o(0),a=function(e){var t=e.open,o=e.setOpen,i=e.width,n=e.items,c=(e.setItems,e.selection),s=e.setSelection,d=e.setArr;return Object(r.jsxs)("div",{className:"dd-container",children:[Object(r.jsxs)("div",{className:"dd-select-box",style:{width:"".concat(i,"px")},children:[c,Object(r.jsx)("button",{className:"dd-button",onClick:function(){o(!t)},children:t?"\u1431":"\u142f"})]}),Object(r.jsx)("div",{className:"dd-menu ".concat(t?null:"dd-menu-closed"),children:n.map((function(e){return Object(r.jsx)("div",{className:"dd-menu-option ".concat(e.selected?"dd-option-selected":null),onClick:function(){return function(e){o(!1),"20"===n[0].option&&d(N(e.option)),s(e.option);for(var t=0;t<n.length;t++)n[t].option===e.option?n[t].selected=!0:n[t].selected=!1}(e)},children:e.option},e.id)}))})]})},l=(o(13),function(e){var t=e.algoSelection,o=e.setAlgoSelection,n=e.arrSelection,c=e.setArrSelection,s=e.speedSelection,l=e.setSpeedSelection,u=e.setArr,h=Object(i.useState)(!1),b=Object(d.a)(h,2),j=b[0],x=b[1],O=Object(i.useState)([{id:0,option:"MERGE SORT",selected:!1},{id:1,option:"QUICK SORT",selected:!1},{id:2,option:"INSERTION SORT",selected:!1},{id:3,option:"SELECTION SORT",selected:!1},{id:4,option:"BUBBLE SORT",selected:!1}]),p=Object(d.a)(O,2),f=p[0],v=p[1],m=Object(i.useState)(!1),g=Object(d.a)(m,2),S=g[0],w=g[1],T=Object(i.useState)([{id:0,option:"20",selected:!1},{id:1,option:"40",selected:!1},{id:2,option:"60",selected:!1},{id:3,option:"80",selected:!1},{id:4,option:"100",selected:!1}]),I=Object(d.a)(T,2),N=I[0],A=I[1],R=Object(i.useState)(!1),E=Object(d.a)(R,2),k=E[0],C=E[1],M=Object(i.useState)([{id:0,option:"0.25x",selected:!1},{id:1,option:"0.5x",selected:!1},{id:2,option:"1x",selected:!1},{id:3,option:"2x",selected:!1},{id:4,option:"4x",selected:!1}]),B=Object(d.a)(M,2),L=B[0],H=B[1],z=Object(i.useState)(!1),Y=Object(d.a)(z,2),P=Y[0],y=Y[1];return Object(r.jsxs)("div",{className:"nb-container",children:[Object(r.jsx)("div",{className:"nb-bar",children:"sorting visualizer"}),Object(r.jsxs)("div",{className:"nb-menus-container",children:[Object(r.jsx)(a,{open:j,setOpen:x,width:150,items:f,setItems:v,selection:t,setSelection:o,setArr:u}),Object(r.jsx)(a,{open:S,setOpen:w,width:120,items:N,setItems:A,selection:n,setSelection:c,setArr:u}),Object(r.jsx)(a,{open:k,setOpen:C,width:80,items:L,setItems:H,selection:s,setSelection:l,setArr:u})]}),Object(r.jsxs)("div",{className:"hb-container",children:[Object(r.jsxs)("div",{className:"hb-select-container",onClick:function(){y(!P)},children:[Object(r.jsxs)("div",{className:"hb-line-container ".concat(P?"hb-line-closed":null),children:[Object(r.jsx)("div",{className:"hb-line"}),Object(r.jsx)("div",{className:"hb-line"}),Object(r.jsx)("div",{className:"hb-line"})]}),Object(r.jsx)("div",{className:"hb-x ".concat(P?"hb-x-open":null),children:"\u2715"})]}),Object(r.jsxs)("div",{className:"hb-menu ".concat(P?"hb-menu-open":null),children:[Object(r.jsx)(a,{open:j,setOpen:x,width:150,items:f,setItems:v,selection:t,setSelection:o,setArr:u}),Object(r.jsx)(a,{open:S,setOpen:w,width:150,items:N,setItems:A,selection:n,setSelection:c,setArr:u}),Object(r.jsx)(a,{open:k,setOpen:C,width:150,items:L,setItems:H,selection:s,setSelection:l,setArr:u})]})]})]})}),u=o(1),h=function(e){for(var t=Object(u.a)(e),o=[],i=0;i<t.length;i++)for(var n=0;n<t.length-i-1;n++){if(t[n].height>t[n+1].height){o.push({idx1:n,idx2:n+1,swap:!0,sorted:!1});var c=[t[n+1],t[n]];t[n]=c[0],t[n+1]=c[1]}else o.push({idx1:n,idx2:n+1,swap:!1,sorted:!1});o[o.length-1].idx1===t.length-i-2&&(o[o.length-1].sorted=!0)}return o},b=function(e,t,o,i){for(var n=h(e),c=0;c<e.length;c++)e[c].color="#d1d1d1";t(Object(u.a)(e));for(var s=function(c){setTimeout((function(){0!==c&&(!0===n[c-1].sorted?(e[n[c-1].idx1].color="#d1d1d1",t(Object(u.a)(e))):(e[n[c-1].idx1].color="#d1d1d1",e[n[c-1].idx2].color="#d1d1d1",t(Object(u.a)(e))))}),20*c*i),setTimeout((function(){e[n[c].idx1].color="#d1d366",e[n[c].idx2].color="#d1d366",t(Object(u.a)(e))}),20*c*i),setTimeout((function(){if(!0===n[c].swap){var o=[e[n[c].idx2],e[n[c].idx1]];e[n[c].idx1]=o[0],e[n[c].idx2]=o[1],t(Object(u.a)(e))}!0===n[c].sorted&&(e[n[c].idx2].color="rgb(176, 201, 169)",t(Object(u.a)(e)))}),20*c*i),c===n.length-1&&setTimeout((function(){e[0].color="rgb(176, 201, 169)",t(Object(u.a)(e)),o(!1)}),20*c*i)},d=0;d<n.length;d++)s(d)},j=function(e){for(var t=Object(u.a)(e),o=[],i=0;i<t.length;i++){for(var n=i,c=i;c<t.length;c++)t[c].height<t[n].height?(o.push({pos:i,min:n,idx2:c,swap:!1}),n=c):o.push({pos:i,min:n,idx2:c,swap:!1});o.push({pos:i,min:n,idx2:n,swap:!0});var s=[t[n],t[i]];t[i]=s[0],t[n]=s[1]}return o},x=function(e,t,o,i){for(var n=j(e),c=0;c<e.length;c++)e[c].color="#d1d1d1";t(Object(u.a)(e));for(var s=function(c){setTimeout((function(){0!==c&&!1===n[c-1].swap&&(e[n[c-1].min].color="#d1d1d1",e[n[c-1].idx2].color="#d1d1d1",t(Object(u.a)(e)))}),20*c*i),setTimeout((function(){e[n[c].idx2].color="#d1d366",e[n[c].min].color="#8caad1",t(Object(u.a)(e))}),20*c*i),setTimeout((function(){if(!0===n[c].swap){var o=[e[n[c].min],e[n[c].pos]];e[n[c].pos]=o[0],e[n[c].min]=o[1],e[n[c].pos].color="rgb(176, 201, 169)",t(Object(u.a)(e))}}),20*c*i),c===n.length-1&&setTimeout((function(){o(!1)}),20*c*i)},d=0;d<n.length;d++)s(d)},O=function(e){for(var t=Object(u.a)(e),o=[],i=1;i<t.length;i++)for(var n=i;n>0&&t[n].height<t[n-1].height;n--){o.push({idx1:n,idx2:n-1});var c=[t[n-1],t[n]];t[n]=c[0],t[n-1]=c[1]}return o},p=function(e,t,o,i){for(var n=O(e),c=0;c<e.length;c++)e[c].color="#d1d1d1";t(Object(u.a)(e));for(var s=function(c){setTimeout((function(){0!==c&&(e[n[c-1].idx1].color="#d1d1d1",e[n[c-1].idx2].color="#d1d1d1",t(Object(u.a)(e)))}),20*c*i),setTimeout((function(){e[n[c].idx1].color="#d1d366",e[n[c].idx2].color="#d1d366",t(Object(u.a)(e))}),20*c*i),setTimeout((function(){var o=[e[n[c].idx2],e[n[c].idx1]];e[n[c].idx1]=o[0],e[n[c].idx2]=o[1],t(Object(u.a)(e))}),20*c*i),c===n.length-1&&setTimeout((function(){for(var i=0;i<e.length;i++)e[i].color="rgb(176, 201, 169)";o(!1),t(Object(u.a)(e))}),20*c*i)},d=0;d<n.length;d++)s(d)},f=function e(t,o,i,n,c){if(!(n<=i)){var s=i+Math.floor((n-i)/2);e(t,o,i,s,c),e(t,o,s+1,n,c),function(e,t,o,i,n,c){t=Object(u.a)(e);for(var s=o,d=i+1,r=o;r<n+1;r++)s>i?(c.push({overwriteIdx:r,newHeight:t[d].height,idx1:s-1,idx2:d}),e[r]=t[d],d+=1):d>n?(c.push({overwriteIdx:r,newHeight:t[s].height,idx1:d-1,idx2:s}),e[r]=t[s],s+=1):t[d].height<t[s].height?(c.push({overwriteIdx:r,newHeight:t[d].height,idx1:s,idx2:d}),e[r]=t[d],d+=1):(c.push({overwriteIdx:r,newHeight:t[s].height,idx1:s,idx2:d}),e[r]=t[s],s+=1)}(t,o,i,s,n,c)}},v=function(e){var t=Object(u.a)(e),o=Object(u.a)(e),i=[];return f(t,o,0,t.length-1,i),i},m=function(e,t,o,i){for(var n=v(e),c=0;c<e.length;c++)e[c].color="#d1d1d1";t(Object(u.a)(e));for(var s=function(c){setTimeout((function(){0!==c&&(e[n[c-1].idx1].color="#d1d1d1",e[n[c-1].idx2].color="#d1d1d1",e[n[c-1].overwriteIdx].color="#d1d1d1",t(Object(u.a)(e)))}),20*c*i),setTimeout((function(){e[n[c].idx1].color="#d1d366",e[n[c].idx2].color="#d1d366",e[n[c].overwriteIdx].color="#8caad1",t(Object(u.a)(e))}),20*c*i),setTimeout((function(){e[n[c].overwriteIdx].height=n[c].newHeight,t(Object(u.a)(e))}),20*c*i),c===n.length-1&&setTimeout((function(){for(var i=0;i<e.length;i++)e[i].color="rgb(176, 201, 169)";o(!1),t(Object(u.a)(e))}),20*c*i)},d=0;d<n.length;d++)s(d)},g=function e(t,o,i,n){if(o<i){var c=function(e,t,o,i){for(var n=o,c=n,s=e[t].height;n>t;){if(i.push({pivot:t,idx1:n,idx2:c,swap:!1,sorted:!1}),s<e[n].height){i.push({pivot:t,idx1:n,idx2:c,swap:!0,sorted:!1});var d=[e[c],e[n]];e[n]=d[0],e[c]=d[1],c--}n--}i.push({pivot:t,idx1:n,idx2:c,swap:!0,sorted:!0});var r=[e[t],e[c]];return e[c]=r[0],e[t]=r[1],c}(t,o,i,n);e(t,o,c-1,n),e(t,c+1,i,n)}else o===i&&n.push({pivot:o,idx1:o,idx2:o,swap:!0,sorted:!0})},S=function(e){var t=Object(u.a)(e),o=[];return g(t,0,t.length-1,o),o},w=function(e,t,o,i){for(var n=S(e),c=0;c<e.length;c++)e[c].color="#d1d1d1";t(Object(u.a)(e));for(var s=function(c){setTimeout((function(){0!==c&&(!0===n[c-1].swap?!1===n[c-1].sorted&&(e[n[c-1].idx1].color="#d1d1d1",e[n[c-1].idx2].color="#d1d1d1"):(e[n[c-1].idx1].color="#d1d1d1",e[n[c-1].idx2].color="#d1d1d1"),t(Object(u.a)(e)))}),20*c*i),setTimeout((function(){e[n[c].idx1].color="#d1d366",e[n[c].idx2].color="#d1d366",e[n[c].pivot].color="#8caad1",t(Object(u.a)(e))}),20*c*i),setTimeout((function(){if(!0===n[c].swap){var o=[e[n[c].idx2],e[n[c].idx1]];e[n[c].idx1]=o[0],e[n[c].idx2]=o[1],!0===n[c].sorted&&(e[n[c].idx1].color="#d1d1d1",e[n[c].idx2].color="rgb(176, 201, 169)"),t(Object(u.a)(e))}}),20*c*i),c===n.length-1&&setTimeout((function(){o(!1)}),20*c*i)},d=0;d<n.length;d++)s(d)},T=function(e){if("ARRAY SIZE"!==e){for(var t="",o=0;o<e.length-1;o++)t+=e[o];return"4"===t?.25:"2"===t?.5:"1"===t?1:"0.5"===t?2:4}return 1},I=function(e){var t=e.algo,o=e.arrSize,n=e.speed,c=e.arr,s=e.setArr,a=Object(i.useState)(!1),l=Object(d.a)(a,2),u=l[0],h=l[1];return Object(r.jsx)("div",{className:"bars-container",children:Object(r.jsxs)("div",{className:"bars-box-container",children:[Object(r.jsxs)("div",{className:"bars-button-container",children:[Object(r.jsx)("button",{className:"bars-button new-arr",onClick:function(){!1===u&&s(N(o))},children:"NEW ARRAY"}),Object(r.jsx)("button",{className:"bars-button",onClick:function(){if(!1===u)if("ALGORITHM"===t||"ARRAY SIZE"===o||"SPEED"===n)window.alert("Please select an algorithm, array size, and speed.");else switch(h(!0),t){case"BUBBLE SORT":b(c,s,h,T(n));break;case"SELECTION SORT":x(c,s,h,T(n));break;case"INSERTION SORT":p(c,s,h,T(n));break;case"MERGE SORT":m(c,s,h,T(n));break;case"QUICK SORT":w(c,s,h,T(n));break;default:console.log("error")}},children:"SORT ARRAY"})]}),Object(r.jsx)("div",{className:"bars-bars-container",children:c.map((function(e,t){return Object(r.jsx)("div",{className:"bar",style:{height:"".concat(e.height,"px"),backgroundColor:e.color}},t)}))})]})})},N=function(e){var t=[];if("ARRAY SIZE"!==e)for(var o=0;o<parseInt(e);o++)t.push({height:Math.floor(490*Math.random())+10,color:"#d1d1d1"});else for(var i=0;i<40;i++)t.push({height:Math.floor(490*Math.random())+10,color:"#d1d1d1"});return t},A=function(){var e=Object(i.useState)("ALGORITHM"),t=Object(d.a)(e,2),o=t[0],n=t[1],c=Object(i.useState)("ARRAY SIZE"),s=Object(d.a)(c,2),a=s[0],u=s[1],h=Object(i.useState)("SPEED"),b=Object(d.a)(h,2),j=b[0],x=b[1],O=Object(i.useState)(N(a)),p=Object(d.a)(O,2),f=p[0],v=p[1];return Object(r.jsxs)("div",{className:"app-container",children:[Object(r.jsx)(l,{algoSelection:o,setAlgoSelection:n,arrSelection:a,setArrSelection:u,speedSelection:j,setSpeedSelection:x,setArr:v}),Object(r.jsx)(I,{algo:o,arrSize:a,speed:j,arr:f,setArr:v})]})},R=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,15)).then((function(t){var o=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;o(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),R()}},[[14,1,2]]]);
//# sourceMappingURL=main.27072237.chunk.js.map