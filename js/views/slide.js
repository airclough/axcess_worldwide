define(
  [ 'backbone' ],
  function( Backbone ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      className: 'slide',

      initialize: function() {
        this.render()
          ._subscribe();
      },

      render: function() {
        this.$el.html( this._template( this.model.toJSON() ) );
        return this;
      },

      _template: function( model ) {
        return ''
          + '<div class="info">'
            + '<div class="brands">'
              + '<div class="brand">' + model.brands[ 0 ] + '</div>'
              + '<div class="amp">&</div>'
              + '<div class="brand">' + model.brands[ 1 ] + '</div>'
            + '</div>'
            + '<div class="description">'
              + '<p>' + model.description + '</p>'
            + '</div>'
            + '<div class="learn-more">learn more</div>'
          + '</div>'
          + '<div class="bg-img" style="background-image: url(\'img/' + model.img + '\');"></div>';
      },

      _subscribe: function() {
        this.listenTo( this.model, 'change:position', this._onPositionChange );
        return this;
      },

      _onPositionChange: function() {
        var position = this.model.get( 'position' );
        if( 'next' === position ) return false;
        this.$el.css( 'z-index', 'current' === position ? 1 : 0 );
      },

      setPosition: function( position ) {
        this.model.set( 'position', position );
      },

      transition: function() {
        var position = [ 'current', 'next' ];
        this.$el.toggleClass( 'current', +position[ this.model.get( 'position' ) ] );
      }
    });
  }
);
