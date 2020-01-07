import React from 'react'
export default ({image, content, float="left"}) => 
    {
        if(float === 'right') {
            return (
                <div className="item-detail right">
                    <img src={image} className="icon"/>
                        <p className="content">
                            {content}
                        </p>
                </div>
            )
        } else {
            return (
                <div className="item-detail">
                    <img src={image} className="icon"/>
                    <p className="content">
                        {content}
                    </p>
                </div>
            )
        }
    }
    
