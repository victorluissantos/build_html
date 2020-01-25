bkLib.onDomLoaded(function() { nicEditors.allTextAreas() }); // convert all text areas to rich text editor on that page

bkLib.onDomLoaded(function() {
     new nicEditor().panelInstance('area1');
}); // convert text area with id area1 to rich text editor.

bkLib.onDomLoaded(function() {
     new nicEditor({fullPanel : true}).panelInstance('area2');
}); // convert text area with id area2 to rich text editor with full panel.

function link_whats(numero) {
	return $('.whats').html('<a href=\"https://wa.me/'+numero+'\" target=\"_blank\">'+numero+'</a>')
}

function link_mail(email) {
	return $('.email').html('<a href=\"mailto:'+email+'\" target=\"_self\">'+email+'</a>')
}

$('div').on('change', function(e) {
	$('.texto').html(document.getElementsByClassName('nicEdit-main')[0].innerHTML)
});