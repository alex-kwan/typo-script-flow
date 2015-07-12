/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../two/two.d.ts" />
/// <reference path="../math/math12.d.ts" />

import TwoModule = require('../two/two');
import MathModule = require('../math/math12');

import React = require('react');

import RepoDisplayModule = require('../reacttest/RepoDisplay');

let RepoDisplay = RepoDisplayModule.RepoDisplay;


var Math12 = MathModule.Math12;
var add = Math12.add;
var isEven = Math12.isEven;


require('../../style/test.less');
require('./index.less');

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

  let settings = { url: 'https://api.github.com/users/microsoft/repos?sort=updated' };

$.ajax(settings).then((data) => {
	let content =
		<div>
			{data.map((entry, i) =>
				<RepoDisplay key={i} {...entry} url={entry.html_url} />
			)}
		</div>;
	let target = document.getElementById('output');
	React.render(content, target);
});
  //
  // let settings = { url: 'https://api.github.com/users/microsoft/repos?sort=updated' };
  //
  // 	let target = document.getElementById('output');
  //
  //
  //   let content = <RepoDisplay key='a2' url='baa' />
  // 	React.render(content, target);
  // });

});
