define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      initialize: function() {
        this.subviews = {};

        this._createViews();
      },

      _createViews: function() {
        this.subviews.sliderController = new SliderController( { el: this.$el.find( '.slider' ) } );
        return this;
      }
    });
  }
);
