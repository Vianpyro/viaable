// I'm trying to store more data in the cookies, this file WILL be useful one day!

function get_expiration_date() {
    var date = new Date();
    var year = date.getFullYear() + 1;
    return "expires=" + new Date(year, date.getMonth(), 28) + ";";
}

function save_cookie() {}   
function load_cookie() {}