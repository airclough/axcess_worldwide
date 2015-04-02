define(
  [ 'views/app' ],
  function( AppView ) {
    'use strict';

    return {
      init: function() {
        new AppView( { el: $( 'body' ) } );
      }
    };
  }
);
