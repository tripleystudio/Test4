var base = Ti.UI.currentWindow;



 
var btn_next = Ti.UI.createButton({
  title:'Open Window 2',
	bottom:35,
	width:225,
	height:35,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});

base.add(btn_next);
//var base = Ti.UI.createWindow();


//base.add(nav);

	//base.open();

//base.addEventListener('click',function(){
var indicator = Titanium.UI.createActivityIndicator({
	message : "読み込み中",
	width : 'auto'
});
indicator.show();	
	

indicator.hide();  