define(
  [ 'views/slider/controller' ],
  function( SliderController ) {
    'use strict';

    var _views = {
      SliderController: SliderController
    };

    var Controller = function() {
      this.views = {};

      this._createViews();
    };

    Controller.prototype = new Object( {} );

    Controller.prototype._createViews = function() {
      for( var prop in _views )
        this.views[ prop ] = new _views[ prop ]();
    };

    return Controller;
  }
);
