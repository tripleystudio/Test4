
function ShopScene(title)
{
	var window = Ti.UI.createWindow({
		backgroundColor:'white',
		title : title
	});	
	
	var	height = Ti.Platform.displayCaps.platformHeight;
	var	width = Ti.Platform.displayCaps.platformWidth;	
	
	var H1 = Titanium.UI.createButton({
		backgroundImage:'/images/head.png', //Imageの場合、透過にならない。
		top:0,
		width : 640,
		height : 332
	});	
	
	var B1 = Titanium.UI.createButton({
		backgroundImage:'/images/b1.png', //Imageの場合、透過にならない。
		
		top : 332,
		width : 640,
		height : 100
	});
	
	// intent
/*	
button1.addEventListener(
    'click',
    function(){
        Ti.API.debug('create intent');
        var intent = Titanium.Android.createServiceIntent( { url: 'testservice.js' } );
        intent.putExtra('interval', 10000);
        intent.putExtra('twitter_id', 'kurain');
        var service = Titanium.Android.createService(intent);
        service.start();
    }
);
*/	
	B1.addEventListener('click', function(e){
		
	    var win2 = Ti.UI.createWindow({
	    url:'../list/winwin.js',
	    title:'Win 2',
	    backgroundColor:'#fff',
	    home:function() {}
	  });
       win2.open();
    });	
	
	
	var B2 = Titanium.UI.createButton({
		backgroundImage:'/images/b1.png', //Imageの場合、透過にならない。
		
		top : 480,
		width : 640,
		height : 100
	});
	
	var B3 = Titanium.UI.createButton({
		backgroundImage:'/images/b1.png', //Imageの場合、透過にならない。
		
		top : 630,
		width : 640,
		height : 100
	});		
	window.add(H1);
	window.add(B1);
	window.add(B2);
	window.add(B3);	
	
	
	
	return window;
};

module.exports = ShopScene;
