
navigateFromGoogle();


function navigateFromGoogle() {
    var linkOganicSearch = ["https://www.google.com/search?q=ieo+la+gi+thienha", "https://www.google.com/search?q=platform+phat+trien+dapp"];
    var rd = Math.floor((Math.random() * linkOganicSearch.length));
    window.location.replace(linkOganicSearch[rd]);
    setTimeout(navigateToMainDomain, 2000);
}
