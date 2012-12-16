var base = Ti.UI.currentWindow;



 
var btn_next = Ti.UI.createButton({
  title:'Open Window 2',
	bottom:35,
	width:225,
	height:35,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});

//base.add(btn_next);
//var base = Ti.UI.createWindow();


//base.add(nav);

	//base.open();

//base.addEventListener('click',function(){
var indicator = Titanium.UI.createActivityIndicator({
	message : "読み込み中",
	width : 'auto'
});
indicator.show();	
	
  var http = Ti.Network.createHTTPClient();
  http.timeout = 2000;
  http.open('GET','http://makers.sakura.ne.jp/chi/getShop.php?category=1');
  http.onload = function(){
  	
    this.data = this.responseData;
	Ti.API.info("data"+this.data);
	// テーブルを生成
	var re = ""+this.data;
	var res = re.split(",");
	  /*	
    var sampledata_list = [{text: res[0]}, {text: res[1]}, {text: res[2]}, {text: 'サンプル4'}, {text: 'サンプル5'}]; 
    
	var data = []; 
	
	var l = Ti.UI.createLabel();
	var row = Ti.UI.createTableViewRow(); 
	l.text = 'TEXT';
	l.backgroundColor = 'black';
    row.add(l); 
    data.push(row);	
    */
    /*
	for(var i=0; i<sampledata_list.length; i++)
	{
	    var sampledata = sampledata_list[i];
	    var row = Ti.UI.createTableViewRow(); 
	    var label = Ti.UI.createLabel(); 
	    label.text = sampledata.text;
	    label.height = 'auto';
	    //label.Image = '/images/ene1.png';
	    label.left = 20;
	    row.add(label); 
	    data.push(row); 
	}    
	*/
	
var rowData = [  
    {info:"説明文" ,name:"アイテム1", price:"100"},  
    {info:"説明文" ,name:"アイテム2", price:"500"},  
    {info:"説明文" ,name:"アイテム3", price:"1000"},  
    {info:"説明文" ,name:"アイテム4", price:"100"},  
    {info:"説明文" ,name:"アイテム5", price:"500"},  
    {info:"説明文" ,name:"アイテム6", price:"1500"},  
    {info:"説明文" ,name:"アイテム7", price:"8000"},  
    {info:"説明文" ,name:"アイテム7", price:"8000"},  
     {info:"説明文" ,name:"アイテム7", price:"8000"},  
         {info:"説明文" ,name:"アイテム7", price:"8000"},  
             {info:"説明文" ,name:"アイテム7", price:"8000"},      
                 {info:"説明文" ,name:"アイテム7", price:"8000"},  
                     {info:"説明文" ,name:"アイテム7", price:"8000"},  
                         {info:"説明文" ,name:"アイテム7", price:"8000"},  
                             {info:"説明文" ,name:"アイテム7", price:"8000"},  
                                 {info:"説明文" ,name:"アイテム7", price:"8000"},  
                                     {info:"説明文" ,name:"アイテム7", price:"8000"},  
                                         {info:"説明文" ,name:"アイテム7", price:"8000"},     
];  
  
var data = [];  
  
      var image = Ti.UI.createImageView({  
        url:'/images/ene1.png',  
        top:5,  
        left:5,  
        width:60,  
        height:60,  
        bottom:5  
    });  
  
for (var i=0;i<rowData.length;i++) {  
  /*
    var image = Ti.UI.createImageView({  
        url:'/images/ene1.png',  
        top:5,  
        left:5,  
        width:60,  
        height:60,  
        bottom:5  
    });  
      */
    var username = Ti.UI.createLabel({  
        text:rowData[i].price,  
        color:"#000000",  
        font:{fontSize:32,fontWeight:'bold'},  
        top:5,  
//        left:70,  
        right:10,  
        height:'auto'  
    });  
      
    var tweet = Ti.UI.createLabel({  
        text:rowData[i].name,  
        color:"#202020",  
        top:5,  
        left:70  
//        bottom:5  
    });  
    
    var info = Ti.UI.createLabel({  
        text:rowData[i].info,  
        color:"#202020",  
        top:45,  
        left:70,  
        bottom:5  
    });      
      
  
    var row = Ti.UI.createTableViewRow({  
        className:"Twitter",  
        //backgroundImage:'/images/b1.png',  
        height:'auto'  
    });  
      
    row.add(image);  
    row.add(tweet);  
    row.add(info);

    row.add(username);  
    
    row.rowNum = i;
      
    data.push(row);  
}  	
    
    var list = Ti.UI.createTableView({
      data : data,
    });
    list.addEventListener('click',function(e){
    	
    	var text = rowData[e.source.rowNum].name +"買いますか？";
    
    	
		var alertDialog = Titanium.UI.createAlertDialog({
		    title: '購入確認',
		    message: text,
		    buttonNames: ['はい','きゃんせる'],
		    // キャンセルボタンがある場合、何番目(0オリジン)のボタンなのかを指定できます。
		    cancel: 1
		});
	    alertDialog.show();	
	    

    });
    base.add(list);
    base.open();
  };
  http.send();
  
indicator.hide();  
//});

/*
var http = Ti.Network.createHTTPClient();
http.open('GET','http://makers.sakura.ne.jp/chi/getShop.php?category=1');
http.onload  = function() 
{
    this.data = this.responseData;
	Ti.API.info("data"+this.data);
	// テーブルを生成
	var re = ""+this.data;
	var res = re.split(",");
	
	var sampledata_list = [{text: res[0]}, {text: res[1]}, {text: res[2]}, {text: 'サンプル4'}, {text: 'サンプル5'}]; 
	var data = []; 
	for(var i=0; i<sampledata_list.length; i++)
	{
	    var sampledata = sampledata_list[i];
	    var row = Ti.UI.createTableViewRow(); 
	    var sampleLabel = Ti.UI.createLabel(); 
	    sampleLabel.text = sampledata.text;
	    sampleLabel.height = 40;
	    row.add(sampleLabel); 
	    data.push(row); 
	}
	var tableView = Ti.UI.createTableView({
	    data: data
	});
	win1.add(tableView);			
		
}
http.send();	

*/




