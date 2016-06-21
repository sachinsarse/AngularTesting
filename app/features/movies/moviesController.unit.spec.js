describe('Testing Movie controller', function () {

var movies = [
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
        } 
    ];

    beforeEach(module('app'));

    var controller;
    var scope;  

    beforeEach(angular.mock.module(function ($provide) {
        $provide.service('movieService', function mockService($q) {
            return {
                getMovies: function () {
                    var deferral = $q.defer();
                    deferral.resolve(movies);
                    return deferral.promise;
                }
            };
        });
    }));

    beforeEach(angular.mock.inject(function (_$controller_, $rootScope, movieService) {
        scope = $rootScope.$new();
        movieService = movieService;
        controller = _$controller_('moviesController', {});
    }));

    it('should have a moviesController controller', function () {
        expect(controller).toBeDefined();
        expect(controller).not.toBe(null);
    }); 
    it('should call service method and return data controller', function () {
        expect(controller.gridItems.length).toEqual(0);
        scope.$digest();
        expect(controller.gridItems.length).toEqual(2);        
    }); 
    describe('grade', function () {
        it('sets the strength to "strong" if the password length is >8 chars', function () {           
            controller.grade('longerthaneightchars');
            expect(controller.strength).toEqual('strong');
        });

        it('sets the strength to "weak" if the password length <3 chars', function () {            
            controller.grade('a');
            expect(controller.strength).toEqual('weak');
        });
    });
});
