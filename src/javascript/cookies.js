// I'm trying to store more data in the cookies, this file WILL be useful one day!

myCookie = {}

function get_expiration_date() {
    var date = new Date();
    var year = date.getFullYear() + 1;
    return "expires=" + new Date(year, date.getMonth(), 28) + ";";
}

function save_cookies() {
    myCookie["sengine"] = detect_search_engine();

    document.cookie = "";
    var cookieString = "";
    for (var key in myCookie) {
        cookieString = key + "=" + myCookie[key] + ";" + get_expiration_date();
        document.cookie = cookieString;
    }
}   

function load_cookies() {
    myCookie = {};
    var key_value = document.cookie.split(";");
    for (var id in key_value) {
        var cookie = key_value[id].split("=");
        myCookie[cookie[0].trim()] = cookie[1];
    }

    select_last_search_engine(myCookie["sengine"].toLowerCase());
}