$(".nav-button").click(function() {
	$(".nav").addClass("is-active");
	
	$(".nav-button").removeClass("is-active");
	$(".about").removeClass("is-active");

	var getSection = "#" + this.getAttribute("for");

	$(this).toggleClass("is-active");
	$(getSection).toggleClass("is-active");
});
$(".nav-close").click(function() {
	$(".nav").removeClass("is-active");

	$(".nav-button").removeClass("is-active");
	$(".about").removeClass("is-active");
})