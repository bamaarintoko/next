import React from "react";
import Index from "../../index";
import {Col} from "react-materialize"
import {Grid, Row, Image} from "react-bootstrap";
// import "/static/css/font-awesome.min.css"
// import faStyles from 'font-awesome/css/font-awesome.css'

export default () => (
    <Index>
        <Grid>
            <Col l={12} m={12} s={12} style={{marginTop: 10}}>
                <Row>
                    <Col l={6} m={6} s={12}>
                        <div className={"border_image"}>
                            <Image className={"image_right"}
                                   src="http://shmector.com/_ph/10/356948332.png"
                            />
                            <div style={{float: 'left'}}>
                                <h3><p>Derma Buku</p></h3>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div style={{float: 'left'}}>
                                <p>Platform : {' '}
                                    <i className="fa fa-android" aria-hidden="true"
                                       style={{color: '#A4C639', fontSize: 18}}/>{' '}
                                    <i className="fa fa-apple" aria-hidden="true"
                                       style={{fontSize: 18, color: "#000"}}/>{' '}
                                    <i className="fa fa-globe" aria-hidden="true"
                                       style={{fontSize: 18, color: "#000"}}/></p>
                                <p>Language</p>
                                <p>Short Description</p>
                            </div>
                        </div>
                    </Col>
                    <Col l={6} m={6} s={12}>
                        <div className={"border_image"}>
                            <Image className={"image_right"}
                                   src="http://shmector.com/_ph/10/356948332.png"
                            />
                            <div style={{float: 'left'}}>
                                <h3><p>KamadjajaX</p></h3>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div style={{float: 'left'}}>
                                <p>Platform</p>
                                <p>Language</p>
                                <p>Short Description</p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Col>
        </Grid>
    </Index>
)