var Rating=function(){function t(){b.fadeIn()}function n(){a(),g.fadeIn()}function a(){C.html(F.name)}function e(){v.animate({height:"50%"},500,function(){w.fadeIn()})}function i(){v.animate({height:"100%"},500,function(){y.fadeIn()})}function o(t,n){for(var a=0;a<=5;a++)a<=n?$("#"+t+" #star"+a).html("&bigstar;"):$("#"+t+" #star"+a).html("&star;");c()}function c(){setTimeout(function(){r("step2"),I.fadeOut()},1e3)}function r(t){$("#"+t).animate({left:"-100%"},500,function(){T.fadeIn(),D.fadeIn()})}function s(){""!==x.val()&&(h=x.val()),d()}function u(t,n){switch(n){case"star1":p=1,o(t,1);break;case"star2":p=2,o(t,2);break;case"star3":p=3,o(t,3);break;case"star4":p=4,o(t,4);break;case"star5":p=5,o(t,5);break;default:console.log("error")}}function f(){null===E||""===E?t():m()}function l(t){window.location.href=window.location.origin+t}function m(){var a={async:!0,crossDomain:!0,url:apiurl+"rating/verify/"+E,method:"GET",headers:{"cache-control":"no-cache"},processData:!1,contentType:!1,statusCode:{200:function(a,e){""==a?(t(),setTimeout(function(){l("/")},5e3)):(F=a,n())},400:function(t,n){l("/learn/mistake/")},401:function(n,a){t()}}};$.ajax(a)}function d(){var t=new FormData;t.append("stars",p),t.append("comment",h),t.append("id",E);var n={async:!0,crossDomain:!0,url:apiurl+"rating/"+F.userid+"/"+F.clientid,method:"POST",headers:{"cache-control":"no-cache"},processData:!1,contentType:!1,mimeType:"multipart/form-data",data:t,statusCode:{200:function(t,n){setTimeout(function(){l("/learn/about/")},5e3)},400:function(t,n){l("/learn/mistake/")}}};$.ajax(n)}var p=5,h="No comments.",v=$("header"),k=$("#startnow"),b=$("#invalid"),g=$("#step1"),w=$("#step2"),T=$("#step3"),y=$("#step4"),I=$("#stars1"),D=$(".comments"),x=$(".commentsbox"),O=$(".submitcomment"),j=$("#skipcomments"),C=$("#stylist"),E=function(){var t=window.location.href,n=t.split("?")[1];if(void 0===n)return null;var a=n.split("=");return"id"===a[0]?a[1]:null}(),F={};k.click(function(){g.fadeOut(),e()}),$("#stars1 .starrating").each(function(){$(this).click(function(){var t=$(this).attr("id");u($(this).parent().attr("id"),t)})}),O.click(function(){r("step3"),i(),s()}),j.click(function(){r("step3"),i(),s()});!function(){f()}();return{}}();