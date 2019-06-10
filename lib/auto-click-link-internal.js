
navigateInternal();


function navigateInternal() {
    navigateToMainDomain();
}


function navigateToMainDomain() {
    var length = document.querySelectorAll('a[href$="knowledge/ieo-la-gi.html"]').length;
    if (length > 0) {
        var linkIndex = Math.floor((Math.random() * length));
        document.querySelectorAll('a[href$="knowledge/ieo-la-gi.html"]')[linkIndex].click();
    } else {
        var length = document.querySelectorAll('a[href^="https://chuyenthienha.com"]').length;
        if (length > 0) {
            var linkIndex = Math.floor((Math.random() * length));
            document.querySelectorAll('a[href^="https://chuyenthienha.com"]')[linkIndex].click();
        } else {
            window.location.replace("https://chuyenthienha.com");
        }
    }
}
