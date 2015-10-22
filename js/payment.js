function IATSPaymentBox() {
    this.installJavaScript = InstallJavaScript;
    this.installStyleSheet = InstallStyleSheet; //Luke add for CAPTCHA begin. Feb. 13, 2012
    this.installJavaScriptAuraBox = InstallJavaScriptAuraBox;
    this.installJavaScriptRecaptcha = InstallJavaScriptRecaptcha;
    //Luke add for CAPTCHA end. this.startScript = StartScript; //Luke add for CAPTCHA. Feb. 13, 2012
    this.startRecaptcha = StartRecaptcha;
}

function InstallJavaScript(scriptURL) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    var caller = this;
    script.type = 'text/javascript';
    script.onreadystatechange = function() {
        if (this.readyState == 'complete' || this.readyState == 'loaded') caller.startScript();
    }
    script.onload = this.startScript;
    script.src = scriptURL;
    head.appendChild(script);
} //Luke add for CAPTCHA. Feb. 13, 2012 

function InstallJavaScriptAuraBox(scriptURL) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    var caller = this;
    script.type = 'text/javascript';
    script.src = scriptURL;
    head.appendChild(script);
} //Luke add for CAPTCHA. Feb. 13, 2012

function InstallJavaScriptRecaptcha(scriptURL) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    var caller = this;
    script.type = 'text/javascript';
    script.onreadystatechange = function() {
        if (this.readyState == 'complete' || this.readyState == 'loaded')
            caller.startRecaptcha();
    }
    script.onload = this.startRecaptcha;
    script.src = scriptURL;
    head.appendChild(script);
}

function InstallStyleSheet(styleSheetLink) {
    var theStyleSheet;
    var head = document.getElementsByTagName('head')[0];
    var linksarray = document.getElementsByTagName("link");
    for (var i in linksarray) {
        if (linksarray[i].href === styleSheetLink) {
            return;
        }
    }
    theStyleSheet = document.createElement('link');
    theStyleSheet.setAttribute('type', 'text/css');
    theStyleSheet.setAttribute('href', styleSheetLink);
    theStyleSheet.setAttribute('rel', 'stylesheet');
    head.appendChild(theStyleSheet);
    theStyleSheet = null;
};

function StartScript() { 
  //iATSPaymentBoxCore = new IATSPaymentBoxCore();
  // don't need this anymore, use singleton now.
  //alert(1); 
}

//Luke add for CAPTCHA. Feb. 13, 2012
function StartRecaptcha() { 
  var t;
  try { 
    if (theIATSPaymentBoxCore.enableCAPTCHA=="1") { 
      if (document.getElementById("IATS_CAPTCHADiv")==undefined || document.getElementById("IATS_CAPTCHADiv")==null) 
        t = setTimeout("StartRecaptcha()",100); 
      else Recaptcha.create("6Lf5Ys0SAAAAADcnirkskZtq7bLtSimPOIRLfITZ", "IATS_CAPTCHADiv",{theme: theIATSPaymentBoxCore.captchatheme});
    } } catch(err) {
      //alert("err: "+ err);
      t = setTimeout("StartRecaptcha()",100); }
} //Get Client's Parameters. Luke May 18, 2012

function GetClientParameters() { 
  var ClientParameters = "";
  var dest = window.location.href; 
  if (dest.indexOf('?')>=0) { 
    dest = dest.substring(dest.indexOf('?')+1);
    ClientParameters = "&ClientParameters=" + encodeURIComponent(dest);
 } 
  return ClientParameters;
} 

(function() {
  var rand = Math.floor(Math.random()*1000000);
  var paymentBox = new IATSPaymentBox();
  paymentBox.installJavaScript('https://www.iatspayments.com/PaymentBox/js/iats_Calendar_us.js');
  paymentBox.installStyleSheet('https://www.iatspayments.com/PaymentBox/css/Calendar.css');
  //paymentBox.installStyleSheet('https://www.iatspayments.com/PaymentBox/css/IATSPaymentBoxBasic.css');
  //Get Client's Parameters. Luke May 18, 2012
  paymentBox.installJavaScriptAuraBox('https://www.iatspayments.com/PaymentBox/IATSPaymentBoxCore.aspx&Version=NA' + GetClientParameters() + '&randID=' + rand);
  //Luke add for CAPTCHA. Feb. 13, 2012
  var theReCAPTCHAUri = document.location.protocol + "//www.google.com/recaptcha/api/js/recaptcha_ajax.js"; 
  paymentBox.installJavaScriptRecaptcha(theReCAPTCHAUri); })();

