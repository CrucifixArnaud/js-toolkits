# js-toolkits - v1.0

Collection of useful small javascript function.

## Class Tools

### hasClass()

Determine if the given elements is assigned to the given class.

	hasClass(_item, _class);

#### Params

* **_item**, *object* (Required) : Object to test
* **_class**, *string* (Required) : Class to test

#### Return

* *Boolean*

### addClass()

Add a class to the given element.

	addClass(_item, _class);

#### Params

* **_item**, *object* (Required) : Object that will receive the new class
* **_class**, *string* (Required) : Class to add

### removeClass()

Remove a single class to the given element.

	removeClass(_item, _class);

#### Params

* **_item**, *object* (Required) : Object that will lose the given class
* **_class**, *string* (Required) : Class to delete


## Various

### cleanWhitespace()

Remove all the empty node (white-space) of an objects list.

	cleanWhitespace(_node);

#### Params

* **_node**, *objects* (Required) : Objects list that will be treat

#### Return

* *objects*

=======================

## Changelog

* **v1.0** Initial Release (Class Tools, RemoveWhiteSpace)

## Credits

Created by Crucifix Arnaud ([crucifixarnaud.com](http://crucifixarnaud.com))

This is free and unencumbered software released into the public domain. ([http://unlicense.org](http://unlicense.org))
