import React from 'react';
import {Component} from 'react';
import Project from './Project.jsx';
class App extends Component{
	render() {
		return (
			<div>
				<div style={{'textAlign': 'center'}}>
					<Project account="teovoinea"
						title="glifrp"
						description="desc"
						demo="wikipedia.org"
						style={{'width': '33%', 
							'display': 'inline-block'
						}}
					 />
					<Project account="teovoinea"
						title="teovoinea.github.io"
						description="desc"
						demo="wikipedia.org"
						style={{'width': '33%', 
							'display': 'inline-block'
						}}
					 />
					<Project account="rtemelkovski"
						title="memnotes"
						description="desc"
						demo="wikipedia.org"
						style={{'width': '33%', 
							'display': 'inline-block'
						}}
					 />
				</div>
			</div>
		);
	}
}

export default App;
