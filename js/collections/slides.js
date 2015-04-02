define(
  [ 'backbone',
    'models/slide' ],
  function( Backbone, SlideModel ) {
    'use strict';

    return Backbone.Collection.extend({
      model: SlideModel
    });
  }
);
