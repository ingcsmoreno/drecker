$(document).ready(function () {
	$("ul.inferno_menu li:even").addClass("menu_alt");
	$("ul.inferno_menu li:even").addClass("alt");
	$('#inferno_menu_head').click(function () {
		$('ul.inferno_menu').slideToggle('medium');
	});
				
	$('ul.inferno_menu li a').mouseover(function () {
		$(this).animate({ fontSize: "1.3em" }, 50 );
	});

	$('ul.inferno_menu li a').mouseout(function () {
		$(this).animate({ fontSize: "1.1em" }, 50 );
	});
	
	$("ul.about_menu li:even").addClass("menu_alt");
	$("ul.about_menu li:even").addClass("alt");
	$('#about_menu_head').click(function () {
		$('ul.about_menu').slideToggle('medium');
	});
				
	$('ul.about_menu li a').mouseover(function () {
		$(this).animate({ fontSize: "1.3em" }, 50 );
	});

	$('ul.about_menu li a').mouseout(function () {
		$(this).animate({ fontSize: "1.1em" }, 50 );
	});
});

$(function(){

				// Accordion
				$("#accordion").accordion({ header: "h3" });
	
				// Dialog			
				$('#dialog').dialog({
					autoOpen: false,
					width: 600,
					resizable: false,
					modal: true,
					show: "blind",
					hide: "blind",
					buttons: {
						"Descargar Java RE": function() { 
							window.location.href = "http://www.oracle.com/technetwork/java/javase/downloads/jre-7u1-download-513652.html";
						}
					}
				});
				
				// Dialog Link
				$('#dialog_link').click(function(){
					$('#dialog').dialog('open');
					return false;
				});

				//hover states on the static widgets
				$('#dialog_link').hover(
					function() { $(this).addClass('ui-state-hover'); }, 
					function() { $(this).removeClass('ui-state-hover'); }
				);
				
			});
			
$(function() {
				$( "input:submit, button").button();
				$( "searchCard" ).click(function() { return false; });
			});