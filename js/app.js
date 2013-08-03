links = [
    //"http://prostir.ua/orgs/view.html?2035002",
    "http://prostir.ua/orgs/view.html?1966368"
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
    $container.load("proxy.php?url=" + url + " center tr[valign='top'] > td.main", function(responseText, textStatus, XMLHttpRequest) {
        var instance = parse(this);
        console.log(instance);
    });
};

parse = function(container) {
    var instance = {};
    var $container = $(container);
    var $main = $container.children(".main");
    var html = $main.html();
    instance.name = $main.find("h2").text();
    var $properties = $main.find("b");
    $properties.each(function(index, element) {
        var $element = $(element);
        var key = $element.text().trim();
        if(key[key.length-1]===":"){
            key= key.substring(0,key.length-1).trim();           
        }
        var $next = $element.nextAll("b").first();
        var elementOuterHTML = element.outerHTML;
        var elementPosition = html.indexOf(elementOuterHTML);
        var nextPosition = undefined;
        if ($next.length > 0) {
            nextPosition = html.indexOf($next.get(0).outerHTML);
        }
        var value = html.substring(elementPosition + elementOuterHTML.length, nextPosition);
        instance[key] = parseValue(value);
    });
    return instance;
};

parseValue = function(value) {
    var parcedValue = [];
    
    var splittedBR = value.split("<br>");
    $.each(splittedBR, function(index, item) {
        item = item.trim();
        if(item[0]===":"){
            item = item.replace(":", "");
        }
        if(item[0]==="-"){
            item = item.replace("-", "");
        }
        item = item.trim();
        item = S(item).replaceAll("↵", "").stripTags().s;
        if(item && item!==":"){
            parcedValue.push(item);
        }        
    });
    return parcedValue;
};

message = function(mess) {
    messageContainer.append(JSON.stringify(mess));
};