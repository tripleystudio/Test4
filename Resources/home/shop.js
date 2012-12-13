
function ShopScene(title)
{
	var window = Ti.UI.createWindow({
		backgroundColor:'white',
		title : title
	});	
	
	var B1 = Titanium.UI.createButton({
		backgroundImage:'/images/b1.png', //Imageの場合、透過にならない。
		
		y : 300,
		width : 640,
		height : 100
	});
	
	window.add(B1);	
	
	
	
	return window;
};

module.exports = ShopScene;
