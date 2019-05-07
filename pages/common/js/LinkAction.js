var workOnLocal = true;
var remote = {
    home: "http://pmartinezm.github.io",
    regularidad: "pages/regularidad/index.html"
};

var local = {
    home: "./index.html",
    regularidad: "./pages/regularidad/index.html"
};

function redirect(pageKey) {
    var uri;
    var pages = workOnLocal ? local : remote;

    if (workOnLocal) {
        uri = pages[pageKey];
    } else {
        if (pageKey == "home") {
            uri = pages["home"];
        } else {
            uri = pages["home"] + "/" + pages[pageKey];
        }
    }

    window.location.replace(uri);
    console.log("Working on local: " + workOnLocal);
    console.log("Key: " + pageKey);
    console.log("Pages: ", pages);
    console.log("Redirect: " + uri);
}

function check() {
    if(workOnLocal) {
        document.getElementsByClassName("header")[0].style.backgroundColor = "#ffc321";
    }
}();