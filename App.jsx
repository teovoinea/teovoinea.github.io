import React from 'react';
import {Component} from 'react';
import Project from './Project.jsx';
class App extends Component{
	render() {
		return (
			<div>
				<div style={{'text-align': 'center'}}>
					<Project url="google.com"
						title="sample project"
						description="desc"
						demo="wikipedia.org"
						style={{'width': '33%', 
							'display': 'inline-block'
						}}
					 />
					
					<Project url="github.com"
						title="test project"
						description="this is a description"
						demo="reddit.com"
						style={{'width': '33%',
							'display': 'inline-block'}} 
					/>

					<Project url="w3.org"
						title="final project"
						description="last description"
						demo="news.ycombinator.com"
						style={{'width': '33%',
							'display': 'inline-block'}} 
					/>	
				</div>
			</div>
		);
	}
}

export default App;
