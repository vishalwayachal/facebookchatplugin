var theme_color = "";
var logged_in_greeting = "";
var logged_out_greeting = "";
var ref = "";
var script = document.currentScript;
var srcScript = script.src;
var page_id = <facebookId>
var domainName = window.location.hostname;

function getUrlParameter(src, name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(src);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

 if (getUrlParameter(srcScript, 'ref')) {
   ref = getUrlParameter(srcScript, 'ref');
 }
 if (getUrlParameter(srcScript, 'page_id')) {
   page_id = getUrlParameter(srcScript, 'page_id');
 }
 if (getUrlParameter(srcScript, 'theme_color')) {
   theme_color = getUrlParameter(srcScript, 'theme_color');
 }
 if (getUrlParameter(srcScript, 'logged_in_greeting')) {
   logged_in_greeting = getUrlParameter(srcScript, 'logged_in_greeting');
 }
 if (getUrlParameter(srcScript, 'logged_out_greeting')) {
   logged_out_greeting = getUrlParameter(srcScript, 'logged_out_greeting');
 }
var iDivRoot = document.createElement('div');
iDivRoot.setAttribute('id', 'fb-root');
document.body.appendChild(iDivRoot);


window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    autoLogAppEvents : true,
    version: 'v7.0'
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


var iDiv = document.createElement('div');
iDiv.setAttribute('class', 'fb-customerchat');
iDiv.setAttribute('attribution', 'setup_tool'); 
iDiv.setAttribute('page_id', page_id);


if (theme_color) {
  iDiv.setAttribute('theme_color', theme_color);
}
if (logged_in_greeting) {
  iDiv.setAttribute('logged_in_greeting', logged_in_greeting);
}
if (logged_out_greeting) {
  iDiv.setAttribute('logged_out_greeting', logged_out_greeting);
}
if (ref) {
  iDiv.setAttribute('ref', ref);
} else {
  iDiv.setAttribute('greeting_dialog_display', 'hide');
}

document.body.appendChild(iDiv);

