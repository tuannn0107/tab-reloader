
navigateFromGoogle();


function navigateFromGoogle() {
    var linkOganicSearch = ["https://www.google.com/search?q=ieo+la+gi+thienha", 
                            "https://www.google.com/search?q=platform+phat+trien+dapp",
                            "https://www.google.com/search?q=tr%E1%BB%9F+th%C3%A0nh+day+trading+thienha",
                            "https://www.google.com/search?q=gifto+l%C3%A0+g%C3%AC+thienha",
                            "https://www.google.com/search?q=eos+v%C3%A0+eth%21+thanh+ni%C3%AAn+tr%E1%BA%BB+v%C3%A0+g%C3%A3+gi%C3%A0+d%C6%A1",
                            "https://www.google.com/search?q=Y%E1%BA%BFu+t%E1%BB%91+c%E1%BA%A7n+thi%E1%BA%BFt+cho+s%E1%BB%B1+ph%C3%A1t+tri%E1%BB%83n+c%E1%BB%A7a+crypto"];
    var rd = Math.floor((Math.random() * linkOganicSearch.length));
    window.location.replace(linkOganicSearch[rd]);
    setTimeout(navigateToMainDomain, 2000);
}
