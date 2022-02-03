"use strict";
function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
// disp_details(123, "John");
var num;
num = 11;
// console.log(num);
disp_details(num, "mayur", "mary@xyz.com");
