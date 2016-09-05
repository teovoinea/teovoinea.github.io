import React from 'react';
import {Component} from 'react';

class Project extends Component{
	constructor(props) {
		super(props);
		//hit git with url to fill in other props
		this.state = {url: props.url,
			      image: props.image,
			      title: props.title,
			      description: props.description,
			      demo: props.demo};
	}
	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<img src={this.state.img}/>
				<p>{this.state.description}</p>
				<a href={this.state.url}>URL</a>
				<a href={this.state.demo}>Demo</a> 
			</div>
		);
	}
}

Project.propTypes = {url: React.PropTypes.string,
		     image: React.PropTypes.string,
		     title: React.PropTypes.string,
		     description: React.PropTypes.string,
		     demo: React.PropTypes.string
		    };

Project.defaultProps = {url: "http://google.com",
			image: "http://google.com",
			title: "Example Project",
			description: "Example Description",
			demo: "http://wikipedia.org"
			};

export default Project;
