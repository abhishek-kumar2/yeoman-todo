'use strict';

describe('Controller: HeadHeadctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('yomanToDoApp'));

  var HeadHeadctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeadHeadctrlCtrl = $controller('HeadHeadctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
