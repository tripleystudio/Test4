function Zukan(title)
{
	
	var window = Ti.UI.createWindow({
		backgroundColor:'white',
		title : title
	});
	
	//var GetSaveData = require('../http');
	//var vv = new GetSaveData(window);
	
	var http = Ti.Network.createHTTPClient();
	http.open('GET','http://makers.sakura.ne.jp/poke/php/getranking.php');
	http.onload  = function() 
	{
	    this.data = this.responseData;
		Ti.API.info("data"+this.data);
		// テーブルを生成
		var re = ""+this.data;
		var res = re.split(",");
		
		var sampledata_list = [{text: res[0]}, {text: res[1]}, {text: res[2]}, {text: 'サンプル4'}, {text: 'サンプル5'}]; 
		var data = []; 
		
	    var photo = Ti.UI.createView({
	        backgroundImage:'/images/list/e1.png',
	        top:5,
	        left:10,
	        width:100,
	        height:100
	    });
	    photo.rowNum = 0;		
		
		for(var i=0; i<sampledata_list.length; i++){
		    var sampledata = sampledata_list[i];
		    var row = Ti.UI.createTableViewRow(); 
		    var sampleLabel = Ti.UI.createLabel(); 
		    sampleLabel.text = sampledata.text;
			var btn = Ti.UI.createButton();
			btn.title = '100';
		    
		    photo.addEventListener('click', function(e){
		        // 上でセットしたrowNumにあたるe.source.rowNumでデータを特定する
		    });
			
		    
		    row.add(sampleLabel);
		    //row.add(photo);
		    row.add(btn); 
		    data.push(row); 
		}
		var tableView = Ti.UI.createTableView({
		    data: data
		});
		window.add(tableView);			
			
	}
	http.send();	

	
	
	return window;
};

module.exports = Zukan;
