import React from 'react';
import {Component} from 'react';
import Project from './Project.jsx';
class App extends Component{

	componentDidMount() {
		$("#slick-scroll").slick({
			dots: true,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  slidesToScroll: 1,
		});
	}

	render() {
		return (
				<div>
					<div className="col-md-6 col-sm-12 col-xs-12 col-md-offset-3">
						<div id="slick-scroll">
								<Project account="teovoinea"
									title="glifrp"
									description=""
									image="https://raw.githubusercontent.com/teovoinea/GLIFRP/master/GLIFRP.png?token=AHxextkSPxcdws0MSVTnbPST6fBJwKSTks5XHmigwA%3D%3D"
								 />
								<Project account="icefalcn"
									title="PGP2IMG"
									description="PGP2IMG utilizes keybase's public key encryption which also provides verifiable identities so your work can never be impersonated

	Advanced steganography techniques securely transport and store your files

	Make sure your files get back home even through the most oppressive government regimes"
									image="pgp2img.png"
								 />
								<Project account="rtemelkovski"
									title="memnotes"
									description=""
									image="memnote.png"
								 />
								<Project account="teovoinea"
									title="steganography"
									description=""
								/>
						</div>
					</div>
				</div>
		);
	}
}

export default App;
