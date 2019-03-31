var m = angular.module('app', ['ui.router'])


.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams) {
        $rootScope.title = toState.title;
    });

}])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    //默认页面
    $urlRouterProvider.otherwise('/hot.html');
    $stateProvider

    //热门电影
        .state('hotmovie', {
            'url': '/hot.html',
            'templateUrl': './function/hot_movie.html',
            'controller': 'hotmovie',
            'title': '热门影片'
        })
        //即将上映
        .state('soonmovie', {
            'url': '/soon.html',
            'templateUrl': './function/soon_movie.html',
            'controller': 'soonmovie',
            'title': '即将上映的影片'
        })
        //排行榜
        .state('rankingmovie', {
            'url': '/ranking/{id}',
            'templateUrl': './function/ranking_movie.html',
            'controller': 'filmmovie',
            'title': '影片排行榜'
        })
        //上映中
        .state('filmmovie', {
            'url': '/film.html',
            'templateUrl': './function/film_movie.html',
            'controller': 'filmmovie',
            'title': '上映中影片'
        })
        //发布
        .state('addmovie', {
            'url': '/add.html',
            'templateUrl': './function/add_movie.html',
            'controller': 'addmovie',
            'title': '发布影片'
        })
        .state('details', {
            'url': '/details/{id}',
            'templateUrl': './function/details_movie.html',
            'controller': 'detailsmovie'
        })
        .state('search', {
            'url': '/search/{items}',
            'templateUrl': './function/search_movie.html',
            'controller': 'search'
        })
        //收藏影片
        .state('collectedmovie', {
            'url': '/collectedMovie.html',
            'templateUrl': './function/collected_movie.html',
            'controller': 'collectedMovie',
            'title': '我的收藏'
        })
        //广播
        .state('broadcast', {
            'url': '/broadcast.html',
            'templateUrl': './php/broadcast.php',
            'title': '更多'
        })
        //更多
        .state('more', {
            'url': '/more.html',
            'templateUrl': './php/more.php',
            'title': '更多'
        });

}])