import React from 'react';
import {Component} from 'react';
import Project from './Project.jsx';
class App extends Component{
	render() {
		return (
			<div>
				Hello World
				<Project url="google.com" title="sample project" description="desc"
					demo="wikipedia.org" />
			</div>
		);
	}
}

export default App;
