// Attach the inview event listener
$(document).ready(function () {
	$(".kv__img").on("inview", function (event, isInView) {
		if (isInView) {
			$(this).addClass("animate__animated animate__fadeIn");
		} else {
			$(this).removeClass("animate__animated animate__fadeIn");
		}
	});

	$(".kv__txt").on("inview", function (event, isInView) {
		if (isInView) {
			$(this).addClass("animate__animated animate__slideInUp");
		} else {
			$(this).removeClass("animate__animated animate__slideInUp");
		}
	});

	$("sec_01 .txt.tac, .sec_01 h2, .sec_01 h3").on(
		"inview",
		function (event, isInView) {
			if (isInView) {
				$(this).addClass("animate__animated animate__slideInUp");
			} else {
				$(this).removeClass("animate__animated animate__fadeIn");
			}
		}
	);

	const items = $(".list-items .items");
	items.on("inview", function (event, isInView) {
		if (isInView) {
			const index = items.index(this);
			$(this)
				.css("animation-delay", `${index * 0.2}s`)
				.addClass("animate__animated animate__fadeInLeft");
		} else {
			$(this)
				.css("animation-delay", "0s")
				.removeClass("animate__animated animate__fadeInRight");
		}
	});

	const imgItem = $(".list-img .items");
	imgItem.on("inview", function (event, isInView) {
		if (isInView) {
			const index = imgItem.index(this);
			$(this)
				.css("animation-delay", `${index * 0.2}s`)
				.addClass("animate__animated animate__fadeInRight");
		} else {
			$(this)
				.css("animation-delay", "0s")
				.removeClass("animate__animated animate__fadeInRight");
		}
	});

	$(".sec_02  h2").on("inview", function (event, isInView) {
		if (isInView) {
			// element is now visible in the viewport
			$(this).addClass("animate__animated animate__fadeInUp");
		} else {
			// element has gone out of viewport
			$(this).removeClass("animate__animated animate__fadeInUp");
		}
	});

	$(".list-benefits .items").each(function (index) {
		const delay = `${index * 0.2}s`;

		// Use .on("inview") to handle both in and out of view events
		$(this).on("inview", function (event, isInView) {
			if (isInView) {
				// Apply animation based on item's row position (top or bottom row)
				$(this).css("animation-delay", delay);
				if (index < 3) {
					$(this).addClass("animate__animated animate__fadeInLeft");
				} else {
					$(this).addClass("animate__animated animate__fadeInRight");
				}
			} else {
				// Remove animation classes when the item goes out of view
				$(this).removeClass(
					"animate__animated animate__fadeInLeft animate__fadeInRight"
				);
			}
		});
	});

	$(".list-mess .items").each(function (index) {
		const $this = $(this);
		$this.on("inview", function (event, isInView) {
			if (isInView) {
				$this
					.css("animation-delay", `${index * 0.2}s`)
					.addClass("animate__animated animate__fadeIn")
					.css("opacity", 1);
			}
		});
	});

	// section-04
	$(".sec_04 .block-group").on("inview", function (event, isInView) {
		if (isInView) {
			$(this)
				.find(".block")
				.each(function (index) {
					const imgAnimation =
						index === 1 ? "animate__fadeInRight" : "animate__fadeInLeft";
					const txtAnimation =
						index === 1 ? "animate__fadeInLeft" : "animate__fadeInRight";

					$(this)
						.find(".block__img")
						.addClass("animate__animated " + imgAnimation);

					$(this)
						.find(".block__txt")
						.addClass("animate__animated " + txtAnimation);
				});
		}
	});

	// sec-05

	$(".sec_05 .title_h2").on("inview", function (event, isInView) {
		if (isInView) {
			$(this).addClass("animate__animated animate__slideInUp");
		} else {
			$(this).removeClass("animate__animated animate__slideInUp");
		}
	});

	$(".sec_05 .price li").on("inview", function (event, isInView) {
		if (isInView) {
			$(this).addClass("animate__animated animate__slideInUp");
		} else {
			$(this).removeClass("animate__animated animate__slideInUp");
		}
	});

	// section-6

	$(".sec_06 .title_h2").on("inview", function (event, isInView) {
		if (isInView) {
			$(this).addClass("animate__animated animate__fadeInUp");
		}
	});

	$(".sec_06 .container .store").on("inview", function (event, isInView) {
		if (isInView) {
			$(this).find(".map").addClass("animate__animated animate__fadeInLeft");
			$(this).find(".thumb").addClass("animate__animated animate__fadeInRight");
		}
	});

	// section-7

	$(".sec_07 .title_h2").on("inview", function (event, isInView) {
		if (isInView) {
			$(this).addClass("animate__animated animate__fadeInUp");
		}
	});

	$(".sec_07 .container .inquiry").on("inview", function (event, isInView) {
		if (isInView) {
			$(this)
				.find(".inquiry__img")
				.addClass("animate__animated animate__fadeInLeft");
			$(this)
				.find(".inquiry__txt")
				.addClass("animate__animated animate__fadeInRight");
		}
	});

	// section-8

	$(".sec_08 .title_h2").on("inview", function (event, isInView) {
		if (isInView) {
			$(this).addClass("animate__animated animate__fadeInUp");
		}
	});

	$(".sec_08 .container .overview").on("inview", function (event, isInView) {
		if (isInView) {
			$(this)
				.find(".overview__txt")
				.addClass("animate__animated animate__fadeInLeft");
			$(this)
				.find(".overview__img")
				.addClass("animate__animated animate__fadeInRight");
		}
	});

	// section-9

	$(".sec_09 .container .vision").on("inview", function (event, isInView) {
		if (isInView) {
			$(this)
				.find(".vision__txt")
				.addClass("animate__animated animate__fadeInLeft");
			$(this)
				.find(".vision__details")
				.addClass("animate__animated animate__fadeInRight");
		}
	});

	// section-10
	setTimeout(() => {
		$(".float-social li").on("inview", function (event, isInView) {
			if (isInView) {
				$(this).css("animation-delay", `${$(this).index() * 0.3}s`);
				$(this).addClass("animate__animated animate__fadeInRight");
			}
		});
	}, 500);
});
