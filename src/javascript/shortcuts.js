function add_shortcut() {
    var url = prompt("Please enter a website URL (e.g. nytimes.com) : ");
    if (url != null) {
        document.getElementById("custom-shortcuts").innerHTML +=
            `<a class="shortcut" href="https://www.${url}/" class="shortcut" style="background-image: url('https://www.${url}/favicon.ico');">
            ${url.substring(0, 2).toUpperCase()}</a>`;
    }
}