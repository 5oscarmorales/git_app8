// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready", function() {
		$('#izquierda').on("swipeleft",function() {
			navigator.notification.alert("Deslizo hacia la izquierda" ,function() { "aplicacion 7", "ok"});
			
		});
       
	   $('#derecha').on("swiperight",function() {
		   navigator.notification.confirm("¿Que quieres hacer?" ,function(op){
			   switch(op)//variable op para las opciones
			   {
				    case 1:
					navigator.notification.beep(1); //suena el dispositivo
					break;
					
					case 2:
					navigator.notification.vibrate(3000);//vibra el dispositivo
					break;
			   }
		   },"aplicacion7", "beepear,vibrar,cancelar");
	   });
	   },false);
					
	});
