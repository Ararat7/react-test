import React, {Component} from 'react';
import routes from "../routes";
import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
`;

export default class App extends Component {
    render() {
        return (
            <Section>
                <header>
                    <h1>Welcome to React</h1>
                </header>
                <main>
                    <BrowserRouter>
                        {routes}
                    </BrowserRouter>
                </main>
            </Section>
        );
    }
}