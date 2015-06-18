/* global Matter */
(function() {
  'use strict';

  // Matter aliases
  var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    Constraint = Matter.Constraint,
    Events = Matter.Events,
    Bounds = Matter.Bounds,
    Vector = Matter.Vector,
    Vertices = Matter.Vertices,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Query = Matter.Query,
    Svg = Matter.Svg;

  var Demo = {};

  var _engine,
    _gui,
    _inspector,
    _sceneName,
    _mouseConstraint,
    _sceneEvents = [],
    _useInspector = window.location.hash.indexOf('-inspect') !== -1;
  
  // initialise the demo

  Demo.init = function() {
    var container = document.getElementById('canvas-container');

    // some example engine options
    var options = {
      positionIterations: 6,
      velocityIterations: 4,
      enableSleeping: false,
      metrics: { extended: true }
    };

    // create a Matter engine
    // NOTE: this is actually Matter.Engine.create(), see the aliases at top of this file
    _engine = Engine.create(container, options);

    // add a mouse controlled constraint
    _mouseConstraint = MouseConstraint.create(_engine);
    World.add(_engine.world, _mouseConstraint);

    // run the engine
    Engine.run(_engine);

    // default scene function name
    _sceneName = 'sprites';
    
    // set up a scene with bodies
    Demo[_sceneName]();
  };

  // call init when the page has loaded fully

  if (window.addEventListener) {
    window.addEventListener('load', Demo.init);
  } else if (window.attachEvent) {
    window.attachEvent('load', Demo.init);
  }

  Demo.sprites = function() {
    var _world = _engine.world,
      offset = 20,
      options = { 
        isStatic: true,
        render: {
          visible: false
        }
      };

    Demo.reset();
    _world.bodies = [];

    // these static walls will not be rendered in this sprites example, see options
    World.add(_world, [
      Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
      Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
      Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
      Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
    ]);

    var stack = Composites.stack(50, 50, 7, 2, 0, 0, function(x, y, column, row) {
      var xRand = Math.random(), yRand = Math.random();
      var imgRand = './matterjs_files/img/img'+(1+Math.floor(Math.random()*20))+'.png';
      console.log(imgRand);
      return Bodies.circle(x+xRand, y+yRand, 46, {
        density: 0.0005,
        frictionAir: 0.05,
        restitution: 1.6,
        friction: 0.001,
        render: {
          sprite: {
            texture: imgRand 
          }
        }
      });
    });

    World.add(_world, stack);

    var renderOptions = _engine.render.options;
    //renderOptions.background = './img/wall-bg.jpg';
    renderOptions.background = 'black';
    renderOptions.showAngleIndicator = false;
    renderOptions.wireframes = false;
  };

  Demo.reset = function() {
    var _world = _engine.world;
    
    World.clear(_world);
    Engine.clear(_engine);

    // clear scene graph (if defined in controller)
    var renderController = _engine.render.controller;
    if (renderController.clear)
      renderController.clear(_engine.render);

    // clear all scene events
    for (var i = 0; i < _sceneEvents.length; i++)
      Events.off(_engine, _sceneEvents[i]);

    if (_mouseConstraint.events) {
      for (i = 0; i < _sceneEvents.length; i++)
        Events.off(_mouseConstraint, _sceneEvents[i]);
    }

    if (_world.events) {
      for (i = 0; i < _sceneEvents.length; i++)
        Events.off(_world, _sceneEvents[i]);
    }

    _sceneEvents = [];

    // reset id pool
    Common._nextId = 0;

    // reset random seed
    Common._seed = 0;

    // reset mouse offset and scale (only required for Demo.views)
    Mouse.setScale(_mouseConstraint.mouse, { x: 1, y: 1 });
    Mouse.setOffset(_mouseConstraint.mouse, { x: 0, y: 0 });

    _engine.enableSleeping = false;
    _engine.world.gravity.y = 1;
    _engine.world.gravity.x = 0;
    _engine.timing.timeScale = 1;

    var offset = 5;
    World.add(_world, [
      Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
      Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, { isStatic: true }),
      Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true }),
      Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, { isStatic: true })
    ]);

    World.add(_world, _mouseConstraint);
    
    var renderOptions = _engine.render.options;
    renderOptions.wireframes = true;
    renderOptions.hasBounds = false;
    renderOptions.showDebug = false;
    renderOptions.showBroadphase = false;
    renderOptions.showBounds = false;
    renderOptions.showVelocity = false;
    renderOptions.showCollisions = false;
    renderOptions.showAxes = false;
    renderOptions.showPositions = false;
    renderOptions.showAngleIndicator = true;
    renderOptions.showIds = false;
    renderOptions.showShadows = false;
    renderOptions.showVertexNumbers = false;
    renderOptions.showConvexHulls = false;
    renderOptions.showInternalEdges = false;
    renderOptions.showSeparations = false;
    renderOptions.background = '#fff';

  };

})();
