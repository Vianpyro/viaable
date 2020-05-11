console.log("Cookies " + get_expiration_date())

switch (document.cookie) {
    case "sengine=Bing":
        document.getElementById("bing").selected = "selected";
        break;
    case "sengine=DuckDuckGo":
        document.getElementById("ddgo").selected = "selected";
        break;
    case "sengine=Ecosia":
        document.getElementById("ecosia").selected = "selected";
        break;
    case "sengine=Facebook":
        document.getElementById("fb").selected = "selected";
        break;
    case "sengine=GitHub":
        document.getElementById("gh").selected = "selected";
        break;
    case "sengine=Google":
        document.getElementById("google").selected = "selected";
        break;
    case "sengine=Qwant":
        document.getElementById("qwant").selected = "selected";
        break;
    case "sengine=Youtube":
        document.getElementById("yt").selected = "selected";
        break;
    default:
        document.getElementById("google").selected = "selected";
}

function set_sengine_link() {
    switch (detect_search_engine()) {
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
    document.cookie = `sengine=${selected_sengine};` + get_expiration_date();
}

function detect_search_engine() {
    var sengine = document.getElementById("sengine"); // getting the selected web search engine
    var selected_sengine = sengine.options[sengine.selectedIndex].text;
    console.log(selected_sengine)
    return selected_sengine
}

set_sengine_link();