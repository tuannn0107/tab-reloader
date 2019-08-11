
navigateFromOganicSearch();
var sitemaps = ["https://chuyenthienha.com/pages/invest/eos-vs-eth-thanh-nien-tra-va-ga-gia-do.html",
                "https://chuyenthienha.com/pages/knowledge/tro-thanh-mot-day-trading.html",
                "https://chuyenthienha.com/pages/knowledge/su-ki-vong-vao-blockchain.html",
                "https://chuyenthienha.com/pages/knowledge/ieo-la-gi.html",
                "https://chuyenthienha.com/pages/invest/nha-dau-tu-mong-doi-gi-vao-thi-truong-crypto.html",
                "https://chuyenthienha.com/pages/knowledge/nen-chon-platform-nao-cho-phat-trien-dapp.html",
                "https://chuyenthienha.com/pages/knowledge/3-things-crypto-needs.html",
                "https://chuyenthienha.com/pages/knowledge/gifto-token.html",
                "https://chuyenthienha.com/pages/knowledge/justin-sun-tiet-lo-ngay-ra-mat-sun-network.html"];

function navigateFromOganicSearch() {
    // if (window.location.host === 'www.google.com') {
    //     var currentHref = window.location.href;
    //     for (var i = 0; i < origin.length; i++) {
    //         if (currentHref === origin[i]) {
    //             window.location.replace(replace[i]);
    //         }
    //     } 

    //     var linkFoundLenth = document.querySelectorAll('a[href^="https://chuyenthienha.com"]').length;
    //     if (linkFoundLenth === 0)
    //     {
    //         window.setTimeout(findLinkToNavigate(), 10000);
    //     } else {
    //         navigateToMainDomain();
    //     }
    // }

    if (window.location.href.includes('google.com/sorry'))
    {
        var linkIndex = Math.floor((Math.random() * sitemaps.length));
        window.location.replace(sitemaps[linkIndex]);
    }


    navigateToMainDomain();
}

function findLinkToNavigate() {
    var pageLength = document.getElementById("nav").getElementsByTagName("td").length;
    var i = 1;
    while (i < (pageLength - 2)) {
        if (document.getElementById("nav").getElementsByTagName("td")[i] == undefined) {
            navigateToMainDomain();
            break;
        }

        var linkPageNavigate = document.getElementById("nav").getElementsByTagName("td")[i].getElementsByTagName('a').length;
        if (linkPageNavigate > 0) {
            document.getElementById("nav").getElementsByTagName("td")[i].getElementsByTagName('a')[0].click();
        }
        i += 1;
    }
}


function navigateToMainDomain() {
    var length = document.querySelectorAll('a[href^="https://chuyenthienha.com"]').length;
    if (length > 0) {
        simulate(document.querySelectorAll('a[href^="https://chuyenthienha.com"]')[0], "click");
    } else {
        var linkIndex = Math.floor((Math.random() * sitemaps.length));
        window.location.replace(sitemaps[linkIndex]);
    }
}


function simulate(element, eventName)
{
    var eventMatchers = {
        'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
        'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
    }
    var defaultOptions = {
        pointerX: 0,
        pointerY: 0,
        button: 0,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true,
        cancelable: true
    }

    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
}