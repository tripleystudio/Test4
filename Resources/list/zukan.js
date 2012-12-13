function EsaList(title)
{
	
	Ti.API.info("ZUKA======NN");
	
	var window = Ti.UI.createWindow({
		backgroundColor:'black',
		title : 'エサ'
	});
	
	//var GetSaveData = require('../http');
	//var vv = new GetSaveData(window);
	
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
		window.add(tableView);			
			
	}
	http.send();	

	
	
	return window;
};

module.exports = EsaList;
