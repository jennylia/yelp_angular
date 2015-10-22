function modifyElements(){
	setTimeout(function(){ 
		alert("Starting the manimulate the DOM"); 
		// var a = document.getElementsByClassName('IATS_EventTitle')[0];
		var a = $('.IATS_EventTitle')[0];
		console.log(a);
		a.innerHTML = "Buy Jenny A coffee";

		$("[class^=IATS]").removeClass().addClass("padded");
	}, 3000);
}


function afterJQueryLoad() {
	if (window.$){
        //possibly some other JQuery checks to make sure that everything is loaded here

        modifyElements();
    } else {
    	setTimeout(afterJQueryLoad, 50);
    }
}

afterJQueryLoad();


