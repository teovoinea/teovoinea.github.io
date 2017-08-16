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
			bootstrap: props.bootstrap,
			description: props.description,
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
					description: this.state.description == "" ? result.description : this.state.description,
					style: this.state.style,
					bootstrap: this.state.bootstrap	
				});
			}.bind(this)
		});
	}

	render() {
		//TODO (teo): demo <a href={this.state.demo}>Demo</a> 
		return (
			<div className={this.state.bootstrap + " project"} style={this.state.style}>
				<div className="spacing"></div>
				<img src={this.state.img}></img>
				<div className="spacing"></div>
				<h3>{this.state.name}</h3>
				<p>{this.state.description}</p>
				<a href={this.state.url} className="btn btn-default" role="button">Source</a>
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
			style: {textAlign: 'center'},
			imagepadding: false,
			textpadding: false
			};

export default Project;
