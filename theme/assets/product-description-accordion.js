$(document).ready(function () {
  'use strict';
  var formatted = $('#product-description').html();
  var header_tag_open = '<div class="accordion-group"><div class="accordion-heading"><a class="accordion-toggle" data-toggle="collapse" data-parent="#product-description" href="#collapse-';
  var header_tag_open_2 = '">';
  var header_tag_close = '</a></div>';
  var content_tag_open = '<div class="accordion-body collapse" id="collapse-';
  var content_tag_open_2 = '"><div class="accordion-inner">';
  var content_tag_close = '</div></div></div>';
  var header_begin = 0;
  var header_end = 0;
  var content_begin = 0;
  var content_end = 0;
  var header = "";
  var content = "";
  var i = 0;
  var n = 1;

  while (formatted.indexOf("[header]") > -1) {
    header_begin = formatted.indexOf("[header]", i) + 8;
    header_end = formatted.indexOf("[/header]", i);
    content_begin = formatted.indexOf("[content]", i) + 9;
    content_end = formatted.indexOf("[/content]", i);
    formatted = formatted.replace("[header]", header_tag_open + n.toString() + header_tag_open_2);
    formatted = formatted.replace("[/header]", header_tag_close);
    formatted = formatted.replace("[content]", content_tag_open + n.toString() + content_tag_open_2);
    formatted = formatted.replace("[/content]", content_tag_close);
    n++;
  }

  $('#product-description').html(formatted);

  //Strips empty span and p tags

  $('#product-description span').each(function() {
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