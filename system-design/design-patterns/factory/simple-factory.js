class Pizza{
    prepare(){
        console.log('Pizza')
    }
}
class Burger { 
    prepare()
    { console.log("Burger"); }
 }

 class FoodFactory{
    static getFood(type){
        if(type === "pizza") return new Pizza();
    if(type === "burger") return new Burger();
    }
 }

 const food = FoodFactory.getFood('pizza');

 food.prepare();