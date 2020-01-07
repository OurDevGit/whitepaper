import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import '../style.less';
export default ({image, title, content}) => 
    <div className="item-detail">
        <img src={image}  className="icon"/>
        <p className="title"> 
            {title}
        </p>
        <p className="content">
            {content}
        </p>
    </div>
