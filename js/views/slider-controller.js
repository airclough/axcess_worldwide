define(
  [ 'backbone',
    'collections/slides' ],
  function( Backbone, SlidesCollection, SlideView ) {
    'use strict';

    var slides = [
      {
        brands: [ 'Beats', 'Graff' ]
        description: 'A luxury icon, a disruptive brand, and a partnership to create a product launched on the world’s biggest stage.',
        img: 'img/beats.jpg'
      },
      {
        brands: [ 'Tequila Avión', 'Delta Air Lines' ],
        description: 'The world’s finest tequila, the world’s largest airline, and a partnership to elevate the Delta Sky Club and overall flying experience.',
        img: 'avion.jpg'
      }
    ];

    return Backbone.View.extend({
      initialize: function() {
        this.collection = new SlidesCollection( slides );

        this._eachSlide()
          ._createSubviews()
          ._subscribe()
          ._next();
      },

      _eachSlide: function() {
        var that = this;

        this.collection.each( function( slide, i ) {
          that.views[ 'slide' + i ] = new SlideView( { model: slide } );
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

      _onShift: function( opts ) {
        console.log( opts );
        this.current.setPosition( 'off' );
      },

      _next: function() {
        var that = this;

        ( that.current = that.collection.at( 0 ) ).setPosition( 'current' );
        ( that.next = that.collection.at( 1 ) ).setPosition( 'next' );

        setTimeout( function() {
          that.current.transition();
          that.next.transition();
          that.collection.push( that.collection.shift() );
          that._next()
        }, 5000 );
      }
    });
  }
);
