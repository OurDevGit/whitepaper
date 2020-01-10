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
                number={1}
                content="The company can prolong its CSO for a fixed period of time and remain in the running stage."
                /> 

            <Item
                image={investorIcon} 
                number={2}
                content="It can exit the CSO by entering the closing stage. "
                float="right"
                /> 

</div>
