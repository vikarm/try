app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state("index",{
		url:"/",
		views:{
			'@':{
				templateUrl: 'views/layout.html',
				controller: 'indexctrl'
			},
			'leftmenu@index':{
				templateUrl: 'views/left-menu.html',
				controller: 'leftMenu'
			},
			'navbar@index':{templateUrl: 'views/navbar.html'},
			'maincontent' : {
				templateUrl: 'views/main-content.html',
				controller: 'main-content'}
			}
		})
})
.controller('indexctrl', function(){})
	//
	/*
	.state("create_board",{
		url:"/create board",
		templateUrl:"views/create_board.html",
		controller:"create_board"
	})
	.state("rename_board",{
		url:"/rename board",
		templateUrl:"views/rename_board.html"
		controller:"rename_board"
	})
	.state("delete_board",{
		url:"/delete board",
		templateUrl:"views/delete_board.html"
		controller:"delete_board"
	})
	.state("create_list",{
		url:"/create list",
		templateUrl:"views/create_list.html"
		controller:"create_list"
	})
	.state("rename_list",{
		url:"/rename list",
		templateUrl:"views/rename_list.html"
		controller:"rename_list"
	})
	.state("change_list",{
		url:"/change list",
		templateUrl:"views/change_list.html"
		controller:"change_list"
	})
	.state("delete_board",{
		url:"/rename board",
		templateUrl:"views/rename_board.html"
		controller:"rename_board"
	})
	.state("create_card",{
		url:"/create card",
		templateUrl:"views/create_card.html"
		controller:"create_card"
	})
	.state("edit_card",{
		url:"/edit card",
		templateUrl:"views/edit_card.html"
		controller:"edit_card"
	})
	.state("move_card",{
		url:"/move card",
		templateUrl:"views/move_card.html"
		controller:"move_card"
	})
	.state("delete_card",{
		url:"/delete card",
		templateUrl:"views/delete_card.html"
		controller:"delete_card"
	})
	.state("left-menu",{
		url:"",
		templateUrl:"views/left-menu.html"
		controller:"left-menu"
	})
})*/