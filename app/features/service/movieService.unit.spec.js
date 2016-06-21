describe('movie Service', function () {
    beforeEach(module('app'));

    var movieService;
    var httpBackend;
    beforeEach(inject(function ($httpBackend, _movieService_) {
        httpBackend = $httpBackend;
        movieService = _movieService_;
    }));
    
    var myThings;
    var errorStatus = '';
    var handler;
    beforeEach(function() {
        myThings = [];
        errorStatus = '';
        handler = {
            success: function(data) {
                myThings = data;
            },
            error: function(data) {
                errorStatus = data;
            }
        };
        spyOn(handler, 'success').and.callThrough();
        spyOn(handler, 'error').and.callThrough();
    });
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe('grade', function () {
        it('sets the strength to "strong" if the password length is >8 chars', function () {
            expect(movieService.grade('longerthaneightchars')).toEqual('strong');
        });

        it('sets the strength to "weak" if the password length <3 chars', function () {
            expect(movieService.grade('a')).toEqual('weak');
        });
    });
    it('should return an array of things on success', function() {
        var response = ['one thing', 'another thing'];
        httpBackend.whenGET(/\/api\/things/).respond(response);
        movieService.getThings().then(handler.success, handler.error);
        httpBackend.flush();

        expect(handler.success).toHaveBeenCalled();
        expect(myThings).toEqual(response);
        expect(handler.error).not.toHaveBeenCalled();
        expect(errorStatus).toEqual('');
    });
});