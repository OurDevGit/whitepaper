import React from 'react'
import { Grid, Header } from 'semantic-ui-react';
import { NumberCircle } from '../../../../components';
import sin from '../../../../assets/images/sin.svg';
import '../style.less'
export default () => 
<div className="ui three column grid container">
    <Grid.Row only="computer">
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={6}>
            <div class="NumberField">
                <NumberCircle
                    number = {1}                     
                    content={<p>In some jurisdictions, <span className="link">such as the US</span>, only investors who pass a wealth or earnings threshold are authorized to mint new tokens.</p>}
                />
            </div>
        </Grid.Column>
        <Grid.Column width={6}>
            <div class="NumberField">
                <NumberCircle
                    number = {2}                     
                    content={<p>In some jurisdictions, <span className="link">such as the US</span>, only investors who pass a wealth or earnings threshold are authorized to mint new tokens.</p>}
                />
            </div>
        </Grid.Column>
    </Grid.Row>
    <Grid.Row only="computer">
        <Grid.Column width={2}>
            <div class="NumberField2">
                <NumberCircle
                    number = {3}                     
                    content={<p>In some jurisdictions, <span className="link">such as the US</span>, only investors who pass a wealth or earnings threshold are authorized to mint new tokens.</p>}
                />
            </div>
        </Grid.Column>
        <Grid.Column width={12}>
        <img src={sin} />
        </Grid.Column>
        
        <Grid.Column width={2}>
            <div class="NumberField2">
                <NumberCircle
                    number = {4}                     
                    content={<p>In some jurisdictions, <span className="link">such as the US</span>, only investors who pass a wealth or earnings threshold are authorized to mint new tokens.</p>}
                />
            </div>
        </Grid.Column>
    </Grid.Row>
    <Grid.Row only="computer">
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={6}>
            <div class="NumberField">
                <NumberCircle
                    number = {5}                     
                    content={<p>In some jurisdictions, <span className="link">such as the US</span>, only investors who pass a wealth or earnings threshold are authorized to mint new tokens.</p>}
                />
            </div>
        </Grid.Column>
        <Grid.Column width={6}>
            <div class="NumberField">
                <NumberCircle
                    number = {6}                     
                    content={<p>In some jurisdictions, <span className="link">such as the US</span>, only investors who pass a wealth or earnings threshold are authorized to mint new tokens.</p>}
                />
            </div>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
    </Grid.Row>
    <Grid.Row only="mobile tablet">
        <Grid.Column width={16} >
        </Grid.Column>
        <Grid.Column width={16}>
        </Grid.Column>
        <Grid.Column width={16}>
        </Grid.Column>
    </Grid.Row>
</div>
