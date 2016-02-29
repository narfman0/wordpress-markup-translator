function WordpressShortcodeTranslator() {
    var methods = {};
    methods.translate = function(text) {
        var regex = /\[(soundcloud|youtube|twitter) (.*)\]/g;
        var matches;
        while ((matches = regex.exec(text)) !== null) {
            var msg = 'Found ' + matches[0] + '. ';
            msg += 'Next match starts at ' + regex.lastIndex;
            msg += ' matches[1]=' + matches[1] + ' matches[2]=' + matches[2];
            console.log(msg);
        }
    };
    methods.translateSoundcloud = function(data) {
        return '<iframe allowtransparency="true" scrolling="no" frameborder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fundefined&color=orange_white&size=32" style="width: 32px; height: 32px;"></iframe>';
    };

    if(typeof window !== 'undefined'){
        window.wordpressShortcodeTranslator = methods;
    }
    return methods;
}
