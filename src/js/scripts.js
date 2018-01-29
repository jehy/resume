const $ = require('jquery');

const callback = function () {
  $('.item-skills').each(function () {
    const newWidth = $(this).parent().width() * $(this).data('percent');
    $(this).width(0);
    $(this).animate({
      width: newWidth,
    }, 1000);
  });
  $('.icons-red').each(function () {
    const height = $(this).height();
    $(this).animate({
      height: 14,
    }, 2000);
  });
};
$(document).ready(callback);

let resize;
window.onresize = function () {
  clearTimeout(resize);
  resize = setTimeout(() => callback(), 100);
};
