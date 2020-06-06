import React from 'react';

function Tag(props) {
    const tag_colors = [
        '#BC649C',
        '#45B154'
    ]
    const i = props.tagNum;
    return (
        <div className='tag-wrapper' style={{
            backgroundColor: tag_colors[i % tag_colors.length]
        }}>
            <h3 className='tag' 
                style={{
                    backgroundColor: tag_colors[i % tag_colors.length]
                }}>
                {props.tag_name}
            </h3>
        </div>
    )
}

export default Tag;