import React, {Component} from 'react';
import Tag from './Tag';
import '../css/card.css';
// import {Link, Route} from 'react-router-dom';

const ReactMarkdown = require('react-markdown');

class Card extends Component {

    handleClick = () => {
        const id = this.props.article._id;
        const url = '/api/articles/' + id;
        window.location.assign(url);
    }



    render() {

        const article = this.props.article;
        const {title, body, createdAt, tags, desc} = article;

        const temp = new Date(createdAt);
        const day = temp.getDate();
        const month = temp.getMonth();
        const year = temp.getFullYear() % 100;
        
        const date = <h2 className='card-date'>{day}/{month}/{year}</h2>
        return(
            <div className="article-card" onClick={this.handleClick}>
                <h1 className="card-title">{title}</h1>
                {date}
                <div className="tags-container">
                    {
                        tags.map((tag, i) => {
                            return <Tag key={i} tag_name={tag} tagNum={i}/>
                        })
                    }
                </div>
                
                <hr className='card-divider'/>

                {
                    <div className="card-body">
                        <ReactMarkdown source={desc ? desc : body}/>
                    </div>
                }

            </div>
        )
    }
}



export default Card;