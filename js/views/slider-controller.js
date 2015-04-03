define(
  [ 'backbone',
    'collections/slides',
    'views/slide' ],
  function( Backbone, SlidesCollection, SlideView ) {
    'use strict';

    var slides = [
      {
        brands: [ 'Beats', 'Graff' ],
        description: 'A luxury icon, a disruptive brand, and a partnership to create a product launched on the world\'s biggest stage.',
        img: 'beats.jpg'
      },
      {
        brands: [ 'Tequila Avión', 'Delta Air Lines' ],
        description: 'The world\'s finest tequila, the world\'s largest airline, and a partnership to elevate the Delta Sky Club and overall flying experience.',
        img: 'avion.jpg'
      }
    ];

    return Backbone.View.extend({
      initialize: function() {
        this.collection = new SlidesCollection( slides );
        this.slides = [];

        this._eachSlide()
          ._createSubviews()
          ._subscribe()
          ._next();
      },

      _eachSlide: function() {
        var that = this;

        this.collection.each( function( slide, i ) {
          var slideView = new SlideView( { model: slide } );
          that.$el.append( slideView.el );
          that.slides.push( slideView );
        });

        return that;
      },

      _createSubviews: function() {
        return this;
      },

      _subscribe: function() {
        this.listenTo( this.collection, 'remove', this._onShift );
        return this;
      },

      _onShift: function() {
        this.current.setPosition( 'off' );
      },

      _next: function() {
        var that = this;

        ( that.current = that.slides[ 0 ] ).setPosition( 'current' );
        if( !that.next ) that.current.transition();
        ( that.next = that.slides[ 1 ] ).setPosition( 'next' );

        setTimeout( function() {
          that.current.transition();
          that.next.transition();
          that._onShift( that.slides.push( that.slides.shift() ) );
          that._next()
        }, 5000 );
      }
    });
  }
);
