/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../two/two.d.ts" />
/// <reference path="../math/math12.d.ts" />

import TwoModule = require('../two/two');
import MathModule = require('../math/math12');

var Math12 = MathModule.Math12;
var add = Math12.add;
var isEven = Math12.isEven;

class Person {

  constructor(name:string)
	{
		this.name=name;
	}
	name: string;
}

function greeter (person:string){
	return "hallo my name is "+person;
}
var person=new Person("bert");
var two= new TwoModule.Two("word");
var word = two.say();
$(document).ready(function(){
    var message = greeter(word);
  $("#status")[0].innerHTML=message + " " + isEven(add(2,2)) + " cool eh x2?";
});
