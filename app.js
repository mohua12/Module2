(function() {
  angular.module('myapp',[])
  .controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)
ToBuyController.$inject=['ShoppingListCheckOffService'];


var TobuyList=[
{
  name:"Bread"
  quantity:"12"
},
{
  name:"Cookie"
  quantity:"10"
},
{
  name:"Biscuit"
  quantity:"5"
},
{
  name:"Bread"
  quantity:"12"
},
{
  name:"Bread"
  quantity:"12"
},

]
function ToBuyController(ShoppingListCheckOffService,$scope){
$scope.TobuyList=TobuyList;

}
})();
