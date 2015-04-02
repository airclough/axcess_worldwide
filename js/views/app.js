define(
  [ 'backbone',
    'views/slider-controller' ],
  function( Backbone, SliderController ) {
    'use strict';

    return Backbone.View.extend({
      initialize: function() {
        this.subviews = {};

        this._createSubviews();
      },

      _createSubviews: function() {
        this.subviews.sliderController = new SliderController( { el: this.$el.find( '.slider' ) } );
        return this;
      }
    });
  }
);
