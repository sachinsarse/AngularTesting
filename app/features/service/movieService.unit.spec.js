// describe('Service: movieService', function () {

//     beforeEach(module('app'));

//     var movieService;
//     var httpBackend;
//     beforeEach(inject(function ($httpBackend, _movieService_) {
//         httpBackend = $httpBackend;
//         movieService = _movieService_;
//     }));
//     afterEach(function () {
//         httpBackend.verifyNoOutstandingExpectation();
//         httpBackend.verifyNoOutstandingRequest();
//     });

//     describe('grade', function () {
//         it('sets the strength to "strong" if the password length is >8 chars', function () {
//             expect(movieService.grade('longerthaneightchars')).toEqual('strong');
//         });

//         it('sets the strength to "weak" if the password length <3 chars', function () {
//             expect(movieService.grade('a')).toEqual('strong');
//         });
//     });

//     describe('Api call', function () {
//         it('should call the API', function () {
//             var response = ['one thing', 'another thing'];
//             dataReturned = [];
//             httpBackend.expectGET('api/getData').respond(response);
//             movieService.getData().then(function (data) {
//                 dataReturned = data;
//             });
//             httpBackend.flush();
//             expect(dataReturned).toEqual(response);
//         });
//     })
// });