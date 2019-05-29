$(function () {
    const $menu = $('#menuMain');
    const $menuContainer = $('[data-quicklinks-panel="menu"]');
    const $menuElement = $menuContainer.find('.nav-item');
    const $menuBtn = $('[data-menu-button]');
    const scrollTop = $('.scrollTop');
    //powolne przechodzenie
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
    // scroll-to-up
    $(window).scroll(function() {
        const topPosition = $(this).scrollTop();
        if (topPosition > 400) {
            $(scrollTop).css('opacity', '1');

        } else {
            $(scrollTop).css('opacity', '0');
        }
    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0,
        }, 800);

        return false;
    });
    //zliczanie
    let a = 0;
    $(window).scroll(function() {
        let oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
                },
                {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }

                });
            });
            a = 1;
        }
    });
    //mobile-menu
    $menuBtn.on('click', e => {
        if($menu.hasClass('menu--open')){
            $menu.removeClass('menu--open');
            $('body').removeClass('overflow-hidden');
            $menuContainer.removeClass('d-flex');
            $menuContainer.addClass('d-none');
        } else {
            $menu.addClass('menu--open');
            $('body').addClass('overflow-hidden');
            $menuContainer.removeClass('d-none');
            $menuContainer.addClass('d-flex');
        }
    })
    $menuElement.on('click', e => {
        $menuContainer.removeClass('d-flex');
        $menuContainer.addClass('d-none');
        $('body').removeClass('overflow-hidden');
    })
});