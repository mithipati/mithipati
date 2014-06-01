var zoomShowcaseSettings = {

  /* The original image width */
  imageWidth: 565,

  /* The original image height */
  imageHeight: 377,

  /* The total alloted width for the banner */
  bannerWidth: 980,

  /* The speed of the shuffle animation in milliseconds */
  animationSpeed: 350,

  /* Options are "easeOutQuint", "easeInOutQuint", "easeOutQuad" and "easeInOutQuad",  */
  easing: "easeOutQuint",

  /* The opacity of the side items, 0-1 */
  sideOpacity: 0.3,

  /* Choose to set the Slideshow to auto-play, true/false */
  autoPlay: false,

  /* The autoPlay delay in milliseconds */
  autoPlayDelay: 4000,

  /* Choose to randomize the slide order everytime someone visits your web page, true/false */
  randomizeItems: true,

  /* The link target when a slide is linked, options are "_parent" and "_blank" */
  linkTarget: "_blank",

  /* The percentage to zoom out the sides, 0-1 */
  sideZoom: 0.7,

  /* The percentage to zoom out the back slide, 0-1 */
  backZoom: 0.1

};

/* ************************ */
/* BEGIN DEVELOPER SETTINGS */
/* ************************ */
jQuery(document).ready(function() {

  jQuery(".zoom-gallery").zoomShowcase(zoomShowcaseSettings);


  // ------------------------------------
  // ZOOM SHOWCASE API FOR ADVANCED USERS
  // ------------------------------------

  // jQuery("#zoom-instance-1")[0].goLeft() // left slide click
  // jQuery("#zoom-instance-1")[0].goRight() // right slide click
  // jQuery("#zoom-instance-1")[0].isRunning(); // returns true or false

  /*

  // ***********************************
  // Example Usage w/ Two Custom Buttons
  // ***********************************

  // HTML Buttons for Example
  // <a id="custom-left-button" href="#">left</a>
  // <a id="custom-right-button" href="#">right</a>

  var isRunning = false, iVal;

  jQuery("#custom-left-button").click(goLeft);
  jQuery("#custom-right-button").click(goRight);

  function goLeft(event) {

    event.stopPropagation();
    event.preventDefault();

    if(!isRunning) {

      isRunning = true;

      jQuery("#zoom-instance-1")[0].goLeft();

      setTimeout(animationDone, zoomShowcaseSettings.animationSpeed + 100);

    }

  }

  function goRight(event) {

    event.stopPropagation();
    event.preventDefault();

    if(!isRunning) {

      isRunning = true;

      jQuery("#zoom-instance-1")[0].goRight();

      setTimeout(animationDone, zoomShowcaseSettings.animationSpeed + 100);

    }

  }

  function animationDone() {

    if(jQuery("#zoom-instance-1")[0].isReady()) {

      isRunning = false;

    }
    else {

      setTimeout(animationDone, 100);

    }

  }

  */


});
