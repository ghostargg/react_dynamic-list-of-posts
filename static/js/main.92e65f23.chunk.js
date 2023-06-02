(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n.n(a),c=n(10),r=n(5),o=n(2),i=n(3),l=n.n(i),m=n(1),d=n.n(m),u=(n(16),n(17),n(18),n(4)),j=n.n(u),b=n(0),h=d.a.memo((function(e){var t=e.selectedUserPosts,n=e.onSelecPost,a=e.selectedPost;return Object(b.jsxs)("div",{"data-cy":"PostsList",children:[Object(b.jsx)("p",{className:"title",children:"Posts:"}),Object(b.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{className:"has-background-link-light",children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,c=(null===a||void 0===a?void 0:a.id)===e.id;return Object(b.jsxs)("tr",{"data-cy":"Post",children:[Object(b.jsx)("td",{"data-cy":"PostId",children:t}),Object(b.jsx)("td",{"data-cy":"PostTitle",children:s}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{type:"button","data-cy":"PostButton",className:j()("button is-link",{"is-light":!c}),onClick:function(){return n(e)},children:c?"Close":"Open"})})]},t)}))})]})]})})),O=(n(20),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),x=d.a.memo((function(e){var t=e.onChangeCommentAuthorName,n=e.onChangeCommentAuthorEmail,a=e.onChangeCommentContent,s=e.commentAuthorName,c=e.commentAuthorEmail,r=e.commentContent,o=e.onClearCommentForm,i=e.onCommentSubmit,l=e.hasFormError,m=e.isAddingComment,d=l&&!s,u=l&&!c,h=l&&!r;return Object(b.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:i,children:[Object(b.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(b.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:j()("input",{"is-danger":d}),value:s,onChange:t}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-user"})}),d&&Object(b.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(b.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),d&&Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(b.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(b.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:j()("input",{"is-danger":u}),value:c,onChange:n}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fas fa-envelope"})}),u&&Object(b.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(b.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),u&&Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(b.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(b.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:j()("textarea",{"is-danger":h}),value:r,onChange:a})}),h&&Object(b.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(b.jsxs)("div",{className:"field is-grouped",children:[Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{type:"submit",className:j()("button is-link",{"is-loading":m}),children:"Add"})}),Object(b.jsx)("div",{className:"control",children:Object(b.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){return o()},children:"Clear"})})]})]})})),p=d.a.memo((function(e){var t=e.selectedPost,n=e.areCommentsLoading,a=e.comments,s=e.showAddComment,c=e.onShowAddComment,r=e.commentAuthorName,o=e.commentAuthorEmail,i=e.commentContent,l=e.onChangeCommentAuthorName,m=e.onChangeCommentAuthorEmail,d=e.onChangeCommentContent,u=e.onClearCommentForm,j=e.onCommentSubmit,h=e.hasFormError,p=e.isAddingComment,f=e.onRemoveComment,v=e.hasCommentError,C=t.id,N=t.title,g=t.body;return Object(b.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(b.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(b.jsxs)("div",{className:"block",children:[Object(b.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(C,": ").concat(N)}),Object(b.jsx)("p",{"data-cy":"PostBody",children:g})]}),Object(b.jsxs)("div",{className:"block",children:[n&&Object(b.jsx)(O,{}),v?Object(b.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}):Object(b.jsxs)(b.Fragment,{children:[!n&&0===a.length&&Object(b.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!n&&a.length>1&&Object(b.jsx)("p",{className:"title is-4",children:"Comments:"}),a.length>0&&a.map((function(e){var t=e.id,n=e.name,a=e.email,s=e.body;return Object(b.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(b.jsxs)("div",{className:"message-header",children:[Object(b.jsx)("a",{href:"mailto:".concat(a),"data-cy":"CommentAuthor",children:n}),Object(b.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return f(t)},children:"delete button"})]}),Object(b.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:s})]},t)}))]}),!n&&!s&&!v&&Object(b.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:c,children:"Write a comment"})]}),s&&Object(b.jsx)(x,{onChangeCommentAuthorName:l,onChangeCommentAuthorEmail:m,onChangeCommentContent:d,commentAuthorName:r,commentAuthorEmail:o,commentContent:i,onClearCommentForm:u,onCommentSubmit:j,hasFormError:h,isAddingComment:p})]})})})),f=d.a.memo((function(e){var t=e.users,n=e.onClickUsersDropdown,a=e.isDropdownActive,s=e.selectedUser,c=e.onSelectUser;return Object(b.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(b.jsx)("div",{className:"dropdown-trigger",children:Object(b.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:n,children:[Object(b.jsx)("span",{children:s?null===s||void 0===s?void 0:s.name:"Choose a user"}),Object(b.jsx)("span",{className:"icon is-small",children:Object(b.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),a&&Object(b.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(b.jsx)("div",{className:"dropdown-content",children:t.map((function(e){var t=e.id,n=e.name;return Object(b.jsx)("a",{href:"#user-".concat(t),className:"dropdown-item",onClick:function(){return c(e)},children:n},t)}))})})]})})),v="https://mate.academy/students-api";function C(e){return new Promise((function(t){setTimeout(t,e)}))}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return n&&(a.body=JSON.stringify(n),a.headers={"Content-Type":"application/json; charset=UTF-8"}),C(300).then((function(){return fetch(v+e,a)})).then((function(e){if(!e.ok)throw new Error("Request Failed");return e.json()}))}var g=function(e){return N(e)},y=function(e,t){return N(e,"POST",t)},k=function(e){return N(e,"DELETE")},w=function(){var e=Object(m.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(m.useState)(!1),i=Object(o.a)(s,2),d=i[0],u=i[1],x=Object(m.useState)(null),v=Object(o.a)(x,2),C=v[0],N=v[1],w=Object(m.useState)([]),S=Object(o.a)(w,2),E=S[0],A=S[1],P=Object(m.useState)(!1),F=Object(o.a)(P,2),T=F[0],U=F[1],D=Object(m.useState)(!1),L=Object(o.a)(D,2),I=L[0],B=L[1],M=Object(m.useState)(!1),_=Object(o.a)(M,2),q=_[0],J=_[1],R=Object(m.useState)(null),W=Object(o.a)(R,2),G=W[0],Y=W[1],z=Object(m.useState)([]),H=Object(o.a)(z,2),K=H[0],Q=H[1],V=Object(m.useState)(!1),X=Object(o.a)(V,2),Z=X[0],$=X[1],ee=Object(m.useState)(""),te=Object(o.a)(ee,2),ne=te[0],ae=te[1],se=Object(m.useState)(""),ce=Object(o.a)(se,2),re=ce[0],oe=ce[1],ie=Object(m.useState)(""),le=Object(o.a)(ie,2),me=le[0],de=le[1],ue=Object(m.useState)(!1),je=Object(o.a)(ue,2),be=je[0],he=je[1],Oe=Object(m.useState)(!1),xe=Object(o.a)(Oe,2),pe=xe[0],fe=xe[1],ve=Object(m.useState)(!1),Ce=Object(o.a)(ve,2),Ne=Ce[0],ge=Ce[1],ye=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/users");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){ye()}),[]);var ke=function(){u((function(e){return!e}))},we=function(){var e=Object(r.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=16;break}return e.prev=1,U(!0),e.next=5,g("/posts?userId=".concat(t.id));case 5:n=e.sent,A(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),J(!0);case 12:return e.prev=12,U(!1),Y(null),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[1,9,12,16]])})));return function(t){return e.apply(this,arguments)}}(),Se=Object(m.useCallback)((function(e){N(null),Y(null),he(!1),J(!1),N(e),ke(),we(e)}),[]),Ee=function(){var e=Object(r.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=15;break}return B(!0),e.prev=2,e.next=5,g("/comments?postId=".concat(t.id));case 5:n=e.sent,Q(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),he(!0);case 12:return e.prev=12,B(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),Ae=Object(m.useCallback)((function(e){(null===G||void 0===G?void 0:G.id)!==(null===e||void 0===e?void 0:e.id)?(he(!1),Q([]),$(!1),Y(e),Ee(e)):Y(null)}),[Ee,G]),Pe=Object(m.useCallback)((function(){$(!0)}),[]),Fe=Object(m.useCallback)((function(e){ae(e.target.value)}),[]),Te=Object(m.useCallback)((function(e){oe(e.target.value)}),[]),Ue=Object(m.useCallback)((function(e){de(e.target.value)}),[]),De=Object(m.useCallback)((function(){ae(""),oe(""),de("")}),[]),Le=Object(m.useCallback)(function(){var e=Object(r.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),re&&ne&&me){e.next=4;break}return ge(!0),e.abrupt("return");case 4:return fe(!0),e.prev=5,e.next=8,y("/comments",{id:0,postId:null===G||void 0===G?void 0:G.id,name:ne,email:re,body:me});case 8:n=e.sent,Q((function(e){return[].concat(Object(c.a)(e),[n])})),de(""),ge(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),ge(!0);case 17:return e.prev=17,fe(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[5,14,17,20]])})));return function(t){return e.apply(this,arguments)}}(),[re,ne,me,G]),Ie=Object(m.useCallback)(function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!K.find((function(e){return e.id===t}))){e.next=11;break}return Q((function(e){return e.filter((function(e){return e.id!==t}))})),e.prev=3,e.next=6,k("/comments/".concat(t));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),J(!0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}(),[K]);return Object(b.jsx)("main",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"tile is-ancestor",children:[Object(b.jsx)("div",{className:"tile is-parent",children:Object(b.jsxs)("div",{className:"tile is-child box is-success",children:[Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(f,{users:n,onClickUsersDropdown:ke,isDropdownActive:d,onSelectUser:Se,selectedUser:C})}),Object(b.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!C&&Object(b.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),C&&Object(b.jsxs)(b.Fragment,{children:[T&&Object(b.jsx)(O,{}),q?Object(b.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}):Object(b.jsxs)(b.Fragment,{children:[!T&&0===E.length&&Object(b.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),!T&&E.length>0&&Object(b.jsx)(h,{selectedUserPosts:E,onSelecPost:Ae,selectedPost:G})]})]})]})]})}),G&&!q&&Object(b.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":G}),children:Object(b.jsx)("div",{className:"tile is-child box is-success ",children:Object(b.jsx)(p,{selectedPost:G,areCommentsLoading:I,comments:K,hasError:q,onShowAddComment:Pe,showAddComment:Z,onChangeCommentAuthorName:Fe,onChangeCommentAuthorEmail:Te,onChangeCommentContent:Ue,commentAuthorName:ne,commentAuthorEmail:re,commentContent:me,onClearCommentForm:De,onCommentSubmit:Le,hasFormError:Ne,isAddingComment:pe,onRemoveComment:Ie,hasCommentError:be})})})]})})})};s.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.92e65f23.chunk.js.map