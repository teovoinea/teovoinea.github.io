import React from 'react';
import {Component} from 'react';
import Project from './Project.jsx';
class App extends Component{
	render() {
		var MediaQuery = require('react-responsive');
		return (
				<div>
				<MediaQuery query='(max-width: 1224px)'>
						<div className="container-fluid col-md-12">
							<div className="row">
								<div id="projectCarousel" className="carousel slide" data-ride="carousel" style={{top: '5%'}}>
									<ol className="carousel-indicators">
										<li data-target="#projectCarousel" data-slide-to="0" className="active"></li>
										<li data-target="#projectCarousel" data-slide-to="1"></li>
										<li data-target="#projectCarousel" data-slide-to="2"></li>
									</ol>

									<div className="carousel-inner" role="listbox">
										<div className="item active">
											<Project account="teovoinea"
												title="glifrp"
												description="desc"
												demo="wikipedia.org"
												image="https://raw.githubusercontent.com/teovoinea/GLIFRP/master/GLIFRP.png?token=AHxextkSPxcdws0MSVTnbPST6fBJwKSTks5XHmigwA%3D%3D"
												style={{paddingBottom: '5%', paddingTop: '5%'}}

											 />
										</div>
										<div className="item">
											<Project account="teovoinea"
												title="teovoinea.github.io"
												description="desc"
												demo="wikipedia.org"
												style={{paddingBottom: '5%', paddingTop: '5%'}}
											 />
										</div>
										<div className="item">
											<Project account="rtemelkovski"
												title="memnotes"
												description="desc"
												demo="wikipedia.org"
												image="http://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/334/309/datas/gallery.jpg"
												style={{paddingBottom: '5%', paddingTop: '5%'}}
											 />
										</div>
									</div>
									<a className="left carousel-control" href="#projectCarousel" role="button" data-slide="prev">
											<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
											<span className="sr-only">Previous</span>
									</a>
									<a className="right carousel-control" href="#projectCarousel" role="button" data-slide="next">
										<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
										<span className="sr-only">Next</span>
									</a>
								</div>
							</div>
						</div>
			</MediaQuery>
			<MediaQuery query='(min-device-width: 1224px)'>
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
								image="http://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/334/309/datas/gallery.jpg"
								bootstrap="col-md-4"
							 />
						</div>
					</div>
			</MediaQuery>
			</div>
		);
	}
}

export default App;
