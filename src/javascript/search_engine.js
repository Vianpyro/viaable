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
    case "sengine=Qwant":
        document.getElementById("yt").selected = "selected";
        break;
    default:
        document.getElementById("google").selected = "selected";
}

function get_expiration_date() {
    var date = new Date();
    var year = date.getFullYear() + 1;
    return new Date(year, date.getMonth(), date.getDate());
}

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
        case "Youtube":
            document.getElementById("SENGINE").action = "https://www.youtube.com/results";
            break;
        default:
            document.getElementById("SENGINE").action = "https://www.google.com/search";
    }
    document.cookie = `sengine=${selected_sengine};` + `expires=${get_expiration_date()}`;
    console.log(`sengine=${selected_sengine};` + `expires=${get_expiration_date()}`)
}
