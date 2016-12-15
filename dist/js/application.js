'use strict';

angular.module("fantasticBoxCo", ['ngRoute'])

.config(function($locationProvider, $routeProvider) {
    $routeProvider
        .when('/step-1', {
            templateUrl : './js/pages/step1.html',
            controller  : 'step1Ctrl'
        })

        .when('/step-2', {
            templateUrl : './js/pages/step2.html',
            controller  : 'step2Ctrl'
        })

        .when('/step-3', {
            templateUrl : './js/pages/step3.html',
            controller  : 'step3Ctrl'
        })

        .when('/step-4', {
            templateUrl : './js/pages/step4.html',
            controller  : 'step4Ctrl'
        })

        .when('/total-cost', {
            templateUrl : './js/pages/overview.html',
            controller  : 'overview'
        })

       .otherwise({redirectTo:'/step-1'});

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
});


    /*### Step 1: Box dimension and quantity
 - Enter width, height and length of the box you require
 - Enter the quantity of boxes you would like to order

    ### Step 2: Select Cardboard grade
    FantasticBoxCo offer a variety of grades of cardboard, each altering the price per M^2:

     - A grade: £0.20 M^2
     - B grade: £0.10 M^2
     - C grade: £0.05 M^2 (this option should not be available for boxes larger than 2M^2)

    ### Step 3: Select Print Quality
    A variety of printing options are available for any branding / logos which are required:

     - 3 colour printing: £0.20 M^2
     - 2 colour printing: £0.10 M^2
     - Black only printing: £0.05 M^2
     - No printing (plain cardboard): £0.00
     - FantasticBoxCo branding: 5% discount on total price

    ### Step 4: Optional extras
     - Handles: £0.10 per box
     - Reinforced bottom: £0.05 per box (only available with grade A cardboard
*/
