import React from 'react';
import {Component} from 'react';

class Project extends Component{

	constructor(props) {
		super(props);
		this.state = {
			name: "loading....",
			account: props.account,
			title: props.title,
			style: props.style
		};	
	}

	componentDidMount() {
		
		$.ajax({
			url: 'https://api.github.com/repos/' + this.state.account + '/' + this.state.title,
			dataType: 'json',
			success: function(result) {
				console.log(result);
				
				this.setState({
					name: result.name,
					url: result.html_url,
					//TODO (teo): image, demo
					description: result.description,
					style: this.state.style
				});
			}.bind(this)
		});
	}

	render() {
		
		//TODO (teo): demo <a href={this.state.demo}>Demo</a>
		//TODO (teo): image <img src={this.state.img}/>
		return (
			<div style={this.state.style}>
				<h1>{this.state.name}</h1>
				<p>{this.state.description}</p>
				<a href={this.state.url}>URL</a>
			</div>
		);
	}
}

Project.propTypes = {account: React.PropTypes.string,
		     image: React.PropTypes.string,
		     title: React.PropTypes.string,
		     description: React.PropTypes.string,
		     demo: React.PropTypes.string
		    };

Project.defaultProps = {account: "teovoinea",
			title: "glifrp",
			style: {'backgroundColor': 'blue'}
			};

export default Project;
