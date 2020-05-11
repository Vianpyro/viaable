function add_shortcut() {
    var url = prompt("Please enter a website URL (e.g. nytimes.com) : ");
    if (url != null) {
        websiteName = get_short_name(url);
        document.getElementById("generated").innerHTML += `<figure><a class="single-shortcut" href="https://www.${url}">
            <img src="https://www.${url}/favicon.ico" onerror="this.src='src/img/void.png'">
            <br/><figcaption">${websiteName}</figcaption></a></figure>`
    }
}

function load_shortcuts() {
    var website = ["amazon.com", "facebook.com", "netflix.com", "reddit.com", "twitch.tv", "wikipedia.com", "youtube.com"]
    
    for (var element in website) {
        websiteName = get_short_name(website[element]);
        document.getElementById("generated").innerHTML += `<figure><a class="single-shortcut" href="https://www.${website[element]}">
            <img src="src/img/${website[element].substr(0, website[element].indexOf('.'))}-logo.png" onerror="this.src='src/img/void.png'">
            <br/><figcaption">${websiteName}</figcaption></a></figure>`
    }
}

function get_short_name(string) {
    string = string.substr(0, string.indexOf('.'))
    string = string.charAt(0).toUpperCase() + string.slice(1)
    if (string.length >= 8) {string = string.substr(0, 7) + "..."}
    return string
}

load_shortcuts();