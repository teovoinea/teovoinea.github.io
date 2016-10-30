import React from 'react';
import {Component} from 'react';
import Project from './Project.jsx';
class App extends Component{
	render() {
		return (
				<div className="container-fluid col-md-12">
					<div className="row">
					<Project account="teovoinea"
						title="glifrp"
						description="desc"
						demo="wikipedia.org"
						image="https://raw.githubusercontent.com/teovoinea/GLIFRP/master/GLIFRP.png?token=AHxextkSPxcdws0MSVTnbPST6fBJwKSTks5XHmigwA%3D%3D"
						bootstrap="col-md-4"
					 />
					<Project account="teovoinea"
						title="teovoinea.github.io"
						description="desc"
						demo="wikipedia.org"
						bootstrap="col-md-4"
					 />
					<Project account="rtemelkovski"
						title="memnotes"
						description="desc"
						demo="wikipedia.org"
						bootstrap="col-md-4"
					 />
					</div>
				</div>
		);
	}
}

export default App;
