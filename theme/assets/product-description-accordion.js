$(document).ready(function () {
  'use strict';
  var accordion_group = '<div class="accordion-group" />';
  var accordion_heading = '<div class="accordion-heading" />';
  var accordion_inner = '<div class="accordion-body collapse"><div class="accordion-inner"></div></div>'
  var i = 1;
  var n = 1;
  var accordion_toggle = '<a class="accordion-toggle" data-toggle="collapse" data-parent="#product-description" href="" />';

  $('#product-description h4').each(function() {
    $(this).contents().unwrap().wrap(function() {
      return accordion_heading;
    }).wrap(function() {
      return accordion_toggle;
    }).parent().attr('href', '#accordion-' + n.toString());
      n++;
  });

  $('.product-description-content').wrap(accordion_inner);

  $('.product-description-content').contents().unwrap();

  $('.accordion-body').each(function () {
    $(this).attr('id', 'accordion-' + i.toString());
    i++;
  });

  $('.accordion-heading').each(function(index) {
    $(this).next('.accordion-body').addBack().wrapAll(accordion_group);
  });

  //Strips empty span and p tags

  $('#product-description span').each(function() {
    var $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
        $this.remove();
  });
  $('#product-description div').each(function() {
    var $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
        $this.remove();
  });
  $('#product-description p').each(function() {
      var $this = $(this);
      if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
          $this.remove();
  });
});