Wordpress-shortcode-translator
==============================

Whatever is in the given selector, replace wordpress shortcodes with elaborated markup. Currently supports:
twitter, soundcloud, youtube

Installation
------------

Install via npm:

    npm install -D wordpress-shortcode-translator

Usage
-----

If you have content within certain elements in your html, do something like the following:

    $(document).ready(function(){
        $('.story').each(function(i) {
            this.innerHTML = wordpressShortcodeTranslator.translate(this.innerHTML);
        });
    });

.story markup is iteratively replaced with translated markup respective to the shortcode vendor.
Note: twitter widget js and any vendor necessary items are loaded as necessary.

License
-------

Copyright (c) 2016 Jon Robison

See included LICENSE for licensing information
