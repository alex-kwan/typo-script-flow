/// <reference path="../../typings/react/react.d.ts"/>
/// <reference path="../../typings/react/react-jsx.d.ts"/>
/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="./AnotherDisplay.d.ts"/>

import AnotherDisplayModule = require('./AnotherDisplay');
require('./RepoDisplay.less');

import React = require('react');

let Another = AnotherDisplayModule.AnotherDisplay;

export interface RepoProps extends React.Props<any> {
	name: string;
	url: string;
	description: string;
}
export class RepoDisplay extends React.Component<RepoProps, {}> {
	render() {
		return <div className="index-green col-lg-12">
			<span style={{'fontWeight': 'bold'}}><a href={this.props.url}>{this.props.name}</a>: </span>
			<div><Another name='a1' type='a2'/>I got hot loading to work</div>
			<span>{this.props.description}</span>
		</div>;
	}
}
