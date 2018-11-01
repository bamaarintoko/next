import React from "react";
import Index from "../../index";
import {Col} from "react-materialize";
import {Grid, Row, Image} from "react-bootstrap";
import "../../style.css"

export default () => (
    <Index>
        <Grid>
            <Col m={12} s={12} style={{marginTop: 10}}>
                <Row>
                    <Col m={5} s={12} className={"center_name"}>
                        <h3>Yosafat Bama Arintoko</h3>
                        <p>Fullstack Developer</p>
                        <Image className={"img_"}
                               src={'/static/me.jpg'}
                               circle/>
                    </Col>
                    <Col m={7} s={12}>
                        <div className={"education_div"}>
                            <p>Education</p>
                        </div>
                        <div>
                            <Row className={"row_resume"}>
                                <Col m={2} s={2}>
                                    <div className={"div_year"}>
                                        2008 - 2011
                                    </div>
                                    <div className={"div_year"}>
                                        2011 - 2015
                                    </div>

                                </Col>
                                <Col m={1} s={2} className={"center_circle"}>
                                    <div id={"outer"}>
                                        <div id={"inner"}>
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </div>

                                </Col>
                                <Col m={9}>
                                    <div className={"div_edu"}>
                                        <p><b>SMK N 2 Yogyakarta</b></p>
                                        Computer and Network Engineering
                                    </div>
                                    <div className={"div_edu"}>
                                        <p><b>Duta Wacana Christian University</b></p>
                                        Information Systems
                                    </div>

                                </Col>
                            </Row>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col m={5} s={12}>
                        <div className={"education_div"}>
                            <p>Contact</p>
                        </div>
                        <div style={{marginTop:10}}>
                            <Row>
                                <Col m={1} s={2}>
                                    <img width={20}
                                         src={'/static/mail.png'}
                                    />
                                </Col>
                                <Col m={11} s={10}>
                                    {'  '}yosafatbama.arintoko@gmail.com{' '}
                                </Col>
                            </Row>
                            <Row>
                                <Col m={1} s={2}>
                                    <img width={20}
                                         src={'/static/github.png'}
                                    />
                                </Col>
                                <Col m={11} s={10}>
                                    {'  '}@bamaarintoko{' '}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col m={7} s={12}>
                        <div className={"education_div"}>
                            <p>Experience</p>
                        </div>
                        <div style={{marginTop: 10}}>
                            <Row>
                                <Col m={2} s={2}>
                                    <div className={"div_year"}>
                                        2015 - 2016
                                    </div>
                                    <div className={"div_year"}>
                                        2016 - 2018
                                    </div>
                                </Col>
                                <Col m={1} s={2}>
                                    <div id={"outer"}>
                                        <div id={"inner"}>
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col m={9} s={8}>
                                    <div className={"div_edu"}>
                                        <p><b>Online Shop</b></p>
                                        Sell basketball equipment, like shoes, uniform, shocks.
                                    </div>
                                    <div className={"div_edu"}>
                                        <p><b>PT SMS</b></p>
                                        Fullstack Developer
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Grid>
    </Index>
)