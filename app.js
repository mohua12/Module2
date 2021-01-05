(function() {
  angular.module('myapp',[])
  .controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)
//

var listitem=[
{
  name:"Bread",
  quantity:12
},
{
  name:"Cookie",
  quantity:10
},
{
  name:"Biscuit",
  quantity:5
},
{
  name:"Banana",
  quantity:12
},
{
  name:"Eggs",
  quantity:12
},

]

function ToBuyController(ShoppingListCheckOffService,$scope){
//$scope.TobuyList=[];
//$scope.TobuyList=listitem;
var itemadder=this;
itemadder.TobuyList=[];
itemadder.TobuyList=listitem;
itemadder.AddItem=function(item){
ShoppingListCheckOffService.AddItem(item.name,item.quantity);
itemadder.TobuyList=ShoppingListCheckOffService.removeItems(item);
}
}

function AlreadyBoughtController(ShoppingListCheckOffService,$scope){
//$scope.TobuyList=TobuyList;
var showlist=this;
showlist.items=ShoppingListCheckOffService.getItems();


}

function ShoppingListCheckOffService()
{
var service=this;
var items=[];
service.AddItem=function(itemname,quantity)
{
  var item={
    name:itemname,
    quantity:quantity
  };
  items.push(item);
}
service.getItems=function()
{
  return items;
}
service.removeItems=function(itemindex)
{
  listitem.splice(listitem.indexOf(itemindex),1);
  return listitem;
}
}
})();
