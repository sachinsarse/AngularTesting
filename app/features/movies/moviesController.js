angular.module('app').controller('moviesController', function(movieService) {
    var vm = this;
    vm.gridItems = [];
    vm.searchInput = '';
    vm.label = "List of Movies"; 
    vm.deleteMovie = function (item){
        movieService.deleteMovie(item.id).then(function (){
        });
    };

    vm.getMovies = function () {
        movieService.getMovies().then(function (data) {
            vm.gridItems = data;
        });
    };
    vm.getMovies();

    vm.strength = '';
    vm.grade = function (password) {
        var size = password.length;
        if (size > 8) {
            vm.strength = 'strong';
        } else if (size > 3) {
            vm.strength = 'medium';
        } else {
            vm.strength = 'weak';
        }
    };
});
