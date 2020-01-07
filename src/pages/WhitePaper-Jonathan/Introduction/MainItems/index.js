import React from 'react'
import { Grid, Header } from 'semantic-ui-react';
import founderIcon from '../../../../assets/images/whitepaper/summary_founder.svg';
import investorIcon from '../../../../assets/images/whitepaper/summary_investor.svg';
import stakeholderIcon from '../../../../assets/images/whitepaper/summary_stakeholder.svg';
import Item from './Item';
import '../style.less'
export default () => 
<div className="items">
            <Item 
                image={founderIcon} 
                content="Founders get financing without sacrificing ownership of the company. They also get a vehicle to align the company’s wellbeing with their stakeholders and customers."
                /> 

            <Item
                image={investorIcon} 
                content="Investors get liquidity, so that they can buy and sell whenever they want within the boundaries set by securities law in the applicable jurisdictions."
                float="right"
                /> 

            <Item 
                image={stakeholderIcon}
                content="Stakeholders — such as employees and platform users — get access to a security that lets them participate financially in the company’s growth.
                "
                /> 

</div>
