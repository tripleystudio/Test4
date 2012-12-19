function EsaList(title)
{
	
	Ti.API.info("ZUKA======NN");
	
	var window = Ti.UI.createWindow({
		backgroundColor:'white',
		title : 'エサ'
	});
	
	//var GetSaveData = require('../http');
	//var vv = new GetSaveData(window);
	
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
  
 
  
for (var i=0;i<rowData.length;i++) 
{
      var image = Ti.UI.createImageView({  
        image:'/images/chichi/un_00.png',  
        left:5,  
        width:120,  
        height:120,  
    }); 	  
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
     /*
    var username = Ti.UI.createLabel({  
        text:rowData[i].price,  
        color:"#000000",  
        font:{fontSize:36,fontWeight:'bold'},  
        top:5,  
//        left:70,  
        right:10,  
        height:'auto'  
    });  
    */  
    var tweet = Ti.UI.createLabel({  
    	font:{fontSize:50,fontWeight:'bold'},  
        text:rowData[i].name,  
        color:"#202020",  
        left:150  
    });  
    
    var info = Ti.UI.createLabel({  
        text:rowData[i].info,  
        color:"#202020",  
        top:85,  
        left:150,  
        bottom:5  
    });      
      
    var row = Ti.UI.createTableViewRow({  
        className:"Twitter",  
        //backgroundImage:'/images/b1.png',  
        height:150  
    });  
      
    row.add(image);  
    row.add(tweet);  
    row.add(info);

    
    row.rowNum = i;
      
    data.push(row);  
}  	
    
    var list = Ti.UI.createTableView({
      data : data,
    });	
	
	 window.add(list);
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
		    sampleLabel.height = 140;
		    row.add(sampleLabel); 
		    data.push(row); 
		}
		var tableView = Ti.UI.createTableView({
		    data: data
		});
		window.add(tableView);			
			
	}
	http.send();	
*/
	
	
	return window;
};

module.exports = EsaList;
