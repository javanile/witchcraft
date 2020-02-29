
/**
 * Google Analytics wrapper
 *
 * Not necessarily relevant yet, but good reference nevertheless:
 * https://stackoverflow.com/a/30503705/778272
 * explains how to properly track content scripts
 */
class Analytics {

    constructor () {
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/tracking-snippet-reference#alternative-async-tag
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        ga('create', 'UA-159294933-1', 'auto');
        ga('set', 'checkProtocolTask', null);  // https://stackoverflow.com/a/56442610/778272
    }

    send(category, action, label, value) {
        const data = {
            eventCategory: category,
            eventAction: action,
        };
        if (label !== undefined) {
            data.eventLabel = label;
        }
        if (value !== undefined) {
            data.eventValue = value;
        }
        ga("send", "event", data);
    }
}