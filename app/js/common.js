	$('a[href^="#"], a[href^="."]').click(function () {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700);
		}
		return false;
	});

	(function ($) {
		$(function () {

			$('ul.menu__list').on('click', 'li:not(.active)', function () {
				$(this)
					.addClass('active').siblings().removeClass('active')
					.closest('.menu__tabs').find('div.menu__content').removeClass('active').eq($(this).index()).addClass('active');
			});

		});
	})(jQuery);
