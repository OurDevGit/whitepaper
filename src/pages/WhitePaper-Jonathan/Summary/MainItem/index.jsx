import React from 'react'
import { Grid, Header } from 'semantic-ui-react';
import founderIcon from '../../../../assets/images/whitepaper/summary_founder.svg';
import investorIcon from '../../../../assets/images/whitepaper/summary_investor.svg';
import stakeholderIcon from '../../../../assets/images/whitepaper/summary_stakeholder.svg';
import Item from './Item';
import '../style.less'
export default () => 
<div className="ui three column grid container">
    <Grid.Row only="computer">
        <Grid.Column relaxed>
            <Item 
                image={founderIcon} 
                title="Founders" 
                content="Company owners get financing while retaining their ownership stake"
                /> 
        </Grid.Column>
        <Grid.Column>
            <Item 
                image={investorIcon} 
                title="Investors" 
                content="Investors get better liquidity"
                /> 
        </Grid.Column>
        <Grid.Column>
            <Item 
                image={stakeholderIcon} 
                title="Stackholders" 
                content="Stakeholders get a way to participate in the company’s financial success."
                /> 
        </Grid.Column>
    </Grid.Row>
    <Grid.Row only="mobile tablet">
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
    </Grid.Row>
</div>
