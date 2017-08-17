import React from 'react';
import {Component} from 'react';
import Project from './Project.jsx';
class App extends Component{

	render() {
		return (
			<div className="col-md-12">
				<div>
					<h2>Projects</h2>
					<hr></hr>
				</div>
				<div className="row">
					<Project account="teovoinea"
						title="glifrp"
						description="Geo webapp to find the best places to live"
						image="https://raw.githubusercontent.com/teovoinea/GLIFRP/master/GLIFRP.png?token=AHxextkSPxcdws0MSVTnbPST6fBJwKSTks5XHmigwA%3D%3D"
						bootstrap="col-md-4 col-sm-12"
						/>
					<Project account="icefalcn"
						title="PGP2IMG"
						description="Encrypt files or messages in plain sight"
						image="pgp2img.png"
						bootstrap="col-md-4 col-sm-12"
						/>
					<Project account="teovoinea"
						title="steganography"
						image="https://crates.io/assets/Cargo-Logo-Small-c39abeb466d747f3be442698662c5260.png"
						description=""
						bootstrap="col-md-4 col-sm-12"
					/>
				</div>
				<div>
					<ul>
						<li><p><strong><a className="link" href="www.github.com/teovoinea/txtr">txtr</a></strong> - Send sms campaigns from a simple csv</p></li>
						<li><p><strong><a className="link" href="https://github.com/FutureProg/Caster">Caster</a></strong> - Podcast service</p></li>
						<li><p><strong><a className="link" href="https://github.com/rtemelkovski/MemNotes">MemNotes</a></strong> - Communication system for patients suffering from mental illness</p></li>
						<li><p><strong><a className="link" href="https://github.com/nazimamin/YHack-FillSeat">FillSeat</a></strong> - 🚁 Fill those last few seats on your flight</p></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
