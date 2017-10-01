var os = require("os");

function getUptime() {
    var uptime = Math.floor(os.uptime());
    var hours = Math.floor(uptime / 3600);
    var minutes = Math.floor(uptime % 3600 / 60);
    var seconds = uptime % 3600 % 60;
    console.log("Uptime: ".green, hours, " hours,", minutes, " minutes,", seconds, " seconds");
}

exports.print = getUptime;