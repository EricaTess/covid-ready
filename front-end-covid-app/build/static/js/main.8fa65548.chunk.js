(this["webpackJsonpfront-end-covid-app"]=this["webpackJsonpfront-end-covid-app"]||[]).push([[0],{62:function(e,t,a){e.exports=a(74)},67:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(8),r=a.n(o),c=(a(67),a(18)),i=a(19),s=a(23),m=a(21),u=a(29),d=a(7),p=a(106),g=a(14),v=a(109),f=a(110),h=a(103),b=a(107);function E(e){return l.a.createElement("div",{className:"rating-form"},l.a.createElement(h.a,{component:"legend"},"Overall Score"),l.a.createElement(f.a,{name:"overall-score|".concat(e.place_id),value:e.reviews.overall_score,readOnly:!0}),l.a.createElement(h.a,{component:"legend"},"Mask Requirement"),l.a.createElement(f.a,{name:"mask-usage|".concat(e.place_id),value:e.reviews.mask_score,readOnly:!0}),l.a.createElement(h.a,{component:"legend"},"Hand Sanitizer Availibility"),l.a.createElement(f.a,{name:"cleanliness|".concat(e.place_id),value:e.reviews.clean_score,readOnly:!0}),l.a.createElement(h.a,{component:"legend"},"Six Foot Distancing"),l.a.createElement(f.a,{name:"six-foot-distancing|".concat(e.place_id),value:e.reviews.six_ft_score,readOnly:!0}),l.a.createElement(h.a,{component:"legend"},"Proper PPE"),l.a.createElement(f.a,{name:"glove-usage|".concat(e.place_id),value:e.reviews.glove_score,readOnly:!0}),l.a.createElement("br",null),l.a.createElement(b.a,{id:"text-review",multiline:!0,value:e.reviews.text_review,rows:4,variant:"outlined",disabled:!0}))}function w(e){var t=Object(n.useState)([]),a=Object(g.a)(t,2),o=a[0],r=a[1];Object(n.useEffect)((function(){fetch("/ratings-by-clinic",{method:"POST",headers:{content_type:"application/json"},body:JSON.stringify(e.place_id)}).then((function(e){return e.json()})).then((function(e){console.log(e),r(e)}))}),[]);return l.a.createElement("div",null,function(){console.log("in getReviews",o);var e=[];return o&0===o.length?l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"No reviews! Rate this clinic."))):(o.map((function(t){e.push(l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(E,{reviews:t})))))})),e)}())}function y(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(""),i=Object(g.a)(c,2),s=i[0],m=i[1],u=Object(n.useState)(""),d=Object(g.a)(u,2),p=d[0],v=d[1],E=Object(n.useState)(""),w=Object(g.a)(E,2),y=w[0],_=w[1],O=Object(n.useState)(""),S=Object(g.a)(O,2),j=S[0],C=S[1],N=Object(n.useState)(""),k=Object(g.a)(N,2),x=k[0],M=k[1];return l.a.createElement("div",{className:"rating-form"},l.a.createElement(h.a,{component:"legend"},"Overall Score"),l.a.createElement(f.a,{name:"overall-score|".concat(e.place_id),onChange:function(e){e.preventDefault(),r(e.target.value)}}),l.a.createElement(h.a,{component:"legend"},"Mask Requirement"),l.a.createElement(f.a,{name:"mask-usage|".concat(e.place_id),onChange:function(e){e.preventDefault(),m(e.target.value)}}),l.a.createElement(h.a,{component:"legend"},"Hand Sanitizer Availibility"),l.a.createElement(f.a,{name:"cleanliness|".concat(e.place_id),onChange:function(e){e.preventDefault(),v(e.target.value)}}),l.a.createElement(h.a,{component:"legend"},"Six Foot Distancing"),l.a.createElement(f.a,{name:"six-foot-distancing|".concat(e.place_id),onChange:function(e){e.preventDefault(),_(e.target.value)}}),l.a.createElement(h.a,{component:"legend"},"Proper PPE"),l.a.createElement(f.a,{name:"glove-usage|".concat(e.place_id),onChange:function(e){e.preventDefault(),C(e.target.value)}}),l.a.createElement("br",null),l.a.createElement(b.a,{id:"text-review",multiline:!0,rows:4,defaultValue:"Leave a Review",variant:"outlined",onChange:function(e){e.preventDefault(),M(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(t){t.preventDefault();var a=localStorage.getItem("user_id"),n={overall_score:o,mask_score:s,clean_score:p,six_ft_score:y,glove_score:j,text_review:x,place_id:e.place_id,user_id:a};fetch("/ratings",{method:"POST",headers:{content_type:"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Submit Review"))}function _(e){var t=Object(n.useState)(5),a=(Object(g.a)(t,1)[0],Object(n.useState)(!1)),o=Object(g.a)(a,2),r=o[0],c=o[1],i=Object(n.useState)(!1),s=Object(g.a)(i,2),m=s[0],u=s[1];return l.a.createElement("div",{className:"clinic-information",id:"clinic|".concat(e.place_id)},l.a.createElement("p",{className:"clinic-name"},e.name),l.a.createElement("p",{className:"address"},e.address),l.a.createElement("p",{className:"phone"},e.phone),l.a.createElement("p",{className:"hours"},function(){if(void 0!==e.hours)return l.a.createElement("div",null,e.hours[0],l.a.createElement("br",null),e.hours[1],l.a.createElement("br",null),e.hours[2],l.a.createElement("br",null),e.hours[3],l.a.createElement("br",null),e.hours[4],l.a.createElement("br",null),e.hours[5],l.a.createElement("br",null),e.hours[6],l.a.createElement("br",null))}()),l.a.createElement("a",{className:"website",href:e.website},"Website"),l.a.createElement(v.a,{component:"fieldset",mb:3,borderColor:"transparent"},"Average Overall Score",l.a.createElement("br",null),l.a.createElement(f.a,{name:"overall-score|".concat(e.place_id),precision:.1,value:4.45,readOnly:!0}),l.a.createElement("button",{className:"btn btn-primary btn-block leave-review-btn",onClick:function(t){t.preventDefault(),c(r===!l.a.createElement(y,null)?l.a.createElement(y,{place_id:e.place_id}):!l.a.createElement(y,null))}},"Rate Clinic"),l.a.createElement("button",{className:"btn btn-primary btn-block view-review-btn",onClick:function(t){t.preventDefault(),u(m===!l.a.createElement(w,null)?l.a.createElement(w,{place_id:e.place_id}):!l.a.createElement(w,null))}},"View Reviews")),r,m)}var O=function(){return l.a.createElement("div",{className:"navbar m1-auto"},l.a.createElement("h1",{className:"app-name"},"COVID Ready"),l.a.createElement(u.b,{to:"/login",onClick:function(){return localStorage.clear()},className:"m1-auto"},"Log out"))},S={lat:37.7749,lng:-122.4194},j=[],C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getGeoLocation=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){n.setState((function(t){return{currentLocation:{lat:e.coords.latitude,lng:e.coords.longitude}}}))}))},n.createGoogleMap=function(){return new window.google.maps.Map(n.googleMapRef.current,{zoom:14,center:n.state.currentLocation,zoomControl:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1})},n.createSearchBox=function(){var e=document.getElementById("pac-input"),t=new window.google.maps.places.Autocomplete(e);n.googleMap.controls[window.google.maps.ControlPosition.TOP_CENTER].push(e),t.bindTo("bounds",n.googleMap),t.setFields(["address_components","geometry","name"]),t.addListener("place_changed",(function(){var e=t.getPlace();if(e.geometry){var a=new window.google.maps.LatLngBounds;e.geometry.viewport?a.union(e.geometry.viewport):a.extend(e.geometry.location),n.setState((function(t){return{currentLocation:{lat:e.geometry.location.lat(),lng:e.geometry.location.lng()}}})),n.deleteMarker(),n.createPlaces(),n.googleMap.fitBounds(a)}else console.log("Returned place contains no geometry")}))},n.setMapOnAll=function(){for(var e=0;e<j.length;e++)j[e].setMap(n.googleMap)},n.deleteMarker=function(){n.setMapOnAll(null),n.setState.markers=[]},n.createPlaces=function(){var e={query:"medical clinic",location:n.state.currentLocation};n.setState({clinics:[]});var t=new window.google.maps.InfoWindow;j.forEach((function(e){e.setMap(null)}));var a=new window.google.maps.places.PlacesService(n.googleMap);a.textSearch(e,(function(e,l){if(l===window.google.maps.places.PlacesServiceStatus.OK)for(var o=function(l){var o=new window.google.maps.Marker({position:{lat:e[l].geometry.location.lat(),lng:e[l].geometry.location.lng()}});o.addListener("click",(function(){t.setContent("\n              <div>\n                <p>".concat(e[l].name,"</p>\n                <p>").concat(e[l].formatted_address,"</p>\n              </div>")),t.open(n.googleMap,o)})),o.setMap(n.googleMap);var r={placeId:e[l].place_id,fields:["name","formatted_address","formatted_phone_number","opening_hours.weekday_text","website","photo"]};j.push(o),a.getDetails(r,(function(e,t){if(t===window.google.maps.places.PlacesServiceStatus.OK){e.id="".concat(r.placeId);var a=n.state.clinics.concat(e);n.setState({clinics:a})}}))},r=0;r<e.length;r++)o(r)}))},n.state={clinics:[],clinicId:[],currentLocation:S,redirect:null},n.googleMapRef=l.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtkAQdVxlPIJeGjfRUhYRizL35fLxm9V8&libraries=places",window.document.body.appendChild(t),this.geolocation=this.getGeoLocation(),t.addEventListener("load",(function(){e.googleMap=e.createGoogleMap(),e.search=e.createSearchBox(),e.places=e.createPlaces()}))}},{key:"render",value:function(){if(0===localStorage.length)return l.a.createElement(u.a,{to:"/login"});var e=this.state.clinics.map((function(e){return void 0!==e.opening_hours?l.a.createElement("div",{className:"clinics"},l.a.createElement("ul",null,l.a.createElement("li",{key:e.id,class:"clinic-list_item"},l.a.createElement(_,{name:e.name,place_id:e.id,address:e.formatted_address,phone:e.formatted_phone_number,hours:e.opening_hours.weekday_text,website:e.website,photo:e.photo}),l.a.createElement(p.a,{variant:"middle"})),l.a.createElement(p.a,{variant:"middle"}))):l.a.createElement("div",{className:"clinics"},l.a.createElement("ul",{class:"clinic-lists"},l.a.createElement("li",{key:e.id,class:"clinic-list_item"},l.a.createElement(_,{name:e.name,place_id:e.id,address:e.formatted_address,phone:e.formatted_phone_number,website:e.website}),l.a.createElement(p.a,{variant:"middle"})),l.a.createElement(p.a,{variant:"middle"})))}));return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement("div",{class:"maps-container"},l.a.createElement("input",{type:"text",id:"pac-input",placeholder:"Enter a city"}),l.a.createElement("div",{id:"map",className:"googlemap",ref:this.googleMapRef,style:{height:"auto",width:"500px"}}),l.a.createElement("div",{class:"col-xs-12 col-md-7 clinic-info"},e)))}}]),a}(n.Component),N=a(39),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(N.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.props.history,n={username:e.state.username,email:e.state.email,password:e.state.password};fetch("/users/register",{method:"POST",headers:{content_type:"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){console.log("Registered"),localStorage.setItem("user_id",t.user_id),e.setState({loggedIn:!0}),a.push("/")}))},e.onClick=function(t){t.preventDefault(),e.props.history.push("/login")},e.state={user_id:"",email:"",password:"",errors:{}},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-signup"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Register"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Username"),l.a.createElement("input",{type:"text",className:"form-control",name:"username",placeholder:"Enter a username",value:this.state.username,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Register!"),l.a.createElement("button",{type:"login",className:"btn btn-lg btn-primary btn-block",onClick:this.onClick},"Login"))))}}]),a}(n.Component),x=(a(73),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(N.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.props.history,n={email:e.state.email,password:e.state.password};fetch("users/login",{method:"POST",headers:{content_type:"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){console.log(t),"Invalid"===t?(console.log("Login invalid"),alert("Login invalid")):(localStorage.setItem("user_id",t.user_id),localStorage.setItem("isLoggedIn",!0),e.setState({loggedIn:!0,user_id:t.user_id}),a.push("/"))}))},e.onClick=function(t){t.preventDefault(),e.props.history.push("/signup")},e.state={email:"",password:"",user_id:"",loggedIn:!1},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-login"},l.a.createElement("div",{className:"logo"}),l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal login-text"},"Login"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Sign in"),l.a.createElement("button",{type:"signup",className:"btn btn-lg btn-primary btn-block",onClick:this.onClick},"Sign Up!")))}}]),a}(n.Component)),M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container-app"},l.a.createElement(d.a,{exact:!0,path:"/login",component:x}),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:C}),l.a.createElement(d.a,{exact:!0,path:"/signup",component:k})))))}}]),a}(n.Component);r.a.render(l.a.createElement(M,null),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.8fa65548.chunk.js.map