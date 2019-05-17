// main.js


var $grid = $('.cards').isotope({
  itemSelector: '.isotope-item',
  layoutMode: 'fitRows'
});

// bind filter button click
$('.work-filters').on( 'click', 'a', function() {
  var filterValue = $( this ).attr('data-filter');

  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.work-filters').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// $(function() {

//   // Card Gallery
//   // By Jon Duckett
//   var $cards = $('#gallery .card');
//   var $buttons = $('#buttons');
//   var tagged = {};

//   $cards.each(function() {
//     var card = this;
//     var tags = $(this).data('tags');


//     if (tags) {
//       tags.split(',').forEach(function(tagName) {
//         if (tagged[tagName] == null ) {
//           tagged[tagName] = [];
//         }
//         tagged[tagName].push(card);
//       });
//     }
//   });

//   $('<button/>', {
//     text: 'Show All',
//     class: 'active button-primary',
//     click: function() {
//       $(this)
//         .addClass('active button-primary')
//         .siblings()
//         .removeClass('active button-primary');
//       $cards.show();
//     }
//   }).appendTo($buttons);


//   $.each(tagged, function(tagName) {

//     $('<button/>', {
//       text: tagName + ' (' + tagged[tagName].length + ')',
//       click: function() {
//         $(this)
//           .addClass('active button-primary')
//           .siblings()
//           .removeClass('active button-primary');
//         $cards
//           .hide()
//           .filter(tagged[tagName])
//           .show();
//       }
//     }).appendTo($buttons);
//   });
// }());