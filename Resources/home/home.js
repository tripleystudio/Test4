
function HomeScene(title) 
{
	var window = Ti.UI.createWindow({
		backgroundColor:'white',
		title : title
	});

	// Obtain game module
	var quicktigame2d = require('com.googlecode.quicktigame2d');
	
	// Create view for your game.
	// Note that game.screen.width and height are not yet set until the game is loaded
	var game = quicktigame2d.createGameView();

	// Frame rate can be changed (fps can not be changed after the game is loaded)
	game.fps = 30;
	
	// set initial background color to black
	game.color(1.0, 1.0, 1.0);

	game.debug = true;
	
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
/*
Titanium.Network.addConnectivityListener('change', function(e) {
    var online = e.online;
    var type = e.networkType;
    var networkTypeName = e.networkTypeName;
});
*/

/* 
 * Listener function for 'touchstart' and 'touchstart_pointer' events.
 * Before using touch event, call registerForMultiTouch() to enable multi touch support.
 *
 * Note that ALL gesture events including 'click' and 'dblclick' are disabled on Android
 * when multi touch support is enabled
 * 
 * Use e.points to handle multiple pointers. 
 *
 * 'touchstart_pointer' is called when a non-primary pointer has gone down on Android.
 * 'touchstart_pointer' event is never used on iOS.
 * 
 * See http://developer.android.com/reference/android/view/MotionEvent.html for details about motion events on Android.
 */
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

/* 
 * Listener function for 'touchend' and 'touchend_pointer' events.
 * Before using touch event, call registerForMultiTouch() to enable multi touch support.
 * Use e.points to handle multiple pointers
 *
 * Note that ALL gesture events including 'click' and 'dblclick' are disabled on Android
 * when multi touch support is enabled
 *
 * 'touchend_pointer' is called when a non-primary pointer has gone up on Android.
 * 'touchend_pointer' event is never used on iOS.
 * 
 * See http://developer.android.com/reference/android/view/MotionEvent.html for details about motion events on Android.
 */
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

/* 
 * Listener function for 'touchmove' events.
 * Before using touch event, call registerForMultiTouch() to enable multi touch support.
 * Use e.points to handle multiple pointers
 *
 * Note that ALL gesture events including 'click' and 'dblclick' are disabled on Android
 * when multi touch support is enabled
 *
 */

game.addEventListener('touchstart', onTouchStart);
game.addEventListener('touchmove',  onTouchStart);
game.addEventListener('touchstart_pointer', onTouchStart); // Called only on Android

game.addEventListener('touchend', onTouchEnd);
game.addEventListener('touchend_pointer', onTouchEnd); // Called only on Android

// Add your game view
window.add(game);
//window.open({fullscreen:true, navBarHidden:true});var window = Ti.UI.createWindow({backgroundColor:'black'});
return window;
};

module.exports = HomeScene;
