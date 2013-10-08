/*--------------------------------------------*\
  Js Toolkits v1.0 - Crucifix Arnaud (hello@crucifixarnaud.com)
  --------------------------------------------
  
  A collection of useful Javascript functions.

  Doc and Download : https://github.com/CrucifixArnaud/js-toolkits

\*--------------------------------------------*/

/*------------------------*\
  $class Tools
  ------------------------
  
  hasClass()
  addClass()
  removeClass()
  
\*------------------------*/ 

/**
 * [hasClass - Determine if the given elements is assigned to the given class]
 * @param  {object}  _item : Object to test
 * @param  {string}  _class : Class to test
 * @return {Boolean}
 */
var hasClass = function(_item,_class) {
  var _r = _item.className.match(new RegExp('(\\s|^)'+_class+'(\\s|$)'));  
  (_r) ? _r = true : _r = false ;
  return _r;
};

/**
 * [addClass - Add a class to the given element]
 * @param {object} _item : Object that will receive the new class
 * @param {string} _class : Class to add
 */
var addClass = function(_item,_class) {
  if (!hasClass(_item,_class)) _item.className += " "+_class;
};

/**
 * [removeClass - Remove a single class to the given element]
 * @param  {object} _item : Object that will lose the given class
 * @param  {string} _class : Class to delete
 */
var removeClass = function(_item,_class) {
  if (hasClass(_item,_class)) {
      var reg = new RegExp('(\\s|^)'+_class+'(\\s|$)');
      _item.className=_item.className.replace(reg,' ');
  }
};

/*------------------------*\
  $styles
\*------------------------*/ 

/**
 * [setStyle - Set multiple style to a given element]
 * @param {object} _item : Object that will receive the given styles
 * @param {array} _styles : Array of objects ({'width' : '100%', 'height' : '100%'})
 */
var setStyle = function(_item,_styles) {
  var _s;
  for (_s in _styles){
    _item.style[_s] = _styles[_s];
  }
};

/*------------------------*\
  $colors
\*------------------------*/ 

/**
 * [colorToHex - convert rgb color into hex]
 * @param  {string(rgb())} color
 * @return {string (hex)} color
 */
var colorToHex = function (color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+),(\d+),(\d+)\)/.exec(color);
    
    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    
    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '0x' + rgb.toString(16);
};

/*------------------------*\
  $cleanWhitesSpace 
\*------------------------*/ 

/**
 * [cleanWhitespace - Remove all the empty node (white-space) of an objects list]
 * @param  {objects} _node : Objects list that will be treat
 * @return {objects}
 */
var cleanWhitespace = function(_node){
  for (var i=0; i<_node.childNodes.length; i++){
    var _child = _node.childNodes[i];
    if(_child.nodeType == 3 && !/\S/.test(_child.nodeValue)){
      _node.removeChild(_child);
      i--;
    }
    if(_child.nodeType == 1){
      cleanWhitespace(_child);
    }
  }
  return _node;
};

/*------------------------*\
  $requestAnimationFrame
\*------------------------*/ 

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 
// MIT license
 
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
      };

  if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
      };
}());

/*------------------------*\
  $BrowserDetect

  // http://www.quirksmode.org/js/detect.html
\*------------------------*/ 

var BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version = this.searchVersion(navigator.userAgent)
      || this.searchVersion(navigator.appVersion)
      || "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
  },
  searchString: function (data) {
    for (var i=0;i<data.length;i++) {
      var dataString = data[i].string;
      var dataProp = data[i].prop;
      this.versionSearchString = data[i].versionSearch || data[i].identity;
      if (dataString) {
        if (dataString.indexOf(data[i].subString) != -1)
          return data[i].identity;
      }
      else if (dataProp)
        return data[i].identity;
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
  },
  dataBrowser: [
    {
      string: navigator.userAgent,
      subString: "Chrome",
      identity: "Chrome"
    },
    {   string: navigator.userAgent,
      subString: "OmniWeb",
      versionSearch: "OmniWeb/",
      identity: "OmniWeb"
    },
    {
      string: navigator.vendor,
      subString: "Apple",
      identity: "Safari",
      versionSearch: "Version"
    },
    {
      prop: window.opera,
      identity: "Opera",
      versionSearch: "Version"
    },
    {
      string: navigator.vendor,
      subString: "iCab",
      identity: "iCab"
    },
    {
      string: navigator.vendor,
      subString: "KDE",
      identity: "Konqueror"
    },
    {
      string: navigator.userAgent,
      subString: "Firefox",
      identity: "Firefox"
    },
    {
      string: navigator.vendor,
      subString: "Camino",
      identity: "Camino"
    },
    {   // for newer Netscapes (6+)
      string: navigator.userAgent,
      subString: "Netscape",
      identity: "Netscape"
    },
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE"
    },
    {
      string: navigator.userAgent,
      subString: "Gecko",
      identity: "Mozilla",
      versionSearch: "rv"
    },
    {     // for older Netscapes (4-)
      string: navigator.userAgent,
      subString: "Mozilla",
      identity: "Netscape",
      versionSearch: "Mozilla"
    }
  ],
  dataOS : [
    {
      string: navigator.platform,
      subString: "Win",
      identity: "Windows"
    },
    {
      string: navigator.platform,
      subString: "Mac",
      identity: "Mac"
    },
    {
         string: navigator.userAgent,
         subString: "iPhone",
         identity: "iPhone/iPod"
      },
    {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux"
    }
  ]
};