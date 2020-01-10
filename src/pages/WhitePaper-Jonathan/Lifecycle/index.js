import React from 'react'
import { Grid, Header } from 'semantic-ui-react';
import Cylinder from '../components/cylinder';
import { InfoIcon } from '../../../components';
import { LeftArrowIcon, RightArrowIcon } from '../../../assets/icons';
import lifeCircle from '../../../assets/images/life-circle.svg'
import MainItem from '../Summary/MainItem';
import MainItems from './MainItems';
import './style.less';
const Lifecycle = () => (
  <div id="lifecycle">
    <Grid container>
        <Grid.Column>
          <Header className="header" id="cso-lifecycle">The CSO Lifecycle</Header>
            <p className="content-text">
                The CSO has three stages to its lifecycle: initialization, running and closing.
                </p>
            {/* inseret diagram */}
            <img src={lifeCircle} />
            <p className="sub-title" id="initial-stage">
                Initialization Stage:
                </p>
            <p className="content-text">
                The initialization stage features important protections for both the company and prospective investors. 
                In the initialization stage, investors can purchase tokens at the same average price until the minimum funding threshold is reached. 
                There is no time limitation to the initialization stage. 
                Until the minimum funding threshold is reached, the company has the right to cancel the CSO at any time.  
                If the company decides to cancel the CSO, investors recover their entire investment. 
                Similarly, investors have the right to obtain a full refund of their investment at any time during initialization. 
                Once the threshold is reached, the CSO automatically moves into the running stage.
                </p>
            <p className="content-text">
                These provisions protect both founders and investors. 
                They ensure that investors don’t get stuck investing in a company that few other investors believe in. 
                Further, they ensure that the company does not end up with too little investment interest, 
                thereby raising insufficient funding or potentially selling their CSO reserve at a discount. The minimum funding threshold establishes a floor above which the company is comfortable moving ahead with its CSO. A company with $10 million in revenues that commits 10% to its CSO reserve, for instance, may choose a minimum funding threshold of $1 million to enable it  to gauge investor interest in the CSO. 
                </p>
            <p className="sub-title" id="running-stage">
                Running Stage:
                </p>
            <p className="content-text">
                The CSO enters the running stage automatically once the minimum funding threshold is reached. 
                In the running stage, investors can mint and redeem tokens until the company chooses to enter the closing stage. 
                The running stage lasts at least until the minimum duration has been reached, although the company always has the option to continue the CSO. 
                The company must continue funding the reserve as long as the CSO is in the running stage. 
                It cannot reduce the duration or the portion of revenues it commits to the reserve.
                </p>
            <p className="sub-title" id="closing-stage">
                Closing Stage:
                </p>
            <p className="content-text">
                When the CSO offering’s minimum duration arrives, the company has two options:
                </p>
            {/* inseret diagram */}
            <MainItems />
            {/* <Grid style={{ marginBottom: '30px'}} >
                <Grid.Row three only="mobile">
                    <Grid.Column  width={3}>
                        <p  style={{fontSize: "20px", paddingTop: '70px'}}>Our tech</p>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Cylinder/>
                    </Grid.Column>
                    <Grid.Column>
                    <p  style={{fontSize: "20px", paddingTop: '220px'}}>Open source</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row only="mobile" className="webapp-listitem">
                    <LeftArrowIcon/>
                    <p>Core UX/UI</p>
                </Grid.Row>
                <Grid.Row only="mobile" className="webapp-listitem">
                    <LeftArrowIcon/>
                    <p>Economical Framework</p>
                </Grid.Row>
                <Grid.Row only="mobile" className="webapp-listitem">
                    <LeftArrowIcon/>
                    <p>Tax Framework</p>
                </Grid.Row>
                <Grid.Row only="mobile" className="webapp-listitem">
                    <LeftArrowIcon stroke="#00D1C1"/>
                    <p>Legal Framework</p>
                </Grid.Row>
                <Grid.Row only="mobile" className="webapp-listitem">
                    <LeftArrowIcon stroke="#00D1C1"/>
                    <p>Smart Contract</p>
                </Grid.Row>
                <Grid.Row only="mobile" className="webapp-listitem">
                    <LeftArrowIcon stroke="#00D1C1"/>
                    <p>C-org white Paper</p>
                </Grid.Row>

                <Grid.Row three only="computer tablet">
                    <Grid.Column  width={3}>
                        <p  style={{fontSize: "20px", float: 'right', marginRight:'-100px', marginBottom: '100px', paddingTop: '88px'}}>Our tech</p>
                        <div style={{marginTop: '220px', marginRight: '-30px'}} >
                            <Grid.Row  className="webapp-listitem-left">
                                <RightArrowIcon stroke="#00D1C1"/>
                                <p>Smart Contract</p>
                                </Grid.Row>
                            <Grid.Row className="webapp-listitem-left">
                                <RightArrowIcon stroke="#00D1C1"/>
                                <p>C-org white Paper</p>
                                </Grid.Row>
                            </div>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Cylinder/>
                    </Grid.Column>
                    <Grid.Column>
                    <Grid.Row className="webapp-listitem">
                        <LeftArrowIcon/>
                        <p>Core UX/UI</p>
                    </Grid.Row>
                    <Grid.Row className="webapp-listitem"> 
                        <LeftArrowIcon/>
                        <p>Economical Framework</p>
                    </Grid.Row >
                    <Grid.Row className="webapp-listitem">
                        <LeftArrowIcon/>
                        <p>Tax Framework</p>
                    </Grid.Row>
                    <Grid.Row className="webapp-listitem">
                        <LeftArrowIcon stroke="#00D1C1"/>
                        <p>Legal Framework</p>
                    </Grid.Row>
                    <p className="webapp-listitem" style={{fontSize: "20px", paddingTop: '20px' }}>Open source</p>
                        </Grid.Column>
                    </Grid.Row>
                    
            </Grid> */}
            
            
            <p className="content-text">
                In the closing stage, the company is responsible for redeeming all outstanding tokens at the price paid for the final token minted. 
                It uses the cash in the reserve to do this, but it is likely that it will need to add additional funds to the reserve in order fully redeem all tokens held by investors. 
                </p>
            <p className="content-text">
                Therefore, to enter the closing stage, the company must first pay an exit fee to the reserve, equal to the final CSO token minting price multiplied by the number of securities in circulation, minus the balance in the reserve. 
                Once the exit fee has been paid to the reserve, investors are free to redeem their tokens and the company no longer needs to commit revenues to the reserve.
                </p>
            <p className="content-text">
                Investors may speculate on when the company will close its CSO. In  general they are likely to assume that the CSO will be closed after the minimum duration has expired. 
                If so, the incentive to invest diminishes as the deadline approaches, given that the company would have fewer reserve contributions remaining.
                </p>
            <p className="content-text">
                Companies are unlikely to telegraph the closure in advance, to avoid creating a situation where frontrunning or other manipulation may occur. 
                Because the company is never required to close the CSO, if the conditions are not ideal — if the exit fee is too big for instance — then the company can simply continue its CSO indefinitely. 
                </p>

            <Header className="header" id="cso-webapp">Fairmint’s CSO Web Application</Header>
            <p className="content-text">
                A company wishing to initiate a CSO can do so by purchasing a license for Fairmint’s CSO web application and installing it on the company’s cloud. 
                <InfoIcon
                    content="In a previous whitepaper, we described how a continuous organization might operate; the continuous organization idea is open-source, available to anyone."
                    />
                &nbsp; The application is a white-labelled, turnkey solution that enables the company to launch and manage a CSO with a minimal administrative burden. 
            </p>
            <p className="content-text">
                Prior to the launch, there is a setup phase where Fairmint works with the issuer on integrating its tools with the company in anticipation of its CSO. 
                The company сonducts its own due diligence, in consultation with attorneys, financial advisors, existing investors and other stakeholders to determine the appropriate terms of its CSO.
                </p>
            <p className="content-text">
                Once the parameters are settled and the technology is set up, the company embeds an “invest now” link on its website and launches its CSO. 
                The process is automated, so there is minimal administration, but it is important to stress that the company manages its own CSO (using Fairmint’s technology) on its own cloud. 
                While Fairmint may explore other models in the future, Fairmint does not presently provide any broker-dealer services and is solely a technology provider at this time.
                </p>
            {/* Insert Diagram */}
            <p className="content-text">
                A key element of the Fairmint application is that it uses blockchain-based digital contracts. 
                This offers several important attributes. 
                It means that the details of the offering are essentially coded into the blockchain system, ensuring that both investors and the company abide by the rules of the CSO. 
                It also means that essentially anyone can buy or sell tokens seamlessly over the system at any time.
                <InfoIcon 
                    content="In a previous whitepaper, we described how a continuous organization might operate; the continuous organization idea is open-source, available to anyone."
                />
                </p>
            <p className="content-text">
                Although the company is legally and financially responsible for the CSO, Fairmint’s application enables the company to set parameters to comply with relevant legal and contractual  provisions. 
                It can also integrate with other service providers’ technology to help the issuer enforce various potential provisions, such as lockup periods, investor credential requirements and permissible trading windows for insiders. 
                The jurisdiction where the issuer is headquartered and where its investors are located will determine which rules should be enforced when issuing a CSO. 
                Although the financial product issued via a CSO will often be deemed a security under US securities law, it may be considered a different kind of asset in other global jurisdictions. 
                We emphasize that Fairmint offers no legal advice; issuers should seek their own legal advice when launching a CSO.
                </p>
        </Grid.Column>
    </Grid>
  </div>
)

export default Lifecycle;
