var assert = require('assert');
var should = require('chai').should(),
    module = require('../dist/index');

describe('#translate-single', function() {
    it('Translate single soundcloud', function() {
        var url = "https://api.soundcloud.com/tracks/245445697/";
        var html = '[soundcloud url="' + url + '"]';
        var newHtml = module.translate(html);
        assert(newHtml.indexOf('<iframe') != -1);
        assert(newHtml.match(/src=\S+url=\S+api.soundcloud.com.tracks.[0-9]+/));
    });
});
