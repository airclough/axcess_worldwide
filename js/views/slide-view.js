define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      className: 'slide',

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html( this._template( this.model.toJSON() ) );
        return this;
      },

      _template: function( model ) {
        return ''
          + '<div class="brands">'
            + '<div class="brand">' + model.brands[ 0 ] + '</div>'
            + '<div class="amp">&</div>'
            + '<div class="brand">' + model.brands[ 1 ] + '</div>'
          + '</div>'
          + '<div class="description">' + model.description + '</div>'
          + '<div class="bg-img">' + model.img + '</div>';
      }
    });
  }
);
