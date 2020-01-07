import React from 'react'
import { Grid, Header } from 'semantic-ui-react';
import '../style.less'
import InvestWithoutCSO from '../../../assets/images/whitepaper/InvestGraph1.svg';
import InvestWithCSO from '../../../assets/images/whitepaper/InvestGraph2.svg';
import Quotation from '../../../assets/images/whitepaper/quotation.svg';
const Equity = () => (
  <div id="solving">
    <Grid container>
        <Grid.Column>
          <Header className="header">Solving Equity and Inequity</Header>
          <div className="content">
            <p className="content-text">
            It’s not groundbreaking news that technologies developed over the past quarter century have dramatically reshaped how businesses operate and how they interact with customers. These technologies — ranging from the internet and smartphone apps to cloud computing and blockchain — have enabled new business models, such as peer-to-peer lending (Lending Club and Prosper) and sharing-economy platforms (AirBnB and Lyft). 
            </p>
            <p className="content-text">
                As these models have evolved, high profile investors have lamented the growing inadequacies of the investment vehicles that have underpinned the economy since the industrial revolution. While these vehicles have undoubtedly helped drive centuries of growth and innovation, they tend to serve the interests of a privileged few — wealthy shareholders over stakeholders, for instance. 
            </p>
            <p className="content-text">
            To <span className="quote">quote</span> Salesforce founder Marc Benioff:
            </p>
            <div className="quotation">
              <img src={Quotation}/>
              <div>
                <p>
                  “When we finally start focusing on stakeholder value as well as shareholder value, our companies will be more successful, our communities will be more equal, our societies will be more just and our planet will be healthier… 
                  It’s time for a new capitalism — a more fair, equal and sustainable capitalism that actually works for everyone and where businesses, including tech companies, don’t just take from society but truly give back and have a positive impact. 
                  What might a new capitalism look like? First, business leaders need to embrace a broader vision of their responsibilities by looking beyond shareholder return and also measuring their stakeholder return.”
                </p>
                <p className="name">Marc Benioff</p>
                <p className="position">CEO @ Salesforce</p>
                </div>
            </div>
            <p className="content-text">
                He has a point. Uber’s IPO, for instance, earned billions for a limited number of people, including investors such as Google, SoftBank, along with Uber’s co-founders and executives such as Ryan Graves, the company’s first CEO. The ride-hailing service’s drivers — the stakeholders Uber depends upon — were left out altogether. The same holds true for Lyft, Lending Club, and many others.
            </p>
            <p className="content-text">
                The fact is, these companies may have wanted to reward or incentivize their stakeholders by offering a stake in their future success. But there currently exists no vehicle for them to do so. Pre-IPO companies frequently sell shares to their employees as a retention perk, but securities regulations prevent them from offering shares to many outside stakeholders. By the time a company launches its initial public stock offerings (IPO), it’s too late for these early stakeholders — who frequently believed in the company enough to alter their careers and make investments (cars, apartments) — to cash in on the substantial value that they helped create in the high growth stages of development.  
            </p>
            <p className="content-text">
                Moreover, even IPOs are increasingly out of the reach of stakeholders. Companies are waiting longer to go public, and many more are choosing to remain private, largely due to the growing administrative and regulatory burden. There are about half as many public companies today (3,671) as in 1996 (7,322). If a company doesn’t go public, sell itself or distribute dividends, its financial value remains perpetually in the hands of a few. Stakeholders never get their fair share. 
            </p>
            <p className="graph">When you can invest as a business angel <span className="withoutcso">Without CSO</span></p>
            <img src={InvestWithoutCSO}/>
            <p className="graph">When you can invest as a business angel <span className="withcso">With CSO</span></p>/p>
            <img src={InvestWithCSO} />
            <p className="content-text">
            In the current environment, even traditional business angels (BA) are being sidelined from startup opportunities. These days, BAs need to be highly connected insiders, dedicating themselves full-time to investing in order to make a profit. Once a company starts taking off, the BA's money is no longer welcome; their only opportunity to invest is to hope the company eventually goes public. A CSO enables the BA to invest in promising private companies, from the earliest stages onward.
            </p>
            <p className="content-text">
                These limitations posed by traditional funding vehicles are  unfortunate not only for the stakeholders, but also for founders, who are forced to fight for financing among a relatively small group of individuals who control large quantities of wealth. Because the pool of early-stage investors is small, founders must make significant concessions — such as offering control and large ownership stakes — to access financing. These early-stage financiers tend to have narrow interests (e.g. maximizing return), so many companies remain unfunded despite serving worthwhile needs or even being potentially profitable. 
            </p>
            <p className="content-text">
                Fairmint addresses these inequities by offering tools enabling any investor — not just the privileged few — to purchase a stake from the earliest stages of a company’s development through the IPO. Instead of preventing investors from getting a seat at a capitalization table (the “cap table”) limited by ownership stakes, we have created a new table, a “fair table” that allows a broader group of stakeholders the opportunity to get exposure to the company’s financial success.
            </p>
            <p className="content-text">
            The CSO provides an investment vehicle that is transparent and defined by clear rules, a vehicle that doesn’t require the company to pay excessive professional-service fees or take on the kind of administrative burden that typically accompanies fundraising. Moreover, by decoupling ownership from financing, the CSO leaves governance in the hands of founders and their companies. This allows them to focus on the long term success of their companies.
            </p>

          </div>
        </Grid.Column>
    </Grid>
  </div>
)

export default Equity
