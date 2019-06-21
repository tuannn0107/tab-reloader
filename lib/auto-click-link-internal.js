var sitemaps = ["https://chuyenthienha.com/pages/invest/eos-vs-eth-thanh-nien-tra-va-ga-gia-do.html",
    "https://chuyenthienha.com/pages/knowledge/tro-thanh-mot-day-trading.html",
    "https://chuyenthienha.com/pages/knowledge/su-ki-vong-vao-blockchain.html",
    "https://chuyenthienha.com/pages/knowledge/ieo-la-gi.html",
    "https://chuyenthienha.com/pages/invest/nha-dau-tu-mong-doi-gi-vao-thi-truong-crypto.html",
    "https://chuyenthienha.com/pages/knowledge/nen-chon-platform-nao-cho-phat-trien-dapp.html",
    "https://chuyenthienha.com/pages/knowledge/3-things-crypto-needs.html",
    "https://chuyenthienha.com/pages/knowledge/gifto-token.html",
    "https://chuyenthienha.com/pages/knowledge/justin-sun-tiet-lo-ngay-ra-mat-sun-network.html"];

navigateInternal();


function navigateInternal() {
    navigateToMainDomain();
}

function navigateToMainDomain() {
    var length = document.querySelectorAll('a[href^="https://chuyenthienha.com/pages"]').length;
    if (length > 0) {
        var linkIndex = Math.floor((Math.random() * length));
        document.querySelectorAll('a[href^="https://chuyenthienha.com/pages"]')[linkIndex].click();
    } else {
        var linkIndex = Math.floor((Math.random() * sitemaps.length));
        window.location.replace(sitemaps[linkIndex]);
    }
    
}
