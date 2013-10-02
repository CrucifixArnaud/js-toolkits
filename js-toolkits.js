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
  if(_r == null){
    _r = false;
  }else{
    _r = true;
  }
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