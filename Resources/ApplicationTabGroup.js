function ApplicationTabGroup() 
{
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	var HomeScene = require('home/home');
	var ShopScene = require('home/shop');
	var Zukan = require('list/zukan');
	var ConfigScene = require('home/config');
	
	//create app tabs
	var win1 = new HomeScene(L('home'));
	//var win2 = new HomeScene(L('home'));
	//var win3 = new HomeScene(L('home'));
	var win4 = new HomeScene(L('home'));
	var	win2 = new ShopScene(L('shop'));
	var win3 = new Zukan(L('zukan'));
	//var win4 = new ConfigScene(L('config'));
		
	
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('shop'),
		icon: '/images/KS_nav_views.png',		
		window: win2
	});	
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: L('zukan'),
		icon: '/images/KS_nav_views.png',
		window: win3
	});
	
	win3.containingTab = tab3;	
	
	var tab4 = Ti.UI.createTab({
		title: L('config'),
		icon: '/images/KS_nav_views.png',
		window: win4
	});
	
	win4.containingTab = tab4;	
	
	
	self.addTab(tab1);		// home
	self.addTab(tab2);		//　shop
	self.addTab(tab3);		// 
	self.addTab(tab4);
	
	return self;
};

module.exports = ApplicationTabGroup;
