blabla= false 
function ChangeBackgroundColor(color, color2){
	document.body.style.background= color;
	if(blabla== false){
		document.body.style.background= color;
		blabla = true

	}
	else if (blabla== true){
		document.body.style.background= color2;
		blabla = false
	}

}
