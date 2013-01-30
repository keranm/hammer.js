var Hammer = function(element, options) {
    return new Hammer.Instance(element, options || {});
};

// default settings
Hammer.defaults = {
    stop_browser_behavior: true,
    stop_browser_behavior_props: {
        "userSelect": "none",
        "touchCallout": "none",
        "touchAction": "none",
        "contentZooming": "none",
        "userDrag": "none",
        "tapHighlightColor": "rgba(0,0,0,0)"
    }

    // more settings are defined at gestures.js
};

// detect touchevents
Hammer.HAS_POINTEREVENTS = window.navigator.msPointerEnabled;
Hammer.HAS_TOUCHEVENTS = ('ontouchstart' in window);

// direction defines
Hammer.DIRECTION_DOWN = 'down';
Hammer.DIRECTION_LEFT = 'left';
Hammer.DIRECTION_UP = 'up';
Hammer.DIRECTION_RIGHT = 'right';

// touch event defines
Hammer.TOUCH_START = 'start';
Hammer.TOUCH_MOVE = 'move';
Hammer.TOUCH_END = 'end';

// plugins namespace
Hammer.plugins = {};