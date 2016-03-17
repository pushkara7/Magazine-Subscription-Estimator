(function(){
    var app = angular.module('myMagazine',[]);
    
    app.controller('MagazineCtrl',['$scope',function($scope){
        
        $scope.vogue = 1.2;
        $scope.vogue_stu = 1.6;
        $scope.time = 1.4;
        $scope.marie = 1.2;
        $scope.shope = 1.1;
        
        $scope.subscription_options = [1,3,6,12,24,36];
        
        $scope.current_subscrption = 1 ;
        $scope.mon_issues = 4;
        $scope.discount = 20/100;
       
        $scope.calculate = function(){

            $scope.vogue_price = (
                $scope.vogue * $scope.current_subscrption * $scope.mon_issues).toFixed(1);
  
            $scope.time_price = (
                $scope.time * $scope.current_subscrption * $scope.mon_issues).toFixed(1);
            
            $scope.marie_price = (
                $scope.marie * $scope.current_subscrption * $scope.mon_issues).toFixed(1);
            
            $scope.shope_price = (
                $scope.shope * $scope.current_subscrption * $scope.mon_issues).toFixed(1); 
            
            $scope.vogue_price_act = ($scope.vogue_price -($scope.vogue_price * $scope.discount)).toFixed(1);  
            
            $scope.time_price_act = ($scope.time_price - ($scope.time_price * $scope.discount)).toFixed(1);   
            
            $scope.marie_price_act = ($scope.marie_price - ($scope.marie_price * $scope.discount)).toFixed(1); 
            
            $scope.shope_price_act = ($scope.shope_price - ($scope.shope_price * $scope.discount)).toFixed(1);  
        };
           
        $scope.calculate ();   
        
    }]);   
})();