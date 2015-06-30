/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../two/two.d.ts" />
/// <reference path="../math/math12.d.ts" />

import TwoModule = require('../two/two');
import MathModule = require('../math/math12');

var Math12 = MathModule.Math12;
var add = Math12.add;
var isEven = Math12.isEven;


require('../../style/test.less');

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
  var element = $("#status")[0];
 element.innerHTML = "<div class='pink'>"+isEven(add(2,3))+"</div>"

});
