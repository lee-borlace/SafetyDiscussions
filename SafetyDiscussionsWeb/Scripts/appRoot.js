/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(2);
	const AddDiscussion_1 = __webpack_require__(3);
	// Polyfill Promise.
	const es6_promise_1 = __webpack_require__(49);
	es6_promise_1.polyfill();
	ReactDOM.render(React.createElement(AddDiscussion_1.AddDiscussion, null), document.getElementById('reactRoot'));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(1);
	const Button_1 = __webpack_require__(4);
	const Dialog_1 = __webpack_require__(17);
	class AddDiscussion extends React.Component {
	    constructor() {
	        super();
	        this.state = {
	            showDialog: false
	        };
	    }
	    // Main renderer.
	    render() {
	        return (React.createElement("div", null,
	            React.createElement(Button_1.Button, { description: 'Opens the dialog to create a discussion', onClick: this.showDialog.bind(this) }, "Add Safety Discussion"),
	            React.createElement(Dialog_1.Dialog, { isOpen: this.state.showDialog, type: Dialog_1.DialogType.close, onDismiss: this.closeDialog.bind(this), title: 'Add Discussion', subText: 'Please enter the details for the safety discussion.', isBlocking: false, closeButtonAriaLabel: 'Close' },
	                "Form goes here...",
	                React.createElement(Dialog_1.DialogFooter, null,
	                    React.createElement(Button_1.Button, { buttonType: Button_1.ButtonType.primary, onClick: this.closeDialog.bind(this) }, "Save"),
	                    React.createElement(Button_1.Button, { onClick: this.closeDialog.bind(this) }, "Cancel")))));
	    }
	    showDialog() {
	        this.setState({ showDialog: true });
	    }
	    closeDialog() {
	        this.setState({ showDialog: false });
	    }
	}
	exports.AddDiscussion = AddDiscussion;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(5));
	


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(6));
	__export(__webpack_require__(10));
	


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var object_1 = __webpack_require__(8);
	var Button_Props_1 = __webpack_require__(10);
	var object_2 = __webpack_require__(8);
	var properties_1 = __webpack_require__(11);
	var BaseComponent_1 = __webpack_require__(12);
	__webpack_require__(15);
	var Button = (function (_super) {
	    __extends(Button, _super);
	    function Button(props) {
	        var _this = _super.call(this, props, { 'rootProps': null }) || this;
	        _this.state = {
	            labelId: object_2.getId('Button'),
	            descriptionId: object_2.getId('Button'),
	            ariaDescriptionId: object_2.getId('Button')
	        };
	        return _this;
	    }
	    Button.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, buttonType = _a.buttonType, children = _a.children, icon = _a.icon, description = _a.description, ariaLabel = _a.ariaLabel, ariaDescription = _a.ariaDescription, href = _a.href, disabled = _a.disabled, onClick = _a.onClick;
	        var _b = this.state, labelId = _b.labelId, descriptionId = _b.descriptionId, ariaDescriptionId = _b.ariaDescriptionId;
	        var renderAsAnchor = !!href;
	        var tag = renderAsAnchor ? 'a' : 'button';
	        var nativeProps = properties_1.getNativeProps(this.props.rootProps || this.props, renderAsAnchor ? properties_1.anchorProperties : properties_1.buttonProperties);
	        var className = css_1.css((this.props.className), 'ms-Button', {
	            'ms-Button--primary': buttonType === Button_Props_1.ButtonType.primary,
	            'ms-Button--hero': buttonType === Button_Props_1.ButtonType.hero,
	            'ms-Button--compound': buttonType === Button_Props_1.ButtonType.compound,
	            'ms-Button--command': buttonType === Button_Props_1.ButtonType.command,
	            'ms-Button--icon': buttonType === Button_Props_1.ButtonType.icon,
	            'disabled': (renderAsAnchor && disabled) // add disable styling if it is an anchor
	        });
	        var iconSpan = icon && (buttonType === Button_Props_1.ButtonType.command || buttonType === Button_Props_1.ButtonType.hero || buttonType === Button_Props_1.ButtonType.icon)
	            ? React.createElement("span", { className: 'ms-Button-icon' },
	                React.createElement("i", { className: "ms-Icon ms-Icon--" + icon }))
	            : null;
	        // ms-Button-description is only shown when the button type is compound.
	        // In other cases it will not be displayed.
	        var descriptionSpan = description
	            ? React.createElement("span", { className: 'ms-Button-description', id: descriptionId }, description)
	            : null;
	        // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
	        // otherwise it will be assigned to descriptionSpan.
	        var ariaDescriptionSpan = ariaDescription
	            ? React.createElement("span", { className: 'ms-u-screenReaderOnly', id: ariaDescriptionId }, ariaDescription)
	            : null;
	        // Check for ariaDescription, description or aria-describedby in the native props to determine source of aria-describedby
	        // otherwise default to null.
	        var ariaDescribedBy;
	        if (ariaDescription) {
	            ariaDescribedBy = ariaDescriptionId;
	        }
	        else if (description) {
	            ariaDescribedBy = descriptionId;
	        }
	        else if (nativeProps['aria-describedby']) {
	            ariaDescribedBy = nativeProps['aria-describedby'];
	        }
	        else {
	            ariaDescribedBy = null;
	        }
	        return React.createElement(tag, object_1.assign({}, nativeProps, href ? { href: href } : null, {
	            'aria-label': ariaLabel,
	            'aria-labelledby': ariaLabel ? null : labelId,
	            'aria-describedby': ariaDescribedBy,
	            'ref': function (c) { return _this._buttonElement = c; }
	        }, onClick && { 'onClick': onClick }, disabled && { 'disabled': disabled }, { className: className }), iconSpan, React.createElement("span", { className: 'ms-Button-label', id: labelId }, children), descriptionSpan, ariaDescriptionSpan);
	    };
	    Button.prototype.focus = function () {
	        if (this._buttonElement) {
	            this._buttonElement.focus();
	        }
	    };
	    return Button;
	}(BaseComponent_1.BaseComponent));
	Button.defaultProps = {
	    buttonType: Button_Props_1.ButtonType.normal
	};
	exports.Button = Button;
	


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	function css() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    var classes = [];
	    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	        var arg = args_1[_a];
	        if (arg) {
	            if (typeof arg === 'string') {
	                classes.push(arg);
	            }
	            else {
	                for (var key in arg) {
	                    if (arg[key]) {
	                        classes.push(key);
	                    }
	                }
	            }
	        }
	    }
	    return classes.join(' ');
	}
	exports.css = css;
	


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	// Initialize global window id.
	var CURRENT_ID_PROPERTY = '__currentId__';
	var _global = (typeof window !== 'undefined' && window) || process;
	if (_global[CURRENT_ID_PROPERTY] === undefined) {
	    _global[CURRENT_ID_PROPERTY] = 0;
	}
	function checkProperties(a, b) {
	    for (var propName in a) {
	        if (a.hasOwnProperty(propName)) {
	            if (!b.hasOwnProperty(propName) || (b[propName] !== a[propName])) {
	                return false;
	            }
	        }
	    }
	    return true;
	}
	// Compare a to b and b to a
	function shallowCompare(a, b) {
	    return checkProperties(a, b) && checkProperties(b, a);
	}
	exports.shallowCompare = shallowCompare;
	/**
	 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
	 * objects as arguments and they will be merged sequentially into the target. Note that this will
	 * shallow merge; it will not create new cloned values for target members.
	 *
	 * @params target {Object} Target object to merge following object arguments into.
	 * @params args {Object} One or more objects that will be mixed into the target in the order they are provided.
	 * @returns Resulting merged target.
	 */
	function assign(target) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    return filteredAssign.apply(this, [null, target].concat(args));
	}
	exports.assign = assign;
	/**
	 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
	 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
	 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
	 * values for target members.
	 *
	 * @params filteredAssign {Function} A callback function that tests if the property should be assigned.
	 * @params target {Object} Target object to merge following object arguments into.
	 * @params args {Object} One or more objects that will be mixed into the target in the order they are provided.
	 * @returns Resulting merged target.
	 */
	function filteredAssign(isAllowed, target) {
	    var args = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        args[_i - 2] = arguments[_i];
	    }
	    target = target || {};
	    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	        var sourceObject = args_1[_a];
	        if (sourceObject) {
	            for (var propName in sourceObject) {
	                if (sourceObject.hasOwnProperty(propName) &&
	                    !isAllowed || isAllowed(propName)) {
	                    target[propName] = sourceObject[propName];
	                }
	            }
	        }
	    }
	    return target;
	}
	exports.filteredAssign = filteredAssign;
	/** Generates a unique id in the global scope (this spans across duplicate copies of the same library.) */
	function getId(prefix) {
	    var index = _global[CURRENT_ID_PROPERTY]++;
	    return (prefix || '') + index;
	}
	exports.getId = getId;
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	var ElementType;
	(function (ElementType) {
	    /** <button> element. */
	    ElementType[ElementType["button"] = 0] = "button";
	    /** <a> element. */
	    ElementType[ElementType["anchor"] = 1] = "anchor";
	})(ElementType = exports.ElementType || (exports.ElementType = {}));
	var ButtonType;
	(function (ButtonType) {
	    ButtonType[ButtonType["normal"] = 0] = "normal";
	    ButtonType[ButtonType["primary"] = 1] = "primary";
	    ButtonType[ButtonType["hero"] = 2] = "hero";
	    ButtonType[ButtonType["compound"] = 3] = "compound";
	    ButtonType[ButtonType["command"] = 4] = "command";
	    ButtonType[ButtonType["icon"] = 5] = "icon";
	})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
	


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var object_1 = __webpack_require__(8);
	exports.baseElementEvents = [
	    'onCopy',
	    'onCut',
	    'onPaste',
	    'onCompositionEnd',
	    'onCompositionStart',
	    'onCompositionUpdate',
	    'onFocus',
	    'onFocusCapture',
	    'onBlur',
	    'onBlurCapture',
	    'onChange',
	    'onInput',
	    'onSubmit',
	    'onLoad',
	    'onError',
	    'onKeyDown',
	    'onKeyDownCapture',
	    'onKeyPress',
	    'onKeyUp',
	    'onAbort',
	    'onCanPlay',
	    'onCanPlayThrough',
	    'onDurationChange',
	    'onEmptied',
	    'onEncrypted',
	    'onEnded',
	    'onLoadedData',
	    'onLoadedMetadata',
	    'onLoadStart',
	    'onPause',
	    'onPlay',
	    'onPlaying',
	    'onProgress',
	    'onRateChange',
	    'onSeeked',
	    'onSeeking',
	    'onStalled',
	    'onSuspend',
	    'onTimeUpdate',
	    'onVolumeChange',
	    'onWaiting',
	    'onClick',
	    'onClickCapture',
	    'onContextMenu',
	    'onDoubleClick',
	    'onDrag',
	    'onDragEnd',
	    'onDragEnter',
	    'onDragExit',
	    'onDragLeave',
	    'onDragOver',
	    'onDragStart',
	    'onDrop',
	    'onMouseDown',
	    'onMouseDownCapture',
	    'onMouseEnter',
	    'onMouseLeave',
	    'onMouseMove',
	    'onMouseOut',
	    'onMouseOver',
	    'onMouseUp',
	    'onMouseUpCapture',
	    'onSelect',
	    'onTouchCancel',
	    'onTouchEnd',
	    'onTouchMove',
	    'onTouchStart',
	    'onScroll',
	    'onWheel'
	];
	exports.baseElementProperties = [
	    'defaultChecked',
	    'defaultValue',
	    'accept',
	    'acceptCharset',
	    'accessKey',
	    'action',
	    'allowFullScreen',
	    'allowTransparency',
	    'alt',
	    'async',
	    'autoComplete',
	    'autoFocus',
	    'autoPlay',
	    'capture',
	    'cellPadding',
	    'cellSpacing',
	    'charSet',
	    'challenge',
	    'checked',
	    'children',
	    'classID',
	    'className',
	    'cols',
	    'colSpan',
	    'content',
	    'contentEditable',
	    'contextMenu',
	    'controls',
	    'coords',
	    'crossOrigin',
	    'data',
	    'dateTime',
	    'default',
	    'defer',
	    'dir',
	    'download',
	    'draggable',
	    'encType',
	    'form',
	    'formAction',
	    'formEncType',
	    'formMethod',
	    'formNoValidate',
	    'formTarget',
	    'frameBorder',
	    'headers',
	    'height',
	    'hidden',
	    'high',
	    'hrefLang',
	    'htmlFor',
	    'httpEquiv',
	    'icon',
	    'id',
	    'inputMode',
	    'integrity',
	    'is',
	    'keyParams',
	    'keyType',
	    'kind',
	    'label',
	    'lang',
	    'list',
	    'loop',
	    'low',
	    'manifest',
	    'marginHeight',
	    'marginWidth',
	    'max',
	    'maxLength',
	    'media',
	    'mediaGroup',
	    'method',
	    'min',
	    'minLength',
	    'multiple',
	    'muted',
	    'name',
	    'noValidate',
	    'open',
	    'optimum',
	    'pattern',
	    'placeholder',
	    'poster',
	    'preload',
	    'radioGroup',
	    'readOnly',
	    'rel',
	    'required',
	    'role',
	    'rows',
	    'rowSpan',
	    'sandbox',
	    'scope',
	    'scoped',
	    'scrolling',
	    'seamless',
	    'selected',
	    'shape',
	    'size',
	    'sizes',
	    'span',
	    'spellCheck',
	    'src',
	    'srcDoc',
	    'srcLang',
	    'srcSet',
	    'start',
	    'step',
	    'style',
	    'summary',
	    'tabIndex',
	    'title',
	    'type',
	    'useMap',
	    'value',
	    'width',
	    'wmode',
	    'wrap'
	];
	exports.htmlElementProperties = exports.baseElementProperties.concat(exports.baseElementEvents);
	exports.anchorProperties = exports.htmlElementProperties.concat([
	    'href',
	    'target'
	]);
	exports.buttonProperties = exports.htmlElementProperties.concat([
	    'disabled'
	]);
	exports.divProperties = exports.htmlElementProperties.concat(['align', 'noWrap']);
	exports.inputProperties = exports.buttonProperties;
	exports.textAreaProperties = exports.buttonProperties;
	exports.imageProperties = exports.divProperties;
	/**
	 * Gets native supported props for an html element provided the allowance set. Use one of the property
	 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
	 * props set. Note that all data- and aria- prefixed attributes will be allowed.
	 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
	 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
	 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
	 * the component after an onClick function is added, then the getNativeProps onClick will override it.
	 * @param props The unfiltered input props
	 * @param allowedPropsNames The array of allowed propnames.
	 * @returns The filtered props
	 */
	function getNativeProps(props, allowedPropNames, excludedPropNames) {
	    return object_1.filteredAssign(function (propName) {
	        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) && ((propName.indexOf('data-') === 0) ||
	            (propName.indexOf('aria-') === 0) ||
	            (allowedPropNames.indexOf(propName) >= 0)));
	    }, {}, props);
	}
	exports.getNativeProps = getNativeProps;
	


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Async_1 = __webpack_require__(13);
	var EventGroup_1 = __webpack_require__(14);
	var BaseComponent = (function (_super) {
	    __extends(BaseComponent, _super);
	    /**
	     * BaseComponent constructor
	     * @param {P} props The props for the component.
	     * @param {Object} deprecatedProps The map of deprecated prop names to new names, where the key is the old name and the
	     * value is the new name. If a prop is removed rather than renamed, leave the value undefined.
	     */
	    function BaseComponent(props, deprecatedProps) {
	        var _this = _super.call(this, props) || this;
	        if (deprecatedProps) {
	            for (var propName in deprecatedProps) {
	                if (propName in props) {
	                    _warnDeprecation(_this, propName, deprecatedProps[propName]);
	                }
	            }
	        }
	        _makeAllSafe(_this, BaseComponent.prototype, [
	            'componentWillMount',
	            'componentDidMount',
	            'shouldComponentUpdate',
	            'componentWillUpdate',
	            'componentWillReceiveProps',
	            'render',
	            'componentDidUpdate',
	            'componentWillUnmount'
	        ]);
	        return _this;
	    }
	    /** If we have disposables, dispose them automatically on unmount. */
	    BaseComponent.prototype.componentWillUnmount = function () {
	        if (this.__disposables) {
	            for (var i = 0, len = this._disposables.length; i < len; i++) {
	                var disposable = this.__disposables[i];
	                if (disposable.dispose) {
	                    disposable.dispose();
	                }
	            }
	            this.__disposables = null;
	        }
	    };
	    Object.defineProperty(BaseComponent.prototype, "className", {
	        /** Gets the object's class name. */
	        get: function () {
	            var funcNameRegex = /function (.{1,})\(/;
	            var results = (funcNameRegex).exec((this).constructor.toString());
	            return (results && results.length > 1) ? results[1] : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_disposables", {
	        /** Allows subclasses to push things to this._disposables to be auto disposed. */
	        get: function () {
	            if (!this.__disposables) {
	                this.__disposables = [];
	            }
	            return this.__disposables;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_async", {
	        /**
	         * Gets the async instance associated with the component, created on demand. The async instance gives
	         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
	         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
	         * preserve the this pointer so that you don't need to "bind" the callbacks.
	         */
	        get: function () {
	            if (!this.__async) {
	                this.__async = new Async_1.Async(this);
	                this._disposables.push(this.__async);
	            }
	            return this.__async;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseComponent.prototype, "_events", {
	        /**
	         * Gets the event group instance assocaited with the component, created on demand. The event instance
	         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
	         * will be automatically disconnected after unmounting. The helpers within the events object also
	         * preserve the this reference so that you don't need to "bind" the callbacks.
	         */
	        get: function () {
	            if (!this.__events) {
	                this.__events = new EventGroup_1.EventGroup(this);
	                this._disposables.push(this.__events);
	            }
	            return this.__events;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Helper to return a memoized ref resolver function.
	     * @params refName Name of the member to assign the ref to.
	     *
	     * @examples
	     * class Foo extends BaseComponent<...> {
	     *   private _root: HTMLElement;
	     *
	     *   public render() {
	     *     return <div ref={ this._resolveRef('_root') } />
	     *   }
	     * }
	     */
	    BaseComponent.prototype._resolveRef = function (refName) {
	        var _this = this;
	        if (!this.__resolves) {
	            this.__resolves = {};
	        }
	        if (!this.__resolves[refName]) {
	            this.__resolves[refName] = function (ref) {
	                return _this[refName] = ref;
	            };
	        }
	        return this.__resolves[refName];
	    };
	    return BaseComponent;
	}(React.Component));
	exports.BaseComponent = BaseComponent;
	/**
	 * Helper to override a given method with a wrapper method that can try/catch the original, but also
	 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
	 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
	 */
	function _makeAllSafe(obj, prototype, methodNames) {
	    for (var i = 0, len = methodNames.length; i < len; i++) {
	        _makeSafe(obj, prototype, methodNames[i]);
	    }
	}
	function _makeSafe(obj, prototype, methodName) {
	    var classMethod = obj[methodName];
	    var prototypeMethod = prototype[methodName];
	    if (classMethod || prototypeMethod) {
	        obj[methodName] = function () {
	            var retVal;
	            try {
	                if (prototypeMethod) {
	                    retVal = prototypeMethod.apply(this, arguments);
	                }
	                if (classMethod) {
	                    retVal = classMethod.apply(this, arguments);
	                }
	            }
	            catch (e) {
	                var errorMessage = "Exception in " + obj.className + "." + methodName + "(): " + (typeof e === 'string' ? e : e.stack);
	                if (BaseComponent.onError) {
	                    BaseComponent.onError(errorMessage, e);
	                }
	            }
	            return retVal;
	        };
	    }
	}
	function _warnDeprecation(obj, propertyName, newPropertyName) {
	    if (console && console.warn) {
	        var deprecationMessage = obj.className + " property '" + propertyName + "' was used but has been deprecated.";
	        if (newPropertyName) {
	            deprecationMessage += " Use '" + newPropertyName + "' instead.";
	        }
	        console.warn(deprecationMessage);
	    }
	}
	BaseComponent.onError = function (errorMessage) {
	    console.error(errorMessage);
	    throw errorMessage;
	};
	


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
	 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
	 *
	 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
	 * new instance of the class and remember to call dispose() during your code's dispose handler.
	 */
	"use strict";
	var Async = (function () {
	    function Async(parent, onError) {
	        this._timeoutIds = null;
	        this._immediateIds = null;
	        this._intervalIds = null;
	        this._animationFrameIds = null;
	        this._isDisposed = false;
	        this._parent = parent || null;
	        this._onErrorHandler = onError;
	        this._noop = function () { };
	    }
	    /**
	     * Dispose function, clears all async operations.
	     */
	    Async.prototype.dispose = function () {
	        var id;
	        this._isDisposed = true;
	        this._parent = null;
	        // Clear timeouts.
	        if (this._timeoutIds) {
	            for (id in this._timeoutIds) {
	                if (this._timeoutIds.hasOwnProperty(id)) {
	                    this.clearTimeout(id);
	                }
	            }
	            this._timeoutIds = null;
	        }
	        // Clear immediates.
	        if (this._immediateIds) {
	            for (id in this._immediateIds) {
	                if (this._immediateIds.hasOwnProperty(id)) {
	                    this.clearImmediate(id);
	                }
	            }
	            this._immediateIds = null;
	        }
	        // Clear intervals.
	        if (this._intervalIds) {
	            for (id in this._intervalIds) {
	                if (this._intervalIds.hasOwnProperty(id)) {
	                    this.clearInterval(id);
	                }
	            }
	            this._intervalIds = null;
	        }
	        // Clear animation frames.
	        if (this._animationFrameIds) {
	            for (id in this._animationFrameIds) {
	                if (this._animationFrameIds.hasOwnProperty(id)) {
	                    this.cancelAnimationFrame(id);
	                }
	            }
	            this._animationFrameIds = null;
	        }
	    };
	    /**
	     * SetTimeout override, which will auto cancel the timeout during dispose.
	     * @param callback Callback to execute.
	     * @param duration Duration in milliseconds.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setTimeout = function (callback, duration) {
	        var _this = this;
	        var timeoutId = 0;
	        if (!this._isDisposed) {
	            if (!this._timeoutIds) {
	                this._timeoutIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            timeoutId = setTimeout(function () {
	                // Time to execute the timeout, enqueue it as a foreground task to be executed.
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._timeoutIds[timeoutId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    if (_this._onErrorHandler) {
	                        _this._onErrorHandler(e);
	                    }
	                }
	            }, duration);
	            /* tslint:enable:ban-native-functions */
	            this._timeoutIds[timeoutId] = true;
	        }
	        return timeoutId;
	    };
	    /**
	     * Clears the timeout.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearTimeout = function (id) {
	        if (this._timeoutIds && this._timeoutIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            clearTimeout(id);
	            delete this._timeoutIds[id];
	        }
	    };
	    /**
	     * SetImmediate override, which will auto cancel the immediate during dispose.
	     * @param callback Callback to execute.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setImmediate = function (callback) {
	        var _this = this;
	        var immediateId = 0;
	        if (!this._isDisposed) {
	            if (!this._immediateIds) {
	                this._immediateIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            var setImmediateCallback = function () {
	                // Time to execute the timeout, enqueue it as a foreground task to be executed.
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._immediateIds[immediateId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            };
	            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
	            /* tslint:enable:ban-native-functions */
	            this._immediateIds[immediateId] = true;
	        }
	        return immediateId;
	    };
	    /**
	     * Clears the immediate.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearImmediate = function (id) {
	        if (this._immediateIds && this._immediateIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
	            delete this._immediateIds[id];
	        }
	    };
	    /**
	     * SetInterval override, which will auto cancel the timeout during dispose.
	     * @param callback Callback to execute.
	     * @param duration Duration in milliseconds.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setInterval = function (callback, duration) {
	        var _this = this;
	        var intervalId = 0;
	        if (!this._isDisposed) {
	            if (!this._intervalIds) {
	                this._intervalIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            intervalId = setInterval(function () {
	                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
	                try {
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            }, duration);
	            /* tslint:enable:ban-native-functions */
	            this._intervalIds[intervalId] = true;
	        }
	        return intervalId;
	    };
	    /**
	     * Clears the interval.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearInterval = function (id) {
	        if (this._intervalIds && this._intervalIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            clearInterval(id);
	            delete this._intervalIds[id];
	        }
	    };
	    /**
	     * Creates a function that, when executed, will only call the func function at most once per
	     * every wait milliseconds. Provide an options object to indicate that func should be invoked
	     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
	     * function will return the result of the last func call.
	     *
	     * Note: If leading and trailing options are true func will be called on the trailing edge of
	     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
	     *
	     * @param func The function to throttle.
	     * @param wait The number of milliseconds to throttle executions to. Defaults to 0.
	     * @param options The options object.
	     * @param options.leading Specify execution on the leading edge of the timeout.
	     * @param options.trailing Specify execution on the trailing edge of the timeout.
	     * @return The new throttled function.
	     */
	    Async.prototype.throttle = function (func, wait, options) {
	        var _this = this;
	        if (this._isDisposed) {
	            return this._noop;
	        }
	        var waitMS = wait || 0;
	        var leading = true;
	        var trailing = true;
	        var lastExecuteTime = 0;
	        var lastResult;
	        var lastArgs;
	        var timeoutId = null;
	        if (options && typeof (options.leading) === 'boolean') {
	            leading = options.leading;
	        }
	        if (options && typeof (options.trailing) === 'boolean') {
	            trailing = options.trailing;
	        }
	        var callback = function (userCall) {
	            var now = (new Date).getTime();
	            var delta = now - lastExecuteTime;
	            var waitLength = leading ? waitMS - delta : waitMS;
	            if (delta >= waitMS && (!userCall || leading)) {
	                lastExecuteTime = now;
	                if (timeoutId) {
	                    _this.clearTimeout(timeoutId);
	                    timeoutId = null;
	                }
	                lastResult = func.apply(_this._parent, lastArgs);
	            }
	            else if (timeoutId === null && trailing) {
	                timeoutId = _this.setTimeout(callback, waitLength);
	            }
	            return lastResult;
	        };
	        var resultFunction = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            lastArgs = args;
	            return callback(true);
	        };
	        return resultFunction;
	    };
	    /**
	     * Creates a function that will delay the execution of func until after wait milliseconds have
	     * elapsed since the last time it was invoked. Provide an options object to indicate that func
	     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
	     * to the debounced function will return the result of the last func call.
	     *
	     * Note: If leading and trailing options are true func will be called on the trailing edge of
	     * the timeout only if the the debounced function is invoked more than once during the wait
	     * timeout.
	     *
	     * @param func The function to debounce.
	     * @param wait The number of milliseconds to delay.
	     * @param options The options object.
	     * @param options.leading Specify execution on the leading edge of the timeout.
	     * @param options.maxWait The maximum time func is allowed to be delayed before it's called.
	     * @param options.trailing Specify execution on the trailing edge of the timeout.
	     * @return The new debounced function.
	     */
	    Async.prototype.debounce = function (func, wait, options) {
	        var _this = this;
	        if (this._isDisposed) {
	            return this._noop;
	        }
	        var waitMS = wait || 0;
	        var leading = false;
	        var trailing = true;
	        var maxWait = null;
	        var lastCallTime = 0;
	        var lastExecuteTime = (new Date).getTime();
	        var lastResult;
	        var lastArgs;
	        var timeoutId = null;
	        if (options && typeof (options.leading) === 'boolean') {
	            leading = options.leading;
	        }
	        if (options && typeof (options.trailing) === 'boolean') {
	            trailing = options.trailing;
	        }
	        if (options && typeof (options.maxWait) === 'number' && !isNaN(options.maxWait)) {
	            maxWait = options.maxWait;
	        }
	        var callback = function (userCall) {
	            var now = (new Date).getTime();
	            var executeImmediately = false;
	            if (userCall) {
	                if (leading && now - lastCallTime >= waitMS) {
	                    executeImmediately = true;
	                }
	                lastCallTime = now;
	            }
	            var delta = now - lastCallTime;
	            var waitLength = waitMS - delta;
	            var maxWaitDelta = now - lastExecuteTime;
	            var maxWaitExpired = false;
	            if (maxWait !== null) {
	                // maxWait only matters when there is a pending callback
	                if (maxWaitDelta >= maxWait && timeoutId) {
	                    maxWaitExpired = true;
	                }
	                else {
	                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
	                }
	            }
	            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
	                if (timeoutId) {
	                    _this.clearTimeout(timeoutId);
	                    timeoutId = null;
	                }
	                lastExecuteTime = now;
	                lastResult = func.apply(_this._parent, lastArgs);
	            }
	            else if ((timeoutId === null || !userCall) && trailing) {
	                timeoutId = _this.setTimeout(callback, waitLength);
	            }
	            return lastResult;
	        };
	        var resultFunction = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            lastArgs = args;
	            return callback(true);
	        };
	        return resultFunction;
	    };
	    Async.prototype.requestAnimationFrame = function (callback) {
	        var _this = this;
	        var animationFrameId = 0;
	        if (!this._isDisposed) {
	            if (!this._animationFrameIds) {
	                this._animationFrameIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            var animationFrameCallback = function () {
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._animationFrameIds[animationFrameId];
	                    callback.apply(_this._parent);
	                }
	                catch (e) {
	                    _this._logError(e);
	                }
	            };
	            animationFrameId = window.requestAnimationFrame ?
	                window.requestAnimationFrame(animationFrameCallback) :
	                window.setTimeout(animationFrameCallback, 0);
	            /* tslint:enable:ban-native-functions */
	            this._animationFrameIds[animationFrameId] = true;
	        }
	        return animationFrameId;
	    };
	    Async.prototype.cancelAnimationFrame = function (id) {
	        if (this._animationFrameIds && this._animationFrameIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
	            /* tslint:enable:ban-native-functions */
	            delete this._animationFrameIds[id];
	        }
	    };
	    Async.prototype._logError = function (e) {
	        if (this._onErrorHandler) {
	            this._onErrorHandler(e);
	        }
	    };
	    return Async;
	}());
	exports.Async = Async;
	


/***/ },
/* 14 */
/***/ function(module, exports) {

	/* tslint:disable:no-string-literal */
	"use strict";
	/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
	 *  If the target is an HTMLElement, the event will be attached to the element and can be
	 *  triggered as usual (like clicking for onclick).
	 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
	 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
	 *  handled here in EventGroup, and the handler is called in the context of the parent
	 *  (which is passed in in the constructor).
	 */
	var EventGroup = (function () {
	    /** parent: the context in which events attached to non-HTMLElements are called */
	    function EventGroup(parent) {
	        this._id = EventGroup._uniqueId++;
	        this._parent = parent;
	        this._eventRecords = [];
	    }
	    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
	     *  Events raised here by default have bubbling set to false and cancelable set to true.
	     *  This applies also to built-in events being raised manually here on HTMLElements,
	     *  which may lead to unexpected behavior if it differs from the defaults.
	     */
	    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
	        var retVal;
	        if (EventGroup._isElement(target)) {
	            if (document.createEvent) {
	                var ev = document.createEvent('HTMLEvents');
	                ev.initEvent(eventName, bubbleEvent, true);
	                ev['args'] = eventArgs;
	                retVal = target.dispatchEvent(ev);
	            }
	            else if (document['createEventObject']) {
	                var evObj = document['createEventObject'](eventArgs);
	                // cannot set cancelBubble on evObj, fireEvent will overwrite it
	                target.fireEvent('on' + eventName, evObj);
	            }
	        }
	        else {
	            while (target && retVal !== false) {
	                var events = target.__events__;
	                var eventRecords = events ? events[eventName] : null;
	                for (var id in eventRecords) {
	                    if (eventRecords.hasOwnProperty(id)) {
	                        var eventRecordList = eventRecords[id];
	                        for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
	                            var record = eventRecordList[listIndex];
	                            if (record.objectCallback) {
	                                retVal = record.objectCallback.call(record.parent, eventArgs);
	                            }
	                        }
	                    }
	                }
	                // If the target has a parent, bubble the event up.
	                target = bubbleEvent ? target.parent : null;
	            }
	        }
	        return retVal;
	    };
	    EventGroup.isObserved = function (target, eventName) {
	        var events = target && target.__events__;
	        return !!events && !!events[eventName];
	    };
	    /** Check to see if the target has declared support of the given event. */
	    EventGroup.isDeclared = function (target, eventName) {
	        var declaredEvents = target && target.__declaredEvents;
	        return !!declaredEvents && !!declaredEvents[eventName];
	    };
	    EventGroup.stopPropagation = function (event) {
	        if (event.stopPropagation) {
	            event.stopPropagation();
	        }
	        else {
	            event.cancelBubble = true;
	        }
	    };
	    EventGroup._isElement = function (target) {
	        return !!target && (target.addEventListener || target instanceof HTMLElement);
	    };
	    EventGroup.prototype.dispose = function () {
	        if (!this._isDisposed) {
	            this._isDisposed = true;
	            this.off();
	            this._parent = null;
	        }
	    };
	    /** On the target, attach a set of events, where the events object is a name to function mapping. */
	    EventGroup.prototype.onAll = function (target, events, useCapture) {
	        for (var eventName in events) {
	            if (events.hasOwnProperty(eventName)) {
	                this.on(target, eventName, events[eventName], useCapture);
	            }
	        }
	    };
	    /** On the target, attach an event whose handler will be called in the context of the parent
	     * of this instance of EventGroup.
	     */
	    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
	        var _this = this;
	        if (eventName.indexOf(',') > -1) {
	            var events = eventName.split(/[ ,]+/);
	            for (var i = 0; i < events.length; i++) {
	                this.on(target, events[i], callback, useCapture);
	            }
	        }
	        else {
	            var parent_1 = this._parent;
	            var eventRecord = {
	                target: target,
	                eventName: eventName,
	                parent: parent_1,
	                callback: callback,
	                objectCallback: null,
	                elementCallback: null,
	                useCapture: useCapture
	            };
	            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
	            var events = (target.__events__ = target.__events__ || {});
	            events[eventName] = events[eventName] || {
	                count: 0
	            };
	            events[eventName][this._id] = events[eventName][this._id] || [];
	            events[eventName][this._id].push(eventRecord);
	            events[eventName].count++;
	            if (EventGroup._isElement(target)) {
	                var processElementEvent = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i] = arguments[_i];
	                    }
	                    if (_this._isDisposed) {
	                        return;
	                    }
	                    var result;
	                    try {
	                        result = callback.apply(parent_1, args);
	                        if (result === false && args[0]) {
	                            var e = args[0];
	                            if (e.preventDefault) {
	                                e.preventDefault();
	                            }
	                            if (e.stopPropagation) {
	                                e.stopPropagation();
	                            }
	                            e.cancelBubble = true;
	                        }
	                    }
	                    catch (e) {
	                    }
	                    return result;
	                };
	                eventRecord.elementCallback = processElementEvent;
	                if (target.addEventListener) {
	                    /* tslint:disable:ban-native-functions */
	                    target.addEventListener(eventName, processElementEvent, useCapture);
	                }
	                else if (target.attachEvent) {
	                    target.attachEvent('on' + eventName, processElementEvent);
	                }
	            }
	            else {
	                var processObjectEvent = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i] = arguments[_i];
	                    }
	                    if (_this._isDisposed) {
	                        return;
	                    }
	                    return callback.apply(parent_1, args);
	                };
	                eventRecord.objectCallback = processObjectEvent;
	            }
	            // Remember the record locally, so that it can be removed.
	            this._eventRecords.push(eventRecord);
	        }
	    };
	    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
	        for (var i = 0; i < this._eventRecords.length; i++) {
	            var eventRecord = this._eventRecords[i];
	            if ((!target || target === eventRecord.target) &&
	                (!eventName || eventName === eventRecord.eventName) &&
	                (!callback || callback === eventRecord.callback) &&
	                ((typeof useCapture !== 'boolean') || useCapture === eventRecord.useCapture)) {
	                var events = eventRecord.target.__events__;
	                var targetArrayLookup = events[eventRecord.eventName];
	                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
	                // We may have already target's entries, so check for null.
	                if (targetArray) {
	                    if (targetArray.length === 1 || !callback) {
	                        targetArrayLookup.count -= targetArray.length;
	                        delete events[eventRecord.eventName][this._id];
	                    }
	                    else {
	                        targetArrayLookup.count--;
	                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
	                    }
	                    if (!targetArrayLookup.count) {
	                        delete events[eventRecord.eventName];
	                    }
	                }
	                if (eventRecord.elementCallback) {
	                    if (eventRecord.target.removeEventListener) {
	                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
	                    }
	                    else if (eventRecord.target.detachEvent) {
	                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
	                    }
	                }
	                this._eventRecords.splice(i--, 1);
	            }
	        }
	    };
	    /** Trigger the given event in the context of this instance of EventGroup. */
	    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
	        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
	    };
	    /** Declare an event as being supported by this instance of EventGroup. */
	    EventGroup.prototype.declare = function (event) {
	        var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
	        if (typeof event === 'string') {
	            declaredEvents[event] = true;
	        }
	        else {
	            for (var i = 0; i < event.length; i++) {
	                declaredEvents[event[i]] = true;
	            }
	        }
	    };
	    return EventGroup;
	}());
	EventGroup._uniqueId = 0;
	exports.EventGroup = EventGroup;
	


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Button{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border:1px solid " }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px}.ms-Button::-moz-focus-inner{border:0}.ms-Button{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Button:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Button:hover .ms-Button-label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Button:hover{color:#1AEBFF;border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Button:hover{color:#37006E;border-color:#37006E}}.ms-Button:focus{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";outline:1px solid transparent}.ms-Button:focus .ms-Button-label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Button:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button:active .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button.is-disabled,.ms-Button:disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";cursor:default}.ms-Button.is-disabled .ms-Button-label,.ms-Button:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button.is-disabled:focus,.ms-Button.is-disabled:hover,.ms-Button:disabled:focus,.ms-Button:disabled:hover{outline:0}.ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:600;font-size:14px}.ms-Button-description,.ms-Button-icon{display:none}.ms-Fabric.is-focusVisible .ms-Button:focus{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button:focus:before{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--primary:hover{background-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";border-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.ms-Button--primary:hover .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--primary:focus{background-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary:focus .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--primary:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary.is-disabled,.ms-Button--primary:disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--primary.is-disabled .ms-Button-label,.ms-Button--primary:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button--primary:focus{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button--primary:focus:before{border-color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--hero{background-color:transparent;border:0;height:auto}.ms-Button--hero .ms-Button-icon{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";display:inline-block;padding-top:5px;font-size:20px;line-height:1}html[dir=ltr] .ms-Button--hero .ms-Button-icon{margin-right:8px}html[dir=rtl] .ms-Button--hero .ms-Button-icon{margin-left:8px}.ms-Button--hero .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";font-size:21px;font-weight:100;vertical-align:top}.ms-Button--hero:focus,.ms-Button--hero:hover{background-color:transparent}.ms-Button--hero:focus .ms-Button-icon,.ms-Button--hero:hover .ms-Button-icon{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.ms-Button--hero:focus .ms-Button-label,.ms-Button--hero:hover .ms-Button-label{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--hero:active .ms-Button-icon{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--hero:active .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--hero.is-disabled .ms-Button-icon,.ms-Button--hero:disabled .ms-Button-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Button--hero.is-disabled .ms-Button-label,.ms-Button--hero:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--compound{display:block;height:auto;max-width:280px;min-height:72px;padding:20px}.ms-Button--compound .ms-Button-label{display:block;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";margin-top:-5px}html[dir=ltr] .ms-Button--compound .ms-Button-label{text-align:left}html[dir=rtl] .ms-Button--compound .ms-Button-label{text-align:right}.ms-Button--compound .ms-Button-description{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";display:block;font-size:12px;position:relative;top:3px}html[dir=ltr] .ms-Button--compound .ms-Button-description{text-align:left}html[dir=rtl] .ms-Button--compound .ms-Button-description{text-align:right}.ms-Button--compound:hover .ms-Button-description{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-Button--compound:focus{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--compound:focus .ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Button--compound:focus .ms-Button-description{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button--compound:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--compound:active .ms-Button-description,.ms-Button--compound:active .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--compound.is-disabled .ms-Button-description,.ms-Button--compound.is-disabled .ms-Button-label,.ms-Button--compound:disabled .ms-Button-description,.ms-Button--compound:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--compound.is-disabled:active,.ms-Button--compound.is-disabled:focus,.ms-Button--compound:disabled:active,.ms-Button--compound:disabled:focus{border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--compound.is-disabled:active .ms-Button-description,.ms-Button--compound.is-disabled:active .ms-Button-label,.ms-Button--compound.is-disabled:focus .ms-Button-description,.ms-Button--compound.is-disabled:focus .ms-Button-label,.ms-Button--compound:disabled:active .ms-Button-description,.ms-Button--compound:disabled:active .ms-Button-label,.ms-Button--compound:disabled:focus .ms-Button-description,.ms-Button--compound:disabled:focus .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--command{background-color:transparent;border:none;height:40px;min-width:0;padding:0 8px}html[dir=ltr] .ms-Button--command{text-align:left}html[dir=rtl] .ms-Button--command{text-align:right}.ms-Button--command .ms-Icon{line-height:40px}.ms-Button--command .ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";line-height:40px}.ms-Button--command .ms-Button-icon{vertical-align:top;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";display:inline-block;position:relative;font-size:16px}html[dir=ltr] .ms-Button--command .ms-Button-icon{text-align:left}html[dir=rtl] .ms-Button--command .ms-Button-icon{text-align:right}html[dir=ltr] .ms-Button--command .ms-Button-icon{margin-right:8px}html[dir=rtl] .ms-Button--command .ms-Button-icon{margin-left:8px}.ms-Button--command .ms-Button-label{font-weight:400}.ms-Button--command:focus,.ms-Button--command:hover{background-color:transparent}.ms-Button--command:focus .ms-Button-icon,.ms-Button--command:focus .ms-Button-label,.ms-Button--command:hover .ms-Button-icon,.ms-Button--command:hover .ms-Button-label{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--command:active .ms-Button-icon,.ms-Button--command:active .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--command.is-disabled .ms-Button-icon,.ms-Button--command:disabled .ms-Button-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Button--command.is-disabled .ms-Button-label,.ms-Button--command:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--icon{background-color:transparent;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";padding:0;min-width:auto;height:auto;border:0}.ms-Button--icon::-moz-focus-inner{border:0}.ms-Button--icon{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Button--icon:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button--icon:active,.ms-Button--icon:hover{background-color:transparent;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Button--icon:focus{background-color:transparent}.ms-Button--icon .ms-Icon{font-size:16px;padding:8px}.ms-Button--icon .ms-Button-icon{display:inline}.ms-Button--icon.is-disabled,.ms-Button--icon:disabled{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";background-color:transparent}@media screen and (-ms-high-contrast:active){.ms-Button--icon{color:" }, { "theme": "yellowLight", "defaultValue": "#fff100" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Button--icon{color:" }, { "theme": "blueMid", "defaultValue": "#00188f" }, { "rawString": "}}.ms-Button--primary.disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";pointer-events:none;cursor:default}.ms-Button--primary.disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}html[dir=ltr] .ms-Button+.ms-Button{margin-left:6px}html[dir=rtl] .ms-Button+.ms-Button{margin-right:6px}html[dir=ltr] .ms-Button--command+.ms-Button--command{margin-left:14px}html[dir=rtl] .ms-Button--command+.ms-Button--command{margin-right:14px}a.ms-Button{text-decoration:none;text-align:center}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 16 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
	 * to use if that slot is not specified by the theme.
	 */
	"use strict";
	// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
	// value will initialize as undefined, and later will be set once on first loadStyles injection.
	var _injectStylesWithCssText;
	// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
	// load-themed-styles hosted on the page.
	var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
	var _themeState = _root.__themeState__ = _root.__themeState__ || {
	    theme: undefined,
	    lastStyleElement: undefined,
	    registeredStyles: []
	};
	/**
	 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
	 */
	/* tslint:disable: max-line-length */
	var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
	/* tslint:enable: max-line-length */
	/** Maximum style text length, for supporting IE style restrictions. */
	var MAX_STYLE_CONTENT_SIZE = 10000;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load
	 * event is fired.
	 * @param {string | ThemableArray} styles Themable style text to register.
	 */
	function loadStyles(styles) {
	    var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
	    if (_injectStylesWithCssText === undefined) {
	        _injectStylesWithCssText = shouldUseCssText();
	    }
	    applyThemableStyles(styleParts);
	}
	exports.loadStyles = loadStyles;
	/**
	 * Allows for customizable loadStyles logic. e.g. for server side rendering application
	 * @param {(styles: string) => void} a loadStyles callback that gets called when styles are loaded or reloaded
	 */
	function configureLoadStyles(callback) {
	    _themeState.loadStyles = callback;
	}
	exports.configureLoadStyles = configureLoadStyles;
	/**
	 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
	 * is fired.
	 * @param {string} styleText Style to register.
	 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
	 */
	function applyThemableStyles(stylesArray, styleRecord) {
	    if (_themeState.loadStyles) {
	        var styles = resolveThemableArray(stylesArray);
	        _themeState.loadStyles(styles);
	    }
	    else {
	        _injectStylesWithCssText ?
	            registerStylesIE(stylesArray, styleRecord) :
	            registerStyles(stylesArray, styleRecord);
	    }
	}
	/**
	 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
	 * replaced.
	 * @param {theme} theme JSON object of theme tokens to values.
	 */
	function loadTheme(theme) {
	    _themeState.theme = theme;
	    // reload styles.
	    reloadStyles();
	}
	exports.loadTheme = loadTheme;
	/**
	 * Reloads styles.
	 */
	function reloadStyles() {
	    if (_themeState.theme) {
	        for (var _i = 0, _a = _themeState.registeredStyles; _i < _a.length; _i++) {
	            var styleRecord = _a[_i];
	            applyThemableStyles(styleRecord.themableStyle, styleRecord);
	        }
	    }
	}
	/**
	 * Find theme tokens and replaces them with provided theme values.
	 * @param {string} styles Tokenized styles to fix.
	 */
	function detokenize(styles) {
	    if (styles) {
	        styles = resolveThemableArray(splitStyles(styles));
	    }
	    return styles;
	}
	exports.detokenize = detokenize;
	/**
	 * Resolves ThemingInstruction objects in an array and joins the result into a string.
	 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
	 */
	function resolveThemableArray(splitStyleArray) {
	    var theme = _themeState.theme;
	    var resolvedCss;
	    if (splitStyleArray) {
	        // Resolve the array of theming instructions to an array of strings.
	        // Then join the array to produce the final CSS string.
	        var resolvedArray = splitStyleArray.map(function (currentValue) {
	            var themeSlot = currentValue.theme;
	            if (themeSlot) {
	                // A theming annotation. Resolve it.
	                var themedValue = theme ? theme[themeSlot] : undefined;
	                var defaultValue = currentValue.defaultValue;
	                // Warn to console if we hit an unthemed value even when themes are provided.
	                // Allow the themedValue to be undefined to explicitly request the default value.
	                if (theme && !themedValue && console && !(themeSlot in theme)) {
	                    /* tslint:disable: max-line-length */
	                    console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + (defaultValue || 'inherit') + "\".");
	                }
	                return themedValue || defaultValue || 'inherit';
	            }
	            else {
	                // A non-themable string. Preserve it.
	                return currentValue.rawString;
	            }
	        });
	        resolvedCss = resolvedArray.join('');
	    }
	    return resolvedCss;
	}
	/**
	 * Split tokenized CSS into an array of strings and theme specification objects
	 * @param {string} styles Tokenized styles to split.
	 */
	function splitStyles(styles) {
	    var result = [];
	    if (styles) {
	        var pos = 0; // Current position in styles.
	        var tokenMatch = void 0;
	        while (tokenMatch = _themeTokenRegex.exec(styles)) {
	            var matchIndex = tokenMatch.index;
	            if (matchIndex > pos) {
	                result.push({
	                    rawString: styles.substring(pos, matchIndex)
	                });
	            }
	            result.push({
	                theme: tokenMatch[1],
	                defaultValue: tokenMatch[2] // May be undefined
	            });
	            // index of the first character after the current match
	            pos = _themeTokenRegex.lastIndex;
	        }
	        // Push the rest of the string after the last match.
	        result.push({
	            rawString: styles.substring(pos)
	        });
	    }
	    return result;
	}
	exports.splitStyles = splitStyles;
	/**
	 * Registers a set of style text. If it is registered too early, we will register it when the
	 * window.load event is fired.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStyles(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var styleElement = document.createElement('style');
	    styleElement.type = 'text/css';
	    styleElement.appendChild(document.createTextNode(resolveThemableArray(styleArray)));
	    if (styleRecord) {
	        head.replaceChild(styleElement, styleRecord.styleElement);
	        styleRecord.styleElement = styleElement;
	    }
	    else {
	        head.appendChild(styleElement);
	    }
	    if (!styleRecord) {
	        _themeState.registeredStyles.push({
	            styleElement: styleElement,
	            themableStyle: styleArray
	        });
	    }
	}
	/**
	 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
	 * to register slightly differently.
	 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
	 * @param {IStyleRecord} styleRecord May specify a style Element to update.
	 */
	function registerStylesIE(styleArray, styleRecord) {
	    var head = document.getElementsByTagName('head')[0];
	    var lastStyleElement = _themeState.lastStyleElement, registeredStyles = _themeState.registeredStyles;
	    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
	    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
	    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
	    var resolvedStyleText = resolveThemableArray(styleArray);
	    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
	        lastStyleElement = document.createElement('style');
	        lastStyleElement.type = 'text/css';
	        if (styleRecord) {
	            head.replaceChild(lastStyleElement, styleRecord.styleElement);
	            styleRecord.styleElement = lastStyleElement;
	        }
	        else {
	            head.appendChild(lastStyleElement);
	        }
	        if (!styleRecord) {
	            lastRegisteredStyle = {
	                styleElement: lastStyleElement,
	                themableStyle: styleArray
	            };
	            registeredStyles.push(lastRegisteredStyle);
	        }
	    }
	    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
	    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
	    // Preserve the theme state.
	    _themeState.lastStyleElement = lastStyleElement;
	}
	/**
	 * Checks to see if styleSheet exists as a property off of a style element.
	 * This will determine if style registration should be done via cssText (<= IE9) or not
	 */
	function shouldUseCssText() {
	    var useCSSText = false;
	    if (typeof document !== 'undefined') {
	        var emptyStyle = document.createElement('style');
	        emptyStyle.type = 'text/css';
	        useCSSText = !!emptyStyle.styleSheet;
	    }
	    return useCSSText;
	}
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(18));
	var index_1 = __webpack_require__(18);
	exports.default = index_1.Dialog;
	


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(19));
	__export(__webpack_require__(43));
	__export(__webpack_require__(30));
	


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var index_1 = __webpack_require__(20);
	var Dialog_Props_1 = __webpack_require__(30);
	var Overlay_1 = __webpack_require__(31);
	var Layer_1 = __webpack_require__(35);
	var Button_1 = __webpack_require__(4);
	var DialogFooter_1 = __webpack_require__(43);
	var css_1 = __webpack_require__(7);
	var index_2 = __webpack_require__(45);
	var withResponsiveMode_1 = __webpack_require__(47);
	var object_1 = __webpack_require__(8);
	var BaseComponent_1 = __webpack_require__(12);
	__webpack_require__(44);
	var Dialog = (function (_super) {
	    __extends(Dialog, _super);
	    function Dialog(props) {
	        var _this = _super.call(this, props) || this;
	        _this._onDialogRef = _this._onDialogRef.bind(_this);
	        _this.state = {
	            id: object_1.getId('Dialog'),
	            isOpen: props.isOpen,
	            isAnimatingOpen: props.isOpen,
	            isAnimatingClose: false
	        };
	        return _this;
	    }
	    Dialog.prototype.componentWillReceiveProps = function (newProps) {
	        // Opening the dialog
	        if (newProps.isOpen && !this.state.isOpen) {
	            this.setState({
	                isOpen: true,
	                isAnimatingOpen: true,
	                isAnimatingClose: false
	            });
	        }
	        // Closing the dialog
	        if (!newProps.isOpen && this.state.isOpen) {
	            this.setState({
	                isAnimatingOpen: false,
	                isAnimatingClose: true
	            });
	        }
	    };
	    Dialog.prototype.render = function () {
	        var _a = this.props, closeButtonAriaLabel = _a.closeButtonAriaLabel, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, firstFocusableSelector = _a.firstFocusableSelector, forceFocusInsideTrap = _a.forceFocusInsideTrap, ignoreExternalFocusing = _a.ignoreExternalFocusing, isBlocking = _a.isBlocking, isClickableOutsideFocusTrap = _a.isClickableOutsideFocusTrap, isDarkOverlay = _a.isDarkOverlay, onDismiss = _a.onDismiss, onLayerDidMount = _a.onLayerDidMount, onLayerMounted = _a.onLayerMounted, responsiveMode = _a.responsiveMode, subText = _a.subText, title = _a.title, type = _a.type;
	        var _b = this.state, id = _b.id, isOpen = _b.isOpen, isAnimatingOpen = _b.isAnimatingOpen, isAnimatingClose = _b.isAnimatingClose;
	        // @TODO - the discussion on whether the Dialog contain a property for rendering itself is still being discussed
	        if (!isOpen) {
	            return null;
	        }
	        var subTextContent;
	        var dialogClassName = css_1.css('ms-Dialog', this.props.className, {
	            'ms-Dialog--lgHeader': type === Dialog_Props_1.DialogType.largeHeader,
	            'ms-Dialog--close': type === Dialog_Props_1.DialogType.close,
	            'is-open': isOpen,
	            'is-animatingOpen': isAnimatingOpen,
	            'is-animatingClose': isAnimatingClose
	        });
	        var groupings = this._groupChildren();
	        if (subText) {
	            subTextContent = React.createElement("p", { className: 'ms-Dialog-subText', id: id + '-subText' }, subText);
	        }
	        // @temp tuatology - Will adjust this to be a panel at certain breakpoints
	        if (responsiveMode >= withResponsiveMode_1.ResponsiveMode.small) {
	            return (React.createElement(Layer_1.Layer, { onLayerDidMount: onLayerMounted || onLayerDidMount },
	                React.createElement(index_2.Popup, { role: 'dialog', ariaLabelledBy: title ? id + '-title' : '', ariaDescribedBy: subText ? id + '-subText' : '', onDismiss: onDismiss },
	                    React.createElement("div", { className: dialogClassName, ref: this._onDialogRef },
	                        React.createElement(Overlay_1.Overlay, { isDarkThemed: isDarkOverlay, onClick: isBlocking ? null : onDismiss }),
	                        React.createElement(index_1.FocusTrapZone, { className: css_1.css('ms-Dialog-main', this.props.containerClassName), elementToFocusOnDismiss: elementToFocusOnDismiss, isClickableOutsideFocusTrap: isClickableOutsideFocusTrap ? isClickableOutsideFocusTrap : !isBlocking, ignoreExternalFocusing: ignoreExternalFocusing, forceFocusInsideTrap: forceFocusInsideTrap, firstFocusableSelector: firstFocusableSelector },
	                            React.createElement("div", { className: 'ms-Dialog-header' },
	                                React.createElement("p", { className: 'ms-Dialog-title', id: id + '-title' }, title),
	                                React.createElement("div", { className: 'ms-Dialog-topButton' },
	                                    React.createElement(Button_1.Button, { className: 'ms-Dialog-button ms-Dialog-button--close', buttonType: Button_1.ButtonType.icon, icon: 'Cancel', rootProps: { title: closeButtonAriaLabel }, ariaLabel: closeButtonAriaLabel, onClick: onDismiss }))),
	                            React.createElement("div", { className: 'ms-Dialog-inner' },
	                                React.createElement("div", { className: css_1.css('ms-Dialog-content', this.props.contentClassName) },
	                                    subTextContent,
	                                    groupings.contents),
	                                groupings.footers))))));
	        }
	    };
	    // @TODO - typing the footers as an array of DialogFooter is difficult because
	    // casing "child as DialogFooter" causes a problem because
	    // "Neither type 'ReactElement<any>' nor type 'DialogFooter' is assignable to the other."
	    Dialog.prototype._groupChildren = function () {
	        var groupings = {
	            footers: [],
	            contents: []
	        };
	        React.Children.map(this.props.children, function (child) {
	            if (typeof child === 'object' && child !== null && child.type === DialogFooter_1.DialogFooter) {
	                groupings.footers.push(child);
	            }
	            else {
	                groupings.contents.push(child);
	            }
	        });
	        return groupings;
	    };
	    Dialog.prototype._onDialogRef = function (ref) {
	        if (ref) {
	            this._events.on(ref, 'animationend', this._onAnimationEnd);
	        }
	        else {
	            this._events.off();
	        }
	    };
	    // Watch for completed animations and set the state
	    Dialog.prototype._onAnimationEnd = function (ev) {
	        // The dialog has just opened (faded in)
	        if (ev.animationName.indexOf('fadeIn') > -1) {
	            this.setState({
	                isOpen: true,
	                isAnimatingOpen: false
	            });
	        }
	        // The dialog has just closed (faded out)
	        if (ev.animationName.indexOf('fadeOut') > -1) {
	            this.setState({
	                isOpen: false,
	                isAnimatingClose: false
	            });
	            // Call the onDismiss callback
	            if (this.props.onDismiss) {
	                this.props.onDismiss();
	            }
	        }
	    };
	    return Dialog;
	}(BaseComponent_1.BaseComponent));
	Dialog.defaultProps = {
	    isOpen: false,
	    type: Dialog_Props_1.DialogType.normal,
	    isDarkOverlay: true,
	    isBlocking: false,
	    className: '',
	    containerClassName: '',
	    contentClassName: ''
	};
	Dialog = __decorate([
	    withResponsiveMode_1.withResponsiveMode
	], Dialog);
	exports.Dialog = Dialog;
	


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(21));
	


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(22);
	var focus_1 = __webpack_require__(29);
	var FocusTrapZone = (function (_super) {
	    __extends(FocusTrapZone, _super);
	    function FocusTrapZone() {
	        return _super.apply(this, arguments) || this;
	    }
	    FocusTrapZone.prototype.componentDidMount = function () {
	        var _a = this.props, elementToFocusOnDismiss = _a.elementToFocusOnDismiss, _b = _a.isClickableOutsideFocusTrap, isClickableOutsideFocusTrap = _b === void 0 ? false : _b, _c = _a.forceFocusInsideTrap, forceFocusInsideTrap = _c === void 0 ? true : _c;
	        this._previouslyFocusedElement = elementToFocusOnDismiss ? elementToFocusOnDismiss : document.activeElement;
	        this.focus();
	        if (forceFocusInsideTrap) {
	            this._events.on(window, 'focus', this._forceFocusInTrap, true);
	        }
	        if (!isClickableOutsideFocusTrap) {
	            this._events.on(window, 'click', this._forceClickInTrap, true);
	        }
	    };
	    FocusTrapZone.prototype.componentWillUnmount = function () {
	        var ignoreExternalFocusing = this.props.ignoreExternalFocusing;
	        if (!ignoreExternalFocusing && this._previouslyFocusedElement) {
	            this._previouslyFocusedElement.focus();
	        }
	    };
	    FocusTrapZone.prototype.render = function () {
	        var _a = this.props, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy;
	        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
	        return (React.createElement("div", __assign({}, divProps, { className: className, ref: 'root', "aria-labelledby": ariaLabelledBy, onKeyDown: this._onKeyboardHandler }), this.props.children));
	    };
	    /**
	     * Need to expose this method in case of popups since focus needs to be set when popup is opened
	     */
	    FocusTrapZone.prototype.focus = function () {
	        var firstFocusableSelector = this.props.firstFocusableSelector;
	        var _firstFocusableChild;
	        var root = this.refs.root;
	        if (firstFocusableSelector) {
	            _firstFocusableChild = root.querySelector('.' + firstFocusableSelector);
	        }
	        else {
	            _firstFocusableChild = focus_1.getNextElement(root, root.firstChild, true, false, false, true);
	        }
	        if (_firstFocusableChild) {
	            _firstFocusableChild.focus();
	        }
	    };
	    FocusTrapZone.prototype._onKeyboardHandler = function (ev) {
	        if (ev.which !== Utilities_1.KeyCodes.tab) {
	            return;
	        }
	        var root = this.refs.root;
	        var _firstFocusableChild = focus_1.getFirstFocusable(root, root.firstChild, true);
	        var _lastFocusableChild = focus_1.getLastFocusable(root, root.lastChild, true);
	        if (ev.shiftKey && _firstFocusableChild === ev.target) {
	            _lastFocusableChild.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	        else if (!ev.shiftKey && _lastFocusableChild === ev.target) {
	            _firstFocusableChild.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    FocusTrapZone.prototype._forceFocusInTrap = function (ev) {
	        var focusedElement = document.activeElement;
	        if (!Utilities_1.elementContains(this.refs.root, focusedElement)) {
	            this.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    FocusTrapZone.prototype._forceClickInTrap = function (ev) {
	        var clickedElement = ev.target;
	        if (clickedElement && !Utilities_1.elementContains(this.refs.root, clickedElement)) {
	            this.focus();
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    return FocusTrapZone;
	}(Utilities_1.BaseComponent));
	__decorate([
	    Utilities_1.autobind
	], FocusTrapZone.prototype, "_onKeyboardHandler", null);
	exports.FocusTrapZone = FocusTrapZone;
	


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	__export(__webpack_require__(23));
	__export(__webpack_require__(24));
	__export(__webpack_require__(25));
	__export(__webpack_require__(7));
	__export(__webpack_require__(26));
	__export(__webpack_require__(14));
	__export(__webpack_require__(27));
	__export(__webpack_require__(8));
	__export(__webpack_require__(28));
	__export(__webpack_require__(11));
	


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	var KeyCodes;
	(function (KeyCodes) {
	    KeyCodes[KeyCodes["a"] = 65] = "a";
	    KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
	    KeyCodes[KeyCodes["comma"] = 188] = "comma";
	    KeyCodes[KeyCodes["del"] = 46] = "del";
	    KeyCodes[KeyCodes["down"] = 40] = "down";
	    KeyCodes[KeyCodes["end"] = 35] = "end";
	    KeyCodes[KeyCodes["enter"] = 13] = "enter";
	    KeyCodes[KeyCodes["escape"] = 27] = "escape";
	    KeyCodes[KeyCodes["home"] = 36] = "home";
	    KeyCodes[KeyCodes["left"] = 37] = "left";
	    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
	    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
	    KeyCodes[KeyCodes["right"] = 39] = "right";
	    KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
	    KeyCodes[KeyCodes["space"] = 32] = "space";
	    KeyCodes[KeyCodes["tab"] = 9] = "tab";
	    KeyCodes[KeyCodes["up"] = 38] = "up";
	})(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));
	


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	function findIndex(array, cb) {
	    var index = -1;
	    for (var i = 0; array && i < array.length; i++) {
	        if (cb(array[i], i)) {
	            index = i;
	            break;
	        }
	    }
	    return index;
	}
	exports.findIndex = findIndex;
	function createArray(size, getItem) {
	    var array = [];
	    for (var i = 0; i < size; i++) {
	        array.push(getItem(i));
	    }
	    return array;
	}
	exports.createArray = createArray;
	


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
	 * so that they can be used in scenarios that simply require a function callback.
	 *
	 * @example
	 * import { autobind } from '../utilities/autobind';
	 *
	 * public class Foo {
	 *   @autobind
	 *   method() {
	 *   }
	 * }
	 */
	function autobind(target, key, descriptor) {
	    var fn = descriptor.value;
	    return {
	        configurable: true,
	        get: function () {
	            if (this === fn.prototype) {
	                return fn;
	            }
	            return fn.bind(this);
	        },
	        set: function (newValue) {
	            Object.defineProperty(this, key, {
	                configurable: true,
	                writable: true,
	                enumerable: true,
	                value: newValue
	            });
	        }
	    };
	}
	exports.autobind = autobind;
	


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Sets the virtual parent of an element.
	 * Pass `undefined` as the `parent` to clear the virtual parent.
	 *
	 * @export
	 * @param {HTMLElement} child
	 * @param {HTMLElement} parent
	 */
	function setVirtualParent(child, parent) {
	    var virtualChild = child;
	    var virtualParent = parent;
	    if (!virtualChild._virtual) {
	        virtualChild._virtual = {
	            children: []
	        };
	    }
	    var oldParent = virtualChild._virtual.parent;
	    if (oldParent && oldParent !== parent) {
	        // Remove the child from its old parent.
	        var index = oldParent._virtual.children.indexOf(virtualChild);
	        if (index > -1) {
	            oldParent._virtual.children.splice(index, 1);
	        }
	    }
	    virtualChild._virtual.parent = virtualParent || undefined;
	    if (virtualParent) {
	        if (!virtualParent._virtual) {
	            virtualParent._virtual = {
	                children: []
	            };
	        }
	        virtualParent._virtual.children.push(virtualChild);
	    }
	}
	exports.setVirtualParent = setVirtualParent;
	function getVirtualParent(child) {
	    var parent;
	    if (child && isVirtualElement(child)) {
	        parent = child._virtual.parent;
	    }
	    return parent;
	}
	exports.getVirtualParent = getVirtualParent;
	/**
	 * Gets the element which is the parent of a given element.
	 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
	 * real DOM parent when present.
	 *
	 * @export
	 * @param {HTMLElement} child
	 * @param {boolean} [allowVirtualParents=true]
	 * @returns {HTMLElement}
	 */
	function getParent(child, allowVirtualParents) {
	    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
	    return child && (allowVirtualParents && getVirtualParent(child) ||
	        child.parentNode && child.parentNode);
	}
	exports.getParent = getParent;
	/**
	 * Determines whether or not a parent element contains a given child element.
	 * If `allowVirtualParents` is true, this method may return `true` if the child
	 * has the parent in its virtual element hierarchy.
	 *
	 * @export
	 * @param {HTMLElement} parent
	 * @param {HTMLElement} child
	 * @param {boolean} [allowVirtualParents=true]
	 * @returns {boolean}
	 */
	function elementContains(parent, child, allowVirtualParents) {
	    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
	    var isContained = false;
	    if (parent && child) {
	        if (allowVirtualParents) {
	            isContained = false;
	            while (child) {
	                var nextParent = getParent(child);
	                if (nextParent === parent) {
	                    isContained = true;
	                    break;
	                }
	                child = nextParent;
	            }
	        }
	        else if (parent.contains) {
	            isContained = parent.contains(child);
	        }
	    }
	    return isContained;
	}
	exports.elementContains = elementContains;
	var _isSSR = false;
	/** Helper to set ssr mode to simulate no window object returned from getWindow helper. */
	function setSSR(isEnabled) {
	    _isSSR = isEnabled;
	}
	exports.setSSR = setSSR;
	/** Helper to get the window object. */
	function getWindow(rootElement) {
	    if (_isSSR) {
	        return undefined;
	    }
	    else {
	        return (rootElement &&
	            rootElement.ownerDocument &&
	            rootElement.ownerDocument.defaultView ?
	            rootElement.ownerDocument.defaultView :
	            window);
	    }
	}
	exports.getWindow = getWindow;
	/** Helper to get the document object. */
	function getDocument(rootElement) {
	    if (_isSSR) {
	        return undefined;
	    }
	    else {
	        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
	    }
	}
	exports.getDocument = getDocument;
	/** Helper to get bounding client rect, works with window. */
	function getRect(element) {
	    var rect;
	    if (element) {
	        if (element === window) {
	            rect = {
	                left: 0,
	                top: 0,
	                width: window.innerWidth,
	                height: window.innerHeight,
	                right: window.innerWidth,
	                bottom: window.innerHeight
	            };
	        }
	        else if (element.getBoundingClientRect) {
	            rect = element.getBoundingClientRect();
	        }
	    }
	    return rect;
	}
	exports.getRect = getRect;
	/**
	 * Determines whether or not an element has the virtual hierarchy extension.
	 *
	 * @param {(HTMLElement | IVirtualElement)} element
	 * @returns {element is IVirtualElement}
	 */
	function isVirtualElement(element) {
	    return element && !!element._virtual;
	}
	


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	var REACT_LIFECYCLE_EXCLUSIONS = [
	    'setState',
	    'render',
	    'componentWillMount',
	    'componentDidMount',
	    'componentWillReceiveProps',
	    'shouldComponentUpdate',
	    'componentWillUpdate',
	    'componentDidUpdate',
	    'componentWillUnmount'
	];
	/**
	 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
	 * @param destination The instance of the object to hoist the methods onto.
	 * @param source The instance of the object where the methods are hoisted from.
	 * @param exclusions (Optional) What methods to exclude from being hoisted.
	 * @returns {string[]} An array of names of methods that were hoisted.
	 */
	function hoistMethods(destination, source, exclusions) {
	    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
	    var hoisted = [];
	    var _loop_1 = function (methodName) {
	        if (typeof source[methodName] === 'function' &&
	            destination[methodName] === undefined &&
	            (!exclusions || exclusions.indexOf(methodName) === -1)) {
	            hoisted.push(methodName);
	            /* tslint:disable:no-function-expression */
	            destination[methodName] = function () { source[methodName].apply(source, arguments); };
	        }
	    };
	    for (var methodName in source) {
	        _loop_1(methodName);
	    }
	    return hoisted;
	}
	exports.hoistMethods = hoistMethods;
	/**
	 * Provides a method for convenience to unhoist hoisted methods.
	 * @param {any} source The source object upon which methods were hoisted.
	 * @param {string[]} methodNames An array of method names to unhoist.
	 */
	function unhoistMethods(source, methodNames) {
	    methodNames
	        .forEach(function (methodName) { return delete source[methodName]; });
	}
	exports.unhoistMethods = unhoistMethods;
	


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var KeyCodes_1 = __webpack_require__(23);
	var dom_1 = __webpack_require__(26);
	var _isRTL = false;
	/**
	 * Gets the rtl state of the page (returns true if in rtl.)
	 */
	function getRTL() {
	    if (_isRTL === undefined) {
	        var doc = dom_1.getDocument();
	        if (doc) {
	            _isRTL = document.documentElement.getAttribute('dir') === 'rtl';
	        }
	        else {
	            throw new Error('getRTL was called in a server environment without setRTL being called first. ' +
	                'Call setRTL to set the correct direction first.');
	        }
	    }
	    return _isRTL;
	}
	exports.getRTL = getRTL;
	/**
	 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
	 */
	function setRTL(isRTL) {
	    var doc = dom_1.getDocument();
	    if (doc) {
	        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
	    }
	    _isRTL = isRTL;
	}
	exports.setRTL = setRTL;
	/**
	 * Returns the given key, but flips right/left arrows if necessary.
	 */
	function getRTLSafeKeyCode(key) {
	    if (getRTL()) {
	        if (key === KeyCodes_1.KeyCodes.left) {
	            key = KeyCodes_1.KeyCodes.right;
	        }
	        else if (key === KeyCodes_1.KeyCodes.right) {
	            key = KeyCodes_1.KeyCodes.left;
	        }
	    }
	    return key;
	}
	exports.getRTLSafeKeyCode = getRTLSafeKeyCode;
	


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* tslint:disable:no-string-literal */
	"use strict";
	var dom_1 = __webpack_require__(26);
	var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
	var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
	var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
	function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
	    return getNextElement(rootElement, currentElement, true, false, false, includeElementsInFocusZones);
	}
	exports.getFirstFocusable = getFirstFocusable;
	function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
	    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones);
	}
	exports.getLastFocusable = getLastFocusable;
	/**
	 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
	 * @return True if focus was set, false if it was not.
	 * @param {HTMLElement} rootElement - element to start the search for a focusable child.
	 */
	function focusFirstChild(rootElement) {
	    var element = getNextElement(rootElement, rootElement, true, false, false, true);
	    if (element) {
	        element.focus();
	        return true;
	    }
	    return false;
	}
	exports.focusFirstChild = focusFirstChild;
	/** Traverse to find the previous element. */
	function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones) {
	    if (!currentElement ||
	        currentElement === rootElement) {
	        return null;
	    }
	    var isCurrentElementVisible = isElementVisible(currentElement);
	    // Check its children.
	    if (traverseChildren && (includeElementsInFocusZones || !isElementFocusZone(currentElement)) && isCurrentElementVisible) {
	        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones);
	        if (childMatch) {
	            return childMatch;
	        }
	    }
	    // Check the current node, if it's not the first traversal.
	    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
	        return currentElement;
	    }
	    // Check its previous sibling.
	    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones);
	    if (siblingMatch) {
	        return siblingMatch;
	    }
	    // Check its parent.
	    if (!suppressParentTraversal) {
	        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones);
	    }
	    return null;
	}
	exports.getPreviousElement = getPreviousElement;
	/** Traverse to find the next focusable element. */
	function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones) {
	    if (!currentElement ||
	        (currentElement === rootElement && suppressChildTraversal)) {
	        return null;
	    }
	    var isCurrentElementVisible = isElementVisible(currentElement);
	    // Check the current node, if it's not the first traversal.
	    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
	        return currentElement;
	    }
	    // Check its children.
	    if (!suppressChildTraversal && isCurrentElementVisible && (includeElementsInFocusZones || !isElementFocusZone(currentElement))) {
	        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones);
	        if (childMatch) {
	            return childMatch;
	        }
	    }
	    if (currentElement === rootElement) {
	        return null;
	    }
	    // Check its sibling.
	    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones);
	    if (siblingMatch) {
	        return siblingMatch;
	    }
	    if (!suppressParentTraversal) {
	        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones);
	    }
	    return null;
	}
	exports.getNextElement = getNextElement;
	function isElementVisible(element) {
	    // If the element is not valid, return false.
	    if (!element || !element.getAttribute) {
	        return false;
	    }
	    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
	    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
	    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
	        return visibilityAttribute === 'true';
	    }
	    // Fallback to other methods of determining actual visibility.
	    return (element.offsetHeight !== 0 ||
	        element.offsetParent !== null ||
	        element.isVisible === true); // used as a workaround for testing.
	}
	exports.isElementVisible = isElementVisible;
	function isElementTabbable(element) {
	    // If this element is null or is disabled, it is not considered tabbable.
	    if (!element || element.disabled) {
	        return false;
	    }
	    // In IE, element.tabIndex is default to 0. We need to use element get tabIndex attribute to get the correct tabIndex
	    var tabIndex = -1;
	    if (element && element.getAttribute) {
	        tabIndex = parseInt(element.getAttribute('tabIndex'), 10);
	    }
	    return (!!element &&
	        (element.tagName === 'A' ||
	            (element.tagName === 'BUTTON') ||
	            (element.tagName === 'INPUT') ||
	            (element.tagName === 'TEXTAREA') ||
	            (tabIndex >= 0) ||
	            (element.getAttribute && (element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') ||
	                element.getAttribute('role') === 'button')));
	}
	exports.isElementTabbable = isElementTabbable;
	function isElementFocusZone(element) {
	    return element && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE);
	}
	exports.isElementFocusZone = isElementFocusZone;
	function doesElementContainFocus(element) {
	    var currentActiveElement = dom_1.getDocument(element).activeElement;
	    if (currentActiveElement && dom_1.elementContains(element, currentActiveElement)) {
	        return true;
	    }
	    return false;
	}
	exports.doesElementContainFocus = doesElementContainFocus;
	


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	var DialogType;
	(function (DialogType) {
	    /** Standard dialog */
	    DialogType[DialogType["normal"] = 0] = "normal";
	    /** Dialog with large header banner */
	    DialogType[DialogType["largeHeader"] = 1] = "largeHeader";
	    /** Dialog with an 'x' close button in the upper-right corner */
	    DialogType[DialogType["close"] = 2] = "close";
	})(DialogType = exports.DialogType || (exports.DialogType = {}));
	


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(32));
	


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(33));
	


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var properties_1 = __webpack_require__(11);
	__webpack_require__(34);
	var Overlay = (function (_super) {
	    __extends(Overlay, _super);
	    function Overlay() {
	        return _super.apply(this, arguments) || this;
	    }
	    Overlay.prototype.render = function () {
	        var _a = this.props, isDarkThemed = _a.isDarkThemed, className = _a.className;
	        var divProps = properties_1.getNativeProps(this.props, properties_1.divProperties);
	        var modifiedClassName = css_1.css('ms-Overlay', className, {
	            'ms-Overlay--dark': isDarkThemed
	        });
	        return (React.createElement("div", __assign({}, divProps, { className: modifiedClassName })));
	    };
	    return Overlay;
	}(React.Component));
	exports.Overlay = Overlay;
	


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Overlay{background-color:" }, { "theme": "whiteTranslucent40", "defaultValue": "rgba(255,255,255,.4)" }, { "rawString": ";position:absolute;bottom:0;left:0;right:0;top:0}.ms-Overlay.ms-Overlay--none{visibility:hidden}.ms-Overlay.ms-Overlay--dark{background-color:" }, { "theme": "blackTranslucent40", "defaultValue": "rgba(0,0,0,.4)" }, { "rawString": "}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(36));
	


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(37));
	__export(__webpack_require__(42));
	


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	/* tslint:enable:no-unused-variable */
	var Fabric_1 = __webpack_require__(38);
	var Utilities_1 = __webpack_require__(22);
	__webpack_require__(41);
	var _layersByHostId = {};
	var Layer = (function (_super) {
	    __extends(Layer, _super);
	    function Layer(props) {
	        var _this = _super.call(this, props, {
	            // Make sure to deprecate old properties.
	            'onLayerMounted': 'onLayerDidMount'
	        }) || this;
	        if (_this.props.hostId) {
	            if (!_layersByHostId[_this.props.hostId]) {
	                _layersByHostId[_this.props.hostId] = [];
	            }
	            _layersByHostId[_this.props.hostId].push(_this);
	        }
	        return _this;
	    }
	    /**
	     * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
	     * care about the specific host.
	     */
	    Layer.notifyHostChanged = function (id) {
	        if (_layersByHostId[id]) {
	            _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
	        }
	    };
	    Layer.prototype.componentDidMount = function () {
	        this.componentDidUpdate();
	    };
	    Layer.prototype.componentWillUnmount = function () {
	        var _this = this;
	        this._removeLayerElement();
	        if (this.props.hostId) {
	            _layersByHostId[this.props.hostId] = _layersByHostId[this.props.hostId].filter(function (layer) { return layer !== _this; });
	            if (!_layersByHostId[this.props.hostId].length) {
	                delete _layersByHostId[this.props.hostId];
	            }
	        }
	    };
	    Layer.prototype.componentDidUpdate = function () {
	        var _this = this;
	        var host = this._getHost();
	        if (host !== this._host) {
	            this._removeLayerElement();
	        }
	        if (host) {
	            this._host = host;
	            if (!this._layerElement) {
	                var doc = Utilities_1.getDocument(this._rootElement);
	                this._layerElement = doc.createElement('div');
	                this._layerElement.className = Utilities_1.css('ms-Layer', {
	                    'ms-Layer--fixed': !this.props.hostId
	                });
	                host.appendChild(this._layerElement);
	                Utilities_1.setVirtualParent(this._layerElement, this._rootElement);
	            }
	            // Using this 'unstable' method allows us to retain the React context across the layer projection.
	            ReactDOM.unstable_renderSubtreeIntoContainer(this, React.createElement(Fabric_1.Fabric, { className: 'ms-Layer-content' }, this.props.children), this._layerElement, function () {
	                if (!_this._hasMounted) {
	                    _this._hasMounted = true;
	                    // TODO: @deprecated cleanup required.
	                    if (_this.props.onLayerMounted) {
	                        _this.props.onLayerMounted();
	                    }
	                    _this.props.onLayerDidMount();
	                }
	            });
	        }
	    };
	    Layer.prototype.render = function () {
	        return (React.createElement("span", { className: 'ms-Layer', ref: this._resolveRef('_rootElement') }));
	    };
	    Layer.prototype._removeLayerElement = function () {
	        if (this._layerElement) {
	            this.props.onLayerWillUnmount();
	            ReactDOM.unmountComponentAtNode(this._layerElement);
	            var parentNode = this._layerElement.parentNode;
	            if (parentNode) {
	                parentNode.removeChild(this._layerElement);
	            }
	            this._layerElement = undefined;
	            this._hasMounted = false;
	        }
	    };
	    Layer.prototype._getHost = function () {
	        var hostId = this.props.hostId;
	        var doc = Utilities_1.getDocument(this._rootElement);
	        if (hostId) {
	            return doc.getElementById(hostId);
	        }
	        else {
	            return doc.body;
	        }
	    };
	    return Layer;
	}(Utilities_1.BaseComponent));
	Layer.defaultProps = {
	    onLayerDidMount: function () { return undefined; },
	    onLayerWillUnmount: function () { return undefined; }
	};
	exports.Layer = Layer;
	


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(39));
	


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(40));
	


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(7);
	var EventGroup_1 = __webpack_require__(14);
	var KeyCodes_1 = __webpack_require__(23);
	var DIRECTIONAL_KEY_CODES = [
	    KeyCodes_1.KeyCodes.up,
	    KeyCodes_1.KeyCodes.down,
	    KeyCodes_1.KeyCodes.left,
	    KeyCodes_1.KeyCodes.right,
	    KeyCodes_1.KeyCodes.home,
	    KeyCodes_1.KeyCodes.end,
	    KeyCodes_1.KeyCodes.tab,
	    KeyCodes_1.KeyCodes.pageUp,
	    KeyCodes_1.KeyCodes.pageDown
	];
	// We will track the last focus visibility state so that if we tear down and recreate
	// the Fabric component, we will use the last known value as the default.
	var _lastIsFocusVisible = false;
	// Ensure that the HTML element has a dir specified. This helps to ensure RTL/LTR macros in css for all components will work.
	if (typeof (document) === 'object' && document.documentElement && !document.documentElement.getAttribute('dir')) {
	    document.documentElement.setAttribute('dir', 'ltr');
	}
	var Fabric = (function (_super) {
	    __extends(Fabric, _super);
	    function Fabric() {
	        var _this = _super.call(this) || this;
	        _this.state = {
	            isFocusVisible: _lastIsFocusVisible
	        };
	        _this._events = new EventGroup_1.EventGroup(_this);
	        return _this;
	    }
	    Fabric.prototype.componentDidMount = function () {
	        this._events.on(document.body, 'mousedown', this._onMouseDown, true);
	        this._events.on(document.body, 'keydown', this._onKeyDown, true);
	    };
	    Fabric.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    Fabric.prototype.render = function () {
	        var isFocusVisible = this.state.isFocusVisible;
	        var rootClass = css_1.css('ms-Fabric ms-font-m', this.props.className, {
	            'is-focusVisible': isFocusVisible
	        });
	        return (React.createElement("div", __assign({}, this.props, { className: rootClass, ref: 'root' })));
	    };
	    Fabric.prototype._onMouseDown = function () {
	        if (this.state.isFocusVisible) {
	            this.setState({
	                isFocusVisible: false
	            });
	            _lastIsFocusVisible = false;
	        }
	    };
	    Fabric.prototype._onKeyDown = function (ev) {
	        if (!this.state.isFocusVisible && DIRECTIONAL_KEY_CODES.indexOf(ev.which) > -1) {
	            this.setState({
	                isFocusVisible: true
	            });
	            _lastIsFocusVisible = true;
	        }
	    };
	    return Fabric;
	}(React.Component));
	exports.Fabric = Fabric;
	


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Layer--fixed{position:fixed;z-index:1000000;top:0;left:0;width:100vw;height:100vh;visibility:hidden}.ms-Layer-content{visibility:visible}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(22);
	var Layer_1 = __webpack_require__(37);
	var LayerHost = (function (_super) {
	    __extends(LayerHost, _super);
	    function LayerHost() {
	        return _super.apply(this, arguments) || this;
	    }
	    LayerHost.prototype.shouldComponentUpdate = function () {
	        return false;
	    };
	    LayerHost.prototype.componentDidMount = function () {
	        Layer_1.Layer.notifyHostChanged(this.props.id);
	    };
	    LayerHost.prototype.componentWillUnmount = function () {
	        Layer_1.Layer.notifyHostChanged(this.props.id);
	    };
	    LayerHost.prototype.render = function () {
	        return (React.createElement("div", __assign({}, this.props, { className: Utilities_1.css('ms-LayerHost', this.props.className) })));
	    };
	    return LayerHost;
	}(Utilities_1.BaseComponent));
	exports.LayerHost = LayerHost;
	


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	__webpack_require__(44);
	var DialogFooter = (function (_super) {
	    __extends(DialogFooter, _super);
	    function DialogFooter() {
	        return _super.apply(this, arguments) || this;
	    }
	    DialogFooter.prototype.render = function () {
	        return (React.createElement("div", { className: 'ms-Dialog-actions' },
	            React.createElement("div", { className: 'ms-Dialog-actionsRight' }, this._renderChildrenAsActions())));
	    };
	    DialogFooter.prototype._renderChildrenAsActions = function () {
	        return React.Children.map(this.props.children, function (child) {
	            return React.createElement("span", { className: 'ms-Dialog-action' }, child);
	        });
	    };
	    return DialogFooter;
	}(React.Component));
	exports.DialogFooter = DialogFooter;
	


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(16);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Dialog{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;background-color:transparent;position:fixed;height:100%;width:100%;top:0;display:none}html[dir=ltr] .ms-Dialog{left:0}html[dir=rtl] .ms-Dialog{right:0}.ms-Dialog .ms-Button.ms-Button--compound{display:block}html[dir=ltr] .ms-Dialog .ms-Button.ms-Button--compound{margin-left:0}html[dir=rtl] .ms-Dialog .ms-Button.ms-Button--compound{margin-right:0}@media screen and (-ms-high-contrast:active){.ms-Dialog .ms-Overlay{opacity:0}}.ms-Dialog.is-open{display:block}.ms-Dialog.is-open{display:block;line-height:100vh;text-align:center}.ms-Dialog.is-open::before{vertical-align:middle;display:inline-block;content:\"\";height:100%;width:0}.ms-Dialog.is-animatingOpen{-webkit-animation-duration:367ms;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeIn;animation-fill-mode:both;-webkit-animation-duration:267ms;animation-duration:267ms}.ms-Dialog.is-animatingClose{-webkit-animation-duration:367ms;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeOut;animation-fill-mode:both;-webkit-animation-duration:167ms;animation-duration:167ms}.ms-Dialog-main{vertical-align:middle;display:inline-block;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-sizing:border-box;line-height:1.35;margin:auto;width:288px;position:relative;outline:3px solid transparent;max-height:100%;overflow-y:auto}html[dir=ltr] .ms-Dialog-main{text-align:left}html[dir=rtl] .ms-Dialog-main{text-align:right}.ms-Dialog-button.ms-Dialog-button--close{display:none}.ms-Dialog-button.ms-Dialog-button--close .ms-Icon.ms-Icon--Cancel{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:16px}.ms-Dialog-inner{padding:0 28px 20px}.ms-Dialog-header{position:relative;width:100%;box-sizing:border-box}.ms-Dialog-title{margin:0;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:21px;font-weight:100;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";padding:20px 36px 20px 28px}html[dir=rtl] .ms-Dialog-title{padding:20px 28px 20px 36px}.ms-Dialog-topButton{position:absolute;top:0;padding:12px 12px 0 0}html[dir=ltr] .ms-Dialog-topButton{right:0}html[dir=rtl] .ms-Dialog-topButton{left:0}html[dir=rtl] .ms-Dialog-topButton{padding:12px 0 0 12px}.ms-Dialog-content{position:relative;width:100%}.ms-Dialog-content .ms-Button.ms-Button--compound{margin-bottom:20px}.ms-Dialog-content .ms-Button.ms-Button--compound:last-child{margin-bottom:0}.ms-Dialog-subText{margin:0 0 20px 0;padding-top:8px;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:300;line-height:1.5}.ms-Dialog-actions{position:relative;width:100%;min-height:24px;line-height:24px;margin:20px 0 0;font-size:0}.ms-Dialog-actions .ms-Button{line-height:normal}.ms-Dialog-actionsRight{font-size:0}html[dir=ltr] .ms-Dialog-actionsRight{text-align:right}html[dir=rtl] .ms-Dialog-actionsRight{text-align:left}html[dir=ltr] .ms-Dialog-actionsRight{margin-right:-4px}html[dir=rtl] .ms-Dialog-actionsRight{margin-left:-4px}.ms-Dialog-actionsRight .ms-Dialog-action{margin:0 4px}.ms-Dialog.ms-Dialog--close:not(.ms-Dialog--lgHeader) .ms-Dialog-button.ms-Dialog-button--close{display:block}.ms-Dialog.ms-Dialog--multiline .ms-Dialog-title{font-size:28px}.ms-Dialog.ms-Dialog--multiline .ms-Dialog-inner{padding:0 20px 20px}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-header{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-title{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:28px;font-weight:100;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";padding:26px 28px 28px;margin-bottom:8px}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-subText{font-size:14px}@media (min-width:480px){.ms-Dialog-main{width:auto;min-width:288px;max-width:340px}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(46));
	


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var KeyCodes_1 = __webpack_require__(23);
	var BaseComponent_1 = __webpack_require__(12);
	var Utilities_1 = __webpack_require__(22);
	var focus_1 = __webpack_require__(29);
	var dom_1 = __webpack_require__(26);
	/**
	 * This adds accessibility to Dialog and Panel controls
	 */
	var Popup = (function (_super) {
	    __extends(Popup, _super);
	    function Popup() {
	        return _super.apply(this, arguments) || this;
	    }
	    Popup.prototype.componentWillMount = function () {
	        this._originalFocusedElement = dom_1.getDocument().activeElement;
	    };
	    Popup.prototype.componentDidMount = function () {
	        var _this = this;
	        this._events.on(this.refs.root, 'keydown', this._onKeyDown);
	        this._events.on(this.refs.root, 'focus', function () { return _this._containsFocus = true; }, true);
	        this._events.on(this.refs.root, 'blur', function () { return _this._containsFocus = false; }, true);
	        if (focus_1.doesElementContainFocus(this.refs.root)) {
	            this._containsFocus = true;
	        }
	    };
	    Popup.prototype.componentWillUnmount = function () {
	        if (this.props.shouldRestoreFocus &&
	            this._originalFocusedElement &&
	            this._containsFocus &&
	            this._originalFocusedElement !== window) {
	            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
	            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
	            // to reset the focus back to the thing it thinks should have been focused.
	            if (this._originalFocusedElement) {
	                this._originalFocusedElement.focus();
	            }
	        }
	    };
	    Popup.prototype.render = function () {
	        var _a = this.props, role = _a.role, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy;
	        return (React.createElement("div", __assign({ ref: 'root' }, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), { className: className, role: role, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy }), this.props.children));
	    };
	    Popup.prototype._onKeyDown = function (ev) {
	        switch (ev.which) {
	            case KeyCodes_1.KeyCodes.escape:
	                if (this.props.onDismiss) {
	                    this.props.onDismiss();
	                    ev.preventDefault();
	                    ev.stopPropagation();
	                }
	                break;
	        }
	    };
	    return Popup;
	}(BaseComponent_1.BaseComponent));
	Popup.defaultProps = {
	    shouldRestoreFocus: true
	};
	exports.Popup = Popup;
	


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var BaseDecorator_1 = __webpack_require__(48);
	var dom_1 = __webpack_require__(26);
	var ResponsiveMode;
	(function (ResponsiveMode) {
	    ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
	    ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
	    ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
	    ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
	    ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
	    ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
	})(ResponsiveMode = exports.ResponsiveMode || (exports.ResponsiveMode = {}));
	var RESPONSIVE_MAX_CONSTRAINT = [
	    479,
	    639,
	    1023,
	    1365,
	    1919,
	    99999999
	];
	var _defaultMode;
	/**
	 * Allows a server rendered scenario to provide a default responsive mode.
	 */
	function setResponsiveMode(responsiveMode) {
	    _defaultMode = responsiveMode;
	}
	exports.setResponsiveMode = setResponsiveMode;
	function withResponsiveMode(ComposedComponent) {
	    return (function (_super) {
	        __extends(WithResponsiveMode, _super);
	        function WithResponsiveMode() {
	            var _this = _super.call(this) || this;
	            _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
	            _this.state = {
	                responsiveMode: _this._getResponsiveMode()
	            };
	            return _this;
	        }
	        WithResponsiveMode.prototype.componentDidMount = function () {
	            var _this = this;
	            this._events.on(window, 'resize', function () {
	                var responsiveMode = _this._getResponsiveMode();
	                if (responsiveMode !== _this.state.responsiveMode) {
	                    _this.setState({
	                        responsiveMode: responsiveMode
	                    });
	                }
	            });
	        };
	        WithResponsiveMode.prototype.componentWillUnmount = function () {
	            this._events.dispose();
	        };
	        WithResponsiveMode.prototype.render = function () {
	            var responsiveMode = this.state.responsiveMode;
	            return (React.createElement(ComposedComponent, __assign({ ref: this._updateComposedComponentRef, responsiveMode: responsiveMode }, this.props)));
	        };
	        WithResponsiveMode.prototype._getResponsiveMode = function () {
	            var responsiveMode = ResponsiveMode.small;
	            var win = dom_1.getWindow();
	            if (typeof win !== 'undefined') {
	                while (win.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
	                    responsiveMode++;
	                }
	            }
	            else {
	                if (_defaultMode !== undefined) {
	                    responsiveMode = _defaultMode;
	                }
	                else {
	                    throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' +
	                        'Call setResponsiveMode to define what the responsive mode is.');
	                }
	            }
	            return responsiveMode;
	        };
	        return WithResponsiveMode;
	    }(BaseDecorator_1.BaseDecorator));
	}
	exports.withResponsiveMode = withResponsiveMode;
	


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var hoist_1 = __webpack_require__(27);
	var BaseComponent_1 = __webpack_require__(12);
	var BaseDecorator = (function (_super) {
	    __extends(BaseDecorator, _super);
	    function BaseDecorator() {
	        var _this = _super.call(this) || this;
	        _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
	        return _this;
	    }
	    /**
	     * Updates the ref to the component composed by the decorator, which will also take care of hoisting
	     * (and unhoisting as appropriate) methods from said component.
	     *
	     * Pass this method as the argument to the 'ref' property of the composed component.
	     */
	    BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
	        this._composedComponentInstance = composedComponentInstance;
	        if (composedComponentInstance) {
	            this._hoisted = hoist_1.hoistMethods(this, composedComponentInstance);
	        }
	        else if (this._hoisted) {
	            hoist_1.unhoistMethods(this, this._hoisted);
	        }
	    };
	    return BaseDecorator;
	}(BaseComponent_1.BaseComponent));
	exports.BaseDecorator = BaseDecorator;
	


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.0.5
	 */
	
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }
	
	  return useSetTimeout();
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(50);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;
	
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(16);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);
	
	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }
	
	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._result = new Array(this.length);
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;
	
	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;
	
	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);
	
	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};
	
	function polyfill() {
	    var local = undefined;
	
	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }
	
	    var P = local.Promise;
	
	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }
	
	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }
	
	    local.Promise = Promise;
	}
	
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;
	
	return Promise;

	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), (function() { return this; }())))

/***/ },
/* 50 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ }
/******/ ]);
//# sourceMappingURL=appRoot.js.map