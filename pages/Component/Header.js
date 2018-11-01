import React, {Component} from 'react';
import {Navbar, NavItem, Icon} from "react-materialize";
import Link from 'next/link'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar style={{backgroundColor: '#61dafb'}} right>
                    <Link as="/" href="../Pages/Home/page-home">
                        <NavItem>
                            <a style={{fontSize: 14, fontWeight: "bold"}}>
                                Home
                            </a>
                        </NavItem>
                    </Link>
                    <Link as="/work" href="../Pages/Work/page-work">
                        <NavItem>
                            <a style={{fontSize: 14, fontWeight: "bold"}}>
                                Work
                            </a>
                        </NavItem>
                    </Link>
                    <Link as="/resume" href="../Pages/Resume/page-resume">
                        <NavItem>
                            <a style={{fontSize: 14, fontWeight: "bold"}}>
                                Resume
                            </a>
                        </NavItem>
                    </Link>
                </Navbar>
            </div>
        )
    }
}

export default Header;