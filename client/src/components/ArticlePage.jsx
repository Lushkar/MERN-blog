import React, {Component} from 'react';
import axios from 'axios';
import Tag from './Tag';
import ReactMarkdown from 'react-markdown/with-html';
import '../css/article.css';
// const ReactMarkdown = require('react-markdown');

class ArticlePage extends Component{

    state = {
        body: '',
        desc: '',
        createdAt: '',
        tags: [],
        title: ''
    }


    componentDidMount() {
        const url = '/api/articles/' + window.location.pathname;
        axios.get(url)
            .then(res => {
                const {body, createdAt, desc, tags, title} = res.data;
                this.setState({
                    body: body,
                    desc: desc,
                    tags: tags,
                    title: title,
                    createdAt: createdAt
                });
            })
            .catch(err => console.error(err));
    }


    render() {
        const _date = new Date(this.state.createdAt);
        const day = _date.getDate();
        const month = _date.getMonth();
        const year = _date.getFullYear() % 100;
        const tags = this.state.tags;
        return(
            <div className="article">
                <h1 className="title">{this.state.title}</h1>
                <h2 className="date">{day}/{month}/{year}</h2>
                <div className="tags-container">
                    {   Array.isArray(tags) ?
                        tags.map((tag, i) => {
                            return <Tag key={i} tag_name={tag} tagNum={i}/>
                        })
                        :
                        "Loading tags"
                    }
                </div>
                <ReactMarkdown source={this.state.desc}  className='article-desc'/>
                {/* <hr className='divider'/> */}
                <ReactMarkdown source={this.state.body}  className='article-body' escapeHtml={false}/>
                

                
            </div>
        )
    }
}


export default ArticlePage;
