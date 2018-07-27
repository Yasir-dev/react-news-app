import React, {Component} from 'react';

import './App.css';
import News from './news/News'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    type: 'top-headlines',
                    query: 'country=de',
                    title: 'Deutschland'
                },
                {
                    type: 'top-headlines',
                    query: 'sources=bbc-news',
                    title: 'Worldwide'
                },
                {
                    type: 'top-headlines',
                    query: 'category=technology&country=de',
                    title: 'Technology'
                },
                {
                    type: 'top-headlines',
                    query: 'category=science&country=de',
                    title: 'Science'
                },
                {
                    type: 'everything',
                    query: 'q=(+bvb)AND(dortmund)AND(+borussia)&sortBy=publishedAt',
                    title: 'Borussia Dortmund'
                },
                {
                    type: 'top-headlines',
                    query: 'category=sports&country=de',
                    title: 'Sports'
                }
            ]
        }
    }

    renderSections() {
        return this.state.sections.map((section, index) => (
            <div className="section" key={index}>
                <h4>{section.title}</h4>
                <News newsType={section.type} query={section.query}/>
                <div className="divider"></div>
            </div>
        ))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Yasir's News App - All News at one place</h1>
                </header>
                {this.renderSections()}
            </div>
        );
    }
}

export default App;
