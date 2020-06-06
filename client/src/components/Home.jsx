import React, {Component} from 'react';
import axios from 'axios';
import Card from './Card';

class Home extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        axios.get('/api/articles')
            .then( res => {
                this.setState({articles: res.data});
            })
            .catch(err => console.error(err));
    }


    render() {
        return (
            <React.Fragment>
                {
                    this.state.articles.map((article, i) => {
                        return <Card key={i} article={article}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default Home;