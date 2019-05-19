//
// main.js
//

// Add document ready to make sure that the
// documentat is readt before usnig the jQuery magic.
$( document ).ready(function() {

  // Get gallery cards
  var $cards = $('article.card');
  // Get work list UL element for gallery
  var workList = $('.work-filters');
  var galleryTags = {};

  $cards.each(function() {
    var card = this;
    var tags = this.classList;

    console.log('Number of tags for this card: ' + tags.value.split(' ').length);


    for (var i = 0; i < tags.value.split(' ').length; i++) {
      if (galleryTags[tags[i]] == null) {
        galleryTags[tags[i]];
      }
    }

    tags.value.split(' ').forEach(function(tagName) {
      console.log('Howdy: ' + tagName);
      if (galleryTags[tagName] == null) {

        galleryTags[tagName] = [];
      }
      galleryTags[tagName].push(tagName);
    });

  });

  console.log('Gallery Tags: ', galleryTags);
    // Generate buttons
    /*var obj = {
      "flammable": "inflammable",
      "duh": "no duh"
    };
    $.each( obj, function( key, value ) {
      alert( key + ": " + value );
    });*/

  /**
   * [createWorkListItem description]
   * @param  {text} nameOfTag name of tag to display
   * @param  {text} tagCount  text count
   * @return {[type]}           [description]
   */
  function createWorkListItem(nameOfTag, tagCount) {

    // Create anchor element
    var anchorElem = document.createElement('a');
    // Create li element
    var liElement = document.createElement('li');

    // Conditional to swap the tag name of card (card is a class name
    // found on all the gallery card elements) and switch it with All.
    if (nameOfTag === 'card') {
      nameOfTag = 'All';
    }

    // Add text content to the cart, the tag name and tag count
    anchorElem.textContent = nameOfTag + ' (' + tagCount + ')';

    // Set attribute to javascript:;, this is found in the isotope
    // documentation and figure it is used to prevent screen bouncing
    // to the top as seen when using hash ('#') for href value.
    anchorElem.setAttribute('href', 'javascript:;');

    // Isotope uses a * symbol to display all cards
    if (nameOfTag === 'card') {
      anchorElem.setAttribute('data-filter', '*');
    } else {
      anchorElem.setAttribute('data-filter', '.' + nameOfTag);
    }

    // Append anchor element to list item
    liElement.append(anchorElem);

    // Return anchor element
    return liElement;
  }

  // Run through objects which has tag name as the key and an array
  // as the value which is used to get the tag count (i.e. items in the
  // array are the total count)
  $.each(galleryTags, function(tagName) {

    var tagNameText = tagName;
    var tagNameCount = galleryTags[tagName].length;

    workList.append(createWorkListItem(tagNameText, tagNameCount));
  });


  // Initialize Isotope
  var $grid = $('.cards').isotope({
    itemSelector: '.card',
    layoutMode: 'fitRows'
  });

  // bind filter list item anchor elements
  $('.work-filters').on( 'click', 'a', function() {

    // Get the filter value
    var filterValue = $( this ).attr('data-filter');

    // Pass filter value to isotope library
    $grid.isotope({ filter: filterValue });
  });

  // // change is-checked class on buttons
  // $('.work-filters').each( function( i, buttonGroup ) {
  //   var $buttonGroup = $( buttonGroup );
  //   $buttonGroup.on( 'click', 'button', function() {
  //     $buttonGroup.find('.is-checked').removeClass('is-checked');
  //     $( this ).addClass('is-checked');
  //   });
  // });
});