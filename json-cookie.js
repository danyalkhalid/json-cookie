json = makeJsonObject(["val1", "val2", "val3"], [1, 2, 3]);

console.log(json.val1);
console.log(json.val2);
console.log(json.val3);

/**
 * as the name suggests, the setCookie sets a cookie in your document. 
 * @param {String} cname - is the name of the cookie that want to assign to it 
 * @param {*}     cvalue - is the value you want to assign to your cookie
 * @param {boolean} flag - if set to true, the function will know that JSON type data is being passed on to the function 
 *                         for normal type data e.g. string, int, float etc. set flag as false
 * @param {int} [exdays] - if no value is given, cookie will be dumped when the browser window is closed, 
 *                         otherwise the expiry will be set to the number of days you assign to it
 */
function setCookie(cname, cvalue, flag, exdays) {
    if (flag) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
    }

    else {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
}

/**
 * returns the value of a cookie 
 * @param {String} cname - name of the cookie
 * @param {boolean} flag - set true if getting back a JSON object
 *                       - set false if getting any other value
 * @return {JSON}        - if flag set to true
 * @return {*}           - if getting any other value
 */
function getCookie(cname, flag) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            if (flag) {
                return JSON.parse(c.substring(name.length, c.length));
            }

            else {
                return c.substring(name.length, c.length);
            }
        }
    }
    return "";
}


/**
 * checks if a cookie is valid or present or not 
 * @param {String} cname - name of the cookie 
 * @return {bool}        - returns true if cookie is present, false if not present
 */
function checkCookie(cname) {
    var cookie = getCookie(cname);
    if (cookie) {
        return true;
    } else {
        return false;
    }
}

/**
 * makeJsonObject creates a JSON object and returns it to the user
 * @param {String[]} attr - array of strings for your JSON object attributes
 * @param {*}      values - whatever values you may want to assign to your attributes
 * @return {JSON}         - returns a JSON object when condition is met 
 *                        - returns false when condition is not met 
 */
function makeJsonObject(attr, values) {
    var string = "{";

    if (attr.length != values.length) {
        console.log("attr must be equal to values");
        return false;
    }

    for (i = 0; i < attr.length; i++) {
        if (i == attr.length - 1) {
            string += '"' + attr[i] + '": "' + values[i] + '"}';
        }
        else {
            string += '"' + attr[i] + '": "' + values[i] + '",';
        }
    }

    jsonObject = JSON.parse(string);

    return jsonObject;
}
