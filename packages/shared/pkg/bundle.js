var Test = (function (exports) {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var promise$6 = {exports: {}};

	var promise$5 = {exports: {}};

	var symbol$5 = {exports: {}};

	var symbol$4 = {exports: {}};

	var concat$8 = {exports: {}};

	var concat$7 = {exports: {}};

	var bind$g = {exports: {}};

	var bind$f = {exports: {}};

	// https://tc39.es/ecma262/#sec-iscallable

	var isCallable$k = function isCallable(argument) {
	  return typeof argument == 'function';
	};

	var $String$3 = String;

	var tryToString$5 = function tryToString(argument) {
	  try {
	    return $String$3(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$j = isCallable$k;
	var tryToString$4 = tryToString$5;
	var $TypeError$c = TypeError; // `Assert: IsCallable(argument) is true`

	var aCallable$b = function aCallable(argument) {
	  if (isCallable$j(argument)) return argument;
	  throw $TypeError$c(tryToString$4(argument) + ' is not a function');
	};

	var isCallable$i = isCallable$k;

	var isObject$d = function isObject(it) {
	  return _typeof(it) == 'object' ? it !== null : isCallable$i(it);
	};

	var $TypeError$b = TypeError; // `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible

	var requireObjectCoercible$3 = function requireObjectCoercible(it) {
	  if (it == undefined) throw $TypeError$b("Can't call method on " + it);
	  return it;
	};

	var requireObjectCoercible$2 = requireObjectCoercible$3;
	var $Object$4 = Object; // `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject

	var toObject$8 = function toObject(argument) {
	  return $Object$4(requireObjectCoercible$2(argument));
	};

	var uncurryThis$l = functionUncurryThis;
	var toObject$7 = toObject$8;
	var hasOwnProperty = uncurryThis$l({}.hasOwnProperty); // `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es-x/no-object-hasown -- safe

	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$7(it), key);
	};

	var slice$6 = {exports: {}};

	var slice$5 = {exports: {}};

	var isArray$b = {exports: {}};

	var isArray$a = {exports: {}};

	var $$A = _export;
	var isArray$9 = isArray$4; // `Array.isArray` method
	// https://tc39.es/ecma262/#sec-array.isarray

	$$A({
	  target: 'Array',
	  stat: true
	}, {
	  isArray: isArray$9
	});

	var path$m = {};

	var path$l = path$m;
	var isArray$8 = path$l.Array.isArray;

	var parent$1f = isArray$8;
	var isArray$7 = parent$1f;

	var parent$1e = isArray$7;
	var isArray$6 = parent$1e;

	var parent$1d = isArray$6;
	var isArray$5 = parent$1d;

	(function (module) {
	  module.exports = isArray$5;
	})(isArray$a);

	(function (module) {
	  module.exports = isArray$a.exports;
	})(isArray$b);

	var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray$b.exports);

	var uncurryThis$k = functionUncurryThis;
	var toString$7 = uncurryThis$k({}.toString);
	var stringSlice$1 = uncurryThis$k(_sliceInstanceProperty(''));

	var classofRaw$1 = function classofRaw(it) {
	  return stringSlice$1(toString$7(it), 8, -1);
	};

	var classof$c = classofRaw$1; // `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es-x/no-array-isarray -- safe

	var isArray$4 = _Array$isArray || function isArray(argument) {
	  return classof$c(argument) == 'Array';
	};

	var fails$o = function fails(exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var globalThis$6 = {exports: {}};

	var globalThis$5 = {exports: {}};

	var $$z = _export;
	var global$p = global$o; // `globalThis` object
	// https://tc39.es/ecma262/#sec-globalthis

	$$z({
	  global: true
	}, {
	  globalThis: global$p
	});

	var globalThis$4 = {exports: {}};

	(function (module) {
	  module.exports = global$o;
	})(globalThis$4);

	var parent$1c = globalThis$4.exports;
	var globalThis$3 = parent$1c;

	var parent$1b = globalThis$3;
	var globalThis$2 = parent$1b;

	var parent$1a = globalThis$2;
	var globalThis$1 = parent$1a;

	(function (module) {
	  module.exports = globalThis$1;
	})(globalThis$5);

	(function (module) {
	  module.exports = globalThis$5.exports;
	})(globalThis$6);

	var _globalThis = /*@__PURE__*/getDefaultExportFromCjs(globalThis$6.exports);

	var check = function check(it) {
	  return it && it.Math == Math && it;
	}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


	var global$o = // eslint-disable-next-line es-x/no-global-this -- safe
	check((typeof _globalThis === "undefined" ? "undefined" : _typeof(_globalThis)) == 'object' && _globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
	check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check(_typeof(commonjsGlobal) == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
	function () {
	  return this;
	}() || Function('return this')();

	var shared$6 = {exports: {}};

	var isPure = true;

	var defineProperty$a = {exports: {}};

	var defineProperty$9 = {exports: {}};

	var defineProperty$8 = {exports: {}};

	var fails$n = fails$o; // Detect IE8's incomplete defineProperty implementation

	var descriptors = !fails$n(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return _Object$defineProperty({}, 1, {
	    get: function get() {
	      return 7;
	    }
	  })[1] != 7;
	});

	var getOwnPropertyDescriptor$9 = {exports: {}};

	var getOwnPropertyDescriptor$8 = {exports: {}};

	var getOwnPropertyDescriptor$7 = {exports: {}};

	var uncurryThis$j = functionUncurryThis;
	var fails$m = fails$o;
	var classof$b = classofRaw$1;
	var $Object$3 = Object;
	var split = uncurryThis$j(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

	var indexedObject = fails$m(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$3('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$b(it) == 'String' ? split(it, '') : $Object$3(it);
	} : $Object$3;

	var IndexedObject$1 = indexedObject;
	var requireObjectCoercible$1 = requireObjectCoercible$3;

	var toIndexedObject$9 = function toIndexedObject(it) {
	  return IndexedObject$1(requireObjectCoercible$1(it));
	};

	var objectGetOwnPropertyDescriptor = {};

	var fails$l = fails$o;
	var functionBindNative = !fails$l(function () {
	  var _context;

	  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
	  var test = _bindInstanceProperty(_context = function _context() {
	    /* empty */
	  }).call(_context); // eslint-disable-next-line no-prototype-builtins -- safe


	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$4 = functionBindNative;
	var call$j = Function.prototype.call;
	var functionCall = NATIVE_BIND$4 ? _bindInstanceProperty(call$j).call(call$j, call$j) : function () {
	  return call$j.apply(call$j, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable$1 = {}.propertyIsEnumerable; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

	var getOwnPropertyDescriptor$6 = _Object$getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

	var NASHORN_BUG = getOwnPropertyDescriptor$6 && !$propertyIsEnumerable$1.call({
	  1: 2
	}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$6(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var createPropertyDescriptor$7 = function createPropertyDescriptor(bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var path$k = path$m;
	var global$n = global$o;
	var isCallable$h = isCallable$k;

	var aFunction = function aFunction(variable) {
	  return isCallable$h(variable) ? variable : undefined;
	};

	var getBuiltIn$d = function getBuiltIn(namespace, method) {
	  return arguments.length < 2 ? aFunction(path$k[namespace]) || aFunction(global$n[namespace]) : path$k[namespace] && path$k[namespace][method] || global$n[namespace] && global$n[namespace][method];
	};

	var iterator$5 = {exports: {}};

	var iterator$4 = {exports: {}};

	var iterators = {};

	var uncurryThis$i = functionUncurryThis;
	var isCallable$g = isCallable$k;
	var store$3 = sharedStore;
	var functionToString = uncurryThis$i(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

	if (!isCallable$g(store$3.inspectSource)) {
	  store$3.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$3 = store$3.inspectSource;

	var global$m = global$o;
	var isCallable$f = isCallable$k;
	var inspectSource$2 = inspectSource$3;
	var WeakMap$1 = global$m.WeakMap;
	var nativeWeakMap = isCallable$f(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

	var DESCRIPTORS$c = descriptors;
	var definePropertyModule$5 = objectDefineProperty;
	var createPropertyDescriptor$6 = createPropertyDescriptor$7;
	var createNonEnumerableProperty$7 = DESCRIPTORS$c ? function (object, key, value) {
	  return definePropertyModule$5.f(object, key, createPropertyDescriptor$6(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var uncurryThis$h = functionUncurryThis;
	var id = 0;
	var postfix = Math.random();
	var toString$6 = uncurryThis$h(1.0.toString);

	var uid$3 = function uid(key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id + postfix, 36);
	};

	var shared$5 = shared$6.exports;
	var uid$2 = uid$3;
	var keys$d = shared$5('keys');

	var sharedKey$4 = function sharedKey(key) {
	  return keys$d[key] || (keys$d[key] = uid$2(key));
	};

	var hiddenKeys$5 = {};

	var NATIVE_WEAK_MAP = nativeWeakMap;
	var global$l = global$o;
	var uncurryThis$g = functionUncurryThis;
	var isObject$c = isObject$d;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$7;
	var hasOwn$h = hasOwnProperty_1;
	var shared$4 = sharedStore;
	var sharedKey$3 = sharedKey$4;
	var hiddenKeys$4 = hiddenKeys$5;
	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$3 = global$l.TypeError;
	var WeakMap = global$l.WeakMap;
	var set$1, get, has;

	var enforce = function enforce(it) {
	  return has(it) ? get(it) : set$1(it, {});
	};

	var getterFor = function getterFor(TYPE) {
	  return function (it) {
	    var state;

	    if (!isObject$c(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
	    }

	    return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared$4.state) {
	  var store$2 = shared$4.state || (shared$4.state = new WeakMap());
	  var wmget = uncurryThis$g(store$2.get);
	  var wmhas = uncurryThis$g(store$2.has);
	  var wmset = uncurryThis$g(store$2.set);

	  set$1 = function set(it, metadata) {
	    if (wmhas(store$2, it)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store$2, it, metadata);
	    return metadata;
	  };

	  get = function get(it) {
	    return wmget(store$2, it) || {};
	  };

	  has = function has(it) {
	    return wmhas(store$2, it);
	  };
	} else {
	  var STATE = sharedKey$3('state');
	  hiddenKeys$4[STATE] = true;

	  set$1 = function set(it, metadata) {
	    if (hasOwn$h(it, STATE)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$6(it, STATE, metadata);
	    return metadata;
	  };

	  get = function get(it) {
	    return hasOwn$h(it, STATE) ? it[STATE] : {};
	  };

	  has = function has(it) {
	    return hasOwn$h(it, STATE);
	  };
	}

	var internalState = {
	  set: set$1,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var entries$6 = {exports: {}};

	var entries$5 = {exports: {}};

	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods

	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var DOMIterables$3 = domIterables;
	var global$k = global$o;
	var classof$a = classof$3;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$7;
	var Iterators$5 = iterators;
	var wellKnownSymbol$l = wellKnownSymbol$c;
	var TO_STRING_TAG$4 = wellKnownSymbol$l('toStringTag');

	for (var COLLECTION_NAME in DOMIterables$3) {
	  var Collection = global$k[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;

	  if (CollectionPrototype && classof$a(CollectionPrototype) !== TO_STRING_TAG$4) {
	    createNonEnumerableProperty$5(CollectionPrototype, TO_STRING_TAG$4, COLLECTION_NAME);
	  }

	  Iterators$5[COLLECTION_NAME] = Iterators$5.Array;
	}

	var path$j = path$m;

	var entryVirtual$7 = function entryVirtual(CONSTRUCTOR) {
	  return path$j[CONSTRUCTOR + 'Prototype'];
	};

	var entryVirtual$6 = entryVirtual$7;

	var entries$4 = _entriesInstanceProperty(entryVirtual$6('Array'));

	var parent$19 = entries$4;
	var entries$3 = parent$19;

	var classof$9 = classof$3;
	var hasOwn$g = hasOwnProperty_1;
	var isPrototypeOf$b = objectIsPrototypeOf;
	var method$6 = entries$3;
	var ArrayPrototype$6 = Array.prototype;
	var DOMIterables$2 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var entries$2 = function entries(it) {
	  var own = _entriesInstanceProperty(it);

	  return it === ArrayPrototype$6 || isPrototypeOf$b(ArrayPrototype$6, it) && own === _entriesInstanceProperty(ArrayPrototype$6) || hasOwn$g(DOMIterables$2, classof$9(it)) ? method$6 : own;
	};

	var parent$18 = entries$2;
	var entries$1 = parent$18;

	var parent$17 = entries$1;
	var entries = parent$17;

	(function (module) {
	  module.exports = entries;
	})(entries$5);

	(function (module) {
	  module.exports = entries$5.exports;
	})(entries$6);

	var _entriesInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(entries$6.exports);

	var DESCRIPTORS$b = descriptors;
	var hasOwn$f = hasOwnProperty_1;
	var FunctionPrototype$3 = Function.prototype; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

	var getDescriptor = DESCRIPTORS$b && _Object$getOwnPropertyDescriptor;
	var EXISTS$1 = hasOwn$f(FunctionPrototype$3, 'name'); // additional protection from minified / mangled / dropped function names

	var PROPER = EXISTS$1 && function something() {
	  /* empty */
	}.name === 'something';

	var CONFIGURABLE$1 = EXISTS$1 && (!DESCRIPTORS$b || DESCRIPTORS$b && getDescriptor(FunctionPrototype$3, 'name').configurable);
	var functionName = {
	  EXISTS: EXISTS$1,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE$1
	};

	var keys$c = {exports: {}};

	var keys$b = {exports: {}};

	var entryVirtual$5 = entryVirtual$7;

	var keys$a = _keysInstanceProperty(entryVirtual$5('Array'));

	var parent$16 = keys$a;
	var keys$9 = parent$16;

	var classof$8 = classof$3;
	var hasOwn$e = hasOwnProperty_1;
	var isPrototypeOf$a = objectIsPrototypeOf;
	var method$5 = keys$9;
	var ArrayPrototype$5 = Array.prototype;
	var DOMIterables$1 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var keys$8 = function keys(it) {
	  var own = _keysInstanceProperty(it);

	  return it === ArrayPrototype$5 || isPrototypeOf$a(ArrayPrototype$5, it) && own === _keysInstanceProperty(ArrayPrototype$5) || hasOwn$e(DOMIterables$1, classof$8(it)) ? method$5 : own;
	};

	var parent$15 = keys$8;
	var keys$7 = parent$15;

	var parent$14 = keys$7;
	var keys$6 = parent$14;

	(function (module) {
	  module.exports = keys$6;
	})(keys$b);

	(function (module) {
	  module.exports = keys$b.exports;
	})(keys$c);

	var _keysInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(keys$c.exports);

	var create$9 = {exports: {}};

	var create$8 = {exports: {}};

	var $$y = _export;
	var DESCRIPTORS$a = descriptors;
	var create$7 = objectCreate; // `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create

	$$y({
	  target: 'Object',
	  stat: true,
	  sham: !DESCRIPTORS$a
	}, {
	  create: create$7
	});

	var path$i = path$m;
	var Object$5 = path$i.Object;

	var create$6 = function create(P, D) {
	  return Object$5.create(P, D);
	};

	var parent$13 = create$6;
	var create$5 = parent$13;

	var parent$12 = create$5;
	var create$4 = parent$12;

	var parent$11 = create$4;
	var create$3 = parent$11;

	(function (module) {
	  module.exports = create$3;
	})(create$8);

	(function (module) {
	  module.exports = create$8.exports;
	})(create$9);

	var _Object$create = /*@__PURE__*/getDefaultExportFromCjs(create$9.exports);

	var isObject$b = isObject$d;
	var $String$2 = String;
	var $TypeError$a = TypeError; // `Assert: Type(argument) is Object`

	var anObject$d = function anObject(argument) {
	  if (isObject$b(argument)) return argument;
	  throw $TypeError$a($String$2(argument) + ' is not an object');
	};

	var defineProperties$7 = {exports: {}};

	var defineProperties$6 = {exports: {}};

	var defineProperties$5 = {exports: {}};

	var $$x = _export;
	var DESCRIPTORS$9 = descriptors;
	var defineProperties$4 = objectDefineProperties.f; // `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es-x/no-object-defineproperties -- safe

	$$x({
	  target: 'Object',
	  stat: true,
	  forced: _Object$defineProperties !== defineProperties$4,
	  sham: !DESCRIPTORS$9
	}, {
	  defineProperties: defineProperties$4
	});

	var path$h = path$m;
	var Object$4 = path$h.Object;

	var defineProperties$3 = defineProperties$5.exports = function defineProperties(T, D) {
	  return Object$4.defineProperties(T, D);
	};

	if (Object$4.defineProperties.sham) defineProperties$3.sham = true;

	var parent$10 = defineProperties$5.exports;
	var defineProperties$2 = parent$10;

	var parent$$ = defineProperties$2;
	var defineProperties$1 = parent$$;

	var parent$_ = defineProperties$1;
	var defineProperties = parent$_;

	(function (module) {
	  module.exports = defineProperties;
	})(defineProperties$6);

	(function (module) {
	  module.exports = defineProperties$6.exports;
	})(defineProperties$7);

	var _Object$defineProperties = /*@__PURE__*/getDefaultExportFromCjs(defineProperties$7.exports);

	var objectDefineProperties = {};

	var DESCRIPTORS$8 = descriptors;
	var fails$k = fails$o; // V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334

	var v8PrototypeDefineBug = DESCRIPTORS$8 && fails$k(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return _Object$defineProperty(function () {
	    /* empty */
	  }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var keys$5 = {exports: {}};

	var keys$4 = {exports: {}};

	var $$w = _export;
	var toObject$6 = toObject$8;
	var nativeKeys = objectKeys$2;
	var fails$j = fails$o;
	var FAILS_ON_PRIMITIVES$3 = fails$j(function () {
	  nativeKeys(1);
	}); // `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys

	$$w({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$3
	}, {
	  keys: function keys(it) {
	    return nativeKeys(toObject$6(it));
	  }
	});

	var path$g = path$m;

	var keys$3 = _keysInstanceProperty(path$g.Object);

	var parent$Z = keys$3;
	var keys$2 = parent$Z;

	var parent$Y = keys$2;
	var keys$1 = parent$Y;

	var parent$X = keys$1;
	var keys = parent$X;

	(function (module) {
	  module.exports = keys;
	})(keys$4);

	(function (module) {
	  module.exports = keys$4.exports;
	})(keys$5);

	var _Object$keys = /*@__PURE__*/getDefaultExportFromCjs(keys$5.exports);

	var indexOf$7 = {exports: {}};

	var indexOf$6 = {exports: {}};

	var trunc$7 = {exports: {}};

	var trunc$6 = {exports: {}};

	var $$v = _export;
	var trunc$5 = mathTrunc; // `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc

	$$v({
	  target: 'Math',
	  stat: true
	}, {
	  trunc: trunc$5
	});

	var path$f = path$m;
	var trunc$4 = path$f.Math.trunc;

	var parent$W = trunc$4;
	var trunc$3 = parent$W;

	var parent$V = trunc$3;
	var trunc$2 = parent$V;

	var parent$U = trunc$2;
	var trunc$1 = parent$U;

	(function (module) {
	  module.exports = trunc$1;
	})(trunc$6);

	(function (module) {
	  module.exports = trunc$6.exports;
	})(trunc$7);

	var _Math$trunc = /*@__PURE__*/getDefaultExportFromCjs(trunc$7.exports);

	var ceil = Math.ceil;
	var floor = Math.floor; // `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es-x/no-math-trunc -- safe

	var mathTrunc = _Math$trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor : ceil)(n);
	};

	var trunc = mathTrunc; // `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity

	var toIntegerOrInfinity$3 = function toIntegerOrInfinity(argument) {
	  var number = +argument; // eslint-disable-next-line no-self-compare -- NaN check

	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;
	var max$2 = Math.max;
	var min$1 = Math.min; // Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

	var toAbsoluteIndex$3 = function toAbsoluteIndex(index, length) {
	  var integer = toIntegerOrInfinity$2(index);
	  return integer < 0 ? max$2(integer + length, 0) : min$1(integer, length);
	};

	var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;
	var min = Math.min; // `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength

	var toLength$1 = function toLength(argument) {
	  return argument > 0 ? min(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength = toLength$1; // `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike

	var lengthOfArrayLike$7 = function lengthOfArrayLike(obj) {
	  return toLength(obj.length);
	};

	var toIndexedObject$8 = toIndexedObject$9;
	var toAbsoluteIndex$2 = toAbsoluteIndex$3;
	var lengthOfArrayLike$6 = lengthOfArrayLike$7; // `Array.prototype.{ indexOf, includes }` methods implementation

	var createMethod$2 = function createMethod(IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$8($this);
	    var length = lengthOfArrayLike$6(O);
	    var index = toAbsoluteIndex$2(fromIndex, length);
	    var value; // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check

	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

	      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    }
	    return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var fails$i = fails$o;

	var arrayMethodIsStrict$2 = function arrayMethodIsStrict(METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$i(function () {
	    // eslint-disable-next-line no-useless-call -- required for testing
	    method.call(null, argument || function () {
	      return 1;
	    }, 1);
	  });
	};

	/* eslint-disable es-x/no-array-prototype-indexof -- required for testing */


	var $$u = _export;
	var uncurryThis$f = functionUncurryThis;

	var $IndexOf = _indexOfInstanceProperty(arrayIncludes);

	var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;
	var un$IndexOf = uncurryThis$f(_indexOfInstanceProperty([]));
	var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
	var STRICT_METHOD$1 = arrayMethodIsStrict$1('indexOf'); // `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof

	$$u({
	  target: 'Array',
	  proto: true,
	  forced: NEGATIVE_ZERO || !STRICT_METHOD$1
	}, {
	  indexOf: function indexOf(searchElement
	  /* , fromIndex = 0 */
	  ) {
	    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
	    return NEGATIVE_ZERO // convert -0 to +0
	    ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
	  }
	});

	var entryVirtual$4 = entryVirtual$7;

	var indexOf$5 = _indexOfInstanceProperty(entryVirtual$4('Array'));

	var isPrototypeOf$9 = objectIsPrototypeOf;
	var method$4 = indexOf$5;
	var ArrayPrototype$4 = Array.prototype;

	var indexOf$4 = function indexOf(it) {
	  var own = _indexOfInstanceProperty(it);

	  return it === ArrayPrototype$4 || isPrototypeOf$9(ArrayPrototype$4, it) && own === _indexOfInstanceProperty(ArrayPrototype$4) ? method$4 : own;
	};

	var parent$T = indexOf$4;
	var indexOf$3 = parent$T;

	var parent$S = indexOf$3;
	var indexOf$2 = parent$S;

	var parent$R = indexOf$2;
	var indexOf$1 = parent$R;

	(function (module) {
	  module.exports = indexOf$1;
	})(indexOf$6);

	(function (module) {
	  module.exports = indexOf$6.exports;
	})(indexOf$7);

	var _indexOfInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(indexOf$7.exports);

	var uncurryThis$e = functionUncurryThis;
	var hasOwn$d = hasOwnProperty_1;
	var toIndexedObject$7 = toIndexedObject$9;

	var indexOf = _indexOfInstanceProperty(arrayIncludes);

	var hiddenKeys$3 = hiddenKeys$5;
	var push$3 = uncurryThis$e([].push);

	var objectKeysInternal = function objectKeysInternal(object, names) {
	  var O = toIndexedObject$7(object);
	  var i = 0;
	  var result = [];
	  var key;

	  for (key in O) {
	    !hasOwn$d(hiddenKeys$3, key) && hasOwn$d(O, key) && push$3(result, key);
	  } // Don't enum bug & hidden keys


	  while (names.length > i) {
	    if (hasOwn$d(O, key = names[i++])) {
	      ~indexOf(result, key) || push$3(result, key);
	    }
	  }

	  return result;
	};

	var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3; // `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es-x/no-object-keys -- safe

	var objectKeys$2 = _Object$keys || function keys(O) {
	  return internalObjectKeys$1(O, enumBugKeys$2);
	};

	var DESCRIPTORS$7 = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
	var definePropertyModule$4 = objectDefineProperty;
	var anObject$c = anObject$d;
	var toIndexedObject$6 = toIndexedObject$9;
	var objectKeys$1 = objectKeys$2; // `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es-x/no-object-defineproperties -- safe

	objectDefineProperties.f = DESCRIPTORS$7 && !V8_PROTOTYPE_DEFINE_BUG$1 ? _Object$defineProperties : function defineProperties(O, Properties) {
	  anObject$c(O);
	  var props = toIndexedObject$6(Properties);
	  var keys = objectKeys$1(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;

	  while (length > index) {
	    definePropertyModule$4.f(O, key = keys[index++], props[key]);
	  }

	  return O;
	};

	var getBuiltIn$c = getBuiltIn$d;
	var html$2 = getBuiltIn$c('document', 'documentElement');

	var global$j = global$o;
	var isObject$a = isObject$d;
	var document$3 = global$j.document; // typeof document.createElement is 'object' in old IE

	var EXISTS = isObject$a(document$3) && isObject$a(document$3.createElement);

	var documentCreateElement$1 = function documentCreateElement(it) {
	  return EXISTS ? document$3.createElement(it) : {};
	};

	var anObject$b = anObject$d;
	var definePropertiesModule$1 = objectDefineProperties;
	var enumBugKeys$1 = enumBugKeys$3;
	var hiddenKeys$2 = hiddenKeys$5;
	var html$1 = html$2;
	var documentCreateElement = documentCreateElement$1;
	var sharedKey$2 = sharedKey$4;
	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$2('IE_PROTO');

	var EmptyConstructor = function EmptyConstructor() {
	  /* empty */
	};

	var scriptTag = function scriptTag(content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


	var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak

	  return temp;
	}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


	var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html$1.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	}; // Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug


	var activeXDocument;

	var _NullProtoObject = function NullProtoObject() {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) {
	    /* ignore */
	  }

	  _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

	  var length = enumBugKeys$1.length;

	  while (length--) {
	    delete _NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
	  }

	  return _NullProtoObject();
	};

	hiddenKeys$2[IE_PROTO$1] = true; // `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es-x/no-object-create -- safe

	var objectCreate = _Object$create || function create(O, Properties) {
	  var result;

	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject$b(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

	    result[IE_PROTO$1] = O;
	  } else result = _NullProtoObject();

	  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
	};

	var getPrototypeOf$8 = {exports: {}};

	var getPrototypeOf$7 = {exports: {}};

	var fails$h = fails$o;
	var correctPrototypeGetter = !fails$h(function () {
	  function F() {
	    /* empty */
	  }

	  F.prototype.constructor = null; // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing

	  return _Object$getPrototypeOf(new F()) !== F.prototype;
	});

	var $$t = _export;
	var fails$g = fails$o;
	var toObject$5 = toObject$8;
	var nativeGetPrototypeOf = objectGetPrototypeOf;
	var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
	var FAILS_ON_PRIMITIVES$2 = fails$g(function () {
	  nativeGetPrototypeOf(1);
	}); // `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof

	$$t({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$2,
	  sham: !CORRECT_PROTOTYPE_GETTER$1
	}, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return nativeGetPrototypeOf(toObject$5(it));
	  }
	});

	var path$e = path$m;
	var getPrototypeOf$6 = path$e.Object.getPrototypeOf;

	var parent$Q = getPrototypeOf$6;
	var getPrototypeOf$5 = parent$Q;

	var parent$P = getPrototypeOf$5;
	var getPrototypeOf$4 = parent$P;

	var parent$O = getPrototypeOf$4;
	var getPrototypeOf$3 = parent$O;

	(function (module) {
	  module.exports = getPrototypeOf$3;
	})(getPrototypeOf$7);

	(function (module) {
	  module.exports = getPrototypeOf$7.exports;
	})(getPrototypeOf$8);

	var _Object$getPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf$8.exports);

	var hasOwn$c = hasOwnProperty_1;
	var isCallable$e = isCallable$k;
	var toObject$4 = toObject$8;
	var sharedKey$1 = sharedKey$4;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
	var IE_PROTO = sharedKey$1('IE_PROTO');
	var $Object$2 = Object;
	var ObjectPrototype$1 = $Object$2.prototype; // `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es-x/no-object-getprototypeof -- safe

	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? _Object$getPrototypeOf : function (O) {
	  var object = toObject$4(O);
	  if (hasOwn$c(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;

	  if (isCallable$e(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  }

	  return object instanceof $Object$2 ? ObjectPrototype$1 : null;
	};

	var createNonEnumerableProperty$4 = createNonEnumerableProperty$7;

	var defineBuiltIn$5 = function defineBuiltIn(target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty$4(target, key, value);
	  return target;
	};

	var fails$f = fails$o;
	var isCallable$d = isCallable$k;
	var create$2 = objectCreate;
	var getPrototypeOf$2 = objectGetPrototypeOf;
	var defineBuiltIn$4 = defineBuiltIn$5;
	var wellKnownSymbol$k = wellKnownSymbol$c;
	var ITERATOR$4 = wellKnownSymbol$k('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object

	var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;
	/* eslint-disable es-x/no-array-prototype-keys -- safe */

	if (_keysInstanceProperty([])) {
	  var _context;

	  arrayIterator = _keysInstanceProperty(_context = []).call(_context); // Safari 8 has buggy iterators w/o `next`

	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$2(getPrototypeOf$2(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$1 == undefined || fails$f(function () {
	  var test = {}; // FF44- legacy iterators case

	  return IteratorPrototype$1[ITERATOR$4].call(test) !== test;
	});
	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};else IteratorPrototype$1 = create$2(IteratorPrototype$1); // `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

	if (!isCallable$d(IteratorPrototype$1[ITERATOR$4])) {
	  defineBuiltIn$4(IteratorPrototype$1, ITERATOR$4, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$1,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var classof$7 = classof$3; // `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring

	var objectToString = TO_STRING_TAG_SUPPORT$2 ? {}.toString : function toString() {
	  return '[object ' + classof$7(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var defineProperty$7 = objectDefineProperty.f;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$7;
	var hasOwn$b = hasOwnProperty_1;
	var toString$5 = objectToString;
	var wellKnownSymbol$j = wellKnownSymbol$c;
	var TO_STRING_TAG$3 = wellKnownSymbol$j('toStringTag');

	var setToStringTag$6 = function setToStringTag(it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;

	    if (!hasOwn$b(target, TO_STRING_TAG$3)) {
	      defineProperty$7(target, TO_STRING_TAG$3, {
	        configurable: true,
	        value: TAG
	      });
	    }

	    if (SET_METHOD && !TO_STRING_TAG_SUPPORT$1) {
	      createNonEnumerableProperty$3(target, 'toString', toString$5);
	    }
	  }
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var create$1 = objectCreate;
	var createPropertyDescriptor$5 = createPropertyDescriptor$7;
	var setToStringTag$5 = setToStringTag$6;
	var Iterators$4 = iterators;

	var returnThis$1 = function returnThis() {
	  return this;
	};

	var createIteratorConstructor$1 = function createIteratorConstructor(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$1(IteratorPrototype, {
	    next: createPropertyDescriptor$5(+!ENUMERABLE_NEXT, next)
	  });
	  setToStringTag$5(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators$4[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var setPrototypeOf$7 = {exports: {}};

	var setPrototypeOf$6 = {exports: {}};

	var $$s = _export;
	var setPrototypeOf$5 = objectSetPrototypeOf; // `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof

	$$s({
	  target: 'Object',
	  stat: true
	}, {
	  setPrototypeOf: setPrototypeOf$5
	});

	var path$d = path$m;
	var setPrototypeOf$4 = path$d.Object.setPrototypeOf;

	var parent$N = setPrototypeOf$4;
	var setPrototypeOf$3 = parent$N;

	var parent$M = setPrototypeOf$3;
	var setPrototypeOf$2 = parent$M;

	var parent$L = setPrototypeOf$2;
	var setPrototypeOf$1 = parent$L;

	(function (module) {
	  module.exports = setPrototypeOf$1;
	})(setPrototypeOf$6);

	(function (module) {
	  module.exports = setPrototypeOf$6.exports;
	})(setPrototypeOf$7);

	var _Object$setPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(setPrototypeOf$7.exports);

	var isCallable$c = isCallable$k;
	var $String$1 = String;
	var $TypeError$9 = TypeError;

	var aPossiblePrototype$1 = function aPossiblePrototype(argument) {
	  if (_typeof(argument) == 'object' || isCallable$c(argument)) return argument;
	  throw $TypeError$9("Can't set " + $String$1(argument) + ' as a prototype');
	};

	var uncurryThis$d = functionUncurryThis;
	var anObject$a = anObject$d;
	var aPossiblePrototype = aPossiblePrototype$1; // `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es-x/no-object-setprototypeof -- safe

	var objectSetPrototypeOf = _Object$setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;

	  try {
	    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	    setter = uncurryThis$d(_Object$getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) {
	    /* empty */
	  }

	  return function setPrototypeOf(O, proto) {
	    anObject$a(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var $$r = _export;
	var call$i = functionCall;
	var FunctionName = functionName;
	var createIteratorConstructor = createIteratorConstructor$1;
	var getPrototypeOf$1 = objectGetPrototypeOf;
	var setToStringTag$4 = setToStringTag$6;
	var defineBuiltIn$3 = defineBuiltIn$5;
	var wellKnownSymbol$i = wellKnownSymbol$c;
	var Iterators$3 = iterators;
	var IteratorsCore = iteratorsCore;
	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$3 = wellKnownSymbol$i('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function returnThis() {
	  return this;
	};

	var defineIterator$2 = function defineIterator(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function getIterationMethod(KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

	    switch (KIND) {
	      case KEYS:
	        return function keys() {
	          return new IteratorConstructor(this, KIND);
	        };

	      case VALUES:
	        return function values() {
	          return new IteratorConstructor(this, KIND);
	        };

	      case ENTRIES:
	        return function entries() {
	          return new IteratorConstructor(this, KIND);
	        };
	    }

	    return function () {
	      return new IteratorConstructor(this);
	    };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? _entriesInstanceProperty(IterablePrototype) || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY; // fix native

	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf$1(anyNativeIterator.call(new Iterable()));

	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {


	      setToStringTag$4(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      Iterators$3[TO_STRING_TAG] = returnThis;
	    }
	  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


	  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    {
	      INCORRECT_VALUES_NAME = true;

	      defaultIterator = function values() {
	        return call$i(nativeIterator, this);
	      };
	    }
	  } // export additional methods


	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$r({
	      target: NAME,
	      proto: true,
	      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
	    }, methods);
	  } // define iterator


	  if ((FORCED) && IterablePrototype[ITERATOR$3] !== defaultIterator) {
	    defineBuiltIn$3(IterablePrototype, ITERATOR$3, defaultIterator, {
	      name: DEFAULT
	    });
	  }

	  Iterators$3[NAME] = defaultIterator;
	  return methods;
	};

	var toIndexedObject$5 = toIndexedObject$9;
	var Iterators$2 = iterators;
	var InternalStateModule$3 = internalState;
	objectDefineProperty.f;
	var defineIterator$1 = defineIterator$2;
	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$3 = InternalStateModule$3.set;
	var getInternalState$2 = InternalStateModule$3.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator

	defineIterator$1(Array, 'Array', function (iterated, kind) {
	  setInternalState$3(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$5(iterated),
	    // target
	    index: 0,
	    // next index
	    kind: kind // kind

	  }); // `%ArrayIteratorPrototype%.next` method
	  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$2(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;

	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return {
	      value: undefined,
	      done: true
	    };
	  }

	  if (kind == 'keys') return {
	    value: index,
	    done: false
	  };
	  if (kind == 'values') return {
	    value: target[index],
	    done: false
	  };
	  return {
	    value: [index, target[index]],
	    done: false
	  };
	}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject

	Iterators$2.Arguments = Iterators$2.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

	var classof$6 = classof$3;
	var $String = String;

	var toString$4 = function toString(argument) {
	  if (classof$6(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String(argument);
	};

	var uncurryThis$c = functionUncurryThis;
	var toIntegerOrInfinity = toIntegerOrInfinity$3;
	var toString$3 = toString$4;
	var requireObjectCoercible = requireObjectCoercible$3;
	var charAt$2 = uncurryThis$c(''.charAt);
	var charCodeAt$1 = uncurryThis$c(''.charCodeAt);
	var stringSlice = uncurryThis$c(_sliceInstanceProperty(''));

	var createMethod$1 = function createMethod(CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$3(requireObjectCoercible($this));
	    var position = toIntegerOrInfinity(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt$1(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$2(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$1(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$1(true)
	};

	var charAt$1 = stringMultibyte.charAt;
	var toString$2 = toString$4;
	var InternalStateModule$2 = internalState;
	var defineIterator = defineIterator$2;
	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$2 = InternalStateModule$2.set;
	var getInternalState$1 = InternalStateModule$2.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

	defineIterator(String, 'String', function (iterated) {
	  setInternalState$2(this, {
	    type: STRING_ITERATOR,
	    string: toString$2(iterated),
	    index: 0
	  }); // `%StringIteratorPrototype%.next` method
	  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$1(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return {
	    value: undefined,
	    done: true
	  };
	  point = charAt$1(string, index);
	  state.index += point.length;
	  return {
	    value: point,
	    done: false
	  };
	});

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$h = wellKnownSymbol$c;
	wellKnownSymbolWrapped.f = wellKnownSymbol$h;

	var path$c = path$m;
	var hasOwn$a = hasOwnProperty_1;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$6 = objectDefineProperty.f;

	var defineWellKnownSymbol$l = function defineWellKnownSymbol(NAME) {
	  var _Symbol = path$c.Symbol || (path$c.Symbol = {});

	  if (!hasOwn$a(_Symbol, NAME)) defineProperty$6(_Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var defineWellKnownSymbol$k = defineWellKnownSymbol$l; // `Symbol.iterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.iterator

	defineWellKnownSymbol$k('iterator');

	var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var iterator$3 = WrappedWellKnownSymbolModule.f('iterator');

	var parent$K = iterator$3;
	var iterator$2 = parent$K;

	var parent$J = iterator$2;
	var iterator$1 = parent$J;

	var parent$I = iterator$1;
	var iterator = parent$I;

	(function (module) {
	  module.exports = iterator;
	})(iterator$4);

	(function (module) {
	  module.exports = iterator$4.exports;
	})(iterator$5);

	var _Symbol$iterator = /*@__PURE__*/getDefaultExportFromCjs(iterator$5.exports);

	var getOwnPropertySymbols$5 = {exports: {}};

	var getOwnPropertySymbols$4 = {exports: {}};

	var forEach$7 = {exports: {}};

	var forEach$6 = {exports: {}};

	var uncurryThis$b = functionUncurryThis;
	var aCallable$a = aCallable$b;
	var NATIVE_BIND$3 = functionBindNative;
	var bind$e = uncurryThis$b(_bindInstanceProperty(uncurryThis$b)); // optional / simple context binding

	var functionBindContext = function functionBindContext(fn, that) {
	  aCallable$a(fn);
	  return that === undefined ? fn : NATIVE_BIND$3 ? bind$e(fn, that) : function
	    /* ...args */
	  () {
	    return fn.apply(that, arguments);
	  };
	};

	var isArray$3 = isArray$4;
	var isConstructor$4 = isConstructor$3;
	var isObject$9 = isObject$d;
	var wellKnownSymbol$g = wellKnownSymbol$c;
	var SPECIES$5 = wellKnownSymbol$g('species');
	var $Array$3 = Array; // a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate

	var arraySpeciesConstructor$1 = function arraySpeciesConstructor(originalArray) {
	  var C;

	  if (isArray$3(originalArray)) {
	    C = originalArray.constructor; // cross-realm fallback

	    if (isConstructor$4(C) && (C === $Array$3 || isArray$3(C.prototype))) C = undefined;else if (isObject$9(C)) {
	      C = C[SPECIES$5];
	      if (C === null) C = undefined;
	    }
	  }

	  return C === undefined ? $Array$3 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate

	var arraySpeciesCreate$2 = function arraySpeciesCreate(originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var bind$d = functionBindContext;
	var uncurryThis$a = functionUncurryThis;
	var IndexedObject = indexedObject;
	var toObject$3 = toObject$8;
	var lengthOfArrayLike$5 = lengthOfArrayLike$7;
	var arraySpeciesCreate$1 = arraySpeciesCreate$2;
	var push$2 = uncurryThis$a([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

	var createMethod = function createMethod(TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$3($this);
	    var self = IndexedObject(O);
	    var boundFunction = bind$d(callbackfn, that);
	    var length = lengthOfArrayLike$5(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate$1;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;

	    for (; length > index; index++) {
	      if (NO_HOLES || index in self) {
	        value = self[index];
	        result = boundFunction(value, index, O);

	        if (TYPE) {
	          if (IS_MAP) target[index] = result; // map
	          else if (result) switch (TYPE) {
	            case 3:
	              return true;
	            // some

	            case 5:
	              return value;
	            // find

	            case 6:
	              return index;
	            // findIndex

	            case 2:
	              push$2(target, value);
	            // filter
	          } else switch (TYPE) {
	            case 4:
	              return false;
	            // every

	            case 7:
	              push$2(target, value);
	            // filterReject
	          }
	        }
	      }
	    }

	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod(7)
	};

	var $forEach$1 = _forEachInstanceProperty(arrayIteration);

	var arrayMethodIsStrict = arrayMethodIsStrict$2;
	var STRICT_METHOD = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach

	var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn
	/* , thisArg */
	) {
	  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
	} : _forEachInstanceProperty([]);

	var $$q = _export;
	var forEach$5 = arrayForEach; // `Array.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	// eslint-disable-next-line es-x/no-array-prototype-foreach -- safe

	$$q({
	  target: 'Array',
	  proto: true,
	  forced: _forEachInstanceProperty([]) != forEach$5
	}, {
	  forEach: forEach$5
	});

	var entryVirtual$3 = entryVirtual$7;

	var forEach$4 = _forEachInstanceProperty(entryVirtual$3('Array'));

	var parent$H = forEach$4;
	var forEach$3 = parent$H;

	var classof$5 = classof$3;
	var hasOwn$9 = hasOwnProperty_1;
	var isPrototypeOf$8 = objectIsPrototypeOf;
	var method$3 = forEach$3;
	var ArrayPrototype$3 = Array.prototype;
	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach$2 = function forEach(it) {
	  var own = _forEachInstanceProperty(it);

	  return it === ArrayPrototype$3 || isPrototypeOf$8(ArrayPrototype$3, it) && own === _forEachInstanceProperty(ArrayPrototype$3) || hasOwn$9(DOMIterables, classof$5(it)) ? method$3 : own;
	};

	var parent$G = forEach$2;
	var forEach$1 = parent$G;

	var parent$F = forEach$1;
	var forEach = parent$F;

	(function (module) {
	  module.exports = forEach;
	})(forEach$6);

	(function (module) {
	  module.exports = forEach$6.exports;
	})(forEach$7);

	var _forEachInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(forEach$7.exports);

	var getOwnPropertyNames$6 = {exports: {}};

	var getOwnPropertyNames$5 = {exports: {}};

	var objectGetOwnPropertyNamesExternal = {};

	var toPropertyKey$4 = toPropertyKey$2;
	var definePropertyModule$3 = objectDefineProperty;
	var createPropertyDescriptor$4 = createPropertyDescriptor$7;

	var createProperty$4 = function createProperty(object, key, value) {
	  var propertyKey = toPropertyKey$4(key);
	  if (propertyKey in object) definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor$4(0, value));else object[propertyKey] = value;
	};

	var toAbsoluteIndex$1 = toAbsoluteIndex$3;
	var lengthOfArrayLike$4 = lengthOfArrayLike$7;
	var createProperty$3 = createProperty$4;
	var $Array$2 = Array;
	var max$1 = Math.max;

	var arraySliceSimple = function arraySliceSimple(O, start, end) {
	  var length = lengthOfArrayLike$4(O);
	  var k = toAbsoluteIndex$1(start, length);
	  var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
	  var result = $Array$2(max$1(fin - k, 0));

	  for (var n = 0; k < fin; k++, n++) {
	    createProperty$3(result, n, O[k]);
	  }

	  result.length = n;
	  return result;
	};

	var classof$4 = classofRaw$1;
	var toIndexedObject$4 = toIndexedObject$9;
	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var arraySlice$5 = arraySliceSimple;
	var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && _Object$getOwnPropertyNames ? _Object$getOwnPropertyNames(window) : [];

	var getWindowNames = function getWindowNames(it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return arraySlice$5(windowNames);
	  }
	}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof$4(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$4(it));
	};

	var $$p = _export;
	var fails$e = fails$o;
	var getOwnPropertyNames$4 = objectGetOwnPropertyNamesExternal.f; // eslint-disable-next-line es-x/no-object-getownpropertynames -- required for testing

	var FAILS_ON_PRIMITIVES$1 = fails$e(function () {
	  return !_Object$getOwnPropertyNames(1);
	}); // `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames

	$$p({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$1
	}, {
	  getOwnPropertyNames: getOwnPropertyNames$4
	});

	var path$b = path$m;
	var Object$3 = path$b.Object;

	var getOwnPropertyNames$3 = function getOwnPropertyNames(it) {
	  return Object$3.getOwnPropertyNames(it);
	};

	var parent$E = getOwnPropertyNames$3;
	var getOwnPropertyNames$2 = parent$E;

	var parent$D = getOwnPropertyNames$2;
	var getOwnPropertyNames$1 = parent$D;

	var parent$C = getOwnPropertyNames$1;
	var getOwnPropertyNames = parent$C;

	(function (module) {
	  module.exports = getOwnPropertyNames;
	})(getOwnPropertyNames$5);

	(function (module) {
	  module.exports = getOwnPropertyNames$5.exports;
	})(getOwnPropertyNames$6);

	var _Object$getOwnPropertyNames = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyNames$6.exports);

	var objectGetOwnPropertyNames = {};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys = enumBugKeys$3;

	var hiddenKeys$1 = _concatInstanceProperty(enumBugKeys).call(enumBugKeys, 'length', 'prototype'); // `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe


	objectGetOwnPropertyNames.f = _Object$getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys(O, hiddenKeys$1);
	};

	var objectGetOwnPropertySymbols = {};

	objectGetOwnPropertySymbols.f = _Object$getOwnPropertySymbols;

	var call$h = functionCall;
	var getBuiltIn$b = getBuiltIn$d;
	var wellKnownSymbol$f = wellKnownSymbol$c;
	var defineBuiltIn$2 = defineBuiltIn$5;

	var symbolDefineToPrimitive = function symbolDefineToPrimitive() {
	  var _Symbol = getBuiltIn$b('Symbol');

	  var SymbolPrototype = _Symbol && _Symbol.prototype;
	  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
	  var TO_PRIMITIVE = wellKnownSymbol$f('toPrimitive');

	  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
	    // `Symbol.prototype[@@toPrimitive]` method
	    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
	    // eslint-disable-next-line no-unused-vars -- required for .length
	    defineBuiltIn$2(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	      return call$h(valueOf, this);
	    }, {
	      arity: 1
	    });
	  }
	};

	var $$o = _export;
	var global$i = global$o;
	var call$g = functionCall;
	var uncurryThis$9 = functionUncurryThis;
	var DESCRIPTORS$6 = descriptors;
	var NATIVE_SYMBOL$5 = nativeSymbol;
	var fails$d = fails$o;
	var hasOwn$8 = hasOwnProperty_1;
	var isPrototypeOf$7 = objectIsPrototypeOf;
	var anObject$9 = anObject$d;
	var toIndexedObject$3 = toIndexedObject$9;
	var toPropertyKey$3 = toPropertyKey$2;
	var $toString = toString$4;
	var createPropertyDescriptor$3 = createPropertyDescriptor$7;
	var nativeObjectCreate = objectCreate;
	var objectKeys = objectKeys$2;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$2 = objectDefineProperty;
	var definePropertiesModule = objectDefineProperties;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var defineBuiltIn$1 = defineBuiltIn$5;
	var shared$3 = shared$6.exports;
	var sharedKey = sharedKey$4;
	var hiddenKeys = hiddenKeys$5;
	var uid$1 = uid$3;
	var wellKnownSymbol$e = wellKnownSymbol$c;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol$j = defineWellKnownSymbol$l;
	var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
	var setToStringTag$3 = setToStringTag$6;
	var InternalStateModule$1 = internalState;

	var $forEach = _forEachInstanceProperty(arrayIteration);

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalState = InternalStateModule$1.getterFor(SYMBOL);
	var ObjectPrototype = Object[PROTOTYPE];
	var $Symbol = global$i.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var TypeError$2 = global$i.TypeError;
	var QObject = global$i.QObject;
	var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$1.f;
	var nativeDefineProperty = definePropertyModule$2.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var push$1 = uncurryThis$9([].push);
	var AllSymbols = shared$3('symbols');
	var ObjectPrototypeSymbols = shared$3('op-symbols');
	var WellKnownSymbolsStore$1 = shared$3('wks'); // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

	var setSymbolDescriptor = DESCRIPTORS$6 && fails$d(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function get() {
	      return nativeDefineProperty(this, 'a', {
	        value: 7
	      }).a;
	    }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
	  nativeDefineProperty(O, P, Attributes);

	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
	    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty;

	var wrap$1 = function wrap(tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
	  setInternalState$1(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$6) symbol.description = description;
	  return symbol;
	};

	var $defineProperty$1 = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype) $defineProperty$1(ObjectPrototypeSymbols, P, Attributes);
	  anObject$9(O);
	  var key = toPropertyKey$3(P);
	  anObject$9(Attributes);

	  if (hasOwn$8(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwn$8(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$3(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$8(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, {
	        enumerable: createPropertyDescriptor$3(0, false)
	      });
	    }

	    return setSymbolDescriptor(O, key, Attributes);
	  }

	  return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  var _context;

	  anObject$9(O);
	  var properties = toIndexedObject$3(Properties);

	  var keys = _concatInstanceProperty(_context = objectKeys(properties)).call(_context, $getOwnPropertySymbols(properties));

	  $forEach(keys, function (key) {
	    if (!DESCRIPTORS$6 || call$g($propertyIsEnumerable, properties, key)) $defineProperty$1(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$3(V);
	  var enumerable = call$g(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype && hasOwn$8(AllSymbols, P) && !hasOwn$8(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$8(this, P) || !hasOwn$8(AllSymbols, P) || hasOwn$8(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$3(O);
	  var key = toPropertyKey$3(P);
	  if (it === ObjectPrototype && hasOwn$8(AllSymbols, key) && !hasOwn$8(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

	  if (descriptor && hasOwn$8(AllSymbols, key) && !(hasOwn$8(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }

	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$3(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (!hasOwn$8(AllSymbols, key) && !hasOwn$8(hiddenKeys, key)) push$1(result, key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function $getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$3(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (hasOwn$8(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$8(ObjectPrototype, key))) {
	      push$1(result, AllSymbols[key]);
	    }
	  });
	  return result;
	}; // `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor


	if (!NATIVE_SYMBOL$5) {
	  $Symbol = function _Symbol() {
	    if (isPrototypeOf$7(SymbolPrototype, this)) throw TypeError$2('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
	    var tag = uid$1(description);

	    var setter = function setter(value) {
	      if (this === ObjectPrototype) call$g(setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$8(this, HIDDEN) && hasOwn$8(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor$3(1, value));
	    };

	    if (DESCRIPTORS$6 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
	      configurable: true,
	      set: setter
	    });
	    return wrap$1(tag, description);
	  };

	  SymbolPrototype = $Symbol[PROTOTYPE];
	  defineBuiltIn$1(SymbolPrototype, 'toString', function toString() {
	    return getInternalState(this).tag;
	  });
	  defineBuiltIn$1($Symbol, 'withoutSetter', function (description) {
	    return wrap$1(uid$1(description), description);
	  });
	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
	  definePropertyModule$2.f = $defineProperty$1;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor$2;
	  getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap$1(wellKnownSymbol$e(name), name);
	  };

	  if (DESCRIPTORS$6) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty(SymbolPrototype, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState(this).description;
	      }
	    });
	  }
	}

	$$o({
	  global: true,
	  constructor: true,
	  wrap: true,
	  forced: !NATIVE_SYMBOL$5,
	  sham: !NATIVE_SYMBOL$5
	}, {
	  Symbol: $Symbol
	});
	$forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
	  defineWellKnownSymbol$j(name);
	});
	$$o({
	  target: SYMBOL,
	  stat: true,
	  forced: !NATIVE_SYMBOL$5
	}, {
	  useSetter: function useSetter() {
	    USE_SETTER = true;
	  },
	  useSimple: function useSimple() {
	    USE_SETTER = false;
	  }
	});
	$$o({
	  target: 'Object',
	  stat: true,
	  forced: !NATIVE_SYMBOL$5,
	  sham: !DESCRIPTORS$6
	}, {
	  // `Object.create` method
	  // https://tc39.es/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.es/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty$1,
	  // `Object.defineProperties` method
	  // https://tc39.es/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$2
	});
	$$o({
	  target: 'Object',
	  stat: true,
	  forced: !NATIVE_SYMBOL$5
	}, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames
	}); // `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive

	defineSymbolToPrimitive$1(); // `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag

	setToStringTag$3($Symbol, SYMBOL);
	hiddenKeys[HIDDEN] = true;

	var _for$5 = {exports: {}};

	var _for$4 = {exports: {}};

	var path$a = path$m;
	var _for$3 = path$a.Symbol['for'];

	var parent$B = _for$3;
	var _for$2 = parent$B;

	var parent$A = _for$2;
	var _for$1 = parent$A;

	var parent$z = _for$1;
	var _for = parent$z;

	(function (module) {
	  module.exports = _for;
	})(_for$4);

	(function (module) {
	  module.exports = _for$4.exports;
	})(_for$5);

	var _Symbol$for = /*@__PURE__*/getDefaultExportFromCjs(_for$5.exports);

	var keyFor$5 = {exports: {}};

	var keyFor$4 = {exports: {}};

	var path$9 = path$m;
	var keyFor$3 = path$9.Symbol.keyFor;

	var parent$y = keyFor$3;
	var keyFor$2 = parent$y;

	var parent$x = keyFor$2;
	var keyFor$1 = parent$x;

	var parent$w = keyFor$1;
	var keyFor = parent$w;

	(function (module) {
	  module.exports = keyFor;
	})(keyFor$4);

	(function (module) {
	  module.exports = keyFor$4.exports;
	})(keyFor$5);

	var _Symbol$keyFor = /*@__PURE__*/getDefaultExportFromCjs(keyFor$5.exports);

	var NATIVE_SYMBOL$4 = nativeSymbol;
	/* eslint-disable es-x/no-symbol -- safe */

	var nativeSymbolRegistry = NATIVE_SYMBOL$4 && !!_Symbol$for && !!_Symbol$keyFor;

	var $$n = _export;
	var getBuiltIn$a = getBuiltIn$d;
	var hasOwn$7 = hasOwnProperty_1;
	var toString$1 = toString$4;
	var shared$2 = shared$6.exports;
	var NATIVE_SYMBOL_REGISTRY$1 = nativeSymbolRegistry;
	var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
	var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry'); // `Symbol.for` method
	// https://tc39.es/ecma262/#sec-symbol.for

	$$n({
	  target: 'Symbol',
	  stat: true,
	  forced: !NATIVE_SYMBOL_REGISTRY$1
	}, {
	  'for': function _for(key) {
	    var string = toString$1(key);
	    if (hasOwn$7(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = getBuiltIn$a('Symbol')(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry$1[symbol] = string;
	    return symbol;
	  }
	});

	var $$m = _export;
	var hasOwn$6 = hasOwnProperty_1;
	var isSymbol$4 = isSymbol$2;
	var tryToString$3 = tryToString$5;
	var shared$1 = shared$6.exports;
	var NATIVE_SYMBOL_REGISTRY = nativeSymbolRegistry;
	var SymbolToStringRegistry = shared$1('symbol-to-string-registry'); // `Symbol.keyFor` method
	// https://tc39.es/ecma262/#sec-symbol.keyfor

	$$m({
	  target: 'Symbol',
	  stat: true,
	  forced: !NATIVE_SYMBOL_REGISTRY
	}, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$4(sym)) throw TypeError(tryToString$3(sym) + ' is not a symbol');
	    if (hasOwn$6(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  }
	});

	var apply$a = {exports: {}};

	var apply$9 = {exports: {}};

	var $$l = _export;
	var functionApply$1 = functionApply;
	var aCallable$9 = aCallable$b;
	var anObject$8 = anObject$d;
	var fails$c = fails$o; // MS Edge argumentsList argument is optional

	var OPTIONAL_ARGUMENTS_LIST = !fails$c(function () {
	  // eslint-disable-next-line es-x/no-reflect -- required for testing
	  _Reflect$apply(function () {
	    /* empty */
	  });
	}); // `Reflect.apply` method
	// https://tc39.es/ecma262/#sec-reflect.apply

	$$l({
	  target: 'Reflect',
	  stat: true,
	  forced: OPTIONAL_ARGUMENTS_LIST
	}, {
	  apply: function apply(target, thisArgument, argumentsList) {
	    return functionApply$1(aCallable$9(target), thisArgument, anObject$8(argumentsList));
	  }
	});

	var path$8 = path$m;
	var apply$8 = path$8.Reflect.apply;

	var parent$v = apply$8;
	var apply$7 = parent$v;

	var parent$u = apply$7;
	var apply$6 = parent$u;

	var parent$t = apply$6;
	var apply$5 = parent$t;

	(function (module) {
	  module.exports = apply$5;
	})(apply$9);

	(function (module) {
	  module.exports = apply$9.exports;
	})(apply$a);

	var _Reflect$apply = /*@__PURE__*/getDefaultExportFromCjs(apply$a.exports);

	var NATIVE_BIND$2 = functionBindNative;
	var FunctionPrototype$2 = Function.prototype;
	var apply$4 = FunctionPrototype$2.apply;
	var call$f = FunctionPrototype$2.call; // eslint-disable-next-line es-x/no-reflect -- safe

	var functionApply = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == 'object' && _Reflect$apply || (NATIVE_BIND$2 ? _bindInstanceProperty(call$f).call(call$f, apply$4) : function () {
	  return call$f.apply(apply$4, arguments);
	});

	var $$k = _export;
	var getBuiltIn$9 = getBuiltIn$d;
	var apply$3 = functionApply;
	var call$e = functionCall;
	var uncurryThis$8 = functionUncurryThis;
	var fails$b = fails$o;
	var isArray$2 = isArray$4;
	var isCallable$b = isCallable$k;
	var isObject$8 = isObject$d;
	var isSymbol$3 = isSymbol$2;
	var arraySlice$4 = arraySlice$3;
	var NATIVE_SYMBOL$3 = nativeSymbol;
	var $stringify = getBuiltIn$9('JSON', 'stringify');
	var exec$1 = uncurryThis$8(/./.exec);
	var charAt = uncurryThis$8(''.charAt);
	var charCodeAt = uncurryThis$8(''.charCodeAt);
	var replace$1 = uncurryThis$8(''.replace);
	var numberToString = uncurryThis$8(1.0.toString);
	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;
	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$3 || fails$b(function () {
	  var symbol = getBuiltIn$9('Symbol')(); // MS Edge converts symbol values to JSON as {}

	  return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
	  || $stringify({
	    a: symbol
	  }) != '{}' // V8 throws on boxed symbols
	  || $stringify(Object(symbol)) != '{}';
	}); // https://github.com/tc39/proposal-well-formed-stringify

	var ILL_FORMED_UNICODE = fails$b(function () {
	  return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
	});

	var stringifyWithSymbolsFix = function stringifyWithSymbolsFix(it, replacer) {
	  var args = arraySlice$4(arguments);
	  var $replacer = replacer;
	  if (!isObject$8(replacer) && it === undefined || isSymbol$3(it)) return; // IE8 returns string on undefined

	  if (!isArray$2(replacer)) replacer = function replacer(key, value) {
	    if (isCallable$b($replacer)) value = call$e($replacer, this, key, value);
	    if (!isSymbol$3(value)) return value;
	  };
	  args[1] = replacer;
	  return apply$3($stringify, null, args);
	};

	var fixIllFormed = function fixIllFormed(match, offset, string) {
	  var prev = charAt(string, offset - 1);
	  var next = charAt(string, offset + 1);

	  if (exec$1(low, match) && !exec$1(hi, next) || exec$1(hi, match) && !exec$1(low, prev)) {
	    return "\\u" + numberToString(charCodeAt(match, 0), 16);
	  }

	  return match;
	};

	if ($stringify) {
	  // `JSON.stringify` method
	  // https://tc39.es/ecma262/#sec-json.stringify
	  $$k({
	    target: 'JSON',
	    stat: true,
	    arity: 3,
	    forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE
	  }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice$4(arguments);
	      var result = apply$3(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$1(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	var $$j = _export;
	var NATIVE_SYMBOL$2 = nativeSymbol;
	var fails$a = fails$o;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var toObject$2 = toObject$8; // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443

	var FORCED$2 = !NATIVE_SYMBOL$2 || fails$a(function () {
	  getOwnPropertySymbolsModule$1.f(1);
	}); // `Object.getOwnPropertySymbols` method
	// https://tc39.es/ecma262/#sec-object.getownpropertysymbols

	$$j({
	  target: 'Object',
	  stat: true,
	  forced: FORCED$2
	}, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$2(it)) : [];
	  }
	});

	var path$7 = path$m;
	var getOwnPropertySymbols$3 = path$7.Object.getOwnPropertySymbols;

	var parent$s = getOwnPropertySymbols$3;
	var getOwnPropertySymbols$2 = parent$s;

	var parent$r = getOwnPropertySymbols$2;
	var getOwnPropertySymbols$1 = parent$r;

	var parent$q = getOwnPropertySymbols$1;
	var getOwnPropertySymbols = parent$q;

	(function (module) {
	  module.exports = getOwnPropertySymbols;
	})(getOwnPropertySymbols$4);

	(function (module) {
	  module.exports = getOwnPropertySymbols$4.exports;
	})(getOwnPropertySymbols$5);

	var _Object$getOwnPropertySymbols = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertySymbols$5.exports);

	var getBuiltIn$8 = getBuiltIn$d;
	var engineUserAgent = getBuiltIn$8('navigator', 'userAgent') || '';

	var global$h = global$o;
	var userAgent$4 = engineUserAgent;
	var process$3 = global$h.process;
	var Deno$1 = global$h.Deno;
	var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us

	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0


	if (!version && userAgent$4) {
	  match = userAgent$4.match(/Edge\/(\d+)/);

	  if (!match || match[1] >= 74) {
	    match = userAgent$4.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var engineV8Version = version;

	var V8_VERSION$3 = engineV8Version;
	var fails$9 = fails$o; // eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing

	var nativeSymbol = !!_Object$getOwnPropertySymbols && !fails$9(function () {
	  var symbol = _Symbol(); // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances


	  return !String(symbol) || !(Object(symbol) instanceof _Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	  !_Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
	});

	var NATIVE_SYMBOL$1 = nativeSymbol;
	var useSymbolAsUid = NATIVE_SYMBOL$1 && !_Symbol.sham && _typeof(_Symbol$iterator) == 'symbol';

	var getBuiltIn$7 = getBuiltIn$d;
	var isCallable$a = isCallable$k;
	var isPrototypeOf$6 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
	var $Object$1 = Object;
	var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return _typeof(it) == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$7('Symbol');
	  return isCallable$a($Symbol) && isPrototypeOf$6($Symbol.prototype, $Object$1(it));
	};

	var aCallable$8 = aCallable$b; // `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod

	var getMethod$3 = function getMethod(V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable$8(func);
	};

	var call$d = functionCall;
	var isCallable$9 = isCallable$k;
	var isObject$7 = isObject$d;
	var $TypeError$8 = TypeError; // `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive

	var ordinaryToPrimitive$1 = function ordinaryToPrimitive(input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$9(fn = input.toString) && !isObject$7(val = call$d(fn, input))) return val;
	  if (isCallable$9(fn = input.valueOf) && !isObject$7(val = call$d(fn, input))) return val;
	  if (pref !== 'string' && isCallable$9(fn = input.toString) && !isObject$7(val = call$d(fn, input))) return val;
	  throw $TypeError$8("Can't convert object to primitive value");
	};

	var call$c = functionCall;
	var isObject$6 = isObject$d;
	var isSymbol$1 = isSymbol$2;
	var getMethod$2 = getMethod$3;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$d = wellKnownSymbol$c;
	var $TypeError$7 = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$d('toPrimitive'); // `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive

	var toPrimitive$1 = function toPrimitive(input, pref) {
	  if (!isObject$6(input) || isSymbol$1(input)) return input;
	  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
	  var result;

	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$c(exoticToPrim, input, pref);
	    if (!isObject$6(result) || isSymbol$1(result)) return result;
	    throw $TypeError$7("Can't convert object to primitive value");
	  }

	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive = toPrimitive$1;
	var isSymbol = isSymbol$2; // `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey

	var toPropertyKey$2 = function toPropertyKey(argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};

	var DESCRIPTORS$5 = descriptors;
	var fails$8 = fails$o;
	var createElement$1 = documentCreateElement$1; // Thanks to IE8 for its funny defineProperty

	var ie8DomDefine = !DESCRIPTORS$5 && !fails$8(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return _Object$defineProperty(createElement$1('div'), 'a', {
	    get: function get() {
	      return 7;
	    }
	  }).a != 7;
	});

	var DESCRIPTORS$4 = descriptors;
	var call$b = functionCall;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var createPropertyDescriptor$2 = createPropertyDescriptor$7;
	var toIndexedObject$2 = toIndexedObject$9;
	var toPropertyKey$1 = toPropertyKey$2;
	var hasOwn$5 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

	var $getOwnPropertyDescriptor$1 = _Object$getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$4 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$2(O);
	  P = toPropertyKey$1(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) {
	    /* empty */
	  }
	  if (hasOwn$5(O, P)) return createPropertyDescriptor$2(!call$b(propertyIsEnumerableModule.f, O, P), O[P]);
	};

	var $$i = _export;
	var fails$7 = fails$o;
	var toIndexedObject$1 = toIndexedObject$9;
	var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var DESCRIPTORS$3 = descriptors;
	var FAILS_ON_PRIMITIVES = fails$7(function () {
	  nativeGetOwnPropertyDescriptor(1);
	});
	var FORCED$1 = !DESCRIPTORS$3 || FAILS_ON_PRIMITIVES; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

	$$i({
	  target: 'Object',
	  stat: true,
	  forced: FORCED$1,
	  sham: !DESCRIPTORS$3
	}, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor(toIndexedObject$1(it), key);
	  }
	});

	var path$6 = path$m;
	var Object$2 = path$6.Object;

	var getOwnPropertyDescriptor$5 = getOwnPropertyDescriptor$7.exports = function getOwnPropertyDescriptor(it, key) {
	  return Object$2.getOwnPropertyDescriptor(it, key);
	};

	if (Object$2.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor$5.sham = true;

	var parent$p = getOwnPropertyDescriptor$7.exports;
	var getOwnPropertyDescriptor$4 = parent$p;

	var parent$o = getOwnPropertyDescriptor$4;
	var getOwnPropertyDescriptor$3 = parent$o;

	var parent$n = getOwnPropertyDescriptor$3;
	var getOwnPropertyDescriptor$2 = parent$n;

	(function (module) {
	  module.exports = getOwnPropertyDescriptor$2;
	})(getOwnPropertyDescriptor$8);

	(function (module) {
	  module.exports = getOwnPropertyDescriptor$8.exports;
	})(getOwnPropertyDescriptor$9);

	var _Object$getOwnPropertyDescriptor = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptor$9.exports);

	var objectDefineProperty = {};

	var DESCRIPTORS$2 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var anObject$7 = anObject$d;
	var toPropertyKey = toPropertyKey$2;
	var $TypeError$6 = TypeError; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

	var $defineProperty = _Object$defineProperty; // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe

	var $getOwnPropertyDescriptor = _Object$getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE = 'configurable';
	var WRITABLE = 'writable'; // `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty

	objectDefineProperty.f = DESCRIPTORS$2 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
	  anObject$7(O);
	  P = toPropertyKey(P);
	  anObject$7(Attributes);

	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);

	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  }

	  return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$7(O);
	  P = toPropertyKey(P);
	  anObject$7(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) {
	    /* empty */
	  }
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$6('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var $$h = _export;
	var DESCRIPTORS$1 = descriptors;
	var defineProperty$5 = objectDefineProperty.f; // `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	// eslint-disable-next-line es-x/no-object-defineproperty -- safe

	$$h({
	  target: 'Object',
	  stat: true,
	  forced: _Object$defineProperty !== defineProperty$5,
	  sham: !DESCRIPTORS$1
	}, {
	  defineProperty: defineProperty$5
	});

	var path$5 = path$m;
	var Object$1 = path$5.Object;

	var defineProperty$4 = defineProperty$8.exports = function defineProperty(it, key, desc) {
	  return Object$1.defineProperty(it, key, desc);
	};

	if (Object$1.defineProperty.sham) defineProperty$4.sham = true;

	var parent$m = defineProperty$8.exports;
	var defineProperty$3 = parent$m;

	var parent$l = defineProperty$3;
	var defineProperty$2 = parent$l;

	var parent$k = defineProperty$2;
	var defineProperty$1 = parent$k;

	(function (module) {
	  module.exports = defineProperty$1;
	})(defineProperty$9);

	(function (module) {
	  module.exports = defineProperty$9.exports;
	})(defineProperty$a);

	var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$a.exports);

	var global$g = global$o; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

	var defineProperty = _Object$defineProperty;

	var defineGlobalProperty$1 = function defineGlobalProperty(key, value) {
	  try {
	    defineProperty(global$g, key, {
	      value: value,
	      configurable: true,
	      writable: true
	    });
	  } catch (error) {
	    global$g[key] = value;
	  }

	  return value;
	};

	var global$f = global$o;
	var defineGlobalProperty = defineGlobalProperty$1;
	var SHARED = '__core-js_shared__';
	var store$1 = global$f[SHARED] || defineGlobalProperty(SHARED, {});
	var sharedStore = store$1;

	var store = sharedStore;
	(shared$6.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.22.8',
	  mode: 'pure' ,
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.22.8/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var global$e = global$o;
	var shared = shared$6.exports;
	var hasOwn$4 = hasOwnProperty_1;
	var uid = uid$3;
	var NATIVE_SYMBOL = nativeSymbol;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;
	var WellKnownSymbolsStore = shared('wks');
	var _Symbol$1 = global$e.Symbol;
	var symbolFor = _Symbol$1 && _Symbol$1['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol$1 : _Symbol$1 && _Symbol$1.withoutSetter || uid;

	var wellKnownSymbol$c = function wellKnownSymbol(name) {
	  if (!hasOwn$4(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;

	    if (NATIVE_SYMBOL && hasOwn$4(_Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = _Symbol$1[name];
	    } else if (USE_SYMBOL_AS_UID && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  }

	  return WellKnownSymbolsStore[name];
	};

	var wellKnownSymbol$b = wellKnownSymbol$c;
	var TO_STRING_TAG$2 = wellKnownSymbol$b('toStringTag');
	var test = {};
	test[TO_STRING_TAG$2] = 'z';
	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var isCallable$8 = isCallable$k;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol$a = wellKnownSymbol$c;
	var TO_STRING_TAG$1 = wellKnownSymbol$a('toStringTag');
	var $Object = Object; // ES3 wrong here

	var CORRECT_ARGUMENTS = classofRaw(function () {
	  return arguments;
	}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (error) {
	    /* empty */
	  }
	}; // getting tag from ES6+ `Object.prototype.toString`


	var classof$3 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
	  : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$1)) == 'string' ? tag // builtinTag case
	  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
	  : (result = classofRaw(O)) == 'Object' && isCallable$8(O.callee) ? 'Arguments' : result;
	};

	var uncurryThis$7 = functionUncurryThis;
	var fails$6 = fails$o;
	var isCallable$7 = isCallable$k;
	var classof$2 = classof$3;
	var getBuiltIn$6 = getBuiltIn$d;
	var inspectSource$1 = inspectSource$3;

	var noop = function noop() {
	  /* empty */
	};

	var empty = [];
	var construct$1 = getBuiltIn$6('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = uncurryThis$7(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$7(argument)) return false;

	  try {
	    construct$1(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$7(argument)) return false;

	  switch (classof$2(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction':
	      return false;
	  }

	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource$1(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor

	var isConstructor$3 = !construct$1 || fails$6(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
	    called = true;
	  }) || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var fails$5 = fails$o;
	var wellKnownSymbol$9 = wellKnownSymbol$c;
	var V8_VERSION$2 = engineV8Version;
	var SPECIES$4 = wellKnownSymbol$9('species');

	var arrayMethodHasSpeciesSupport$2 = function arrayMethodHasSpeciesSupport(METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$2 >= 51 || !fails$5(function () {
	    var array = [];
	    var constructor = array.constructor = {};

	    constructor[SPECIES$4] = function () {
	      return {
	        foo: 1
	      };
	    };

	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$g = _export;
	var isArray$1 = isArray$4;
	var isConstructor$2 = isConstructor$3;
	var isObject$5 = isObject$d;
	var toAbsoluteIndex = toAbsoluteIndex$3;
	var lengthOfArrayLike$3 = lengthOfArrayLike$7;
	var toIndexedObject = toIndexedObject$9;
	var createProperty$2 = createProperty$4;
	var wellKnownSymbol$8 = wellKnownSymbol$c;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$2;
	var un$Slice = arraySlice$3;
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('slice');
	var SPECIES$3 = wellKnownSymbol$8('species');
	var $Array$1 = Array;
	var max = Math.max; // `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects

	$$g({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT
	}, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = lengthOfArrayLike$3(O);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

	    var Constructor, result, n;

	    if (isArray$1(O)) {
	      Constructor = O.constructor; // cross-realm fallback

	      if (isConstructor$2(Constructor) && (Constructor === $Array$1 || isArray$1(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$5(Constructor)) {
	        Constructor = Constructor[SPECIES$3];
	        if (Constructor === null) Constructor = undefined;
	      }

	      if (Constructor === $Array$1 || Constructor === undefined) {
	        return un$Slice(O, k, fin);
	      }
	    }

	    result = new (Constructor === undefined ? $Array$1 : Constructor)(max(fin - k, 0));

	    for (n = 0; k < fin; k++, n++) {
	      if (k in O) createProperty$2(result, n, O[k]);
	    }

	    result.length = n;
	    return result;
	  }
	});

	var entryVirtual$2 = entryVirtual$7;

	var slice$4 = _sliceInstanceProperty(entryVirtual$2('Array'));

	var isPrototypeOf$5 = objectIsPrototypeOf;
	var method$2 = slice$4;
	var ArrayPrototype$2 = Array.prototype;

	var slice$3 = function slice(it) {
	  var own = _sliceInstanceProperty(it);

	  return it === ArrayPrototype$2 || isPrototypeOf$5(ArrayPrototype$2, it) && own === _sliceInstanceProperty(ArrayPrototype$2) ? method$2 : own;
	};

	var parent$j = slice$3;
	var slice$2 = parent$j;

	var parent$i = slice$2;
	var slice$1 = parent$i;

	var parent$h = slice$1;
	var slice = parent$h;

	(function (module) {
	  module.exports = slice;
	})(slice$5);

	(function (module) {
	  module.exports = slice$5.exports;
	})(slice$6);

	var _sliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(slice$6.exports);

	var uncurryThis$6 = functionUncurryThis;
	var arraySlice$3 = uncurryThis$6(_sliceInstanceProperty([]));

	var uncurryThis$5 = functionUncurryThis;
	var aCallable$7 = aCallable$b;
	var isObject$4 = isObject$d;
	var hasOwn$3 = hasOwnProperty_1;
	var arraySlice$2 = arraySlice$3;
	var NATIVE_BIND$1 = functionBindNative;
	var $Function = Function;
	var concat$6 = uncurryThis$5(_concatInstanceProperty([]));
	var join = uncurryThis$5([].join);
	var factories = {};

	var construct = function construct(C, argsLength, args) {
	  if (!hasOwn$3(factories, argsLength)) {
	    for (var list = [], i = 0; i < argsLength; i++) {
	      list[i] = 'a[' + i + ']';
	    }

	    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
	  }

	  return factories[argsLength](C, args);
	}; // `Function.prototype.bind` method implementation
	// https://tc39.es/ecma262/#sec-function.prototype.bind


	var functionBind = NATIVE_BIND$1 ? _bindInstanceProperty($Function) : function bind(that
	/* , ...args */
	) {
	  var F = aCallable$7(this);
	  var Prototype = F.prototype;
	  var partArgs = arraySlice$2(arguments, 1);

	  var boundFunction = function
	    /* args... */
	  bound() {
	    var args = concat$6(partArgs, arraySlice$2(arguments));
	    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
	  };

	  if (isObject$4(Prototype)) boundFunction.prototype = Prototype;
	  return boundFunction;
	};

	var $$f = _export;
	var bind$c = functionBind; // `Function.prototype.bind` method
	// https://tc39.es/ecma262/#sec-function.prototype.bind

	$$f({
	  target: 'Function',
	  proto: true,
	  forced: _bindInstanceProperty(Function) !== bind$c
	}, {
	  bind: bind$c
	});

	var entryVirtual$1 = entryVirtual$7;

	var bind$b = _bindInstanceProperty(entryVirtual$1('Function'));

	var isPrototypeOf$4 = objectIsPrototypeOf;
	var method$1 = bind$b;
	var FunctionPrototype$1 = Function.prototype;

	var bind$a = function bind(it) {
	  var own = _bindInstanceProperty(it);

	  return it === FunctionPrototype$1 || isPrototypeOf$4(FunctionPrototype$1, it) && own === _bindInstanceProperty(FunctionPrototype$1) ? method$1 : own;
	};

	var parent$g = bind$a;
	var bind$9 = parent$g;

	var parent$f = bind$9;
	var bind$8 = parent$f;

	var parent$e = bind$8;
	var bind$7 = parent$e;

	(function (module) {
	  module.exports = bind$7;
	})(bind$f);

	(function (module) {
	  module.exports = bind$f.exports;
	})(bind$g);

	var _bindInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(bind$g.exports);

	var NATIVE_BIND = functionBindNative;
	var FunctionPrototype = Function.prototype;

	var bind$6 = _bindInstanceProperty(FunctionPrototype);

	var call$a = FunctionPrototype.call;

	var uncurryThis$4 = NATIVE_BIND && _bindInstanceProperty(bind$6).call(bind$6, call$a, call$a);

	var functionUncurryThis = NATIVE_BIND ? function (fn) {
	  return fn && uncurryThis$4(fn);
	} : function (fn) {
	  return fn && function () {
	    return call$a.apply(fn, arguments);
	  };
	};

	var uncurryThis$3 = functionUncurryThis;
	var objectIsPrototypeOf = uncurryThis$3({}.isPrototypeOf);

	var entryVirtual = entryVirtual$7;

	var concat$5 = _concatInstanceProperty(entryVirtual('Array'));

	var isPrototypeOf$3 = objectIsPrototypeOf;
	var method = concat$5;
	var ArrayPrototype$1 = Array.prototype;

	var concat$4 = function concat(it) {
	  var own = _concatInstanceProperty(it);

	  return it === ArrayPrototype$1 || isPrototypeOf$3(ArrayPrototype$1, it) && own === _concatInstanceProperty(ArrayPrototype$1) ? method : own;
	};

	var parent$d = concat$4;
	var concat$3 = parent$d;

	var parent$c = concat$3;
	var concat$2 = parent$c;

	var parent$b = concat$2;
	var concat$1 = parent$b;

	(function (module) {
	  module.exports = concat$1;
	})(concat$7);

	(function (module) {
	  module.exports = concat$7.exports;
	})(concat$8);

	var _concatInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(concat$8.exports);

	var $TypeError$5 = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

	var doesNotExceedSafeInteger$1 = function doesNotExceedSafeInteger(it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError$5('Maximum allowed index exceeded');
	  return it;
	};

	var $$e = _export;
	var fails$4 = fails$o;
	var isArray = isArray$4;
	var isObject$3 = isObject$d;
	var toObject$1 = toObject$8;
	var lengthOfArrayLike$2 = lengthOfArrayLike$7;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
	var createProperty$1 = createProperty$4;
	var arraySpeciesCreate = arraySpeciesCreate$2;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$2;
	var wellKnownSymbol$7 = wellKnownSymbol$c;
	var V8_VERSION$1 = engineV8Version;
	var IS_CONCAT_SPREADABLE = wellKnownSymbol$7('isConcatSpreadable'); // We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679

	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$4(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return _concatInstanceProperty(array).call(array)[0] !== array;
	});
	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function isConcatSpreadable(O) {
	  if (!isObject$3(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species

	$$e({
	  target: 'Array',
	  proto: true,
	  arity: 1,
	  forced: FORCED
	}, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$1(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;

	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];

	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$2(E);
	        doesNotExceedSafeInteger(n + len);

	        for (k = 0; k < len; k++, n++) {
	          if (k in E) createProperty$1(A, n, E[k]);
	        }
	      } else {
	        doesNotExceedSafeInteger(n + 1);
	        createProperty$1(A, n++, E);
	      }
	    }

	    A.length = n;
	    return A;
	  }
	});

	var defineWellKnownSymbol$i = defineWellKnownSymbol$l; // `Symbol.asyncIterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.asynciterator

	defineWellKnownSymbol$i('asyncIterator');

	var defineWellKnownSymbol$h = defineWellKnownSymbol$l; // `Symbol.hasInstance` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.hasinstance

	defineWellKnownSymbol$h('hasInstance');

	var defineWellKnownSymbol$g = defineWellKnownSymbol$l; // `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable

	defineWellKnownSymbol$g('isConcatSpreadable');

	var defineWellKnownSymbol$f = defineWellKnownSymbol$l; // `Symbol.match` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.match

	defineWellKnownSymbol$f('match');

	var defineWellKnownSymbol$e = defineWellKnownSymbol$l; // `Symbol.matchAll` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.matchall

	defineWellKnownSymbol$e('matchAll');

	var defineWellKnownSymbol$d = defineWellKnownSymbol$l; // `Symbol.replace` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.replace

	defineWellKnownSymbol$d('replace');

	var defineWellKnownSymbol$c = defineWellKnownSymbol$l; // `Symbol.search` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.search

	defineWellKnownSymbol$c('search');

	var defineWellKnownSymbol$b = defineWellKnownSymbol$l; // `Symbol.species` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.species

	defineWellKnownSymbol$b('species');

	var defineWellKnownSymbol$a = defineWellKnownSymbol$l; // `Symbol.split` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.split

	defineWellKnownSymbol$a('split');

	var defineWellKnownSymbol$9 = defineWellKnownSymbol$l;
	var defineSymbolToPrimitive = symbolDefineToPrimitive; // `Symbol.toPrimitive` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.toprimitive

	defineWellKnownSymbol$9('toPrimitive'); // `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive

	defineSymbolToPrimitive();

	var getBuiltIn$5 = getBuiltIn$d;
	var defineWellKnownSymbol$8 = defineWellKnownSymbol$l;
	var setToStringTag$2 = setToStringTag$6; // `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag

	defineWellKnownSymbol$8('toStringTag'); // `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag

	setToStringTag$2(getBuiltIn$5('Symbol'), 'Symbol');

	var defineWellKnownSymbol$7 = defineWellKnownSymbol$l; // `Symbol.unscopables` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.unscopables

	defineWellKnownSymbol$7('unscopables');

	var global$d = global$o;
	var setToStringTag$1 = setToStringTag$6; // JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag

	setToStringTag$1(global$d.JSON, 'JSON', true);

	var path$4 = path$m;
	var symbol$3 = path$4.Symbol;

	var parent$a = symbol$3;
	var symbol$2 = parent$a;

	var parent$9 = symbol$2;
	var symbol$1 = parent$9;

	var defineWellKnownSymbol$6 = defineWellKnownSymbol$l; // `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement

	defineWellKnownSymbol$6('asyncDispose');

	var defineWellKnownSymbol$5 = defineWellKnownSymbol$l; // `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement

	defineWellKnownSymbol$5('dispose');

	var defineWellKnownSymbol$4 = defineWellKnownSymbol$l; // `Symbol.matcher` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching

	defineWellKnownSymbol$4('matcher');

	var defineWellKnownSymbol$3 = defineWellKnownSymbol$l; // `Symbol.metadata` well-known symbol
	// https://github.com/tc39/proposal-decorators

	defineWellKnownSymbol$3('metadata');

	var defineWellKnownSymbol$2 = defineWellKnownSymbol$l; // `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable

	defineWellKnownSymbol$2('observable');

	var defineWellKnownSymbol$1 = defineWellKnownSymbol$l; // `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching

	defineWellKnownSymbol$1('patternMatch');

	var defineWellKnownSymbol = defineWellKnownSymbol$l;
	defineWellKnownSymbol('replaceAll');

	var parent$8 = symbol$1; // TODO: Remove from `core-js@4`
	// TODO: Remove from `core-js@4`

	var symbol = parent$8;

	(function (module) {
	  module.exports = symbol;
	})(symbol$4);

	(function (module) {
	  module.exports = symbol$4.exports;
	})(symbol$5);

	var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol$5.exports);

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}

	var fails$3 = fails$o;
	var isCallable$6 = isCallable$k;
	var replacement = /#|\.prototype\./;

	var isForced$2 = function isForced(feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$6(detection) ? fails$3(detection) : !!detection;
	};

	var normalize = isForced$2.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$2.data = {};
	var NATIVE = isForced$2.NATIVE = 'N';
	var POLYFILL = isForced$2.POLYFILL = 'P';
	var isForced_1 = isForced$2;

	var global$c = global$o;
	var apply$2 = functionApply;
	var uncurryThis$2 = functionUncurryThis;
	var isCallable$5 = isCallable$k;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var isForced$1 = isForced_1;
	var path$3 = path$m;
	var bind$5 = functionBindContext;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$7;
	var hasOwn$2 = hasOwnProperty_1;

	var wrapConstructor = function wrapConstructor(NativeConstructor) {
	  var Wrapper = function Wrapper(a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0:
	          return new NativeConstructor();

	        case 1:
	          return new NativeConstructor(a);

	        case 2:
	          return new NativeConstructor(a, b);
	      }

	      return new NativeConstructor(a, b, c);
	    }

	    return apply$2(NativeConstructor, this, arguments);
	  };

	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};
	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/


	var _export = function _export(options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;
	  var nativeSource = GLOBAL ? global$c : STATIC ? global$c[TARGET] : (global$c[TARGET] || {}).prototype;
	  var target = GLOBAL ? path$3 : path$3[TARGET] || createNonEnumerableProperty$2(path$3, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;
	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native

	    USE_NATIVE = !FORCED && nativeSource && hasOwn$2(nativeSource, key);
	    targetProperty = target[key];
	    if (USE_NATIVE) if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key]; // export native or implementation

	    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
	    if (USE_NATIVE && _typeof(targetProperty) == _typeof(sourceProperty)) continue; // bind timers to global for call from export context

	    if (_bindInstanceProperty(options) && USE_NATIVE) resultProperty = bind$5(sourceProperty, global$c); // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods
	    else if (PROTO && isCallable$5(sourceProperty)) resultProperty = uncurryThis$2(sourceProperty); // default case
	    else resultProperty = sourceProperty; // add a flag to not completely full polyfills

	    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
	      createNonEnumerableProperty$2(resultProperty, 'sham', true);
	    }

	    createNonEnumerableProperty$2(target, key, resultProperty);

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

	      if (!hasOwn$2(path$3, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$2(path$3, VIRTUAL_PROTOTYPE, {});
	      } // export virtual prototype methods


	      createNonEnumerableProperty$2(path$3[VIRTUAL_PROTOTYPE], key, sourceProperty); // export real prototype methods

	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty$2(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var getBuiltIn$4 = getBuiltIn$d;
	var uncurryThis$1 = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var anObject$6 = anObject$d;
	var concat = uncurryThis$1(_concatInstanceProperty([])); // all object keys, includes non-enumerable and symbols

	var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject$6(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$1 = hasOwnProperty_1;
	var ownKeys = ownKeys$1;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var definePropertyModule$1 = objectDefineProperty;

	var copyConstructorProperties$1 = function copyConstructorProperties(target, source, exceptions) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule$1.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];

	    if (!hasOwn$1(target, key) && !(exceptions && hasOwn$1(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var uncurryThis = functionUncurryThis;
	var $Error$1 = Error;
	var replace = uncurryThis(''.replace);

	var TEST = function (arg) {
	  return String($Error$1(arg).stack);
	}('zxcasd');

	var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
	var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

	var clearErrorStack$1 = function clearErrorStack(stack, dropEntries) {
	  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
	    while (dropEntries--) {
	      stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
	    }
	  }

	  return stack;
	};

	var isObject$2 = isObject$d;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$7; // `InstallErrorCause` abstract operation
	// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause

	var installErrorCause$1 = function installErrorCause(O, options) {
	  if (isObject$2(options) && 'cause' in options) {
	    createNonEnumerableProperty$1(O, 'cause', options.cause);
	  }
	};

	var wellKnownSymbol$6 = wellKnownSymbol$c;
	var Iterators$1 = iterators;
	var ITERATOR$2 = wellKnownSymbol$6('iterator');
	var ArrayPrototype = Array.prototype; // check on default Array iterator

	var isArrayIteratorMethod$2 = function isArrayIteratorMethod(it) {
	  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
	};

	var classof$1 = classof$3;
	var getMethod$1 = getMethod$3;
	var Iterators = iterators;
	var wellKnownSymbol$5 = wellKnownSymbol$c;
	var ITERATOR$1 = wellKnownSymbol$5('iterator');

	var getIteratorMethod$3 = function getIteratorMethod(it) {
	  if (it != undefined) return getMethod$1(it, ITERATOR$1) || getMethod$1(it, '@@iterator') || Iterators[classof$1(it)];
	};

	var call$9 = functionCall;
	var aCallable$6 = aCallable$b;
	var anObject$5 = anObject$d;
	var tryToString$2 = tryToString$5;
	var getIteratorMethod$2 = getIteratorMethod$3;
	var $TypeError$4 = TypeError;

	var getIterator$2 = function getIterator(argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
	  if (aCallable$6(iteratorMethod)) return anObject$5(call$9(iteratorMethod, argument));
	  throw $TypeError$4(tryToString$2(argument) + ' is not iterable');
	};

	var call$8 = functionCall;
	var anObject$4 = anObject$d;
	var getMethod = getMethod$3;

	var iteratorClose$2 = function iteratorClose(iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$4(iterator);

	  try {
	    innerResult = getMethod(iterator, 'return');

	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }

	    innerResult = call$8(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }

	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$4(innerResult);
	  return value;
	};

	var bind$4 = functionBindContext;
	var call$7 = functionCall;
	var anObject$3 = anObject$d;
	var tryToString$1 = tryToString$5;
	var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
	var lengthOfArrayLike$1 = lengthOfArrayLike$7;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var getIterator$1 = getIterator$2;
	var getIteratorMethod$1 = getIteratorMethod$3;
	var iteratorClose$1 = iteratorClose$2;
	var $TypeError$3 = TypeError;

	var Result = function Result(stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var ResultPrototype = Result.prototype;

	var iterate$5 = function iterate(iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind$4(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function stop(condition) {
	    if (iterator) iteratorClose$1(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };

	  var callFn = function callFn(value) {
	    if (AS_ENTRIES) {
	      anObject$3(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    }

	    return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod$1(iterable);
	    if (!iterFn) throw $TypeError$3(tryToString$1(iterable) + ' is not iterable'); // optimisation for array iterators

	    if (isArrayIteratorMethod$1(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf$2(ResultPrototype, result)) return result;
	      }

	      return new Result(false);
	    }

	    iterator = getIterator$1(iterable, iterFn);
	  }

	  next = iterator.next;

	  while (!(step = call$7(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose$1(iterator, 'throw', error);
	    }

	    if (_typeof(result) == 'object' && result && isPrototypeOf$2(ResultPrototype, result)) return result;
	  }

	  return new Result(false);
	};

	var toString = toString$4;

	var normalizeStringArgument$1 = function normalizeStringArgument(argument, $default) {
	  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
	};

	var fails$2 = fails$o;
	var createPropertyDescriptor$1 = createPropertyDescriptor$7;
	var errorStackInstallable = !fails$2(function () {
	  var error = Error('a');
	  if (!('stack' in error)) return true; // eslint-disable-next-line es-x/no-object-defineproperty -- safe

	  _Object$defineProperty(error, 'stack', createPropertyDescriptor$1(1, 7));

	  return error.stack !== 7;
	});

	var $$d = _export;
	var isPrototypeOf$1 = objectIsPrototypeOf;
	var getPrototypeOf = objectGetPrototypeOf;
	var setPrototypeOf = objectSetPrototypeOf;
	var copyConstructorProperties = copyConstructorProperties$1;
	var create = objectCreate;
	var createNonEnumerableProperty = createNonEnumerableProperty$7;
	var createPropertyDescriptor = createPropertyDescriptor$7;
	var clearErrorStack = clearErrorStack$1;
	var installErrorCause = installErrorCause$1;
	var iterate$4 = iterate$5;
	var normalizeStringArgument = normalizeStringArgument$1;
	var wellKnownSymbol$4 = wellKnownSymbol$c;
	var ERROR_STACK_INSTALLABLE = errorStackInstallable;
	var TO_STRING_TAG = wellKnownSymbol$4('toStringTag');
	var $Error = Error;
	var push = [].push;

	var $AggregateError = function AggregateError(errors, message
	/* , options */
	) {
	  var options = arguments.length > 2 ? arguments[2] : undefined;
	  var isInstance = isPrototypeOf$1(AggregateErrorPrototype, this);
	  var that;

	  if (setPrototypeOf) {
	    that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
	  } else {
	    that = isInstance ? this : create(AggregateErrorPrototype);
	    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
	  }

	  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
	  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(that, 'stack', clearErrorStack(that.stack, 1));
	  installErrorCause(that, options);
	  var errorsArray = [];
	  iterate$4(errors, push, {
	    that: errorsArray
	  });
	  createNonEnumerableProperty(that, 'errors', errorsArray);
	  return that;
	};

	if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);else copyConstructorProperties($AggregateError, $Error, {
	  name: true
	});
	var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
	  constructor: createPropertyDescriptor(1, $AggregateError),
	  message: createPropertyDescriptor(1, ''),
	  name: createPropertyDescriptor(1, 'AggregateError')
	}); // `AggregateError` constructor
	// https://tc39.es/ecma262/#sec-aggregate-error-constructor

	$$d({
	  global: true,
	  constructor: true,
	  arity: 2
	}, {
	  AggregateError: $AggregateError
	});

	var classof = classofRaw$1;
	var global$b = global$o;
	var engineIsNode = classof(global$b.process) == 'process';

	var getBuiltIn$3 = getBuiltIn$d;
	var definePropertyModule = objectDefineProperty;
	var wellKnownSymbol$3 = wellKnownSymbol$c;
	var DESCRIPTORS = descriptors;
	var SPECIES$2 = wellKnownSymbol$3('species');

	var setSpecies$1 = function setSpecies(CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);
	  var defineProperty = definePropertyModule.f;

	  if (DESCRIPTORS && Constructor && !Constructor[SPECIES$2]) {
	    defineProperty(Constructor, SPECIES$2, {
	      configurable: true,
	      get: function get() {
	        return this;
	      }
	    });
	  }
	};

	var isPrototypeOf = objectIsPrototypeOf;
	var $TypeError$2 = TypeError;

	var anInstance$1 = function anInstance(it, Prototype) {
	  if (isPrototypeOf(Prototype, it)) return it;
	  throw $TypeError$2('Incorrect invocation');
	};

	var isConstructor$1 = isConstructor$3;
	var tryToString = tryToString$5;
	var $TypeError$1 = TypeError; // `Assert: IsConstructor(argument) is true`

	var aConstructor$1 = function aConstructor(argument) {
	  if (isConstructor$1(argument)) return argument;
	  throw $TypeError$1(tryToString(argument) + ' is not a constructor');
	};

	var anObject$2 = anObject$d;
	var aConstructor = aConstructor$1;
	var wellKnownSymbol$2 = wellKnownSymbol$c;
	var SPECIES$1 = wellKnownSymbol$2('species'); // `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor

	var speciesConstructor$2 = function speciesConstructor(O, defaultConstructor) {
	  var C = anObject$2(O).constructor;
	  var S;
	  return C === undefined || (S = anObject$2(C)[SPECIES$1]) == undefined ? defaultConstructor : aConstructor(S);
	};

	var setTimeout$5 = {exports: {}};

	var setTimeout$4 = {exports: {}};

	var $TypeError = TypeError;

	var validateArgumentsLength$2 = function validateArgumentsLength(passed, required) {
	  if (passed < required) throw $TypeError('Not enough arguments');
	  return passed;
	};

	var global$a = global$o;
	var apply$1 = functionApply;
	var isCallable$4 = isCallable$k;
	var userAgent$3 = engineUserAgent;
	var arraySlice$1 = arraySlice$3;
	var validateArgumentsLength$1 = validateArgumentsLength$2;
	var MSIE = /MSIE .\./.test(userAgent$3); // <- dirty ie9- check

	var Function$2 = global$a.Function;

	var wrap = function wrap(scheduler) {
	  return MSIE ? function (handler, timeout
	  /* , ...arguments */
	  ) {
	    var boundArgs = validateArgumentsLength$1(arguments.length, 1) > 2;
	    var fn = isCallable$4(handler) ? handler : Function$2(handler);
	    var args = boundArgs ? arraySlice$1(arguments, 2) : undefined;
	    return scheduler(boundArgs ? function () {
	      apply$1(fn, this, args);
	    } : fn, timeout);
	  } : scheduler;
	}; // ie9- setTimeout & setInterval additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


	var schedulersFix = {
	  // `setTimeout` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
	  setTimeout: wrap(global$a.setTimeout),
	  // `setInterval` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
	  setInterval: wrap(global$a.setInterval)
	};

	var $$c = _export;
	var global$9 = global$o;
	var setInterval = schedulersFix.setInterval; // ie9- setInterval additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval

	$$c({
	  global: true,
	  bind: true,
	  forced: global$9.setInterval !== setInterval
	}, {
	  setInterval: setInterval
	});

	var $$b = _export;
	var global$8 = global$o;
	var setTimeout$3 = schedulersFix.setTimeout; // ie9- setTimeout additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout

	$$b({
	  global: true,
	  bind: true,
	  forced: global$8.setTimeout !== setTimeout$3
	}, {
	  setTimeout: setTimeout$3
	});

	var path$2 = path$m;
	var setTimeout$2 = path$2.setTimeout;

	var parent$7 = setTimeout$2;
	var setTimeout$1 = parent$7;

	var parent$6 = setTimeout$1;
	var setTimeout = parent$6;

	(function (module) {
	  module.exports = setTimeout;
	})(setTimeout$4);

	(function (module) {
	  module.exports = setTimeout$4.exports;
	})(setTimeout$5);

	var _setTimeout = /*@__PURE__*/getDefaultExportFromCjs(setTimeout$5.exports);

	var userAgent$2 = engineUserAgent;
	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

	var global$7 = global$o;
	var apply = functionApply;
	var bind$3 = functionBindContext;
	var isCallable$3 = isCallable$k;
	var hasOwn = hasOwnProperty_1;
	var fails$1 = fails$o;
	var html = html$2;
	var arraySlice = arraySlice$3;
	var createElement = documentCreateElement$1;
	var validateArgumentsLength = validateArgumentsLength$2;
	var IS_IOS$1 = engineIsIos;
	var IS_NODE$2 = engineIsNode;
	var set = global$7.setImmediate;
	var clear = global$7.clearImmediate;
	var process$2 = global$7.process;
	var Dispatch = global$7.Dispatch;
	var Function$1 = global$7.Function;
	var MessageChannel = global$7.MessageChannel;
	var String$1 = global$7.String;
	var counter = 0;
	var queue$1 = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var location, defer, channel, port;

	try {
	  // Deno throws a ReferenceError on `location` access without `--location` flag
	  location = global$7.location;
	} catch (error) {
	  /* empty */
	}

	var run = function run(id) {
	  if (hasOwn(queue$1, id)) {
	    var fn = queue$1[id];
	    delete queue$1[id];
	    fn();
	  }
	};

	var runner = function runner(id) {
	  return function () {
	    run(id);
	  };
	};

	var listener = function listener(event) {
	  run(event.data);
	};

	var post = function post(id) {
	  // old engines have not location.origin
	  global$7.postMessage(String$1(id), location.protocol + '//' + location.host);
	}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


	if (!set || !clear) {
	  set = function setImmediate(handler) {
	    validateArgumentsLength(arguments.length, 1);
	    var fn = isCallable$3(handler) ? handler : Function$1(handler);
	    var args = arraySlice(arguments, 1);

	    queue$1[++counter] = function () {
	      apply(fn, undefined, args);
	    };

	    defer(counter);
	    return counter;
	  };

	  clear = function clearImmediate(id) {
	    delete queue$1[id];
	  }; // Node.js 0.8-


	  if (IS_NODE$2) {
	    defer = function defer(id) {
	      process$2.nextTick(runner(id));
	    }; // Sphere (JS game engine) Dispatch API

	  } else if (Dispatch && Dispatch.now) {
	    defer = function defer(id) {
	      Dispatch.now(runner(id));
	    }; // Browsers with MessageChannel, includes WebWorkers
	    // except iOS - https://github.com/zloirock/core-js/issues/624

	  } else if (MessageChannel && !IS_IOS$1) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = bind$3(port.postMessage, port); // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global$7.addEventListener && isCallable$3(global$7.postMessage) && !global$7.importScripts && location && location.protocol !== 'file:' && !fails$1(post)) {
	    defer = post;
	    global$7.addEventListener('message', listener, false); // IE8-
	  } else if (ONREADYSTATECHANGE in createElement('script')) {
	    defer = function defer(id) {
	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    }; // Rest old browsers

	  } else {
	    defer = function defer(id) {
	      _setTimeout(runner(id), 0);
	    };
	  }
	}

	var task$1 = {
	  set: set,
	  clear: clear
	};

	var userAgent$1 = engineUserAgent;
	var global$6 = global$o;
	var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && global$6.Pebble !== undefined;

	var userAgent = engineUserAgent;
	var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

	var global$5 = global$o;
	var bind$2 = functionBindContext;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var macrotask = task$1.set;
	var IS_IOS = engineIsIos;
	var IS_IOS_PEBBLE = engineIsIosPebble;
	var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
	var IS_NODE$1 = engineIsNode;
	var MutationObserver = global$5.MutationObserver || global$5.WebKitMutationObserver;
	var document$2 = global$5.document;
	var process$1 = global$5.process;
	var Promise$1 = global$5.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

	var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$5, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
	var flush, head, last, notify$1, toggle, node, promise$4, then; // modern engines have queueMicrotask method

	if (!queueMicrotask) {
	  flush = function flush() {
	    var parent, fn;
	    if (IS_NODE$1 && (parent = process$1.domain)) parent.exit();

	    while (head) {
	      fn = head.fn;
	      head = head.next;

	      try {
	        fn();
	      } catch (error) {
	        if (head) notify$1();else last = undefined;
	        throw error;
	      }
	    }

	    last = undefined;
	    if (parent) parent.enter();
	  }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


	  if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
	    toggle = true;
	    node = document$2.createTextNode('');
	    new MutationObserver(flush).observe(node, {
	      characterData: true
	    });

	    notify$1 = function notify() {
	      node.data = toggle = !toggle;
	    }; // environments with maybe non-completely correct, but existent Promise

	  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise$4 = Promise$1.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug

	    promise$4.constructor = Promise$1;
	    then = bind$2(promise$4.then, promise$4);

	    notify$1 = function notify() {
	      then(flush);
	    }; // Node.js without promises

	  } else if (IS_NODE$1) {
	    notify$1 = function notify() {
	      process$1.nextTick(flush);
	    }; // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessage
	    // - onreadystatechange
	    // - setTimeout

	  } else {
	    // strange IE + webpack dev server bug - use .bind(global)
	    macrotask = bind$2(macrotask, global$5);

	    notify$1 = function notify() {
	      macrotask(flush);
	    };
	  }
	}

	var microtask$1 = queueMicrotask || function (fn) {
	  var task = {
	    fn: fn,
	    next: undefined
	  };
	  if (last) last.next = task;

	  if (!head) {
	    head = task;
	    notify$1();
	  }

	  last = task;
	};

	var global$4 = global$o;

	var hostReportErrors$1 = function hostReportErrors(a, b) {
	  var console = global$4.console;

	  if (console && console.error) {
	    arguments.length == 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform$6 = function perform(exec) {
	  try {
	    return {
	      error: false,
	      value: exec()
	    };
	  } catch (error) {
	    return {
	      error: true,
	      value: error
	    };
	  }
	};

	var Queue$1 = function Queue() {
	  this.head = null;
	  this.tail = null;
	};

	Queue$1.prototype = {
	  add: function add(item) {
	    var entry = {
	      item: item,
	      next: null
	    };
	    if (this.head) this.tail.next = entry;else this.head = entry;
	    this.tail = entry;
	  },
	  get: function get() {
	    var entry = this.head;

	    if (entry) {
	      this.head = entry.next;
	      if (this.tail === entry) this.tail = null;
	      return entry.item;
	    }
	  }
	};
	var queue = Queue$1;

	var global$3 = global$o;
	var promiseNativeConstructor = global$3.Promise;

	var engineIsBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && (typeof Deno === "undefined" ? "undefined" : _typeof(Deno)) != 'object';

	var global$2 = global$o;
	var NativePromiseConstructor$5 = promiseNativeConstructor;
	var isCallable$2 = isCallable$k;
	var isForced = isForced_1;
	var inspectSource = inspectSource$3;
	var wellKnownSymbol$1 = wellKnownSymbol$c;
	var IS_BROWSER = engineIsBrowser;
	var V8_VERSION = engineV8Version;
	var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
	var SPECIES = wellKnownSymbol$1('species');
	var SUBCLASSING = false;
	var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$2(global$2.PromiseRejectionEvent);
	var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$5);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$5); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	  // We can't detect it synchronously, so just check versions

	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true; // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution

	  if (!(NativePromisePrototype$2['catch'] && NativePromisePrototype$2['finally'])) return true; // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679

	  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false; // Detect correctness of subclassing with @@species support

	  var promise = new NativePromiseConstructor$5(function (resolve) {
	    resolve(1);
	  });

	  var FakePromise = function FakePromise(exec) {
	    exec(function () {
	      /* empty */
	    }, function () {
	      /* empty */
	    });
	  };

	  var constructor = promise.constructor = {};
	  constructor[SPECIES] = FakePromise;
	  SUBCLASSING = promise.then(function () {
	    /* empty */
	  }) instanceof FakePromise;
	  if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

	  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_PROMISE_REJECTION_EVENT$1;
	});
	var promiseConstructorDetection = {
	  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
	  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
	  SUBCLASSING: SUBCLASSING
	};

	var newPromiseCapability$2 = {};

	var aCallable$5 = aCallable$b;

	var PromiseCapability = function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable$5(resolve);
	  this.reject = aCallable$5(reject);
	}; // `NewPromiseCapability` abstract operation
	// https://tc39.es/ecma262/#sec-newpromisecapability


	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var $$a = _export;
	var IS_NODE = engineIsNode;
	var global$1 = global$o;
	var call$6 = functionCall;
	var defineBuiltIn = defineBuiltIn$5;
	var setToStringTag = setToStringTag$6;
	var setSpecies = setSpecies$1;
	var aCallable$4 = aCallable$b;
	var isCallable$1 = isCallable$k;
	var isObject$1 = isObject$d;
	var anInstance = anInstance$1;
	var speciesConstructor$1 = speciesConstructor$2;
	var task = task$1.set;
	var microtask = microtask$1;
	var hostReportErrors = hostReportErrors$1;
	var perform$5 = perform$6;
	var Queue = queue;
	var InternalStateModule = internalState;
	var NativePromiseConstructor$4 = promiseNativeConstructor;
	var PromiseConstructorDetection = promiseConstructorDetection;
	var newPromiseCapabilityModule$6 = newPromiseCapability$2;
	var PROMISE = 'Promise';
	var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
	var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
	var setInternalState = InternalStateModule.set;
	var NativePromisePrototype$1 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
	var PromiseConstructor = NativePromiseConstructor$4;
	var PromisePrototype = NativePromisePrototype$1;
	var TypeError$1 = global$1.TypeError;
	var document$1 = global$1.document;
	var process = global$1.process;
	var newPromiseCapability$1 = newPromiseCapabilityModule$6.f;
	var newGenericPromiseCapability = newPromiseCapability$1;
	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$1.dispatchEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var Internal, OwnPromiseCapability, PromiseWrapper; // helpers

	var isThenable = function isThenable(it) {
	  var then;
	  return isObject$1(it) && isCallable$1(then = it.then) ? then : false;
	};

	var callReaction = function callReaction(reaction, state) {
	  var value = state.value;
	  var ok = state.state == FULFILLED;
	  var handler = ok ? reaction.ok : reaction.fail;
	  var resolve = reaction.resolve;
	  var reject = reaction.reject;
	  var domain = reaction.domain;
	  var result, then, exited;

	  try {
	    if (handler) {
	      if (!ok) {
	        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	        state.rejection = HANDLED;
	      }

	      if (handler === true) result = value;else {
	        if (domain) domain.enter();
	        result = handler(value); // can throw

	        if (domain) {
	          domain.exit();
	          exited = true;
	        }
	      }

	      if (result === reaction.promise) {
	        reject(TypeError$1('Promise-chain cycle'));
	      } else if (then = isThenable(result)) {
	        call$6(then, result, resolve, reject);
	      } else resolve(result);
	    } else reject(value);
	  } catch (error) {
	    if (domain && !exited) domain.exit();
	    reject(error);
	  }
	};

	var notify = function notify(state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  microtask(function () {
	    var reactions = state.reactions;
	    var reaction;

	    while (reaction = reactions.get()) {
	      callReaction(reaction, state);
	    }

	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};

	var dispatchEvent = function dispatchEvent(name, promise, reason) {
	  var event, handler;

	  if (DISPATCH_EVENT) {
	    event = document$1.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global$1.dispatchEvent(event);
	  } else event = {
	    promise: promise,
	    reason: reason
	  };

	  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$1['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function onUnhandled(state) {
	  call$6(task, global$1, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;

	    if (IS_UNHANDLED) {
	      result = perform$5(function () {
	        if (IS_NODE) {
	          process.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function isUnhandled(state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function onHandleUnhandled(state) {
	  call$6(task, global$1, function () {
	    var promise = state.facade;

	    if (IS_NODE) {
	      process.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind$1 = function bind(fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};

	var internalReject = function internalReject(state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(state, true);
	};

	var internalResolve = function internalResolve(state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;

	  try {
	    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
	    var then = isThenable(value);

	    if (then) {
	      microtask(function () {
	        var wrapper = {
	          done: false
	        };

	        try {
	          call$6(then, value, bind$1(internalResolve, wrapper, state), bind$1(internalReject, wrapper, state));
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(state, false);
	    }
	  } catch (error) {
	    internalReject({
	      done: false
	    }, error, state);
	  }
	}; // constructor polyfill


	if (FORCED_PROMISE_CONSTRUCTOR$4) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance(this, PromisePrototype);
	    aCallable$4(executor);
	    call$6(Internal, this);
	    var state = getInternalPromiseState(this);

	    try {
	      executor(bind$1(internalResolve, state), bind$1(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };

	  PromisePrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

	  Internal = function Promise(executor) {
	    setInternalState(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: new Queue(),
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  }; // `Promise.prototype.then` method
	  // https://tc39.es/ecma262/#sec-promise.prototype.then


	  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
	    var state = getInternalPromiseState(this);
	    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
	    state.parent = true;
	    reaction.ok = isCallable$1(onFulfilled) ? onFulfilled : true;
	    reaction.fail = isCallable$1(onRejected) && onRejected;
	    reaction.domain = IS_NODE ? process.domain : undefined;
	    if (state.state == PENDING) state.reactions.add(reaction);else microtask(function () {
	      callReaction(reaction, state);
	    });
	    return reaction.promise;
	  });

	  OwnPromiseCapability = function OwnPromiseCapability() {
	    var promise = new Internal();
	    var state = getInternalPromiseState(promise);
	    this.promise = promise;
	    this.resolve = bind$1(internalResolve, state);
	    this.reject = bind$1(internalReject, state);
	  };

	  newPromiseCapabilityModule$6.f = newPromiseCapability$1 = function newPromiseCapability(C) {
	    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
	  };
	}

	$$a({
	  global: true,
	  constructor: true,
	  wrap: true,
	  forced: FORCED_PROMISE_CONSTRUCTOR$4
	}, {
	  Promise: PromiseConstructor
	});
	setToStringTag(PromiseConstructor, PROMISE, false, true);
	setSpecies(PROMISE);

	var from$6 = {exports: {}};

	var from$5 = {exports: {}};

	var anObject$1 = anObject$d;
	var iteratorClose = iteratorClose$2; // call something on iterator step with safe closing on error

	var callWithSafeIterationClosing$1 = function callWithSafeIterationClosing(iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$1(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose(iterator, 'throw', error);
	  }
	};

	var bind = functionBindContext;
	var call$5 = functionCall;
	var toObject = toObject$8;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
	var isArrayIteratorMethod = isArrayIteratorMethod$2;
	var isConstructor = isConstructor$3;
	var lengthOfArrayLike = lengthOfArrayLike$7;
	var createProperty = createProperty$4;
	var getIterator = getIterator$2;
	var getIteratorMethod = getIteratorMethod$3;
	var $Array = Array; // `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from

	var arrayFrom = function from(arrayLike
	/* , mapfn = undefined, thisArg = undefined */
	) {
	  var O = toObject(arrayLike);
	  var IS_CONSTRUCTOR = isConstructor(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value; // if the target is not iterable or it's an array with the default iterator - use a simple case

	  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = getIterator(O, iteratorMethod);
	    next = iterator.next;
	    result = IS_CONSTRUCTOR ? new this() : [];

	    for (; !(step = call$5(next, iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty(result, index, value);
	    }
	  } else {
	    length = lengthOfArrayLike(O);
	    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);

	    for (; length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty(result, index, value);
	    }
	  }

	  result.length = index;
	  return result;
	};

	var $$9 = _export;
	var from$4 = arrayFrom;
	var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$1;
	var INCORRECT_ITERATION = !checkCorrectnessOfIteration$2(function (iterable) {
	  // eslint-disable-next-line es-x/no-array-from -- required for testing
	  _Array$from(iterable);
	}); // `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from

	$$9({
	  target: 'Array',
	  stat: true,
	  forced: INCORRECT_ITERATION
	}, {
	  from: from$4
	});

	var path$1 = path$m;
	var from$3 = path$1.Array.from;

	var parent$5 = from$3;
	var from$2 = parent$5;

	var parent$4 = from$2;
	var from$1 = parent$4;

	var parent$3 = from$1;
	var from = parent$3;

	(function (module) {
	  module.exports = from;
	})(from$5);

	(function (module) {
	  module.exports = from$5.exports;
	})(from$6);

	var _Array$from = /*@__PURE__*/getDefaultExportFromCjs(from$6.exports);

	var wellKnownSymbol = wellKnownSymbol$c;
	var ITERATOR = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function next() {
	      return {
	        done: !!called++
	      };
	    },
	    'return': function _return() {
	      SAFE_CLOSING = true;
	    }
	  };

	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  }; // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing


	  _Array$from(iteratorWithReturn, function () {
	    throw 2;
	  });
	} catch (error) {
	  /* empty */
	}

	var checkCorrectnessOfIteration$1 = function checkCorrectnessOfIteration(exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;

	  try {
	    var object = {};

	    object[ITERATOR] = function () {
	      return {
	        next: function next() {
	          return {
	            done: ITERATION_SUPPORT = true
	          };
	        }
	      };
	    };

	    exec(object);
	  } catch (error) {
	    /* empty */
	  }

	  return ITERATION_SUPPORT;
	};

	var NativePromiseConstructor$3 = promiseNativeConstructor;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
	var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
	var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
	  NativePromiseConstructor$3.all(iterable).then(undefined, function () {
	    /* empty */
	  });
	});

	var $$8 = _export;
	var call$4 = functionCall;
	var aCallable$3 = aCallable$b;
	var newPromiseCapabilityModule$5 = newPromiseCapability$2;
	var perform$4 = perform$6;
	var iterate$3 = iterate$5;
	var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration; // `Promise.all` method
	// https://tc39.es/ecma262/#sec-promise.all

	$$8({
	  target: 'Promise',
	  stat: true,
	  forced: PROMISE_STATICS_INCORRECT_ITERATION$1
	}, {
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$5.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$4(function () {
	      var $promiseResolve = aCallable$3(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$3(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$4($promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$7 = _export;
	var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
	var NativePromiseConstructor$2 = promiseNativeConstructor;
	NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype; // `Promise.prototype.catch` method
	// https://tc39.es/ecma262/#sec-promise.prototype.catch

	$$7({
	  target: 'Promise',
	  proto: true,
	  forced: FORCED_PROMISE_CONSTRUCTOR$2,
	  real: true
	}, {
	  'catch': function _catch(onRejected) {
	    return this.then(undefined, onRejected);
	  }
	}); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

	var $$6 = _export;
	var call$3 = functionCall;
	var aCallable$2 = aCallable$b;
	var newPromiseCapabilityModule$4 = newPromiseCapability$2;
	var perform$3 = perform$6;
	var iterate$2 = iterate$5;
	var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration; // `Promise.race` method
	// https://tc39.es/ecma262/#sec-promise.race

	$$6({
	  target: 'Promise',
	  stat: true,
	  forced: PROMISE_STATICS_INCORRECT_ITERATION
	}, {
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$4.f(C);
	    var reject = capability.reject;
	    var result = perform$3(function () {
	      var $promiseResolve = aCallable$2(C.resolve);
	      iterate$2(iterable, function (promise) {
	        call$3($promiseResolve, C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$5 = _export;
	var call$2 = functionCall;
	var newPromiseCapabilityModule$3 = newPromiseCapability$2;
	var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR; // `Promise.reject` method
	// https://tc39.es/ecma262/#sec-promise.reject

	$$5({
	  target: 'Promise',
	  stat: true,
	  forced: FORCED_PROMISE_CONSTRUCTOR$1
	}, {
	  reject: function reject(r) {
	    var capability = newPromiseCapabilityModule$3.f(this);
	    call$2(capability.reject, undefined, r);
	    return capability.promise;
	  }
	});

	var anObject = anObject$d;
	var isObject = isObject$d;
	var newPromiseCapability = newPromiseCapability$2;

	var promiseResolve$2 = function promiseResolve(C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var $$4 = _export;
	var getBuiltIn$2 = getBuiltIn$d;
	var IS_PURE = isPure;
	var NativePromiseConstructor$1 = promiseNativeConstructor;
	var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
	var promiseResolve$1 = promiseResolve$2;
	var PromiseConstructorWrapper = getBuiltIn$2('Promise');
	var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR; // `Promise.resolve` method
	// https://tc39.es/ecma262/#sec-promise.resolve

	$$4({
	  target: 'Promise',
	  stat: true,
	  forced: IS_PURE 
	}, {
	  resolve: function resolve(x) {
	    return promiseResolve$1(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
	  }
	});

	var $$3 = _export;
	var call$1 = functionCall;
	var aCallable$1 = aCallable$b;
	var newPromiseCapabilityModule$2 = newPromiseCapability$2;
	var perform$2 = perform$6;
	var iterate$1 = iterate$5; // `Promise.allSettled` method
	// https://tc39.es/ecma262/#sec-promise.allsettled

	$$3({
	  target: 'Promise',
	  stat: true
	}, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$2.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$2(function () {
	      var promiseResolve = aCallable$1(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$1(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$1(promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = {
	            status: 'fulfilled',
	            value: value
	          };
	          --remaining || resolve(values);
	        }, function (error) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = {
	            status: 'rejected',
	            reason: error
	          };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$2 = _export;
	var call = functionCall;
	var aCallable = aCallable$b;
	var getBuiltIn$1 = getBuiltIn$d;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;
	var perform$1 = perform$6;
	var iterate = iterate$5;
	var PROMISE_ANY_ERROR = 'No one promise resolved'; // `Promise.any` method
	// https://tc39.es/ecma262/#sec-promise.any

	$$2({
	  target: 'Promise',
	  stat: true
	}, {
	  any: function any(iterable) {
	    var C = this;
	    var AggregateError = getBuiltIn$1('AggregateError');
	    var capability = newPromiseCapabilityModule$1.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$1(function () {
	      var promiseResolve = aCallable(C.resolve);
	      var errors = [];
	      var counter = 0;
	      var remaining = 1;
	      var alreadyResolved = false;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyRejected = false;
	        remaining++;
	        call(promiseResolve, C, promise).then(function (value) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyResolved = true;
	          resolve(value);
	        }, function (error) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyRejected = true;
	          errors[index] = error;
	          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	        });
	      });
	      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$1 = _export;
	var NativePromiseConstructor = promiseNativeConstructor;
	var fails = fails$o;
	var getBuiltIn = getBuiltIn$d;
	var isCallable = isCallable$k;
	var speciesConstructor = speciesConstructor$2;
	var promiseResolve = promiseResolve$2;
	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype; // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829

	var NON_GENERIC = !!NativePromiseConstructor && fails(function () {
	  // eslint-disable-next-line unicorn/no-thenable -- required for testing
	  NativePromisePrototype['finally'].call({
	    then: function then() {
	      /* empty */
	    }
	  }, function () {
	    /* empty */
	  });
	}); // `Promise.prototype.finally` method
	// https://tc39.es/ecma262/#sec-promise.prototype.finally

	$$1({
	  target: 'Promise',
	  proto: true,
	  real: true,
	  forced: NON_GENERIC
	}, {
	  'finally': function _finally(onFinally) {
	    var C = speciesConstructor(this, getBuiltIn('Promise'));
	    var isFunction = isCallable(onFinally);
	    return this.then(isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () {
	        return x;
	      });
	    } : onFinally, isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () {
	        throw e;
	      });
	    } : onFinally);
	  }
	}); // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`

	var path = path$m;
	var promise$3 = path.Promise;

	var parent$2 = promise$3;
	var promise$2 = parent$2;

	var parent$1 = promise$2;
	var promise$1 = parent$1;

	var $ = _export;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var perform = perform$6; // `Promise.try` method
	// https://github.com/tc39/proposal-promise-try

	$({
	  target: 'Promise',
	  stat: true,
	  forced: true
	}, {
	  'try': function _try(callbackfn) {
	    var promiseCapability = newPromiseCapabilityModule.f(this);
	    var result = perform(callbackfn);
	    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
	    return promiseCapability.promise;
	  }
	});

	var parent = promise$1; // TODO: Remove from `core-js@4`

	var promise = parent;

	(function (module) {
	  module.exports = promise;
	})(promise$5);

	(function (module) {
	  module.exports = promise$5.exports;
	})(promise$6);

	var _Promise = /*@__PURE__*/getDefaultExportFromCjs(promise$6.exports);

	var foo = function foo() {
	  return new _Promise(function (res) {
	    return res(1);
	  });
	};

	console.log(foo());

	exports.foo = foo;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({});
