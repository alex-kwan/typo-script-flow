/// <reference path="../../typings/react/react.d.ts"/>
/// <reference path="../../typings/react/react-jsx.d.ts"/>
/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="./AnotherDisplay.d.ts"/>

import AnotherDisplayModule = require('./AnotherDisplay');
require('./RepoDisplay.less');

let Another = AnotherDisplayModule.AnotherDisplay;
interface RepoProps extends React.Props<any> {
	name: string;
	url: string;
	description: string;
}
class RepoDisplay extends React.Component<RepoProps, {}> {
	render() {
		return <div className="index-green col-lg-12">
			<span style={{'fontWeight': 'bold'}}><a href={this.props.url}>{this.props.name}</a>: </span>
			<div><Another name='a1' type='a2'/></div>
			<span>{this.props.description}</span>
		</div>;
	}
}

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
