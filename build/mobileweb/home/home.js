
//var quicktigame2d = require('com.googlecode.quicktigame2d');
//var game = quicktigame2d.createGameView();

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
    bottom: -50, // optional
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
/*
var adRequestBtn = Ti.UI.createButton({
    title:"Request an ad",
    top:80,
    height: 30,
    width: 300
});

adRequestBtn.addEventListener("click",function(){
    adMobView.requestAd();
});

var adRequestBtn2 = Ti.UI.createButton({
    title: "Request a test ad",
    top: 120,
    height: 30,
    width: 300
});

adRequestBtn2.addEventListener("click",function(){
    adMobView.requestTestAd();
});
*/

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
		top : 10
	})
    var Message = Ti.UI.createLabel({  
  		left:120,
        top:150  
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
	
	try
	{
	text.text = ""+H4.getRect().x;
	}catch(e)
	{
		
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
	
	/*	
	Message.text = ""+parseInt(img[0].top);
	if(count > 2000) 
	{
		if(Ti.App.isAndroid ) adMobView.requestAd();
		count = 0;
	}
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
        top:0  
    }); 	
    

    var Point = Ti.UI.createLabel({  
        color:"#000000",  
        font:{fontSize:52,fontWeight:'bold'},  
        top:60,  
//        left:70,  
        right:width/2-90
    });     
	Point.text = "20000";
	
	
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
	
/*
	// Frame rate can be changed (fps can not be changed after the game is loaded)
	game.fps = 30;
	
	// set initial background color to black
	game.color(1.0, 1.0, 1.0);

	//game.debug = true;
	
	var shapes = new Array();
	
	// Create game scene
	var scene = quicktigame2d.createScene();

	scene.color(1.0,1.0,1.0);
	// add your scene to game view
	game.pushScene(scene);

	var TOUCH_SCALE = 1;
	
	
	var img_head = quicktigame2d.createSprite({
	//	width:720, 
	//	height:480, 
		image:'head.png',
		top:0,
		width : 640,
		height : 332
		});	



// Onload event is called when the game is loaded.
game.addEventListener('onload', function(e) {
     // We should calculate the view scale because game.size.width and height may be changed due to the parent layout.
    TOUCH_SCALE = game.screen.width  / game.size.width;
    
    // Enable MultiTouch support
    game.registerForMultiTouch();
    
    // Start the game
    game.start();
});

var txt_debug = quicktigame2d.createSprite(
	{
		text : "aaaa",
		top : 150
		
	});

var img_ketu = quicktigame2d.createSprite({
//	width:720, 
//	height:480, 
	image:'osiri.png',
//	alpha:0.5
//	top: -150,
//	left: -200
	});
	
	Ti.API.info("ScreenX:"+game.screen.width);
	img_head.center = {x:Titanium.Platform.displayCaps.platformWidth/2 , top:0};
	img_ketu.center = {x:Titanium.Platform.displayCaps.platformWidth/2 , top:540};
	scene.add(img_ketu);
	scene.add(img_head);
	scene.add(txt_debug);

function Random( v )
{
	var value = 0;
	
	value = Math.random() % v; 
	
	return value;
}

var count = 0;
var push = false;
var push_time = 0;
function updateAliensPosition()
{
	var sc = 2;
	if(push ) sc = 5;
	if(push ) {
		push_time++;
	}else{
		push_time = 0;		
	}
	img_ketu.y = 150 + Math.sin(count) * sc;
	count++;
	if( push ) count+=2;
	if(count > 360) count = 0;
}

game.addEventListener('enterframe', function(e) {
  updateAliensPosition();
});


// NETWORK
// 接続状態が変わる度にイベントを発生させるリスナーです。



var onTouchStart = function(e) {
    
    // On Android, 'touchstart_pointer' event is called right after firing 'touchstart' event when multi touch is detected.
    
    
    for (var pointName in e.points) {
        
        if (typeof shapes[pointName] === 'undefined' || shapes[pointName] == null) {
            shapes[pointName] = quicktigame2d.createSprite({width:128, height:128, image:'osiri.jpg'});
            
            if (e.type == 'touchstart') {
                shapes[pointName].color(1, 0, 0);  // draw red point when shape is created at touchstart
            } else if (e.type == 'touchmove') {
                shapes[pointName].color(0, 1, 0);  // draw green point when shape is created at touchmove
            } else {
                shapes[pointName].color(0, 0, 1);  // draw blue point when shape is created at touchstart__pointer
            }
            
            scene.add(shapes[pointName]);
        }
        
        shapes[pointName].center = {x: e.points[pointName].x * TOUCH_SCALE, y:e.points[pointName].y * TOUCH_SCALE};
    }
    
    push = true;
};


var onTouchEnd = function(e) {
    
    // On Android, 'touchend_pointer' event is called before firing 'touchend' event when multi touch is detected.
    
    
    for (var pointName in e.points) {
        
        if (typeof shapes[pointName] === 'undefined' || shapes[pointName] == null) {
            Ti.API.info("Couldn't find touch: " + pointName);
            continue;
        }
        
        scene.remove(shapes[pointName]);
        
        shapes[pointName] = null;
        delete shapes[pointName];
    }
    
    // clear all rectangles because all poiinters are gone
    if (e.type == 'touchend') {
        for (var pointName in shapes) {
            if (typeof shapes[pointName] === 'undefined' || shapes[pointName] == null) {
                continue;
            }
            scene.remove(shapes[pointName]);
            shapes[pointName] = null;
        }
        shapes.length = 0;
    }
    push = false;
};


game.addEventListener('touchstart', onTouchStart);
game.addEventListener('touchmove',  onTouchStart);
game.addEventListener('touchstart_pointer', onTouchStart); // Called only on Android

game.addEventListener('touchend', onTouchEnd);
game.addEventListener('touchend_pointer', onTouchEnd); // Called only on Android
*/
// Add your game view
//window.add(game);

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
