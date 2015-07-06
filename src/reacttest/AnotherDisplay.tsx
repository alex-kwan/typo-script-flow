/// <reference path="../../typings/react/react.d.ts"/>
/// <reference path="../../typings/react/react-jsx.d.ts"/>
/// <reference path="../../typings/jquery/jquery.d.ts"/>

export interface AnotherProps extends React.Props<any> {
	name: string;
  type: string;
}

export class AnotherDisplay extends React.Component<AnotherProps, {}> {
	render() {
		return <div>
			<span>{this.props.name} -> {this.props.type} </span>
		</div>;
	}
}
