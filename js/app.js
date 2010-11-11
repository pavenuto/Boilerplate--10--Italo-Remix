if (typeof app === "undefined") {
    var app = {}
}

app.init = function(){
    $.trace('on ready!');
}


$(document).ready(app.init);