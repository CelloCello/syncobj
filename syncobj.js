/**
 * SyncObj

 */
(function () {

    var SyncObj = function(doneFn) {
      var vm = this;
      vm.idx = 0;
      vm.funcList = [];   // [func, params]
      vm.doneFn = doneFn || function(){};

      vm.addFunc = function(func, params) {
        params = params || {};
        vm.funcList.push([func, params]);
      };

      vm.addObjFunc = function(obj, func, params) {
        params = params || {};
        vm.funcList.push([func, params, obj]);
      };      

      vm.start = function() {
        if (vm.funcList.length <=0 ) return ;

        var func = vm.funcList[vm.idx];
        if (func.length == 3)
          func[0].call(func[2], func[1], vm.successCb, vm.errorCb);
        else
          func[0](func[1], vm.successCb, vm.errorCb);
      };

      vm.successCb = function(data) {
        vm.idx++;
        if (vm.idx < vm.funcList.length) {
          vm.start();
        } else {
          vm.doneFn();
        }
      };

      vm.errorCb = function(data) {
        var func = vm.funcList[vm.idx];
      };

    };



    window.SyncObj = SyncObj;

}());
