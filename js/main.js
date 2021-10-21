function modal() {
  const popupOpeners = document.querySelectorAll('[data-popup-trigger]');
  const popup = ('[data-popup-parent]');
  const activeClass = ('popup-active');
  var KEY_CODE_ESCAPE = 'Escape';

  if(!popupOpeners) {
    return;
  }

  const triggerClass = function(evt) {
    evt.preventDefault();
    evt.target.closest(popup).classList.toggle(activeClass);
  }

  var onEscPress = function (evt) {
    if (evt.key === KEY_CODE_ESCAPE && document.querySelector('.' + activeClass) ) {
      document.querySelector('.' + activeClass).classList.toggle(activeClass);
    }
  };

  popupOpeners.forEach((popupOpener) => {
    popupOpener.addEventListener('click', triggerClass);
  });

  document.addEventListener('keydown', onEscPress);
}

/*slik-slider*/
const slider = function() {
  jQuery('.header_slider').slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true
  });
};

/*BURGER-MENU*/
const burger = function() {
  const burger = document.querySelector('.burger');
  const pageBody = document.querySelector('body');
  
  burger.addEventListener('click', function(){
    pageBody.classList.toggle('burger-active');
  });
};

jQuery(function() {
  burger();
  modal();
  slider();
});
