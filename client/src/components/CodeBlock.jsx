import React, {Component} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

class CodeBlock extends Component {
    constructor(props) {
        super(props)
        this.setRef = this.setRef.bind(this)
    }

    setRef(el) {
        this.codeEl = el
    }

    componentDidUpdate() {
        this.highlightCode();
    }


    componentDidMount() {
        this.highlightCode();
    }

    
    highlightCode() {
        hljs.highlightBlock(this.codeEl)
    }
    
    render() {
        return(
            <pre>
                <code ref={this.setRef} className={`language-${this.props.language}`}>
                    {this.props.value}
                </code>
            </pre>
        )
    }
}

export default CodeBlock;