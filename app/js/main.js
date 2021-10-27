'use strict';

document.addEventListener(`DOMContentLoaded`, () => {
    function onOpenMobileMenuButtonClickHandler() {
        document.documentElement.classList.toggle(`is-locked`);
        mobileMenuElement.classList.toggle(`m-layout_is-opened`);
    }

    const desktopContainerWidth = 1140;
    const tabletContainerWidth = 930;
    const tabletMContainerWidth = 690;
    const mobileContainerWidth = 540;
    const helpSectionSwiperElement = document.querySelector(`.help-swiper`);
    const healthSectionSwiperElement = document.querySelector(`.health-swiper`);
    const mediaSwiperInstanceCollection = document.querySelectorAll(`.media-swiper__instance`);
    const openMobileMenuButton = document.querySelector(`.m-menu-btn`);
    const mobileMenuElement = document.querySelector(`.m-layout`);
    
    if (healthSectionSwiperElement) {
        new Swiper(healthSectionSwiperElement, {
            slidesPerView: `auto`,
            spaceBetween: 55,
            loop: false,
            slidesOffsetBefore: (window.innerWidth - desktopContainerWidth) / 2,
            navigation: {
                prevEl: healthSectionSwiperElement.closest(`.help-section`).querySelector(`.carousel-navigation__btn-prev`),
                nextEl: healthSectionSwiperElement.closest(`.help-section`).querySelector(`.carousel-navigation__btn-next`)
            },
            pagination: {
                el: healthSectionSwiperElement.nextElementSibling
            },
            breakpoints: {
                1200: {
                    slidesOffsetBefore: (window.innerWidth - desktopContainerWidth) / 2
                },
                992: {
                    slidesOffsetBefore: (window.innerWidth - tabletContainerWidth) / 2
                },
                768: {
                    slidesOffsetBefore: (window.innerWidth - tabletMContainerWidth) / 2
                },
                576: {
                    slidesOffsetBefore: (window.innerWidth - mobileContainerWidth) / 2
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    slidesOffsetBefore: 0
                }
            }
        });
    }
    if (helpSectionSwiperElement) {
        new Swiper(helpSectionSwiperElement, {
            slidesPerView: `auto`,
            spaceBetween: 55,
            loop: false,
            slidesOffsetBefore: (window.innerWidth - desktopContainerWidth) / 2,
            navigation: {
                prevEl: helpSectionSwiperElement.closest(`.help-section`).querySelector(`.carousel-navigation__btn-prev`),
                nextEl: helpSectionSwiperElement.closest(`.help-section`).querySelector(`.carousel-navigation__btn-next`)
            },
            pagination: {
                el: helpSectionSwiperElement.nextElementSibling
            },
            breakpoints: {
                1200: {
                    slidesOffsetBefore: (window.innerWidth - desktopContainerWidth) / 2
                },
                992: {
                    slidesOffsetBefore: (window.innerWidth - tabletContainerWidth) / 2
                },
                768: {
                    slidesOffsetBefore: (window.innerWidth - tabletMContainerWidth) / 2
                },
                576: {
                    slidesOffsetBefore: (window.innerWidth - mobileContainerWidth) / 2
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    slidesOffsetBefore: 0
                }
            }
        });
    }
    if (mediaSwiperInstanceCollection.length) {
        for (const mediaSwiperInstance of mediaSwiperInstanceCollection) {
            new Swiper(mediaSwiperInstance, {
                effect: "cards",
                speed: 1000,
                grabCursor: true,
                navigation: {
                    prevEl: mediaSwiperInstance.closest(`.text-section`).querySelector(`.carousel-navigation__btn-prev`),
                    nextEl: mediaSwiperInstance.closest(`.text-section`).querySelector(`.carousel-navigation__btn-next`)
                }
            });
        }
    }
    if (openMobileMenuButton) {
        openMobileMenuButton.addEventListener(`click`, onOpenMobileMenuButtonClickHandler);
    }
});

// JQUERY
jQuery(document).ready(function() {
    jQuery('[data-modal]').on('click', function() {
        jQuery(jQuery(this).data('modal')).modal();
        return false;
    });
    jQuery(`.make-help-template__links button`).on(`click`, function() {
        jQuery(this).next().slideToggle();
    });
});