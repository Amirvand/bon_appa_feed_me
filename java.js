function addItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}

;(function ($, window, document) {
    'use strict';
    var $slider = $('#carousel'),hammer = new Hammer($slider.get(0));
    $slider.find('img').each((index, elem) => {
      $(elem).prop('draggable', false);
    });
    $slider.carousel();
    $slider.find(".carousel-control-prev").click(e => {
      e.preventDefault();
      $slider.carousel("prev");
    });
    $slider.find(".carousel-control-next").click(e => {
      e.preventDefault();
      $slider.carousel("next");
    });
    hammer.on("panleft panright", e => {
      e.preventDefault();
      if (e.type == 'panleft') $slider.carousel("next");
      if (e.type == 'panright') $slider.carousel("prev");
    });
    $slider.find('.carousel-indicators li').click(e => {
      $slider.carousel($(e.target).data('slide-to'));
    });
  })(jQuery, window, document);