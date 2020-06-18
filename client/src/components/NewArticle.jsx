import React, {Component} from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

class ArticlePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            tags: '',
            body: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            title: this.state.title,
            desc: this.state.desc,
            body: this.state.body,
            tags: this.state.tags.split(/[ ,\/]/)
        }

        axios.post('/api/articles', data)
            .then(res => {
                console.log(`Data sent`);
                console.log(res);
                console.log(res.data);
            })
    }

    handleInputChange = (event) => {
        const target = event.target;     
        this.setState({
            [target.name]: target.value
        })
    }

    render() {
        return(
            <div className="new-article">
                <form onSubmit={this.handleSubmit} className='article-form' onSubmit={this.handleSubmit}>
                    <h1>New Article</h1>
                    <label className='form-item'>
                        Title
                        <input name='title' 
                            type="text" 
                            onChange={this.handleInputChange} 
                            value={this.state.title}
                            />
                    </label>

                    <label className='form-item'>
                        Tags:
                        <input type="text" name="tags" onChange={this.handleInputChange} value={this.state.tags}/>
                    </label>

                    <label className='form-item'>
                        Description: 
                        <input type="text" name="desc" onChange={this.handleInputChange} value={this.state.desc}/>
                    </label>

                    <label className='form-item'>
                        Body of the article:
                        <textarea name="body" onChange={this.handleInputChange} value={this.state.body} />
                    </label>


                    <input type="submit" value="SUBMIT"/>
                </form>

                <div className="preview">
                    <h1>Preview</h1>
                    <hr/>
                    <ReactMarkdown source={this.state.body}/>
                </div>

            </div>
        );
    }
}



export default ArticlePage;