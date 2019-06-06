
$( document ).ready(function() {

	//페이지 추가시 
	// routes[이름] = {
	// 	url: '#/URL',
	// 	templateUrl: 'view/html이름'
	// };
    var routes = {},
			defaultRoute ='main';

		routes['main'] = {
			url: '#/',
			templateUrl: 'view/main.html'
		};

		routes['calendar'] = {
			url: '#/calendar',
			templateUrl: 'view/calendar.html'
		};

		routes['join'] = {
			url: '#/join',
			templateUrl: 'view/join.html'
		};

		routes['ccm'] = {
			url: '#/ccm',
			templateUrl: 'view/ccm.html'
		};

		routes['board'] = {
			url: '#/board',
			templateUrl: 'view/board.html'
		};

		routes['form'] = {
			url: '#/form',
			templateUrl: 'view/form.html'
		};

		$.router
			.setData(routes)
			.setDefault(defaultRoute);

		$.when($.ready)
			.then(function() {
				$.router.run('.my-view', 'main');
            });
            
});
