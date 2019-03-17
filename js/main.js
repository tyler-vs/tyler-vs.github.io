// main.js

$(function() {

  // Card Gallery
  // By Duckett
  var $cards = $('#gallery .card');
  var $buttons = $('#buttons');
  var tagged = {};

  $cards.each(function() {
    var card = this;
    var tags = $(this).data('tags');


    if (tags) {
      tags.split(',').forEach(function(tagName) {
        if (tagged[tagName] == null ) {
          tagged[tagName] = [];
        }
        tagged[tagName].push(card);
      });
    } // end if
  });

  console.table(tagged);

  // btns, evt handlers, filters

  $('<button/>', {
    text: 'Show All',
    class: 'active',
    click: function() {
      $(this)
        .addClass('active button-primary')
        .siblings()
        .removeClass('active button-primary');
      $cards.show();
    }
  }).appendTo($buttons);


  $.each(tagged, function(tagName) {

    $('<button/>', {
      text: tagName + ' (' + tagged[tagName].length + ')',
      click: function() {
        $(this)
          .addClass('active button-primary')
          .siblings()
          .removeClass('active button-primary');
        $cards
          .hide()
          .filter(tagged[tagName])
          .show();
      }
    }).appendTo($buttons);
  });
}());