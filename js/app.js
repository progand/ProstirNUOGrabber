links = [
    "http://prostir.ua/orgs/view.html?2035002",
    "http://prostir.ua/orgs/view.html?2032226"
];

init = function() {
    $('#start').click(start);
    messageContainer = $('#message');
};

jQuery(init);

start = function() {
    for (var i = links.length; i--; ) {
        loadContent(links[i], $('#' + i));
    }
};

loadContent = function(url, $container) {
    $container.load("/proxy.php?url=" + url+ " .main", function(responseText, textStatus, XMLHttpRequest) {
        var instance = parse($(responseText));
        console.log(instance);
    });
};

parse = function($content) {
    var instance = {};
    var $main = $content.find(".main");
    instance.name = $main.find("h2").text();
    var $properties = $main.find("b");
    $properties.each(function(index, element){
        var $element = $(element);
        var key = $element.text();
        var value = $element.nextUntil("b");
        instance[key] = value;
    });
    return instance;
};

message = function(mess) {
    messageContainer.html(mess);
};