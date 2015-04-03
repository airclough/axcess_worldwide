define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      className: 'dot',

      initialize: function() {
        this._subscribe();
      },

      _subscribe: function() {
        this.listenTo( this.model, 'change:position', this._onPositionChange );
        return this;
      },

      _onPositionChange: function() {
        this.$el.toggleClass( 'active', 'current' === this.model.get( 'position' ) );
      }
    });
  }
);
