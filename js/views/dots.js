define(
  [ 'backbone',
    'views/dot' ],
  function( Backbone, DotView ) {
    'use strict';

    return Backbone.View.extend({
      tagName: 'div',

      className: 'dots',

      initialize: function() {
        this.subviews = [];

        this._eachModel();
      },

      _eachModel: function() {
        var that = this;

        that.collection.each( function( model, i ) {
          var dotView = new DotView( { model: model } );
          that.$el.append( dotView.el );
          that.subviews.push( dotView );
        });

        return that;
      }
    });
  }
);
