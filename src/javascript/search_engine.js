console.log("Cookies " + get_expiration_date())

function select_last_search_engine(string) {
    document.getElementById(string).selected = "selected";
    console.log(string + " was the last search engine")
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
    save_cookies();
}

function detect_search_engine() {
    var sengine = document.getElementById("sengine"); // getting the selected web search engine
    var selected_sengine = sengine.options[sengine.selectedIndex].text;
    return selected_sengine
}

    load_cookies();