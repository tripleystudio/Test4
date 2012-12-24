
function GetSaveData()
{
	var http = Ti.Network.createHTTPClient();
	http.open('GET','http://makers.sakura.ne.jp/chi/login.php?id=pcuser1');
	http.onload  = function() 
	{		
	    this.data = this.responseData;
		Ti.API.info("data"+this.data);
		// テーブルを生成
		var re = ""+this.data;
		var res = re.split(",");	
		
		// ユーザ情報取得
		Ti.App.Esa = res[0];	
		Ti.App.Water = res[1];
		
		
		var num = res[2];
		for(var i = 0;i < num;i++)
		{	
			Ti.App.Items.push(res[2+i]);
		}				
	}
	
	http.send();
}

module.exports = GetSaveData;
