
function ShopScene(title)
{
	var window = Ti.UI.createWindow({
		backgroundColor:'white',
		title : title,
		navBarHidden:true,
		exitOnClose:false
	});	

	
	var	height = Ti.Platform.displayCaps.platformHeight;
	var	width = Ti.Platform.displayCaps.platformWidth;	
	
    var H1 = Ti.UI.createImageView({  
        url:'/images/Top_header.jpg',  
        top:0  
    }); 	
    
    var top = 220;
    
    var nokori = (height-1000) / 6;
    if(nokori < 0) nokori = 0;
    
    //nokori = 0;
    
    //top +=nokori;
    var B1 = Ti.UI.createImageView({  
        url:'/images/menu_hall.jpg',  
        top:top
    });  

    top +=(nokori+100);
    var L1 = Ti.UI.createImageView({  
        url:'/images/menu_plate_black.jpg',  
        top:top
    });       
    top +=(nokori+50);
    var B2 = Ti.UI.createImageView({  
        url:'/images/menu_food.jpg',  
        top:top
    });   
    top +=(nokori+100);
    var L2 = Ti.UI.createImageView({  
        url:'/images/menu_plate_black.jpg',  
		top:top        
    });          
    top +=(nokori+50);
    var B3 = Ti.UI.createImageView({  
        url:'/images/menu_water.jpg',  
        top:top
    });   
    top +=nokori+100;
    var L3 = Ti.UI.createImageView({  
        url:'/images/menu_plate_black.jpg',  
        top:top
    });             


	/*
	var H1 = Titanium.UI.createButton({
		Image:'/images/Top_header.jpg', //Imageの場合、透過にならない。
		top:0,
		width : 'auto',
		height : 'auto'
	});	
	
	*/
	
	/*
	var B1 = Titanium.UI.createButton({
		backgroundImage:'/images/menu_hall.jpg', //Imageの場合、透過にならない。
		
		top : 332,
		width : 640,
		height : 100
	});
	*/
	
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

	B1.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		window.containingTab.open(Ti.UI.createWindow({
			title: L('shop'),
			url:'../list/winwin.js',
			backgroundColor: 'white'
		}));
	});

	/*
	B1.addEventListener('click', function(e){
		
	    var win2 = Ti.UI.createWindow({
	    url:'../list/winwin.js',
	    title:'Win 2',
	    backgroundColor:'#fff',
		navBarHidden:true,
		exitOnClose:false,	    
	    home:function() {}
	  });

	  
       win2.open();
    });
    */
    	
	
	/*
	var B2 = Titanium.UI.createButton({
		backgroundImage:'/images/menu_food.jpg',
		top : 480,
		width : 640,
		height : 100
	});
	
	var L2 = Ti.UI.createLabel({
		backgroundImage:'menu_plate_black.jpg'
		
		
	})
	
	var B3 = Titanium.UI.createButton({
		backgroundImage:'/images/menu_water.jpg', //Imageの場合、透過にならない。
		
		top : 630,
		width : 640,
		height : 100
	});		
	
	*/
	window.add(H1);
	window.add(B1);
	window.add(L1);
	window.add(B2);
	window.add(L2);
	window.add(B3);	
	window.add(L3);
	
	
	return window;
};

module.exports = ShopScene;
