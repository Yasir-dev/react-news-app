import React, { Component } from 'react'

import NewSingle from './NewSingle'

class News extends Component {

    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/'+this.props.newsType+'?'+this.props.query+'&pageSize=20&apiKey={YOUR_API_KEY_HERE}';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error));

    }

    renderItems() {
        return this.state.news.filter((i) => i.urlToImage !== null).map((item) => (
            <NewSingle key={item.url} item={item}/>
        ))
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News
