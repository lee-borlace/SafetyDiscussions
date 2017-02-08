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
	const SafetyDiscussions_1 = __webpack_require__(3);
	// Polyfill Promise.
	const es6_promise_1 = __webpack_require__(143);
	es6_promise_1.polyfill();
	ReactDOM.render(React.createElement(SafetyDiscussions_1.SafetyDiscussions, null), document.getElementById('reactRoot'));


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
	const MyDiscussions_1 = __webpack_require__(4);
	const AddDiscussion_1 = __webpack_require__(35);
	const Spinner_1 = __webpack_require__(95);
	const MessageBar_1 = __webpack_require__(23);
	const DiscussionService_1 = __webpack_require__(140);
	class SafetyDiscussions extends React.Component {
	    constructor() {
	        super();
	        this.state = {
	            MyDiscussions: [],
	            IsLoading: false,
	            IsError: false
	        };
	    }
	    componentDidMount() {
	        this.LoadDiscussions();
	    }
	    // Main renderer.
	    render() {
	        return (React.createElement("div", { className: "ms-Grid" },
	            React.createElement("div", { className: "ms-Grid-row" },
	                React.createElement("div", { className: "ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-lg4" },
	                    this.state.IsError &&
	                        React.createElement("div", null,
	                            React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.error }, "Sorry, there was a problem loading your data. Please refresh the page and try again."),
	                            React.createElement("br", null)),
	                    this.state.IsLoading &&
	                        React.createElement(Spinner_1.Spinner, { label: 'Loading discussions...' }),
	                    !this.state.IsLoading && !this.state.IsError &&
	                        React.createElement("div", null,
	                            React.createElement(AddDiscussion_1.AddDiscussion, { NewDiscussionCreated: this.NewDiscussionCreated.bind(this) }),
	                            React.createElement(MyDiscussions_1.MyDiscussions, { MyDiscussions: this.state.MyDiscussions }))))));
	    }
	    // New discussion has been created. Re-load discussions.
	    NewDiscussionCreated(discussion) {
	        console.log("SafetyDiscussions.newDiscussionCreated()");
	        // Re-load discussions.
	        this.LoadDiscussions();
	    }
	    LoadDiscussions() {
	        // Load existing discussions.
	        this.setState({ IsLoading: true });
	        let service = new DiscussionService_1.DiscussionService();
	        service
	            .GetMyDiscussions()
	            .then((discussions) => {
	            this.setState({
	                IsError: false,
	                IsLoading: false,
	                MyDiscussions: discussions
	            });
	        })
	            .catch((error) => {
	            console.log(error);
	            this.setState({
	                IsError: true,
	                IsLoading: false
	            });
	        });
	    }
	}
	exports.SafetyDiscussions = SafetyDiscussions;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(1);
	const List_1 = __webpack_require__(5);
	const MessageBar_1 = __webpack_require__(23);
	const DiscussionListItem_1 = __webpack_require__(34);
	class MyDiscussions extends React.Component {
	    render() {
	        return (React.createElement("div", null,
	            this.props.MyDiscussions.length <= 0 &&
	                React.createElement(MessageBar_1.MessageBar, null, "No discussions to show here yet."),
	            this.props.MyDiscussions.length > 0 &&
	                React.createElement(List_1.List, { items: this.props.MyDiscussions, onRenderCell: (item, index) => (React.createElement(DiscussionListItem_1.DiscussionListItem, { Discussion: item })) })));
	    }
	}
	exports.MyDiscussions = MyDiscussions;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(6));
	


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(7));
	


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(8);
	var scroll_1 = __webpack_require__(22);
	var RESIZE_DELAY = 16;
	var MIN_SCROLL_UPDATE_DELAY = 100;
	var MAX_SCROLL_UPDATE_DELAY = 500;
	var IDLE_DEBOUNCE_DELAY = 200;
	var DEFAULT_ITEMS_PER_PAGE = 10;
	var DEFAULT_PAGE_HEIGHT = 30;
	var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
	var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
	var EMPTY_RECT = {
	    top: -1,
	    bottom: -1,
	    left: -1,
	    right: -1,
	    width: 0,
	    height: 0
	};
	// Naming expensive measures so that they're named in profiles.
	var _measurePageRect = function (element) { return element.getBoundingClientRect(); };
	var _measureSurfaceRect = _measurePageRect;
	/**
	 * The List renders virtualized pages of items. Each page's item count is determined by the getItemCountForPage callback if
	 * provided by the caller, or 10 as default. Each page's height is determined by the getPageHeight callback if provided by
	 * the caller, or by cached measurements if available, or by a running average, or a default fallback.
	 *
	 * The algorithm for rendering pages works like this:
	 *
	 * 1. Predict visible pages based on "current measure data" (page heights, surface position, visible window)
	 * 2. If changes are necessary, apply changes (add/remove pages)
	 * 3. For pages that are added, measure the page heights if we need to using getBoundingClientRect
	 * 4. If measurements don't match predictions, update measure data and goto step 1 asynchronously
	 *
	 * Measuring too frequently can pull performance down significantly. To compensate, we cache measured values so that
	 * we can avoid re-measuring during operations that should not alter heights, like scrolling.
	 *
	 * However, certain operations can make measure data stale. For example, resizing the list, or passing in new props,
	 * or forcing an update change cause pages to shrink/grow. When these operations occur, we increment a measureVersion
	 * number, which we associate with cached measurements and use to determine if a remeasure should occur.
	 */
	var List = (function (_super) {
	    __extends(List, _super);
	    function List(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            pages: []
	        };
	        _this._estimatedPageHeight = 0;
	        _this._totalEstimates = 0;
	        _this._requiredWindowsAhead = 0;
	        _this._requiredWindowsBehind = 0;
	        // Track the measure version for everything.
	        _this._measureVersion = 0;
	        // Ensure that scrolls are lazy updated.
	        _this._onAsyncScroll = _this._async.debounce(_this._onAsyncScroll, MIN_SCROLL_UPDATE_DELAY, {
	            leading: false,
	            maxWait: MAX_SCROLL_UPDATE_DELAY
	        });
	        _this._onAsyncIdle = _this._async.debounce(_this._onAsyncIdle, IDLE_DEBOUNCE_DELAY, {
	            leading: false
	        });
	        _this._onAsyncResize = _this._async.debounce(_this._onAsyncResize, RESIZE_DELAY, {
	            leading: false
	        });
	        _this._cachedPageHeights = {};
	        _this._estimatedPageHeight = 0;
	        _this._focusedIndex = -1;
	        _this._scrollingToIndex = -1;
	        return _this;
	    }
	    List.prototype.componentDidMount = function () {
	        this._updatePages();
	        this._measureVersion++;
	        this._scrollElement = scroll_1.findScrollableParent(this.refs.root);
	        this._events.on(window, 'resize', this._onAsyncResize);
	        this._events.on(this.refs.root, 'focus', this._onFocus, true);
	        if (this._scrollElement) {
	            this._events.on(this._scrollElement, 'scroll', this._onScroll);
	            this._events.on(this._scrollElement, 'scroll', this._onAsyncScroll);
	        }
	    };
	    List.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.items !== this.props.items ||
	            newProps.renderCount !== this.props.renderCount ||
	            newProps.startIndex !== this.props.startIndex) {
	            this._measureVersion++;
	            this._updatePages(newProps);
	        }
	    };
	    List.prototype.shouldComponentUpdate = function (newProps, newState) {
	        var _a = this.props, renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
	        var oldPages = this.state.pages;
	        var newPages = newState.pages, measureVersion = newState.measureVersion;
	        var shouldComponentUpdate = false;
	        if (this._measureVersion === measureVersion &&
	            newProps.renderedWindowsAhead === renderedWindowsAhead,
	            newProps.renderedWindowsBehind === renderedWindowsBehind,
	            newProps.items === this.props.items &&
	                oldPages.length === newPages.length) {
	            for (var i = 0; i < oldPages.length; i++) {
	                var oldPage = oldPages[i];
	                var newPage = newPages[i];
	                if ((oldPage.key !== newPage.key ||
	                    oldPage.itemCount !== newPage.itemCount)) {
	                    shouldComponentUpdate = true;
	                    break;
	                }
	            }
	        }
	        else {
	            shouldComponentUpdate = true;
	        }
	        return shouldComponentUpdate;
	    };
	    List.prototype.forceUpdate = function () {
	        // Ensure that when the list is force updated we update the pages first before render.
	        this._updateRenderRects(this.props, true);
	        this._updatePages();
	        this._measureVersion++;
	        _super.prototype.forceUpdate.call(this);
	    };
	    List.prototype.render = function () {
	        var className = this.props.className;
	        var pages = this.state.pages;
	        var pageElements = [];
	        for (var i = 0; i < pages.length; i++) {
	            pageElements.push(this._renderPage(pages[i]));
	        }
	        return (React.createElement("div", { ref: 'root', className: Utilities_1.css('ms-List', className) },
	            React.createElement("div", { ref: 'surface', className: 'ms-List-surface' }, pageElements)));
	    };
	    List.prototype._renderPage = function (page) {
	        var onRenderCell = this.props.onRenderCell;
	        var cells = [];
	        var pageStyle = this._getPageStyle(page);
	        for (var i = 0; page.items && i < page.items.length; i++) {
	            var item = page.items[i];
	            var itemKey = (item ? item.key : null);
	            if (itemKey === null || itemKey === undefined) {
	                itemKey = page.startIndex + i;
	            }
	            cells.push(React.createElement("div", { className: 'ms-List-cell', key: itemKey, "data-list-index": i + page.startIndex, "data-automationid": 'ListCell' }, onRenderCell(item, page.startIndex + i)));
	        }
	        return (React.createElement("div", { className: 'ms-List-page', key: page.key, ref: page.key, style: pageStyle }, cells));
	    };
	    /** Generate the style object for the page. */
	    List.prototype._getPageStyle = function (page) {
	        var style;
	        var getPageStyle = this.props.getPageStyle;
	        if (getPageStyle) {
	            style = getPageStyle(page);
	        }
	        if (!page.items) {
	            style = style || {};
	            style.height = page.height;
	        }
	        return style;
	    };
	    /** Track the last item index focused so that we ensure we keep it rendered. */
	    List.prototype._onFocus = function (ev) {
	        var target = ev.target;
	        while (target !== this.refs.surface) {
	            var indexString = target.getAttribute('data-list-index');
	            if (indexString) {
	                this._focusedIndex = Number(indexString);
	                break;
	            }
	            target = Utilities_1.getParent(target);
	        }
	    };
	    /**
	     * Called synchronously to reset the required render range to 0 on scrolling. After async scroll has executed,
	     * we will call onAsyncIdle which will reset it back to it's correct value.
	     */
	    List.prototype._onScroll = function () {
	        this._requiredWindowsAhead = 0;
	        this._requiredWindowsBehind = 0;
	    };
	    /**
	     * Debounced method to asynchronously update the visible region on a scroll event.
	     */
	    List.prototype._onAsyncScroll = function () {
	        this._updateRenderRects();
	        // Only update pages when the visible rect falls outside of the materialized rect.
	        if (!this._materializedRect || !_isContainedWithin(this._requiredRect, this._materializedRect)) {
	            this._updatePages();
	        }
	        else {
	        }
	    };
	    /**
	     * This is an async debounced method that will try and increment the windows we render. If we can increment
	     * either, we increase the amount we render and re-evaluate.
	     */
	    List.prototype._onAsyncIdle = function () {
	        var _a = this.props, renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
	        var _b = this, requiredWindowsAhead = _b._requiredWindowsAhead, requiredWindowsBehind = _b._requiredWindowsBehind;
	        var windowsAhead = Math.min(renderedWindowsAhead, requiredWindowsAhead + 1);
	        var windowsBehind = Math.min(renderedWindowsBehind, requiredWindowsBehind + 1);
	        if (windowsAhead !== requiredWindowsAhead || windowsBehind !== requiredWindowsBehind) {
	            // console.log('idling', windowsBehind, windowsAhead);
	            this._requiredWindowsAhead = windowsAhead;
	            this._requiredWindowsBehind = windowsBehind;
	            this._updateRenderRects();
	            this._updatePages();
	        }
	        if (renderedWindowsAhead > windowsAhead || renderedWindowsBehind > windowsBehind) {
	            // Async increment on next tick.
	            this._onAsyncIdle();
	        }
	    };
	    List.prototype._onAsyncResize = function () {
	        this.forceUpdate();
	    };
	    List.prototype._updatePages = function (props) {
	        var _this = this;
	        var _a = (props || this.props), items = _a.items, startIndex = _a.startIndex, renderCount = _a.renderCount;
	        renderCount = this._getRenderCount(props);
	        // console.log('updating pages');
	        if (!this._requiredRect) {
	            this._updateRenderRects(props);
	        }
	        var newListState = this._buildPages(items, startIndex, renderCount);
	        var oldListPages = this.state.pages;
	        this.setState(newListState, function () {
	            // If measured version is invalid since we've updated the DOM
	            var heightsChanged = _this._updatePageMeasurements(oldListPages, newListState.pages);
	            // On first render, we should re-measure so that we don't get a visual glitch.
	            if (heightsChanged) {
	                _this._materializedRect = null;
	                if (!_this._hasCompletedFirstRender) {
	                    _this._hasCompletedFirstRender = true;
	                    _this._updatePages();
	                }
	                else {
	                    _this._onAsyncScroll();
	                }
	            }
	            else {
	                // Enqueue an idle bump.
	                _this._onAsyncIdle();
	            }
	        });
	    };
	    List.prototype._updatePageMeasurements = function (oldPages, newPages) {
	        var renderedIndexes = {};
	        var heightChanged = false;
	        var renderCount = this._getRenderCount();
	        for (var i = 0; i < oldPages.length; i++) {
	            var page = oldPages[i];
	            if (page.items) {
	                renderedIndexes[page.startIndex] = page;
	            }
	        }
	        for (var i = 0; i < newPages.length; i++) {
	            var page = newPages[i];
	            if (page.items) {
	                // Only evaluate page height if the page contains less items than total.
	                if (page.items.length < renderCount) {
	                    heightChanged = this._measurePage(page) || heightChanged;
	                }
	                if (!renderedIndexes[page.startIndex]) {
	                    this._onPageAdded(page);
	                }
	                else {
	                    delete renderedIndexes[page.startIndex];
	                }
	            }
	        }
	        for (var index in renderedIndexes) {
	            if (renderedIndexes.hasOwnProperty(index)) {
	                this._onPageRemoved(renderedIndexes[index]);
	            }
	        }
	        return heightChanged;
	    };
	    /**
	     * Given a page, measure its dimensions, update cache.
	     * @returns True if the height has changed.
	     */
	    List.prototype._measurePage = function (page) {
	        var hasChangedHeight = false;
	        var pageElement = this.refs[page.key];
	        var cachedHeight = this._cachedPageHeights[page.startIndex];
	        // console.log('   * measure attempt', page.startIndex, cachedHeight);
	        if (pageElement && (!cachedHeight || cachedHeight.measureVersion !== this._measureVersion)) {
	            var newClientRect = _measurePageRect(pageElement);
	            hasChangedHeight = page.height !== newClientRect.height;
	            // console.warn(' *** expensive page measure', page.startIndex, page.height, newClientRect.height);
	            page.height = newClientRect.height;
	            this._cachedPageHeights[page.startIndex] = {
	                height: newClientRect.height,
	                measureVersion: this._measureVersion
	            };
	            this._estimatedPageHeight = Math.round(((this._estimatedPageHeight * this._totalEstimates) + newClientRect.height) /
	                (this._totalEstimates + 1));
	            this._totalEstimates++;
	        }
	        return hasChangedHeight;
	    };
	    /** Called when a page has been added to the DOM. */
	    List.prototype._onPageAdded = function (page) {
	        var onPageAdded = this.props.onPageAdded;
	        // console.log('page added', page.startIndex, this.state.pages.map(page=>page.key).join(', '));
	        if (onPageAdded) {
	            onPageAdded(page);
	        }
	    };
	    /** Called when a page has been removed from the DOM. */
	    List.prototype._onPageRemoved = function (page) {
	        var onPageRemoved = this.props.onPageRemoved;
	        // console.log('  --- page removed', page.startIndex, this.state.pages.map(page=>page.key).join(', '));
	        if (onPageRemoved) {
	            onPageRemoved(page);
	        }
	    };
	    /** Build up the pages that should be rendered. */
	    List.prototype._buildPages = function (items, startIndex, renderCount) {
	        var materializedRect = Utilities_1.assign({}, EMPTY_RECT);
	        var itemsPerPage = 1;
	        var pages = [];
	        var pageTop = 0;
	        var currentSpacer = null;
	        var focusedIndex = this._focusedIndex;
	        var endIndex = startIndex + renderCount;
	        // First render is very important to track; when we render cells, we have no idea of estimated page height.
	        // So we should default to rendering only the first page so that we can get information.
	        // However if the user provides a measure function, let's just assume they know the right heights.
	        var isFirstRender = this._estimatedPageHeight === 0 && !this.props.getPageHeight;
	        var _loop_1 = function (itemIndex) {
	            itemsPerPage = this_1._getItemCountForPage(itemIndex, this_1._allowedRect);
	            var pageHeight = this_1._getPageHeight(itemIndex, itemsPerPage, this_1._surfaceRect);
	            var pageBottom = pageTop + pageHeight - 1;
	            var isPageRendered = Utilities_1.findIndex(this_1.state.pages, function (page) { return page.items && page.startIndex === itemIndex; }) > -1;
	            var isPageInAllowedRange = pageBottom >= this_1._allowedRect.top && pageTop <= this_1._allowedRect.bottom;
	            var isPageInRequiredRange = pageBottom >= this_1._requiredRect.top && pageTop <= this_1._requiredRect.bottom;
	            var isPageVisible = !isFirstRender && (isPageInRequiredRange || (isPageInAllowedRange && isPageRendered));
	            var isPageFocused = focusedIndex >= itemIndex && focusedIndex < (itemIndex + itemsPerPage);
	            var isFirstPage = itemIndex === startIndex;
	            // console.log('building page', itemIndex, 'pageTop: ' + pageTop, 'inAllowed: ' + isPageInAllowedRange, 'inRequired: ' + isPageInRequiredRange);
	            // Only render whats visible, focused, or first page.
	            if (isPageVisible || isPageFocused || isFirstPage) {
	                if (currentSpacer) {
	                    pages.push(currentSpacer);
	                    currentSpacer = null;
	                }
	                var itemsInPage = Math.min(itemsPerPage, endIndex - itemIndex);
	                var newPage = this_1._createPage(null, items.slice(itemIndex, itemIndex + itemsInPage), itemIndex);
	                newPage.top = pageTop;
	                newPage.height = pageHeight;
	                pages.push(newPage);
	                if (isPageInRequiredRange) {
	                    _mergeRect(materializedRect, {
	                        top: pageTop,
	                        bottom: pageBottom,
	                        height: pageHeight,
	                        left: this_1._allowedRect.left,
	                        right: this_1._allowedRect.right,
	                        width: this_1._allowedRect.width
	                    });
	                }
	            }
	            else {
	                if (!currentSpacer) {
	                    currentSpacer = this_1._createPage('spacer-' + itemIndex, null, itemIndex, 0);
	                }
	                currentSpacer.height = (currentSpacer.height || 0) + (pageBottom - pageTop) + 1;
	                currentSpacer.itemCount += itemsPerPage;
	            }
	            pageTop += (pageBottom - pageTop + 1);
	            if (isFirstRender) {
	                return "break";
	            }
	        };
	        var this_1 = this;
	        for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
	            var state_1 = _loop_1(itemIndex);
	            if (state_1 === "break")
	                break;
	        }
	        if (currentSpacer) {
	            currentSpacer.key = 'spacer-end';
	            pages.push(currentSpacer);
	        }
	        this._materializedRect = materializedRect;
	        // console.log('materialized: ', materializedRect);
	        return {
	            pages: pages,
	            measureVersion: this._measureVersion
	        };
	    };
	    /**
	     * Get the pixel height of a give page. Will use the props getPageHeight first, and if not provided, fallback to
	     * cached height, or estimated page height, or default page height.
	     */
	    List.prototype._getPageHeight = function (itemIndex, itemsPerPage, visibleRect) {
	        if (this.props.getPageHeight) {
	            return this.props.getPageHeight(itemIndex, visibleRect);
	        }
	        else {
	            var cachedHeight = (this._cachedPageHeights[itemIndex]);
	            return cachedHeight ? cachedHeight.height : (this._estimatedPageHeight || DEFAULT_PAGE_HEIGHT);
	        }
	    };
	    List.prototype._getItemCountForPage = function (itemIndex, visibileRect) {
	        var itemsPerPage = this.props.getItemCountForPage ? this.props.getItemCountForPage(itemIndex, visibileRect) : DEFAULT_ITEMS_PER_PAGE;
	        return itemsPerPage ? itemsPerPage : DEFAULT_ITEMS_PER_PAGE;
	    };
	    List.prototype._createPage = function (pageKey, items, startIndex, count, style) {
	        pageKey = pageKey || ('page-' + startIndex);
	        // Fill undefined cells because array.map will ignore undefined cells.
	        if (items) {
	            for (var i = 0; i < items.length; i++) {
	                items[i] = items[i] || null;
	            }
	        }
	        return {
	            key: pageKey,
	            startIndex: startIndex === undefined ? -1 : startIndex,
	            itemCount: (count === undefined) ? (items ? items.length : 0) : count,
	            items: items,
	            style: style || {},
	            top: 0,
	            height: 0
	        };
	    };
	    List.prototype._getRenderCount = function (props) {
	        var _a = props || this.props, items = _a.items, startIndex = _a.startIndex, renderCount = _a.renderCount;
	        return (renderCount === undefined ? (items ? items.length - startIndex : 0) : renderCount);
	    };
	    /** Calculate the visible rect within the list where top: 0 and left: 0 is the top/left of the list. */
	    List.prototype._updateRenderRects = function (props, forceUpdate) {
	        var _a = (props || this.props), renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
	        var pages = this.state.pages;
	        var renderCount = this._getRenderCount(props);
	        var surfaceRect = this._surfaceRect;
	        // WARNING: EXPENSIVE CALL! We need to know the surface top relative to the window.
	        if (forceUpdate ||
	            !pages ||
	            !this._surfaceRect ||
	            (pages.length > 0 && pages[0].items && pages[0].items.length < renderCount)) {
	            surfaceRect = this._surfaceRect = _measureSurfaceRect(this.refs.surface);
	        }
	        // If the surface is above the container top or below the container bottom, or if this is not the first
	        // render return empty rect.
	        // The first time the list gets rendered we need to calculate the rectangle. The width of the list is
	        // used to calculate the width of the list items.
	        var visibleTop = Math.max(0, -surfaceRect.top);
	        var visibleRect = {
	            top: visibleTop,
	            left: surfaceRect.left,
	            bottom: visibleTop + window.innerHeight,
	            right: surfaceRect.right,
	            width: surfaceRect.width,
	            height: window.innerHeight
	        };
	        // The required/allowed rects are adjusted versions of the visible rect.
	        this._requiredRect = _expandRect(visibleRect, this._requiredWindowsBehind, this._requiredWindowsAhead);
	        this._allowedRect = _expandRect(visibleRect, renderedWindowsBehind, renderedWindowsAhead);
	    };
	    return List;
	}(Utilities_1.BaseComponent));
	List.defaultProps = {
	    startIndex: 0,
	    onRenderCell: function (item, index, containsFocus) { return (React.createElement("div", null, (item && item.name) || '')); },
	    renderedWindowsAhead: DEFAULT_RENDERED_WINDOWS_AHEAD,
	    renderedWindowsBehind: DEFAULT_RENDERED_WINDOWS_BEHIND
	};
	exports.List = List;
	function _expandRect(rect, pagesBefore, pagesAfter) {
	    var top = rect.top - (pagesBefore * rect.height);
	    var height = rect.height + ((pagesBefore + pagesAfter) * rect.height);
	    return {
	        top: top,
	        bottom: top + height,
	        height: height,
	        left: rect.left,
	        right: rect.right,
	        width: rect.width
	    };
	}
	function _isContainedWithin(innerRect, outerRect) {
	    return (innerRect.top >= outerRect.top &&
	        innerRect.left >= outerRect.left &&
	        innerRect.bottom <= outerRect.bottom &&
	        innerRect.right <= outerRect.right);
	}
	function _mergeRect(targetRect, newRect) {
	    targetRect.top = (newRect.top < targetRect.top || targetRect.top === -1) ? newRect.top : targetRect.top;
	    targetRect.left = (newRect.left < targetRect.left || targetRect.left === -1) ? newRect.left : targetRect.left;
	    targetRect.bottom = (newRect.bottom > targetRect.bottom || targetRect.bottom === -1) ? newRect.bottom : targetRect.bottom;
	    targetRect.right = (newRect.right > targetRect.right || targetRect.right === -1) ? newRect.right : targetRect.right;
	    targetRect.width = targetRect.right - targetRect.left + 1;
	    targetRect.height = targetRect.bottom - targetRect.top + 1;
	    return targetRect;
	}
	


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	__export(__webpack_require__(14));
	__export(__webpack_require__(15));
	__export(__webpack_require__(16));
	__export(__webpack_require__(11));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(20));
	__export(__webpack_require__(21));
	


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Async_1 = __webpack_require__(10);
	var EventGroup_1 = __webpack_require__(11);
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ },
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var KeyCodes_1 = __webpack_require__(12);
	var dom_1 = __webpack_require__(16);
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var object_1 = __webpack_require__(18);
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
/* 22 */
/***/ function(module, exports) {

	"use strict";
	var _scrollbarWidth;
	exports.DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
	/** Calculates the width of a scrollbar for the browser/os. */
	function getScrollbarWidth() {
	    if (_scrollbarWidth === undefined) {
	        var scrollDiv = document.createElement('div');
	        scrollDiv.style.setProperty('width', '100px');
	        scrollDiv.style.setProperty('height', '100px');
	        scrollDiv.style.setProperty('overflow', 'scroll');
	        scrollDiv.style.setProperty('position', 'absolute');
	        scrollDiv.style.setProperty('top', '-9999px');
	        document.body.appendChild(scrollDiv);
	        // Get the scrollbar width
	        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	        // Delete the DIV
	        document.body.removeChild(scrollDiv);
	    }
	    return _scrollbarWidth;
	}
	exports.getScrollbarWidth = getScrollbarWidth;
	/**
	 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
	 * document.body.
	 */
	function findScrollableParent(startingElement) {
	    var el = startingElement;
	    // First do a quick scan for the scrollable attribute.
	    while (el && el !== document.body) {
	        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
	            return el;
	        }
	        el = el.parentElement;
	    }
	    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
	    el = startingElement;
	    while (el && el !== document.body) {
	        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
	            var styles = getComputedStyle(el);
	            var overflowY = styles ? styles.getPropertyValue('overflow-y') : '';
	            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
	                return el;
	            }
	        }
	        el = el.parentElement;
	    }
	    // Fall back to window scroll.
	    if (!el || el === document.body) {
	        el = window;
	    }
	    return el;
	}
	exports.findScrollableParent = findScrollableParent;
	


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(24));
	


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(25));
	__export(__webpack_require__(33));
	


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Button_1 = __webpack_require__(26);
	__webpack_require__(32);
	var css_1 = __webpack_require__(15);
	var MessageBar_Props_1 = __webpack_require__(33);
	var object_1 = __webpack_require__(18);
	var MessageBar = (function (_super) {
	    __extends(MessageBar, _super);
	    function MessageBar(props) {
	        var _this = _super.call(this, props) || this;
	        _this.ICON_MAP = (_a = {},
	            _a[MessageBar_Props_1.MessageBarType.info] = 'Info',
	            _a[MessageBar_Props_1.MessageBarType.warning] = 'Info',
	            _a[MessageBar_Props_1.MessageBarType.error] = 'ErrorBadge',
	            _a[MessageBar_Props_1.MessageBarType.blocked] = 'Blocked',
	            _a[MessageBar_Props_1.MessageBarType.remove] = 'Blocked',
	            _a[MessageBar_Props_1.MessageBarType.severeWarning] = 'Warning',
	            _a[MessageBar_Props_1.MessageBarType.success] = 'Completed',
	            _a);
	        _this.state = {
	            labelId: object_1.getId('MessageBar')
	        };
	        return _this;
	        var _a;
	    }
	    MessageBar.prototype.render = function () {
	        var isMultiline = this.props.isMultiline;
	        return isMultiline ? this._renderMultiLine() : this._renderSingleLine();
	    };
	    MessageBar.prototype._getActionsDiv = function () {
	        if (this.props.actions) {
	            return this.props.isMultiline ?
	                React.createElement("div", { className: 'ms-MessageBar-actions' },
	                    " ",
	                    this.props.actions,
	                    " ") :
	                React.createElement("div", { className: 'ms-MessageBar-actionsOneline' },
	                    this._getDismissDiv(),
	                    this.props.actions);
	        }
	        return null;
	    };
	    MessageBar.prototype._getClassName = function () {
	        return css_1.css(this.props.className, 'ms-MessageBar', {
	            'ms-MessageBar': this.props.messageBarType === MessageBar_Props_1.MessageBarType.info,
	            'ms-MessageBar--error': this.props.messageBarType === MessageBar_Props_1.MessageBarType.error,
	            'ms-MessageBar--blocked': (this.props.messageBarType === MessageBar_Props_1.MessageBarType.blocked) || (this.props.messageBarType === MessageBar_Props_1.MessageBarType.remove),
	            'ms-MessageBar--severeWarning': this.props.messageBarType === MessageBar_Props_1.MessageBarType.severeWarning,
	            'ms-MessageBar--success': this.props.messageBarType === MessageBar_Props_1.MessageBarType.success,
	            'ms-MessageBar--warning': this.props.messageBarType === MessageBar_Props_1.MessageBarType.warning
	        });
	    };
	    MessageBar.prototype._getDismissDiv = function () {
	        if (this.props.onDismiss != null) {
	            return React.createElement(Button_1.Button, { disabled: false, className: 'ms-MessageBar-dismissal', buttonType: Button_1.ButtonType.icon, onClick: this.props.onDismiss, icon: 'Cancel', ariaLabel: this.props.dismissButtonAriaLabel });
	        }
	        return null;
	    };
	    MessageBar.prototype._getIconSpan = function () {
	        return React.createElement("div", { className: 'ms-MessageBar-icon' },
	            React.createElement("i", { className: "ms-Icon ms-Icon--" + this.ICON_MAP[this.props.messageBarType] }));
	    };
	    MessageBar.prototype._getInnerTextClassName = function () {
	        return this.props.onDismiss || this.props.actions ? 'ms-MessageBar-innerTextPadding' : 'ms-MessageBar-innerText';
	    };
	    MessageBar.prototype._renderMultiLine = function () {
	        return (React.createElement("div", { className: this._getClassName() + ' ms-MessageBar-multiline', role: 'status', "aria-live": 'polite', "aria-controls": 'ms-MessageBar-text' },
	            React.createElement("div", { className: 'ms-MessageBar-content' },
	                this._getIconSpan(),
	                React.createElement("div", { className: 'ms-MessageBar-actionables' },
	                    this._getDismissDiv(),
	                    React.createElement("div", { className: 'ms-MessageBar-text', id: this.state.labelId },
	                        React.createElement("span", { className: this._getInnerTextClassName() }, this.props.children)),
	                    this._getActionsDiv()))));
	    };
	    MessageBar.prototype._renderSingleLine = function () {
	        return (React.createElement("div", { className: this._getClassName() + ' ms-MessageBar-singleline', role: 'status', "aria-live": 'polite', "aria-controls": 'ms-MessageBar-text' },
	            React.createElement("div", { className: 'ms-MessageBar-content' },
	                this._getIconSpan(),
	                React.createElement("div", { className: 'ms-MessageBar-actionables' },
	                    React.createElement("div", { className: 'ms-MessageBar-text', id: this.state.labelId },
	                        React.createElement("span", { className: this._getInnerTextClassName() }, this.props.children))),
	                this._getActionsDiv())));
	    };
	    return MessageBar;
	}(React.Component));
	MessageBar.defaultProps = {
	    messageBarType: MessageBar_Props_1.MessageBarType.info,
	    onDismiss: null,
	    isMultiline: true,
	};
	exports.MessageBar = MessageBar;
	


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(27));
	


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(28));
	__export(__webpack_require__(29));
	


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(15);
	var object_1 = __webpack_require__(18);
	var Button_Props_1 = __webpack_require__(29);
	var object_2 = __webpack_require__(18);
	var properties_1 = __webpack_require__(21);
	var BaseComponent_1 = __webpack_require__(9);
	__webpack_require__(30);
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
/* 29 */
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Button{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border:1px solid " }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px}.ms-Button::-moz-focus-inner{border:0}.ms-Button{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Button:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Button:hover .ms-Button-label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-Button:hover{color:#1AEBFF;border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Button:hover{color:#37006E;border-color:#37006E}}.ms-Button:focus{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";outline:1px solid transparent}.ms-Button:focus .ms-Button-label{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Button:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button:active .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button.is-disabled,.ms-Button:disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";cursor:default}.ms-Button.is-disabled .ms-Button-label,.ms-Button:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button.is-disabled:focus,.ms-Button.is-disabled:hover,.ms-Button:disabled:focus,.ms-Button:disabled:hover{outline:0}.ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:600;font-size:14px}.ms-Button-description,.ms-Button-icon{display:none}.ms-Fabric.is-focusVisible .ms-Button:focus{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button:focus:before{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--primary:hover{background-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";border-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.ms-Button--primary:hover .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--primary:focus{background-color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary:focus .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--primary:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--primary.is-disabled,.ms-Button--primary:disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--primary.is-disabled .ms-Button-label,.ms-Button--primary:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button--primary:focus{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Fabric.is-focusVisible .ms-Button--primary:focus:before{border-color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--hero{background-color:transparent;border:0;height:auto}.ms-Button--hero .ms-Button-icon{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";display:inline-block;padding-top:5px;font-size:20px;line-height:1}html[dir=ltr] .ms-Button--hero .ms-Button-icon{margin-right:8px}html[dir=rtl] .ms-Button--hero .ms-Button-icon{margin-left:8px}.ms-Button--hero .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";font-size:21px;font-weight:100;vertical-align:top}.ms-Button--hero:focus,.ms-Button--hero:hover{background-color:transparent}.ms-Button--hero:focus .ms-Button-icon,.ms-Button--hero:hover .ms-Button-icon{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.ms-Button--hero:focus .ms-Button-label,.ms-Button--hero:hover .ms-Button-label{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--hero:active .ms-Button-icon{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--hero:active .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--hero.is-disabled .ms-Button-icon,.ms-Button--hero:disabled .ms-Button-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Button--hero.is-disabled .ms-Button-label,.ms-Button--hero:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--compound{display:block;height:auto;max-width:280px;min-height:72px;padding:20px}.ms-Button--compound .ms-Button-label{display:block;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";margin-top:-5px}html[dir=ltr] .ms-Button--compound .ms-Button-label{text-align:left}html[dir=rtl] .ms-Button--compound .ms-Button-label{text-align:right}.ms-Button--compound .ms-Button-description{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";display:block;font-size:12px;position:relative;top:3px}html[dir=ltr] .ms-Button--compound .ms-Button-description{text-align:left}html[dir=rtl] .ms-Button--compound .ms-Button-description{text-align:right}.ms-Button--compound:hover .ms-Button-description{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-Button--compound:focus{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--compound:focus .ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Button--compound:focus .ms-Button-description{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button--compound:active{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--compound:active .ms-Button-description,.ms-Button--compound:active .ms-Button-label{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Button--compound.is-disabled .ms-Button-description,.ms-Button--compound.is-disabled .ms-Button-label,.ms-Button--compound:disabled .ms-Button-description,.ms-Button--compound:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--compound.is-disabled:active,.ms-Button--compound.is-disabled:focus,.ms-Button--compound:disabled:active,.ms-Button--compound:disabled:focus{border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-Button--compound.is-disabled:active .ms-Button-description,.ms-Button--compound.is-disabled:active .ms-Button-label,.ms-Button--compound.is-disabled:focus .ms-Button-description,.ms-Button--compound.is-disabled:focus .ms-Button-label,.ms-Button--compound:disabled:active .ms-Button-description,.ms-Button--compound:disabled:active .ms-Button-label,.ms-Button--compound:disabled:focus .ms-Button-description,.ms-Button--compound:disabled:focus .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--command{background-color:transparent;border:none;height:40px;min-width:0;padding:0 8px}html[dir=ltr] .ms-Button--command{text-align:left}html[dir=rtl] .ms-Button--command{text-align:right}.ms-Button--command .ms-Icon{line-height:40px}.ms-Button--command .ms-Button-label{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";line-height:40px}.ms-Button--command .ms-Button-icon{vertical-align:top;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";display:inline-block;position:relative;font-size:16px}html[dir=ltr] .ms-Button--command .ms-Button-icon{text-align:left}html[dir=rtl] .ms-Button--command .ms-Button-icon{text-align:right}html[dir=ltr] .ms-Button--command .ms-Button-icon{margin-right:8px}html[dir=rtl] .ms-Button--command .ms-Button-icon{margin-left:8px}.ms-Button--command .ms-Button-label{font-weight:400}.ms-Button--command:focus,.ms-Button--command:hover{background-color:transparent}.ms-Button--command:focus .ms-Button-icon,.ms-Button--command:focus .ms-Button-label,.ms-Button--command:hover .ms-Button-icon,.ms-Button--command:hover .ms-Button-label{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.ms-Button--command:active .ms-Button-icon,.ms-Button--command:active .ms-Button-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Button--command.is-disabled .ms-Button-icon,.ms-Button--command:disabled .ms-Button-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.ms-Button--command.is-disabled .ms-Button-label,.ms-Button--command:disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-Button--icon{background-color:transparent;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";padding:0;min-width:auto;height:auto;border:0}.ms-Button--icon::-moz-focus-inner{border:0}.ms-Button--icon{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-Button--icon:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-Button--icon:active,.ms-Button--icon:hover{background-color:transparent;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Button--icon:focus{background-color:transparent}.ms-Button--icon .ms-Icon{font-size:16px;padding:8px}.ms-Button--icon .ms-Button-icon{display:inline}.ms-Button--icon.is-disabled,.ms-Button--icon:disabled{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";background-color:transparent}@media screen and (-ms-high-contrast:active){.ms-Button--icon{color:" }, { "theme": "yellowLight", "defaultValue": "#fff100" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Button--icon{color:" }, { "theme": "blueMid", "defaultValue": "#00188f" }, { "rawString": "}}.ms-Button--primary.disabled{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";pointer-events:none;cursor:default}.ms-Button--primary.disabled .ms-Button-label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}html[dir=ltr] .ms-Button+.ms-Button{margin-left:6px}html[dir=rtl] .ms-Button+.ms-Button{margin-right:6px}html[dir=ltr] .ms-Button--command+.ms-Button--command{margin-left:14px}html[dir=rtl] .ms-Button--command+.ms-Button--command{margin-right:14px}a.ms-Button{text-decoration:none;text-align:center}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-MessageBar{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;background-color:" }, { "theme": "infoBackground", "defaultValue": "#f4f4f4" }, { "rawString": ";color:" }, { "theme": "infoText", "defaultValue": "#333333" }, { "rawString": ";width:100%;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.ms-MessageBar .ms-MessageBar-icon{color:" }, { "theme": "info", "defaultValue": "#767676" }, { "rawString": "}html[dir=ltr] .ms-MessageBar .ms-MessageBar-icon{padding-right:8px}html[dir=rtl] .ms-MessageBar .ms-MessageBar-icon{padding-left:8px}.ms-MessageBar .ms-Link{font-size:12px}.ms-MessageBar-icon,.ms-MessageBar-text{display:table-cell;vertical-align:top}.ms-MessageBar-icon{font-size:16px;min-width:16px;min-height:16px;display:-webkit-box;display:-ms-flexbox;display:flex}.ms-MessageBar-text{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;min-width:0;display:-webkit-box;display:-ms-flexbox;display:flex}.ms-MessageBar.ms-MessageBar--warning{background-color:" }, { "theme": "warningBackground", "defaultValue": "#fff4ce" }, { "rawString": ";color:" }, { "theme": "warningText", "defaultValue": "#333333" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--severeWarning{background-color:" }, { "theme": "severeWarningBackground", "defaultValue": "#fed9cc" }, { "rawString": ";color:" }, { "theme": "severeWarningText", "defaultValue": "#333333" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--severeWarning .ms-MessageBar-icon{color:" }, { "theme": "severeWarning", "defaultValue": "#d83b01" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--error{background-color:" }, { "theme": "errorBackground", "defaultValue": "#fde7e9" }, { "rawString": ";color:" }, { "theme": "errorText", "defaultValue": "#333333" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--error .ms-MessageBar-icon{color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--blocked{background-color:" }, { "theme": "errorBackground", "defaultValue": "#fde7e9" }, { "rawString": ";color:" }, { "theme": "errorText", "defaultValue": "#333333" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--blocked .ms-MessageBar-icon{color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--success{background-color:" }, { "theme": "successBackground", "defaultValue": "#dff6dd" }, { "rawString": ";color:" }, { "theme": "successText", "defaultValue": "#333333" }, { "rawString": "}.ms-MessageBar.ms-MessageBar--success .ms-MessageBar-icon{color:" }, { "theme": "green", "defaultValue": "#107c10" }, { "rawString": "}.ms-MessageBar-content{padding:16px;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;box-sizing:border-box}.ms-MessageBar-actionables{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;min-width:0}.ms-MessageBar-actionables>.ms-MessageBar-dismissal{right:0;top:0;position:absolute!important}.ms-MessageBar-actions,.ms-MessageBar-actionsOneline{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ms-MessageBar-actionsOneline{position:relative}.ms-MessageBar-dismissal{min-width:0}.ms-MessageBar-dismissal::-moz-focus-inner{border:0}.ms-MessageBar-dismissal{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-MessageBar-dismissal:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .ms-MessageBar-actionsOneline .ms-MessageBar-dismissal{margin-right:-8px}html[dir=rtl] .ms-MessageBar-actionsOneline .ms-MessageBar-dismissal{margin-left:-8px}.ms-MessageBar+.ms-MessageBar{margin-bottom:6px}html[dir=ltr] .ms-MessageBar-innerTextPadding{padding-right:24px}html[dir=rtl] .ms-MessageBar-innerTextPadding{padding-left:24px}html[dir=ltr] .ms-MessageBar-innerTextPadding .ms-MessageBar-innerText>span,html[dir=ltr] .ms-MessageBar-innerTextPadding span{padding-right:4px}html[dir=rtl] .ms-MessageBar-innerTextPadding .ms-MessageBar-innerText>span,html[dir=rtl] .ms-MessageBar-innerTextPadding span{padding-left:4px}.ms-MessageBar-multiline>.ms-MessageBar-content>.ms-MessageBar-actionables{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-icon{-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-actionables>.ms-MessageBar-text{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-actionables>.ms-MessageBar-text .ms-MessageBar-innerText,.ms-MessageBar-singleline .ms-MessageBar-content .ms-MessageBar-actionables>.ms-MessageBar-text .ms-MessageBar-innerTextPadding{max-height:1.3em;line-height:1.3em;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}.ms-MessageBar-singleline .ms-MessageBar-content>.ms-MessageBar-actionables{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.ms-MessageBar .ms-Icon--Cancel{font-size:14px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	var MessageBarType;
	(function (MessageBarType) {
	    /** Info styled MessageBar */
	    MessageBarType[MessageBarType["info"] = 0] = "info";
	    /** Error styled MessageBar */
	    MessageBarType[MessageBarType["error"] = 1] = "error";
	    /** Blocked styled MessageBar */
	    MessageBarType[MessageBarType["blocked"] = 2] = "blocked";
	    /** SevereWarning styled MessageBar */
	    MessageBarType[MessageBarType["severeWarning"] = 3] = "severeWarning";
	    /** Success styled MessageBar */
	    MessageBarType[MessageBarType["success"] = 4] = "success";
	    /** Warning styled MessageBar */
	    MessageBarType[MessageBarType["warning"] = 5] = "warning";
	    /**
	     * @deprecated
	     * Deprecated at v0.48.0, to be removed at >= v1.0.0. Use 'blocked' instead.
	     */
	    MessageBarType[MessageBarType["remove"] = 6] = "remove";
	})(MessageBarType = exports.MessageBarType || (exports.MessageBarType = {}));
	


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(1);
	class DiscussionListItem extends React.Component {
	    render() {
	        return (React.createElement("div", { className: "sd-discussion" },
	            React.createElement("div", { className: "ms-bgColor-neutralLighterAlt" },
	                React.createElement("div", { className: "ms-font-l ms-fontWeight-semibold" }, this.props.Discussion.Subject),
	                React.createElement("div", { className: "ms-font-m" }, this.GetFormattedDate(this.props.Discussion.DateISO)),
	                React.createElement("i", { className: "ms-Icon ms-Icon--POI", "aria-hidden": "true" }),
	                " ",
	                React.createElement("span", { className: "ms-font-m" }, this.props.Discussion.DiscussionLocation))));
	    }
	    GetFormattedDate(date) {
	        // TODO : Why do we need to do this?
	        var date = new Date(date);
	        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
	    }
	}
	exports.DiscussionListItem = DiscussionListItem;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(1);
	const Button_1 = __webpack_require__(26);
	const Dialog_1 = __webpack_require__(36);
	const Discussion_1 = __webpack_require__(61);
	class AddDiscussion extends React.Component {
	    constructor() {
	        super();
	        this.state = {
	            ShowDialog: false,
	        };
	    }
	    // Main renderer.
	    render() {
	        return (React.createElement("div", { className: "sd-addDiscussion" },
	            React.createElement(Button_1.Button, { description: 'Opens the dialog to create a discussion', onClick: this.showDialog.bind(this), buttonType: Button_1.ButtonType.hero, icon: 'Add' }, "Add Safety Discussion"),
	            React.createElement(Dialog_1.Dialog, { isOpen: this.state.ShowDialog, type: Dialog_1.DialogType.close, onDismiss: this.closeDialog.bind(this), title: 'Add Discussion', subText: 'Please enter the details for the safety discussion.', isBlocking: false, closeButtonAriaLabel: 'Close' },
	                React.createElement(Discussion_1.Discussion, { FormMode: Discussion_1.FormMode.New, Discussion: null, DialogClose: this.closeDialog.bind(this), NewDiscussionCreated: this.newDiscussionCreated.bind(this) }))));
	    }
	    // New discussion has been created. Pass up to parent.
	    newDiscussionCreated(discussion) {
	        console.log("AddDiscussion.newDiscussionCreated()");
	        this.setState({ ShowDialog: false });
	        this.props.NewDiscussionCreated(discussion);
	    }
	    showDialog() {
	        this.setState({ ShowDialog: true });
	    }
	    closeDialog() {
	        this.setState({ ShowDialog: false });
	    }
	}
	exports.AddDiscussion = AddDiscussion;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(37));
	var index_1 = __webpack_require__(37);
	exports.default = index_1.Dialog;
	


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(38));
	__export(__webpack_require__(55));
	__export(__webpack_require__(42));
	


/***/ },
/* 38 */
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
	var index_1 = __webpack_require__(39);
	var Dialog_Props_1 = __webpack_require__(42);
	var Overlay_1 = __webpack_require__(43);
	var Layer_1 = __webpack_require__(47);
	var Button_1 = __webpack_require__(26);
	var DialogFooter_1 = __webpack_require__(55);
	var css_1 = __webpack_require__(15);
	var index_2 = __webpack_require__(57);
	var withResponsiveMode_1 = __webpack_require__(59);
	var object_1 = __webpack_require__(18);
	var BaseComponent_1 = __webpack_require__(9);
	__webpack_require__(56);
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
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var Utilities_1 = __webpack_require__(8);
	var focus_1 = __webpack_require__(41);
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* tslint:disable:no-string-literal */
	"use strict";
	var dom_1 = __webpack_require__(16);
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
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(44));
	


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(45));
	


/***/ },
/* 45 */
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
	var css_1 = __webpack_require__(15);
	var properties_1 = __webpack_require__(21);
	__webpack_require__(46);
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Overlay{background-color:" }, { "theme": "whiteTranslucent40", "defaultValue": "rgba(255,255,255,.4)" }, { "rawString": ";position:absolute;bottom:0;left:0;right:0;top:0}.ms-Overlay.ms-Overlay--none{visibility:hidden}.ms-Overlay.ms-Overlay--dark{background-color:" }, { "theme": "blackTranslucent40", "defaultValue": "rgba(0,0,0,.4)" }, { "rawString": "}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(48));
	


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(49));
	__export(__webpack_require__(54));
	


/***/ },
/* 49 */
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
	var Fabric_1 = __webpack_require__(50);
	var Utilities_1 = __webpack_require__(8);
	__webpack_require__(53);
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(51));
	


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(52));
	


/***/ },
/* 52 */
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
	var css_1 = __webpack_require__(15);
	var EventGroup_1 = __webpack_require__(11);
	var KeyCodes_1 = __webpack_require__(12);
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Layer--fixed{position:fixed;z-index:1000000;top:0;left:0;width:100vw;height:100vh;visibility:hidden}.ms-Layer-content{visibility:visible}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 54 */
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
	var Utilities_1 = __webpack_require__(8);
	var Layer_1 = __webpack_require__(49);
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	__webpack_require__(56);
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Dialog{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;background-color:transparent;position:fixed;height:100%;width:100%;top:0;display:none}html[dir=ltr] .ms-Dialog{left:0}html[dir=rtl] .ms-Dialog{right:0}.ms-Dialog .ms-Button.ms-Button--compound{display:block}html[dir=ltr] .ms-Dialog .ms-Button.ms-Button--compound{margin-left:0}html[dir=rtl] .ms-Dialog .ms-Button.ms-Button--compound{margin-right:0}@media screen and (-ms-high-contrast:active){.ms-Dialog .ms-Overlay{opacity:0}}.ms-Dialog.is-open{display:block}.ms-Dialog.is-open{display:block;line-height:100vh;text-align:center}.ms-Dialog.is-open::before{vertical-align:middle;display:inline-block;content:\"\";height:100%;width:0}.ms-Dialog.is-animatingOpen{-webkit-animation-duration:367ms;-webkit-animation-name:fadeIn;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeIn;animation-fill-mode:both;-webkit-animation-duration:267ms;animation-duration:267ms}.ms-Dialog.is-animatingClose{-webkit-animation-duration:367ms;-webkit-animation-name:fadeOut;-webkit-animation-fill-mode:both;animation-duration:367ms;animation-name:fadeOut;animation-fill-mode:both;-webkit-animation-duration:167ms;animation-duration:167ms}.ms-Dialog-main{vertical-align:middle;display:inline-block;box-shadow:0 0 5px 0 rgba(0,0,0,.4);background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-sizing:border-box;line-height:1.35;margin:auto;width:288px;position:relative;outline:3px solid transparent;max-height:100%;overflow-y:auto}html[dir=ltr] .ms-Dialog-main{text-align:left}html[dir=rtl] .ms-Dialog-main{text-align:right}.ms-Dialog-button.ms-Dialog-button--close{display:none}.ms-Dialog-button.ms-Dialog-button--close .ms-Icon.ms-Icon--Cancel{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:16px}.ms-Dialog-inner{padding:0 28px 20px}.ms-Dialog-header{position:relative;width:100%;box-sizing:border-box}.ms-Dialog-title{margin:0;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:21px;font-weight:100;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";padding:20px 36px 20px 28px}html[dir=rtl] .ms-Dialog-title{padding:20px 28px 20px 36px}.ms-Dialog-topButton{position:absolute;top:0;padding:12px 12px 0 0}html[dir=ltr] .ms-Dialog-topButton{right:0}html[dir=rtl] .ms-Dialog-topButton{left:0}html[dir=rtl] .ms-Dialog-topButton{padding:12px 0 0 12px}.ms-Dialog-content{position:relative;width:100%}.ms-Dialog-content .ms-Button.ms-Button--compound{margin-bottom:20px}.ms-Dialog-content .ms-Button.ms-Button--compound:last-child{margin-bottom:0}.ms-Dialog-subText{margin:0 0 20px 0;padding-top:8px;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:300;line-height:1.5}.ms-Dialog-actions{position:relative;width:100%;min-height:24px;line-height:24px;margin:20px 0 0;font-size:0}.ms-Dialog-actions .ms-Button{line-height:normal}.ms-Dialog-actionsRight{font-size:0}html[dir=ltr] .ms-Dialog-actionsRight{text-align:right}html[dir=rtl] .ms-Dialog-actionsRight{text-align:left}html[dir=ltr] .ms-Dialog-actionsRight{margin-right:-4px}html[dir=rtl] .ms-Dialog-actionsRight{margin-left:-4px}.ms-Dialog-actionsRight .ms-Dialog-action{margin:0 4px}.ms-Dialog.ms-Dialog--close:not(.ms-Dialog--lgHeader) .ms-Dialog-button.ms-Dialog-button--close{display:block}.ms-Dialog.ms-Dialog--multiline .ms-Dialog-title{font-size:28px}.ms-Dialog.ms-Dialog--multiline .ms-Dialog-inner{padding:0 20px 20px}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-header{background-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-title{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:28px;font-weight:100;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";padding:26px 28px 28px;margin-bottom:8px}.ms-Dialog.ms-Dialog--lgHeader .ms-Dialog-subText{font-size:14px}@media (min-width:480px){.ms-Dialog-main{width:auto;min-width:288px;max-width:340px}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(58));
	


/***/ },
/* 58 */
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
	var KeyCodes_1 = __webpack_require__(12);
	var BaseComponent_1 = __webpack_require__(9);
	var Utilities_1 = __webpack_require__(8);
	var focus_1 = __webpack_require__(41);
	var dom_1 = __webpack_require__(16);
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
/* 59 */
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
	var BaseDecorator_1 = __webpack_require__(60);
	var dom_1 = __webpack_require__(16);
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var hoist_1 = __webpack_require__(17);
	var BaseComponent_1 = __webpack_require__(9);
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(1);
	const Button_1 = __webpack_require__(26);
	const TextField_1 = __webpack_require__(62);
	const DatePicker_1 = __webpack_require__(70);
	const Dialog_1 = __webpack_require__(36);
	const MessageBar_1 = __webpack_require__(23);
	const Spinner_1 = __webpack_require__(95);
	const PeoplePicker_1 = __webpack_require__(100);
	const Label_1 = __webpack_require__(65);
	const SafetyDiscussion_1 = __webpack_require__(139);
	const DiscussionService_1 = __webpack_require__(140);
	var FormMode;
	(function (FormMode) {
	    FormMode[FormMode["New"] = 0] = "New";
	    FormMode[FormMode["Edit"] = 1] = "Edit";
	})(FormMode = exports.FormMode || (exports.FormMode = {}));
	const DayPickerStrings = {
	    months: [
	        'January',
	        'February',
	        'March',
	        'April',
	        'May',
	        'June',
	        'July',
	        'August',
	        'September',
	        'October',
	        'November',
	        'December'
	    ],
	    shortMonths: [
	        'Jan',
	        'Feb',
	        'Mar',
	        'Apr',
	        'May',
	        'Jun',
	        'Jul',
	        'Aug',
	        'Sep',
	        'Oct',
	        'Nov',
	        'Dec'
	    ],
	    days: [
	        'Sunday',
	        'Monday',
	        'Tuesday',
	        'Wednesday',
	        'Thursday',
	        'Friday',
	        'Saturday'
	    ],
	    shortDays: [
	        'S',
	        'M',
	        'T',
	        'W',
	        'T',
	        'F',
	        'S'
	    ],
	    goToToday: 'Go to today'
	};
	class Discussion extends React.Component {
	    constructor(props) {
	        super(props);
	        this.state = {
	            Discussion: this.props.FormMode == FormMode.Edit ? this.props.Discussion : new SafetyDiscussion_1.SafetyDiscussion(),
	            IsSaving: false,
	            IsValid: true,
	            IsError: false
	        };
	    }
	    // Main renderer.
	    render() {
	        return (React.createElement("div", null,
	            !this.state.IsValid &&
	                React.createElement("div", null,
	                    React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.error }, "Please fill in all required information."),
	                    React.createElement("br", null)),
	            this.state.IsError &&
	                React.createElement("div", null,
	                    React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.error }, "Sorry, there was a problem saving your data. Please refresh the page and try again."),
	                    React.createElement("br", null)),
	            !this.state.IsSaving &&
	                React.createElement(DatePicker_1.DatePicker, { label: 'Discussion Date', placeholder: 'Enter date of discussion', strings: DayPickerStrings, onSelectDate: date => this.UpdatePropertiesOfDiscussion(date, null, null, null, null), value: this.state.Discussion.DateISO }),
	            React.createElement(TextField_1.TextField, { label: 'Subject', required: true, multiline: true, resizable: false, placeholder: 'Enter subject', onChanged: this.OnSubjectChanged.bind(this), disabled: this.state.IsSaving }),
	            React.createElement(Label_1.Label, null, "Discussed With"),
	            React.createElement(PeoplePicker_1.NormalPeoplePicker, { onResolveSuggestions: this.OnFilterChanged.bind(this), getTextFromItem: (persona) => persona.primaryText, pickerSuggestionsProps: {
	                    suggestionsHeaderText: 'Suggested People',
	                    noResultsFoundText: 'No results found',
	                    loadingText: 'Loading'
	                }, className: 'ms-PeoplePicker', key: 'normal' }),
	            React.createElement(TextField_1.TextField, { label: 'Location', required: true, placeholder: 'Enter location', onChanged: this.OnLocationChanged.bind(this), disabled: this.state.IsSaving }),
	            React.createElement(TextField_1.TextField, { label: 'Outcome', required: true, multiline: true, resizable: false, placeholder: 'Enter outcome', onChanged: this.OnOutcomeChanged.bind(this), disabled: this.state.IsSaving }),
	            this.state.IsSaving &&
	                React.createElement(Spinner_1.Spinner, { label: 'Saving discussion...' }),
	            React.createElement(Dialog_1.DialogFooter, null,
	                React.createElement(Button_1.Button, { buttonType: Button_1.ButtonType.primary, onClick: this.Save.bind(this), disabled: this.state.IsSaving }, "Save"),
	                React.createElement(Button_1.Button, { onClick: this.props.DialogClose }, "Cancel"))));
	    }
	    OnFilterChanged(filterText, currentPersonas, limitResults) {
	        if (filterText) {
	            let service = new DiscussionService_1.DiscussionService();
	            return service.UserSearch(filterText, currentPersonas, limitResults);
	        }
	    }
	    Validate() {
	        let valid = true;
	        if (!this.state.Discussion.DateISO ||
	            !this.state.Discussion.DiscussionLocation ||
	            !this.state.Discussion.Subject ||
	            !this.state.Discussion.Outcomes) {
	            valid = false;
	        }
	        this.setState({
	            IsValid: valid
	        });
	        return valid;
	    }
	    Save() {
	        var valid = this.Validate();
	        if (valid) {
	            this.setState({
	                IsSaving: true
	            });
	            let service = new DiscussionService_1.DiscussionService();
	            service
	                .SaveDiscussion(this.state.Discussion)
	                .then((discussion) => {
	                console.log("AddDiscussion.Save()");
	                console.log(discussion);
	                this.props.NewDiscussionCreated(discussion);
	            })
	                .catch((error) => {
	                console.log(error);
	                this.setState({
	                    IsError: true,
	                    IsSaving: false
	                });
	            });
	        }
	    }
	    OnDateChanged(date) {
	        this.UpdatePropertiesOfDiscussion(date, null, null, null, null);
	    }
	    OnLocationChanged(text) {
	        this.UpdatePropertiesOfDiscussion(null, text, null, null, null);
	    }
	    OnSubjectChanged(text) {
	        this.UpdatePropertiesOfDiscussion(null, null, null, text, null);
	    }
	    OnOutcomeChanged(text) {
	        this.UpdatePropertiesOfDiscussion(null, null, null, null, text);
	    }
	    UpdatePropertiesOfDiscussion(discussionDate, discussionLocation, discussedWith, subject, outcomes) {
	        this.setState(function (prevState, props) {
	            let updatedDiscussion = this.CloneDiscussion(prevState.Discussion);
	            if (discussionDate) {
	                updatedDiscussion.DateISO = discussionDate;
	            }
	            if (discussionLocation) {
	                updatedDiscussion.DiscussionLocation = discussionLocation;
	            }
	            if (discussedWith) {
	                updatedDiscussion.DiscussedWith = discussedWith;
	            }
	            if (subject) {
	                updatedDiscussion.Subject = subject;
	            }
	            if (outcomes) {
	                updatedDiscussion.Outcomes = outcomes;
	            }
	            return {
	                Discussion: updatedDiscussion
	            };
	        });
	    }
	    CloneDiscussion(discussion) {
	        return {
	            DateISO: discussion.DateISO,
	            DiscussionLocation: discussion.DiscussionLocation,
	            DiscussedWith: discussion.DiscussedWith,
	            Subject: discussion.Subject,
	            Outcomes: discussion.Outcomes
	        };
	    }
	}
	exports.Discussion = Discussion;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(63));
	


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(64));
	


/***/ },
/* 64 */
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
	var Label_1 = __webpack_require__(65);
	var Utilities_1 = __webpack_require__(8);
	__webpack_require__(69);
	var TextField = (function (_super) {
	    __extends(TextField, _super);
	    function TextField(props) {
	        var _this = _super.call(this, props) || this;
	        _this._id = Utilities_1.getId('TextField');
	        _this._descriptionId = Utilities_1.getId('TextFieldDescription');
	        _this._async = new Utilities_1.Async(_this);
	        _this.state = {
	            value: props.value || props.defaultValue || '',
	            isFocused: false,
	            errorMessage: ''
	        };
	        _this._onInputChange = _this._onInputChange.bind(_this);
	        _this._onFocus = _this._onFocus.bind(_this);
	        _this._onBlur = _this._onBlur.bind(_this);
	        _this._delayedValidate = _this._async.debounce(_this._validate, _this.props.deferredValidationTime);
	        _this._lastValidation = 0;
	        _this._willMountTriggerValidation = false;
	        return _this;
	    }
	    Object.defineProperty(TextField.prototype, "value", {
	        /**
	         * Gets the current value of the text field.
	         */
	        get: function () {
	            return this.state.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype.componentWillMount = function () {
	        this._willMountTriggerValidation = true;
	        this._validate(this.state.value);
	    };
	    TextField.prototype.componentDidMount = function () {
	        this._isMounted = true;
	        this._adjustInputHeight();
	    };
	    TextField.prototype.componentWillReceiveProps = function (newProps) {
	        var onBeforeChange = this.props.onBeforeChange;
	        if (newProps.value !== undefined && newProps.value !== this.state.value) {
	            if (onBeforeChange) {
	                onBeforeChange(newProps.value);
	            }
	            this.setState({
	                value: newProps.value,
	                errorMessage: ''
	            });
	            this._delayedValidate(newProps.value);
	        }
	    };
	    TextField.prototype.componentWillUnmount = function () {
	        this._async.dispose();
	        this._isMounted = false;
	    };
	    TextField.prototype.render = function () {
	        var _a = this.props, disabled = _a.disabled, required = _a.required, multiline = _a.multiline, underlined = _a.underlined, label = _a.label, description = _a.description, iconClass = _a.iconClass, className = _a.className;
	        var isFocused = this.state.isFocused;
	        var errorMessage = this._errorMessage;
	        var textFieldClassName = Utilities_1.css('ms-TextField', className, {
	            'is-required': required,
	            'is-disabled': disabled,
	            'is-active': isFocused,
	            'ms-TextField--multiline': multiline,
	            'ms-TextField--underlined': underlined
	        });
	        return (React.createElement("div", { className: textFieldClassName },
	            label && React.createElement(Label_1.Label, { htmlFor: this._id }, label),
	            iconClass && React.createElement("i", { className: iconClass }),
	            multiline ? this._renderTextArea() : this._renderInput(),
	            errorMessage && React.createElement("div", { "aria-live": 'assertive', className: 'ms-u-screenReaderOnly', "data-automation-id": 'error-message' }, errorMessage),
	            (description || errorMessage) &&
	                React.createElement("span", { id: this._descriptionId },
	                    description && React.createElement("span", { className: 'ms-TextField-description' }, description),
	                    errorMessage && React.createElement("p", { className: 'ms-TextField-errorMessage ms-u-slideDownIn20' }, errorMessage))));
	    };
	    /**
	     * Sets focus on the text field
	     */
	    TextField.prototype.focus = function () {
	        if (this._field) {
	            this._field.focus();
	        }
	    };
	    /**
	     * Selects the text field
	     */
	    TextField.prototype.select = function () {
	        if (this._field) {
	            this._field.select();
	        }
	    };
	    /**
	     * Sets the selection start of the text field to a specified value
	     */
	    TextField.prototype.setSelectionStart = function (value) {
	        if (this._field) {
	            this._field.selectionStart = value;
	        }
	    };
	    /**
	     * Sets the selection end of the text field to a specified value
	     */
	    TextField.prototype.setSelectionEnd = function (value) {
	        if (this._field) {
	            this._field.selectionEnd = value;
	        }
	    };
	    TextField.prototype._onFocus = function (ev) {
	        if (this.props.onFocus) {
	            this.props.onFocus(ev);
	        }
	        this.setState({ isFocused: true });
	    };
	    TextField.prototype._onBlur = function (ev) {
	        if (this.props.onBlur) {
	            this.props.onBlur(ev);
	        }
	        this.setState({ isFocused: false });
	    };
	    Object.defineProperty(TextField.prototype, "_fieldClassName", {
	        get: function () {
	            var errorMessage = this._errorMessage;
	            var textFieldClassName;
	            if (this.props.multiline && !this.props.resizable) {
	                textFieldClassName = 'ms-TextField-field ms-TextField-field--unresizable';
	            }
	            else {
	                textFieldClassName = 'ms-TextField-field';
	            }
	            return Utilities_1.css(textFieldClassName, this.props.inputClassName, {
	                'ms-TextField-invalid': !!errorMessage
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "_errorMessage", {
	        get: function () {
	            var errorMessage = this.state.errorMessage;
	            if (!errorMessage) {
	                errorMessage = this.props.errorMessage;
	            }
	            return errorMessage;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype._renderTextArea = function () {
	        var _this = this;
	        var textAreaProps = Utilities_1.getNativeProps(this.props, Utilities_1.textAreaProperties, ['defaultValue']);
	        return (React.createElement("textarea", __assign({}, textAreaProps, { id: this._id, ref: function (c) { return _this._field = c; }, value: this.state.value, onChange: this._onInputChange, className: this._fieldClassName, "aria-label": this.props.ariaLabel, "aria-describedby": this._descriptionId, "aria-invalid": !!this.state.errorMessage, onFocus: this._onFocus, onBlur: this._onBlur })));
	    };
	    TextField.prototype._renderInput = function () {
	        var _this = this;
	        var inputProps = Utilities_1.getNativeProps(this.props, Utilities_1.inputProperties, ['defaultValue']);
	        return (React.createElement("input", __assign({ type: 'text' }, inputProps, { id: this._id, ref: function (c) { return _this._field = c; }, value: this.state.value, onChange: this._onInputChange, className: this._fieldClassName, "aria-label": this.props.ariaLabel, "aria-describedby": this._descriptionId, "aria-invalid": !!this.state.errorMessage, onFocus: this._onFocus, onBlur: this._onBlur })));
	    };
	    TextField.prototype._onInputChange = function (event) {
	        var element = event.target;
	        var value = element.value;
	        this.setState({
	            value: value,
	            errorMessage: ''
	        }, this._adjustInputHeight);
	        this._willMountTriggerValidation = false;
	        this._delayedValidate(value);
	        var onBeforeChange = this.props.onBeforeChange;
	        onBeforeChange(value);
	    };
	    TextField.prototype._validate = function (value) {
	        var _this = this;
	        // In case of _validate called multi-times during executing validate logic with promise return.
	        if (this._latestValidateValue === value) {
	            return;
	        }
	        this._latestValidateValue = value;
	        var onGetErrorMessage = this.props.onGetErrorMessage;
	        var result = onGetErrorMessage(value || '');
	        if (result !== undefined) {
	            if (typeof result === 'string') {
	                this.setState({
	                    errorMessage: result
	                });
	                this._notifyAfterValidate(value, result);
	            }
	            else {
	                var currentValidation_1 = ++this._lastValidation;
	                result.then(function (errorMessage) {
	                    if (_this._isMounted && currentValidation_1 === _this._lastValidation) {
	                        _this.setState({ errorMessage: errorMessage });
	                    }
	                    _this._notifyAfterValidate(value, errorMessage);
	                });
	            }
	        }
	        else {
	            this._notifyAfterValidate(value, '');
	        }
	    };
	    TextField.prototype._notifyAfterValidate = function (value, errorMessage) {
	        if (!this._willMountTriggerValidation && value === this.state.value) {
	            var onNotifyValidationResult = this.props.onNotifyValidationResult;
	            onNotifyValidationResult(errorMessage, value);
	            if (!errorMessage) {
	                var onChanged = this.props.onChanged;
	                onChanged(value);
	            }
	        }
	        else {
	            this._willMountTriggerValidation = false;
	        }
	    };
	    TextField.prototype._adjustInputHeight = function () {
	        if (this._field && this.props.autoAdjustHeight && this.props.multiline) {
	            var textField = this._field;
	            textField.style.height = '';
	            var scrollHeight = textField.scrollHeight + 2; // +2 to avoid vertical scroll bars
	            textField.style.height = scrollHeight + 'px';
	        }
	    };
	    return TextField;
	}(React.Component));
	TextField.defaultProps = {
	    multiline: false,
	    resizable: true,
	    autoAdjustHeight: false,
	    underlined: false,
	    onChanged: function () { },
	    onBeforeChange: function () { },
	    onNotifyValidationResult: function () { },
	    onGetErrorMessage: function () { return undefined; },
	    deferredValidationTime: 200,
	    errorMessage: ''
	};
	exports.TextField = TextField;
	


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(66));
	


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(67));
	


/***/ },
/* 67 */
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
	var Utilities_1 = __webpack_require__(8);
	__webpack_require__(68);
	var Label = (function (_super) {
	    __extends(Label, _super);
	    function Label() {
	        return _super.apply(this, arguments) || this;
	    }
	    Label.prototype.render = function () {
	        var _a = this.props, disabled = _a.disabled, required = _a.required, children = _a.children, className = _a.className;
	        return (React.createElement("label", __assign({}, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), { className: Utilities_1.css('ms-Label', className, {
	                'is-disabled': disabled,
	                'is-required': required
	            }) }), children));
	    };
	    return Label;
	}(React.Component));
	exports.Label = Label;
	


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Label{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";box-sizing:border-box;display:block;padding:5px 0}.ms-Label.is-required::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-Label.is-disabled{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Label{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";box-sizing:border-box;display:block;padding:5px 0}.ms-Label.is-required::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-Label.is-disabled{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-size:14px;font-weight:400;margin-bottom:8px}.ms-TextField .ms-Label{font-size:14px;font-weight:400}.ms-TextField.is-disabled .ms-TextField-field{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";pointer-events:none;cursor:default}.ms-TextField.is-disabled::-webkit-input-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.is-disabled::-moz-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.is-disabled:-moz-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.is-disabled:-ms-input-placeholder{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.is-required .ms-Label::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-TextField.is-required::-webkit-input-placeholder::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-TextField.is-required::-moz-placeholder::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-TextField.is-required:-moz-placeholder::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-TextField.is-required:-ms-input-placeholder::after{content:' *';color:" }, { "theme": "error", "defaultValue": "#a80000" }, { "rawString": "}.ms-TextField.is-active{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-TextField-field{box-sizing:border-box;margin:0;padding:0;box-shadow:none;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;border:1px solid " }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";border-radius:0;font-weight:400;font-size:14px;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:32px;padding:0 12px 0 12px;width:100%;outline:0;text-overflow:ellipsis}html[dir=rtl] .ms-TextField-field{padding:0 12px 0 12px}.ms-TextField-field:hover{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}.ms-TextField-field:focus{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-TextField-field:focus,.ms-TextField-field:hover{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField-field:focus,.ms-TextField-field:hover{border-color:#37006E}}.ms-TextField-field[disabled]{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";border-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";pointer-events:none;cursor:default}.ms-TextField-field::-webkit-input-placeholder{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-TextField-field::-moz-placeholder{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-TextField-field:-moz-placeholder{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-TextField-field:-ms-input-placeholder{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-TextField-description{color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": ";font-size:11px}.ms-TextField.ms-TextField--underlined{border-bottom:1px solid " }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";display:table;width:100%}.ms-TextField.ms-TextField--underlined:hover{border-color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-TextField.ms-TextField--underlined:hover{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField.ms-TextField--underlined:hover{border-color:#37006E}}.ms-TextField.ms-TextField--underlined:active,.ms-TextField.ms-TextField--underlined:focus{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-TextField.ms-TextField--underlined .ms-Label{font-size:14px;display:table-cell;vertical-align:top;padding-top:9px;height:32px;width:1%;white-space:nowrap}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-Label{margin-right:8px}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-Label{margin-left:8px}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-Label{padding-left:12px}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-Label{padding-right:12px}.ms-TextField.ms-TextField--underlined .ms-TextField-field{border:0;display:table-cell;padding-top:8px;padding-bottom:3px}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-TextField-field{float:left}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-TextField-field{float:right}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-TextField-field{text-align:left}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-TextField-field{text-align:right}.ms-TextField.ms-TextField--underlined .ms-TextField-field:active,.ms-TextField.ms-TextField--underlined .ms-TextField-field:focus,.ms-TextField.ms-TextField--underlined .ms-TextField-field:hover{outline:0}.ms-TextField.ms-TextField--underlined.is-disabled{border-bottom-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-TextField.ms-TextField--underlined.is-disabled .ms-Label{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.ms-TextField--underlined.is-disabled .ms-TextField-field{background-color:transparent;color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-TextField.ms-TextField--underlined.is-active{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.ms-TextField.ms-TextField--underlined.is-active{border-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-TextField.ms-TextField--underlined.is-active{border-color:#37006E}}.ms-TextField.ms-TextField--multiline .ms-TextField-field{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400;line-height:17px;min-height:60px;height:auto;padding-top:6px;overflow:auto}.ms-TextField-errorMessage{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;font-weight:400;color:" }, { "theme": "redDark", "defaultValue": "#a80000" }, { "rawString": ";margin:0;padding-top:5px}.ms-TextField-invalid,.ms-TextField-invalid:focus,.ms-TextField-invalid:hover{border-color:" }, { "theme": "redDark", "defaultValue": "#a80000" }, { "rawString": "}.ms-u-screenReaderOnly{position:absolute;text-indent:-9999px;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-Label{padding-left:12px}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-Label{padding-right:12px}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-Label{padding-right:0}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-Label{padding-left:0}html[dir=ltr] .ms-TextField.ms-TextField--underlined .ms-TextField-field{text-align:left}html[dir=rtl] .ms-TextField.ms-TextField--underlined .ms-TextField-field{text-align:right}.ms-TextField.ms-TextField--multiline .ms-TextField-field.ms-TextField-field--unresizable{resize:none}.ms-TextField-hidden{display:none}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(71));
	


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(72));
	


/***/ },
/* 72 */
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
	var Calendar_1 = __webpack_require__(73);
	var Callout_1 = __webpack_require__(85);
	var DirectionalHint_1 = __webpack_require__(89);
	var TextField_1 = __webpack_require__(62);
	var Utilities_1 = __webpack_require__(8);
	__webpack_require__(94);
	var DatePicker = (function (_super) {
	    __extends(DatePicker, _super);
	    function DatePicker(props) {
	        var _this = _super.call(this) || this;
	        var formatDate = props.formatDate, value = props.value;
	        _this.state = {
	            selectedDate: value || new Date(),
	            formattedDate: (formatDate && value) ? formatDate(value) : '',
	            isDatePickerShown: false,
	            errorMessage: null
	        };
	        _this._preventFocusOpeningPicker = false;
	        return _this;
	    }
	    DatePicker.prototype.componentWillReceiveProps = function (nextProps) {
	        var formatDate = nextProps.formatDate, isRequired = nextProps.isRequired, strings = nextProps.strings, value = nextProps.value;
	        var errorMessage = (isRequired && !value) ? (strings.isRequiredErrorMessage || '*') : null;
	        this.setState({
	            selectedDate: value || new Date(),
	            formattedDate: (formatDate && value) ? formatDate(value) : '',
	            errorMessage: errorMessage
	        });
	    };
	    DatePicker.prototype.render = function () {
	        var _this = this;
	        var rootClass = 'ms-DatePicker';
	        var _a = this.props, firstDayOfWeek = _a.firstDayOfWeek, strings = _a.strings, label = _a.label, isRequired = _a.isRequired, ariaLabel = _a.ariaLabel, placeholder = _a.placeholder, allowTextInput = _a.allowTextInput;
	        var _b = this.state, isDatePickerShown = _b.isDatePickerShown, formattedDate = _b.formattedDate, selectedDate = _b.selectedDate, errorMessage = _b.errorMessage;
	        return (React.createElement("div", { className: rootClass, ref: 'root' },
	            React.createElement("div", { ref: function (c) { return _this._datepicker = c; } },
	                React.createElement(TextField_1.TextField, { ariaLabel: ariaLabel, "aria-haspopup": 'true', required: isRequired, onKeyDown: this._onTextFieldKeyDown, onFocus: this._onTextFieldFocus, onBlur: this._onTextFieldBlur, onClick: this._onTextFieldClick, onChanged: this._onTextFieldChanged, errorMessage: errorMessage, label: label, placeholder: placeholder, iconClass: Utilities_1.css('ms-Icon ms-Icon--Calendar', label ? 'ms-DatePicker-event--with-label' : 'ms-DatePicker-event--without-label'), readOnly: !allowTextInput, value: formattedDate, ref: 'textField' })),
	            isDatePickerShown && (React.createElement(Callout_1.Callout, { isBeakVisible: false, className: 'ms-DatePicker-callout', gapSpace: 0, doNotLayer: false, targetElement: this._datepicker, directionalHint: DirectionalHint_1.DirectionalHint.bottomLeftEdge, onDismiss: this._calendarDismissed, onPositioned: this._onCalloutPositioned },
	                React.createElement(Calendar_1.Calendar, { onSelectDate: this._onSelectDate, onDismiss: this._calendarDismissed, isMonthPickerVisible: this.props.isMonthPickerVisible, value: selectedDate, firstDayOfWeek: firstDayOfWeek, strings: strings, ref: this._resolveRef('_calendar') })))));
	    };
	    DatePicker.prototype._onSelectDate = function (date) {
	        var _a = this.props, formatDate = _a.formatDate, onSelectDate = _a.onSelectDate;
	        this.setState({
	            selectedDate: date,
	            isDatePickerShown: false,
	            formattedDate: formatDate && date ? formatDate(date) : '',
	        });
	        if (onSelectDate) {
	            onSelectDate(date);
	        }
	    };
	    ;
	    DatePicker.prototype._onCalloutPositioned = function () {
	        this._calendar.focus();
	    };
	    DatePicker.prototype._onTextFieldFocus = function (ev) {
	        if (!this.props.allowTextInput) {
	            if (!this._preventFocusOpeningPicker) {
	                this._showDatePickerPopup();
	            }
	            else {
	                this._preventFocusOpeningPicker = false;
	            }
	        }
	    };
	    ;
	    DatePicker.prototype._onTextFieldBlur = function (ev) {
	        this._validateTextInput();
	    };
	    ;
	    DatePicker.prototype._onTextFieldChanged = function (newValue) {
	        if (this.props.allowTextInput) {
	            if (this.state.isDatePickerShown) {
	                this._dismissDatePickerPopup();
	            }
	            var _a = this.props, isRequired = _a.isRequired, value = _a.value, strings = _a.strings;
	            this.setState({
	                errorMessage: (isRequired && !value) ? (strings.isRequiredErrorMessage || '*') : null,
	                formattedDate: newValue
	            });
	        }
	    };
	    DatePicker.prototype._onTextFieldKeyDown = function (ev) {
	        switch (ev.which) {
	            case Utilities_1.KeyCodes.enter:
	                ev.preventDefault();
	                ev.stopPropagation();
	                if (!this.state.isDatePickerShown) {
	                    this._showDatePickerPopup();
	                }
	                else {
	                    // When DatePicker allows input date string directly,
	                    // it is expected to hit another enter to close the popup
	                    if (this.props.allowTextInput) {
	                        this._dismissDatePickerPopup();
	                    }
	                }
	                break;
	            case Utilities_1.KeyCodes.escape:
	                this._handleEscKey(ev);
	                break;
	            default:
	                break;
	        }
	    };
	    ;
	    DatePicker.prototype._onTextFieldClick = function (ev) {
	        if (!this.state.isDatePickerShown) {
	            this._showDatePickerPopup();
	        }
	        else {
	            if (this.props.allowTextInput) {
	                this.setState({
	                    isDatePickerShown: false
	                });
	            }
	        }
	    };
	    DatePicker.prototype._showDatePickerPopup = function () {
	        if (!this.state.isDatePickerShown) {
	            this._preventFocusOpeningPicker = true;
	            this._focusOnSelectedDateOnUpdate = true;
	            this.setState({
	                isDatePickerShown: true,
	                navigatedDate: this.state.selectedDate,
	                errorMessage: ''
	            });
	        }
	    };
	    DatePicker.prototype._dismissDatePickerPopup = function () {
	        if (this.state.isDatePickerShown) {
	            this.setState({
	                isDatePickerShown: false
	            });
	            this._validateTextInput();
	        }
	    };
	    /**
	     * Callback for closing the calendar callout
	     */
	    DatePicker.prototype._calendarDismissed = function () {
	        this._preventFocusOpeningPicker = true;
	        this._dismissDatePickerPopup();
	    };
	    DatePicker.prototype._handleEscKey = function (ev) {
	        this._calendarDismissed();
	    };
	    DatePicker.prototype._validateTextInput = function () {
	        var _a = this.props, isRequired = _a.isRequired, allowTextInput = _a.allowTextInput, strings = _a.strings, formatDate = _a.formatDate, parseDateFromString = _a.parseDateFromString, onSelectDate = _a.onSelectDate;
	        var inputValue = this.state.formattedDate;
	        // Do validation only if DatePicker's popup is dismissed
	        if (this.state.isDatePickerShown) {
	            return;
	        }
	        // Check when DatePicker is a required field but has NO input value
	        if (isRequired && !inputValue) {
	            this.setState({
	                // Since fabic react doesn't have loc support yet
	                // use the symbol '*' to represent error message
	                errorMessage: strings.isRequiredErrorMessage || '*'
	            });
	            return;
	        }
	        if (allowTextInput) {
	            var date = null;
	            if (inputValue) {
	                date = parseDateFromString(inputValue);
	                if (!date) {
	                    this.setState({
	                        errorMessage: strings.invalidInputErrorMessage || '*'
	                    });
	                }
	                else {
	                    this.setState({
	                        selectedDate: date,
	                        formattedDate: formatDate && date ? formatDate(date) : '',
	                        errorMessage: ''
	                    });
	                }
	            }
	            else {
	                // No input date string shouldn't be an error if field is not required
	                this.setState({
	                    errorMessage: ''
	                });
	            }
	            // Execute onSelectDate callback
	            if (onSelectDate) {
	                // If no input date string or input date string is invalid
	                // date variable will be null, callback should expect null value for this case
	                onSelectDate(date);
	            }
	        }
	    };
	    return DatePicker;
	}(Utilities_1.BaseComponent));
	DatePicker.defaultProps = {
	    allowTextInput: false,
	    formatDate: function (date) {
	        if (date) {
	            return date.toDateString();
	        }
	        return '';
	    },
	    parseDateFromString: function (dateStr) {
	        var date = Date.parse(dateStr);
	        if (date) {
	            return new Date(date);
	        }
	        return null;
	    },
	    firstDayOfWeek: Calendar_1.DayOfWeek.Sunday,
	    isRequired: false,
	    isMonthPickerVisible: true,
	    strings: null
	};
	__decorate([
	    Utilities_1.autobind
	], DatePicker.prototype, "_onSelectDate", null);
	__decorate([
	    Utilities_1.autobind
	], DatePicker.prototype, "_onCalloutPositioned", null);
	__decorate([
	    Utilities_1.autobind
	], DatePicker.prototype, "_onTextFieldFocus", null);
	__decorate([
	    Utilities_1.autobind
	], DatePicker.prototype, "_onTextFieldBlur", null);
	__decorate([
	    Utilities_1.autobind
	], DatePicker.prototype, "_onTextFieldChanged", null);
	__decorate([
	    Utilities_1.autobind
	], DatePicker.prototype, "_onTextFieldKeyDown", null);
	__decorate([
	    Utilities_1.autobind
	], DatePicker.prototype, "_onTextFieldClick", null);
	__decorate([
	    Utilities_1.autobind
	], DatePicker.prototype, "_dismissDatePickerPopup", null);
	__decorate([
	    Utilities_1.autobind
	], DatePicker.prototype, "_calendarDismissed", null);
	__decorate([
	    Utilities_1.autobind
	], DatePicker.prototype, "_handleEscKey", null);
	__decorate([
	    Utilities_1.autobind
	], DatePicker.prototype, "_validateTextInput", null);
	exports.DatePicker = DatePicker;
	


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(74));
	


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(75));
	__export(__webpack_require__(76));
	


/***/ },
/* 75 */
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
	var Calendar_Props_1 = __webpack_require__(76);
	var CalendarDay_1 = __webpack_require__(77);
	var CalendarMonth_1 = __webpack_require__(83);
	var Utilities_1 = __webpack_require__(8);
	__webpack_require__(84);
	var Calendar = (function (_super) {
	    __extends(Calendar, _super);
	    function Calendar(props) {
	        var _this = _super.call(this) || this;
	        var currentDate = props.value && !isNaN(props.value.getTime()) ?
	            props.value
	            : new Date();
	        _this.state = {
	            selectedDate: currentDate,
	            navigatedDate: currentDate
	        };
	        _this._focusOnUpdate = false;
	        return _this;
	    }
	    Calendar.prototype.componentWillReceiveProps = function (nextProps) {
	        var value = nextProps.value;
	        this.setState({
	            selectedDate: value || new Date()
	        });
	    };
	    Calendar.prototype.componentDidUpdate = function () {
	        if (this._focusOnUpdate) {
	            this.refs.dayPicker.focus();
	            this._focusOnUpdate = false;
	        }
	    };
	    Calendar.prototype.render = function () {
	        var rootClass = 'ms-DatePicker';
	        var _a = this.props, firstDayOfWeek = _a.firstDayOfWeek, strings = _a.strings;
	        var _b = this.state, selectedDate = _b.selectedDate, navigatedDate = _b.navigatedDate;
	        return (React.createElement("div", { className: rootClass, ref: 'root' },
	            React.createElement("div", { className: 'ms-DatePicker-picker ms-DatePicker-picker--opened ms-DatePicker-picker--focused ' + (this.props.isMonthPickerVisible ? 'is-monthPickerVisible' : '') },
	                React.createElement("div", { className: 'ms-DatePicker-holder', onKeyDown: this._onDatePickerPopupKeyDown },
	                    React.createElement("div", { className: 'ms-DatePicker-frame' },
	                        React.createElement("div", { className: 'ms-DatePicker-wrap' },
	                            React.createElement(CalendarDay_1.CalendarDay, { selectedDate: selectedDate, navigatedDate: navigatedDate, onSelectDate: this._onSelectDate, onNavigateDate: this._onNavigateDate, firstDayOfWeek: firstDayOfWeek, strings: strings, ref: 'dayPicker' }),
	                            React.createElement(CalendarMonth_1.CalendarMonth, { navigatedDate: navigatedDate, strings: strings, onNavigateDate: this._onNavigateDate }),
	                            React.createElement("span", { className: 'ms-DatePicker-goToday js-goToday', onClick: this._onGotoToday, onKeyDown: this._onGotoTodayKeyDown, tabIndex: 0 }, strings.goToToday)))))));
	    };
	    Calendar.prototype.focus = function () {
	        if (this.refs.dayPicker) {
	            this.refs.dayPicker.focus();
	        }
	    };
	    Calendar.prototype._navigateDay = function (date) {
	        this.setState({
	            navigatedDate: date
	        });
	    };
	    Calendar.prototype._onNavigateDate = function (date, focusOnNavigatedDay) {
	        this._navigateDay(date);
	        this._focusOnUpdate = focusOnNavigatedDay;
	    };
	    Calendar.prototype._onSelectDate = function (date) {
	        var onSelectDate = this.props.onSelectDate;
	        this.setState({
	            selectedDate: date
	        });
	        if (onSelectDate) {
	            onSelectDate(date);
	        }
	    };
	    ;
	    Calendar.prototype._onGotoToday = function () {
	        this._navigateDay(new Date());
	        this._focusOnUpdate = true;
	    };
	    ;
	    Calendar.prototype._onGotoTodayKeyDown = function (ev) {
	        if (ev.which === Utilities_1.KeyCodes.enter) {
	            ev.preventDefault();
	            this._onGotoToday();
	        }
	    };
	    ;
	    Calendar.prototype._onDatePickerPopupKeyDown = function (ev) {
	        switch (ev.which) {
	            case Utilities_1.KeyCodes.enter:
	                ev.preventDefault();
	                break;
	            case Utilities_1.KeyCodes.backspace:
	                ev.preventDefault();
	                break;
	            case Utilities_1.KeyCodes.escape:
	                this._handleEscKey(ev);
	                break;
	            default:
	                break;
	        }
	    };
	    Calendar.prototype._handleEscKey = function (ev) {
	        if (this.props.onDismiss() != null) {
	            this.props.onDismiss();
	        }
	    };
	    return Calendar;
	}(Utilities_1.BaseComponent));
	Calendar.defaultProps = {
	    onSelectDate: null,
	    onDismiss: null,
	    isMonthPickerVisible: true,
	    value: null,
	    firstDayOfWeek: Calendar_Props_1.DayOfWeek.Sunday,
	    strings: null
	};
	__decorate([
	    Utilities_1.autobind
	], Calendar.prototype, "_navigateDay", null);
	__decorate([
	    Utilities_1.autobind
	], Calendar.prototype, "_onNavigateDate", null);
	__decorate([
	    Utilities_1.autobind
	], Calendar.prototype, "_onSelectDate", null);
	__decorate([
	    Utilities_1.autobind
	], Calendar.prototype, "_onGotoToday", null);
	__decorate([
	    Utilities_1.autobind
	], Calendar.prototype, "_onGotoTodayKeyDown", null);
	__decorate([
	    Utilities_1.autobind
	], Calendar.prototype, "_onDatePickerPopupKeyDown", null);
	__decorate([
	    Utilities_1.autobind
	], Calendar.prototype, "_handleEscKey", null);
	exports.Calendar = Calendar;
	


/***/ },
/* 76 */
/***/ function(module, exports) {

	"use strict";
	var DayOfWeek;
	(function (DayOfWeek) {
	    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
	    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
	    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
	    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
	    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
	    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
	    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
	})(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
	


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var css_1 = __webpack_require__(15);
	var FocusZone_1 = __webpack_require__(78);
	var KeyCodes_1 = __webpack_require__(12);
	var DateMath_1 = __webpack_require__(82);
	var rtl_1 = __webpack_require__(20);
	var object_1 = __webpack_require__(18);
	var DAYS_IN_WEEK = 7;
	var CalendarDay = (function (_super) {
	    __extends(CalendarDay, _super);
	    function CalendarDay(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            activeDescendantId: object_1.getId('DatePickerDay-active'),
	            weeks: _this._getWeeks(props.navigatedDate, props.selectedDate)
	        };
	        _this._onSelectNextMonth = _this._onSelectNextMonth.bind(_this);
	        _this._onSelectPrevMonth = _this._onSelectPrevMonth.bind(_this);
	        return _this;
	    }
	    CalendarDay.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setState({
	            weeks: this._getWeeks(nextProps.navigatedDate, nextProps.selectedDate)
	        });
	    };
	    CalendarDay.prototype.render = function () {
	        var _this = this;
	        var _a = this.state, activeDescendantId = _a.activeDescendantId, weeks = _a.weeks;
	        var _b = this.props, firstDayOfWeek = _b.firstDayOfWeek, strings = _b.strings, navigatedDate = _b.navigatedDate, onSelectDate = _b.onSelectDate;
	        var selectDayCallbacks = {};
	        weeks.map(function (week, index) { return week.map(function (day) { return selectDayCallbacks[day.key] = onSelectDate.bind(_this, day.originalDate); }); });
	        return (React.createElement("div", { className: 'ms-DatePicker-dayPicker' },
	            React.createElement("div", { className: 'ms-DatePicker-header' },
	                React.createElement("div", { className: 'ms-DatePicker-month' }, strings.months[navigatedDate.getMonth()]),
	                React.createElement("div", { className: 'ms-DatePicker-year' }, navigatedDate.getFullYear())),
	            React.createElement("div", { className: 'ms-DatePicker-monthComponents' },
	                React.createElement("div", { className: 'ms-DatePicker-navContainer' },
	                    React.createElement("span", { className: 'ms-DatePicker-prevMonth js-prevMonth', onClick: this._onSelectPrevMonth, onKeyDown: this._onKeyDown.bind(this, this._onSelectPrevMonth), tabIndex: 0 },
	                        React.createElement("i", { className: css_1.css('ms-Icon', { 'ms-Icon--ChevronLeft': !rtl_1.getRTL(), 'ms-Icon--ChevronRight': rtl_1.getRTL() }) })),
	                    React.createElement("span", { className: 'ms-DatePicker-nextMonth js-nextMonth', onClick: this._onSelectNextMonth, onKeyDown: this._onKeyDown.bind(this, this._onSelectNextMonth), tabIndex: 0 },
	                        React.createElement("i", { className: css_1.css('ms-Icon', { 'ms-Icon--ChevronLeft': rtl_1.getRTL(), 'ms-Icon--ChevronRight': !rtl_1.getRTL() }) }))),
	                React.createElement("div", { className: 'ms-DatePicker-headerToggleView js-showMonthPicker' })),
	            React.createElement(FocusZone_1.FocusZone, null,
	                React.createElement("table", { className: 'ms-DatePicker-table', role: 'grid', "aria-readonly": 'true', "aria-multiselectable": 'false', "aria-activedescendant": activeDescendantId },
	                    React.createElement("thead", null,
	                        React.createElement("tr", null, strings.shortDays.map(function (val, index) {
	                            return React.createElement("th", { className: 'ms-DatePicker-weekday', scope: 'col', key: index, title: strings.days[(index + firstDayOfWeek) % DAYS_IN_WEEK] }, strings.shortDays[(index + firstDayOfWeek) % DAYS_IN_WEEK]);
	                        }))),
	                    React.createElement("tbody", null, weeks.map(function (week, weekIndex) {
	                        return React.createElement("tr", { key: weekIndex }, week.map(function (day, dayIndex) {
	                            return React.createElement("td", { role: 'presentation', key: day.key },
	                                React.createElement("div", { className: css_1.css('ms-DatePicker-day', {
	                                        'ms-DatePicker-day--infocus': day.isInMonth,
	                                        'ms-DatePicker-day--outfocus': !day.isInMonth,
	                                        'ms-DatePicker-day--today': day.isToday,
	                                        'ms-DatePicker-day--highlighted': day.isSelected
	                                    }), role: 'gridcell', onClick: selectDayCallbacks[day.key], onKeyDown: function (ev) {
	                                        return _this._navigateMonthEdge(ev, day.originalDate, weekIndex, dayIndex);
	                                    }, "aria-selected": day.isSelected, id: DateMath_1.compareDates(navigatedDate, day.originalDate) ? activeDescendantId : null, "data-is-focusable": true, ref: DateMath_1.compareDates(navigatedDate, day.originalDate) ? 'navigatedDay' : null, key: DateMath_1.compareDates(navigatedDate, day.originalDate) ? 'navigatedDay' : null }, day.date));
	                        }));
	                    }))))));
	    };
	    CalendarDay.prototype.focus = function () {
	        if (this.refs.navigatedDay) {
	            this.refs.navigatedDay.tabIndex = 0;
	            this.refs.navigatedDay.focus();
	        }
	    };
	    CalendarDay.prototype._navigateMonthEdge = function (ev, date, weekIndex, dayIndex) {
	        if (weekIndex === 0 && ev.which === KeyCodes_1.KeyCodes.up) {
	            this.props.onNavigateDate(DateMath_1.addWeeks(date, -1), true);
	            ev.preventDefault();
	        }
	        else if (weekIndex === (this.state.weeks.length - 1) && ev.which === KeyCodes_1.KeyCodes.down) {
	            this.props.onNavigateDate(DateMath_1.addWeeks(date, 1), true);
	            ev.preventDefault();
	        }
	        else if (dayIndex === 0 && ev.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.left)) {
	            this.props.onNavigateDate(DateMath_1.addDays(date, -1), true);
	            ev.preventDefault();
	        }
	        else if (dayIndex === (DAYS_IN_WEEK - 1) && ev.which === rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.right)) {
	            this.props.onNavigateDate(DateMath_1.addDays(date, 1), true);
	            ev.preventDefault();
	        }
	    };
	    CalendarDay.prototype._onKeyDown = function (callback, ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.enter) {
	            callback();
	        }
	    };
	    CalendarDay.prototype._onSelectNextMonth = function () {
	        this.props.onNavigateDate(DateMath_1.addMonths(this.props.navigatedDate, 1), false);
	    };
	    CalendarDay.prototype._onSelectPrevMonth = function () {
	        this.props.onNavigateDate(DateMath_1.addMonths(this.props.navigatedDate, -1), false);
	    };
	    CalendarDay.prototype._getWeeks = function (navigatedDate, selectedDate) {
	        var firstDayOfWeek = this.props.firstDayOfWeek;
	        var date = new Date(navigatedDate.getFullYear(), navigatedDate.getMonth(), 1);
	        var today = new Date();
	        var weeks = [];
	        var week;
	        // Cycle the date backwards to get to the first day of the week.
	        while (date.getDay() !== firstDayOfWeek) {
	            date.setDate(date.getDate() - 1);
	        }
	        // a flag to indicate whether all days of the week are in the month
	        var isAllDaysOfWeekOutOfMonth = false;
	        for (var weekIndex = 0; !isAllDaysOfWeekOutOfMonth; weekIndex++) {
	            week = [];
	            isAllDaysOfWeekOutOfMonth = true;
	            for (var dayIndex = 0; dayIndex < DAYS_IN_WEEK; dayIndex++) {
	                var dayInfo = {
	                    key: date.toString(),
	                    date: date.getDate(),
	                    originalDate: new Date(date.toString()),
	                    isInMonth: date.getMonth() === navigatedDate.getMonth(),
	                    isToday: DateMath_1.compareDates(today, date),
	                    isSelected: DateMath_1.compareDates(selectedDate, date)
	                };
	                week.push(dayInfo);
	                if (dayInfo.isInMonth) {
	                    isAllDaysOfWeekOutOfMonth = false;
	                }
	                date.setDate(date.getDate() + 1);
	            }
	            if (!isAllDaysOfWeekOutOfMonth) {
	                weeks.push(week);
	            }
	        }
	        return weeks;
	    };
	    return CalendarDay;
	}(React.Component));
	exports.CalendarDay = CalendarDay;
	


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(79));
	


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(80));
	__export(__webpack_require__(81));
	


/***/ },
/* 80 */
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
	var FocusZone_Props_1 = __webpack_require__(81);
	var Utilities_1 = __webpack_require__(8);
	var focus_1 = __webpack_require__(41);
	var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
	var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
	var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
	var TABINDEX = 'tabindex';
	var _allInstances = {};
	var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
	var FocusZone = (function (_super) {
	    __extends(FocusZone, _super);
	    function FocusZone(props) {
	        var _this = _super.call(this, props) || this;
	        _this._id = Utilities_1.getId('FocusZone');
	        _allInstances[_this._id] = _this;
	        _this._focusAlignment = {
	            left: 0,
	            top: 0
	        };
	        return _this;
	    }
	    FocusZone.prototype.componentDidMount = function () {
	        var windowElement = this.refs.root.ownerDocument.defaultView;
	        var parentElement = Utilities_1.getParent(this.refs.root);
	        while (parentElement &&
	            parentElement !== document.body &&
	            parentElement.nodeType === 1) {
	            if (focus_1.isElementFocusZone(parentElement)) {
	                this._isInnerZone = true;
	                break;
	            }
	            parentElement = Utilities_1.getParent(parentElement);
	        }
	        this._events.on(windowElement, 'keydown', this._onKeyDownCapture, true);
	        // Assign initial tab indexes so that we can set initial focus as appropriate.
	        this._updateTabIndexes();
	        if (this.props.defaultActiveElement) {
	            this._activeElement = Utilities_1.getDocument().querySelector(this.props.defaultActiveElement);
	        }
	    };
	    FocusZone.prototype.componentWillUnmount = function () {
	        delete _allInstances[this._id];
	    };
	    FocusZone.prototype.render = function () {
	        var _a = this.props, rootProps = _a.rootProps, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
	        return (React.createElement("div", __assign({}, rootProps, { className: Utilities_1.css('ms-FocusZone', className), ref: 'root', "data-focuszone-id": this._id, "aria-labelledby": ariaLabelledBy, onKeyDown: this._onKeyDown, onFocus: this._onFocus }, { onMouseDownCapture: this._onMouseDown }), this.props.children));
	    };
	    /**
	     * Sets focus to the first tabbable item in the zone.
	     * @returns True if focus could be set to an active element, false if no operation was taken.
	     */
	    FocusZone.prototype.focus = function () {
	        if (this._activeElement && Utilities_1.elementContains(this.refs.root, this._activeElement)) {
	            this._activeElement.focus();
	            return true;
	        }
	        else {
	            var firstChild = this.refs.root.firstChild;
	            return this.focusElement(focus_1.getNextElement(this.refs.root, firstChild, true));
	        }
	    };
	    /**
	     * Sets focus to a specific child element within the zone. This can be used in conjunction with
	     * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
	     * location and then focus.)
	     * @param {HTMLElement} element The child element within the zone to focus.
	     * @returns True if focus could be set to an active element, false if no operation was taken.
	     */
	    FocusZone.prototype.focusElement = function (element) {
	        var onBeforeFocus = this.props.onBeforeFocus;
	        if (onBeforeFocus && !onBeforeFocus(element)) {
	            return false;
	        }
	        if (element) {
	            if (this._activeElement) {
	                this._activeElement.tabIndex = -1;
	            }
	            this._activeElement = element;
	            if (element) {
	                if (!this._focusAlignment) {
	                    this._setFocusAlignment(element, true, true);
	                }
	                this._activeElement.tabIndex = 0;
	                element.focus();
	                return true;
	            }
	        }
	        return false;
	    };
	    FocusZone.prototype._onFocus = function (ev) {
	        var onActiveElementChanged = this.props.onActiveElementChanged;
	        if (this._isImmediateDescendantOfZone(ev.target)) {
	            this._activeElement = ev.target;
	            this._setFocusAlignment(this._activeElement);
	        }
	        else {
	            var parentElement = ev.target;
	            while (parentElement && parentElement !== this.refs.root) {
	                if (focus_1.isElementTabbable(parentElement) && this._isImmediateDescendantOfZone(parentElement)) {
	                    this._activeElement = parentElement;
	                    break;
	                }
	                parentElement = Utilities_1.getParent(parentElement);
	            }
	        }
	        if (onActiveElementChanged) {
	            onActiveElementChanged(this._activeElement, ev);
	        }
	    };
	    /**
	     * Handle global tab presses so that we can patch tabindexes on the fly.
	     */
	    FocusZone.prototype._onKeyDownCapture = function (ev) {
	        if (ev.which === Utilities_1.KeyCodes.tab) {
	            this._updateTabIndexes();
	        }
	    };
	    FocusZone.prototype._onMouseDown = function (ev) {
	        var disabled = this.props.disabled;
	        if (disabled) {
	            return;
	        }
	        var target = ev.target;
	        var path = [];
	        while (target && target !== this.refs.root) {
	            path.push(target);
	            target = Utilities_1.getParent(target);
	        }
	        while (path.length) {
	            target = path.pop();
	            if (focus_1.isElementFocusZone(target)) {
	                break;
	            }
	            else if (target && focus_1.isElementTabbable(target)) {
	                target.tabIndex = 0;
	                this._setFocusAlignment(target, true, true);
	            }
	        }
	    };
	    /**
	     * Handle the keystrokes.
	     */
	    FocusZone.prototype._onKeyDown = function (ev) {
	        var _a = this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
	        if (disabled) {
	            return;
	        }
	        if (isInnerZoneKeystroke &&
	            this._isImmediateDescendantOfZone(ev.target) &&
	            isInnerZoneKeystroke(ev)) {
	            // Try to focus
	            var innerZone = this._getFirstInnerZone();
	            if (!innerZone || !innerZone.focus()) {
	                return;
	            }
	        }
	        else {
	            switch (ev.which) {
	                case Utilities_1.KeyCodes.left:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusLeft()) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.right:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusRight()) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.up:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusUp()) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.down:
	                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusDown()) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.home:
	                    var firstChild = this.refs.root.firstChild;
	                    if (this.focusElement(focus_1.getNextElement(this.refs.root, firstChild, true))) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.end:
	                    var lastChild = this.refs.root.lastChild;
	                    if (this.focusElement(focus_1.getPreviousElement(this.refs.root, lastChild, true, true, true))) {
	                        break;
	                    }
	                    return;
	                case Utilities_1.KeyCodes.enter:
	                    if (this._tryInvokeClickForFocusable(ev.target)) {
	                        break;
	                    }
	                    return;
	                default:
	                    return;
	            }
	        }
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    /**
	     * Walk up the dom try to find a focusable element.
	     */
	    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
	        do {
	            if (target.tagName === 'BUTTON' || target.tagName === 'A') {
	                return false;
	            }
	            if (this._isImmediateDescendantOfZone(target) &&
	                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
	                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
	                Utilities_1.EventGroup.raise(target, 'click', null, true);
	                return true;
	            }
	            target = Utilities_1.getParent(target);
	        } while (target !== this.refs.root);
	        return false;
	    };
	    /**
	     * Traverse to find first child zone.
	     */
	    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
	        rootElement = rootElement || this._activeElement || this.refs.root;
	        var child = rootElement.firstElementChild;
	        while (child) {
	            if (focus_1.isElementFocusZone(child)) {
	                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
	            }
	            var match = this._getFirstInnerZone(child);
	            if (match) {
	                return match;
	            }
	            child = child.nextElementSibling;
	        }
	        return null;
	    };
	    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev) {
	        var element = this._activeElement;
	        var candidateDistance = -1;
	        var candidateElement;
	        var changedFocus = false;
	        var isBidirectional = this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional;
	        if (!element) {
	            return false;
	        }
	        if (this._isElementInput(element)) {
	            if (!this._shouldInputLoseFocus(element, isForward)) {
	                return false;
	            }
	        }
	        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
	        do {
	            element = isForward ?
	                focus_1.getNextElement(this.refs.root, element) :
	                focus_1.getPreviousElement(this.refs.root, element);
	            if (isBidirectional) {
	                if (element) {
	                    var targetRect = element.getBoundingClientRect();
	                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
	                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
	                        candidateDistance = elementDistance;
	                        candidateElement = element;
	                    }
	                    if (candidateDistance >= 0 && elementDistance < 0) {
	                        break;
	                    }
	                }
	            }
	            else {
	                candidateElement = element;
	                break;
	            }
	        } while (element);
	        // Focus the closest candidate
	        if (candidateElement && candidateElement !== this._activeElement) {
	            changedFocus = true;
	            this.focusElement(candidateElement);
	        }
	        else if (this.props.isCircularNavigation) {
	            if (isForward) {
	                return this.focusElement(focus_1.getNextElement(this.refs.root, this.refs.root.firstElementChild, true));
	            }
	            else {
	                return this.focusElement(focus_1.getPreviousElement(this.refs.root, this.refs.root.lastElementChild, true, true, true));
	            }
	        }
	        return changedFocus;
	    };
	    FocusZone.prototype._moveFocusDown = function () {
	        var targetTop = -1;
	        var leftAlignment = this._focusAlignment.left;
	        if (this._moveFocus(true, function (activeRect, targetRect) {
	            var distance = -1;
	            // ClientRect values can be floats that differ by very small fractions of a decimal.
	            // If the difference between top and bottom are within a pixel then we should treat
	            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
	            // but without Math.Floor they will be handled incorrectly.
	            var targetRectTop = Math.floor(targetRect.top);
	            var activeRectBottom = Math.floor(activeRect.bottom);
	            if ((targetTop === -1 && targetRectTop >= activeRectBottom) ||
	                (targetRectTop === targetTop)) {
	                targetTop = targetRectTop;
	                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
	                    distance = 0;
	                }
	                else {
	                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
	                }
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, false, true);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._moveFocusUp = function () {
	        var targetTop = -1;
	        var leftAlignment = this._focusAlignment.left;
	        if (this._moveFocus(false, function (activeRect, targetRect) {
	            var distance = -1;
	            // ClientRect values can be floats that differ by very small fractions of a decimal.
	            // If the difference between top and bottom are within a pixel then we should treat
	            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
	            // but without Math.Floor they will be handled incorrectly.
	            var targetRectBottom = Math.floor(targetRect.bottom);
	            var targetRectTop = Math.floor(targetRect.top);
	            var activeRectTop = Math.floor(activeRect.top);
	            if ((targetTop === -1 && targetRectBottom <= activeRectTop) ||
	                (targetRectTop === targetTop)) {
	                targetTop = targetRectTop;
	                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
	                    distance = 0;
	                }
	                else {
	                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
	                }
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, false, true);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._moveFocusLeft = function () {
	        var _this = this;
	        var targetTop = -1;
	        var topAlignment = this._focusAlignment.top;
	        if (this._moveFocus(Utilities_1.getRTL(), function (activeRect, targetRect) {
	            var distance = -1;
	            if ((targetTop === -1 &&
	                targetRect.right <= activeRect.right &&
	                (_this.props.direction === FocusZone_Props_1.FocusZoneDirection.horizontal || targetRect.top === activeRect.top)) ||
	                (targetRect.top === targetTop)) {
	                targetTop = targetRect.top;
	                distance = Math.abs((targetRect.top + (targetRect.height / 2)) - topAlignment);
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, true, false);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._moveFocusRight = function () {
	        var _this = this;
	        var targetTop = -1;
	        var topAlignment = this._focusAlignment.top;
	        if (this._moveFocus(!Utilities_1.getRTL(), function (activeRect, targetRect) {
	            var distance = -1;
	            if ((targetTop === -1 &&
	                targetRect.left >= activeRect.left &&
	                (_this.props.direction === FocusZone_Props_1.FocusZoneDirection.horizontal || targetRect.top === activeRect.top)) ||
	                (targetRect.top === targetTop)) {
	                targetTop = targetRect.top;
	                distance = Math.abs((targetRect.top + (targetRect.height / 2)) - topAlignment);
	            }
	            return distance;
	        })) {
	            this._setFocusAlignment(this._activeElement, true, false);
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
	        if (this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional &&
	            (!this._focusAlignment || isHorizontal || isVertical)) {
	            var rect = element.getBoundingClientRect();
	            var left = rect.left + (rect.width / 2);
	            var top_1 = rect.top + (rect.height / 2);
	            if (!this._focusAlignment) {
	                this._focusAlignment = { left: left, top: top_1 };
	            }
	            if (isHorizontal) {
	                this._focusAlignment.left = left;
	            }
	            if (isVertical) {
	                this._focusAlignment.top = top_1;
	            }
	        }
	    };
	    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
	        var parentElement = Utilities_1.getParent(element);
	        while (parentElement && parentElement !== this.refs.root && parentElement !== document.body) {
	            if (focus_1.isElementFocusZone(parentElement)) {
	                return false;
	            }
	            parentElement = Utilities_1.getParent(parentElement);
	        }
	        return true;
	    };
	    FocusZone.prototype._updateTabIndexes = function (element) {
	        if (!element) {
	            element = this.refs.root;
	            if (this._activeElement && !Utilities_1.elementContains(element, this._activeElement)) {
	                this._activeElement = null;
	            }
	        }
	        var childNodes = element.children;
	        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
	            var child = childNodes[childIndex];
	            if (!focus_1.isElementFocusZone(child)) {
	                if (focus_1.isElementTabbable(child)) {
	                    if (this.props.disabled) {
	                        child.setAttribute(TABINDEX, '-1');
	                    }
	                    else if (!this._isInnerZone && (!this._activeElement || this._activeElement === child)) {
	                        this._activeElement = child;
	                        if (child.getAttribute(TABINDEX) !== '0') {
	                            child.setAttribute(TABINDEX, '0');
	                        }
	                    }
	                    else if (child.getAttribute(TABINDEX) !== '-1') {
	                        child.setAttribute(TABINDEX, '-1');
	                    }
	                }
	                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
	                    // Disgusting IE hack. Sad face.
	                    child.setAttribute('focusable', 'false');
	                }
	                this._updateTabIndexes(child);
	            }
	        }
	    };
	    FocusZone.prototype._isElementInput = function (element) {
	        if (element && element.tagName && element.tagName.toLowerCase() === 'input') {
	            return true;
	        }
	        return false;
	    };
	    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
	        if (element &&
	            element.type &&
	            ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
	            var selectionStart = element.selectionStart;
	            var selectionEnd = element.selectionEnd;
	            var isRangeSelected = selectionStart !== selectionEnd;
	            var inputValue = element.value;
	            // We shouldn't lose focus in the following cases:
	            // 1. There is range selected.
	            // 2. When selection start is larger than 0 and it is backward.
	            // 3. when selection start is not the end of lenght and it is forward.
	            if (isRangeSelected ||
	                (selectionStart > 0 && !isForward) ||
	                (selectionStart !== inputValue.length && isForward)) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return FocusZone;
	}(Utilities_1.BaseComponent));
	FocusZone.defaultProps = {
	    isCircularNavigation: false,
	    direction: FocusZone_Props_1.FocusZoneDirection.bidirectional
	};
	__decorate([
	    Utilities_1.autobind
	], FocusZone.prototype, "_onFocus", null);
	__decorate([
	    Utilities_1.autobind
	], FocusZone.prototype, "_onMouseDown", null);
	__decorate([
	    Utilities_1.autobind
	], FocusZone.prototype, "_onKeyDown", null);
	exports.FocusZone = FocusZone;
	


/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";
	var FocusZoneDirection;
	(function (FocusZoneDirection) {
	    /** Only react to up/down arrows. */
	    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
	    /** Only react to left/right arrows. */
	    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
	    /** React to all arrows. */
	    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
	})(FocusZoneDirection = exports.FocusZoneDirection || (exports.FocusZoneDirection = {}));
	


/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";
	var DAYS_IN_WEEK = 7;
	var MONTHS_IN_YEAR = 12;
	/**
	 * Returns a date offset from the given date by the specified number of days.
	 * @param {Date} date - The origin date
	 * @param {number} days - The number of days to offset. 'days' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of days
	 */
	function addDays(date, days) {
	    var result = new Date(date.getTime());
	    result.setDate(result.getDate() + days);
	    return result;
	}
	exports.addDays = addDays;
	/**
	 * Returns a date offset from the given date by the specified number of weeks.
	 * @param {Date} date - The origin date
	 * @param {number} weeks - The number of weeks to offset. 'weeks' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of weeks
	 */
	function addWeeks(date, weeks) {
	    return addDays(date, weeks * DAYS_IN_WEEK);
	}
	exports.addWeeks = addWeeks;
	/**
	 * Returns a date offset from the given date by the specified number of months.
	 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
	 * to contain the original day-of-month, we'll use the last day of the new month.
	 * @param {Date} date - The origin date
	 * @param {number} months - The number of months to offset. 'months' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of months
	 */
	function addMonths(date, months) {
	    var result = new Date(date.getTime());
	    var newMonth = result.getMonth() + months;
	    result.setMonth(newMonth);
	    // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
	    // Loop until we back up to a day the new month has.
	    // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
	    if (result.getMonth() !== ((newMonth % MONTHS_IN_YEAR) + MONTHS_IN_YEAR) % MONTHS_IN_YEAR) {
	        result = addDays(result, -result.getDate());
	    }
	    return result;
	}
	exports.addMonths = addMonths;
	/**
	 * Returns a date offset from the given date by the specified number of years.
	 * The method tries to preserve the day-of-month; however, if the new month does not have enough days
	 * to contain the original day-of-month, we'll use the last day of the new month.
	 * @param {Date} date - The origin date
	 * @param {number} years - The number of years to offset. 'years' can be negative.
	 * @return {Date} A new Date object offset from the origin date by the given number of years
	 */
	function addYears(date, years) {
	    var result = new Date(date.getTime());
	    result.setFullYear(date.getFullYear() + years);
	    // We want to maintain the same day-of-month, but that may not be possible if the new month doesn't have enough days.
	    // Loop until we back up to a day the new month has.
	    // (Weird modulo math is due to Javascript's treatment of negative numbers in modulo)
	    if (result.getMonth() !== ((date.getMonth() % MONTHS_IN_YEAR) + MONTHS_IN_YEAR) % MONTHS_IN_YEAR) {
	        result = addDays(result, -result.getDate());
	    }
	    return result;
	}
	exports.addYears = addYears;
	/**
	 * Returns a date that is a copy of the given date, aside from the month changing to the given month.
	 *  The method tries to preserve the day-of-month; however, if the new month does not have enough days
	 * to contain the original day-of-month, we'll use the last day of the new month.
	 * @param {Date} date - The origin date
	 * @param {number} month - The 0-based index of the month to set on the date.
	 * @return {Date} A new Date object with the given month set.
	 */
	function setMonth(date, month) {
	    return addMonths(date, month - date.getMonth());
	}
	exports.setMonth = setMonth;
	/**
	 * Compares two dates, and returns true if the two dates (not accounting for time-of-day) are equal.
	 * @return {boolean} True if the two dates represent the same date (regardless of time-of-day), false otherwise.
	 */
	function compareDates(date1, date2) {
	    return (date1.getFullYear() === date2.getFullYear()
	        && date1.getMonth() === date2.getMonth()
	        && date1.getDate() === date2.getDate());
	}
	exports.compareDates = compareDates;
	


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var FocusZone_1 = __webpack_require__(78);
	var KeyCodes_1 = __webpack_require__(12);
	var DateMath_1 = __webpack_require__(82);
	var rtl_1 = __webpack_require__(20);
	var css_1 = __webpack_require__(15);
	var CalendarMonth = (function (_super) {
	    __extends(CalendarMonth, _super);
	    function CalendarMonth(props) {
	        var _this = _super.call(this, props) || this;
	        _this._selectMonthCallbacks = [];
	        props.strings.shortMonths.map(function (month, index) {
	            _this._selectMonthCallbacks[index] = _this._onSelectMonth.bind(_this, index);
	        });
	        _this._onSelectNextYear = _this._onSelectNextYear.bind(_this);
	        _this._onSelectPrevYear = _this._onSelectPrevYear.bind(_this);
	        _this._onSelectMonth = _this._onSelectMonth.bind(_this);
	        return _this;
	    }
	    CalendarMonth.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, navigatedDate = _a.navigatedDate, strings = _a.strings;
	        return (React.createElement("div", { className: 'ms-DatePicker-monthPicker' },
	            React.createElement("div", { className: 'ms-DatePicker-header' },
	                React.createElement("div", { className: 'ms-DatePicker-yearComponents ms-DatePicker-navContainer' },
	                    React.createElement("span", { className: 'ms-DatePicker-prevYear js-prevYear', onClick: this._onSelectPrevYear, onKeyDown: this._onKeyDown.bind(this, this._onSelectPrevYear), tabIndex: 0 },
	                        React.createElement("i", { className: css_1.css('ms-Icon', { 'ms-Icon--ChevronLeft': !rtl_1.getRTL(), 'ms-Icon--ChevronRight': rtl_1.getRTL() }) })),
	                    React.createElement("span", { className: 'ms-DatePicker-nextYear js-nextYear', onClick: this._onSelectNextYear, onKeyDown: this._onKeyDown.bind(this, this._onSelectNextYear), tabIndex: 0 },
	                        React.createElement("i", { className: css_1.css('ms-Icon', { 'ms-Icon--ChevronLeft': rtl_1.getRTL(), 'ms-Icon--ChevronRight': !rtl_1.getRTL() }) }))),
	                React.createElement("div", { className: 'ms-DatePicker-currentYear js-showYearPicker' }, navigatedDate.getFullYear())),
	            React.createElement(FocusZone_1.FocusZone, null,
	                React.createElement("div", { className: 'ms-DatePicker-optionGrid' }, strings.shortMonths.map(function (month, index) {
	                    return (React.createElement("span", { className: 'ms-DatePicker-monthOption', key: index, onClick: _this._selectMonthCallbacks[index], "data-is-focusable": true }, month));
	                })))));
	    };
	    CalendarMonth.prototype._onKeyDown = function (callback, ev) {
	        if (ev.which === KeyCodes_1.KeyCodes.enter) {
	            callback();
	        }
	    };
	    CalendarMonth.prototype._onSelectNextYear = function () {
	        var _a = this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate;
	        onNavigateDate(DateMath_1.addYears(navigatedDate, 1), false);
	    };
	    ;
	    CalendarMonth.prototype._onSelectPrevYear = function () {
	        var _a = this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate;
	        onNavigateDate(DateMath_1.addYears(navigatedDate, -1), false);
	    };
	    ;
	    CalendarMonth.prototype._onSelectMonth = function (newMonth) {
	        var _a = this.props, navigatedDate = _a.navigatedDate, onNavigateDate = _a.onNavigateDate;
	        onNavigateDate(DateMath_1.setMonth(navigatedDate, newMonth), true);
	    };
	    return CalendarMonth;
	}(React.Component));
	exports.CalendarMonth = CalendarMonth;
	


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DatePicker{box-sizing:border-box;margin:0;padding:0;box-shadow:none;margin-bottom:17px}.ms-DatePicker-picker{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";font-size:14px;position:relative}html[dir=ltr] .ms-DatePicker-picker{text-align:left}html[dir=rtl] .ms-DatePicker-picker{text-align:right}.ms-DatePicker-holder{-webkit-overflow-scrolling:touch;box-sizing:border-box;background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";min-width:300px;display:none}.ms-DatePicker-picker.ms-DatePicker-picker--opened .ms-DatePicker-holder{-webkit-animation-name:fadeIn,slideDownIn10;animation-name:fadeIn,slideDownIn10;-webkit-animation-duration:167ms;-moz-animation-duration:167ms;-ms-animation-duration:167ms;-o-animation-duration:167ms;-webkit-animation-timing-function:cubic-bezier(.1,.25,.75,.9);animation-timing-function:cubic-bezier(.1,.25,.75,.9);-webkit-animation-fill-mode:both;animation-fill-mode:both;box-sizing:border-box;display:block}.ms-DatePicker-picker--opened{position:relative}.ms-DatePicker-frame{padding:1px}.ms-DatePicker-wrap{margin:-1px;padding:9px}.ms-DatePicker-dayPicker{display:block;margin-bottom:30px}.ms-DatePicker-header{height:40px;line-height:44px}.ms-DatePicker-month,.ms-DatePicker-year{display:inline-block;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:21px;font-weight:100;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";margin-top:-1px}.ms-DatePicker-month:hover,.ms-DatePicker-year:hover{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";cursor:pointer}html[dir=ltr] .ms-DatePicker-month{margin-left:15px}html[dir=rtl] .ms-DatePicker-month{margin-right:15px}html[dir=ltr] .ms-DatePicker-year{margin-left:15px}html[dir=rtl] .ms-DatePicker-year{margin-right:15px}.ms-DatePicker-table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:inherit}.ms-DatePicker-table td{margin:0;padding:0}.ms-DatePicker-table td:hover{outline:1px solid transparent}.ms-DatePicker-day,.ms-DatePicker-weekday{width:40px;height:40px;padding:0;line-height:40px;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:15px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-DatePicker-day--today{position:relative;background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.ms-DatePicker-day--disabled:before{border-top-color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-DatePicker-day--outfocus{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";font-weight:400}.ms-DatePicker-day--infocus:hover,.ms-DatePicker-day--outfocus:hover{cursor:pointer;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-DatePicker-day--highlighted:hover,.ms-DatePicker-picker--focused .ms-DatePicker-day--highlighted{cursor:pointer;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-DatePicker-day--highlighted.ms-DatePicker-day--disabled,.ms-DatePicker-day--highlighted.ms-DatePicker-day--disabled:hover{background:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": "}.ms-DatePicker-monthPicker,.ms-DatePicker-yearPicker{display:none}.ms-DatePicker-monthComponents{position:absolute;top:9px}html[dir=ltr] .ms-DatePicker-monthComponents{right:9px}html[dir=rtl] .ms-DatePicker-monthComponents{left:9px}html[dir=ltr] .ms-DatePicker-monthComponents{left:9px}html[dir=rtl] .ms-DatePicker-monthComponents{right:9px}.ms-DatePicker-decadeComponents,.ms-DatePicker-yearComponents{position:absolute;top:-2px}html[dir=ltr] .ms-DatePicker-decadeComponents,html[dir=ltr] .ms-DatePicker-yearComponents{right:10px}html[dir=rtl] .ms-DatePicker-decadeComponents,html[dir=rtl] .ms-DatePicker-yearComponents{left:10px}.ms-DatePicker-nextDecade,.ms-DatePicker-nextMonth,.ms-DatePicker-nextYear,.ms-DatePicker-prevDecade,.ms-DatePicker-prevMonth,.ms-DatePicker-prevYear{width:40px;height:40px;display:block;text-align:center;line-height:40px;text-align:center;font-size:16px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";position:relative;top:2px}html[dir=ltr] .ms-DatePicker-nextDecade,html[dir=ltr] .ms-DatePicker-nextMonth,html[dir=ltr] .ms-DatePicker-nextYear,html[dir=ltr] .ms-DatePicker-prevDecade,html[dir=ltr] .ms-DatePicker-prevMonth,html[dir=ltr] .ms-DatePicker-prevYear{margin-left:10px}html[dir=rtl] .ms-DatePicker-nextDecade,html[dir=rtl] .ms-DatePicker-nextMonth,html[dir=rtl] .ms-DatePicker-nextYear,html[dir=rtl] .ms-DatePicker-prevDecade,html[dir=rtl] .ms-DatePicker-prevMonth,html[dir=rtl] .ms-DatePicker-prevYear{margin-right:10px}.ms-DatePicker-nextDecade:hover,.ms-DatePicker-nextMonth:hover,.ms-DatePicker-nextYear:hover,.ms-DatePicker-prevDecade:hover,.ms-DatePicker-prevMonth:hover,.ms-DatePicker-prevYear:hover{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": ";cursor:pointer;outline:1px solid transparent}.ms-DatePicker-headerToggleView{height:40px;position:absolute;top:0;width:140px;cursor:pointer}html[dir=ltr] .ms-DatePicker-headerToggleView{left:0}html[dir=rtl] .ms-DatePicker-headerToggleView{right:0}.ms-DatePicker-currentDecade,.ms-DatePicker-currentYear{display:block;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:21px;font-weight:100;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:40px;line-height:42px}html[dir=ltr] .ms-DatePicker-currentDecade,html[dir=ltr] .ms-DatePicker-currentYear{margin-left:15px}html[dir=rtl] .ms-DatePicker-currentDecade,html[dir=rtl] .ms-DatePicker-currentYear{margin-right:15px}.ms-DatePicker-currentYear{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-DatePicker-currentYear:hover{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": ";cursor:pointer}.ms-DatePicker-optionGrid{position:relative;height:210px;width:280px;margin:10px 0 30px 5px}html[dir=rtl] .ms-DatePicker-optionGrid{margin:10px 5px 30px 0}.ms-DatePicker-monthOption,.ms-DatePicker-yearOption{background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";width:60px;height:60px;line-height:60px;cursor:pointer;margin:0 10px 10px 0;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:13px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";text-align:center}html[dir=ltr] .ms-DatePicker-monthOption,html[dir=ltr] .ms-DatePicker-yearOption{float:left}html[dir=rtl] .ms-DatePicker-monthOption,html[dir=rtl] .ms-DatePicker-yearOption{float:right}html[dir=rtl] .ms-DatePicker-monthOption,html[dir=rtl] .ms-DatePicker-yearOption{margin:0 0 10px 10px}.ms-DatePicker-monthOption:hover,.ms-DatePicker-yearOption:hover{background-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";outline:1px solid transparent}.ms-DatePicker-monthOption.is-highlighted,.ms-DatePicker-yearOption.is-highlighted{background-color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-DatePicker-goToday{bottom:9px;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";cursor:pointer;font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:13px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:30px;line-height:30px;padding:0 10px;position:absolute}html[dir=ltr] .ms-DatePicker-goToday{right:9px}html[dir=rtl] .ms-DatePicker-goToday{left:9px}.ms-DatePicker-goToday:hover{outline:1px solid transparent}.ms-DatePicker.is-pickingYears .ms-DatePicker-dayPicker,.ms-DatePicker.is-pickingYears .ms-DatePicker-monthComponents{display:none}.ms-DatePicker.is-pickingYears .ms-DatePicker-monthPicker{display:none}.ms-DatePicker.is-pickingYears .ms-DatePicker-yearPicker{display:block}@media (min-width:460px){.ms-DatePicker-header{height:30px;line-height:28px}.ms-DatePicker-day,.ms-DatePicker-weekday{width:30px;height:30px;line-height:28px;font-weight:600;font-size:12px}.ms-DatePicker-monthComponents{width:210px}.ms-DatePicker-nextDecade,.ms-DatePicker-nextMonth,.ms-DatePicker-nextYear,.ms-DatePicker-prevDecade,.ms-DatePicker-prevMonth,.ms-DatePicker-prevYear{font-size:12px;width:24px;height:24px;line-height:24px}.ms-DatePicker-holder{min-width:240px}.ms-DatePicker-month,.ms-DatePicker-year{font-weight:300}.ms-DatePicker-month,.ms-DatePicker-year{font-size:17px;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-DatePicker-month:hover,.ms-DatePicker-year:hover{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";cursor:default}.is-monthPickerVisible .ms-DatePicker-dayPicker{margin:-10px 0;padding:10px 0}.is-monthPickerVisible .ms-DatePicker-dayPicker{box-sizing:border-box;width:220px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-dayPicker{border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-dayPicker{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.is-monthPickerVisible .ms-DatePicker-holder{width:440px}.is-monthPickerVisible .ms-DatePicker-monthPicker{display:block}.is-monthPickerVisible .ms-DatePicker-monthPicker,.is-monthPickerVisible .ms-DatePicker-yearPicker{top:9px;position:absolute}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-monthPicker,html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-yearPicker{left:238px}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-monthPicker,html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-yearPicker{right:238px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-month{margin-left:12px}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-month{margin-right:12px}.is-monthPickerVisible .ms-DatePicker-optionGrid{width:200px;height:auto;margin:10px 0 0 0}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-optionGrid{margin:10px 0 0 0}.is-monthPickerVisible .ms-DatePicker-toggleMonthView{display:none}.is-monthPickerVisible .ms-DatePicker-currentDecade,.is-monthPickerVisible .ms-DatePicker-currentYear{font-size:17px;margin:0;height:30px;line-height:26px;padding:0 10px;display:inline-block}.is-monthPickerVisible .ms-DatePicker-monthOption,.is-monthPickerVisible .ms-DatePicker-yearOption{width:40px;height:40px;line-height:38px;font-size:12px;margin:0 10px 10px 0}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-monthOption,html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-yearOption{margin:0 0 10px 10px}.is-monthPickerVisible .ms-DatePicker-monthOption:hover,.is-monthPickerVisible .ms-DatePicker-yearOption:hover{outline:1px solid transparent}.is-monthPickerVisible .ms-DatePicker-goToday{box-sizing:border-box;font-size:12px;height:30px;line-height:30px;padding:0 10px;top:199px;width:210px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-goToday{right:10px}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-goToday{left:10px}html[dir=ltr] .is-monthPickerVisible .ms-DatePicker-goToday{text-align:right}html[dir=rtl] .is-monthPickerVisible .ms-DatePicker-goToday{text-align:left}.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-dayPicker,.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-monthComponents{display:block}.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-monthPicker{display:none}.is-monthPickerVisible .ms-DatePicker.is-pickingYears .ms-DatePicker-yearPicker{display:block}}@media (max-width:459px){.ms-DatePicker.is-pickingMonths .ms-DatePicker-dayPicker,.ms-DatePicker.is-pickingMonths .ms-DatePicker-monthComponents{display:none}.ms-DatePicker.is-pickingMonths .ms-DatePicker-monthPicker{display:block}}.ms-DatePicker-wrap div:focus,.ms-DatePicker-wrap span:focus{outline:1px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-DatePicker-goToday{width:auto}.ms-DatePicker-nextMonth,.ms-DatePicker-nextYear,.ms-DatePicker-prevMonth,.ms-DatePicker-prevYear{display:inline-block}html[dir=ltr] .ms-DatePicker-navContainer{float:right}html[dir=rtl] .ms-DatePicker-navContainer{float:left}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(86));
	


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(87));
	__export(__webpack_require__(89));
	


/***/ },
/* 87 */
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
	var CalloutContent_1 = __webpack_require__(88);
	var Layer_1 = __webpack_require__(47);
	var Callout = (function (_super) {
	    __extends(Callout, _super);
	    function Callout(props) {
	        return _super.call(this, props) || this;
	    }
	    Callout.prototype.render = function () {
	        var content = (React.createElement(CalloutContent_1.CalloutContent, __assign({}, this.props)));
	        return this.props.doNotLayer ? content : (React.createElement(Layer_1.Layer, null, content));
	    };
	    return Callout;
	}(React.Component));
	exports.Callout = Callout;
	


/***/ },
/* 88 */
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
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	var DirectionalHint_1 = __webpack_require__(89);
	var Utilities_1 = __webpack_require__(8);
	var positioning_1 = __webpack_require__(90);
	var focus_1 = __webpack_require__(41);
	var Utilities_2 = __webpack_require__(8);
	var Popup_1 = __webpack_require__(92);
	var BaseComponent_1 = __webpack_require__(9);
	__webpack_require__(93);
	var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
	var OFF_SCREEN_STYLE = { opacity: 0 };
	var BORDER_WIDTH = 1;
	var SPACE_FROM_EDGE = 8;
	var CalloutContent = (function (_super) {
	    __extends(CalloutContent, _super);
	    function CalloutContent(props) {
	        var _this = _super.call(this, props, { 'beakStyle': 'beakWidth' }) || this;
	        _this._didSetInitialFocus = false;
	        _this.state = {
	            positions: null,
	            slideDirectionalClassName: null,
	            calloutElementRect: null
	        };
	        _this._positionAttempts = 0;
	        return _this;
	    }
	    CalloutContent.prototype.componentDidUpdate = function () {
	        this._setInitialFocus();
	        this._updatePosition();
	    };
	    CalloutContent.prototype.componentWillMount = function () {
	        var target = this.props.targetElement ? this.props.targetElement : this.props.target;
	        this._setTargetWindowAndElement(target);
	    };
	    CalloutContent.prototype.componentWillUpdate = function (newProps) {
	        if (newProps.targetElement !== this.props.targetElement || newProps.target !== this.props.target) {
	            var newTarget = newProps.targetElement ? newProps.targetElement : newProps.target;
	            this._setTargetWindowAndElement(newTarget);
	        }
	    };
	    CalloutContent.prototype.componentDidMount = function () {
	        this._onComponentDidMount();
	    };
	    CalloutContent.prototype.render = function () {
	        // If there is no target window then we are likely in server side rendering and we should not render anything.
	        if (!this._targetWindow) {
	            return null;
	        }
	        var _a = this.props, className = _a.className, target = _a.target, targetElement = _a.targetElement, isBeakVisible = _a.isBeakVisible, beakStyle = _a.beakStyle, children = _a.children, beakWidth = _a.beakWidth;
	        var _b = this.state, positions = _b.positions, slideDirectionalClassName = _b.slideDirectionalClassName;
	        var beakStyleWidth = beakWidth;
	        // This is here to support the old way of setting the beak size until version 1.0.0.
	        // beakStyle is now deprecated and will be be removed at version 1.0.0
	        if (beakStyle === 'ms-Callout-smallbeak') {
	            beakStyleWidth = 16;
	        }
	        var beakReactStyle = {
	            top: positions && positions.beakPosition ? positions.beakPosition.top : BEAK_ORIGIN_POSITION.top,
	            left: positions && positions.beakPosition ? positions.beakPosition.left : BEAK_ORIGIN_POSITION.left,
	            height: beakStyleWidth,
	            width: beakStyleWidth
	        };
	        var contentMaxHeight = this._getMaxHeight();
	        var beakVisible = isBeakVisible && (!!targetElement || !!target);
	        var content = (React.createElement("div", { ref: this._resolveRef('_hostElement'), className: 'ms-Callout-container' },
	            React.createElement("div", { className: Utilities_1.css('ms-Callout', className, slideDirectionalClassName ? "ms-u-" + slideDirectionalClassName : ''), style: positions ? positions.calloutPosition : OFF_SCREEN_STYLE, ref: this._resolveRef('_calloutElement') },
	                beakVisible ? (React.createElement("div", { className: 'ms-Callout-beak', style: beakReactStyle })) : (null),
	                beakVisible ?
	                    (React.createElement("div", { className: 'ms-Callout-beakCurtain' })) :
	                    (null),
	                React.createElement(Popup_1.Popup, { className: 'ms-Callout-main', onDismiss: this.dismiss, shouldRestoreFocus: true, style: { maxHeight: contentMaxHeight } }, children))));
	        return content;
	    };
	    CalloutContent.prototype.dismiss = function (ev) {
	        var onDismiss = this.props.onDismiss;
	        if (onDismiss) {
	            onDismiss(ev);
	        }
	    };
	    CalloutContent.prototype._dismissOnScroll = function (ev) {
	        if (this.state.positions) {
	            this._dismissOnLostFocus(ev);
	        }
	    };
	    CalloutContent.prototype._dismissOnLostFocus = function (ev) {
	        var target = ev.target;
	        var clickedOutsideCallout = this._hostElement && !Utilities_1.elementContains(this._hostElement, target);
	        if ((!this._target && clickedOutsideCallout) ||
	            ev.target !== this._targetWindow &&
	                clickedOutsideCallout &&
	                (this._target.stopPropagation ||
	                    (!this._target || (target !== this._target && !Utilities_1.elementContains(this._target, target))))) {
	            this.dismiss(ev);
	        }
	    };
	    CalloutContent.prototype._setInitialFocus = function () {
	        if (this.props.setInitialFocus && !this._didSetInitialFocus && this.state.positions) {
	            this._didSetInitialFocus = true;
	            focus_1.focusFirstChild(this._calloutElement);
	        }
	    };
	    CalloutContent.prototype._onComponentDidMount = function () {
	        var _this = this;
	        // This is added so the callout will dismiss when the window is scrolled
	        // but not when something inside the callout is scrolled. The delay seems
	        // to be required to avoid React firing an async focus event in IE from
	        // the target changing focus quickly prior to rendering the callout.
	        this._async.setTimeout(function () {
	            _this._events.on(_this._targetWindow, 'scroll', _this._dismissOnScroll, true);
	            _this._events.on(_this._targetWindow, 'resize', _this.dismiss, true);
	            _this._events.on(_this._targetWindow, 'focus', _this._dismissOnLostFocus, true);
	            _this._events.on(_this._targetWindow, 'click', _this._dismissOnLostFocus, true);
	        }, 0);
	        if (this.props.onLayerMounted) {
	            this.props.onLayerMounted();
	        }
	        this._updatePosition();
	    };
	    CalloutContent.prototype._updatePosition = function () {
	        var positions = this.state.positions;
	        var hostElement = this._hostElement;
	        var calloutElement = this._calloutElement;
	        if (hostElement && calloutElement) {
	            var currentProps = void 0;
	            currentProps = Utilities_2.assign(currentProps, this.props);
	            currentProps.bounds = this._getBounds();
	            // Temporary to be removed when targetElement is removed. Currently deprecated.
	            if (this.props.targetElement) {
	                currentProps.targetElement = this._target;
	            }
	            else {
	                currentProps.target = this._target;
	            }
	            var newPositions = positioning_1.getRelativePositions(currentProps, hostElement, calloutElement);
	            // Set the new position only when the positions are not exists or one of the new callout positions are different.
	            // The position should not change if the position is within 2 decimal places.
	            if ((!positions && newPositions) ||
	                (positions && newPositions && this._arePositionsEqual(positions, newPositions)
	                    && this._positionAttempts < 5)) {
	                // We should not reposition the callout more than a few times, if it is then the content is likely resizing
	                // and we should stop trying to reposition to prevent a stack overflow.
	                this._positionAttempts++;
	                this.setState({
	                    positions: newPositions
	                });
	            }
	            else {
	                this._positionAttempts = 0;
	                if (this.props.onPositioned) {
	                    this.props.onPositioned();
	                }
	            }
	        }
	    };
	    CalloutContent.prototype._getBounds = function () {
	        if (!this._bounds) {
	            var currentBounds = this.props.bounds;
	            if (!currentBounds) {
	                currentBounds = {
	                    top: 0 + SPACE_FROM_EDGE,
	                    left: 0 + SPACE_FROM_EDGE,
	                    right: this._targetWindow.innerWidth - SPACE_FROM_EDGE,
	                    bottom: this._targetWindow.innerHeight - SPACE_FROM_EDGE,
	                    width: this._targetWindow.innerWidth - SPACE_FROM_EDGE * 2,
	                    height: this._targetWindow.innerHeight - SPACE_FROM_EDGE * 2
	                };
	            }
	            this._bounds = currentBounds;
	        }
	        return this._bounds;
	    };
	    CalloutContent.prototype._getMaxHeight = function () {
	        if (!this._maxHeight) {
	            this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
	        }
	        return this._maxHeight;
	    };
	    CalloutContent.prototype._arePositionsEqual = function (positions, newPosition) {
	        if (positions.calloutPosition.top.toFixed(2) !== newPosition.calloutPosition.top.toFixed(2)) {
	            return false;
	        }
	        if (positions.calloutPosition.left.toFixed(2) !== newPosition.calloutPosition.left.toFixed(2)) {
	            return false;
	        }
	        if (positions.beakPosition.top.toFixed(2) !== newPosition.beakPosition.top.toFixed(2)) {
	            return false;
	        }
	        if (positions.beakPosition.top.toFixed(2) !== newPosition.beakPosition.top.toFixed(2)) {
	            return false;
	        }
	        return true;
	    };
	    CalloutContent.prototype._setTargetWindowAndElement = function (target) {
	        if (target) {
	            if (typeof target === 'string') {
	                var currentDoc = Utilities_1.getDocument();
	                this._target = currentDoc ? currentDoc.querySelector(target) : null;
	                this._targetWindow = Utilities_1.getWindow();
	            }
	            else if (target.stopPropagation) {
	                this._target = target;
	                this._targetWindow = Utilities_1.getWindow(target.toElement);
	            }
	            else {
	                var targetElement = target;
	                this._target = target;
	                this._targetWindow = Utilities_1.getWindow(targetElement);
	            }
	        }
	        else {
	            this._targetWindow = Utilities_1.getWindow();
	        }
	    };
	    return CalloutContent;
	}(BaseComponent_1.BaseComponent));
	CalloutContent.defaultProps = {
	    isBeakVisible: true,
	    beakWidth: 16,
	    gapSpace: 16,
	    directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge
	};
	__decorate([
	    Utilities_1.autobind
	], CalloutContent.prototype, "dismiss", null);
	__decorate([
	    Utilities_1.autobind
	], CalloutContent.prototype, "_setInitialFocus", null);
	__decorate([
	    Utilities_1.autobind
	], CalloutContent.prototype, "_onComponentDidMount", null);
	exports.CalloutContent = CalloutContent;
	


/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";
	var DirectionalHint;
	(function (DirectionalHint) {
	    /**
	     * Appear above the target element, with the left edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["topLeftEdge"] = 0] = "topLeftEdge";
	    /**
	     * Appear above the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["topCenter"] = 1] = "topCenter";
	    /**
	     * Appear above the target element, with the right edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["topRightEdge"] = 2] = "topRightEdge";
	    /**
	     * Appear above the target element, aligning with the target element such that the callout tends toward the center of the screen.
	     */
	    DirectionalHint[DirectionalHint["topAutoEdge"] = 3] = "topAutoEdge";
	    /**
	     * Appear below the target element, with the left edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["bottomLeftEdge"] = 4] = "bottomLeftEdge";
	    /**
	     * Appear below the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["bottomCenter"] = 5] = "bottomCenter";
	    /**
	     * Appear below the target element, with the right edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["bottomRightEdge"] = 6] = "bottomRightEdge";
	    /**
	     * Appear below the target element, aligning with the target element such that the callout tends toward the center of the screen.
	     */
	    DirectionalHint[DirectionalHint["bottomAutoEdge"] = 7] = "bottomAutoEdge";
	    /**
	     * Appear to the left of the target element, with the top edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["leftTopEdge"] = 8] = "leftTopEdge";
	    /**
	     * Appear to the left of the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["leftCenter"] = 9] = "leftCenter";
	    /**
	     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["leftBottomEdge"] = 10] = "leftBottomEdge";
	    /**
	     * Appear to the right of the target element, with the top edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["rightTopEdge"] = 11] = "rightTopEdge";
	    /**
	     * Appear to the right of the target element, with the centers of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["rightCenter"] = 12] = "rightCenter";
	    /**
	     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
	     */
	    DirectionalHint[DirectionalHint["rightBottomEdge"] = 13] = "rightBottomEdge";
	})(DirectionalHint = exports.DirectionalHint || (exports.DirectionalHint = {}));
	


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DirectionalHint_1 = __webpack_require__(89);
	var Rectangle_1 = __webpack_require__(91);
	var scroll_1 = __webpack_require__(22);
	var object_1 = __webpack_require__(18);
	var RectangleEdge;
	(function (RectangleEdge) {
	    RectangleEdge[RectangleEdge["top"] = 0] = "top";
	    RectangleEdge[RectangleEdge["bottom"] = 1] = "bottom";
	    RectangleEdge[RectangleEdge["left"] = 2] = "left";
	    RectangleEdge[RectangleEdge["right"] = 3] = "right";
	})(RectangleEdge = exports.RectangleEdge || (exports.RectangleEdge = {}));
	var SLIDE_ANIMATIONS = (_a = {},
	    _a[RectangleEdge.top] = 'slideUpIn20',
	    _a[RectangleEdge.bottom] = 'slideDownIn20',
	    _a[RectangleEdge.left] = 'slideLeftIn20',
	    _a[RectangleEdge.right] = 'slideRightIn20',
	    _a);
	var PositionData = (function () {
	    function PositionData(calloutDirection, targetDirection, calloutPercent, targetPercent, beakPercent, isAuto) {
	        this.calloutDirection = calloutDirection;
	        this.targetDirection = targetDirection;
	        this.calloutPercent = calloutPercent;
	        this.targetPercent = targetPercent;
	        this.beakPercent = beakPercent;
	        this.isAuto = isAuto;
	    }
	    return PositionData;
	}());
	exports.PositionData = PositionData;
	// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
	var DirectionalDictionary = (_b = {},
	    _b[DirectionalHint_1.DirectionalHint.topLeftEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.topCenter] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.topRightEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 100, 100, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.topAutoEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, true),
	    _b[DirectionalHint_1.DirectionalHint.bottomLeftEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.bottomCenter] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.bottomRightEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 100, 100, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.bottomAutoEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, true),
	    _b[DirectionalHint_1.DirectionalHint.leftTopEdge] = new PositionData(RectangleEdge.right, RectangleEdge.left, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.leftCenter] = new PositionData(RectangleEdge.right, RectangleEdge.left, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.leftBottomEdge] = new PositionData(RectangleEdge.right, RectangleEdge.left, 100, 100, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.rightTopEdge] = new PositionData(RectangleEdge.left, RectangleEdge.right, 0, 0, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.rightCenter] = new PositionData(RectangleEdge.left, RectangleEdge.right, 50, 50, 50, false),
	    _b[DirectionalHint_1.DirectionalHint.rightBottomEdge] = new PositionData(RectangleEdge.left, RectangleEdge.right, 100, 100, 50, false),
	    _b);
	var CoverDictionary = (_c = {},
	    _c[DirectionalHint_1.DirectionalHint.topLeftEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.topCenter] = new PositionData(RectangleEdge.top, RectangleEdge.top, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.topRightEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 100, 100, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.topAutoEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, true),
	    _c[DirectionalHint_1.DirectionalHint.bottomLeftEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.bottomCenter] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.bottomRightEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 100, 100, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.bottomAutoEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, true),
	    _c[DirectionalHint_1.DirectionalHint.leftTopEdge] = new PositionData(RectangleEdge.left, RectangleEdge.left, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.leftCenter] = new PositionData(RectangleEdge.left, RectangleEdge.left, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.leftBottomEdge] = new PositionData(RectangleEdge.left, RectangleEdge.left, 100, 100, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.rightTopEdge] = new PositionData(RectangleEdge.right, RectangleEdge.right, 0, 0, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.rightCenter] = new PositionData(RectangleEdge.right, RectangleEdge.right, 50, 50, 50, false),
	    _c[DirectionalHint_1.DirectionalHint.rightBottomEdge] = new PositionData(RectangleEdge.right, RectangleEdge.right, 100, 100, 50, false),
	    _c);
	var OppositeEdgeDictionary = (_d = {},
	    _d[RectangleEdge.top] = RectangleEdge.bottom,
	    _d[RectangleEdge.bottom] = RectangleEdge.top,
	    _d[RectangleEdge.right] = RectangleEdge.left,
	    _d[RectangleEdge.left] = RectangleEdge.right,
	    _d);
	function getRelativePositions(props, hostElement, calloutElement) {
	    var beakWidth = !props.isBeakVisible ? 0 : props.beakWidth;
	    var borderWidth = positioningFunctions._getBorderSize(calloutElement);
	    var gap = positioningFunctions._calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
	    var boundingRect = props.bounds ?
	        positioningFunctions._getRectangleFromIRect(props.bounds) :
	        new Rectangle_1.default(0, window.innerWidth - scroll_1.getScrollbarWidth(), 0, window.innerHeight);
	    var targetRect = props.target ? positioningFunctions._getTargetRect(boundingRect, props.target) : positioningFunctions._getTargetRectDEPRECATED(boundingRect, props.targetElement, props.creationEvent, props.targetPoint, props.useTargetPoint);
	    var positionData = positioningFunctions._getPositionData(props.directionalHint, targetRect, boundingRect, props.coverTarget);
	    var positionedCallout = positioningFunctions._positionCalloutWithinBounds(positioningFunctions._getRectangleFromHTMLElement(calloutElement), targetRect, boundingRect, positionData, gap, props.coverTarget);
	    var beakPositioned = positioningFunctions._positionBeak(beakWidth, positionedCallout, targetRect, borderWidth);
	    var finalizedCallout = positioningFunctions._finalizeCalloutPosition(positionedCallout.calloutRectangle, hostElement);
	    return {
	        calloutPosition: { top: finalizedCallout.top, left: finalizedCallout.left },
	        beakPosition: { top: beakPositioned.top, left: beakPositioned.left, display: 'block' },
	        directionalClassName: SLIDE_ANIMATIONS[positionedCallout.targetEdge],
	        submenuDirection: positionedCallout.calloutEdge === RectangleEdge.right ? DirectionalHint_1.DirectionalHint.leftBottomEdge : DirectionalHint_1.DirectionalHint.rightBottomEdge
	    };
	}
	exports.getRelativePositions = getRelativePositions;
	var positioningFunctions;
	(function (positioningFunctions) {
	    function _getTargetRect(bounds, target) {
	        var targetRectangle;
	        if (target.preventDefault) {
	            var ev = target;
	            targetRectangle = new Rectangle_1.default(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
	        }
	        else {
	            targetRectangle = _getRectangleFromHTMLElement(target);
	        }
	        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
	            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
	            for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
	                var direction = outOfBounds_1[_i];
	                targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
	            }
	        }
	        return targetRectangle;
	    }
	    positioningFunctions._getTargetRect = _getTargetRect;
	    function _getTargetRectDEPRECATED(bounds, targetElement, ev, targetPoint, isTargetPoint) {
	        var targetRectangle;
	        if (isTargetPoint) {
	            if (targetPoint) {
	                targetRectangle = new Rectangle_1.default(targetPoint.x, targetPoint.x, targetPoint.y, targetPoint.y);
	            }
	            else {
	                targetRectangle = new Rectangle_1.default(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
	            }
	        }
	        else {
	            if (!targetElement) {
	                if (ev && ev.target) {
	                    targetRectangle = _getRectangleFromHTMLElement(ev.target);
	                }
	                targetRectangle = new Rectangle_1.default();
	            }
	            else {
	                targetRectangle = _getRectangleFromHTMLElement(targetElement);
	            }
	        }
	        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
	            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
	            for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
	                var direction = outOfBounds_2[_i];
	                targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
	            }
	        }
	        return targetRectangle;
	    }
	    positioningFunctions._getTargetRectDEPRECATED = _getTargetRectDEPRECATED;
	    function _getRectangleFromHTMLElement(element) {
	        var clientRect = element.getBoundingClientRect();
	        return new Rectangle_1.default(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
	    }
	    positioningFunctions._getRectangleFromHTMLElement = _getRectangleFromHTMLElement;
	    function _positionCalloutWithinBounds(calloutRectangle, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget) {
	        if (gap === void 0) { gap = 0; }
	        var estimatedRectangle = _moveRectangleToAnchorRectangle(calloutRectangle, directionalInfo.calloutDirection, directionalInfo.calloutPercent, targetRectangle, directionalInfo.targetDirection, directionalInfo.targetPercent, gap);
	        if (_isRectangleWithinBounds(estimatedRectangle, boundingRectangle)) {
	            return { calloutRectangle: estimatedRectangle, calloutEdge: directionalInfo.calloutDirection, targetEdge: directionalInfo.targetDirection, alignPercent: directionalInfo.calloutPercent, beakPercent: directionalInfo.beakPercent };
	        }
	        else {
	            return _getBestRectangleFitWithinBounds(estimatedRectangle, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget);
	        }
	    }
	    positioningFunctions._positionCalloutWithinBounds = _positionCalloutWithinBounds;
	    function _getBestRectangleFitWithinBounds(estimatedPosition, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget) {
	        var callout = {
	            calloutRectangle: estimatedPosition,
	            calloutEdge: directionalInfo.calloutDirection,
	            targetEdge: directionalInfo.targetDirection,
	            alignPercent: directionalInfo.calloutPercent,
	            beakPercent: directionalInfo.beakPercent
	        };
	        // If it can't possibly fit within the bounds just put it into it's initial position.
	        if (!_canRectangleFitWithinBounds(estimatedPosition, boundingRectangle)) {
	            return callout;
	        }
	        if (!coverTarget) {
	            callout = _flipRectangleToFit(callout, targetRectangle, directionalInfo.targetPercent, boundingRectangle, gap);
	        }
	        var outOfBounds = _getOutOfBoundsEdges(callout.calloutRectangle, boundingRectangle);
	        for (var _i = 0, outOfBounds_3 = outOfBounds; _i < outOfBounds_3.length; _i++) {
	            var direction = outOfBounds_3[_i];
	            callout.calloutRectangle = _alignEdgeToCoordinate(callout.calloutRectangle, boundingRectangle[RectangleEdge[direction]], direction);
	            var adjustedPercent = _recalculateMatchingPercents(callout.calloutRectangle, callout.targetEdge, targetRectangle, callout.targetEdge, directionalInfo.targetPercent);
	            callout.alignPercent = adjustedPercent;
	        }
	        return callout;
	    }
	    positioningFunctions._getBestRectangleFitWithinBounds = _getBestRectangleFitWithinBounds;
	    function _positionBeak(beakWidth, callout, targetRectangle, border) {
	        var calloutRect = new Rectangle_1.default(0, callout.calloutRectangle.width - border * 2, 0, callout.calloutRectangle.height - border * 2);
	        var beakRectangle = new Rectangle_1.default(0, beakWidth, 0, beakWidth);
	        var recalculatedPercent = _recalculateMatchingPercents(callout.calloutRectangle, callout.calloutEdge, targetRectangle, callout.targetEdge, callout.beakPercent);
	        var estimatedTargetPoint = _getPointOnEdgeFromPercent(calloutRect, callout.calloutEdge, recalculatedPercent);
	        return _finalizeBeakPosition(beakRectangle, callout, estimatedTargetPoint, border);
	    }
	    positioningFunctions._positionBeak = _positionBeak;
	    function _finalizeBeakPosition(beakRectangle, callout, estimatedTargetPoint, border) {
	        var beakPixelSize = _calculateActualBeakWidthInPixels(beakRectangle.width) / 2;
	        var innerRect = null;
	        var beakPoint = { x: beakRectangle.width / 2, y: beakRectangle.width / 2 };
	        if (callout.calloutEdge === RectangleEdge.bottom || callout.calloutEdge === RectangleEdge.top) {
	            innerRect = new Rectangle_1.default(beakPixelSize, callout.calloutRectangle.width - beakPixelSize - border * 2, 0, callout.calloutRectangle.height - border * 2);
	        }
	        else {
	            innerRect = new Rectangle_1.default(0, callout.calloutRectangle.width - border * 2, beakPixelSize, callout.calloutRectangle.height - beakPixelSize - border * 2);
	        }
	        var finalPoint = _getClosestPointOnEdgeToPoint(innerRect, callout.calloutEdge, estimatedTargetPoint);
	        return _movePointOnRectangleToPoint(beakRectangle, beakPoint, finalPoint);
	    }
	    positioningFunctions._finalizeBeakPosition = _finalizeBeakPosition;
	    function _getRectangleFromIRect(rect) {
	        return new Rectangle_1.default(rect.left, rect.right, rect.top, rect.bottom);
	    }
	    positioningFunctions._getRectangleFromIRect = _getRectangleFromIRect;
	    function _finalizeCalloutPosition(calloutRectangle, hostElement) {
	        var hostRect = _getRectangleFromHTMLElement(hostElement);
	        var topPosition = calloutRectangle.top - hostRect.top;
	        var leftPosition = calloutRectangle.left - hostRect.left;
	        return new Rectangle_1.default(leftPosition, leftPosition + calloutRectangle.width, topPosition, topPosition + calloutRectangle.height);
	    }
	    positioningFunctions._finalizeCalloutPosition = _finalizeCalloutPosition;
	    /**
	     * Finds the percent on the recalculateRect that matches the percent on the target rect based on position.
	     */
	    function _recalculateMatchingPercents(recalculateRect, rectangleEdge, targetRect, targetEdge, targetPercent) {
	        var targetPoint = _getPointOnEdgeFromPercent(targetRect, targetEdge, targetPercent);
	        var adjustedPoint = _getClosestPointOnEdgeToPoint(recalculateRect, rectangleEdge, targetPoint);
	        var adjustedPercent = _getPercentOfEdgeFromPoint(recalculateRect, rectangleEdge, adjustedPoint);
	        if (adjustedPercent > 100) {
	            adjustedPercent = 100;
	        }
	        else if (adjustedPercent < 0) {
	            adjustedPercent = 0;
	        }
	        return adjustedPercent;
	    }
	    positioningFunctions._recalculateMatchingPercents = _recalculateMatchingPercents;
	    function _canRectangleFitWithinBounds(rect, boundingRect) {
	        if (rect.width > boundingRect.width || rect.height > boundingRect.height) {
	            return false;
	        }
	        return true;
	    }
	    positioningFunctions._canRectangleFitWithinBounds = _canRectangleFitWithinBounds;
	    function _isRectangleWithinBounds(rect, boundingRect) {
	        if (rect.top < boundingRect.top) {
	            return false;
	        }
	        if (rect.bottom > boundingRect.bottom) {
	            return false;
	        }
	        if (rect.left < boundingRect.left) {
	            return false;
	        }
	        if (rect.right > boundingRect.right) {
	            return false;
	        }
	        return true;
	    }
	    positioningFunctions._isRectangleWithinBounds = _isRectangleWithinBounds;
	    /**
	     * Gets all of the edges of a rectangle that are outside of the given bounds.
	     * If there are no out of bounds edges it returns an empty array.
	     */
	    function _getOutOfBoundsEdges(rect, boundingRect) {
	        var outOfBounds = new Array();
	        if (rect.top < boundingRect.top) {
	            outOfBounds.push(RectangleEdge.top);
	        }
	        if (rect.bottom > boundingRect.bottom) {
	            outOfBounds.push(RectangleEdge.bottom);
	        }
	        if (rect.left < boundingRect.left) {
	            outOfBounds.push(RectangleEdge.left);
	        }
	        if (rect.right > boundingRect.right) {
	            outOfBounds.push(RectangleEdge.right);
	        }
	        return outOfBounds;
	    }
	    positioningFunctions._getOutOfBoundsEdges = _getOutOfBoundsEdges;
	    /**
	     * Returns a point on a edge that is x% of the way down it.
	     */
	    function _getPointOnEdgeFromPercent(rect, direction, percentOfRect) {
	        var startPoint;
	        var endPoint;
	        switch (direction) {
	            case RectangleEdge.top:
	                startPoint = { x: rect.left, y: rect.top };
	                endPoint = { x: rect.right, y: rect.top };
	                break;
	            case RectangleEdge.left:
	                startPoint = { x: rect.left, y: rect.top };
	                endPoint = { x: rect.left, y: rect.bottom };
	                break;
	            case RectangleEdge.right:
	                startPoint = { x: rect.right, y: rect.top };
	                endPoint = { x: rect.right, y: rect.bottom };
	                break;
	            case RectangleEdge.bottom:
	                startPoint = { x: rect.left, y: rect.bottom };
	                endPoint = { x: rect.right, y: rect.bottom };
	                break;
	            default:
	                startPoint = { x: 0, y: 0 };
	                endPoint = { x: 0, y: 0 };
	                break;
	        }
	        return _calculatePointPercentAlongLine(startPoint, endPoint, percentOfRect);
	    }
	    positioningFunctions._getPointOnEdgeFromPercent = _getPointOnEdgeFromPercent;
	    /**
	     * Gets the percent down an edge that a point appears.
	     */
	    function _getPercentOfEdgeFromPoint(rect, direction, valueOnEdge) {
	        switch (direction) {
	            case RectangleEdge.top:
	            case RectangleEdge.bottom:
	                return rect.width !== 0 ? (valueOnEdge.x - rect.left) / rect.width * 100 : 100;
	            case RectangleEdge.left:
	            case RectangleEdge.right:
	                return rect.height !== 0 ? (valueOnEdge.y - rect.top) / rect.height * 100 : 100;
	        }
	    }
	    positioningFunctions._getPercentOfEdgeFromPoint = _getPercentOfEdgeFromPoint;
	    /**
	     * Percent is based on distance from left to right or up to down. 0% would be left most, 100% would be right most.
	     */
	    function _calculatePointPercentAlongLine(startPoint, endPoint, percent) {
	        var x = startPoint.x + ((endPoint.x - startPoint.x) * percent / 100);
	        var y = startPoint.y + ((endPoint.y - startPoint.y) * percent / 100);
	        return { x: x, y: y };
	    }
	    positioningFunctions._calculatePointPercentAlongLine = _calculatePointPercentAlongLine;
	    function _moveTopLeftOfRectangleToPoint(rect, destination) {
	        return new Rectangle_1.default(destination.x, destination.x + rect.width, destination.y, destination.y + rect.height);
	    }
	    positioningFunctions._moveTopLeftOfRectangleToPoint = _moveTopLeftOfRectangleToPoint;
	    /**
	     * Aligns the given edge to the target coordinate.
	     */
	    function _alignEdgeToCoordinate(rect, coordinate, direction) {
	        switch (direction) {
	            case RectangleEdge.top:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate });
	            case RectangleEdge.bottom:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate - rect.height });
	            case RectangleEdge.left:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate, y: rect.top });
	            case RectangleEdge.right:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate - rect.width, y: rect.top });
	        }
	        return new Rectangle_1.default();
	    }
	    positioningFunctions._alignEdgeToCoordinate = _alignEdgeToCoordinate;
	    /**
	     * Moves a point on a given rectangle to the target point. Does not change the rectangles orientation.
	     */
	    function _movePointOnRectangleToPoint(rect, rectanglePoint, targetPoint) {
	        var leftCornerXDifference = rectanglePoint.x - rect.left;
	        var leftCornerYDifference = rectanglePoint.y - rect.top;
	        return _moveTopLeftOfRectangleToPoint(rect, { x: targetPoint.x - leftCornerXDifference, y: targetPoint.y - leftCornerYDifference });
	    }
	    positioningFunctions._movePointOnRectangleToPoint = _movePointOnRectangleToPoint;
	    /**
	     * Moves the given rectangle a certain number of pixels in the given direction;
	     */
	    function _moveRectangleInDirection(rect, moveDistance, direction) {
	        var xModifier = 0;
	        var yModifier = 0;
	        switch (direction) {
	            case RectangleEdge.top:
	                yModifier = moveDistance * -1;
	                break;
	            case RectangleEdge.left:
	                xModifier = moveDistance * -1;
	                break;
	            case RectangleEdge.right:
	                xModifier = moveDistance;
	                break;
	            case RectangleEdge.bottom:
	                yModifier = moveDistance;
	                break;
	        }
	        return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left + xModifier, y: rect.top + yModifier });
	    }
	    positioningFunctions._moveRectangleInDirection = _moveRectangleInDirection;
	    /**
	     * Moves the given rectangle to an anchor rectangle.
	     */
	    function _moveRectangleToAnchorRectangle(rect, rectSide, rectPercent, anchorRect, anchorSide, anchorPercent, gap) {
	        if (gap === void 0) { gap = 0; }
	        var rectTargetPoint = _getPointOnEdgeFromPercent(rect, rectSide, rectPercent);
	        var anchorTargetPoint = _getPointOnEdgeFromPercent(anchorRect, anchorSide, anchorPercent);
	        var positionedRect = _movePointOnRectangleToPoint(rect, rectTargetPoint, anchorTargetPoint);
	        return _moveRectangleInDirection(positionedRect, gap, anchorSide);
	    }
	    positioningFunctions._moveRectangleToAnchorRectangle = _moveRectangleToAnchorRectangle;
	    /**
	     * Gets the closet point on an edge to the given point.
	     */
	    function _getClosestPointOnEdgeToPoint(rect, edge, point) {
	        switch (edge) {
	            case RectangleEdge.top:
	            case RectangleEdge.bottom:
	                var x = void 0;
	                if (point.x > rect.right) {
	                    x = rect.right;
	                }
	                else if (point.x < rect.left) {
	                    x = rect.left;
	                }
	                else {
	                    x = point.x;
	                }
	                return { x: x, y: rect[RectangleEdge[edge]] };
	            case RectangleEdge.left:
	            case RectangleEdge.right:
	                var y = void 0;
	                if (point.y > rect.bottom) {
	                    y = rect.bottom;
	                }
	                else if (point.y < rect.top) {
	                    y = rect.top;
	                }
	                else {
	                    y = point.y;
	                }
	                return { x: rect[RectangleEdge[edge]], y: y };
	        }
	    }
	    positioningFunctions._getClosestPointOnEdgeToPoint = _getClosestPointOnEdgeToPoint;
	    // Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
	    // We still want to position the beak based on it's midpoint which does not change. It will
	    // be at (beakwidth / 2, beakwidth / 2)
	    function _calculateActualBeakWidthInPixels(beakWidth) {
	        return Math.sqrt(beakWidth * beakWidth * 2);
	    }
	    positioningFunctions._calculateActualBeakWidthInPixels = _calculateActualBeakWidthInPixels;
	    function _getBorderSize(element) {
	        var styles = getComputedStyle(element, null);
	        var topBorder = parseFloat(styles.borderTopWidth);
	        var bottomBorder = parseFloat(styles.borderBottomWidth);
	        var leftBorder = parseFloat(styles.borderLeftWidth);
	        var rightBorder = parseFloat(styles.borderRightWidth);
	        // If any of the borders are NaN default to 0
	        if (isNaN(topBorder) || isNaN(bottomBorder) || isNaN(leftBorder) || isNaN(rightBorder)) {
	            return 0;
	        }
	        // If all of the borders are the same size, any value;
	        if (topBorder === bottomBorder && bottomBorder === leftBorder && leftBorder === rightBorder) {
	            return topBorder;
	        }
	        // If the borders do not agree, return 0
	        return 0;
	    }
	    positioningFunctions._getBorderSize = _getBorderSize;
	    function _getPositionData(direction, target, boundingRect, coverTarget) {
	        var directionalInfo = coverTarget ? CoverDictionary[direction] : DirectionalDictionary[direction];
	        if (directionalInfo.isAuto) {
	            var center = _getPointOnEdgeFromPercent(target, directionalInfo.targetDirection, 50);
	            if (center.x <= boundingRect.width / 2) {
	                directionalInfo.calloutPercent = 0;
	                directionalInfo.targetPercent = 0;
	            }
	            else {
	                directionalInfo.calloutPercent = 100;
	                directionalInfo.targetPercent = 100;
	            }
	        }
	        return directionalInfo;
	    }
	    positioningFunctions._getPositionData = _getPositionData;
	    function _flipRectangleToFit(callout, targetRect, targetPercent, boundingRect, gap) {
	        var directions = [RectangleEdge.left, RectangleEdge.right, RectangleEdge.top, RectangleEdge.bottom];
	        var currentEdge = callout.targetEdge;
	        // Make a copy to presever the original positioning.
	        var positionedCallout = object_1.assign({}, callout);
	        // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified callout.
	        for (var i = 0; i < 4; i++) {
	            var outOfBounds = _getOutOfBoundsEdges(positionedCallout.calloutRectangle, boundingRect);
	            var index = outOfBounds.indexOf(currentEdge);
	            var oppositeEdge = OppositeEdgeDictionary[currentEdge];
	            if (index > -1) {
	                directions.splice(directions.indexOf(currentEdge), 1);
	                currentEdge = directions.indexOf(oppositeEdge) > -1 ? oppositeEdge : directions.slice(-1)[0];
	                positionedCallout.calloutEdge = OppositeEdgeDictionary[currentEdge];
	                positionedCallout.targetEdge = currentEdge;
	                positionedCallout.calloutRectangle = _moveRectangleToAnchorRectangle(positionedCallout.calloutRectangle, positionedCallout.calloutEdge, positionedCallout.alignPercent, targetRect, positionedCallout.targetEdge, targetPercent, gap);
	            }
	            else {
	                return positionedCallout;
	            }
	        }
	        return callout;
	    }
	    positioningFunctions._flipRectangleToFit = _flipRectangleToFit;
	})(positioningFunctions = exports.positioningFunctions || (exports.positioningFunctions = {}));
	var _a, _b, _c, _d;



/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";
	var Rectangle = (function () {
	    function Rectangle(left, right, top, bottom) {
	        if (left === void 0) { left = 0; }
	        if (right === void 0) { right = 0; }
	        if (top === void 0) { top = 0; }
	        if (bottom === void 0) { bottom = 0; }
	        this.top = top;
	        this.bottom = bottom;
	        this.left = left;
	        this.right = right;
	    }
	    Object.defineProperty(Rectangle.prototype, "width", {
	        /**
	         * Calculated automatically by subtracting the right from left
	         */
	        get: function () {
	            return this.right - this.left;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "height", {
	        /**
	         * Calculated automatically by subtracting the bottom from top.
	         */
	        get: function () {
	            return this.bottom - this.top;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Rectangle;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Rectangle;



/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(57));
	


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Callout{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;box-shadow:0 0 15px -5px rgba(0,0,0,.4);position:absolute;border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";box-sizing:border-box}@media screen and (-ms-high-contrast:active){.ms-Callout{border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Callout{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Callout-container{position:relative}.ms-Callout-main{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";overflow-x:hidden;overflow-y:auto;position:relative}.ms-Callout-beak{position:absolute;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-shadow:inherit;border:inherit;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ms-Callout-beakCurtain{position:absolute;top:0;right:0;bottom:0;left:0;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-DatePicker{box-sizing:border-box;margin:0;padding:0;box-shadow:none;margin-bottom:17px}.ms-DatePicker .ms-TextField{position:relative}.ms-DatePicker .ms-TextField input::-ms-clear{display:none}.ms-DatePicker .ms-TextField input[readonly]{cursor:pointer}.ms-DatePicker-event--with-label{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:20px;line-height:20px;pointer-events:none;position:absolute;top:35px}html[dir=ltr] .ms-DatePicker-event--with-label{right:9px}html[dir=rtl] .ms-DatePicker-event--with-label{left:9px}.ms-DatePicker-event--without-label{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:20px;line-height:20px;pointer-events:none;position:absolute;top:7px}html[dir=ltr] .ms-DatePicker-event--without-label{right:9px}html[dir=rtl] .ms-DatePicker-event--without-label{left:9px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(96));
	


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(97));
	__export(__webpack_require__(98));
	


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Spinner_Props_1 = __webpack_require__(98);
	var css_1 = __webpack_require__(15);
	__webpack_require__(99);
	var Spinner = (function (_super) {
	    __extends(Spinner, _super);
	    function Spinner() {
	        return _super.apply(this, arguments) || this;
	    }
	    Spinner.prototype.render = function () {
	        var _a = this.props, type = _a.type, label = _a.label, className = _a.className;
	        return (React.createElement("div", { className: css_1.css('ms-Spinner', className) },
	            React.createElement("div", { className: css_1.css('ms-Spinner-circle', { 'ms-Spinner--normal': type === Spinner_Props_1.SpinnerType.normal }, { 'ms-Spinner--large': type === Spinner_Props_1.SpinnerType.large }) }),
	            label && (React.createElement("div", { className: 'ms-Spinner-label' }, label))));
	    };
	    return Spinner;
	}(React.Component));
	Spinner.defaultProps = {
	    type: Spinner_Props_1.SpinnerType.normal
	};
	exports.Spinner = Spinner;
	


/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict";
	var SpinnerType;
	(function (SpinnerType) {
	    SpinnerType[SpinnerType["normal"] = 0] = "normal";
	    SpinnerType[SpinnerType["large"] = 1] = "large";
	})(SpinnerType = exports.SpinnerType || (exports.SpinnerType = {}));
	


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": "@-webkit-keyframes ms-Spinner-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ms-Spinner-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ms-Spinner>.ms-Spinner-circle{margin:auto;box-sizing:border-box;border-radius:50%;width:100%;height:100%;border:1.5px solid " }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": ";border-top-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";-webkit-animation:ms-Spinner-spin 1.3s infinite cubic-bezier(.53,.21,.29,.67);animation:ms-Spinner-spin 1.3s infinite cubic-bezier(.53,.21,.29,.67)}.ms-Spinner>.ms-Spinner-circle.ms-Spinner--normal{width:20px;height:20px}.ms-Spinner>.ms-Spinner-circle.ms-Spinner--large{width:28px;height:28px}.ms-Spinner>.ms-Spinner-label{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";margin-top:10px;text-align:center}@media screen and (-ms-high-contrast:active){.ms-Spinner>.ms-Spinner-circle{border-top-style:none}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 100 */
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
	/* tslint:disable */
	var React = __webpack_require__(1);
	/* tslint:enable */
	var BasePicker_1 = __webpack_require__(101);
	var SelectedItemDefault_1 = __webpack_require__(112);
	var SuggestionItemDefault_1 = __webpack_require__(125);
	var SelectedItemWithMenu_1 = __webpack_require__(126);
	__webpack_require__(138);
	var BasePeoplePicker = (function (_super) {
	    __extends(BasePeoplePicker, _super);
	    function BasePeoplePicker() {
	        return _super.apply(this, arguments) || this;
	    }
	    return BasePeoplePicker;
	}(BasePicker_1.BasePicker));
	exports.BasePeoplePicker = BasePeoplePicker;
	var MemberListPeoplePicker = (function (_super) {
	    __extends(MemberListPeoplePicker, _super);
	    function MemberListPeoplePicker() {
	        return _super.apply(this, arguments) || this;
	    }
	    return MemberListPeoplePicker;
	}(BasePicker_1.BasePickerListBelow));
	exports.MemberListPeoplePicker = MemberListPeoplePicker;
	/**
	 * Standard People Picker.
	 */
	var NormalPeoplePicker = (function (_super) {
	    __extends(NormalPeoplePicker, _super);
	    function NormalPeoplePicker() {
	        return _super.apply(this, arguments) || this;
	    }
	    return NormalPeoplePicker;
	}(BasePeoplePicker));
	NormalPeoplePicker.defaultProps = {
	    onRenderItem: function (props) { return React.createElement(SelectedItemDefault_1.SelectedItemDefault, __assign({}, props)); },
	    onRenderSuggestionsItem: function (props) { return React.createElement(SuggestionItemDefault_1.SuggestionItemNormal, __assign({}, props)); }
	};
	exports.NormalPeoplePicker = NormalPeoplePicker;
	/**
	* Compact layout. It uses small personas when displaying search results.
	*/
	var CompactPeoplePicker = (function (_super) {
	    __extends(CompactPeoplePicker, _super);
	    function CompactPeoplePicker() {
	        return _super.apply(this, arguments) || this;
	    }
	    return CompactPeoplePicker;
	}(BasePeoplePicker));
	CompactPeoplePicker.defaultProps = {
	    onRenderItem: function (props) { return React.createElement(SelectedItemDefault_1.SelectedItemDefault, __assign({}, props)); },
	    onRenderSuggestionsItem: function (props) { return React.createElement(SuggestionItemDefault_1.SuggestionItemSmall, __assign({}, props)); }
	};
	exports.CompactPeoplePicker = CompactPeoplePicker;
	/**
	 * MemberList layout. The selected people show up below the search box.
	 */
	var ListPeoplePicker = (function (_super) {
	    __extends(ListPeoplePicker, _super);
	    function ListPeoplePicker() {
	        return _super.apply(this, arguments) || this;
	    }
	    return ListPeoplePicker;
	}(MemberListPeoplePicker));
	ListPeoplePicker.defaultProps = {
	    onRenderItem: function (props) { return React.createElement(SelectedItemWithMenu_1.SelectedItemWithMenu, __assign({}, props)); },
	    onRenderSuggestionsItem: function (props) { return React.createElement(SuggestionItemDefault_1.SuggestionItemNormal, __assign({}, props)); }
	};
	exports.ListPeoplePicker = ListPeoplePicker;
	


/***/ },
/* 101 */
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
	var FocusZone_1 = __webpack_require__(78);
	var Callout_1 = __webpack_require__(85);
	var index_1 = __webpack_require__(102);
	var Suggestions_1 = __webpack_require__(107);
	var SuggestionsController_1 = __webpack_require__(109);
	var BaseAutoFill_1 = __webpack_require__(110);
	var BaseComponent_1 = __webpack_require__(9);
	var Utilities_1 = __webpack_require__(8);
	__webpack_require__(111);
	var BasePicker = (function (_super) {
	    __extends(BasePicker, _super);
	    function BasePicker(basePickerProps) {
	        var _this = _super.call(this, basePickerProps) || this;
	        _this.SuggestionOfProperType = Suggestions_1.Suggestions;
	        var items = basePickerProps.defaultSelectedItems || [];
	        _this.suggestionStore = new SuggestionsController_1.SuggestionsController();
	        _this.selection = new index_1.Selection({ onSelectionChanged: function () { return _this.onSelectionChange(); } });
	        _this.selection.setItems(items);
	        _this.state = {
	            items: items,
	            suggestedDisplayValue: '',
	            moreSuggestionsAvailable: false
	        };
	        return _this;
	    }
	    Object.defineProperty(BasePicker.prototype, "items", {
	        get: function () {
	            return this.state.items;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BasePicker.prototype.componentWillReceiveProps = function (newProps, newState) {
	        if (newState.items && newState.items !== this.state.items) {
	            this.selection.setItems(newState.items);
	        }
	    };
	    BasePicker.prototype.componentDidMount = function () {
	        this.selection.setItems(this.state.items);
	    };
	    BasePicker.prototype.focus = function () {
	        this.focusZone.focus();
	    };
	    BasePicker.prototype.dismissSuggestions = function () {
	        this.setState({ suggestionsVisible: false });
	    };
	    BasePicker.prototype.completeSuggestion = function () {
	        if (this.suggestionStore.hasSelectedSuggestion()) {
	            this.addItem(this.suggestionStore.currentSuggestion.item);
	            this.updateValue('');
	            this.input.clear();
	        }
	    };
	    BasePicker.prototype.render = function () {
	        var suggestedDisplayValue = this.state.suggestedDisplayValue;
	        var _a = this.props, className = _a.className, inputProps = _a.inputProps;
	        return (React.createElement("div", { ref: this._resolveRef('root'), className: Utilities_1.css('ms-BasePicker', className ? className : ''), onKeyDown: this.onKeyDown },
	            React.createElement(index_1.SelectionZone, { selection: this.selection, selectionMode: index_1.SelectionMode.multiple },
	                React.createElement(FocusZone_1.FocusZone, { ref: this._resolveRef('focusZone'), className: 'ms-BasePicker-text' },
	                    this.renderItems(),
	                    React.createElement(BaseAutoFill_1.BaseAutoFill, __assign({}, inputProps, { className: 'ms-BasePicker-input', ref: this._resolveRef('input'), onFocus: this.onInputFocus, onInputValueChange: this.onInputChange, suggestedDisplayValue: suggestedDisplayValue, "aria-activedescendant": 'sug-' + this.suggestionStore.currentIndex, "aria-owns": 'suggestion-list', "aria-expanded": 'true', "aria-haspopup": 'true', autoCapitalize: 'off', autoComplete: 'off', role: 'combobox' })))),
	            this.renderSuggestions()));
	    };
	    BasePicker.prototype.renderSuggestions = function () {
	        var TypedSuggestion = this.SuggestionOfProperType;
	        return this.state.suggestionsVisible ? (React.createElement(Callout_1.Callout, { isBeakVisible: false, gapSpace: 0, targetElement: this.root, onDismiss: this.dismissSuggestions, directionalHint: Utilities_1.getRTL() ? Callout_1.DirectionalHint.bottomRightEdge : Callout_1.DirectionalHint.bottomLeftEdge },
	            React.createElement(TypedSuggestion, __assign({ onRenderSuggestion: this.props.onRenderSuggestionsItem, onSuggestionClick: this.onSuggestionClick, suggestions: this.suggestionStore.getSuggestions(), ref: this._resolveRef('suggestionElement'), onGetMoreResults: this.onGetMoreResults, moreSuggestionsAvailable: this.state.moreSuggestionsAvailable, isLoading: this.state.suggestionsLoading }, this.props.pickerSuggestionsProps)))) : (null);
	    };
	    BasePicker.prototype.renderItems = function () {
	        var _this = this;
	        var onRenderItem = this.props.onRenderItem;
	        var items = this.state.items;
	        return items.map(function (item, index) { return onRenderItem({
	            item: item,
	            index: index,
	            key: index + _this._getTextFromItem(item),
	            selected: _this.selection.isIndexSelected(index),
	            onRemoveItem: function () { return _this.removeItem(item); },
	            onItemChange: _this.onItemChange
	        }); });
	    };
	    BasePicker.prototype.resetFocus = function (index) {
	        var items = this.state.items;
	        if (items.length) {
	            var newEl = this.root.querySelectorAll('[data-selection-index]')[Math.min(index, items.length - 1)];
	            if (newEl) {
	                this.focusZone.focusElement(newEl);
	            }
	        }
	        else {
	            this.input.focus();
	        }
	    };
	    BasePicker.prototype.onSuggestionSelect = function () {
	        if (this.suggestionStore.currentSuggestion) {
	            var currentValue = this.input.value;
	            var itemValue = this._getTextFromItem(this.suggestionStore.currentSuggestion.item, currentValue);
	            this.setState({ suggestedDisplayValue: itemValue });
	        }
	    };
	    BasePicker.prototype.onSelectionChange = function () {
	        this.forceUpdate();
	    };
	    BasePicker.prototype.updateSuggestions = function (suggestions) {
	        this.suggestionStore.updateSuggestions(suggestions);
	        this.forceUpdate();
	    };
	    BasePicker.prototype.updateValue = function (updatedValue) {
	        var _this = this;
	        var suggestions = this.props.onResolveSuggestions(updatedValue, this.state.items);
	        var suggestionsArray = suggestions;
	        var suggestionsPromiseLike = suggestions;
	        // Check to see if the returned value is an array, if it is then just pass it into the next function.
	        // If the returned value is not an array then check to see if it's a promise or PromiseLike. If it is then resolve it asynchronously.
	        if (Array.isArray(suggestionsArray)) {
	            this.resolveNewValue(updatedValue, suggestionsArray);
	        }
	        else if (suggestionsPromiseLike.then) {
	            if (!this.loadingTimer) {
	                this.loadingTimer = this._async.setTimeout(function () { return _this.setState({
	                    suggestionsLoading: true
	                }); }, 500);
	            }
	            this.setState({
	                suggestionsVisible: this.input.value !== '' && this.input.inputElement === document.activeElement
	            });
	            // Ensure that the promise will only use the callback if it was the most recent one.
	            var promise_1 = this.currentPromise = suggestionsPromiseLike;
	            promise_1.then(function (newSuggestions) {
	                if (promise_1 === _this.currentPromise) {
	                    _this.resolveNewValue(updatedValue, newSuggestions);
	                    if (_this.loadingTimer) {
	                        _this._async.clearTimeout(_this.loadingTimer);
	                        _this.loadingTimer = undefined;
	                    }
	                }
	            });
	        }
	    };
	    BasePicker.prototype.resolveNewValue = function (updatedValue, suggestions) {
	        this.suggestionStore.updateSuggestions(suggestions);
	        var itemValue = undefined;
	        if (this.suggestionStore.currentSuggestion) {
	            itemValue = this._getTextFromItem(this.suggestionStore.currentSuggestion.item, updatedValue);
	        }
	        this.setState({
	            suggestionsLoading: false,
	            suggestedDisplayValue: itemValue,
	            suggestionsVisible: this.input.value !== '' && this.input.inputElement === document.activeElement
	        });
	    };
	    BasePicker.prototype.onChange = function () {
	        if (this.props.onChange) {
	            this.props.onChange(this.state.items);
	        }
	    };
	    BasePicker.prototype.onInputChange = function (value) {
	        this.updateValue(value);
	        this.setState({ moreSuggestionsAvailable: true });
	    };
	    BasePicker.prototype.onSuggestionClick = function (ev, item, index) {
	        this.addItemByIndex(index);
	    };
	    BasePicker.prototype.onInputFocus = function (ev) {
	        this.selection.setAllSelected(false);
	        if (this.input.value) {
	            this.setState({ suggestionsVisible: true });
	        }
	    };
	    BasePicker.prototype.onKeyDown = function (ev) {
	        var value = this.input.value;
	        switch (ev.which) {
	            case Utilities_1.KeyCodes.escape:
	                this.dismissSuggestions();
	                break;
	            case Utilities_1.KeyCodes.tab:
	            case Utilities_1.KeyCodes.enter:
	                if (value && this.suggestionStore.hasSelectedSuggestion()) {
	                    this.completeSuggestion();
	                    ev.preventDefault();
	                    ev.stopPropagation();
	                }
	                break;
	            case Utilities_1.KeyCodes.backspace:
	                this.onBackspace(ev);
	                break;
	            case Utilities_1.KeyCodes.up:
	                if (ev.target === this.input.inputElement && this.suggestionStore.previousSuggestion()) {
	                    ev.preventDefault();
	                    ev.stopPropagation();
	                    this.onSuggestionSelect();
	                }
	                break;
	            case Utilities_1.KeyCodes.down:
	                if (ev.target === this.input.inputElement) {
	                    if (this.suggestionStore.nextSuggestion()) {
	                        ev.preventDefault();
	                        ev.stopPropagation();
	                        this.onSuggestionSelect();
	                    }
	                }
	                break;
	        }
	    };
	    BasePicker.prototype.onItemChange = function (changedItem, index) {
	        var _this = this;
	        var items = this.state.items;
	        if (index >= 0) {
	            var newItems = items;
	            newItems[index] = changedItem;
	            this.setState({ items: newItems }, function () { return _this.onChange(); });
	        }
	    };
	    BasePicker.prototype.onGetMoreResults = function () {
	        var _this = this;
	        if (this.props.onGetMoreResults) {
	            var suggestions = this.props.onGetMoreResults(this.input.value, this.state.items);
	            var suggestionsArray = suggestions;
	            var suggestionsPromiseLike = suggestions;
	            if (Array.isArray(suggestionsArray)) {
	                this.updateSuggestions(suggestionsArray);
	            }
	            else if (suggestionsPromiseLike.then) {
	                suggestionsPromiseLike.then(function (newSuggestions) { return _this.updateSuggestions(newSuggestions); });
	            }
	        }
	        this.input.focus();
	        this.setState({ moreSuggestionsAvailable: false });
	    };
	    BasePicker.prototype.addItemByIndex = function (index) {
	        this.addItem(this.suggestionStore.getSuggestionAtIndex(index).item);
	        this.input.clear();
	        this.updateValue('');
	    };
	    BasePicker.prototype.addItem = function (item) {
	        var _this = this;
	        var newItems = this.state.items.concat([item]);
	        this.selection.setItems(newItems);
	        this.setState({ items: newItems }, function () { return _this.onChange(); });
	    };
	    BasePicker.prototype.removeItem = function (item) {
	        var _this = this;
	        var items = this.state.items;
	        var index = items.indexOf(item);
	        if (index >= 0) {
	            var newItems = items.slice(0, index).concat(items.slice(index + 1));
	            this.selection.setItems(newItems);
	            this.setState({ items: newItems }, function () { return _this.onChange(); });
	        }
	    };
	    BasePicker.prototype.removeItems = function (itemsToRemove) {
	        var _this = this;
	        var items = this.state.items;
	        var newItems = items.filter(function (item) { return itemsToRemove.indexOf(item) === -1; });
	        var firstItemToRemove = this.selection.getSelection()[0];
	        var index = items.indexOf(firstItemToRemove);
	        this.selection.setItems(newItems);
	        this.setState({ items: newItems }, function () { return _this.resetFocus(index); });
	    };
	    // This is protected because we may expect the backspace key to work differently in a different kind of picker.
	    // This lets the subclass override it and provide it's own onBackspace. For an example see the BasePickerListBelow
	    BasePicker.prototype.onBackspace = function (ev) {
	        if (this.state.items.length && !this.input.isValueSelected && this.input.cursorLocation === 0) {
	            this.removeItem(this.state.items[this.state.items.length - 1]);
	        }
	        else if (this.selection.getSelectedCount() > 0) {
	            this.removeItems(this.selection.getSelection());
	        }
	    };
	    BasePicker.prototype._getTextFromItem = function (item, currentValue) {
	        if (this.props.getTextFromItem) {
	            return this.props.getTextFromItem(item, currentValue);
	        }
	        else {
	            return '';
	        }
	    };
	    return BasePicker;
	}(BaseComponent_1.BaseComponent));
	__decorate([
	    Utilities_1.autobind
	], BasePicker.prototype, "dismissSuggestions", null);
	__decorate([
	    Utilities_1.autobind
	], BasePicker.prototype, "onInputChange", null);
	__decorate([
	    Utilities_1.autobind
	], BasePicker.prototype, "onSuggestionClick", null);
	__decorate([
	    Utilities_1.autobind
	], BasePicker.prototype, "onInputFocus", null);
	__decorate([
	    Utilities_1.autobind
	], BasePicker.prototype, "onKeyDown", null);
	__decorate([
	    Utilities_1.autobind
	], BasePicker.prototype, "onItemChange", null);
	__decorate([
	    Utilities_1.autobind
	], BasePicker.prototype, "onGetMoreResults", null);
	__decorate([
	    Utilities_1.autobind
	], BasePicker.prototype, "addItemByIndex", null);
	__decorate([
	    Utilities_1.autobind
	], BasePicker.prototype, "addItem", null);
	__decorate([
	    Utilities_1.autobind
	], BasePicker.prototype, "removeItem", null);
	__decorate([
	    Utilities_1.autobind
	], BasePicker.prototype, "removeItems", null);
	exports.BasePicker = BasePicker;
	var BasePickerListBelow = (function (_super) {
	    __extends(BasePickerListBelow, _super);
	    function BasePickerListBelow() {
	        return _super.apply(this, arguments) || this;
	    }
	    BasePickerListBelow.prototype.render = function () {
	        var suggestedDisplayValue = this.state.suggestedDisplayValue;
	        var _a = this.props, className = _a.className, inputProps = _a.inputProps;
	        return (React.createElement("div", null,
	            React.createElement("div", { ref: this._resolveRef('root'), className: Utilities_1.css('ms-BasePicker', className ? className : ''), onKeyDown: this.onKeyDown },
	                React.createElement(index_1.SelectionZone, { selection: this.selection, selectionMode: index_1.SelectionMode.multiple },
	                    React.createElement("div", { className: 'ms-BasePicker-text' },
	                        React.createElement(BaseAutoFill_1.BaseAutoFill, __assign({}, inputProps, { className: 'ms-BasePicker-input', ref: this._resolveRef('input'), onFocus: this.onInputFocus, onInputValueChange: this.onInputChange, suggestedDisplayValue: suggestedDisplayValue, "aria-activedescendant": 'sug-' + this.suggestionStore.currentIndex, "aria-owns": 'suggestion-list', "aria-expanded": 'true', "aria-haspopup": 'true', autoCapitalize: 'off', autoComplete: 'off', role: 'combobox' }))))),
	            this.renderSuggestions(),
	            React.createElement(FocusZone_1.FocusZone, { ref: this._resolveRef('focusZone'), className: 'ms-BasePicker-selectedItems' }, this.renderItems())));
	    };
	    BasePickerListBelow.prototype.onBackspace = function (ev) {
	        // override the existing backspace method to not do anything because the list items appear below.
	    };
	    return BasePickerListBelow;
	}(BasePicker));
	exports.BasePickerListBelow = BasePickerListBelow;
	


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(103));
	__export(__webpack_require__(104));
	__export(__webpack_require__(105));
	__export(__webpack_require__(106));
	


/***/ },
/* 103 */
/***/ function(module, exports) {

	"use strict";
	exports.SELECTION_CHANGE = 'change';
	var SelectionMode;
	(function (SelectionMode) {
	    SelectionMode[SelectionMode["none"] = 0] = "none";
	    SelectionMode[SelectionMode["single"] = 1] = "single";
	    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
	})(SelectionMode = exports.SelectionMode || (exports.SelectionMode = {}));
	var SelectionDirection;
	(function (SelectionDirection) {
	    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
	    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
	})(SelectionDirection = exports.SelectionDirection || (exports.SelectionDirection = {}));
	


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var interfaces_1 = __webpack_require__(103);
	var EventGroup_1 = __webpack_require__(11);
	var Selection = (function () {
	    function Selection(options) {
	        if (options === void 0) { options = {}; }
	        var onSelectionChanged = options.onSelectionChanged, getKey = options.getKey, _a = options.canSelectItem, canSelectItem = _a === void 0 ? function (item) { return true; } : _a;
	        this.getKey = getKey || (function (item, index) { return (item ? item.key : String(index)); });
	        this._changeEventSuppressionCount = 0;
	        this._exemptedCount = 0;
	        this._anchoredIndex = 0;
	        this._unselectableCount = 0;
	        this.setItems([], true);
	        this._onSelectionChanged = onSelectionChanged;
	        this.canSelectItem = canSelectItem;
	    }
	    Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
	        this._changeEventSuppressionCount += isEnabled ? -1 : 1;
	        if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
	            this._hasChanged = false;
	            if (!suppressChange) {
	                this._change();
	            }
	        }
	    };
	    /**
	     * Selection needs the items, call this method to set them. If the set
	     * of items is the same, this will re-evaluate selection and index maps.
	     * Otherwise, shouldClear should be set to true, so that selection is
	     * cleared.
	     */
	    Selection.prototype.setItems = function (items, shouldClear) {
	        if (shouldClear === void 0) { shouldClear = true; }
	        var newKeyToIndexMap = {};
	        var newUnselectableIndices = {};
	        var hasSelectionChanged = false;
	        this.setChangeEvents(false);
	        // Reset the unselectable count.
	        this._unselectableCount = 0;
	        // Build lookup table for quick selection evaluation.
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            if (item) {
	                newKeyToIndexMap[this.getKey(item, i)] = i;
	            }
	            newUnselectableIndices[i] = item && !this.canSelectItem(item);
	            if (newUnselectableIndices[i]) {
	                this._unselectableCount++;
	            }
	        }
	        if (shouldClear) {
	            this.setAllSelected(false);
	        }
	        // Check the exemption list for discrepencies.
	        var newExemptedIndicies = {};
	        for (var indexProperty in this._exemptedIndices) {
	            if (this._exemptedIndices.hasOwnProperty(indexProperty)) {
	                var index = Number(indexProperty);
	                var item = this._items[index];
	                var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
	                var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;
	                if (newIndex === undefined) {
	                    // We don't know the index of the item any more so it's either moved or removed.
	                    // In this case we reset the entire selection.
	                    this.setAllSelected(false);
	                    break;
	                }
	                else {
	                    // We know the new index of the item. update the existing exemption table.
	                    newExemptedIndicies[newIndex] = true;
	                    hasSelectionChanged = hasSelectionChanged || (newIndex !== index);
	                }
	            }
	        }
	        this._exemptedIndices = newExemptedIndicies;
	        this._keyToIndexMap = newKeyToIndexMap;
	        this._unselectableIndices = newUnselectableIndices;
	        this._items = items || [];
	        if (hasSelectionChanged) {
	            this._change();
	        }
	        this.setChangeEvents(true);
	    };
	    Selection.prototype.getItems = function () {
	        return this._items;
	    };
	    Selection.prototype.getSelection = function () {
	        if (!this._selectedItems) {
	            this._selectedItems = [];
	            for (var i = 0; i < this._items.length; i++) {
	                if (this.isIndexSelected(i)) {
	                    this._selectedItems.push(this._items[i]);
	                }
	            }
	        }
	        return this._selectedItems;
	    };
	    Selection.prototype.getSelectedCount = function () {
	        return this._isAllSelected ? (this._items.length - this._exemptedCount - this._unselectableCount) : (this._exemptedCount);
	    };
	    Selection.prototype.isRangeSelected = function (fromIndex, count) {
	        var endIndex = fromIndex + count;
	        for (var i = fromIndex; i < endIndex; i++) {
	            if (!this.isIndexSelected(i)) {
	                return false;
	            }
	        }
	        return true;
	    };
	    Selection.prototype.isAllSelected = function () {
	        var selectableCount = this._items.length - this._unselectableCount;
	        return ((this.count > 0) &&
	            (this._isAllSelected && this._exemptedCount === 0) ||
	            (!this._isAllSelected && (this._exemptedCount === selectableCount) && selectableCount > 0));
	    };
	    Selection.prototype.isKeySelected = function (key) {
	        var index = this._keyToIndexMap[key];
	        return this.isIndexSelected(index);
	    };
	    Selection.prototype.isIndexSelected = function (index) {
	        return !!((this.count > 0) &&
	            (this._isAllSelected && !this._exemptedIndices[index] && !this._unselectableIndices[index]) ||
	            (!this._isAllSelected && this._exemptedIndices[index]));
	    };
	    Selection.prototype.setAllSelected = function (isAllSelected) {
	        var selectableCount = this._items ? (this._items.length - this._unselectableCount) : 0;
	        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
	            this._exemptedIndices = {};
	            this._exemptedCount = 0;
	            this._isAllSelected = isAllSelected;
	            this._updateCount();
	        }
	    };
	    Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
	        var index = this._keyToIndexMap[key];
	        if (index >= 0) {
	            this.setIndexSelected(index, isSelected, shouldAnchor);
	        }
	    };
	    Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
	        // Clamp the index.
	        index = Math.min(Math.max(0, index), this._items.length - 1);
	        // No-op on out of bounds selections.
	        if (index < 0 || index >= this._items.length) {
	            return;
	        }
	        var isExempt = this._exemptedIndices[index];
	        var hasChanged = false;
	        var canSelect = !this._unselectableIndices[index];
	        if (canSelect) {
	            // Determine if we need to remove the exemption.
	            if (isExempt && ((isSelected && this._isAllSelected) ||
	                (!isSelected && !this._isAllSelected))) {
	                hasChanged = true;
	                delete this._exemptedIndices[index];
	                this._exemptedCount--;
	            }
	            // Determine if we need to add the exemption.
	            if (!isExempt && ((isSelected && !this._isAllSelected) ||
	                (!isSelected && this._isAllSelected))) {
	                hasChanged = true;
	                this._exemptedIndices[index] = true;
	                this._exemptedCount++;
	            }
	            if (shouldAnchor) {
	                this._anchoredIndex = index;
	            }
	        }
	        if (hasChanged) {
	            this._updateCount();
	        }
	    };
	    Selection.prototype.selectToKey = function (key, clearSelection) {
	        this.selectToIndex(this._keyToIndexMap[key], clearSelection);
	    };
	    Selection.prototype.selectToIndex = function (index, clearSelection) {
	        var anchorIndex = this._anchoredIndex || 0;
	        var startIndex = Math.min(index, anchorIndex);
	        var endIndex = Math.max(index, anchorIndex);
	        this.setChangeEvents(false);
	        if (clearSelection) {
	            this.setAllSelected(false);
	        }
	        for (; startIndex <= endIndex; startIndex++) {
	            this.setIndexSelected(startIndex, true, false);
	        }
	        this.setChangeEvents(true);
	    };
	    Selection.prototype.toggleAllSelected = function () {
	        this.setAllSelected(!this.isAllSelected());
	    };
	    Selection.prototype.toggleKeySelected = function (key) {
	        this.setKeySelected(key, !this.isKeySelected(key), true);
	    };
	    Selection.prototype.toggleIndexSelected = function (index) {
	        this.setIndexSelected(index, !this.isIndexSelected(index), true);
	    };
	    Selection.prototype.toggleRangeSelected = function (fromIndex, count) {
	        var isRangeSelected = this.isRangeSelected(fromIndex, count);
	        var endIndex = fromIndex + count;
	        this.setChangeEvents(false);
	        for (var i = fromIndex; i < endIndex; i++) {
	            this.setIndexSelected(i, !isRangeSelected, false);
	        }
	        this.setChangeEvents(true);
	    };
	    Selection.prototype._updateCount = function () {
	        this.count = this.getSelectedCount();
	        this._change();
	    };
	    Selection.prototype._change = function () {
	        if (this._changeEventSuppressionCount === 0) {
	            this._selectedItems = null;
	            EventGroup_1.EventGroup.raise(this, interfaces_1.SELECTION_CHANGE);
	            if (this._onSelectionChanged) {
	                this._onSelectionChanged();
	            }
	        }
	        else {
	            this._hasChanged = true;
	        }
	    };
	    return Selection;
	}());
	exports.Selection = Selection;
	


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var interfaces_1 = __webpack_require__(103);
	var SelectionLayout = (function () {
	    function SelectionLayout(direction) {
	        this._direction = direction;
	    }
	    SelectionLayout.prototype.getItemIndexAbove = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? Math.max(0, focusIndex - 1) : focusIndex;
	    };
	    SelectionLayout.prototype.getItemIndexBelow = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? Math.min(items.length - 1, focusIndex + 1) : focusIndex;
	    };
	    SelectionLayout.prototype.getItemIndexLeft = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? focusIndex : Math.max(0, focusIndex - 1);
	    };
	    SelectionLayout.prototype.getItemIndexRight = function (focusIndex, items) {
	        return (this._direction === interfaces_1.SelectionDirection.vertical) ? focusIndex : Math.min(items.length - 1, focusIndex + 1);
	    };
	    return SelectionLayout;
	}());
	exports.SelectionLayout = SelectionLayout;
	


/***/ },
/* 106 */
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
	var Utilities_1 = __webpack_require__(8);
	var SelectionLayout_1 = __webpack_require__(105);
	var interfaces_1 = __webpack_require__(103);
	var focus_1 = __webpack_require__(41);
	// Selection definitions:
	//
	// Anchor index: the point from which a range selection starts.
	// Focus index: the point from which layout movement originates from.
	//
	// These two can differ. Tests:
	//
	// If you start at index 5
	// Shift click to index 10
	//    The focus is 10, the anchor is 5.
	// If you shift click at index 0
	//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
	// If you click index 8
	//    The anchor and focus are set to 8.
	var SELECTION_DISABLED_ATTRIBUTE_NAME = 'data-selection-disabled';
	var SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
	var SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
	var SELECTION_INVOKE_ATTRIBUTE_NAME = 'data-selection-invoke';
	var SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
	var SelectionZone = (function (_super) {
	    __extends(SelectionZone, _super);
	    function SelectionZone() {
	        return _super.apply(this, arguments) || this;
	    }
	    SelectionZone.prototype.componentDidMount = function () {
	        var win = Utilities_1.getWindow(this.refs.root);
	        // Track the latest modifier keys globally.
	        this._events.on(win, 'keydown keyup', this._updateModifiers);
	        this._events.on(win, 'click', this._tryClearOnEmptyClick);
	    };
	    SelectionZone.prototype.render = function () {
	        return (React.createElement("div", __assign({ className: 'ms-SelectionZone', ref: 'root', onKeyDown: this._onKeyDown, onMouseDown: this._onMouseDown, onClick: this._onClick, onDoubleClick: this._onDoubleClick }, {
	            onMouseDownCapture: this.ignoreNextFocus,
	            onFocusCapture: this._onFocus
	        }), this.props.children));
	    };
	    /**
	     * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
	     * react to the event. Note that focus events in IE <= 11 will occur asynchronously after .focus() has
	     * been called on an element, so we need a flag to store the idea that we will bypass the "next"
	     * focus event that occurs. This method does that.
	     */
	    SelectionZone.prototype.ignoreNextFocus = function () {
	        this._shouldIgnoreFocus = true;
	    };
	    /**
	     * When we focus an item, for single/multi select scenarios, we should try to select it immediately
	     * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
	     * specially.
	     */
	    SelectionZone.prototype._onFocus = function (ev) {
	        var target = ev.target;
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode;
	        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
	        if (this._shouldIgnoreFocus || selectionMode === interfaces_1.SelectionMode.none) {
	            this._shouldIgnoreFocus = false;
	            return;
	        }
	        var isToggle = this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);
	        var itemRoot = this._findItemRoot(target);
	        if (!isToggle && itemRoot) {
	            var index = this._getItemIndex(itemRoot);
	            if (isToggleModifierPressed) {
	                // set anchor only.
	                selection.setIndexSelected(index, selection.isIndexSelected(index), true);
	            }
	            else {
	                this._onItemSurfaceClick(ev, index);
	            }
	        }
	    };
	    SelectionZone.prototype._onMouseDown = function (ev) {
	        this._updateModifiers(ev);
	        var target = ev.target;
	        var itemRoot = this._findItemRoot(target);
	        while (target !== this.refs.root) {
	            if (this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
	                break;
	            }
	            else if (itemRoot) {
	                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
	                    break;
	                }
	                else if (this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
	                    this._onInvokeMouseDown(ev, this._getItemIndex(itemRoot));
	                    break;
	                }
	                else if (target === itemRoot) {
	                    break;
	                }
	            }
	            target = Utilities_1.getParent(target);
	        }
	    };
	    SelectionZone.prototype._onClick = function (ev) {
	        this._updateModifiers(ev);
	        var target = ev.target;
	        var itemRoot = this._findItemRoot(target);
	        // No-op if selection is disabled
	        if (this._isSelectionDisabled(target)) {
	            return;
	        }
	        while (target !== this.refs.root) {
	            if (this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
	                this._onToggleAllClick(ev);
	                break;
	            }
	            else if (itemRoot) {
	                var index = this._getItemIndex(itemRoot);
	                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
	                    if (this._isShiftPressed) {
	                        this._onItemSurfaceClick(ev, index);
	                    }
	                    else {
	                        this._onToggleClick(ev, index);
	                    }
	                    break;
	                }
	                else if (this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
	                    this._onInvokeClick(ev, index);
	                    break;
	                }
	                else if (target === itemRoot) {
	                    this._onItemSurfaceClick(ev, index);
	                    break;
	                }
	            }
	            target = Utilities_1.getParent(target);
	        }
	    };
	    SelectionZone.prototype._isSelectionDisabled = function (target) {
	        while (target !== this.refs.root) {
	            if (this._hasAttribute(target, SELECTION_DISABLED_ATTRIBUTE_NAME)) {
	                return true;
	            }
	            target = Utilities_1.getParent(target);
	        }
	        return false;
	    };
	    /**
	     * In multi selection, if you double click within an item's root (but not within the invoke element or input elements),
	     * we should execute the invoke handler.
	     */
	    SelectionZone.prototype._onDoubleClick = function (ev) {
	        var target = ev.target;
	        if (this._isSelectionDisabled(target)) {
	            return;
	        }
	        var _a = this.props, selectionMode = _a.selectionMode, onItemInvoked = _a.onItemInvoked;
	        var itemRoot = this._findItemRoot(target);
	        if (itemRoot && onItemInvoked && selectionMode !== interfaces_1.SelectionMode.none && !this._isInputElement(target)) {
	            var index = this._getItemIndex(itemRoot);
	            while (target !== this.refs.root) {
	                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) ||
	                    this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
	                    break;
	                }
	                else if (target === itemRoot) {
	                    this._onInvokeClick(ev, index);
	                    break;
	                }
	                target = Utilities_1.getParent(target);
	            }
	            target = Utilities_1.getParent(target);
	        }
	    };
	    SelectionZone.prototype._onKeyDown = function (ev) {
	        this._updateModifiers(ev);
	        var target = ev.target;
	        if (this._isSelectionDisabled(target)) {
	            return;
	        }
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode;
	        var isSelectAllKey = ev.which === Utilities_1.KeyCodes.a && (this._isCtrlPressed || this._isMetaPressed);
	        var isClearSelectionKey = ev.which === Utilities_1.KeyCodes.escape;
	        // Ignore key downs from input elements.
	        if (this._isInputElement(target)) {
	            return;
	        }
	        // If ctrl-a is pressed, select all (if all are not already selected.)
	        if (isSelectAllKey && selectionMode === interfaces_1.SelectionMode.multiple && !selection.isAllSelected()) {
	            selection.setAllSelected(true);
	            ev.stopPropagation();
	            ev.preventDefault();
	            return;
	        }
	        // If escape is pressed, clear selection (if any are selected.)
	        if (isClearSelectionKey && selection.getSelectedCount() > 0) {
	            selection.setAllSelected(false);
	            ev.stopPropagation();
	            ev.preventDefault();
	            return;
	        }
	        var itemRoot = this._findItemRoot(target);
	        // If a key was pressed within an item, we should treat "enters" as invokes and "space" as toggle
	        if (itemRoot) {
	            var index = this._getItemIndex(itemRoot);
	            while (target !== this.refs.root) {
	                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
	                    // For toggle elements, assuming they are rendered as buttons, they will generate a click event,
	                    // so we can no-op for any keydowns in this case.
	                    break;
	                }
	                else if (target === itemRoot) {
	                    if (ev.which === Utilities_1.KeyCodes.enter) {
	                        this._onInvokeClick(ev, index);
	                    }
	                    else if (ev.which === Utilities_1.KeyCodes.space) {
	                        this._onToggleClick(ev, index);
	                    }
	                    break;
	                }
	                target = Utilities_1.getParent(target);
	            }
	        }
	    };
	    SelectionZone.prototype._onToggleAllClick = function (ev) {
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode;
	        if (selectionMode === interfaces_1.SelectionMode.multiple) {
	            selection.toggleAllSelected();
	            ev.stopPropagation();
	            ev.preventDefault();
	        }
	    };
	    SelectionZone.prototype._onToggleClick = function (ev, index) {
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode;
	        if (selectionMode === interfaces_1.SelectionMode.multiple) {
	            selection.toggleIndexSelected(index);
	        }
	        else if (selectionMode === interfaces_1.SelectionMode.single) {
	            var isSelected = selection.isIndexSelected(index);
	            selection.setChangeEvents(false);
	            selection.setAllSelected(false);
	            selection.setIndexSelected(index, !isSelected, true);
	            selection.setChangeEvents(true);
	        }
	        else {
	            return;
	        }
	        ev.stopPropagation();
	        // NOTE: ev.preventDefault is not called for toggle clicks, because this will kill the browser behavior
	        // for checkboxes if you use a checkbox for the toggle.
	    };
	    SelectionZone.prototype._onInvokeClick = function (ev, index) {
	        var _a = this.props, selection = _a.selection, onItemInvoked = _a.onItemInvoked;
	        if (onItemInvoked) {
	            onItemInvoked(selection.getItems()[index], index, ev.nativeEvent);
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    };
	    SelectionZone.prototype._onItemSurfaceClick = function (ev, index) {
	        var _a = this.props, selection = _a.selection, selectionMode = _a.selectionMode;
	        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
	        if (selectionMode === interfaces_1.SelectionMode.multiple) {
	            if (this._isShiftPressed) {
	                selection.selectToIndex(index, !isToggleModifierPressed);
	            }
	            else if (isToggleModifierPressed) {
	                selection.toggleIndexSelected(index);
	            }
	            else {
	                this._clearAndSelectIndex(index);
	            }
	        }
	        else if (selectionMode === interfaces_1.SelectionMode.single) {
	            this._clearAndSelectIndex(index);
	        }
	    };
	    SelectionZone.prototype._onInvokeMouseDown = function (ev, index) {
	        var selection = this.props.selection;
	        // Only do work if item is not selected.
	        if (selection.isIndexSelected(index)) {
	            return;
	        }
	        this._clearAndSelectIndex(index);
	    };
	    SelectionZone.prototype._tryClearOnEmptyClick = function (ev) {
	        if (this._isNonHandledClick(ev.target)) {
	            this.props.selection.setAllSelected(false);
	        }
	    };
	    SelectionZone.prototype._clearAndSelectIndex = function (index) {
	        var selection = this.props.selection;
	        var isAlreadySingleSelected = selection.getSelectedCount() === 1 && selection.isIndexSelected(index);
	        if (!isAlreadySingleSelected) {
	            selection.setChangeEvents(false);
	            selection.setAllSelected(false);
	            selection.setIndexSelected(index, true, true);
	            selection.setChangeEvents(true);
	        }
	    };
	    /**
	     * We need to track the modifier key states so that when focus events occur, which do not contain
	     * modifier states in the Event object, we know how to behave.
	     */
	    SelectionZone.prototype._updateModifiers = function (ev) {
	        this._isShiftPressed = ev.shiftKey;
	        this._isCtrlPressed = ev.ctrlKey;
	        this._isMetaPressed = ev.metaKey;
	    };
	    SelectionZone.prototype._findItemRoot = function (target) {
	        var selection = this.props.selection;
	        while (target !== this.refs.root) {
	            var indexValue = target.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
	            var index = Number(indexValue);
	            if (indexValue !== null && index >= 0 && index < selection.getItems().length) {
	                break;
	            }
	            target = Utilities_1.getParent(target);
	        }
	        if (target === this.refs.root) {
	            return undefined;
	        }
	        return target;
	    };
	    SelectionZone.prototype._getItemIndex = function (itemRoot) {
	        return Number(itemRoot.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME));
	    };
	    SelectionZone.prototype._hasAttribute = function (element, attributeName) {
	        var isToggle = false;
	        while (!isToggle && element !== this.refs.root) {
	            isToggle = element.getAttribute(attributeName) === 'true';
	            element = Utilities_1.getParent(element);
	        }
	        return isToggle;
	    };
	    SelectionZone.prototype._isInputElement = function (element) {
	        return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
	    };
	    SelectionZone.prototype._isNonHandledClick = function (element) {
	        var doc = Utilities_1.getDocument();
	        if (doc && element) {
	            while (element && element !== doc.documentElement) {
	                if (focus_1.isElementTabbable(element)) {
	                    return false;
	                }
	                element = Utilities_1.getParent(element);
	            }
	        }
	        return true;
	    };
	    return SelectionZone;
	}(Utilities_1.BaseComponent));
	SelectionZone.defaultProps = {
	    layout: new SelectionLayout_1.SelectionLayout(interfaces_1.SelectionDirection.vertical),
	    isMultiSelectEnabled: true,
	    isSelectedOnFocus: true,
	    selectionMode: interfaces_1.SelectionMode.multiple
	};
	__decorate([
	    Utilities_1.autobind
	], SelectionZone.prototype, "ignoreNextFocus", null);
	__decorate([
	    Utilities_1.autobind
	], SelectionZone.prototype, "_onFocus", null);
	__decorate([
	    Utilities_1.autobind
	], SelectionZone.prototype, "_onMouseDown", null);
	__decorate([
	    Utilities_1.autobind
	], SelectionZone.prototype, "_onClick", null);
	__decorate([
	    Utilities_1.autobind
	], SelectionZone.prototype, "_onDoubleClick", null);
	__decorate([
	    Utilities_1.autobind
	], SelectionZone.prototype, "_onKeyDown", null);
	exports.SelectionZone = SelectionZone;
	


/***/ },
/* 107 */
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
	var Button_1 = __webpack_require__(26);
	var css_1 = __webpack_require__(15);
	var BaseComponent_1 = __webpack_require__(9);
	var Spinner_1 = __webpack_require__(95);
	__webpack_require__(108);
	var SuggestionsItem = (function (_super) {
	    __extends(SuggestionsItem, _super);
	    function SuggestionsItem() {
	        return _super.apply(this, arguments) || this;
	    }
	    SuggestionsItem.prototype.render = function () {
	        var _a = this.props, suggestionModel = _a.suggestionModel, RenderSuggestion = _a.RenderSuggestion, onClick = _a.onClick, className = _a.className;
	        return (React.createElement(Button_1.Button, { onClick: onClick, className: css_1.css('ms-Suggestions-item', { 'is-suggested': suggestionModel.selected }, className) },
	            React.createElement(RenderSuggestion, __assign({}, suggestionModel.item))));
	    };
	    return SuggestionsItem;
	}(React.Component));
	exports.SuggestionsItem = SuggestionsItem;
	var Suggestions = (function (_super) {
	    __extends(Suggestions, _super);
	    function Suggestions(suggestionsProps) {
	        var _this = _super.call(this, suggestionsProps) || this;
	        _this.SuggestionsItemOfProperType = SuggestionsItem;
	        _this._getMoreResults = _this._getMoreResults.bind(_this);
	        return _this;
	    }
	    Suggestions.prototype.componentDidUpdate = function () {
	        this.scrollSelected();
	    };
	    Suggestions.prototype.render = function () {
	        var _a = this.props, suggestionsHeaderText = _a.suggestionsHeaderText, searchForMoreText = _a.searchForMoreText, className = _a.className, moreSuggestionsAvailable = _a.moreSuggestionsAvailable, noResultsFoundText = _a.noResultsFoundText, suggestions = _a.suggestions, isLoading = _a.isLoading, loadingText = _a.loadingText, onRenderNoResultFound = _a.onRenderNoResultFound;
	        var noResults = noResultsFoundText ? function () { return React.createElement("div", { className: 'ms-Suggestions-none' }, noResultsFoundText); } : null;
	        return (React.createElement("div", { className: css_1.css('ms-Suggestions', className ? className : '') },
	            suggestionsHeaderText ?
	                (React.createElement("div", { className: 'ms-Suggestions-title' }, suggestionsHeaderText)) : (null),
	            isLoading && (React.createElement(Spinner_1.Spinner, { className: 'ms-Suggestions-spinner', label: loadingText })),
	            (!suggestions || !suggestions.length) && !isLoading ?
	                (onRenderNoResultFound ? onRenderNoResultFound(null, noResults) : noResults()) :
	                this._renderSuggestions(),
	            searchForMoreText && moreSuggestionsAvailable ?
	                (React.createElement(Button_1.Button, { onClick: this._getMoreResults.bind(this), className: 'ms-SearchMore-button', buttonType: Button_1.ButtonType.icon, icon: 'Search', ref: this._resolveRef('_searchForMoreButton') }, searchForMoreText)) : (null)));
	    };
	    Suggestions.prototype.focusSearchForMoreButton = function () {
	        if (this._searchForMoreButton) {
	            this._searchForMoreButton.focus();
	        }
	    };
	    // TODO get the element to scroll into view properly regardless of direction.
	    Suggestions.prototype.scrollSelected = function () {
	        if (this._selectedElement) {
	            this._selectedElement.scrollIntoView(false);
	        }
	    };
	    Suggestions.prototype._renderSuggestions = function () {
	        var _this = this;
	        var _a = this.props, suggestions = _a.suggestions, onRenderSuggestion = _a.onRenderSuggestion, suggestionsItemClassName = _a.suggestionsItemClassName;
	        var TypedSuggestionsItem = this.SuggestionsItemOfProperType;
	        return (React.createElement("div", { className: 'ms-Suggestions-container', id: 'suggestion-list', role: 'menu' }, suggestions.map(function (suggestion, index) {
	            return React.createElement("div", { ref: _this._resolveRef(suggestion.selected ? '_selectedElement' : ''), key: index, id: 'sug-' + index, role: 'menuitem' },
	                React.createElement(TypedSuggestionsItem, { suggestionModel: suggestion, RenderSuggestion: onRenderSuggestion, onClick: function (ev) { return _this.props.onSuggestionClick(ev, suggestion.item, index); }, className: suggestionsItemClassName }));
	        })));
	    };
	    Suggestions.prototype._getMoreResults = function () {
	        if (this.props.onGetMoreResults) {
	            this.props.onGetMoreResults();
	        }
	    };
	    return Suggestions;
	}(BaseComponent_1.BaseComponent));
	exports.Suggestions = Suggestions;
	


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-SearchMore-button{background:0 0;border:0;cursor:pointer;height:auto;text-align:center;margin:0;width:100%}.ms-SearchMore-button:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";cursor:pointer}.ms-SearchMore-button:active,.ms-SearchMore-button:focus{background-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.ms-Suggestions{min-width:180px}.ms-Suggestions .ms-Suggestions-item{height:auto;width:100%;border:none}html[dir=ltr] .ms-Suggestions .ms-Suggestions-item{text-align:left}html[dir=rtl] .ms-Suggestions .ms-Suggestions-item{text-align:right}.ms-Suggestions .ms-Suggestions-item:hover{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Suggestions .ms-Suggestions-item.is-suggested{background:" }, { "theme": "neutralQuaternary", "defaultValue": "#d0d0d0" }, { "rawString": "}.ms-Suggestions .ms-Suggestions-item.is-suggested:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}.ms-Suggestions .ms-Suggestions-title{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";font-size:12px;text-align:center;text-transform:uppercase;line-height:40px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Suggestions .ms-Suggestions-container{overflow-y:auto;overflow-x:hidden;max-height:300px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-Suggestions .ms-Suggestions-none{text-align:center;color:" }, { "theme": "info", "defaultValue": "#767676" }, { "rawString": ";font-size:12px;line-height:30px}.ms-Suggestions-spinner{margin:5px;text-align:center;white-space:nowrap;line-height:20px}.ms-Suggestions-spinner .ms-Spinner-circle{display:inline-block;vertical-align:middle}.ms-Suggestions-spinner .ms-Spinner-label{display:inline-block;margin:0 10px;vertical-align:middle}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";
	var SuggestionsController = (function () {
	    function SuggestionsController() {
	        this.suggestions = [];
	        this.currentIndex = -1;
	    }
	    SuggestionsController.prototype.updateSuggestions = function (newSuggestions) {
	        if (newSuggestions && newSuggestions.length > 0) {
	            this.suggestions = this._convertSuggestionsToSuggestionItems(newSuggestions);
	            this.currentIndex = 0;
	            this.suggestions[0].selected = true;
	            this.currentSuggestion = this.suggestions[0];
	        }
	        else {
	            this.suggestions = [];
	            this.currentIndex = -1;
	            this.currentSuggestion = undefined;
	        }
	    };
	    /**
	     * Increments the suggestion index and gets the next suggestion in the list.
	     */
	    SuggestionsController.prototype.nextSuggestion = function () {
	        if (this.suggestions && this.suggestions.length) {
	            if (this.currentIndex < (this.suggestions.length - 1)) {
	                this._setSelectedSuggestion(this.currentIndex + 1);
	                return true;
	            }
	            else if (this.currentIndex === (this.suggestions.length - 1)) {
	                this._setSelectedSuggestion(0);
	                return true;
	            }
	        }
	        return false;
	    };
	    /**
	     * Decrements the suggestion index and gets the previous suggestion in the list.
	     */
	    SuggestionsController.prototype.previousSuggestion = function () {
	        if (this.suggestions && this.suggestions.length) {
	            if (this.currentIndex > 0) {
	                this._setSelectedSuggestion(this.currentIndex - 1);
	                return true;
	            }
	            else if (this.currentIndex === 0) {
	                this._setSelectedSuggestion(this.suggestions.length - 1);
	                return true;
	            }
	        }
	        return false;
	    };
	    SuggestionsController.prototype.getSuggestions = function () {
	        return this.suggestions;
	    };
	    SuggestionsController.prototype.getCurrentItem = function () {
	        return this.currentSuggestion;
	    };
	    SuggestionsController.prototype.getSuggestionAtIndex = function (index) {
	        return this.suggestions[index];
	    };
	    SuggestionsController.prototype.hasSelectedSuggestion = function () {
	        return this.currentSuggestion ? true : false;
	    };
	    SuggestionsController.prototype._convertSuggestionsToSuggestionItems = function (suggestions) {
	        var converted = [];
	        suggestions.forEach(function (suggestion) { return converted.push({ item: suggestion, selected: false }); });
	        return converted;
	    };
	    SuggestionsController.prototype._setSelectedSuggestion = function (index) {
	        if (index > this.suggestions.length - 1 || index < 0) {
	            this.currentIndex = 0;
	            this.currentSuggestion.selected = false;
	            this.currentSuggestion = this.suggestions[0];
	            this.currentSuggestion.selected = true;
	        }
	        else {
	            if (this.currentIndex > -1) {
	                this.suggestions[this.currentIndex].selected = false;
	            }
	            this.suggestions[index].selected = true;
	            this.currentIndex = index;
	            this.currentSuggestion = this.suggestions[index];
	        }
	    };
	    return SuggestionsController;
	}());
	exports.SuggestionsController = SuggestionsController;
	


/***/ },
/* 110 */
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
	var BaseComponent_1 = __webpack_require__(9);
	var properties_1 = __webpack_require__(21);
	var autobind_1 = __webpack_require__(14);
	var KeyCodes_1 = __webpack_require__(12);
	var SELECTION_FORWARD = 'forward';
	var SELECTION_BACKWARD = 'backward';
	var BaseAutoFill = (function (_super) {
	    __extends(BaseAutoFill, _super);
	    function BaseAutoFill(props) {
	        var _this = _super.call(this, props) || this;
	        _this._autoFillEnabled = true;
	        _this._value = '';
	        _this.state = {
	            displayValue: ''
	        };
	        return _this;
	    }
	    Object.defineProperty(BaseAutoFill.prototype, "cursorLocation", {
	        get: function () {
	            if (this._inputElement) {
	                var inputElement = this._inputElement;
	                if (inputElement.selectionDirection !== SELECTION_FORWARD) {
	                    return inputElement.selectionEnd;
	                }
	                else {
	                    return inputElement.selectionStart;
	                }
	            }
	            else {
	                return -1;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseAutoFill.prototype, "isValueSelected", {
	        get: function () {
	            return this.inputElement.selectionStart !== this.inputElement.selectionEnd;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseAutoFill.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseAutoFill.prototype, "selectionStart", {
	        get: function () {
	            return this._inputElement ? this._inputElement.selectionStart : -1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseAutoFill.prototype, "selectionEnd", {
	        get: function () {
	            return this._inputElement ? this._inputElement.selectionEnd : -1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseAutoFill.prototype, "inputElement", {
	        get: function () {
	            return this._inputElement;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BaseAutoFill.prototype.componentWillReceiveProps = function (nextProps) {
	        if (this._autoFillEnabled && this._doesTextStartWith(nextProps.suggestedDisplayValue, this._value)) {
	            this.setState({ displayValue: nextProps.suggestedDisplayValue });
	        }
	    };
	    BaseAutoFill.prototype.componentDidUpdate = function () {
	        var value = this._value;
	        var suggestedDisplayValue = this.props.suggestedDisplayValue;
	        var differenceIndex = 0;
	        if (this._autoFillEnabled && value && suggestedDisplayValue && this._doesTextStartWith(suggestedDisplayValue, value)) {
	            while (differenceIndex < value.length && value[differenceIndex].toLocaleLowerCase() === suggestedDisplayValue[differenceIndex].toLocaleLowerCase()) {
	                differenceIndex++;
	            }
	            if (differenceIndex > 0) {
	                this._inputElement.setSelectionRange(differenceIndex, suggestedDisplayValue.length, SELECTION_BACKWARD);
	            }
	        }
	    };
	    BaseAutoFill.prototype.render = function () {
	        var displayValue = this.state.displayValue;
	        var nativeProps = properties_1.getNativeProps(this.props, properties_1.inputProperties);
	        return React.createElement("input", __assign({}, nativeProps, { ref: this._resolveRef('_inputElement'), value: displayValue, autoCapitalize: 'off', autoComplete: 'off', onChange: this._onChange, onKeyDown: this._onKeyDown, onClick: this._onClick }));
	    };
	    BaseAutoFill.prototype.focus = function () {
	        this._inputElement.focus();
	    };
	    BaseAutoFill.prototype.clear = function () {
	        this._autoFillEnabled = true;
	        this._updateValue('');
	    };
	    BaseAutoFill.prototype._onClick = function () {
	        if (this._value && this._value !== '' && this._autoFillEnabled) {
	            this._autoFillEnabled = false;
	        }
	    };
	    BaseAutoFill.prototype._onKeyDown = function (ev) {
	        switch (ev.which) {
	            case KeyCodes_1.KeyCodes.backspace:
	                this._autoFillEnabled = false;
	                break;
	            case KeyCodes_1.KeyCodes.left:
	                if (this._autoFillEnabled) {
	                    this._autoFillEnabled = false;
	                }
	                break;
	            case KeyCodes_1.KeyCodes.right:
	                if (this._autoFillEnabled) {
	                    this._autoFillEnabled = false;
	                }
	                break;
	            default:
	                if (!this._autoFillEnabled) {
	                    if (this.props.enableAutoFillOnKeyPress.indexOf(ev.which) !== -1) {
	                        this._autoFillEnabled = true;
	                    }
	                }
	                break;
	        }
	    };
	    BaseAutoFill.prototype._onChange = function (ev) {
	        var value = ev.target.value;
	        if (value && ev.target.selectionStart === value.length && !this._autoFillEnabled && value.length > this._value.length) {
	            this._autoFillEnabled = true;
	        }
	        this._updateValue(value);
	    };
	    BaseAutoFill.prototype._notifyInputChange = function (newValue) {
	        if (this.props.onInputValueChange) {
	            this.props.onInputValueChange(newValue);
	        }
	    };
	    BaseAutoFill.prototype._updateValue = function (newValue) {
	        var _this = this;
	        this._value = newValue;
	        var displayValue = newValue;
	        if (this.props.suggestedDisplayValue &&
	            this._doesTextStartWith(this.props.suggestedDisplayValue, displayValue)
	            && this._autoFillEnabled) {
	            displayValue = this.props.suggestedDisplayValue;
	        }
	        this.setState({
	            displayValue: newValue
	        }, function () { return _this._notifyInputChange(newValue); });
	    };
	    BaseAutoFill.prototype._doesTextStartWith = function (text, startWith) {
	        if (!text || !startWith) {
	            return false;
	        }
	        return text.toLocaleLowerCase().indexOf(startWith.toLocaleLowerCase()) === 0;
	    };
	    return BaseAutoFill;
	}(BaseComponent_1.BaseComponent));
	BaseAutoFill.defaultProps = {
	    enableAutoFillOnKeyPress: [KeyCodes_1.KeyCodes.down, KeyCodes_1.KeyCodes.up]
	};
	__decorate([
	    autobind_1.autobind
	], BaseAutoFill.prototype, "_onClick", null);
	__decorate([
	    autobind_1.autobind
	], BaseAutoFill.prototype, "_onKeyDown", null);
	__decorate([
	    autobind_1.autobind
	], BaseAutoFill.prototype, "_onChange", null);
	exports.BaseAutoFill = BaseAutoFill;
	


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-BasePicker-text{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;box-sizing:border-box;border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";min-width:180px;padding:1px}.ms-BasePicker-text:hover{border-color:" }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": "}.ms-BasePicker-text.inputFocused{border-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-BasePicker-input{border:none;min-height:28px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;outline:0;padding:0 6px;margin:1px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable */
	var React = __webpack_require__(1);
	/* tslint:enable */
	var Persona_1 = __webpack_require__(113);
	var Button_1 = __webpack_require__(26);
	var css_1 = __webpack_require__(15);
	__webpack_require__(124);
	exports.SelectedItemDefault = function (peoplePickerItemProps) {
	    var item = peoplePickerItemProps.item, onRemoveItem = peoplePickerItemProps.onRemoveItem, index = peoplePickerItemProps.index, selected = peoplePickerItemProps.selected;
	    return (React.createElement("div", { className: css_1.css('ms-PickerPersona-container', {
	            'is-selected': selected
	        }), "data-is-focusable": true, "data-selection-index": index },
	        React.createElement("div", { className: 'ms-PickerItem-content' },
	            React.createElement(Persona_1.Persona, __assign({}, item, { presence: item.presence !== undefined ? item.presence : Persona_1.PersonaPresence.none, size: Persona_1.PersonaSize.extraSmall }))),
	        React.createElement(Button_1.Button, { onClick: function () { if (onRemoveItem) {
	                onRemoveItem();
	            } }, icon: 'Cancel', buttonType: Button_1.ButtonType.icon, className: 'ms-PickerItem-content', "data-is-focusable": false })));
	};
	


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(114));
	


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(115));
	__export(__webpack_require__(121));
	__export(__webpack_require__(122));
	


/***/ },
/* 115 */
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
	var css_1 = __webpack_require__(15);
	var Image_1 = __webpack_require__(116);
	var Persona_Props_1 = __webpack_require__(121);
	var PersonaConsts_1 = __webpack_require__(122);
	var properties_1 = __webpack_require__(21);
	__webpack_require__(123);
	var Persona = (function (_super) {
	    __extends(Persona, _super);
	    function Persona() {
	        return _super.apply(this, arguments) || this;
	    }
	    Persona.prototype.render = function () {
	        var _a = this.props, className = _a.className, size = _a.size, imageUrl = _a.imageUrl, imageInitials = _a.imageInitials, initialsColor = _a.initialsColor, presence = _a.presence, primaryText = _a.primaryText, secondaryText = _a.secondaryText, tertiaryText = _a.tertiaryText, optionalText = _a.optionalText, hidePersonaDetails = _a.hidePersonaDetails, imageShouldFadeIn = _a.imageShouldFadeIn;
	        var presenceElement = null;
	        if (presence !== Persona_Props_1.PersonaPresence.none) {
	            var userPresence = Persona_Props_1.PersonaPresence[presence], statusIcon = null;
	            switch (userPresence) {
	                case 'online':
	                    userPresence = 'SkypeCheck';
	                    break;
	                case 'away':
	                    userPresence = 'SkypeClock';
	                    break;
	                case 'dnd':
	                    userPresence = 'SkypeMinus';
	                    break;
	                default:
	                    userPresence = '';
	            }
	            if (userPresence) {
	                var iconClass = "ms-Persona-presenceIcon ms-Icon ms-Icon--" + userPresence;
	                statusIcon = React.createElement("i", { className: iconClass });
	            }
	            presenceElement = React.createElement("div", { className: 'ms-Persona-presence' }, statusIcon);
	        }
	        var divProps = properties_1.getNativeProps(this.props, properties_1.divProperties);
	        var personaDetails = React.createElement("div", { className: 'ms-Persona-details' },
	            React.createElement("div", { className: 'ms-Persona-primaryText' }, primaryText),
	            secondaryText ? (React.createElement("div", { className: 'ms-Persona-secondaryText' }, secondaryText)) : (null),
	            React.createElement("div", { className: 'ms-Persona-tertiaryText' }, tertiaryText),
	            React.createElement("div", { className: 'ms-Persona-optionalText' }, optionalText),
	            this.props.children);
	        return (React.createElement("div", __assign({}, divProps, { className: css_1.css('ms-Persona', className, PersonaConsts_1.PERSONA_SIZE[size], PersonaConsts_1.PERSONA_PRESENCE[presence]) }),
	            size !== Persona_Props_1.PersonaSize.tiny && (React.createElement("div", { className: 'ms-Persona-imageArea' },
	                React.createElement("div", { className: css_1.css('ms-Persona-initials', PersonaConsts_1.PERSONA_INITIALS_COLOR[initialsColor]) }, imageInitials),
	                React.createElement(Image_1.Image, { className: 'ms-Persona-image', imageFit: Image_1.ImageFit.cover, src: imageUrl, shouldFadeIn: imageShouldFadeIn }))),
	            presenceElement,
	            (!hidePersonaDetails || (size === Persona_Props_1.PersonaSize.tiny)) && personaDetails));
	    };
	    return Persona;
	}(React.Component));
	Persona.defaultProps = {
	    primaryText: '',
	    size: Persona_Props_1.PersonaSize.regular,
	    initialsColor: Persona_Props_1.PersonaInitialsColor.blue,
	    presence: Persona_Props_1.PersonaPresence.none
	};
	exports.Persona = Persona;
	


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(117));
	


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(118));
	__export(__webpack_require__(119));
	


/***/ },
/* 118 */
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
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(1);
	/* tslint:enable:no-unused-variable */
	var css_1 = __webpack_require__(15);
	var BaseComponent_1 = __webpack_require__(9);
	var properties_1 = __webpack_require__(21);
	var Image_Props_1 = __webpack_require__(119);
	__webpack_require__(120);
	var CoverStyle;
	(function (CoverStyle) {
	    CoverStyle[CoverStyle["landscape"] = 0] = "landscape";
	    CoverStyle[CoverStyle["portrait"] = 1] = "portrait";
	})(CoverStyle = exports.CoverStyle || (exports.CoverStyle = {}));
	exports.CoverStyleMap = (_a = {},
	    _a[CoverStyle.landscape] = 'ms-Image-image--landscape',
	    _a[CoverStyle.portrait] = 'ms-Image-image--portrait',
	    _a);
	exports.ImageFitMap = (_b = {},
	    _b[Image_Props_1.ImageFit.center] = 'ms-Image-image--center',
	    _b[Image_Props_1.ImageFit.contain] = 'ms-Image-image--contain',
	    _b[Image_Props_1.ImageFit.cover] = 'ms-Image-image--cover',
	    _b[Image_Props_1.ImageFit.none] = 'ms-Image-image--none',
	    _b);
	var ImageLoadState;
	(function (ImageLoadState) {
	    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
	    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
	    ImageLoadState[ImageLoadState["error"] = 2] = "error";
	    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
	})(ImageLoadState = exports.ImageLoadState || (exports.ImageLoadState = {}));
	var Image = (function (_super) {
	    __extends(Image, _super);
	    function Image(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            loadState: ImageLoadState.notLoaded
	        };
	        return _this;
	    }
	    Image.prototype.componentDidMount = function () {
	        if (!this._evaluateImage()) {
	            this._events.on(this._imageElement, 'load', this._evaluateImage);
	            this._events.on(this._imageElement, 'error', this._setError);
	        }
	    };
	    Image.prototype.componentWillReceiveProps = function (nextProps) {
	        if (this.state.loadState === ImageLoadState.loaded) {
	            var nextHeight = nextProps.height, nextWidth = nextProps.width;
	            var _a = this.props, height = _a.height, width = _a.width;
	            if (height !== nextHeight || width !== nextWidth) {
	                this._computeCoverStyle(nextProps);
	            }
	        }
	    };
	    Image.prototype.render = function () {
	        var imageProps = properties_1.getNativeProps(this.props, properties_1.imageProperties, ['width', 'height']);
	        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, className = _a.className, imageFit = _a.imageFit, errorSrc = _a.errorSrc, role = _a.role;
	        var loadState = this.state.loadState;
	        var coverStyle = this._coverStyle;
	        var loaded = loadState === ImageLoadState.loaded || loadState === ImageLoadState.errorLoaded;
	        var srcToDisplay = (loadState === ImageLoadState.error || loadState === ImageLoadState.errorLoaded) ? errorSrc : src;
	        // If image dimensions aren't specified, the natural size of the image is used.
	        return (React.createElement("div", { className: css_1.css('ms-Image', className), style: { width: width, height: height }, ref: this._resolveRef('_frameElement') },
	            React.createElement("img", __assign({}, imageProps, { className: css_1.css('ms-Image-image', (coverStyle !== undefined) && exports.CoverStyleMap[coverStyle], (imageFit !== undefined) && exports.ImageFitMap[imageFit], {
	                    'is-fadeIn': shouldFadeIn,
	                    'is-notLoaded': !loaded,
	                    'is-loaded': loaded,
	                    'ms-u-fadeIn400': loaded && shouldFadeIn,
	                    'is-error': loadState === ImageLoadState.error,
	                    'ms-Image-image--scaleWidth': (imageFit === undefined && !!width && !height),
	                    'ms-Image-image--scaleHeight': (imageFit === undefined && !width && !!height),
	                    'ms-Image-image--scaleWidthHeight': (imageFit === undefined && !!width && !!height),
	                }), ref: this._resolveRef('_imageElement'), src: srcToDisplay, alt: alt, role: role }))));
	    };
	    Image.prototype._evaluateImage = function () {
	        var src = this.props.src;
	        var loadState = this.state.loadState;
	        var isLoaded = (src && this._imageElement.naturalWidth > 0 && this._imageElement.naturalHeight > 0);
	        this._computeCoverStyle(this.props);
	        if (isLoaded && loadState !== ImageLoadState.loaded && loadState !== ImageLoadState.errorLoaded) {
	            this._events.off();
	            this.setState({
	                loadState: loadState === ImageLoadState.error ? ImageLoadState.errorLoaded : ImageLoadState.loaded
	            });
	        }
	        return isLoaded;
	    };
	    Image.prototype._computeCoverStyle = function (props) {
	        var imageFit = props.imageFit, width = props.width, height = props.height;
	        if (imageFit === Image_Props_1.ImageFit.cover || imageFit === Image_Props_1.ImageFit.contain) {
	            if (this._imageElement) {
	                // Determine the desired ratio using the width and height props.
	                // If those props aren't available, measure measure the frame.
	                var desiredRatio = void 0;
	                if (!!width && !!height) {
	                    desiredRatio = width / height;
	                }
	                else {
	                    desiredRatio = this._frameElement.clientWidth / this._frameElement.clientHeight;
	                }
	                // Examine the source image to determine its original ratio.
	                var naturalRatio = this._imageElement.naturalWidth / this._imageElement.naturalHeight;
	                // Should we crop from the top or the sides?
	                if (naturalRatio > desiredRatio) {
	                    this._coverStyle = CoverStyle.landscape;
	                }
	                else {
	                    this._coverStyle = CoverStyle.portrait;
	                }
	            }
	        }
	    };
	    Image.prototype._setError = function () {
	        if (this.state.loadState !== ImageLoadState.error && this.state.loadState !== ImageLoadState.errorLoaded) {
	            this.setState({
	                loadState: ImageLoadState.error
	            });
	        }
	    };
	    return Image;
	}(BaseComponent_1.BaseComponent));
	Image.defaultProps = {
	    shouldFadeIn: true
	};
	exports.Image = Image;
	var _a, _b;



/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * The possible methods that can be used to fit the image.
	 */
	var ImageFit;
	(function (ImageFit) {
	    /**
	     * The image is not scaled. The image is centered and cropped within the content box.
	     */
	    ImageFit[ImageFit["center"] = 0] = "center";
	    /**
	     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
	     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
	     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
	     */
	    ImageFit[ImageFit["contain"] = 1] = "contain";
	    /**
	     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
	     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
	     */
	    ImageFit[ImageFit["cover"] = 2] = "cover";
	    /**
	     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
	     * frame will have empty space.
	     */
	    ImageFit[ImageFit["none"] = 3] = "none";
	})(ImageFit = exports.ImageFit || (exports.ImageFit = {}));
	


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Image{overflow:hidden}.ms-Image-image{display:block;opacity:0}.ms-Image-image.is-loaded{opacity:1}.ms-Image-image--center,.ms-Image-image--contain,.ms-Image-image--cover{position:relative;top:50%}html[dir=ltr] .ms-Image-image--center,html[dir=ltr] .ms-Image-image--contain,html[dir=ltr] .ms-Image-image--cover{left:50%}html[dir=rtl] .ms-Image-image--center,html[dir=rtl] .ms-Image-image--contain,html[dir=rtl] .ms-Image-image--cover{right:50%}html[dir=ltr] .ms-Image-image--center,html[dir=ltr] .ms-Image-image--contain,html[dir=ltr] .ms-Image-image--cover{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}html[dir=rtl] .ms-Image-image--center,html[dir=rtl] .ms-Image-image--contain,html[dir=rtl] .ms-Image-image--cover{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.ms-Image-image--contain.ms-Image-image--landscape{width:100%;height:auto}.ms-Image-image--contain.ms-Image-image--portrait{height:100%;width:auto}.ms-Image-image--cover.ms-Image-image--landscape{height:100%;width:auto}.ms-Image-image--cover.ms-Image-image--portrait{width:100%;height:auto}.ms-Image-image--none{height:auto;width:auto}.ms-Image-image--scaleWidthHeight{height:100%;width:100%}.ms-Image-image--scaleWidth{height:auto;width:100%}.ms-Image-image--scaleHeight{height:100%;width:auto}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 121 */
/***/ function(module, exports) {

	"use strict";
	var PersonaSize;
	(function (PersonaSize) {
	    PersonaSize[PersonaSize["tiny"] = 0] = "tiny";
	    PersonaSize[PersonaSize["extraSmall"] = 1] = "extraSmall";
	    PersonaSize[PersonaSize["small"] = 2] = "small";
	    PersonaSize[PersonaSize["regular"] = 3] = "regular";
	    PersonaSize[PersonaSize["large"] = 4] = "large";
	    PersonaSize[PersonaSize["extraLarge"] = 5] = "extraLarge";
	})(PersonaSize = exports.PersonaSize || (exports.PersonaSize = {}));
	var PersonaPresence;
	(function (PersonaPresence) {
	    PersonaPresence[PersonaPresence["none"] = 0] = "none";
	    PersonaPresence[PersonaPresence["offline"] = 1] = "offline";
	    PersonaPresence[PersonaPresence["online"] = 2] = "online";
	    PersonaPresence[PersonaPresence["away"] = 3] = "away";
	    PersonaPresence[PersonaPresence["dnd"] = 4] = "dnd";
	    PersonaPresence[PersonaPresence["blocked"] = 5] = "blocked";
	    PersonaPresence[PersonaPresence["busy"] = 6] = "busy";
	})(PersonaPresence = exports.PersonaPresence || (exports.PersonaPresence = {}));
	var PersonaInitialsColor;
	(function (PersonaInitialsColor) {
	    PersonaInitialsColor[PersonaInitialsColor["lightBlue"] = 0] = "lightBlue";
	    PersonaInitialsColor[PersonaInitialsColor["blue"] = 1] = "blue";
	    PersonaInitialsColor[PersonaInitialsColor["darkBlue"] = 2] = "darkBlue";
	    PersonaInitialsColor[PersonaInitialsColor["teal"] = 3] = "teal";
	    PersonaInitialsColor[PersonaInitialsColor["lightGreen"] = 4] = "lightGreen";
	    PersonaInitialsColor[PersonaInitialsColor["green"] = 5] = "green";
	    PersonaInitialsColor[PersonaInitialsColor["darkGreen"] = 6] = "darkGreen";
	    PersonaInitialsColor[PersonaInitialsColor["lightPink"] = 7] = "lightPink";
	    PersonaInitialsColor[PersonaInitialsColor["pink"] = 8] = "pink";
	    PersonaInitialsColor[PersonaInitialsColor["magenta"] = 9] = "magenta";
	    PersonaInitialsColor[PersonaInitialsColor["purple"] = 10] = "purple";
	    PersonaInitialsColor[PersonaInitialsColor["black"] = 11] = "black";
	    PersonaInitialsColor[PersonaInitialsColor["orange"] = 12] = "orange";
	    PersonaInitialsColor[PersonaInitialsColor["red"] = 13] = "red";
	    PersonaInitialsColor[PersonaInitialsColor["darkRed"] = 14] = "darkRed";
	})(PersonaInitialsColor = exports.PersonaInitialsColor || (exports.PersonaInitialsColor = {}));
	


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Persona_Props_1 = __webpack_require__(121);
	exports.PERSONA_SIZE = (_a = {},
	    _a[Persona_Props_1.PersonaSize.tiny] = 'ms-Persona--tiny',
	    _a[Persona_Props_1.PersonaSize.extraSmall] = 'ms-Persona--xs',
	    _a[Persona_Props_1.PersonaSize.small] = 'ms-Persona--sm',
	    _a[Persona_Props_1.PersonaSize.regular] = '',
	    _a[Persona_Props_1.PersonaSize.large] = 'ms-Persona--lg',
	    _a[Persona_Props_1.PersonaSize.extraLarge] = 'ms-Persona--xl',
	    _a);
	exports.PERSONA_PRESENCE = (_b = {},
	    _b[Persona_Props_1.PersonaPresence.offline] = 'ms-Persona--offline',
	    _b[Persona_Props_1.PersonaPresence.online] = 'ms-Persona--online',
	    _b[Persona_Props_1.PersonaPresence.away] = 'ms-Persona--away',
	    _b[Persona_Props_1.PersonaPresence.dnd] = 'ms-Persona--dnd',
	    _b[Persona_Props_1.PersonaPresence.blocked] = 'ms-Persona--blocked',
	    _b[Persona_Props_1.PersonaPresence.busy] = 'ms-Persona--busy',
	    _b);
	exports.PERSONA_INITIALS_COLOR = (_c = {},
	    _c[Persona_Props_1.PersonaInitialsColor.lightBlue] = 'ms-Persona-initials--lightBlue',
	    _c[Persona_Props_1.PersonaInitialsColor.blue] = 'ms-Persona-initials--blue',
	    _c[Persona_Props_1.PersonaInitialsColor.darkBlue] = 'ms-Persona-initials--darkBlue',
	    _c[Persona_Props_1.PersonaInitialsColor.teal] = 'ms-Persona-initials--teal',
	    _c[Persona_Props_1.PersonaInitialsColor.lightGreen] = 'ms-Persona-initials--lightGreen',
	    _c[Persona_Props_1.PersonaInitialsColor.green] = 'ms-Persona-initials--green',
	    _c[Persona_Props_1.PersonaInitialsColor.darkGreen] = 'ms-Persona-initials--darkGreen',
	    _c[Persona_Props_1.PersonaInitialsColor.lightPink] = 'ms-Persona-initials--lightPink',
	    _c[Persona_Props_1.PersonaInitialsColor.pink] = 'ms-Persona-initials--pink',
	    _c[Persona_Props_1.PersonaInitialsColor.magenta] = 'ms-Persona-initials--magenta',
	    _c[Persona_Props_1.PersonaInitialsColor.purple] = 'ms-Persona-initials--purple',
	    _c[Persona_Props_1.PersonaInitialsColor.black] = 'ms-Persona-initials--black',
	    _c[Persona_Props_1.PersonaInitialsColor.orange] = 'ms-Persona-initials--orange',
	    _c[Persona_Props_1.PersonaInitialsColor.red] = 'ms-Persona-initials--red',
	    _c[Persona_Props_1.PersonaInitialsColor.darkRed] = 'ms-Persona-initials--darkRed',
	    _c);
	var _a, _b, _c;



/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Persona{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;padding:0;box-shadow:none;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-size:14px;font-weight:400;line-height:1;position:relative;height:48px;display:table;table-layout:fixed;border-collapse:separate}.ms-Persona .ms-ContextualHost{display:none}.ms-Persona-imageArea{position:absolute;overflow:hidden;text-align:center;max-width:48px;height:48px;border-radius:50%;z-index:0;width:48px;top:0}html[dir=ltr] .ms-Persona-imageArea{left:0}html[dir=rtl] .ms-Persona-imageArea{right:0}@media screen and (-ms-high-contrast:active){.ms-Persona-imageArea{border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona-imageArea{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Persona-imageArea .ms-Image{border:0}.ms-Persona-placeholder{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";position:absolute;right:0;left:0;font-size:47px;top:9px;z-index:5}.ms-Persona-initials{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-size:17px;font-weight:100;line-height:48px}.ms-Persona-initials.ms-Persona-initials--lightBlue{background-color:#6BA5E7}.ms-Persona-initials.ms-Persona-initials--blue{background-color:#2D89EF}.ms-Persona-initials.ms-Persona-initials--darkBlue{background-color:#2B5797}.ms-Persona-initials.ms-Persona-initials--teal{background-color:#00ABA9}.ms-Persona-initials.ms-Persona-initials--lightGreen{background-color:#99B433}.ms-Persona-initials.ms-Persona-initials--green{background-color:#00A300}.ms-Persona-initials.ms-Persona-initials--darkGreen{background-color:#1E7145}.ms-Persona-initials.ms-Persona-initials--lightPink{background-color:#E773BD}.ms-Persona-initials.ms-Persona-initials--pink{background-color:#FF0097}.ms-Persona-initials.ms-Persona-initials--magenta{background-color:#7E3878}.ms-Persona-initials.ms-Persona-initials--purple{background-color:#603CBA}.ms-Persona-initials.ms-Persona-initials--black{background-color:#1D1D1D}.ms-Persona-initials.ms-Persona-initials--orange{background-color:#DA532C}.ms-Persona-initials.ms-Persona-initials--red{background-color:#E11}.ms-Persona-initials.ms-Persona-initials--darkRed{background-color:#B91D47}.ms-Persona-image{display:table-cell;position:absolute;top:0;width:100%;height:100%;border-radius:50%;-webkit-perspective:1px;perspective:1px}html[dir=ltr] .ms-Persona-image{margin-right:10px}html[dir=rtl] .ms-Persona-image{margin-left:10px}html[dir=ltr] .ms-Persona-image{left:0}html[dir=rtl] .ms-Persona-image{right:0}.ms-Persona-image[src=\"\"]{display:none}.ms-Persona-presence{background-color:#7FBA00;position:absolute;height:12px;width:12px;border-radius:50%;top:auto;bottom:-1px;border:2px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";text-align:center;box-sizing:content-box}html[dir=ltr] .ms-Persona-presence{left:34px}html[dir=rtl] .ms-Persona-presence{right:34px}@media screen and (-ms-high-contrast:active){.ms-Persona-presence{border-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";box-shadow:0 0 0 1px #1AEBFF inset;color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona-presence{border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-shadow:0 0 0 1px #37006E inset;color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.ms-Persona-presence .ms-Persona-presenceIcon{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-size:8px;line-height:12px;vertical-align:top}.ms-Persona-details{padding:0 12px;vertical-align:middle;display:table-cell}html[dir=ltr] .ms-Persona-details{text-align:left}html[dir=rtl] .ms-Persona-details{text-align:right}html[dir=ltr] .ms-Persona-details{padding-left:60px}html[dir=rtl] .ms-Persona-details{padding-right:60px}.ms-Persona-optionalText,.ms-Persona-primaryText,.ms-Persona-secondaryText,.ms-Persona-tertiaryText{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.ms-Persona-primaryText{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:400;font-size:17px;margin-top:-3px;line-height:1.4}.ms-Persona-optionalText,.ms-Persona-secondaryText,.ms-Persona-tertiaryText{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-weight:400;font-size:12px;white-space:nowrap;line-height:1.3}.ms-Persona-secondaryText{padding-top:3px}.ms-Persona-optionalText,.ms-Persona-tertiaryText{padding-top:5px;display:none}.ms-Persona.ms-Persona--tiny{height:30px;display:inline-block}.ms-Persona.ms-Persona--tiny .ms-Persona-imageArea{overflow:visible;background:0 0;height:0;width:0}.ms-Persona.ms-Persona--tiny .ms-Persona-presence{top:10px;border:0}html[dir=ltr] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{right:auto}html[dir=rtl] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{left:auto}html[dir=ltr] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{left:0}html[dir=rtl] .ms-Persona.ms-Persona--tiny .ms-Persona-presence{right:0}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--tiny .ms-Persona-presence{top:9px;border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--tiny .ms-Persona-presence{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}html[dir=ltr] .ms-Persona.ms-Persona--tiny .ms-Persona-details{padding-left:20px}html[dir=rtl] .ms-Persona.ms-Persona--tiny .ms-Persona-details{padding-right:20px}.ms-Persona.ms-Persona--tiny .ms-Persona-primaryText{font-size:14px;padding-top:9px}.ms-Persona.ms-Persona--tiny .ms-Persona-secondaryText{display:none}.ms-Persona.ms-Persona--tiny.ms-Persona--readonly{padding:0;background-color:transparent}.ms-Persona.ms-Persona--tiny.ms-Persona--readonly .ms-Persona-primaryText:after{content:';'}.ms-Persona.ms-Persona--xs{height:32px}.ms-Persona.ms-Persona--xs .ms-Persona-image,.ms-Persona.ms-Persona--xs .ms-Persona-imageArea{max-width:32px;width:32px;height:32px}.ms-Persona.ms-Persona--xs .ms-Persona-placeholder{font-size:28px;top:6px}.ms-Persona.ms-Persona--xs .ms-Persona-initials{font-size:12px;line-height:32px}html[dir=ltr] .ms-Persona.ms-Persona--xs .ms-Persona-presence{left:19px}html[dir=rtl] .ms-Persona.ms-Persona--xs .ms-Persona-presence{right:19px}html[dir=ltr] .ms-Persona.ms-Persona--xs .ms-Persona-details{padding-left:40px}html[dir=rtl] .ms-Persona.ms-Persona--xs .ms-Persona-details{padding-right:40px}.ms-Persona.ms-Persona--xs .ms-Persona-primaryText{font-size:14px;padding-top:3px}.ms-Persona.ms-Persona--xs .ms-Persona-secondaryText{display:none}.ms-Persona.ms-Persona--sm{height:40px}.ms-Persona.ms-Persona--sm .ms-Persona-image,.ms-Persona.ms-Persona--sm .ms-Persona-imageArea{max-width:40px;width:40px;height:40px}.ms-Persona.ms-Persona--sm .ms-Persona-placeholder{font-size:38px;top:5px}.ms-Persona.ms-Persona--sm .ms-Persona-initials{font-size:14px;line-height:40px}html[dir=ltr] .ms-Persona.ms-Persona--sm .ms-Persona-presence{left:27px}html[dir=rtl] .ms-Persona.ms-Persona--sm .ms-Persona-presence{right:27px}html[dir=ltr] .ms-Persona.ms-Persona--sm .ms-Persona-details{padding-left:48px}html[dir=rtl] .ms-Persona.ms-Persona--sm .ms-Persona-details{padding-right:48px}.ms-Persona.ms-Persona--sm .ms-Persona-primaryText{font-size:14px}.ms-Persona.ms-Persona--sm .ms-Persona-primaryText,.ms-Persona.ms-Persona--sm .ms-Persona-secondaryText{padding-top:1px}.ms-Persona.ms-Persona--lg{height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-image,.ms-Persona.ms-Persona--lg .ms-Persona-imageArea{max-width:72px;width:72px;height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-placeholder{font-size:67px;top:10px}.ms-Persona.ms-Persona--lg .ms-Persona-initials{font-size:28px;line-height:72px}.ms-Persona.ms-Persona--lg .ms-Persona-presence{height:20px;width:20px;border-width:3px}html[dir=ltr] .ms-Persona.ms-Persona--lg .ms-Persona-presence{left:49px}html[dir=rtl] .ms-Persona.ms-Persona--lg .ms-Persona-presence{right:49px}.ms-Persona.ms-Persona--lg .ms-Persona-presenceIcon{line-height:20px;font-size:14px}html[dir=ltr] .ms-Persona.ms-Persona--lg .ms-Persona-details{padding-left:84px}html[dir=rtl] .ms-Persona.ms-Persona--lg .ms-Persona-details{padding-right:84px}.ms-Persona.ms-Persona--lg .ms-Persona-secondaryText{padding-top:3px}.ms-Persona.ms-Persona--lg .ms-Persona-tertiaryText{padding-top:5px;display:block}.ms-Persona.ms-Persona--xl{height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-image,.ms-Persona.ms-Persona--xl .ms-Persona-imageArea{max-width:100px;width:100px;height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-placeholder{font-size:95px;top:12px}.ms-Persona.ms-Persona--xl .ms-Persona-initials{font-size:42px;line-height:100px}.ms-Persona.ms-Persona--xl .ms-Persona-presence{height:28px;width:28px;border-width:4px}html[dir=ltr] .ms-Persona.ms-Persona--xl .ms-Persona-presence{left:71px}html[dir=rtl] .ms-Persona.ms-Persona--xl .ms-Persona-presence{right:71px}.ms-Persona.ms-Persona--xl .ms-Persona-presenceIcon{line-height:28px;font-size:21px;position:relative;top:1px}html[dir=ltr] .ms-Persona.ms-Persona--xl .ms-Persona-details{padding-left:120px}html[dir=rtl] .ms-Persona.ms-Persona--xl .ms-Persona-details{padding-right:120px}.ms-Persona.ms-Persona--xl .ms-Persona-primaryText{font-size:21px;font-weight:300;margin-top:0}.ms-Persona.ms-Persona--xl .ms-Persona-secondaryText{padding-top:2px}.ms-Persona.ms-Persona--xl .ms-Persona-optionalText,.ms-Persona.ms-Persona--xl .ms-Persona-tertiaryText{padding-top:5px;display:block}.ms-Persona.ms-Persona--darkText .ms-Persona-primaryText{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.ms-Persona.ms-Persona--darkText .ms-Persona-optionalText,.ms-Persona.ms-Persona--darkText .ms-Persona-secondaryText,.ms-Persona.ms-Persona--darkText .ms-Persona-tertiaryText{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.ms-Persona.ms-Persona--selectable{cursor:pointer;padding:0 10px}.ms-Persona.ms-Persona--selectable:not(.ms-Persona--xl):focus,.ms-Persona.ms-Persona--selectable:not(.ms-Persona--xl):hover{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": ";outline:1px solid transparent}.ms-Persona.ms-Persona--available .ms-Persona-presence{background-color:#7FBA00}.ms-Persona.ms-Persona--away .ms-Persona-presence{background-color:#FCD116}.ms-Persona.ms-Persona--away .ms-Persona-presenceIcon{position:relative}html[dir=ltr] .ms-Persona.ms-Persona--away .ms-Persona-presenceIcon{left:1px}html[dir=rtl] .ms-Persona.ms-Persona--away .ms-Persona-presenceIcon{right:1px}.ms-Persona.ms-Persona--blocked .ms-Persona-presence{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.ms-Persona.ms-Persona--blocked .ms-Persona-presence::before{content:'';width:100%;height:100%;position:absolute;top:0;box-shadow:0 0 0 2px #D93B3B inset;border-radius:50%}html[dir=ltr] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::before{left:0}html[dir=rtl] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::before{right:0}.ms-Persona.ms-Persona--blocked .ms-Persona-presence::after{content:'';width:100%;height:2px;background-color:#D93B3B;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);position:absolute;top:5px}html[dir=ltr] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::after{left:0}html[dir=rtl] .ms-Persona.ms-Persona--blocked .ms-Persona-presence::after{right:0}.ms-Persona.ms-Persona--blocked.ms-Persona--lg .ms-Persona-presence::after{top:9px}.ms-Persona.ms-Persona--blocked.ms-Persona--xl .ms-Persona-presence::after{top:13px}.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#D93B3B}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#1AEBFF}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--busy .ms-Persona-presence{background-color:#37006E}}.ms-Persona.ms-Persona--dnd .ms-Persona-presence{background-color:#E81123}.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:#93ABBD}@media screen and (-ms-high-contrast:active){.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";box-shadow:0 0 0 1px " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": " inset}}@media screen and (-ms-high-contrast:black-on-white){.ms-Persona.ms-Persona--offline .ms-Persona-presence{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-shadow:0 0 0 1px " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": " inset}}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-PickerPersona-container{display:inline-block;vertical-align:top;background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";margin:1px;vertical-align:top;white-space:nowrap;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-PickerPersona-container::-moz-focus-inner{border:0}.ms-PickerPersona-container{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-PickerPersona-container:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-PickerPersona-container:hover{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.ms-PickerPersona-container.is-selected{background:" }, { "theme": "neutralQuaternary", "defaultValue": "#d0d0d0" }, { "rawString": "}.ms-PickerPersona-container.is-selected:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}.ms-PickerPersona-container .ms-PickerItem-content{display:inline-block;vertical-align:middle}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable */
	var React = __webpack_require__(1);
	/* tslint:enable */
	var Persona_1 = __webpack_require__(113);
	exports.SuggestionItemNormal = function (personaProps) {
	    return (React.createElement("div", { className: 'ms-PeoplePicker-personaContent' },
	        React.createElement(Persona_1.Persona, __assign({}, personaProps, { presence: personaProps.presence !== undefined ? personaProps.presence : Persona_1.PersonaPresence.none, size: Persona_1.PersonaSize.small, className: 'ms-PeoplePicker-Persona' }))));
	};
	exports.SuggestionItemSmall = function (personaProps) {
	    return (React.createElement("div", { className: 'ms-PeoplePicker-personaContent' },
	        React.createElement(Persona_1.Persona, __assign({}, personaProps, { presence: personaProps.presence !== undefined ? personaProps.presence : Persona_1.PersonaPresence.none, size: Persona_1.PersonaSize.extraSmall, className: 'ms-PeoplePicker-Persona' }))));
	};
	


/***/ },
/* 126 */
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
	/* tslint:disable */
	var React = __webpack_require__(1);
	var Persona_1 = __webpack_require__(113);
	var ContextualMenu_1 = __webpack_require__(127);
	var Button_1 = __webpack_require__(26);
	var SelectedItemWithMenu = (function (_super) {
	    __extends(SelectedItemWithMenu, _super);
	    function SelectedItemWithMenu(props) {
	        var _this = _super.call(this, props) || this;
	        _this.onContextualMenu = _this.onContextualMenu.bind(_this);
	        _this._onCloseContextualMenu = _this._onCloseContextualMenu.bind(_this);
	        _this.state = { contextualMenuVisible: false };
	        return _this;
	    }
	    SelectedItemWithMenu.prototype.render = function () {
	        var _a = this.props, item = _a.item, onRemoveItem = _a.onRemoveItem;
	        return (React.createElement("div", { className: 'ms-PickerPersona-container' },
	            React.createElement("div", { className: 'ms-PickerItem-content' },
	                React.createElement(Persona_1.Persona, __assign({}, item, { presence: item.presence !== undefined ? item.presence : Persona_1.PersonaPresence.none }))),
	            React.createElement("div", { ref: 'ellipsisRef', className: 'ms-PickerItem-content' },
	                React.createElement(Button_1.Button, { icon: 'More', buttonType: Button_1.ButtonType.icon, onClick: this.onContextualMenu })),
	            React.createElement("div", { className: 'ms-PickerItem-content' },
	                React.createElement(Button_1.Button, { icon: 'Cancel', buttonType: Button_1.ButtonType.icon, onClick: onRemoveItem })),
	            this.state.contextualMenuVisible ? (React.createElement(ContextualMenu_1.ContextualMenu, { items: item.menuItems, shouldFocusOnMount: true, targetElement: this.refs.ellipsisRef, onDismiss: this._onCloseContextualMenu, directionalHint: ContextualMenu_1.DirectionalHint.bottomAutoEdge }))
	                : null));
	    };
	    SelectedItemWithMenu.prototype.onContextualMenu = function (ev) {
	        this.setState({ contextualMenuVisible: true });
	    };
	    SelectedItemWithMenu.prototype._onCloseContextualMenu = function (ev) {
	        this.setState({ contextualMenuVisible: false });
	    };
	    return SelectedItemWithMenu;
	}(React.Component));
	exports.SelectedItemWithMenu = SelectedItemWithMenu;
	


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(128));
	


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(129));
	__export(__webpack_require__(137));
	


/***/ },
/* 129 */
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
	var DirectionalHint_1 = __webpack_require__(89);
	var FocusZone_1 = __webpack_require__(78);
	var Utilities_1 = __webpack_require__(8);
	var Callout_1 = __webpack_require__(85);
	var BaseComponent_1 = __webpack_require__(9);
	var Icon_1 = __webpack_require__(130);
	__webpack_require__(136);
	var ContextualMenuType;
	(function (ContextualMenuType) {
	    ContextualMenuType[ContextualMenuType["vertical"] = 0] = "vertical";
	    ContextualMenuType[ContextualMenuType["horizontal"] = 1] = "horizontal";
	})(ContextualMenuType || (ContextualMenuType = {}));
	var HorizontalAlignmentHint;
	(function (HorizontalAlignmentHint) {
	    HorizontalAlignmentHint[HorizontalAlignmentHint["auto"] = 0] = "auto";
	    HorizontalAlignmentHint[HorizontalAlignmentHint["left"] = 1] = "left";
	    HorizontalAlignmentHint[HorizontalAlignmentHint["center"] = 2] = "center";
	    HorizontalAlignmentHint[HorizontalAlignmentHint["right"] = 3] = "right";
	})(HorizontalAlignmentHint || (HorizontalAlignmentHint = {}));
	var VerticalAlignmentHint;
	(function (VerticalAlignmentHint) {
	    VerticalAlignmentHint[VerticalAlignmentHint["top"] = 0] = "top";
	    VerticalAlignmentHint[VerticalAlignmentHint["center"] = 1] = "center";
	    VerticalAlignmentHint[VerticalAlignmentHint["bottom"] = 2] = "bottom";
	})(VerticalAlignmentHint || (VerticalAlignmentHint = {}));
	function hasSubmenuItems(item) {
	    var submenuItems = item.subMenuProps ? item.subMenuProps.items : item.items;
	    return !!(submenuItems && submenuItems.length);
	}
	exports.hasSubmenuItems = hasSubmenuItems;
	var ContextualMenu = (function (_super) {
	    __extends(ContextualMenu, _super);
	    function ContextualMenu(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            contextualMenuItems: null,
	            subMenuId: Utilities_1.getId('ContextualMenu')
	        };
	        _this._isFocusingPreviousElement = false;
	        _this._enterTimerId = 0;
	        return _this;
	    }
	    ContextualMenu.prototype.dismiss = function (ev, dismissAll) {
	        var onDismiss = this.props.onDismiss;
	        if (onDismiss) {
	            onDismiss(ev, dismissAll);
	        }
	    };
	    ContextualMenu.prototype.componentWillUpdate = function (newProps) {
	        if (newProps.targetElement !== this.props.targetElement || newProps.target !== this.props.target) {
	            var newTarget = newProps.targetElement ? newProps.targetElement : newProps.target;
	            this._setTargetWindowAndElement(newTarget);
	        }
	    };
	    // Invoked once, both on the client and server, immediately before the initial rendering occurs.
	    ContextualMenu.prototype.componentWillMount = function () {
	        var target = this.props.targetElement ? this.props.targetElement : this.props.target;
	        this._setTargetWindowAndElement(target);
	        this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
	    };
	    // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
	    ContextualMenu.prototype.componentDidMount = function () {
	        this._events.on(this._targetWindow, 'resize', this.dismiss);
	    };
	    // Invoked immediately before a component is unmounted from the DOM.
	    ContextualMenu.prototype.componentWillUnmount = function () {
	        var _this = this;
	        if (this._isFocusingPreviousElement && this._previousActiveElement) {
	            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
	            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
	            // to reset the focus back to the thing it thinks should have been focused.
	            setTimeout(function () { return _this._previousActiveElement.focus(); }, 0);
	        }
	        this._events.dispose();
	        this._async.dispose();
	    };
	    ContextualMenu.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, className = _a.className, items = _a.items, isBeakVisible = _a.isBeakVisible, labelElementId = _a.labelElementId, targetElement = _a.targetElement, id = _a.id, targetPoint = _a.targetPoint, useTargetPoint = _a.useTargetPoint, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, gapSpace = _a.gapSpace, coverTarget = _a.coverTarget, ariaLabel = _a.ariaLabel, doNotLayer = _a.doNotLayer, arrowDirection = _a.arrowDirection, target = _a.target, bounds = _a.bounds;
	        var submenuProps = this.state.submenuProps;
	        var hasIcons = !!(items && items.some(function (item) { return !!item.icon || !!item.iconProps; }));
	        var hasCheckmarks = !!(items && items.some(function (item) { return !!item.canCheck; }));
	        return (React.createElement(Callout_1.Callout, { target: target, targetElement: targetElement, targetPoint: targetPoint, useTargetPoint: useTargetPoint, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: 'ms-ContextualMenu-Callout', setInitialFocus: true, onDismiss: this.props.onDismiss, bounds: bounds },
	            React.createElement("div", { ref: function (host) { return _this._host = host; }, id: id, className: Utilities_1.css('ms-ContextualMenu-container', className) },
	                (items && items.length) ? (React.createElement(FocusZone_1.FocusZone, { className: 'ms-ContextualMenu is-open', direction: arrowDirection, ariaLabelledBy: labelElementId, ref: function (focusZone) { return _this._focusZone = focusZone; }, rootProps: { role: 'menu' } },
	                    React.createElement("ul", { className: 'ms-ContextualMenu-list is-open', onKeyDown: this._onKeyDown, "aria-label": ariaLabel }, items.map(function (item, index) { return (
	                    // If the item name is equal to '-', a divider will be generated.
	                    item.name === '-' ? (React.createElement("li", { role: 'separator', key: item.key || index, className: Utilities_1.css('ms-ContextualMenu-divider', item.className) })) : (React.createElement("li", { role: 'menuitem', title: item.title, key: item.key || index, className: Utilities_1.css('ms-ContextualMenu-item', item.className) }, _this._renderMenuItem(item, index, hasCheckmarks, hasIcons)))); })))) : (null),
	                submenuProps ? (React.createElement(ContextualMenu, __assign({}, submenuProps))) : (null))));
	    };
	    ContextualMenu.prototype._renderMenuItem = function (item, index, hasCheckmarks, hasIcons) {
	        if (item.onRender) {
	            return item.onRender(item);
	        }
	        // If the item is disabled then it should render as the button for proper styling.
	        if (item.href) {
	            return this._renderAnchorMenuItem(item, index, hasCheckmarks, hasIcons);
	        }
	        return this._renderButtonItem(item, index, hasCheckmarks, hasIcons);
	    };
	    ContextualMenu.prototype._renderAnchorMenuItem = function (item, index, hasCheckmarks, hasIcons) {
	        return (React.createElement("div", null,
	            React.createElement("a", __assign({}, Utilities_1.getNativeProps(item, Utilities_1.anchorProperties), { href: item.href, className: Utilities_1.css('ms-ContextualMenu-link', item.isDisabled || item.disabled ? 'is-disabled' : ''), role: 'menuitem', onClick: this._onAnchorClick.bind(this, item) }),
	                (hasIcons) ? (this._renderIcon(item)) : (null),
	                React.createElement("span", { className: 'ms-ContextualMenu-linkText ms-fontWeight-regular' },
	                    " ",
	                    item.name,
	                    " "))));
	    };
	    ContextualMenu.prototype._renderButtonItem = function (item, index, hasCheckmarks, hasIcons) {
	        var _this = this;
	        var _a = this.state, expandedMenuItemKey = _a.expandedMenuItemKey, subMenuId = _a.subMenuId;
	        var ariaLabel = '';
	        if (item.ariaLabel) {
	            ariaLabel = item.ariaLabel;
	        }
	        else if (item.name) {
	            ariaLabel = item.name;
	        }
	        var itemButtonProperties = {
	            className: Utilities_1.css('ms-ContextualMenu-link', { 'is-expanded': (expandedMenuItemKey === item.key) }),
	            onClick: this._onItemClick.bind(this, item),
	            onKeyDown: hasSubmenuItems(item) ? this._onItemKeyDown.bind(this, item) : null,
	            onMouseEnter: this._onItemMouseEnter.bind(this, item),
	            onMouseLeave: this._onMouseLeave,
	            onMouseDown: function (ev) { return _this._onItemMouseDown(item, ev); },
	            disabled: item.isDisabled || item.disabled,
	            role: 'menuitem',
	            href: item.href,
	            title: item.title,
	            'aria-label': ariaLabel,
	            'aria-haspopup': hasSubmenuItems(item) ? true : null,
	            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : null
	        };
	        return React.createElement('button', Utilities_1.assign({}, Utilities_1.getNativeProps(item, Utilities_1.buttonProperties), itemButtonProperties), this._renderMenuItemChildren(item, index, hasCheckmarks, hasIcons));
	    };
	    ContextualMenu.prototype._renderMenuItemChildren = function (item, index, hasCheckmarks, hasIcons) {
	        var isItemChecked = item.isChecked || item.checked;
	        return (React.createElement("div", { className: 'ms-ContextualMenu-linkContent' },
	            (hasCheckmarks) ? (React.createElement(Icon_1.Icon, { iconName: isItemChecked ? Icon_1.IconName.CheckMark : Icon_1.IconName.CustomIcon, className: 'ms-ContextualMenu-icon', onClick: this._onItemClick.bind(this, item) })) : (null),
	            (hasIcons) ? (this._renderIcon(item)) : (null),
	            React.createElement("span", { className: 'ms-ContextualMenu-itemText ms-fontWeight-regular' }, item.name),
	            hasSubmenuItems(item) ? (React.createElement(Icon_1.Icon, { className: 'ms-ContextualMenu-submenuChevron ms-Icon', iconName: Utilities_1.getRTL() ? Icon_1.IconName.ChevronLeft : Icon_1.IconName.ChevronRight })) : (null)));
	    };
	    ContextualMenu.prototype._renderIcon = function (item) {
	        // Only present to allow continued use of item.icon which is deprecated.
	        var iconProps = item.iconProps ? item.iconProps : {
	            iconName: Icon_1.IconName.CustomIcon,
	            className: 'ms-Icon--' + item.icon
	        };
	        // Use the default icon color for the known icon names
	        var iconColorClassName = iconProps.iconName === Icon_1.IconName.None ? '' : 'ms-ContextualMenu-iconColor';
	        var iconClassName = Utilities_1.css('ms-ContextualMenu-icon', iconColorClassName, iconProps.className);
	        return React.createElement(Icon_1.Icon, __assign({}, iconProps, { className: iconClassName }));
	    };
	    ContextualMenu.prototype._onKeyDown = function (ev) {
	        var submenuCloseKey = Utilities_1.getRTL() ? Utilities_1.KeyCodes.right : Utilities_1.KeyCodes.left;
	        if (ev.which === Utilities_1.KeyCodes.escape
	            || ev.which === Utilities_1.KeyCodes.tab
	            || (ev.which === submenuCloseKey && this.props.isSubMenu && this.props.arrowDirection === FocusZone_1.FocusZoneDirection.vertical)) {
	            // When a user presses escape, we will try to refocus the previous focused element.
	            this._isFocusingPreviousElement = true;
	            ev.preventDefault();
	            ev.stopPropagation();
	            this.dismiss(ev);
	        }
	    };
	    ContextualMenu.prototype._onItemMouseEnter = function (item, ev) {
	        var _this = this;
	        var targetElement = ev.currentTarget;
	        if (item.key !== this.state.expandedMenuItemKey) {
	            if (hasSubmenuItems(item)) {
	                this._enterTimerId = this._async.setTimeout(function () { return _this._onItemSubMenuExpand(item, targetElement); }, 500);
	            }
	            else {
	                this._enterTimerId = this._async.setTimeout(function () { return _this._onSubMenuDismiss(ev); }, 500);
	            }
	        }
	    };
	    ContextualMenu.prototype._onMouseLeave = function (ev) {
	        this._async.clearTimeout(this._enterTimerId);
	    };
	    ContextualMenu.prototype._onItemMouseDown = function (item, ev) {
	        if (item.onMouseDown) {
	            item.onMouseDown(item, ev);
	        }
	    };
	    ContextualMenu.prototype._onItemClick = function (item, ev) {
	        var items = (item.subMenuProps && item.subMenuProps.items) ? item.subMenuProps.items : item.items;
	        if (!items || !items.length) {
	            this._executeItemClick(item, ev);
	        }
	        else {
	            if (item.key === this.state.expandedMenuItemKey) {
	                this._onSubMenuDismiss(ev);
	            }
	            else {
	                this._onItemSubMenuExpand(item, ev.currentTarget);
	            }
	        }
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    ContextualMenu.prototype._onAnchorClick = function (item, ev) {
	        this._executeItemClick(item, ev);
	        ev.stopPropagation();
	    };
	    ContextualMenu.prototype._executeItemClick = function (item, ev) {
	        if (item.onClick) {
	            item.onClick(ev, item);
	        }
	        this.dismiss(ev, true);
	    };
	    ContextualMenu.prototype._onItemKeyDown = function (item, ev) {
	        var openKey = Utilities_1.getRTL() ? Utilities_1.KeyCodes.left : Utilities_1.KeyCodes.right;
	        if (ev.which === openKey) {
	            this._onItemSubMenuExpand(item, ev.currentTarget);
	        }
	    };
	    ContextualMenu.prototype._onItemSubMenuExpand = function (item, target) {
	        if (this.state.expandedMenuItemKey !== item.key) {
	            if (this.state.submenuProps) {
	                this._onSubMenuDismiss();
	            }
	            var submenuProps = {
	                items: item.items,
	                target: target,
	                onDismiss: this._onSubMenuDismiss,
	                isSubMenu: true,
	                id: this.state.subMenuId,
	                shouldFocusOnMount: true,
	                directionalHint: Utilities_1.getRTL() ? DirectionalHint_1.DirectionalHint.leftTopEdge : DirectionalHint_1.DirectionalHint.rightTopEdge,
	                className: this.props.className,
	                gapSpace: 0
	            };
	            if (item.subMenuProps) {
	                Utilities_1.assign(submenuProps, item.subMenuProps);
	            }
	            this.setState({
	                expandedMenuItemKey: item.key,
	                submenuProps: submenuProps,
	            });
	        }
	    };
	    ContextualMenu.prototype._onSubMenuDismiss = function (ev, dismissAll) {
	        if (dismissAll) {
	            this.dismiss(ev, dismissAll);
	        }
	        else {
	            this.setState({
	                dismissedMenuItemKey: this.state.expandedMenuItemKey,
	                expandedMenuItemKey: null,
	                submenuProps: null
	            });
	        }
	    };
	    ContextualMenu.prototype._setTargetWindowAndElement = function (target) {
	        if (target) {
	            if (typeof target === 'string') {
	                var currentDoc = Utilities_1.getDocument();
	                this._target = currentDoc ? currentDoc.querySelector(target) : null;
	                this._targetWindow = Utilities_1.getWindow();
	            }
	            else if (target.stopPropagation) {
	                this._target = target;
	                this._targetWindow = Utilities_1.getWindow(target.toElement);
	            }
	            else {
	                var targetElement = target;
	                this._target = target;
	                this._targetWindow = Utilities_1.getWindow(targetElement);
	            }
	        }
	        else {
	            this._targetWindow = Utilities_1.getWindow();
	        }
	    };
	    return ContextualMenu;
	}(BaseComponent_1.BaseComponent));
	// The default ContextualMenu properities have no items and beak, the default submenu direction is right and top.
	ContextualMenu.defaultProps = {
	    items: [],
	    shouldFocusOnMount: true,
	    isBeakVisible: false,
	    gapSpace: 0,
	    directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge,
	    beakWidth: 16,
	    arrowDirection: FocusZone_1.FocusZoneDirection.vertical,
	};
	__decorate([
	    Utilities_1.autobind
	], ContextualMenu.prototype, "dismiss", null);
	__decorate([
	    Utilities_1.autobind
	], ContextualMenu.prototype, "_onKeyDown", null);
	__decorate([
	    Utilities_1.autobind
	], ContextualMenu.prototype, "_onMouseLeave", null);
	__decorate([
	    Utilities_1.autobind
	], ContextualMenu.prototype, "_onSubMenuDismiss", null);
	exports.ContextualMenu = ContextualMenu;
	


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(131));
	


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(132));
	__export(__webpack_require__(134));
	__export(__webpack_require__(135));
	


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	/* tslint:disable */
	var React = __webpack_require__(1);
	__webpack_require__(133);
	var IconName_1 = __webpack_require__(134);
	var IconType_1 = __webpack_require__(135);
	var Image_1 = __webpack_require__(118);
	var Utilities_1 = __webpack_require__(8);
	exports.Icon = function (props) {
	    var customIcon = props.iconName === IconName_1.IconName.None;
	    if (props.iconType === IconType_1.IconType.Image) {
	        var containerClassName = Utilities_1.css('ms-Icon', 'ms-Icon-imageContainer', props.className);
	        return (React.createElement("div", { className: containerClassName },
	            React.createElement(Image_1.Image, __assign({}, props.imageProps))));
	    }
	    else {
	        var className = Utilities_1.css('ms-Icon', customIcon ? '' : ('ms-Icon--' + IconName_1.IconName[props.iconName]), props.className);
	        return React.createElement("i", __assign({}, Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties), { className: className }));
	    }
	};
	


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-Icon-imageContainer{overflow:hidden}.ms-Icon-Image{position:relative}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 134 */
/***/ function(module, exports) {

	"use strict";
	// Please keep alphabetized
	var IconName;
	(function (IconName) {
	    IconName[IconName["AADLogo"] = 0] = "AADLogo";
	    IconName[IconName["Accept"] = 1] = "Accept";
	    IconName[IconName["AccessLogo"] = 2] = "AccessLogo";
	    IconName[IconName["Accounts"] = 3] = "Accounts";
	    IconName[IconName["Add"] = 4] = "Add";
	    IconName[IconName["AddEvent"] = 5] = "AddEvent";
	    IconName[IconName["AddFavorite"] = 6] = "AddFavorite";
	    IconName[IconName["AddFavoriteFill"] = 7] = "AddFavoriteFill";
	    IconName[IconName["AddFriend"] = 8] = "AddFriend";
	    IconName[IconName["AddGroup"] = 9] = "AddGroup";
	    IconName[IconName["AddOnlineMeeting"] = 10] = "AddOnlineMeeting";
	    IconName[IconName["AddPhone"] = 11] = "AddPhone";
	    IconName[IconName["AddTo"] = 12] = "AddTo";
	    IconName[IconName["Admin"] = 13] = "Admin";
	    IconName[IconName["AdminALogo"] = 14] = "AdminALogo";
	    IconName[IconName["AdminCLogo"] = 15] = "AdminCLogo";
	    IconName[IconName["AdminDLogo"] = 16] = "AdminDLogo";
	    IconName[IconName["AdminELogo"] = 17] = "AdminELogo";
	    IconName[IconName["AdminLLogo"] = 18] = "AdminLLogo";
	    IconName[IconName["AdminMLogo"] = 19] = "AdminMLogo";
	    IconName[IconName["AdminOLogo"] = 20] = "AdminOLogo";
	    IconName[IconName["AdminPLogo"] = 21] = "AdminPLogo";
	    IconName[IconName["AdminSLogo"] = 22] = "AdminSLogo";
	    IconName[IconName["AdminYLogo"] = 23] = "AdminYLogo";
	    IconName[IconName["Airplane"] = 24] = "Airplane";
	    IconName[IconName["AirTickets"] = 25] = "AirTickets";
	    IconName[IconName["AlarmClock"] = 26] = "AlarmClock";
	    IconName[IconName["Album"] = 27] = "Album";
	    IconName[IconName["AlbumRemove"] = 28] = "AlbumRemove";
	    IconName[IconName["AlchemyLogo"] = 29] = "AlchemyLogo";
	    IconName[IconName["AlignCenter"] = 30] = "AlignCenter";
	    IconName[IconName["AlignLeft"] = 31] = "AlignLeft";
	    IconName[IconName["AlignRight"] = 32] = "AlignRight";
	    IconName[IconName["AndroidLogo"] = 33] = "AndroidLogo";
	    IconName[IconName["Annotation"] = 34] = "Annotation";
	    IconName[IconName["AppForOfficeLogo"] = 35] = "AppForOfficeLogo";
	    IconName[IconName["AppIconDefault"] = 36] = "AppIconDefault";
	    IconName[IconName["Arrivals"] = 37] = "Arrivals";
	    IconName[IconName["ArrowDownRight8"] = 38] = "ArrowDownRight8";
	    IconName[IconName["ArrowDownRightMirrored8"] = 39] = "ArrowDownRightMirrored8";
	    IconName[IconName["ArrowUpRight8"] = 40] = "ArrowUpRight8";
	    IconName[IconName["ArrowUpRightMirrored8"] = 41] = "ArrowUpRightMirrored8";
	    IconName[IconName["Articles"] = 42] = "Articles";
	    IconName[IconName["Ascending"] = 43] = "Ascending";
	    IconName[IconName["AssetLibrary"] = 44] = "AssetLibrary";
	    IconName[IconName["Asterisk"] = 45] = "Asterisk";
	    IconName[IconName["ATPLogo"] = 46] = "ATPLogo";
	    IconName[IconName["Attach"] = 47] = "Attach";
	    IconName[IconName["AustralianRules"] = 48] = "AustralianRules";
	    IconName[IconName["AutoEnhanceOff"] = 49] = "AutoEnhanceOff";
	    IconName[IconName["AutoEnhanceOn"] = 50] = "AutoEnhanceOn";
	    IconName[IconName["AutoRacing"] = 51] = "AutoRacing";
	    IconName[IconName["AwayStatus"] = 52] = "AwayStatus";
	    IconName[IconName["AzureLogo"] = 53] = "AzureLogo";
	    IconName[IconName["Back"] = 54] = "Back";
	    IconName[IconName["BackToWindow"] = 55] = "BackToWindow";
	    IconName[IconName["Badge"] = 56] = "Badge";
	    IconName[IconName["Balloons"] = 57] = "Balloons";
	    IconName[IconName["BarChart4"] = 58] = "BarChart4";
	    IconName[IconName["BarChartHorizontal"] = 59] = "BarChartHorizontal";
	    IconName[IconName["Baseball"] = 60] = "Baseball";
	    IconName[IconName["BidiLtr"] = 61] = "BidiLtr";
	    IconName[IconName["BidiRtl"] = 62] = "BidiRtl";
	    IconName[IconName["BingLogo"] = 63] = "BingLogo";
	    IconName[IconName["BlockContact"] = 64] = "BlockContact";
	    IconName[IconName["Blocked"] = 65] = "Blocked";
	    IconName[IconName["Blocked2"] = 66] = "Blocked2";
	    IconName[IconName["BlowingSnow"] = 67] = "BlowingSnow";
	    IconName[IconName["Boards"] = 68] = "Boards";
	    IconName[IconName["Bold"] = 69] = "Bold";
	    IconName[IconName["BookingsLogo"] = 70] = "BookingsLogo";
	    IconName[IconName["Bookmarks"] = 71] = "Bookmarks";
	    IconName[IconName["BookmarksMirrored"] = 72] = "BookmarksMirrored";
	    IconName[IconName["BoxLogo"] = 73] = "BoxLogo";
	    IconName[IconName["BranchFork"] = 74] = "BranchFork";
	    IconName[IconName["Breadcrumb"] = 75] = "Breadcrumb";
	    IconName[IconName["Brightness"] = 76] = "Brightness";
	    IconName[IconName["Broom"] = 77] = "Broom";
	    IconName[IconName["BufferTimeAfter"] = 78] = "BufferTimeAfter";
	    IconName[IconName["BufferTimeBefore"] = 79] = "BufferTimeBefore";
	    IconName[IconName["BufferTimeBoth"] = 80] = "BufferTimeBoth";
	    IconName[IconName["BulletedList"] = 81] = "BulletedList";
	    IconName[IconName["BulletedListMirrored"] = 82] = "BulletedListMirrored";
	    IconName[IconName["BusSolid"] = 83] = "BusSolid";
	    IconName[IconName["Cafe"] = 84] = "Cafe";
	    IconName[IconName["Cake"] = 85] = "Cake";
	    IconName[IconName["CalculatorAddition"] = 86] = "CalculatorAddition";
	    IconName[IconName["CalculatorSubtract"] = 87] = "CalculatorSubtract";
	    IconName[IconName["Calendar"] = 88] = "Calendar";
	    IconName[IconName["CalendarAgenda"] = 89] = "CalendarAgenda";
	    IconName[IconName["CalendarDay"] = 90] = "CalendarDay";
	    IconName[IconName["CalendarMirrored"] = 91] = "CalendarMirrored";
	    IconName[IconName["CalendarReply"] = 92] = "CalendarReply";
	    IconName[IconName["CalendarWeek"] = 93] = "CalendarWeek";
	    IconName[IconName["CalendarWorkWeek"] = 94] = "CalendarWorkWeek";
	    IconName[IconName["CaloriesAdd"] = 95] = "CaloriesAdd";
	    IconName[IconName["Camera"] = 96] = "Camera";
	    IconName[IconName["Cancel"] = 97] = "Cancel";
	    IconName[IconName["Car"] = 98] = "Car";
	    IconName[IconName["CaretBottomLeftSolid8"] = 99] = "CaretBottomLeftSolid8";
	    IconName[IconName["CaretBottomRightSolid8"] = 100] = "CaretBottomRightSolid8";
	    IconName[IconName["CaretDown8"] = 101] = "CaretDown8";
	    IconName[IconName["CaretDownSolid8"] = 102] = "CaretDownSolid8";
	    IconName[IconName["CaretHollow"] = 103] = "CaretHollow";
	    IconName[IconName["CaretHollowMirrored"] = 104] = "CaretHollowMirrored";
	    IconName[IconName["CaretLeft8"] = 105] = "CaretLeft8";
	    IconName[IconName["CaretLeftSolid8"] = 106] = "CaretLeftSolid8";
	    IconName[IconName["CaretRight8"] = 107] = "CaretRight8";
	    IconName[IconName["CaretRightSolid8"] = 108] = "CaretRightSolid8";
	    IconName[IconName["CaretSolid"] = 109] = "CaretSolid";
	    IconName[IconName["CaretSolidMirrored"] = 110] = "CaretSolidMirrored";
	    IconName[IconName["CaretTopLeftSolid8"] = 111] = "CaretTopLeftSolid8";
	    IconName[IconName["CaretTopRightSolid8"] = 112] = "CaretTopRightSolid8";
	    IconName[IconName["CaretUp8"] = 113] = "CaretUp8";
	    IconName[IconName["CaretUpSolid8"] = 114] = "CaretUpSolid8";
	    IconName[IconName["Cat"] = 115] = "Cat";
	    IconName[IconName["CellPhone"] = 116] = "CellPhone";
	    IconName[IconName["Certificate"] = 117] = "Certificate";
	    IconName[IconName["Chart"] = 118] = "Chart";
	    IconName[IconName["Chat"] = 119] = "Chat";
	    IconName[IconName["ChatInviteFriend"] = 120] = "ChatInviteFriend";
	    IconName[IconName["Checkbox"] = 121] = "Checkbox";
	    IconName[IconName["CheckboxComposite"] = 122] = "CheckboxComposite";
	    IconName[IconName["CheckboxIndeterminate"] = 123] = "CheckboxIndeterminate";
	    IconName[IconName["CheckList"] = 124] = "CheckList";
	    IconName[IconName["CheckMark"] = 125] = "CheckMark";
	    IconName[IconName["ChevronDown"] = 126] = "ChevronDown";
	    IconName[IconName["ChevronDownMed"] = 127] = "ChevronDownMed";
	    IconName[IconName["ChevronDownSmall"] = 128] = "ChevronDownSmall";
	    IconName[IconName["ChevronLeft"] = 129] = "ChevronLeft";
	    IconName[IconName["ChevronLeftMed"] = 130] = "ChevronLeftMed";
	    IconName[IconName["ChevronLeftSmall"] = 131] = "ChevronLeftSmall";
	    IconName[IconName["ChevronRight"] = 132] = "ChevronRight";
	    IconName[IconName["ChevronRightMed"] = 133] = "ChevronRightMed";
	    IconName[IconName["ChevronRightSmall"] = 134] = "ChevronRightSmall";
	    IconName[IconName["ChevronUp"] = 135] = "ChevronUp";
	    IconName[IconName["ChevronUpMed"] = 136] = "ChevronUpMed";
	    IconName[IconName["ChevronUpSmall"] = 137] = "ChevronUpSmall";
	    IconName[IconName["ChromeBack"] = 138] = "ChromeBack";
	    IconName[IconName["ChromeBackMirrored"] = 139] = "ChromeBackMirrored";
	    IconName[IconName["ChromeClose"] = 140] = "ChromeClose";
	    IconName[IconName["ChromeMinimize"] = 141] = "ChromeMinimize";
	    IconName[IconName["CircleFill"] = 142] = "CircleFill";
	    IconName[IconName["CircleHalfFull"] = 143] = "CircleHalfFull";
	    IconName[IconName["CirclePlus"] = 144] = "CirclePlus";
	    IconName[IconName["CircleRing"] = 145] = "CircleRing";
	    IconName[IconName["ClassNotebookLogo"] = 146] = "ClassNotebookLogo";
	    IconName[IconName["ClassroomLogo"] = 147] = "ClassroomLogo";
	    IconName[IconName["Clear"] = 148] = "Clear";
	    IconName[IconName["ClearFilter"] = 149] = "ClearFilter";
	    IconName[IconName["ClearFormatting"] = 150] = "ClearFormatting";
	    IconName[IconName["ClearNight"] = 151] = "ClearNight";
	    IconName[IconName["Clock"] = 152] = "Clock";
	    IconName[IconName["ClosedCaption"] = 153] = "ClosedCaption";
	    IconName[IconName["ClosePane"] = 154] = "ClosePane";
	    IconName[IconName["ClosePaneMirrored"] = 155] = "ClosePaneMirrored";
	    IconName[IconName["CloudAdd"] = 156] = "CloudAdd";
	    IconName[IconName["CloudDownload"] = 157] = "CloudDownload";
	    IconName[IconName["CloudUpload"] = 158] = "CloudUpload";
	    IconName[IconName["CloudWeather"] = 159] = "CloudWeather";
	    IconName[IconName["Cloudy"] = 160] = "Cloudy";
	    IconName[IconName["Cocktails"] = 161] = "Cocktails";
	    IconName[IconName["Code"] = 162] = "Code";
	    IconName[IconName["Coffee"] = 163] = "Coffee";
	    IconName[IconName["CollabsDBLogo"] = 164] = "CollabsDBLogo";
	    IconName[IconName["CollapseMenu"] = 165] = "CollapseMenu";
	    IconName[IconName["CollegeFootball"] = 166] = "CollegeFootball";
	    IconName[IconName["CollegeHoops"] = 167] = "CollegeHoops";
	    IconName[IconName["Color"] = 168] = "Color";
	    IconName[IconName["Combine"] = 169] = "Combine";
	    IconName[IconName["CompassNW"] = 170] = "CompassNW";
	    IconName[IconName["Completed"] = 171] = "Completed";
	    IconName[IconName["CompletedSolid"] = 172] = "CompletedSolid";
	    IconName[IconName["Contact"] = 173] = "Contact";
	    IconName[IconName["ContactCard"] = 174] = "ContactCard";
	    IconName[IconName["ContactInfo"] = 175] = "ContactInfo";
	    IconName[IconName["Contrast"] = 176] = "Contrast";
	    IconName[IconName["Copy"] = 177] = "Copy";
	    IconName[IconName["Cotton"] = 178] = "Cotton";
	    IconName[IconName["Cricket"] = 179] = "Cricket";
	    IconName[IconName["CSS"] = 180] = "CSS";
	    IconName[IconName["CustomIcon"] = 181] = "CustomIcon";
	    IconName[IconName["CustomList"] = 182] = "CustomList";
	    IconName[IconName["CustomListMirrored"] = 183] = "CustomListMirrored";
	    IconName[IconName["Cycling"] = 184] = "Cycling";
	    IconName[IconName["DataConnectionLibrary"] = 185] = "DataConnectionLibrary";
	    IconName[IconName["DateTime"] = 186] = "DateTime";
	    IconName[IconName["DateTime2"] = 187] = "DateTime2";
	    IconName[IconName["DateTimeMirrored"] = 188] = "DateTimeMirrored";
	    IconName[IconName["DecreaseIndentLegacy"] = 189] = "DecreaseIndentLegacy";
	    IconName[IconName["Delete"] = 190] = "Delete";
	    IconName[IconName["DelveAnalytics"] = 191] = "DelveAnalytics";
	    IconName[IconName["DelveAnalyticsLogo"] = 192] = "DelveAnalyticsLogo";
	    IconName[IconName["DelveLogo"] = 193] = "DelveLogo";
	    IconName[IconName["Descending"] = 194] = "Descending";
	    IconName[IconName["Design"] = 195] = "Design";
	    IconName[IconName["DeveloperTools"] = 196] = "DeveloperTools";
	    IconName[IconName["Devices3"] = 197] = "Devices3";
	    IconName[IconName["Devices4"] = 198] = "Devices4";
	    IconName[IconName["Dialpad"] = 199] = "Dialpad";
	    IconName[IconName["Dictionary"] = 200] = "Dictionary";
	    IconName[IconName["DietPlanNotebook"] = 201] = "DietPlanNotebook";
	    IconName[IconName["DisableUpdates"] = 202] = "DisableUpdates";
	    IconName[IconName["Dislike"] = 203] = "Dislike";
	    IconName[IconName["DockLeft"] = 204] = "DockLeft";
	    IconName[IconName["DockLeftMirrored"] = 205] = "DockLeftMirrored";
	    IconName[IconName["DockRight"] = 206] = "DockRight";
	    IconName[IconName["DocLibrary"] = 207] = "DocLibrary";
	    IconName[IconName["DocsLogo"] = 208] = "DocsLogo";
	    IconName[IconName["Document"] = 209] = "Document";
	    IconName[IconName["Documentation"] = 210] = "Documentation";
	    IconName[IconName["DocumentReply"] = 211] = "DocumentReply";
	    IconName[IconName["DocumentSearch"] = 212] = "DocumentSearch";
	    IconName[IconName["DocumentSet"] = 213] = "DocumentSet";
	    IconName[IconName["Door"] = 214] = "Door";
	    IconName[IconName["DoubleBookmark"] = 215] = "DoubleBookmark";
	    IconName[IconName["DoubleChevronDown"] = 216] = "DoubleChevronDown";
	    IconName[IconName["DoubleChevronDown12"] = 217] = "DoubleChevronDown12";
	    IconName[IconName["DoubleChevronLeft"] = 218] = "DoubleChevronLeft";
	    IconName[IconName["DoubleChevronLeft12"] = 219] = "DoubleChevronLeft12";
	    IconName[IconName["DoubleChevronLeftMed"] = 220] = "DoubleChevronLeftMed";
	    IconName[IconName["DoubleChevronLeftMedMirrored"] = 221] = "DoubleChevronLeftMedMirrored";
	    IconName[IconName["DoubleChevronRight"] = 222] = "DoubleChevronRight";
	    IconName[IconName["DoubleChevronRight12"] = 223] = "DoubleChevronRight12";
	    IconName[IconName["DoubleChevronUp"] = 224] = "DoubleChevronUp";
	    IconName[IconName["DoubleChevronUp12"] = 225] = "DoubleChevronUp12";
	    IconName[IconName["Down"] = 226] = "Down";
	    IconName[IconName["Download"] = 227] = "Download";
	    IconName[IconName["DRM"] = 228] = "DRM";
	    IconName[IconName["Drop"] = 229] = "Drop";
	    IconName[IconName["DropboxLogo"] = 230] = "DropboxLogo";
	    IconName[IconName["Dropdown"] = 231] = "Dropdown";
	    IconName[IconName["Duststorm"] = 232] = "Duststorm";
	    IconName[IconName["Dynamics365Logo"] = 233] = "Dynamics365Logo";
	    IconName[IconName["DynamicSMBLogo"] = 234] = "DynamicSMBLogo";
	    IconName[IconName["EatDrink"] = 235] = "EatDrink";
	    IconName[IconName["EdgeLogo"] = 236] = "EdgeLogo";
	    IconName[IconName["Edit"] = 237] = "Edit";
	    IconName[IconName["EditMail"] = 238] = "EditMail";
	    IconName[IconName["EditMirrored"] = 239] = "EditMirrored";
	    IconName[IconName["EditNote"] = 240] = "EditNote";
	    IconName[IconName["EditPhoto"] = 241] = "EditPhoto";
	    IconName[IconName["EditStyle"] = 242] = "EditStyle";
	    IconName[IconName["Embed"] = 243] = "Embed";
	    IconName[IconName["EMI"] = 244] = "EMI";
	    IconName[IconName["Emoji"] = 245] = "Emoji";
	    IconName[IconName["Emoji2"] = 246] = "Emoji2";
	    IconName[IconName["EmojiDisappointed"] = 247] = "EmojiDisappointed";
	    IconName[IconName["EmojiNeutral"] = 248] = "EmojiNeutral";
	    IconName[IconName["EmptyRecycleBin"] = 249] = "EmptyRecycleBin";
	    IconName[IconName["Equalizer"] = 250] = "Equalizer";
	    IconName[IconName["EraseTool"] = 251] = "EraseTool";
	    IconName[IconName["Error"] = 252] = "Error";
	    IconName[IconName["ErrorBadge"] = 253] = "ErrorBadge";
	    IconName[IconName["Event"] = 254] = "Event";
	    IconName[IconName["EventInfo"] = 255] = "EventInfo";
	    IconName[IconName["ExcelDocument"] = 256] = "ExcelDocument";
	    IconName[IconName["ExcelLogo"] = 257] = "ExcelLogo";
	    IconName[IconName["ExchangeLogo"] = 258] = "ExchangeLogo";
	    IconName[IconName["ExpandMenu"] = 259] = "ExpandMenu";
	    IconName[IconName["FabricAssetLibrary"] = 260] = "FabricAssetLibrary";
	    IconName[IconName["FabricDataConnectionLibrary"] = 261] = "FabricDataConnectionLibrary";
	    IconName[IconName["FabricDocLibrary"] = 262] = "FabricDocLibrary";
	    IconName[IconName["FabricFolder"] = 263] = "FabricFolder";
	    IconName[IconName["FabricFolderFill"] = 264] = "FabricFolderFill";
	    IconName[IconName["FabricFolderSearch"] = 265] = "FabricFolderSearch";
	    IconName[IconName["FabricFormLibrary"] = 266] = "FabricFormLibrary";
	    IconName[IconName["FabricFormLibraryMirrored"] = 267] = "FabricFormLibraryMirrored";
	    IconName[IconName["FabricMovetoFolder"] = 268] = "FabricMovetoFolder";
	    IconName[IconName["FabricNewFolder"] = 269] = "FabricNewFolder";
	    IconName[IconName["FabricOpenFolderHorizontal"] = 270] = "FabricOpenFolderHorizontal";
	    IconName[IconName["FabricPictureLibrary"] = 271] = "FabricPictureLibrary";
	    IconName[IconName["FabricPublicFolder"] = 272] = "FabricPublicFolder";
	    IconName[IconName["FabricReportLibrary"] = 273] = "FabricReportLibrary";
	    IconName[IconName["FabricReportLibraryMirrored"] = 274] = "FabricReportLibraryMirrored";
	    IconName[IconName["FabricSyncFolder"] = 275] = "FabricSyncFolder";
	    IconName[IconName["FabricUnsyncFolder"] = 276] = "FabricUnsyncFolder";
	    IconName[IconName["FacebookLogo"] = 277] = "FacebookLogo";
	    IconName[IconName["Family"] = 278] = "Family";
	    IconName[IconName["FangBody"] = 279] = "FangBody";
	    IconName[IconName["FavoriteList"] = 280] = "FavoriteList";
	    IconName[IconName["FavoriteStar"] = 281] = "FavoriteStar";
	    IconName[IconName["FavoriteStarFill"] = 282] = "FavoriteStarFill";
	    IconName[IconName["Fax"] = 283] = "Fax";
	    IconName[IconName["Ferry"] = 284] = "Ferry";
	    IconName[IconName["FerrySolid"] = 285] = "FerrySolid";
	    IconName[IconName["Filter"] = 286] = "Filter";
	    IconName[IconName["Filters"] = 287] = "Filters";
	    IconName[IconName["Financial"] = 288] = "Financial";
	    IconName[IconName["Fingerprint"] = 289] = "Fingerprint";
	    IconName[IconName["Flag"] = 290] = "Flag";
	    IconName[IconName["FlickDown"] = 291] = "FlickDown";
	    IconName[IconName["FlickLeft"] = 292] = "FlickLeft";
	    IconName[IconName["FlickRight"] = 293] = "FlickRight";
	    IconName[IconName["FlickUp"] = 294] = "FlickUp";
	    IconName[IconName["Flow"] = 295] = "Flow";
	    IconName[IconName["Fog"] = 296] = "Fog";
	    IconName[IconName["Folder"] = 297] = "Folder";
	    IconName[IconName["FolderFill"] = 298] = "FolderFill";
	    IconName[IconName["FolderHorizontal"] = 299] = "FolderHorizontal";
	    IconName[IconName["FolderOpen"] = 300] = "FolderOpen";
	    IconName[IconName["FolderSearch"] = 301] = "FolderSearch";
	    IconName[IconName["Font"] = 302] = "Font";
	    IconName[IconName["FontColor"] = 303] = "FontColor";
	    IconName[IconName["FontDecrease"] = 304] = "FontDecrease";
	    IconName[IconName["FontIncrease"] = 305] = "FontIncrease";
	    IconName[IconName["FontSize"] = 306] = "FontSize";
	    IconName[IconName["FormLibrary"] = 307] = "FormLibrary";
	    IconName[IconName["FormLibraryMirrored"] = 308] = "FormLibraryMirrored";
	    IconName[IconName["Forward"] = 309] = "Forward";
	    IconName[IconName["ForwardEvent"] = 310] = "ForwardEvent";
	    IconName[IconName["Freezing"] = 311] = "Freezing";
	    IconName[IconName["Frigid"] = 312] = "Frigid";
	    IconName[IconName["FullCircleMask"] = 313] = "FullCircleMask";
	    IconName[IconName["FullScreen"] = 314] = "FullScreen";
	    IconName[IconName["Generate"] = 315] = "Generate";
	    IconName[IconName["Giftbox"] = 316] = "Giftbox";
	    IconName[IconName["GiftCard"] = 317] = "GiftCard";
	    IconName[IconName["Glasses"] = 318] = "Glasses";
	    IconName[IconName["Glimmer"] = 319] = "Glimmer";
	    IconName[IconName["GlobalNavButton"] = 320] = "GlobalNavButton";
	    IconName[IconName["Globe"] = 321] = "Globe";
	    IconName[IconName["GlobeFavorite"] = 322] = "GlobeFavorite";
	    IconName[IconName["Golf"] = 323] = "Golf";
	    IconName[IconName["GoogleDriveLogo"] = 324] = "GoogleDriveLogo";
	    IconName[IconName["GotoToday"] = 325] = "GotoToday";
	    IconName[IconName["GripperTool"] = 326] = "GripperTool";
	    IconName[IconName["Group"] = 327] = "Group";
	    IconName[IconName["GroupedAscending"] = 328] = "GroupedAscending";
	    IconName[IconName["GroupedDescending"] = 329] = "GroupedDescending";
	    IconName[IconName["GroupedList"] = 330] = "GroupedList";
	    IconName[IconName["HailDay"] = 331] = "HailDay";
	    IconName[IconName["HailNight"] = 332] = "HailNight";
	    IconName[IconName["Handwriting"] = 333] = "Handwriting";
	    IconName[IconName["Header1"] = 334] = "Header1";
	    IconName[IconName["Header2"] = 335] = "Header2";
	    IconName[IconName["Header3"] = 336] = "Header3";
	    IconName[IconName["Header4"] = 337] = "Header4";
	    IconName[IconName["Headset"] = 338] = "Headset";
	    IconName[IconName["Health"] = 339] = "Health";
	    IconName[IconName["Heart"] = 340] = "Heart";
	    IconName[IconName["HeartFill"] = 341] = "HeartFill";
	    IconName[IconName["Help"] = 342] = "Help";
	    IconName[IconName["HelpMirrored"] = 343] = "HelpMirrored";
	    IconName[IconName["Hide"] = 344] = "Hide";
	    IconName[IconName["Hide2"] = 345] = "Hide2";
	    IconName[IconName["History"] = 346] = "History";
	    IconName[IconName["Home"] = 347] = "Home";
	    IconName[IconName["HomeSolid"] = 348] = "HomeSolid";
	    IconName[IconName["Hospital"] = 349] = "Hospital";
	    IconName[IconName["Hotel"] = 350] = "Hotel";
	    IconName[IconName["Important"] = 351] = "Important";
	    IconName[IconName["InboxCheck"] = 352] = "InboxCheck";
	    IconName[IconName["IncidentTriangle"] = 353] = "IncidentTriangle";
	    IconName[IconName["IncreaseIndentLegacy"] = 354] = "IncreaseIndentLegacy";
	    IconName[IconName["Info"] = 355] = "Info";
	    IconName[IconName["Info2"] = 356] = "Info2";
	    IconName[IconName["InsertTextBox"] = 357] = "InsertTextBox";
	    IconName[IconName["InternetSharing"] = 358] = "InternetSharing";
	    IconName[IconName["iOSAppStoreLogo"] = 359] = "iOSAppStoreLogo";
	    IconName[IconName["IssueTracking"] = 360] = "IssueTracking";
	    IconName[IconName["IssueTrackingMirrored"] = 361] = "IssueTrackingMirrored";
	    IconName[IconName["Italic"] = 362] = "Italic";
	    IconName[IconName["JoinOnlineMeeting"] = 363] = "JoinOnlineMeeting";
	    IconName[IconName["JS"] = 364] = "JS";
	    IconName[IconName["Label"] = 365] = "Label";
	    IconName[IconName["LandscapeOrientation"] = 366] = "LandscapeOrientation";
	    IconName[IconName["LaptopSelected"] = 367] = "LaptopSelected";
	    IconName[IconName["LargeGrid"] = 368] = "LargeGrid";
	    IconName[IconName["Library"] = 369] = "Library";
	    IconName[IconName["Lifesaver"] = 370] = "Lifesaver";
	    IconName[IconName["LifesaverLock"] = 371] = "LifesaverLock";
	    IconName[IconName["Light"] = 372] = "Light";
	    IconName[IconName["Lightbulb"] = 373] = "Lightbulb";
	    IconName[IconName["LightningBolt"] = 374] = "LightningBolt";
	    IconName[IconName["Like"] = 375] = "Like";
	    IconName[IconName["Link"] = 376] = "Link";
	    IconName[IconName["List"] = 377] = "List";
	    IconName[IconName["ListMirrored"] = 378] = "ListMirrored";
	    IconName[IconName["Location"] = 379] = "Location";
	    IconName[IconName["LocationCircle"] = 380] = "LocationCircle";
	    IconName[IconName["LocationDot"] = 381] = "LocationDot";
	    IconName[IconName["LocationFill"] = 382] = "LocationFill";
	    IconName[IconName["Lock"] = 383] = "Lock";
	    IconName[IconName["LowerBrightness"] = 384] = "LowerBrightness";
	    IconName[IconName["LyncLogo"] = 385] = "LyncLogo";
	    IconName[IconName["Mail"] = 386] = "Mail";
	    IconName[IconName["MailAlert"] = 387] = "MailAlert";
	    IconName[IconName["MailCheck"] = 388] = "MailCheck";
	    IconName[IconName["MailFill"] = 389] = "MailFill";
	    IconName[IconName["MailForward"] = 390] = "MailForward";
	    IconName[IconName["MailForwardMirrored"] = 391] = "MailForwardMirrored";
	    IconName[IconName["MailLowImportance"] = 392] = "MailLowImportance";
	    IconName[IconName["MailPause"] = 393] = "MailPause";
	    IconName[IconName["MailRepeat"] = 394] = "MailRepeat";
	    IconName[IconName["MailReply"] = 395] = "MailReply";
	    IconName[IconName["MailReplyAll"] = 396] = "MailReplyAll";
	    IconName[IconName["MailReplyAllMirrored"] = 397] = "MailReplyAllMirrored";
	    IconName[IconName["MailReplyMirrored"] = 398] = "MailReplyMirrored";
	    IconName[IconName["MapDirections"] = 399] = "MapDirections";
	    IconName[IconName["MapPin"] = 400] = "MapPin";
	    IconName[IconName["Market"] = 401] = "Market";
	    IconName[IconName["MarketDown"] = 402] = "MarketDown";
	    IconName[IconName["Megaphone"] = 403] = "Megaphone";
	    IconName[IconName["Memo"] = 404] = "Memo";
	    IconName[IconName["Merge"] = 405] = "Merge";
	    IconName[IconName["Message"] = 406] = "Message";
	    IconName[IconName["MessageFill"] = 407] = "MessageFill";
	    IconName[IconName["Microphone"] = 408] = "Microphone";
	    IconName[IconName["MicrosoftStaffhubLogo"] = 409] = "MicrosoftStaffhubLogo";
	    IconName[IconName["MiniLink"] = 410] = "MiniLink";
	    IconName[IconName["MobileSelected"] = 411] = "MobileSelected";
	    IconName[IconName["Money"] = 412] = "Money";
	    IconName[IconName["More"] = 413] = "More";
	    IconName[IconName["MoreSports"] = 414] = "MoreSports";
	    IconName[IconName["Move"] = 415] = "Move";
	    IconName[IconName["MoveToFolder"] = 416] = "MoveToFolder";
	    IconName[IconName["MSNLogo"] = 417] = "MSNLogo";
	    IconName[IconName["MultiSelect"] = 418] = "MultiSelect";
	    IconName[IconName["MultiSelectMirrored"] = 419] = "MultiSelectMirrored";
	    IconName[IconName["MusicInCollection"] = 420] = "MusicInCollection";
	    IconName[IconName["MusicInCollectionFill"] = 421] = "MusicInCollectionFill";
	    IconName[IconName["MusicNote"] = 422] = "MusicNote";
	    IconName[IconName["Nav2DMapView"] = 423] = "Nav2DMapView";
	    IconName[IconName["NewFolder"] = 424] = "NewFolder";
	    IconName[IconName["News"] = 425] = "News";
	    IconName[IconName["None"] = 426] = "None";
	    IconName[IconName["NoteForward"] = 427] = "NoteForward";
	    IconName[IconName["NotePinned"] = 428] = "NotePinned";
	    IconName[IconName["NoteReply"] = 429] = "NoteReply";
	    IconName[IconName["NumberedList"] = 430] = "NumberedList";
	    IconName[IconName["NumberField"] = 431] = "NumberField";
	    IconName[IconName["OfficeAssistantLogo"] = 432] = "OfficeAssistantLogo";
	    IconName[IconName["OfficeFormLogo"] = 433] = "OfficeFormLogo";
	    IconName[IconName["OfficeLogo"] = 434] = "OfficeLogo";
	    IconName[IconName["OfficeStoreLogo"] = 435] = "OfficeStoreLogo";
	    IconName[IconName["OfficeVideoLogo"] = 436] = "OfficeVideoLogo";
	    IconName[IconName["OfflineOneDriveParachute"] = 437] = "OfflineOneDriveParachute";
	    IconName[IconName["OfflineOneDriveParachuteDisabled"] = 438] = "OfflineOneDriveParachuteDisabled";
	    IconName[IconName["OneDrive"] = 439] = "OneDrive";
	    IconName[IconName["OneDriveAdd"] = 440] = "OneDriveAdd";
	    IconName[IconName["OneNoteEduLogo"] = 441] = "OneNoteEduLogo";
	    IconName[IconName["OneNoteLogo"] = 442] = "OneNoteLogo";
	    IconName[IconName["OpenFile"] = 443] = "OpenFile";
	    IconName[IconName["OpenFolderHorizontal"] = 444] = "OpenFolderHorizontal";
	    IconName[IconName["OpenInNewWindow"] = 445] = "OpenInNewWindow";
	    IconName[IconName["OpenPane"] = 446] = "OpenPane";
	    IconName[IconName["OpenPaneMirrored"] = 447] = "OpenPaneMirrored";
	    IconName[IconName["Org"] = 448] = "Org";
	    IconName[IconName["OutlookLogo"] = 449] = "OutlookLogo";
	    IconName[IconName["OutOfOffice"] = 450] = "OutOfOffice";
	    IconName[IconName["Package"] = 451] = "Package";
	    IconName[IconName["Page"] = 452] = "Page";
	    IconName[IconName["PageAdd"] = 453] = "PageAdd";
	    IconName[IconName["PageCheckedin"] = 454] = "PageCheckedin";
	    IconName[IconName["PageCheckedOut"] = 455] = "PageCheckedOut";
	    IconName[IconName["PageLeft"] = 456] = "PageLeft";
	    IconName[IconName["PageRight"] = 457] = "PageRight";
	    IconName[IconName["PageSolid"] = 458] = "PageSolid";
	    IconName[IconName["PanoIndicator"] = 459] = "PanoIndicator";
	    IconName[IconName["ParatureLogo"] = 460] = "ParatureLogo";
	    IconName[IconName["PartlyCloudyDay"] = 461] = "PartlyCloudyDay";
	    IconName[IconName["PartlyCloudyNight"] = 462] = "PartlyCloudyNight";
	    IconName[IconName["PartyLeader"] = 463] = "PartyLeader";
	    IconName[IconName["Pause"] = 464] = "Pause";
	    IconName[IconName["PaymentCard"] = 465] = "PaymentCard";
	    IconName[IconName["PC1"] = 466] = "PC1";
	    IconName[IconName["PDF"] = 467] = "PDF";
	    IconName[IconName["PencilReply"] = 468] = "PencilReply";
	    IconName[IconName["People"] = 469] = "People";
	    IconName[IconName["PeopleAdd"] = 470] = "PeopleAdd";
	    IconName[IconName["PeopleAlert"] = 471] = "PeopleAlert";
	    IconName[IconName["PeopleBlock"] = 472] = "PeopleBlock";
	    IconName[IconName["PeoplePause"] = 473] = "PeoplePause";
	    IconName[IconName["PeopleRepeat"] = 474] = "PeopleRepeat";
	    IconName[IconName["Permissions"] = 475] = "Permissions";
	    IconName[IconName["Phone"] = 476] = "Phone";
	    IconName[IconName["Photo2"] = 477] = "Photo2";
	    IconName[IconName["Photo2Add"] = 478] = "Photo2Add";
	    IconName[IconName["Photo2Remove"] = 479] = "Photo2Remove";
	    IconName[IconName["PhotoCollection"] = 480] = "PhotoCollection";
	    IconName[IconName["Picture"] = 481] = "Picture";
	    IconName[IconName["PictureLibrary"] = 482] = "PictureLibrary";
	    IconName[IconName["PieDouble"] = 483] = "PieDouble";
	    IconName[IconName["Pill"] = 484] = "Pill";
	    IconName[IconName["Pin"] = 485] = "Pin";
	    IconName[IconName["Pinned"] = 486] = "Pinned";
	    IconName[IconName["PinnedFill"] = 487] = "PinnedFill";
	    IconName[IconName["Planner"] = 488] = "Planner";
	    IconName[IconName["Play"] = 489] = "Play";
	    IconName[IconName["PlayerSettings"] = 490] = "PlayerSettings";
	    IconName[IconName["POI"] = 491] = "POI";
	    IconName[IconName["PostUpdate"] = 492] = "PostUpdate";
	    IconName[IconName["PowerApps"] = 493] = "PowerApps";
	    IconName[IconName["PowerApps2Logo"] = 494] = "PowerApps2Logo";
	    IconName[IconName["PowerAppsLogo"] = 495] = "PowerAppsLogo";
	    IconName[IconName["PowerBILogo"] = 496] = "PowerBILogo";
	    IconName[IconName["PowerPointDocument"] = 497] = "PowerPointDocument";
	    IconName[IconName["PowerPointLogo"] = 498] = "PowerPointLogo";
	    IconName[IconName["Precipitation"] = 499] = "Precipitation";
	    IconName[IconName["PresenceChickletVideo"] = 500] = "PresenceChickletVideo";
	    IconName[IconName["Preview"] = 501] = "Preview";
	    IconName[IconName["PreviewLink"] = 502] = "PreviewLink";
	    IconName[IconName["Print"] = 503] = "Print";
	    IconName[IconName["PrintfaxPrinterFile"] = 504] = "PrintfaxPrinterFile";
	    IconName[IconName["Product"] = 505] = "Product";
	    IconName[IconName["ProFootball"] = 506] = "ProFootball";
	    IconName[IconName["ProHockey"] = 507] = "ProHockey";
	    IconName[IconName["ProjectLogo"] = 508] = "ProjectLogo";
	    IconName[IconName["ProtectedDocument"] = 509] = "ProtectedDocument";
	    IconName[IconName["PublicCalendar"] = 510] = "PublicCalendar";
	    IconName[IconName["PublicContactCard"] = 511] = "PublicContactCard";
	    IconName[IconName["PublicEmail"] = 512] = "PublicEmail";
	    IconName[IconName["PublicFolder"] = 513] = "PublicFolder";
	    IconName[IconName["Puzzle"] = 514] = "Puzzle";
	    IconName[IconName["Questionnaire"] = 515] = "Questionnaire";
	    IconName[IconName["QuestionnaireMirrored"] = 516] = "QuestionnaireMirrored";
	    IconName[IconName["QuickNote"] = 517] = "QuickNote";
	    IconName[IconName["RadioBtnOn"] = 518] = "RadioBtnOn";
	    IconName[IconName["RadioBullet"] = 519] = "RadioBullet";
	    IconName[IconName["Rain"] = 520] = "Rain";
	    IconName[IconName["RainShowersDay"] = 521] = "RainShowersDay";
	    IconName[IconName["RainShowersNight"] = 522] = "RainShowersNight";
	    IconName[IconName["RainSnow"] = 523] = "RainSnow";
	    IconName[IconName["Read"] = 524] = "Read";
	    IconName[IconName["ReadingMode"] = 525] = "ReadingMode";
	    IconName[IconName["ReceiptCheck"] = 526] = "ReceiptCheck";
	    IconName[IconName["ReceiptForward"] = 527] = "ReceiptForward";
	    IconName[IconName["ReceiptReply"] = 528] = "ReceiptReply";
	    IconName[IconName["Recent"] = 529] = "Recent";
	    IconName[IconName["RecurringEvent"] = 530] = "RecurringEvent";
	    IconName[IconName["RecurringTask"] = 531] = "RecurringTask";
	    IconName[IconName["RecycleBin"] = 532] = "RecycleBin";
	    IconName[IconName["RedEye"] = 533] = "RedEye";
	    IconName[IconName["Redo"] = 534] = "Redo";
	    IconName[IconName["Refresh"] = 535] = "Refresh";
	    IconName[IconName["ReminderGroup"] = 536] = "ReminderGroup";
	    IconName[IconName["Remove"] = 537] = "Remove";
	    IconName[IconName["RemoveEvent"] = 538] = "RemoveEvent";
	    IconName[IconName["RemoveFilter"] = 539] = "RemoveFilter";
	    IconName[IconName["RemoveLink"] = 540] = "RemoveLink";
	    IconName[IconName["RemoveOccurrence"] = 541] = "RemoveOccurrence";
	    IconName[IconName["Rename"] = 542] = "Rename";
	    IconName[IconName["ReopenPages"] = 543] = "ReopenPages";
	    IconName[IconName["Repair"] = 544] = "Repair";
	    IconName[IconName["Reply"] = 545] = "Reply";
	    IconName[IconName["ReplyAll"] = 546] = "ReplyAll";
	    IconName[IconName["ReplyAllAlt"] = 547] = "ReplyAllAlt";
	    IconName[IconName["ReplyAllMirrored"] = 548] = "ReplyAllMirrored";
	    IconName[IconName["ReplyAlt"] = 549] = "ReplyAlt";
	    IconName[IconName["ReplyMirrored"] = 550] = "ReplyMirrored";
	    IconName[IconName["ReportLibrary"] = 551] = "ReportLibrary";
	    IconName[IconName["ReportLibraryMirrored"] = 552] = "ReportLibraryMirrored";
	    IconName[IconName["ReturnToSession"] = 553] = "ReturnToSession";
	    IconName[IconName["RevToggleKey"] = 554] = "RevToggleKey";
	    IconName[IconName["Ribbon"] = 555] = "Ribbon";
	    IconName[IconName["RightDoubleQuote"] = 556] = "RightDoubleQuote";
	    IconName[IconName["Ringer"] = 557] = "Ringer";
	    IconName[IconName["Room"] = 558] = "Room";
	    IconName[IconName["Rotate"] = 559] = "Rotate";
	    IconName[IconName["Rugby"] = 560] = "Rugby";
	    IconName[IconName["Running"] = 561] = "Running";
	    IconName[IconName["Sad"] = 562] = "Sad";
	    IconName[IconName["Save"] = 563] = "Save";
	    IconName[IconName["SaveAs"] = 564] = "SaveAs";
	    IconName[IconName["Search"] = 565] = "Search";
	    IconName[IconName["Section"] = 566] = "Section";
	    IconName[IconName["Sections"] = 567] = "Sections";
	    IconName[IconName["SecurityGroup"] = 568] = "SecurityGroup";
	    IconName[IconName["Send"] = 569] = "Send";
	    IconName[IconName["SendMirrored"] = 570] = "SendMirrored";
	    IconName[IconName["SetAction"] = 571] = "SetAction";
	    IconName[IconName["Settings"] = 572] = "Settings";
	    IconName[IconName["Share"] = 573] = "Share";
	    IconName[IconName["ShareiOS"] = 574] = "ShareiOS";
	    IconName[IconName["SharepointLogo"] = 575] = "SharepointLogo";
	    IconName[IconName["Shield"] = 576] = "Shield";
	    IconName[IconName["Shop"] = 577] = "Shop";
	    IconName[IconName["ShoppingCart"] = 578] = "ShoppingCart";
	    IconName[IconName["ShowResults"] = 579] = "ShowResults";
	    IconName[IconName["ShowResultsMirrored"] = 580] = "ShowResultsMirrored";
	    IconName[IconName["SidePanel"] = 581] = "SidePanel";
	    IconName[IconName["SingleBookmark"] = 582] = "SingleBookmark";
	    IconName[IconName["SIPMove"] = 583] = "SIPMove";
	    IconName[IconName["SkypeCheck"] = 584] = "SkypeCheck";
	    IconName[IconName["SkypeCircleCheck"] = 585] = "SkypeCircleCheck";
	    IconName[IconName["SkypeCircleClock"] = 586] = "SkypeCircleClock";
	    IconName[IconName["SkypeCircleMinus"] = 587] = "SkypeCircleMinus";
	    IconName[IconName["SkypeClock"] = 588] = "SkypeClock";
	    IconName[IconName["SkypeLogo"] = 589] = "SkypeLogo";
	    IconName[IconName["SkypeMessage"] = 590] = "SkypeMessage";
	    IconName[IconName["SkypeMinus"] = 591] = "SkypeMinus";
	    IconName[IconName["SliderThumb"] = 592] = "SliderThumb";
	    IconName[IconName["Snow"] = 593] = "Snow";
	    IconName[IconName["SnowShowerDay"] = 594] = "SnowShowerDay";
	    IconName[IconName["SnowShowerNight"] = 595] = "SnowShowerNight";
	    IconName[IconName["Soccer"] = 596] = "Soccer";
	    IconName[IconName["SocialListeningLogo"] = 597] = "SocialListeningLogo";
	    IconName[IconName["Sort"] = 598] = "Sort";
	    IconName[IconName["SortDown"] = 599] = "SortDown";
	    IconName[IconName["SortLines"] = 600] = "SortLines";
	    IconName[IconName["SortUp"] = 601] = "SortUp";
	    IconName[IconName["Speakers"] = 602] = "Speakers";
	    IconName[IconName["SpeedHigh"] = 603] = "SpeedHigh";
	    IconName[IconName["Split"] = 604] = "Split";
	    IconName[IconName["Squalls"] = 605] = "Squalls";
	    IconName[IconName["StackIndicator"] = 606] = "StackIndicator";
	    IconName[IconName["Starburst"] = 607] = "Starburst";
	    IconName[IconName["StatusErrorFull"] = 608] = "StatusErrorFull";
	    IconName[IconName["StatusTriangle"] = 609] = "StatusTriangle";
	    IconName[IconName["StockDown"] = 610] = "StockDown";
	    IconName[IconName["StockUp"] = 611] = "StockUp";
	    IconName[IconName["Stopwatch"] = 612] = "Stopwatch";
	    IconName[IconName["StoreLogo"] = 613] = "StoreLogo";
	    IconName[IconName["StoreLogoMed"] = 614] = "StoreLogoMed";
	    IconName[IconName["Strikethrough"] = 615] = "Strikethrough";
	    IconName[IconName["Subscribe"] = 616] = "Subscribe";
	    IconName[IconName["Subscript"] = 617] = "Subscript";
	    IconName[IconName["Suitcase"] = 618] = "Suitcase";
	    IconName[IconName["SunAdd"] = 619] = "SunAdd";
	    IconName[IconName["Sunny"] = 620] = "Sunny";
	    IconName[IconName["SunQuestionMark"] = 621] = "SunQuestionMark";
	    IconName[IconName["Superscript"] = 622] = "Superscript";
	    IconName[IconName["SwayLogo"] = 623] = "SwayLogo";
	    IconName[IconName["Switch"] = 624] = "Switch";
	    IconName[IconName["SwitcherStartEnd"] = 625] = "SwitcherStartEnd";
	    IconName[IconName["Sync"] = 626] = "Sync";
	    IconName[IconName["SyncFolder"] = 627] = "SyncFolder";
	    IconName[IconName["SyncToPC"] = 628] = "SyncToPC";
	    IconName[IconName["System"] = 629] = "System";
	    IconName[IconName["Tab"] = 630] = "Tab";
	    IconName[IconName["Table"] = 631] = "Table";
	    IconName[IconName["Tablet"] = 632] = "Tablet";
	    IconName[IconName["TabletSelected"] = 633] = "TabletSelected";
	    IconName[IconName["Tag"] = 634] = "Tag";
	    IconName[IconName["TaskManager"] = 635] = "TaskManager";
	    IconName[IconName["TaskManagerMirrored"] = 636] = "TaskManagerMirrored";
	    IconName[IconName["Teamwork"] = 637] = "Teamwork";
	    IconName[IconName["TemporaryUser"] = 638] = "TemporaryUser";
	    IconName[IconName["Tennis"] = 639] = "Tennis";
	    IconName[IconName["TextBox"] = 640] = "TextBox";
	    IconName[IconName["TextField"] = 641] = "TextField";
	    IconName[IconName["ThumbnailView"] = 642] = "ThumbnailView";
	    IconName[IconName["ThumbnailViewMirrored"] = 643] = "ThumbnailViewMirrored";
	    IconName[IconName["Thunderstorms"] = 644] = "Thunderstorms";
	    IconName[IconName["Ticket"] = 645] = "Ticket";
	    IconName[IconName["Tiles"] = 646] = "Tiles";
	    IconName[IconName["Tiles2"] = 647] = "Tiles2";
	    IconName[IconName["Timeline"] = 648] = "Timeline";
	    IconName[IconName["Timer"] = 649] = "Timer";
	    IconName[IconName["ToggleBorder"] = 650] = "ToggleBorder";
	    IconName[IconName["ToggleFilled"] = 651] = "ToggleFilled";
	    IconName[IconName["ToggleThumb"] = 652] = "ToggleThumb";
	    IconName[IconName["Touch"] = 653] = "Touch";
	    IconName[IconName["TouchPointer"] = 654] = "TouchPointer";
	    IconName[IconName["Train"] = 655] = "Train";
	    IconName[IconName["TrainSolid"] = 656] = "TrainSolid";
	    IconName[IconName["TransferCall"] = 657] = "TransferCall";
	    IconName[IconName["TriangleDown12"] = 658] = "TriangleDown12";
	    IconName[IconName["TriangleLeft12"] = 659] = "TriangleLeft12";
	    IconName[IconName["TriangleRight12"] = 660] = "TriangleRight12";
	    IconName[IconName["TriangleSolidDown12"] = 661] = "TriangleSolidDown12";
	    IconName[IconName["TriangleSolidLeft12"] = 662] = "TriangleSolidLeft12";
	    IconName[IconName["TriangleSolidRight12"] = 663] = "TriangleSolidRight12";
	    IconName[IconName["TriangleSolidUp12"] = 664] = "TriangleSolidUp12";
	    IconName[IconName["TriangleUp12"] = 665] = "TriangleUp12";
	    IconName[IconName["Trophy"] = 666] = "Trophy";
	    IconName[IconName["TurnRight"] = 667] = "TurnRight";
	    IconName[IconName["TVMonitor"] = 668] = "TVMonitor";
	    IconName[IconName["TVMonitorSelected"] = 669] = "TVMonitorSelected";
	    IconName[IconName["Underline"] = 670] = "Underline";
	    IconName[IconName["Undo"] = 671] = "Undo";
	    IconName[IconName["Unfavorite"] = 672] = "Unfavorite";
	    IconName[IconName["UnknownCall"] = 673] = "UnknownCall";
	    IconName[IconName["Unlock"] = 674] = "Unlock";
	    IconName[IconName["Unpin"] = 675] = "Unpin";
	    IconName[IconName["Unsubscribe"] = 676] = "Unsubscribe";
	    IconName[IconName["UnsyncFolder"] = 677] = "UnsyncFolder";
	    IconName[IconName["Up"] = 678] = "Up";
	    IconName[IconName["Upload"] = 679] = "Upload";
	    IconName[IconName["Video"] = 680] = "Video";
	    IconName[IconName["VideoSolid"] = 681] = "VideoSolid";
	    IconName[IconName["View"] = 682] = "View";
	    IconName[IconName["ViewAll"] = 683] = "ViewAll";
	    IconName[IconName["ViewAll2"] = 684] = "ViewAll2";
	    IconName[IconName["VisioLogo"] = 685] = "VisioLogo";
	    IconName[IconName["VoicemailForward"] = 686] = "VoicemailForward";
	    IconName[IconName["VoicemailReply"] = 687] = "VoicemailReply";
	    IconName[IconName["Volume0"] = 688] = "Volume0";
	    IconName[IconName["Volume1"] = 689] = "Volume1";
	    IconName[IconName["Volume2"] = 690] = "Volume2";
	    IconName[IconName["Volume3"] = 691] = "Volume3";
	    IconName[IconName["VolumeDisabled"] = 692] = "VolumeDisabled";
	    IconName[IconName["Waffle"] = 693] = "Waffle";
	    IconName[IconName["Warning"] = 694] = "Warning";
	    IconName[IconName["Website"] = 695] = "Website";
	    IconName[IconName["Weights"] = 696] = "Weights";
	    IconName[IconName["WindDirection"] = 697] = "WindDirection";
	    IconName[IconName["WindowsLogo"] = 698] = "WindowsLogo";
	    IconName[IconName["WipePhone"] = 699] = "WipePhone";
	    IconName[IconName["WordDocument"] = 700] = "WordDocument";
	    IconName[IconName["WordLogo"] = 701] = "WordLogo";
	    IconName[IconName["Work"] = 702] = "Work";
	    IconName[IconName["WorkFlow"] = 703] = "WorkFlow";
	    IconName[IconName["WorldClock"] = 704] = "WorldClock";
	    IconName[IconName["YammerLogo"] = 705] = "YammerLogo";
	    IconName[IconName["Zoom"] = 706] = "Zoom";
	    IconName[IconName["ZoomIn"] = 707] = "ZoomIn";
	    IconName[IconName["ZoomOut"] = 708] = "ZoomOut";
	})(IconName = exports.IconName || (exports.IconName = {}));
	


/***/ },
/* 135 */
/***/ function(module, exports) {

	"use strict";
	// Please keep alphabetized
	var IconType;
	(function (IconType) {
	    IconType[IconType["Default"] = 0] = "Default";
	    IconType[IconType["Image"] = 1] = "Image";
	})(IconType = exports.IconType || (exports.IconType = {}));
	


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-ContextualMenu{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";min-width:180px}.ms-ContextualMenu-list{list-style-type:none;margin:0;padding:0;line-height:0}.ms-ContextualMenu-item{font-family:\"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:36px;position:relative;box-sizing:border-box}.ms-ContextualMenu-link{font:inherit;color:inherit;background:0 0;border:none;width:100%;height:36px;line-height:36px;display:block;cursor:pointer;padding:0 6px}.ms-ContextualMenu-link::-moz-focus-inner{border:0}.ms-ContextualMenu-link{outline:transparent;position:relative}.ms-Fabric.is-focusVisible .ms-ContextualMenu-link:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .ms-ContextualMenu-link{text-align:left}html[dir=rtl] .ms-ContextualMenu-link{text-align:right}.ms-ContextualMenu-link:hover:not([disabled]){background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-ContextualMenu-link.is-disabled,.ms-ContextualMenu-link[disabled]{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";cursor:default;pointer-events:none}.ms-ContextualMenu-link.is-disabled .ms-ContextualMenu-icon,.ms-ContextualMenu-link[disabled] .ms-ContextualMenu-icon{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.is-focusVisible .ms-ContextualMenu-link:focus{background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.ms-ContextualMenu-link.is-expanded,.ms-ContextualMenu-link.is-expanded:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";font-weight:600}a.ms-ContextualMenu-link{padding:0 6px;text-rendering:auto;color:inherit;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-shadow:none;box-sizing:border-box}.ms-ContextualMenu-linkContent{white-space:nowrap;height:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%}.ms-ContextualMenu-divider{display:block;height:1px;background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";position:relative}.ms-ContextualMenu-icon{display:inline-block;min-height:1px;max-height:36px;width:14px;margin:0 4px;vertical-align:middle;-ms-flex-negative:0;flex-shrink:0}.ms-ContextualMenu-iconColor{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.ms-ContextualMenu-itemText{margin:0 4px;vertical-align:middle;display:inline-block;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ms-ContextualMenu-linkText{margin:0 4px;display:inline-block;vertical-align:top;white-space:nowrap}.ms-ContextualMenu-submenuChevron{height:36px;line-height:36px;text-align:center;font-size:10px;display:inline-block;vertical-align:middle;-ms-flex-negative:0;flex-shrink:0}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DirectionalHint_1 = __webpack_require__(89);
	exports.DirectionalHint = DirectionalHint_1.DirectionalHint;
	


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable */
	var load_themed_styles_1 = __webpack_require__(31);
	load_themed_styles_1.loadStyles([{ "rawString": ".ms-PickerPersona-Container{display:inline-block}.ms-Picker-MenuItem.ms-result-content{display:table-row}.ms-Picker-MenuItem.ms-result-content .ms-result-item{display:table-cell;vertical-align:bottom}.ms-PeoplePicker-Persona{width:180px}.ms-PeoplePicker-Persona .ms-Persona-details{width:100%}.ms-PeoplePicker .ms-BasePicker-text{min-height:40px}" }]);
	/* tslint:enable */ 
	


/***/ },
/* 139 */
/***/ function(module, exports) {

	"use strict";
	class SafetyDiscussion {
	}
	exports.SafetyDiscussion = SafetyDiscussion;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const fetch = __webpack_require__(141);
	const es6_promise_1 = __webpack_require__(143);
	const FakeUsers_1 = __webpack_require__(145);
	class DiscussionService {
	    constructor() {
	        this.ParseCreateDiscussionResultJson = (json) => {
	            return new es6_promise_1.Promise((resolve, reject) => {
	                resolve(this.ParseJsonToDiscussion(json));
	            });
	        };
	        this.ParseGetMyDiscussionsResultJson = (json) => {
	            return new es6_promise_1.Promise((resolve, reject) => {
	                let retVal = [];
	                for (var i = 0; i < json.length; i++) {
	                    retVal.push(this.ParseJsonToDiscussion(json[i]));
	                }
	                resolve(retVal);
	            });
	        };
	    }
	    SaveDiscussion(discussion) {
	        return fetch("discussion/creatediscussion" + window.location.search, {
	            credentials: 'include',
	            method: 'put',
	            body: JSON.stringify(discussion),
	            headers: new Headers({
	                'Content-Type': 'application/json'
	            })
	        })
	            .then(this.ProcessServerResponse) // Look at the response, confirm it's 200
	            .then(this.ParseCreateDiscussionResultJson); // Parse out the JSON
	    }
	    ProcessServerResponse(response) {
	        return new es6_promise_1.Promise((resolve, reject) => {
	            // Response was 200, resolve the promise.
	            if (response.status === 200) {
	                resolve(response.json());
	            }
	            else {
	                reject(new Error(response.statusText));
	            }
	        });
	    }
	    GetMyDiscussions() {
	        return fetch("discussion/mydiscussions" + window.location.search, {
	            credentials: 'include',
	            method: 'get'
	        })
	            .then(this.ProcessServerResponse) // Look at the response, confirm it's 200
	            .then(this.ParseGetMyDiscussionsResultJson); // Parse out the JSON
	    }
	    ParseJsonToDiscussion(json) {
	        return {
	            DateISO: json.DateISO,
	            DiscussionLocation: json.DiscussionLocation,
	            DiscussedWith: json.DiscussedWith,
	            Subject: json.Subject,
	            Outcomes: json.Outcomes,
	            Id: json.Id,
	        };
	    }
	    // TODO : PoC only. In a real app this would do a HTTP call into SP. This code and the code it calls all comes from the Fabric React source code.
	    UserSearch(text, currentPersonas, limitResults) {
	        var peopleList = this.GetPeopleList();
	        let filteredPersonas = this.FilterPersonasByText(peopleList, text);
	        filteredPersonas = this.RemoveDuplicates(filteredPersonas, currentPersonas);
	        filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;
	        return new es6_promise_1.Promise((resolve, reject) => setTimeout(() => resolve(filteredPersonas), 2000));
	    }
	    RemoveDuplicates(personas, possibleDupes) {
	        return personas.filter(persona => !this.ListContainsPersona(persona, possibleDupes));
	    }
	    ListContainsPersona(persona, personas) {
	        if (!personas || !personas.length || personas.length === 0) {
	            return false;
	        }
	        return personas.filter(item => item.primaryText === persona.primaryText).length > 0;
	    }
	    FilterPersonasByText(peopleList, filterText) {
	        return peopleList.filter(item => this.DoesTextStartWith(item.primaryText, filterText));
	    }
	    DoesTextStartWith(text, filterText) {
	        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
	    }
	    GetPeopleList() {
	        var peopleList = [];
	        let contextualMenuItems = [
	            {
	                key: 'newItem',
	                icon: 'circlePlus',
	                name: 'New'
	            },
	            {
	                key: 'upload',
	                icon: 'upload',
	                name: 'Upload'
	            },
	            {
	                key: 'divider_1',
	                name: '-',
	            },
	            {
	                key: 'rename',
	                name: 'Rename'
	            },
	            {
	                key: 'properties',
	                name: 'Properties'
	            },
	            {
	                key: 'disabled',
	                name: 'Disabled item',
	                disabled: true
	            }
	        ];
	        FakeUsers_1.people.forEach((persona) => {
	            let target = {};
	            Object.assign(target, persona, { menuItems: contextualMenuItems });
	            peopleList.push(target);
	        });
	        return peopleList;
	    }
	}
	exports.DiscussionService = DiscussionService;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(142);
	module.exports = self.fetch.bind(self);


/***/ },
/* 142 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]
	
	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }
	
	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }
	
	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)
	
	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }
	
	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }
	
	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }
	
	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	
	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 143 */
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
	    var vertx = __webpack_require__(144);
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19), (function() { return this; }())))

/***/ },
/* 144 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 145 */
/***/ function(module, exports) {

	"use strict";
	// These are from Fabric React source.
	exports.people = [
	    {
	        key: 0,
	        imageUrl: './images/persona-female.png',
	        imageInitials: 'PV',
	        primaryText: 'Annie Lindqvist',
	        secondaryText: 'Designer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 1,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'AR',
	        primaryText: 'Aaron Reid',
	        secondaryText: 'Designer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 2,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'AL',
	        primaryText: 'Alex Lundberg',
	        secondaryText: 'Software Developer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 3,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'RK',
	        primaryText: 'Roko Kolar',
	        secondaryText: 'Financial Analyst',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 4,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'CB',
	        primaryText: 'Christian Bergqvist',
	        secondaryText: 'Sr. Designer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 5,
	        imageUrl: './images/persona-female.png',
	        imageInitials: 'VL',
	        primaryText: 'Valentina Lovric',
	        secondaryText: 'Design Developer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 6,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'MS',
	        primaryText: 'Maor Sharett',
	        secondaryText: 'UX Designer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 7,
	        imageUrl: './images/persona-female.png',
	        imageInitials: 'PV',
	        primaryText: 'Anny Lindqvist',
	        secondaryText: 'Designer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 8,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'AR',
	        primaryText: 'Aron Reid',
	        secondaryText: 'Designer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 9,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'AL',
	        primaryText: 'Alix Lundberg',
	        secondaryText: 'Software Developer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 10,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'RK',
	        primaryText: 'Roko Kular',
	        secondaryText: 'Financial Analyst',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 11,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'CB',
	        primaryText: 'Christian Bergqvest',
	        secondaryText: 'Sr. Designer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 12,
	        imageUrl: './images/persona-female.png',
	        imageInitials: 'VL',
	        primaryText: 'Valintina Lovric',
	        secondaryText: 'Design Developer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 13,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'MS',
	        primaryText: 'Maor Sharet',
	        secondaryText: 'UX Designer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 14,
	        imageUrl: './images/persona-female.png',
	        imageInitials: 'VL',
	        primaryText: 'Anny Lindqvest',
	        secondaryText: 'SDE',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 15,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'MS',
	        primaryText: 'Alix Lunberg',
	        secondaryText: 'SE',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 16,
	        imageUrl: './images/persona-female.png',
	        imageInitials: 'VL',
	        primaryText: 'Annie Lindqvest',
	        secondaryText: 'SDET',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 17,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'MS',
	        primaryText: 'Alixander Lundberg',
	        secondaryText: 'Senior Manager of SDET',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 18,
	        imageUrl: './images/persona-female.png',
	        imageInitials: 'VL',
	        primaryText: 'Anny Lundqvist',
	        secondaryText: 'Junior Manager of Software',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 13,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'MS',
	        primaryText: 'Maor Shorett',
	        secondaryText: 'UX Designer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 12,
	        imageUrl: './images/persona-female.png',
	        imageInitials: 'VL',
	        primaryText: 'Valentina Lovrics',
	        secondaryText: 'Design Developer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 13,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'MS',
	        primaryText: 'Maor Sharet',
	        secondaryText: 'UX Designer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 12,
	        imageUrl: './images/persona-female.png',
	        imageInitials: 'VL',
	        primaryText: 'Valentina Lovrecs',
	        secondaryText: 'Design Developer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	    {
	        key: 13,
	        imageUrl: './images/persona-male.png',
	        imageInitials: 'MS',
	        primaryText: 'Maor Sharitt',
	        secondaryText: 'UX Designer',
	        tertiaryText: 'In a meeting',
	        optionalText: 'Available at 4:00pm'
	    },
	];


/***/ }
/******/ ]);
//# sourceMappingURL=appRoot.js.map