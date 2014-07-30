/*
* MamfFitText.js 1.0
* Author: Paweł Kopociński
*/

(function( $ ){

    $.fn.mamfFitText = function( options ) {

        return this.each(function(){

            // Store the object
            var $this = $(this);

            // Resizer() resizes items based on the object width [and height]
            var resizer = function () {
                var text = $this.text().split(' '),
                    html = '',
                    maxWidth = options.maxWidth || $this.width(),
                    maxHeight = options.maxHeight || false,
                    fontSize = parseInt($this.css('fontSize')),
                    flag = true;

                for ( i in text ) {
                    html += '<span>' + text[i] + '</span> ';
                }

                $this.html(html);
                var spans = $this.find('span');

                while (flag) {
                    $this.css('font-size', (fontSize++) + 'px');

                    if (maxHeight && $this.height() >= maxHeight) {
                        flag = false;
                        break;
                    }

                    spans.each(function(i, el){
                        if ($(el).width() >= maxWidth)
                            flag = false;
                    });
                }
            };

            // Call once to set.
            resizer();
        });

    };

})( jQuery );