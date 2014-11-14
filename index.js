
request = require('request');
htmlparser = require('htmlparser2');
htmlmin = require('html-minifier').minify;


/*
request({url: 'http://frontend-labs.com/internal/kasnet/Templates/landingKasnet.html', json: false, method: 'GET'}, function(error, response, body){
    if (!error && response.statusCode == 200) {
        response.setEncoding('utf8');
        var regexUrl = /(href\=)(\"|\')(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\"|\')/gi;
        newRegEx = new RegExp(regexUrl);
        var url = '<a href="http://frontend-labs.com/category/vim" >Vim</a>';
        var b = body.toString();
        a = regexUrl.test(b);
        console.log(b);
        //console.log('server encoded the data as: ' + (response.headers['content-encoding'] || 'identity'))
        var arrayUrls = b.match(regexUrl);
        //console.log(arrayUrls.length);
        newRegEx.lastIndex = 0;
        regexUrl.lastIndex = 0;
    }
})
*/

//url = 'http://frontend-labs.com/internal/kasnet/Templates/landingKasnet.html';
url = 'http://frontend-labs.com/category/vim';


request({url: url}, function(error, response, body){
    if (!error && response.statusCode == 200) {

    		console.log('response.statusCode == 200');

    		response.setEncoding('utf8');

    		var b = body.replace(/\'/gi, '"');
            
  		    b = b.replace(/\'|\<\!\-\-|\-\-\>|\/\*|\*\//gi, "");
    		b = b.replace(/\<\!\[\CDATA\[|\]\]\>|\*/gi, "");

            b = b.replace(/(\<\!\[endif\])/gi, "");

            b = b.replace(/(\[if lt IE 9\]\>)/gi, "");

            b = b.replace(/\<\!DOCTYPE html\>/gi, "");

            
            b = b.replace(/type=\"text\/javascript\"/gi, "");
            b = b.replace(/type=\"text\/css\"/gi, "");
            

            b = b.replace(/(<script\s)(.)+(>)(<\/script>)/gi, "");

            //b = b.replace(/(<script\s>)(\s*|.*)+(<\/script>)/gi, "");

            
            //b = b.replace(/(<style\s>)(\s*|.*)+(<\/style>)/gi, "");




            
            console.log(b);



            var regex = /(href\=)(\"|\')(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\"|\')/g;

            var arr = b.match(regex);
            regex.lastIndex = 0
            console.log(arr)
            console.log(arr.length);



            





                		//b = b.replace(/(\<\s*script[^\>]*\>)(\s|.*)+(\<\s*\/\s*script\s*\>)/ig, "");
                        //b = b.replace(/(\<\s*script[^\>]*\>)(\s*|.*)+(\<\/\s*script[^\>]*\>)/ig, "");
                        //b = b.replace(/(\<\s*style[^\>]*\>)(\s*|.*)+(\<\/\s*style[^\>]*\>)/ig, "");
            
                        //b = b.replace(/(\<\s*script[^\>]*\>)(\s*|.*)+(\<\/\s*script[^\>]*\>)/ig, "");


            /*
            b = htmlmin(b, {
                removeComments: true,
                removeAttributeQuotes: true,
                minifyJS: true,
                minifyCSS:true,
                removeEmptyElements: true,
                removeOptionalTags: true,
                removeStyleLinkTypeAttributes: true,
                removeScriptTypeAttributes: true
            })
            */ 

            //console.log(b);
            //console.log('- - - - - - - - - -');



    		
/*
var abc = 'Google Analytics<script type="text/javascript">
(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,"script","//www.google-analytics.com/analytics.js","ga");

ga("create", "UA-52967407-1", "auto");
ga("require", "displayfeatures");
ga("send", "pageview");

</script>
 End of Google Analytics';

            console.log(abc);*/


    }
});



