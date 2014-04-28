$(document).ready(function () {
  'use strict';
  var accordion_group = '<div class="accordion-group" />';
  var accordion_heading = '<div class="accordion-heading" />';
  var accordion_inner = '<div class="accordion-body collapse"><div class="accordion-inner"></div></div>'
  var start = 0;
  var end = 0;
  var details_toggle = '<a class="accordion-toggle" data-toggle="collapse" data-parent="#product-description" href="#details">Details</a>';
  var sizing_toggle = '<a class="accordion-toggle" data-toggle="collapse" data-parent="#product-description" href="#sizing">Sizing</a>';
  var table_data = "";
  var sizes = [];
  var row = "";
  var size = "";
  var size_end = "";
  var height = "";
  var height_end = "";
  var weight = "";
  var weight_end = "";
  var formatted = "";


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

  // Accordion markup

  $('#product-description p').wrap(accordion_group);
  $('#product-description p:first').before(details_toggle);
  $('#product-description p:last').before(sizing_toggle);
  $('#product-description .accordion-toggle').wrap(accordion_heading);
  $('#product-description p').wrap(accordion_inner);
  $('#product-description .accordion-body:first').attr('id', 'details');
  $('#product-description .accordion-body:last').attr('id', 'sizing');

  //Sizing table markup:

  table_data = $('#product-description p:last').html();
  sizes = table_data.match(/[\w]+[\d]+:/g);
  for (var x = 0; x < sizes.length; x++) {
    start = table_data.indexOf(sizes[x]);
    end = table_data.indexOf(';', start);
    size_end = table_data.indexOf(':', start);
    height_end = table_data.indexOf(',', start);
    size = table_data.slice(start, size_end);
    height = table_data.slice(size_end + 2, height_end);
    weight = table_data.slice(height_end + 2, end);
    row = '<tr><td>' + size + '</td><td>' + height + '</td><td>' + weight + '</td></tr>';
    formatted = formatted + row;
  }

  formatted = '<table class="table table-bordered table-striped" width="100%"><tbody>' + formatted + '</tbody></table>';

  $('#product-description .accordion-inner:last').html(formatted);
});