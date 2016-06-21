angular.module('app').service('movieService', function($q, $timeout, $http){
    this.movies = [
        {
            id: 0,
            title: "Game of Thrones",
            year: 2011,
            favorite: true
        },
        {
            id: 1,
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        },
        {
            id: 2,
            title: 'Firefly',
            year: 2002,
            favorite: true
        },
        {
            id: 3,
            title: 'Banshee',
            year: 2013,
            favorite: true
        },
        {
            id: 4,
            title: 'Greys Anatomy',
            year: 2005,
            favorite: false
        }
    ];
    this.search =  function (nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].id ===parseInt(nameKey) ) {
                return myArray[i];
            }
        }
    };

    this.getMovieById = function(id) {
        var deferral = $q.defer();
        var rec = this.search(id, this.movies);
        deferral.resolve(rec);
        return deferral.promise;
    };
    this.addMovie = function (movie) {
        var deferral = $q.defer();
        movie.id = this.movies.length;
        deferral.resolve(this.movies.push(movie));
        return deferral.promise;
    };
    this.getMovies = function () {
        var deferral = $q.defer();
        deferral.resolve(this.movies);
        return deferral.promise;
    };
    this.deleteRecord = function (id) {
        var i = 0;
        this.movies.forEach(function (element) {         
            if (element.id === id) {
                this.movies.splice(i, 1);
            }
            i = ++i;
        }, this);
        return this.movies;
    };
    this.deleteMovie =function (id){
         var deferral = $q.defer();
        deferral.resolve(this.deleteRecord(id));
        return deferral.promise;
    };

    this.updateMovie = function (show){
        var deferral = $q.defer();
        var rec = this.search(show.id,this.movies);
        rec.title = show.title;
        rec.year = show.year;
        rec.favorite = show.favorite;
        deferral.resolve(rec);
        return deferral.promise;
    };

    var strength = '';
    this.grade = function (password) {
        var size = password.length;
        if (size > 8) {
            strength = 'strong';
        } else if (size > 3) {
            strength = 'medium';
        } else {
            strength = 'weak';
        }
        return strength;
    };

    this.getThings = function() {
        return $http.get('/api/things').then(
            function(response) {
                return response.data;
            },
            function(error) {
                return $q.reject(error.status);
            }
        );
    }
});