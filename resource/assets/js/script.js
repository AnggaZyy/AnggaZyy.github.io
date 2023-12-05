function MenuClick(e){
	var openmenu 	= document.getElementById('openmenu');
	var closemenu 	= document.getElementById('closemenu');
	var MenuMobile = document.getElementsByClassName('MenuMobile')[0];
	var jumboTron = document.getElementsByClassName('jumboTron')[0];

	if (e=== "open") {
		openmenu.style.display = 'none';
		closemenu.style.display = 'flex';
		// AnimationMenu('open');
		MenuMobile.classList.add("active");
		jumboTron.classList.add('blur');
		
	}else {
		openmenu.style.display = 'flex';
		closemenu.style.display = 'none';
		MenuMobile.classList.remove("active");
		jumboTron.classList.remove('blur');

	}
}


function GoTo(e) {
	location.href = e;
}
// function AnimationMenu(e){
// 	var MenuMobile = document.getElementsByClassName('MenuMobile')[0];


// 	var start;
// 	var finish;
// 	var t;
// 	if (e === 'open') {
// 		start = 300;
// 		finish = 0;
// 	}else{
// 		start = 0;
// 		finish = 300;
// 	}
	

	

// 	var animationMenu = setInterval(function(){
		

// 		if (start > finish) {
// 			start = start - 100;
// 		}else{
// 			MenuMobile.style.top = finish+'px';
// 			clearInterval(animationMenu);
// 		}
		
// 	},100)



// }



function NotifLogin(e,text) {
	var displayNotif = document.getElementById('displayNotif');
	var textNotif = document.getElementById('text-notif');
	if (e == 'open') {
		displayNotif.style.display = 'flex';
		textNotif.innerHTML = text;
	}else {
		displayNotif.style.display = 'none';

	}
}

function SelectPaket(e){
	var tHarga = '';
	if (e.value == "PKT_A") {
		tHarga = '4000';
	}else if(e.value == "PKT_B"){
		tHarga = '5000';
	}else if(e.value == "PKT_C"){
		tHarga = '8000';
	}else if(e.value == "PKT_D"){
		tHarga = '10000';
	}else if(e.value == "PKT_E"){
		tHarga = '15000';
	}else if(e.value == "PKT_F"){
		tHarga = '15000';
	}else if(e.value == "PKT_G"){
		tHarga = '25000';
	}


	var getInputHarga = document.getElementById('getInputHarga');
	getInputHarga.value = tHarga;




}


function loading(){
	var loading = document.getElementById('loading');
	loading.style.display = 'flex';
}