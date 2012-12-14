var base = Ti.UI.currentWindow;
 
 
var btn_next = Titanium.UI.createButton({
  title:'Open Window 2',
	bottom:35,
	width:225,
	height:35,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});

base.add(btn_next);


//var base = Ti.UI.createWindow();
/*
var nav  = Ti.UI.iPhone.createNavigationGroup({
  window : win1
});
*/
//base.add(nav);

	var rows = [
	    {title:'Row 1', hasChild:true},
	    {title:'Row 2', hasDetail:true},
	    {title:'Row 3', hasCheck:true},
	    {title:'Row 4'}
	];
    var list = Ti.UI.createTableView({
      data : rows
    });
	base.add(list);

	//base.open();

//base.addEventListener('click',function(){
	
	/*
  var http = Ti.Network.createHTTPClient();
  http.open('GET','http://makers.sakura.ne.jp/chi/getShop.php?category=1');
  http.onload = function(){
  	
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
    
    var list = Ti.UI.createTableView({
      data : data,
    });
    list.addEventListener('click',function(e){
    	/*
		var alertDialog = Titanium.UI.createAlertDialog({
		    title: 'キャンセルのテスト',
		    message: 'テスト',
		    buttonNames: ['OK','きゃんせる'],
		    // キャンセルボタンがある場合、何番目(0オリジン)のボタンなのかを指定できます。
		    cancel: 1
		});
	    alertDialog.show();	
	    */
/*
    });
    base.add(list);
    base.open();
  };
  http.send();
  
  */
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




