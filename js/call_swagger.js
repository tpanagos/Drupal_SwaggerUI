/*!
 * Drupal_SwaggerUI JavaScript v1.0
 * http://point.io
 *
 */
 
 (function ($) {

    Drupal.behaviors.SwaggerSetup = {
    attach: function (context, settings) {
	    window.swaggerUi = new SwaggerUi({
                discoveryUrl:"http://test.point.io/spec0.json",
                apiKey:"special-key",
                dom_id:"swagger-ui-container",
                supportHeaderParams: false,
                supportedSubmitMethods: ['get', 'post', 'put'],
                onComplete: function(swaggerApi, swaggerUi){
                	if(console) {
                        console.log("Loaded SwaggerUI")
                        console.log(swaggerApi);
                        console.log(swaggerUi);
                    }
                  $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
                },
                onFailure: function(data) {
                	if(console) {
                        console.log("Unable to Load SwaggerUI");
                        console.log(data);
                    }
                },
                docExpansion: "none"
            });

            window.swaggerUi.load();
    }
  };

})(jQuery);
