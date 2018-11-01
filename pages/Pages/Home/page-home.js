import React from 'react';
import Index from "../../index"
import "../../style.css"
// import {Col} from "react-materialize";
// import js from "../../Assets/js.png"
import {Grid, Image} from "react-bootstrap"
import {Col, Row} from "react-materialize"

const divStyle = {
    backgroundColor: "yellow",
    color: 'blue',
    height: "100%"
};
export default () => (

    <Index>
        <div className={"home_"}>
        </div>
        <Grid>
            <Col m={12} s={12}>
                {/*<div className={"home"}>*/}
                <Row>
                    <Col l={1} m={1} s={12}/>
                    <Col l={10} m={10} s={12}>
                        <Row>
                            <Col l={5} m={12} s={12}>
                                <Image className={"img_"}
                                       src={'/static/me.jpg'}
                                       circle/>
                            </Col>
                            <Col l={7} m={12} s={12}>
                                <Row className={"row_name"}>
                                    <span><b className={"name_"}>Yosafat Bama Arintoko |</b>  <span
                                        className={"title_"}>Fullstack Developer</span> </span>
                                </Row>

                            </Col>
                            <Col l={7} m={12} s={12}>
                                <Row className={"row_name"}>
                                    <img width={64}
                                         src={'/static/js.png'}
                                    /> {'  '}
                                    <img width={64}
                                         src={'/static/php.png'}
                                    />{'  '}
                                    <img width={64}
                                         src={'/static/next.png'}
                                    />{'  '}
                                    <img width={64}
                                         src={'/static/redux.png'}
                                    />{'  '}
                                    <img width={64}
                                         src={'/static/react.png'}
                                    />{'  '}
                                    <img width={64}
                                         src={'/static/lumen.png'}
                                    />{'  '}
                                    <img width={64}
                                         src={'/static/node.png'}
                                    />
                                </Row>
                            </Col>
                            <Col l={5} m={12} s={12}>
                            </Col>
                            <Col l={7} m={12} s={12}>
                                <Row>
                                    <Col l={7} m={7} s={12}>
                                        <div>
                                            <img width={20}
                                                 src={'/static/mail.png'}
                                            /> {'  '}yosafatbama.arintoko@gmail.com{' '}
                                        </div>
                                    </Col>
                                    <Col l={5} m={5} s={12}>
                                        <div>
                                            <img width={22}
                                                 src={'/static/github.png'}
                                            /> {'  '}@bamaarintoko
                                        </div>
                                    </Col>


                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col l={1} m={1} s={12}/>
                </Row>
                {/*</div>*/}
            </Col>
        </Grid>
    </Index>
)