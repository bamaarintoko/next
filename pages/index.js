import React from 'react';
import Head from 'next/head';
import Header from "./Component/Header"
import {Slider, Slide, Col, Footer} from "react-materialize"

const Index = (props) => (
    <div>
        <Head>
            <title>-</title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="http://malaskoding.com/"/>
            <meta property="og:title"
                  content="We believe in a diverse range of talent and personality brings creative skills and ideas to the web."/>
            <meta property="og:description"
                  content="we designing anything you want, we open minds, we make your app design to the next level"/>


            <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css"/>
            <link href="http://fonts.googleapis.com/css?family=Anton|Righteous|Inconsolata" rel="stylesheet"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                  crossorigin="anonymous"/>

            <link rel="stylesheet" href="/static/font-awesome-4.7.0/css/font-awesome.min.css"/>

        </Head>
        <Header/>

        {props.children}

        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
    </div>
)

export default Index