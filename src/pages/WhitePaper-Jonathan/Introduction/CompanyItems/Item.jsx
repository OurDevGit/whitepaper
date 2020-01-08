import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import '../style.less';
export default ({image, title, content, color}) => 
    <div className="companyitem-detail">
        <p className="title"> 
            {title}
        </p>
        <p className="content" id={color}>
            {content}
        </p>
        <img src={image}  className="icon"/>
    </div>
