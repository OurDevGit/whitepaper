import React from 'react'
import { Grid, Header } from 'semantic-ui-react';
import { InfoIcon } from '../../../components';
import { NumberCircle } from '../../../components';
import Circle from './Circle/';
const HowItWorks = () => (
  <div id="cso-works">
    <Grid container>
        <Grid.Column>
          <Header className="header">How the CSO Works</Header>
          <div className="content">
            <p className="content-text">
                The CSO essentially creates a market where investors can get exposure to a company’s future revenue performance. To launch a typical CSO, a company commits to allocating part of its realized revenues
                <InfoIcon
                    content="Meaning revenues for which the organization has received a payment."
                    />
                 &nbsp;for a period of time to fund a reserve (held in escrow). For instance, the company may decide to commit 10% of its annual revenues to the reserve, distributed quarterly, for 5 years. It then embed’s Fairmint’s CSO web application  on its website and begins issuing securities — called tokens — enabling investors to obtain a claim on the reserve. 
            </p>
            <p className="content-text">
                The reserve's primary purpose is to serve as a last-resort buyer for the tokens. The reserve continuously offers a price, calculated by an algorithm, at which investors can redeem tokens. As the reserve grows, investors participate in the company’s success.
            </p>
            <p>
            The company can increase the portion of its revenues that it commits to the reserve — for instance, to attract additional capital from investors — but it can never decrease that portion. Investors and other stakeholders (such as potential service providers) can acquire CSO tokens either by purchasing them or through compliant incentive programs the company establishes.
            </p>
            <p className="content-text">
                In contrast to equity investing, in a CSO, investors buy a share of the value held in a reserve, funded mainly by company revenues, whereas in the equity markets investors have a claim  on ownership of the company, the value of which is largely driven by current and future profits. Another key difference is that investors can
                <InfoIcon 
                    content={<p>In some jurisdictions, <span className="link">such as the US</span>, only investors who pass a wealth or earnings threshold are authorized to mint new tokens.</p>}
                />
                 &nbsp;
                 “mint” (create) or “redeem” (cancel) tokens throughout the life of the CSO, transacting directly with the reserve. This enables tokens to be purchased even when there are no sellers and sold even when there are no buyers. (For more information, see the <span className="link">Pricing and Trading Tokens section</span>, below.) 
            </p>
            <p className="content-text">
                If investors believe that the company’s revenues (and therefore the reserve) will grow, they may be likely to buy tokens at a price that is a multiple of the value of the current redemption price. This is roughly analogous to traditional equity markets, in which investors buy shares at a multiple to a company’s expected future earnings (known as the price-earnings ratio). 
            </p>
            <p className="content-text">
                CSO tokens offer another key advantage over traditional equity shares: because they represent a claim on the reserve, there is a theoretical floor beneath the token’s value, established by the balance in the reserve fund. So if a company goes bankrupt, investors can still expect to receive some compensation for their tokens, based on the balance in the reserve. 
                However, the level of compensation will depend on the timing of the redemption relative to other investors: redeeming tokens removes them from circulation, and the redemption price decreases as the number of tokens outstanding decreases, so investors who sell first will do so at a higher price. Amid significant selling pressure, investors may see a significant reduction in the value of their tokens. 
                In this sense, the reserve does not represent a remedy that will make investors whole in an extreme downside scenario, but we believe it will still result in investors receiving more protection than they otherwise would in a traditional equity market, particularly if they are retail investors who lack the size and influence of institutional investors who can often secure more favorable protections in these downside scenarios.
                (See <span className="link">Pricing and Trading Tokens</span> for details.)
            </p>
            <p className="sub-title" id="cso-reporting">
                Simplified Reporting
            </p>
            <p className="content-text">
                Because of the way a CSO is structured, the company’s reporting burden is dramatically simplified. 
                The CSO empowers founders to raise capital and investors to enjoy liquidity
                <InfoIcon
                    content="(via  “decentralized automated market makers” as explained in the How Tokens are Priced and Traded section of this document)"
                    />
                &nbsp; without the expensive and time-consuming process associated with launching an IPO or engaging in traditional forms of private fundraising.
            </p>
            <p className="content-text">
                There’s no need for the company to hire investment bankers, 
                develop a prospectus that few investors will review, or in many jurisdictions, 
                publicly file with regulatory agencies, although we believe that, 
                as laws evolve with respect to decentralized technology, the CSO model may ultimately be attractive to certain public companies.
                It is, therefore, appropriate for a wide array of companies, ranging from Silicon Valley companies suitable for venture capital to dynamic small or medium-size family businesses. This would include many promising ventures
                that are not a good fit for traditional funding. As discussed further below, offering a CSO is compatible with venture capital, an initial public offering (IPO) or other more traditional sources of capital.
            </p>
            <p className="sub-title" id="aligning">
                Aligning the Company and Investors
            </p>
            <p className="content-text">
                Several features of the CSO are designed to align the investor’s interests with the company’s. 
                One is the pricing model. The model contemplates the token price rising with the number of tokens outstanding. 
                This means that investor enthusiasm helps the company raise more capital, given that the company receives capital for each newly minted token. This capital, in turn, helps investors by enabling the company to invest and grow, creating a virtuous circle. 
            </p>
            {/* add Image */}
            <Circle />

            <p className="content-text">
                Likewise, the CSO enables the company to dedicate a certain percentage of the proceeds from newly minted tokens — say 10% — to the reserve fund. This “investor contribution” becomes the property of the token holders, 
                alongside the revenues committed by the company. As such, a high level of buying can marginally increase  the reserve value, helping provide price stability independent of the company’s revenue contribution.
            </p>
            <p className="content-text">
                It should be noted that some companies — particularly large ones with substantial profits — may choose not to commit any portion of the proceeds from newly minted tokens to the reserve (in other words, to set the investor contribution to zero).
                In other instances, applicable law may prohibit such arrangements. Founders may determine that investors don’t need this incentive, or that both the company and its investors would be better off if the company were able to use 100% of the purchase proceeds to finance growth.
            </p>
            <p className="content-text">
                The remaining proceeds from newly minted tokens goes into the company’s treasury.
                This money is used as financing, much the way a venture capital investment finances growth. 
                The company is therefore leveraging its future revenues, rather than selling an ownership stake. 
                It is obtaining financing from the new tokens that investors mint, and in return it is granting the investors a claim on the revenues it commits to the reserve during the life of the CSO.
            </p>
            <p className="content-text">
                Note that while the company commits to a minimum time period for the CSO, 
                it is always free to extend the duration of the CSO, for a fixed period. 
                In doing so, it would continue funding the reserve with the same portion of its revenues, further expanding the potential returns for investors. 
            </p>
            <p className="sub-title" id="reporting">
                Compatibility with Equity Investments
            </p>
            <p className="content-text">
                It may also be in the interest of the company (and its investors) to raise funding through other sources, including venture capital, 
                an IPO or other types of equity investment. 
                Alternatively, a company may have already received funding from such equity sources before considering a CSO. 
            </p>
            <p className="content-text">
                The good news is that such equity investments are compatible with CSOs and both forms of funding could occur in parallel. 
                Because the CSO investor owns a claim on the reserve rather than an ownership stake in the company, 
                the startup founders and equity investors retain control of the company. 
                This means a company can issue a CSO even if  it already has equity investors, without diluting their stake in the company, 
                provided its board and stockholders consent.  
                A public company may benefit from a CSO as a more flexible way to raise funds and incentivize stakeholders. 
                Further, a company is also free to raise funding through other channels after it launches its CSO. 

            </p>
            <p className="content-text">
                Of course, each company’s management and stockholders will decide whether a CSO is beneficial for the company. 
                We believe that, just as in the case where stockholders approve a board’s decision to take non-dilutive financing (such as venture debt), stockholders may also see a benefit to taking non-dilutive financing in the form of a CSO. In addition, other than limitations imposed by law, nothing precludes stockholders from also participating in a CSO or a company allocating tokens from a CSO to its stockholders, provided this is properly disclosed to all active participants.
            </p>
          </div>
        </Grid.Column>
    </Grid>
  </div>
)

export default HowItWorks;
