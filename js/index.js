function WordpressShortcodeTranslator() {
    var methods = {};
    methods.loadTwitter = function() {
        window.twttr = (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);
          t._e = [];
          t.ready = function(f) {
            t._e.push(f);
          };
          return t;
        }(document, "script", "twitter-wjs"));
    };
    methods.translate = function(html) {
        function handler(match, type, attrs) {
            switch(type) {
                case 'soundcloud':
                    var target = /url="(\S+)"/.exec(attrs);
                    var src = "https://w.soundcloud.com/player/?url=" + target[1];
                    return '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="' + src + '"></iframe>';
                case 'youtube':
                    var idRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
                    var youtubeId = idRegex.exec(attrs)[1];
                    return '<iframe src="http://www.youtube.com/embed/' + youtubeId +
                        '" type="text/html" width="100%" height="390" frameborder="0"></iframe>';
                case 'twitter-timeline':
                    var id = /id=(\S+)/.exec(attrs)[1];
                    var username = /username=(\S+)/.exec(attrs)[1];
                    return '<a class="twitter-timeline" data-widget-id="' + id +
                        '" href="https://twitter.com/' + username +
                        '" data-aria-polite="assertive">Tweets</a>';
                default:
                    // if we dont know what it is, kill it
                    return '';
            }
        }
        var regex = /\[(\S+)(.*?)\]/g;
        var result = html.replace(regex, handler);
        if(typeof window !== 'undefined' && !window.twttr){
            methods.loadTwitter();
        }
        return result;
    };
    if(typeof window !== 'undefined'){
        window.wordpressShortcodeTranslator = methods;
    }
    return methods;
}
