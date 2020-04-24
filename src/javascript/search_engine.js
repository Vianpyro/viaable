function detect_sengine() {
    var sengine = document.getElementById("sengine"); // getting the selected web search engine
    var selected_sengine = sengine.options[sengine.selectedIndex].text;

    switch(selected_sengine) {
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
        default:
            document.getElementById("SENGINE").action = "https://www.google.com/search";
    }
}