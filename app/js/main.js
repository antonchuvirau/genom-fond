'use strict';

document.addEventListener(`DOMContentLoaded`, () => {
    const helpSectionSwiperElement = document.querySelector(`.help-swiper`);
    const healthSectionSwiperElement = document.querySelector(`.health-swiper`);
    const mediaSwiperInstanceCollection = document.querySelectorAll(`.media-swiper__instance`);
    
    if (healthSectionSwiperElement) {
        new Swiper(healthSectionSwiperElement, {
            slidesPerView: `auto`,
            spaceBetween: 55,
            loop: false,
            slidesOffsetBefore: (window.innerWidth - 1170) / 2,
            navigation: {
                prevEl: healthSectionSwiperElement.closest(`.help-section`).querySelector(`.carousel-navigation__btn-prev`),
                nextEl: healthSectionSwiperElement.closest(`.help-section`).querySelector(`.carousel-navigation__btn-next`)
            }
        });
    }
    if (helpSectionSwiperElement) {
        new Swiper(helpSectionSwiperElement, {
            slidesPerView: `auto`,
            spaceBetween: 55,
            loop: false,
            slidesOffsetBefore: (window.innerWidth - 1170) / 2,
            navigation: {
                prevEl: helpSectionSwiperElement.closest(`.help-section`).querySelector(`.carousel-navigation__btn-prev`),
                nextEl: helpSectionSwiperElement.closest(`.help-section`).querySelector(`.carousel-navigation__btn-next`)
            }
        });
    }
    if (mediaSwiperInstanceCollection.length) {
        for (const mediaSwiperInstance of mediaSwiperInstanceCollection) {
            new Swiper(mediaSwiperInstance, {
                effect: "cards",
                grabCursor: true,
                speed: 800,
                navigation: {
                    prevEl: mediaSwiperInstance.closest(`.text-section`).querySelector(`.carousel-navigation__btn-prev`),
                    nextEl: mediaSwiperInstance.closest(`.text-section`).querySelector(`.carousel-navigation__btn-next`)
                }
            });
        }
    }
});

// JQUERY
jQuery(document).ready(function() {
    jQuery('[data-modal]').on('click', function() {
        jQuery(jQuery(this).data('modal')).modal();
        return false;
      });
});