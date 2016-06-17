angular.module('app').controller('addMovieController', function(movieService, $routeParams, $location, $filter) {
    var vm = this; 
    vm.label = "Add/Edit Movies";
    vm.id = $routeParams.id;
    vm.newshow = {};
    if (vm.id) {
        movieService.getMovieById(vm.id).then(function (data) {
            vm.newshow = data;
        });
    }
    vm.addShow = function (show) {        
        movieService.addMovie(show).then(function () {
            vm.newshow = {};
            $location.path('/Movies');
        });
    };
    vm.updateShow = function (show) {
        movieService.updateMovie(show).then(function () {
            vm.newshow = {};
            $location.path('/Movies');
        });
    };
});