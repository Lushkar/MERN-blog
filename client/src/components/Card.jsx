import React, {Component} from 'react';
import Tag from './Tag';
import '../css/card.css';

const ReactMarkdown = require('react-markdown');

class Card extends Component {
    render() {

        const article = this.props.article;
        const {title, body, createdAt, tags} = article;

        const temp = new Date(createdAt);
        const day = temp.getDate();
        const month = temp.getMonth();
        const year = temp.getFullYear() % 100;
        
        console.log(body);
        const date = <h2 className='card-date'>{day}/{month}/{year}</h2>
        return(
            <div className="article-card">
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
                        <ReactMarkdown source={body}/>
                    </div>
                }

            </div>
        )
    }
}



export default Card;