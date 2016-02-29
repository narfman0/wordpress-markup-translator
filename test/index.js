var should = require('chai').should(),
    module = require('../dist/index');

describe('#translate-single', function() {
    it('Translate single', function() {
        var url = "https://api.soundcloud.com/tracks/245445697/";
        var html = 'text1 [soundcloud url="' + url + '"] text2';
        var newHtml = module.translate(html);
        var expectedHtml = 'text1 <iframe src="' + url + '"></iframe> text2';
        newHtml.should.equal(expectedHtml);
    });
});
