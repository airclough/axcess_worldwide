require.config({
  baseUrl: '/js',
  paths: {
    backbone  : '../bower_components/backbone/backbone',
    d3        : '../bower_components/d3/d3',
    jquery    : '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore'
  }
});

require( [ 'jquery' ] );
require( [ 'underscore' ] );
require( [ 'backbone' ] );

define(
  [ 'app' ],
  function( app ) {
    app.init();
  }
);
