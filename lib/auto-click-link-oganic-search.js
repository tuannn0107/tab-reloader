
navigateFromGoogle();


function navigateFromGoogle() {
    var linkOganicSearch = ["https://www.google.com/search?q=ieo+la+gi+thienha", 
                            "https://www.google.com/search?q=platform+phat+trien+dapp", 
                            "https://www.google.com/search?q=ieo+la+gi", 
                            "https://www.google.com/search?q=tr%E1%BB%9F+th%C3%A0nh+day+trading", 
                            "https://www.google.com/search?q=gifto+là+gì",
                            "https://www.google.com/search?q=Yếu+tố+cần+thiết+cho+sự+phát+triển+của+Crypto"];
    var rd = Math.floor((Math.random() * linkOganicSearch.length));
    window.location.replace(linkOganicSearch[rd]);
    setTimeout(navigateToMainDomain, 2000);
}
