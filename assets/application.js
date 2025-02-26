console.log("hallo");

$(document).ready(() => {
	$(".cart").click(() => {
		$("nav").toggleClass("open");
	});
	// function increaseQty() {
	// 	let qtyInput = document.getElementById("quantity");
	// 	qtyInput.value = parseInt(qtyInput.value) + 1;
	// }

	// function decreaseQty() {
	// 	let qtyInput = document.getElementById("quantity");
	// 	if (parseInt(qtyInput.value) > 1) {
	// 		qtyInput.value = parseInt(qtyInput.value) - 1;
	// 	}
	// }

	$(".life_slider").on("init", (event, slick) => {
		const totalSlides = slick.slideCount;
		const widthPercentage = (1 / totalSlides) * 100;
		$("#life-indicator .bar").css("width", widthPercentage + "%");
	});

	$(".stories_slider").on("init", (event, slick) => {
		const totalSlides = slick.slideCount;
		const widthPercentage = (1 / totalSlides) * 100;
		$("#stories-indicator .bar").css("width", widthPercentage + "%");
	});

	$("#review-slider").on("init", (event, slick) => {
		const totalSlides = slick.slideCount;
		const widthPercentage = (1 / totalSlides) * 100;
		$("#review-indicator .bar").css("width", widthPercentage + "%");
	});

	$(".partner .container").slick({
		arrows: false,
		dots: false,
		centerMode: true,
		variableWidth: true,
		speed: 2500,
		cssEase: "linear",
		autoplay: true,
		autoplaySpeed: 10,
		pauseOnHover: false,
		pauseOnFocus: false,
	});

	$(".stories_slider").slick({
		arrows: false,
		dots: false,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$(".life_slider").slick({
		arrows: false,
		dots: false,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$("#review-slider").slick({
		arrows: false,
		dots: false,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	$("#memory-slide").slick({
		arrows: false,
		dots: false,
		fade: true,
	});
	$("#introduce-slider").slick({
		arrows: false,
		dots: false,
		fade: true,
	});

	$(".life_slider").on("afterChange", (event, slick, currentSlide) => {
		const totalSlides = slick.slideCount;
		const widthPercentage = ((currentSlide + 1) / totalSlides) * 100;
		$("#life-indicator .bar").css("width", widthPercentage + "%");
	});
	$(".stories_slider").on("afterChange", (event, slick, currentSlide) => {
		const totalSlides = slick.slideCount;
		const widthPercentage = ((currentSlide + 1) / totalSlides) * 100;
		$("#stories-indicator .bar").css("width", widthPercentage + "%");
	});
	$("#review-slider").on("afterChange", (event, slick, currentSlide) => {
		const totalSlides = slick.slideCount;
		const widthPercentage = ((currentSlide + 1) / totalSlides) * 100;
		$("#review-indicator .bar").css("width", widthPercentage + "%");
	});

	$("#life-prev").click(() => {
		$(".life_slider").slick("slickPrev");
	});
	$("#life-next").click(() => {
		$(".life_slider").slick("slickNext");
	});

	$(".stories-prev").click(() => {
		$(".stories_slider").slick("slickPrev");
	});
	$(".stories-next").click(() => {
		$(".stories_slider").slick("slickNext");
	});

	$("#review-prev").click(() => {
		$("#review-slider").slick("slickPrev");
	});
	$("#review-next").click(() => {
		$("#review-slider").slick("slickNext");
	});

	$("#introduce-slider").click(() => {
		$("#introduce-slider").slick("slickNext");
	});

	$(".tab_btn button").click((e) => {
		const index = e.currentTarget.getAttribute("id").split("tab-btn-")[1];
		$(".tab_btn button").removeClass("active");
		$(e.currentTarget).addClass("active");
		$("#memory-slide").slick("slickGoTo", index);
	});

	$("#timeline-toggle").click(() => {
		const wrapper = document.querySelector(".timeline .item-wrap");
		wrapper.classList.add("active");
		wrapper.style.maxHeight = wrapper.scrollHeight + "px";
		$(event.currentTarget).hide();
	});

	const acc = document.getElementsByClassName("head");
	let i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			const panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}

	const navbar = document.querySelector("nav");
	window.addEventListener("scroll", () => {
		if (window.scrollY > 50) {
			navbar.classList.add("scrolled");
		} else {
			navbar.classList.remove("scrolled");
		}
	});
});

// tab logic move to page tab-pressResource.liquid
