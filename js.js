function detect_sengine() {
    var sengine = document.getElementById("sengine"); // getting the selected web search engine
    var selected_sengine = sengine.options[sengine.selectedIndex].text;

    switch(selected_sengine) {
        case "Google": 
            document.getElementById("SENGINE").action = "https://www.google.com/search";
            break;

        case "Ecosia": 
            document.getElementById("SENGINE").action = "https://www.ecosia.org/search?";
            break;

        case "Qwant": 
            document.getElementById("SENGINE").action = "https://www.qwant.com/?";
            break;

        default:
            document.getElementById("SENGINE").action = "https://www.google.com/search";
    }
}