console.log("Search engine script works!")

function saveCookies() {
    myCookie["_uLastSearchEngine"] = sengine.options[sengine.selectedIndex].text;
    document.cookie = "";
    var expiresAttrib = new Date().setFullYear(new Date().getFullYear() + 1).toString();
    var cookieString = "";
    for (var key in myCookie) {
        cookieString = key + "=" + myCookie[key] + ";" + expiresAttrib + ";";
        document.cookie = cookieString;
    }
}

function loadCookies() {
    myCookie = {};
    var key_value = document.cookie.split(";");
    for (var id in key_value) {
        var cookie = key_value[id].split("=");
        myCookie[cookie[0].trim()] = cookie[1];
    }

    // Get the last used search engine
    select_last_search_engine(myCookie["_uLastSearchEngine"]);
}

function select_last_search_engine(lastSearchEngine) {
    switch (lastSearchEngine) {
        case "Bing":
            document.getElementById("bing").selected = "selected";
            break;
        case "DuckDuckGo":
            document.getElementById("ddgo").selected = "selected";
            break;
        case "Ecosia":
            document.getElementById("ecosia").selected = "selected";
            break;
        case "Facebook":
            document.getElementById("fb").selected = "selected";
            break;
        case "GitHub":
            document.getElementById("gh").selected = "selected";
            break;
        case "Google":
            document.getElementById("google").selected = "selected";
            break;
        case "Qwant":
            document.getElementById("qwant").selected = "selected";
            break;
        case "Youtube":
            document.getElementById("yt").selected = "selected";
            break;
        default:
            document.getElementById("google").selected = "selected";
            break;
    }
    set_sengine_link();
}

function set_sengine_link() {
    var sengine = document.getElementById("sengine"); // getting the selected web search engine

    switch (sengine.options[sengine.selectedIndex].text) {
        case "Bing":
            document.getElementById("SENGINE").action = "https://www.bing.com/search";
            break;
        case "DuckDuckGo":
            document.getElementById("SENGINE").action = "https://duckduckgo.com/";
            break;
        case "Ecosia": 
            document.getElementById("SENGINE").action = "https://www.ecosia.org/search";
            break;
        case "Facebook":
            document.getElementById("SENGINE").action = "https://www.facebook.com/search/top/";
            break;
        case "GitHub":
            document.getElementById("SENGINE").action = "https://github.com/search";
            break;
        case "Google": 
            document.getElementById("SENGINE").action = "https://www.google.com/search";
            break;
        case "Qwant": 
            document.getElementById("SENGINE").action = "https://www.qwant.com/";
            break;
        case "Youtube":
            document.getElementById("SENGINE").action = "https://www.youtube.com/results";
            break;
        default:
            document.getElementById("SENGINE").action = "https://www.google.com/search";
    }
    saveCookies();
}

loadCookies();