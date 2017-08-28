function myObj ()  
{
    this.a= 10;
    this.b= 2;
    this.hello =  function () {
        console.log("World " + this.a);
    };
    //return this;
    
}

function myObj3 (num)  
{
	return num+this.a;
}
//myObj.prototype.getA = function(){console.log(this.a); } ;
function myParentObj ()  
{
    this.c= 3;
    this.d= 4;
    //return this;
    
}


myParentObj.prototype.getC = function(){console.log(this.c); };
myParentObj.prototype.getD = function(){console.log(this.d); };


var o1 =  new myObj();
var o2 =  new myParentObj();
var o3 = new myObj3();
//var o3 =  
o1.__proto__ = o2;
console.log("fighter");
console.log ( o1.c );
console.log ( o1.d );
o2.getC();
o2.getD();
console.log ( "jet");
 o1.hello();
console.log ( myObj3.call(o1, 2) );