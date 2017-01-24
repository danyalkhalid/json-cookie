# json-cookie
>Create and use a cookie with json data using simple functions. 

**Make a json object by passing simple arrays to the function**
``` javascript
json = makeJsonObject(["val1", "val2", "val3"], [1, 2, 3]);
```

**Once your json ready, pass it on to the setCookie function with flag set as true**
**Leave the exdays field if you want to terminate the cookie and browser closing**
``` javascript
setCookie("json-cookie", json, true);
```

**Get the cookie normally by using the getCookie function**
**Set flag to true if retrieving json value**
``` javascript
myJsonCookieValue = getCookie("json-cookie", true);
```

**To check if cookie exists, call the checkCookie method**
``` javascript
if (checkCookie("json-cookie")) {
    console.log("cookie exists");
}
else {
    console.log("cookie does not exist");
}
```

**Note: _The file itself is pretty explanatory, each function has been commented properly, describing the role of each parameter_**
