
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = { "preguntas": [ {"pregunta": "¿Actual entrenador de la Selección Mexicana?","respuestas": [{"respuesta": "Miguel  Herrera","tipo": "false"},{"respuesta": "Javier  Aguirre","tipo": "false"},{"respuesta": "José Manuel de la Torre","tipo": "false"},{"respuesta": "Juan Carlos Osorio","tipo": "true"}] }, {"pregunta": "¿En cuántos mundiales ha participado la Selección Mexicana?","respuestas": [{"respuesta": "15","tipo": "true"},{"respuesta": "18","tipo": "false"},{"respuesta": "13","tipo": "false"},{"respuesta": "16","tipo": "false"}] }, {"pregunta": "¿Mundiales disputados por la Tota Carbajal?","respuestas": [{"respuesta": "7","tipo": "false"},{"respuesta": "5","tipo": "true"},{"respuesta": "3","tipo": "false"},{"respuesta": "2","tipo": "false"}] }, {"pregunta": "¿Máximo goleador en la Selección Mexicana?","respuestas": [{"respuesta": "Jared Borgetti","tipo": "true"},{"respuesta": "Javier Hernández","tipo": "false"},{"respuesta": "Cuauhtémoc Blanco","tipo": "false"},{"respuesta": "Hugo Sánchez","tipo": "false"}] }, {"pregunta": "¿Jugador con más participaciones en la Selección Mexicana?","respuestas": [{"respuesta": "Pavel Pardo","tipo": "false"},{"respuesta": "Claudio Suárez","tipo": "true"},{"respuesta": "Rafael Márquez","tipo": "false"},{"respuesta": "Jorge Campos","tipo": "false"}] }, {"pregunta": "¿Anotador del primer gol del Tri en Mundiales?","respuestas": [{"respuesta": "Juan Carreño","tipo": "true"},{"respuesta": "Luis Pérez","tipo": "false"},{"respuesta": "Felipe Olivares","tipo": "false"},{"respuesta": "Hilario López","tipo": "false"}] }, {"pregunta": "¿Cuántas veces México ha sido sede del Mundial?","respuestas": [{"respuesta": "1","tipo": "false"},{"respuesta": "0","tipo": "false"},{"respuesta": "2","tipo": "true"},{"respuesta": "3","tipo": "false"}] }, {"pregunta": "¿Portero titular de México en el Mundial 2010?","respuestas": [{"respuesta": "Guillermo Ochoa","tipo": "false"},{"respuesta": "Alfredo Talavera","tipo": "false"},{"respuesta": "Jesús Corona","tipo": "false"},{"respuesta": "Óscar Pérez","tipo": "true"}] }, {"pregunta": "¿Primer rival al que marcó Chicharito con el Tri?","respuestas": [{"respuesta": "Bolivia","tipo": "true"},{"respuesta": "Costa Rica","tipo": "false"},{"respuesta": "Panamá","tipo": "false"},{"respuesta": "Salvador","tipo": "false"}] }, {"pregunta": "¿Mundial en el que México utilizó uniforme de un club?","respuestas": [{"respuesta": "Brasil 1950","tipo": "true"},{"respuesta": "México 1970","tipo": "false"},{"respuesta": "Suiza 1954","tipo": "false"},{"respuesta": "Chile 1962","tipo": "false"}] }, {"pregunta": "¿Primer rival del Tri en la historia mundialista?","respuestas": [{"respuesta": "Uruguay","tipo": "false"},{"respuesta": "España","tipo": "false"},{"respuesta": "Italia","tipo": "false"},{"respuesta": "Francia","tipo": "true"}] }, {"pregunta": "¿Primer técnico sudamericano en dirigir al Tri en un mundial?","respuestas": [{"respuesta": "Jorge Sampaoli","tipo": "false"},{"respuesta": "Diego Simeone","tipo": "false"},{"respuesta": "Ricardo La Volpe","tipo": "true"},{"respuesta": "Manuel Pellegrini","tipo": "false"}] }, {"pregunta": "¿Naturalizado que fue a un Mundial con la Selección Mexicana?","respuestas": [{"respuesta": "Chaco Giménez","tipo": "false"},{"respuesta": "Damián Álvarez","tipo": "false"},{"respuesta": "Matías Vuoso","tipo": "false"},{"respuesta": "Guillermo Franco","tipo": "true"}] }, {"pregunta": "¿Máximo rival histórico del Tri?","respuestas": [{"respuesta": "Estados Unidos","tipo": "true"},{"respuesta": "Panamá","tipo": "false"},{"respuesta": "Brasil","tipo": "false"},{"respuesta": "Argentina","tipo": "false"}] }, {"pregunta": "¿Hizo el primer autogol del Tri en un Mundial?","respuestas": [{"respuesta": "Raúl Cárdenas","tipo": "true"},{"respuesta": "Gustavo Peña","tipo": "false"},{"respuesta": "Fernando Quirarte","tipo": "false"},{"respuesta": "Miguel Layún","tipo": "false"}] }, {"pregunta": "¿Qué selección eliminó a México en el último Mundial?","respuestas": [{"respuesta": "Argentina","tipo": "false"},{"respuesta": "Brasil","tipo": "false"},{"respuesta": "Alemania","tipo": "false"},{"respuesta": "Holanda","tipo": "true"}] }, {"pregunta": "¿Cuántas Copa Oro ha ganado la Selección Mexicana?","respuestas": [{"respuesta": "9","tipo": "false"},{"respuesta": "10","tipo": "true"},{"respuesta": "12","tipo": "false"},{"respuesta": "7","tipo": "false"}] }, {"pregunta": "¿Entrenador que calificó al Tri a la próxima Confederaciones?","respuestas": [{"respuesta": "Miguel Herrera","tipo": "false"},{"respuesta": "Juan Carlos Osorio","tipo": "false"},{"respuesta": "Ricardo Ferretti","tipo": "true"},{"respuesta": "Enrique Meza","tipo": "false"}] }, {"pregunta": "¿Primer rival al que el Tri venció en un Mundial?","respuestas": [{"respuesta": "Chile","tipo": "false"},{"respuesta": "Uruguay","tipo": "false"},{"respuesta": "Suiza","tipo": "false"},{"respuesta": "Checoslovaquia","tipo": "true"}] }, {"pregunta": "¿Año en que debutó Hugo Sánchez en un Mundial?","respuestas": [{"respuesta": "1966","tipo": "false"},{"respuesta": "1970","tipo": "false"},{"respuesta": "1978","tipo": "true"},{"respuesta": "1974","tipo": "false"}] }, {"pregunta": "¿En qué Mundial Cuauhtémoc Blanco anotó su primer gol?","respuestas": [{"respuesta": "Alemania","tipo": "false"},{"respuesta": "Corea-Japón","tipo": "false"},{"respuesta": "Francia","tipo": "true"},{"respuesta": "Argentina","tipo": "false"}] }, {"pregunta": "¿Actual entrenador de Argentina?","respuestas": [{"respuesta": "Marcelo Bielsa","tipo": "false"},{"respuesta": "Alfio Basile","tipo": "false"},{"respuesta": "Gerardo Martino","tipo": "true"},{"respuesta": "Diego Armando Maradona","tipo": "false"}] }, {"pregunta": "¿Actual campeón del Mundial?","respuestas": [{"respuesta": "Argentina","tipo": "false"},{"respuesta": "Brasil","tipo": "false"},{"respuesta": "Francia","tipo": "false"},{"respuesta": "Alemania","tipo": "true"}] }, {"pregunta": "¿Jugador que fue campeón del mundo con Francia?","respuestas": [{"respuesta": "Thierry Henry","tipo": "true"},{"respuesta": "Paul Pogba","tipo": "false"},{"respuesta": "Michel Platini","tipo": "false"},{"respuesta": "Just Fontaine","tipo": "false"}] }, {"pregunta": "¿Entrenador campeón del mundo con España?","respuestas": [{"respuesta": "Luis Aragonés","tipo": "false"},{"respuesta": "Vicente del Bosque","tipo": "true"},{"respuesta": "Paco Jémez","tipo": "false"},{"respuesta": "Carlo Ancelotti","tipo": "false"}] }, {"pregunta": "¿Cuántos Mundiales ha ganado Argentina?","respuestas": [{"respuesta": "5","tipo": "false"},{"respuesta": "3","tipo": "false"},{"respuesta": "1","tipo": "false"},{"respuesta": "2","tipo": "true"}] }, {"pregunta": "¿Selección de Sudamérica que nunca ha ido a un Mundial?","respuestas": [{"respuesta": "Perú","tipo": "false"},{"respuesta": "Bolivia","tipo": "false"},{"respuesta": "Venezuela","tipo": "true"},{"respuesta": "Paraguay","tipo": "false"}] }, {"pregunta": "¿Primer Campeón mundial en la historia?","respuestas": [{"respuesta": "Brasil","tipo": "false"},{"respuesta": "Uruguay","tipo": "true"},{"respuesta": "Argentina","tipo": "false"},{"respuesta": "Italia","tipo": "false"}] }, {"pregunta": "¿Máximo goleador de la selección argentina?","respuestas": [{"respuesta": "Lionel Messi","tipo": "false"},{"respuesta": "Hernán Crespo","tipo": "false"},{"respuesta": "Gabriel Batistuta","tipo": "true"},{"respuesta": "Mario Kempes","tipo": "false"}] }, {"pregunta": "¿Cuántos Mundiales ganó Pelé?","respuestas": [{"respuesta": "3","tipo": "true"},{"respuesta": "4","tipo": "false"},{"respuesta": "2","tipo": "false"},{"respuesta": "1","tipo": "false"}] }, {"pregunta": "¿En qué lugar quedó Uruguay en Sudáfrica 2010?","respuestas": [{"respuesta": "Campeón","tipo": "false"},{"respuesta": "Segundo lugar","tipo": "false"},{"respuesta": "Cuarto lugar","tipo": "false"},{"respuesta": "Tercer lugar","tipo": "true"}] }, {"pregunta": "¿Primer selección en recibir una tarjeta roja?","respuestas": [{"respuesta": "Italia","tipo": "false"},{"respuesta": "Argentina","tipo": "false"},{"respuesta": "Uruguay","tipo": "false"},{"respuesta": "Chile","tipo": "true"}] }, {"pregunta": "¿Cuántos Mundiales ha ganado Alemania?","respuestas": [{"respuesta": "5","tipo": "false"},{"respuesta": "3","tipo": "false"},{"respuesta": "4","tipo": "true"},{"respuesta": "6","tipo": "false"}] }, {"pregunta": "¿Actual campeón de la Copa América?","respuestas": [{"respuesta": "Argentina","tipo": "false"},{"respuesta": "Brasil","tipo": "false"},{"respuesta": "Uruguay","tipo": "false"},{"respuesta": "Chile","tipo": "true"}] }, {"pregunta": "¿Máximo anotador de España?","respuestas": [{"respuesta": "Andrés Iniesta","tipo": "false"},{"respuesta": "David Villa","tipo": "true"},{"respuesta": "Fernando Torres","tipo": "false"},{"respuesta": "Juan Mata","tipo": "false"}] }, {"pregunta": "¿Actual entrenador de Chile?","respuestas": [{"respuesta": "Jorge Sampaoli","tipo": "false"},{"respuesta": "Marcelo Bielsa","tipo": "false"},{"respuesta": "Juan Antonio Pizzi","tipo": "true"},{"respuesta": "Iván Zamorano","tipo": "false"}] }, {"pregunta": "¿Portero colombiano que hizo un escorpión?","respuestas": [{"respuesta": "Miguel Calero","tipo": "false"},{"respuesta": "Óscar Córdoba","tipo": "false"},{"respuesta": "David Ospina","tipo": "false"},{"respuesta": "René Higuita","tipo": "true"}] }, {"pregunta": "¿Primera selección que lideró el Ranking FIFA?","respuestas": [{"respuesta": "México","tipo": "false"},{"respuesta": "Italia","tipo": "false"},{"respuesta": "Inglaterra","tipo": "false"},{"respuesta": "Alemania","tipo": "true"}] }, {"pregunta": "¿Cuántos Mundiales ganó Ronaldo?","respuestas": [{"respuesta": "4","tipo": "false"},{"respuesta": "2","tipo": "true"},{"respuesta": "1","tipo": "false"},{"respuesta": "3","tipo": "false"}] }, {"pregunta": "¿En qué Mundial Maradona anotó el gol de la Mano de Dios?","respuestas": [{"respuesta": "Italia 90","tipo": "false"},{"respuesta": "México 86","tipo": "true"},{"respuesta": "España 82","tipo": "false"},{"respuesta": "Argentina 78","tipo": "false"}] }, {"pregunta": "¿Primer título Mundial de Italia?","respuestas": [{"respuesta": "1930","tipo": "false"},{"respuesta": "1942","tipo": "false"},{"respuesta": "1938","tipo": "false"},{"respuesta": "1934","tipo": "true"}] }, {"pregunta": "¿Primera selección a la que gana Argentina con Maradona?","respuestas": [{"respuesta": "México","tipo": "false"},{"respuesta": "Brasil","tipo": "false"},{"respuesta": "Corea del Sur","tipo": "true"},{"respuesta": "Italia","tipo": "false"}] }]};
	 
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},1000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		})
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";
  	
  	if(aciertos<=10){
	  	aficionado="";
	  	msg="te moriste de nada. Pudiste dar más pero ni México en 2010 dio tanta pena.";
  	}

  	if(aciertos>=11 && aciertos<=20){
	  	aficionado="";
	  	msg="¡Eres como la Selección del 2002! ¡Nomas ilusionas y a la hora de la hora, puras lástimas!";
  	}
  	
  	if(aciertos>=21 && aciertos<=30){
	  	aficionado="";
	  	msg="no estuvo mal… pero hasta la Selección que se fue a Brasil en 2014 dio mejores resultados.";
  	}

  	if(aciertos>=31 && aciertos<=40){
	  	aficionado="";
	  	msg="¡Te quedaste a un pasito de la gloria! Haces que me acuerde del 2006 contra Argentina…";
  	}

  	if(aciertos>=41){
	  	aficionado="";
	  	msg="¡Eres el fichaje ideal de la Selección del 98! ¡Vas titular! ";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: México "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " Canadá primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/");
		window.open("https://twitter.com/share?text="+text+"&hashtags=PizzaFut&url="+url,"","width=500, height=300");

	}else{
		
		
		
	}
	
	});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});
});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


