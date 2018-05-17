var navListItems = $('a .nav-list-item');
var btnProfile = $('a.btn-link');
var navListHidden = $('#nav-list-hidden');
var profileSubMenu = $('.profile-sub-menu');
function init() {
	navListItems.hover(function(){
		navListItems.addClass('hover-state');
		navListHidden.css('display', 'block');
	});
	btnProfile.on('click', function(){
		profileSubMenu.css('display', 'block');
	});
}
$(function(){
	init();
}); // document ready