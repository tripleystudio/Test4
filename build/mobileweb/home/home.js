var H4 = Ti.UI.createImageView({  
    image:'/images/chichi/maru.png',  
});    
var push = false;

// require AdMob
if( Ti.App.isAndroid )
{

	var Admob = require('ti.admob');

	// then create an adMob view
	var adMobView = Admob.createView({
	    publisherId:"a15001ad6ad10a5",
	    testing:false, // default is false
	    //top: 10, //optional
	    //left: 0, // optional
	    //right: 0, // optional
	    bottom: 0, // optional
	    adBackgroundColor:"FF8855", // optional
	    backgroundColorTop: "738000", //optional - Gradient background color at top
	    borderColor: "#000000", // optional - Border color
	    textColor: "#000000", // optional - Text color
	    urlColor: "#00FF00", // optional - URL color
	    linkColor: "#0000FF" //optional -  Link text color
	    //primaryTextColor: "blue", // deprecated -- now maps to textColor
	    //secondaryTextColor: "green" // deprecated -- now maps to linkColor
	    
	});
	
	
	//listener for adReceived
	adMobView.addEventListener(Admob.AD_RECEIVED,function(){
	   // alert("ad received");
	   Ti.API.info("ad received");
	});
	
	//listener for adNotReceived
	adMobView.addEventListener(Admob.AD_NOT_RECEIVED,function(){
	    //alert("ad not received");
	     Ti.API.info("ad not received");
	});

}

	var	height = Ti.Platform.displayCaps.platformHeight;
	var	width = Ti.Platform.displayCaps.platformWidth;
	
	var gentenx = H4.getRect().x;
	var genteny = H4.getRect().y;
	//var current_height = Ti.UI.currentWindow.height;
	
	var scale = 1.0;
	var add_scale = 0.0;
	var sub_scale = 0.0;
	
	var text = Ti.UI.createLabel({
		text : 'TEXT',
		top : 0
	})
    var Message = Ti.UI.createLabel({  
        top:160,
		left:width/2-320 + 60        
    }); 	
    
	var count = 0;
	
	var img = [];
	
setInterval(function() {
	
	//height = Ti.Platform.displayCaps.platformHeight - 0.1 * Ti.Platform.displayCaps.platformHeight;
	//width = Ti.Platform.displayCaps.platformWidth;

	
	count++;
	
	if( push )
	{			
		sub_scale = 0;
  		add_scale += 0.0014;
    	scale += add_scale;
    	if(scale > 5)
    	{
    	 scale = 5;	
    	 
        var transform = Ti.UI.create2DMatrix().scale(0);
        var view = Ti.UI.createView({
                backgroundColor:'black',
                transform:transform,
                opacity:0,
                top:100,
                height:height-200,
                width:width-100
        });
        var close = Ti.UI.createButton({
                title:'閉じる',
                width:100,
                height:50
        });
        view.add(close);
        window.add(view);
        var animation = Ti.UI.createAnimation();
        animation.top = 0;
        animation.bottom = 0;
        animation.width = width-100;
        animation.height = height-200;
        animation.opacity = 1;
        animation.duration = 500;
        animation.transform = Ti.UI.create2DMatrix();
        view.animate(animation);
        close.addEventListener('click',function()
        {
                view.animate({
                        top:80,
                        height:height-200,
                        width:width-100,
                        opacity:0,
                        duration:400
                },function()
                {
                        window.remove(view);
                });
        });
    	 
    	}
    	H4.left = null;
    	H4.top = null;
    	
	}else{		
		
		if(add_scale != 0)		
		{
		sub_scale = add_scale;
		add_scale = 0;
		}
		if(sub_scale < 1.0) {
			sub_scale += 0.0014;
		}
		scale -= sub_scale;
		if(scale < 0.40)
		{
			scale = 0.40;
		}
	   	H4.left = null;
    	H4.top = null;		
	}
	
   	H4.left = null;
   	H4.top = null;	
	
	H4.width = scale * 200;
	H4.height = scale * 200;	
	
	var l = H4.getRect().x;
	var t = H4.getRect().y;
		
	if(count > 90 || push)
	{
		var ss = 79;
		if(push ) ss = 20;
		
		var s = ss *scale;
		
		var ran = Math.random() - 0.5;
		var rany = Math.random() - 0.5;
		
		H4.left = l + ran * s ;
		H4.top = t + rany * s;
	}else{
		H4.left = null;
		H4.top = null;
				
	}		
		
	if(count > 100) 
	{	
		count = 0;
	}
//	if(img.length > 0)
	
	if(count > 2000) 
	{
		if(Ti.App.isAndroid ) adMobView.requestAd();
		count = 0;
	}
	/*
	for(var i = 0;i< 50;i++)
	{
		//img[i].
		img[i].top +=  50+i;	
		if(img[i].top > height) img[i].top = 0;
	}
	*/
}, 33);	

function HomeScene(title) 
{
	
	var window = Ti.UI.createWindow({
		backgroundColor:'white',
		title : title,
		navBarHidden:true,
		exitOnClose:false		
	});
	


	// Obtain game module
	//var quicktigame2d = require('com.googlecode.quicktigame2d');
	
	// Create view for your game.
	// Note that game.screen.width and height are not yet set until the game is loaded
    var H1 = Ti.UI.createImageView({  
        image:'/images/Top_header.jpg',  
        top:0,
        width:640,
        height:220
    }); 	
    

    var Point = Ti.UI.createLabel({  
        color:"#000000",  
        font:{fontSize:52,fontWeight:'bold'},  
        top:55,  
//        left:70,  
        right:width/2-90
    });     
	
    Message.text = "テスト中///";
	
    var H2 = Ti.UI.createImageView({  
        image:'/images/hall000.jpg',  
        //top:220  
    }); 		
    /*
	H2.addEventListener('click', function() 
	{
        var transform = Ti.UI.create2DMatrix().scale(0);
        var view = Ti.UI.createView({
                backgroundColor:'black',
                transform:transform,
                opacity:0,
                top:100,
                height:height-200,
                width:width-100
        });
        var close = Ti.UI.createButton({
                title:'閉じる',
                width:100,
                height:50
        });
        view.add(close);
        window.add(view);
        var animation = Ti.UI.createAnimation();
        animation.top = 0;
        animation.bottom = 0;
        animation.width = width-100;
        animation.height = height-200;
        animation.opacity = 1;
        animation.duration = 500;
        animation.transform = Ti.UI.create2DMatrix();
        view.animate(animation);
        close.addEventListener('click',function()
        {
                view.animate({
                        top:80,
                        height:height-200,
                        width:width-100,
                        opacity:0,
                        duration:400
                },function()
                {
                        window.remove(view);
                });
        });

		
		window.containingTab.open(Ti.UI.createWindow({
			url:'../list/get.js',
			backgroundColor: 'white',
			animated:true,
			fullscreen:true

		}));
		
	});    
    */
    var H3 = Ti.UI.createImageView({  
        image:'/images/Top_food_water.jpg',  
        bottom:0
    });     
	
    var Esa = Ti.UI.createLabel({  
        color:"#000000",  
        font:{fontSize:36,fontWeight:'bold'},          
        bottom : 10,
        center: width/2-160
    }); 
	
    var Water = Ti.UI.createLabel({  
        color:"#000000",  
        font:{fontSize:36,fontWeight:'bold'},  
        bottom : 10,
		center: width/2+160
    }); 	

	// セーブデータ
	Point.text = "20000";
	Esa.text = ""+Ti.App.Esa;
	Water.text = ""+Ti.App.Water;




    H4.addEventListener('touchstart',function(e){
    	
    	Message.text = "おされてる～";
    	
    	push = true;


    });
    
H4.addEventListener('touchend', function(e){
    Message.text = "離れたね～";
    push = false;
		    
});
    

window.add(H1);
window.add(Point);
window.add(Message);
window.add(H2);

window.add(H3);
window.add(H4);
window.add(text);
window.add(Esa);
window.add(Water);

if(Ti.App.isAndroid)window.add(adMobView);

	for(var i = 0;i < 0;i++)
	{
		var U1 = null;	
		
		if(i % 3 == 0)
		{
	    U1 = Ti.UI.createImageView({  
	        image:'/images/chichi/un_00.png',  
	        top:0  
	    });
	    }else
	   	if(i % 3 == 1)
	   	{ 
	  	 U1 = Ti.UI.createImageView({  
	        image:'/images/chichi/un_01.png',  
	        top:0  
	    });
	    }else
	    { 	    
	   	 U1 = Ti.UI.createImageView({  
	        image:'/images/chichi/un_02.png',  
	        top:0  
	    }); 	    
	    }
	    U1.layout  = 'vertical';
	    U1.top = -(Math.random() % 200) * 500;
	    
	    var wnum = width / 60;
	    U1.left = i * wnum;
		var r = (Math.random()%100)+1;
	    U1.height = 120 * r* 0.5;
	    U1.width = 120 * r * 0.5;

	    		
		if(i % 3 == 0)
		{
	    img.push(U1);
	   }else
	  	if(i % 3 == 1)
	  	{
	  		img.push(U1);
	  	}else{
	  		img.push(U1);
	  	}
		window.add(img[i])
	}
	

//window.open({fullscreen:true, navBarHidden:true});var window = Ti.UI.createWindow({backgroundColor:'black'});
return window;
};

module.exports = HomeScene;
