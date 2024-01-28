jQuery(document).ready(function($) {
  var jssor_1_SlideshowTransitions = [
    {
      $Duration: 600,
      x: -1,
      $Delay: 12,
      $Cols: 10,
      $Rows: 5,
      $SlideOut: true,
      $Formation: $JssorSlideshowFormations$.$FormationZigZag,
      $Assembly: 513,
      $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad },
      $Opacity: 2
    }
  ];

  var jssor_1_SlideoTransitions = [
    [
      { b: -1, d: 1, bl: [50] },
      { b: 0, d: 600, bl: [0, 0] },
      { b: 5700, d: 300, bl: [50] }
    ],
    [
      { b: -1, d: 1, ls: 0.03 },
      { b: -1, d: 1, rp: 1 },
      { b: 0, d: 600, y: 200, o: 1, ls: 0.01 },
      { b: 600, d: 400, ls: 0.05 },
      { b: 600, d: 0, rp: 0 },
      { b: 1000, d: 4700, ls: 0.01 },
      { b: 5700, d: 300, y: 250, o: 0 },
      { b: 5700, d: 300, rp: 1 }
    ],
    [
      { b: -1, d: 1, bl: [50] },
      { b: 600, d: 800, bl: [0] },
      { b: 5760, d: 240, bl: [50] }
    ],
    [
      { b: -1, d: 1, rp: 1 },
      { b: 600, d: 800, x: 160, o: 1, e: { x: 1 } },
      { b: 600, d: 800, rp: 0 },
      { b: 1400, d: -1400, rp: 1 },
      { b: 0, d: 1400, rp: 0 },
      { b: 5760, d: 240, y: 310, o: 0 },
      { b: 5760, d: 240, rp: 1 }
    ],
    [
      { b: -1, d: 1, bl: [50] },
      { b: 0, d: 600, bl: [0, 0] },
      { b: 5700, d: 300, bl: [50] }
    ],
    [
      { b: -1, d: 1, ls: 0.03 },
      { b: -1, d: 1, rp: 1 },
      { b: 0, d: 600, y: 200, o: 1, ls: 0.01 },
      { b: 600, d: 400, ls: 0.05 },
      { b: 600, d: 0, rp: 0 },
      { b: 1000, d: 4700, ls: 0.01 },
      { b: 5700, d: 300, y: 250, o: 0 },
      { b: 5700, d: 300, rp: 1 }
    ],
    [
      { b: -1, d: 1, bl: [50] },
      { b: 600, d: 800, bl: [0] },
      { b: 5760, d: 240, bl: [50] }
    ],
    [
      { b: -1, d: 1, rp: 1 },
      { b: 600, d: 800, x: 160, o: 1, e: { x: 1 } },
      { b: 600, d: 800, rp: 0 },
      { b: 1400, d: -1400, rp: 1 },
      { b: 0, d: 1400, rp: 0 },
      { b: 5760, d: 240, y: 310, o: 0 },
      { b: 5760, d: 240, rp: 1 }
    ],
    [
      { b: -1, d: 1, bl: [50] },
      { b: 0, d: 600, bl: [0, 0] },
      { b: 5700, d: 300, bl: [50] }
    ],
    [
      { b: -1, d: 1, ls: 0.03 },
      { b: -1, d: 1, rp: 1 },
      { b: 0, d: 600, y: 200, o: 1, ls: 0.01 },
      { b: 600, d: 400, ls: 0.05 },
      { b: 600, d: 0, rp: 0 },
      { b: 1000, d: 4700, ls: 0.01 },
      { b: 5700, d: 300, y: 250, o: 0 },
      { b: 5700, d: 300, rp: 1 }
    ],
    [
      { b: -1, d: 1, bl: [50] },
      { b: 600, d: 800, bl: [0] },
      { b: 5760, d: 240, bl: [50] }
    ],
    [
      { b: -1, d: 1, rp: 1 },
      { b: 600, d: 800, x: 160, o: 1, e: { x: 1 } },
      { b: 600, d: 800, rp: 0 },
      { b: 1400, d: -1400, rp: 1 },
      { b: 0, d: 1400, rp: 0 },
      { b: 5760, d: 240, y: 310, o: 0 },
      { b: 5760, d: 240, rp: 1 }
    ],
    [
      { b: -1, d: 1, bl: [50] },
      { b: 0, d: 600, bl: [0, 0] },
      { b: 5700, d: 300, bl: [50] }
    ],
    [
      { b: -1, d: 1, ls: 0.03 },
      { b: -1, d: 1, rp: 1 },
      { b: 0, d: 600, y: 200, o: 1, ls: 0.01 },
      { b: 600, d: 400, ls: 0.05 },
      { b: 600, d: 0, rp: 0 },
      { b: 1000, d: 4700, ls: 0.01 },
      { b: 5700, d: 300, y: 250, o: 0 },
      { b: 5700, d: 300, rp: 1 }
    ],
    [
      { b: -1, d: 1, bl: [50] },
      { b: 600, d: 800, bl: [0] },
      { b: 5760, d: 240, bl: [50] }
    ],
    [
      { b: -1, d: 1, rp: 1 },
      { b: 600, d: 800, x: 160, o: 1, e: { x: 1 } },
      { b: 600, d: 800, rp: 0 },
      { b: 1400, d: -1400, rp: 1 },
      { b: 0, d: 1400, rp: 0 },
      { b: 5760, d: 240, y: 310, o: 0 },
      { b: 5760, d: 240, rp: 1 }
    ],
    [
      { b: -1, d: 1, bl: [50] },
      { b: 0, d: 600, bl: [0, 0] },
      { b: 5700, d: 300, bl: [50] }
    ],
    [
      { b: -1, d: 1, ls: 0.03 },
      { b: -1, d: 1, rp: 1 },
      { b: 0, d: 600, y: 200, o: 1, ls: 0.01 },
      { b: 600, d: 400, ls: 0.05 },
      { b: 600, d: 0, rp: 0 },
      { b: 1000, d: 4700, ls: 0.01 },
      { b: 5700, d: 300, y: 250, o: 0 },
      { b: 5700, d: 300, rp: 1 }
    ],
    [
      { b: -1, d: 1, bl: [50] },
      { b: 600, d: 800, bl: [0] },
      { b: 5760, d: 240, bl: [50] }
    ],
    [
      { b: -1, d: 1, rp: 1 },
      { b: 600, d: 800, x: 160, o: 1, e: { x: 1 } },
      { b: 600, d: 800, rp: 0 },
      { b: 1400, d: -1400, rp: 1 },
      { b: 0, d: 1400, rp: 0 },
      { b: 5760, d: 240, y: 310, o: 0 },
      { b: 5760, d: 240, rp: 1 }
    ]
  ];

  var jssor_1_options = {
    $AutoPlay: 1,
    $Idle: 0,
    $PauseOnHover: 0,
    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: jssor_1_SlideshowTransitions
    },
    $CaptionSliderOptions: {
      $Class: $JssorCaptionSlideo$,
      $Transitions: jssor_1_SlideoTransitions
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $SpacingX: 20,
      $SpacingY: 20
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*#region responsive code begin*/

  var MAX_WIDTH = 3000;

  function ScaleSlider() {
    var containerElement = jssor_1_slider.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;

    if (containerWidth) {
      var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

      jssor_1_slider.$ScaleWidth(expectedWidth);
    } else {
      window.setTimeout(ScaleSlider, 30);
    }
  }

  ScaleSlider();

  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
});
