import React from 'react';
import {Component} from 'react';

class Project extends Component{

	constructor(props) {
		super(props);
		this.state = {
			name: "loading....",
			account: props.account,
			title: props.title,
			style: props.style,
			img: props.image,
			bootstrap: props.bootstrap
		};	
	}

	componentDidMount() {
		
		$.ajax({
			url: 'https://api.github.com/repos/' + this.state.account + '/' + this.state.title,
			dataType: 'json',
			success: function(result) {
				//console.log(result);
				
				this.setState({
					name: result.name,
					url: result.html_url,
					img: this.state.img,
					//TODO (teo): demo
					description: result.description,
					style: this.state.style,
					bootstrap: this.state.bootstrap	
				});
			}.bind(this)
		});
	}

	render() {
		//TODO (teo): demo <a href={this.state.demo}>Demo</a> 
		return (
			<div className={this.state.bootstrap} style={this.state.style}>
				<h1>{this.state.name}</h1>
				<img src={this.state.img}></img>
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
		    demo: React.PropTypes.string,
			bootstrap: React.PropTypes.string
		    };

Project.defaultProps = {account: 'teovoinea',
			title: 'glifrp',
			bootstrap: 'col-md-4',
			style: {textAlign: 'center'}
			};

export default Project;
