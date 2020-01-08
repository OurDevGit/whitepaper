import React from 'react'
import { Grid, Header } from 'semantic-ui-react';
import threecircle from '../../../../assets/images/whitepaper/three-circle.svg';
import sevencircle from '../../../../assets/images/whitepaper/seven-circle.svg';
import Item from './Item';
import '../style.less'
export default () => 
<div className="ui two column grid container">
    <Grid.Row only="computer">
        <Grid.Column relaxed width={6}>
            <Item 
                image={threecircle} 
                title="Company Value Captured" 
                content="Without CSO"
                color="red"
                /> 
        </Grid.Column>
        <Grid.Column width={10}>
            <Item 
                image={sevencircle} 
                title="Company Value Captured" 
                content="With CSO"
                color="blue"
                /> 
        </Grid.Column>
    </Grid.Row>
    {/* <Grid.Row only="mobile tablet">
        <Grid.Column width={16} >
            <Item 
                image={founderIcon} 
                title="Founders" 
                content="Company owners get financing while retaining their ownership stake"
                /> 
        </Grid.Column>
        <Grid.Column width={16}>
            <Item 
                image={investorIcon} 
                title="Investors" 
                content="Investors get better liquidity"
                /> 
        </Grid.Column>
        <Grid.Column width={16}>
            <Item 
                image={stakeholderIcon} 
                title="Stackholders" 
                content="Stakeholders get a way to participate in the company’s financial success."
                /> 
        </Grid.Column>
    </Grid.Row> */}
</div>
