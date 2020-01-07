import React from 'react'
import { Grid, Header } from 'semantic-ui-react';
import { Dot } from '../../../assets/icons';
// import './style.less'
import { InfoIcon } from '../../../components';
const Tokens = () => (
  <div id="summary">
    <Grid container>
        <Grid.Column>
          <Header className="header" id="tokens">Pricing and Trading Tokens</Header>
            <p className="content-text">
                The CSO has three stages to its Tokens: initialization, running and closing.
                </p>
 
            <p className="content-text">
                To review, in a CSO a company commits to setting aside a fixed percentage of its revenues to fund a reserve.
                Investors capitalize on the growth of this reserve by trading or holding tokens, which provide a claim on the reserve. 
                Token holders can also earn fees by providing their tokens to a liquidy pool, once any legal lockup period has expired. 
                This section offers an overview on how these transactions work.
                </p>
            <p className="content-text">
                Depending on the investor’s and the company’s jurisdiction(s), there may be restrictions on transactions in accordance with applicable laws. 
                This document provides an overview, based on an ideal scenario, assuming a jurisdiction that allows for full execution of the CSO and Fairmint’s technology.
                <InfoIcon
                    content="Note: Investors and issuers should seek legal advice from counsel when considering features to enable as part of their CSO"
                />
            </p>
            <p className="content-text">
                There are four ways to trade tokens. They can be:
                </p>
            <Dot/> Mint from the service

            <p className="content-text">
                Buying and selling occur using Uniswap, an external “decentralized automated market maker.” Uniswap’s protocol enables the pooling of liquidity for a specific digital asset according to a deterministic pricing algorithm stemming from the liquidity supply. 
                While the transactions occur via Uniswap’s protocol, the Fairmint web application interfaces with Uniswap to provide a seamless experience directly from the issuer's website or app.
                </p>
            <p className="content-text">
                The Fairmint solution routes orders to whichever market offers the investor the best price for the desired trade. 
                If the investor seeks to acquire tokens, the application routes the order to whichever option — minting and/or buying — is in the investor’s financial interest. Likewise, for an investor liquidating tokens, the application routes the order either to sell and/or to redeem the tokens, whichever delivers a better return for the investor . 
                The application features a user interface that automatically facilitates all transactions, making the CSO easy to use for the company and its investors. 
                </p>
            <p className="sub-title" id="#minting-tokens">
                Minting Tokens 
                </p>
            <p className="content-text">
                Minting tokens — meaning purchasing them directly from the reserve — creates new tokens, adding to the total number of tokens outstanding. 
                New tokens are minted when investors want to buy more tokens than there is supply — typically, when optimism about the company’s future revenues rises. 
                (In some jurisdictions, such as the US, there may be restrictions, based on income or net worth, that could prevent investors from minting tokens, but otherwise coins are minted automatically without any possible interference from the company or any other party.)
                </p>
            <p className="content-text">
                The price of minting a token is directly proportional to the number of tokens outstanding. 
                As this quantity increases, the price for minting each additional token gradually rises. 
                The price for minting the 1,000th token will be slightly less expensive than 1,001st, and so on.
                </p>
            <p className="content-text">
                This pricing model rewards investors who are early believers in the company and helps build momentum for the company’s CSO. 
                It also rewards a company that investors believe in: the more tokens investors purchase the more capital the company receives, creating a virtuous circle that aligns investor and company interests.
                </p>
            <p className="content-text" >
                When the reserve mints new tokens, the company receives a portion of the proceeds (e.g. 90%) to finance its development. 
                The remainder goes to boost the value of the reserve, thereby benefiting investors. 
                The company establishes these proportions in advance of launching the CSO. 
                The portion that goes to the reserve — called the investor contribution — is typically a low number, such as 10%. 
                It can be set to 0% as well, typically for a very strong and profitable company, where investor risk is minimal; this would mean that all of the proceeds from token creation would go to the company. 
                </p>

            <p className="sub-title" id="buying-tokens">
                Buying Tokens
                </p>
            <p className="content-text" >
                As described below, some token holders may choose to make tokens available as liquidity on the Uniswap automated market (see Allocating Liquidity). 
                Investors can then buy (or sell) tokens on this market. 
                You  can reasonably expect the automated-market buy price to range between the redemption price and the minting price. 
                In jurisdictions with certain investment restrictions, there may be excess buying demand on the automated market from investors excluded from minting tokens. 
                This may drive the buy price above the minting price, if investors are optimistic.  
                </p>

            <p className="sut-title" id="selling-tokens">
                Selling Tokens
                </p>
            <p className="content-text" >
                You may also sell on the automated market. 
                When selling, it’s important to note that you can also liquidate tokens by “redeeming” them, described in the next section. 
                As noted above, the Fairmint technology routes the liquidation to whichever method — selling or redeeming — provides you with the highest possible return available at the time of the transaction. 
                In the vast majority of cases, selling will be preferable to redeeming.
                </p>

            <p className="sub-title" id="redeeming-tokens">
                Redeeming Tokens
                </p>
            <p className="content-text" >
                Any investor who holds tokens can “redeem” them at any time (24/7/365) against cash in the reserve. 
                <InfoIcon 
                    content="Under US law, tokens can be redeemed assuming that the one-year lockup period has expired"
                    />
                &nbsp; You may execute this option when you are eager to liquidate tokens and cannot do so on the automated market — for example, if investors have lost confidence in the company and there is high selling pressure and low buying demand.
                </p>
            <p className="content-text" >
                In contrast to traditional equity investments, where shares can become worthless, there is virtually always some value to a token given that it is a fractional claim on a funded reserve. 
                Unlike the minting price (which is directly proportional to the number of tokens outstanding), the redemption price changes frequently. 
                It is calculated by an algorithm, based on the cash in the reserve and the number of outstanding tokens in circulation. 
                The higher the reserve balance per token, the greater the redemption price. 
                </p>
            <p className="content-text" >
                The reserve balance is affected by several factors. 
                It increases from the investor contribution when new tokens are minted. 
                It also increases when the company deposits revenues in the reserve. 
                The company does this by minting new tokens, with all of the proceeds going to the reserve; in addition to funding the reserve, this boosts the token price, as it increases the number of tokens outstanding. 
                It also increases the number of tokens held by the company, which can choose to hold them, use them to drive an incentive program for stakeholders, or to reward investors by “retiring” them.
                </p>
            <p className="content-text" >
                Retiring tokens is analogous to a listed company buying back shares to increase shareholder value, however the company can never reactivate a retired token. 
                Retiring decreases the number of tokens that have a claim on the reserve, thereby increasing the redemption price. 
                Retiring tokens does not change the number of tokens outstanding, so it has no impact on the token minting price, which rises in proportion to the number of tokens minted. 
                </p>
            <p className="content-text" >
                The reserve decreases only when investors remove funds by redeeming tokens. 
                The company can never withdraw funds from the reserve, nor can it redeem the tokens it holds. 
                </p>
            <p className="content-text" >
                If numerous investors want to redeem their tokens, those who redeem sooner will receive a higher price. 
                The more tokens investors redeem, the lower the redemption price for each subsequent token. 
                Redeeming tokens also decreases the minting price, given that redemption removes tokens from circulation.
                </p>

            <p className="sub-title">
                Allocating Liquidity
                </p>
            <p className="content-text" id="allocating-liquidity" >
                Investors may also allocate tokens to a liquidity pool, to earn trading fees. The liquidity pool enables investors to buy and sell in real time. 
                Allocating liquidity can be done seamlessly, using the CSO solution embedded on the issuer’s website or app. 
                To provide this capability, Fairmint leverages the automated market maker Uniswap. 
                Note that allocating liquidity requires providing not only the tokens but also their counterparty value in USDC, a stablecoin backed by US dollars held in reserve by regulated financial institutions. 
                More information about how Uniswap works can be found here. 
                </p>

            <p className="sub-title" id="investor-perspective">
                Illustrative CSO Example from an Investor’s Perspective
                </p>
            <p className="content-text" >
                Alex is a successful (hypothetical) coder. 
                After purchasing an Acme smart desk — which adjusts electronically to a standing or sitting desk — she has become 30 percent more productive and feels healthier at day’s end. 
                She loves the product, and constantly tells friends about it, many of whom purchase their own smart desk. 
                </p>
            <p className="content-text" >
                Acme needed financing to scale, so it has launched a CSO. 
                Alex sees that the company has committed 6% of its revenues to the reserve and that the token, ACME,
                <InfoIcon
                    content="As explained in the Pricing and Trading Tokens section, the price of tokens rises gradually with each newly minted token."
                    />
                &nbsp; is trading at $9.68, which is about 10 times the redemption price of $1.02. Bullish, Alex invests $1,000 for 95.51 ACME. 
                Three years later, Alex’s bet is starting to pay off as the company’s growth has been high. 
                Investors remain bullish, and ACME now trades at about 7 times the reserve price of $5.05, or $35.30. 
                That means Alex can now sell her ACME on the automated market for an over threefold return on her investment. 
                Further, since the reserve price is now $5.05, Alex is confident that nearly half of her investment is now largely derisked.
                <InfoIcon
                    content="In other words, Alex could redeem her 95.51 tokens for roughly $5.00 each for about $475, given the current price offered by the reserve. 
                        If she were to wait and there was a sudden rush to redeem tokens, the price would decrease. "
                    />
                </p>
            <p className="content-text" >
                Two years later, Acme’s growth has plateaued, and it decides to close its CSO. Because the last tokens minted were valued at  $41.34, 
                Alex redeems her 95.51 ACME at the CSO closing for $3,948.38, nearly four times her initial investment, for a whopping 25.71% internal rate of return.
                </p>

            <p className="sub-title" id="founder-perspective">
                Illustrative CSO Example from a Founder’s Perspective
                </p>

            <p className="content-text">
                After five years in business, revenues for the (hypothetical) MiniClothes online marketplace were growing, but competition was intensifying. 
                Better funded challengers were seeking to lure away MiniClothes’ previously loyal base of customers and sellers. 
                The company needed cash to market itself and upgrade its website, so its founder, Jamie, launched a CSO, naming the token MINIC. 
                MiniClothes takes a 15% commission on its sales — if it sells $100 in merchandise, it collects $15 — and Jamie decided to commit 3% of company revenues to the CSO. 
                </p>

            <p className="content-text">
                The CSO provide much-needed capital and it boosted MiniClothes’ visibility, as the price of MINIC was posted on the many websites listing and analyzing the prices of globally available digital currencies. 
                More importantly, MINICs have been instrumental in aligning MiniClothes’ stakeholders with its success. 
                Not only can they purchase MINICs and share in its future revenues, but every year Jamie offers sellers who sold over $10,000 the opportunity to purchase MINICs accumulated by MiniClothes during the year at a discounted price. 
                Since then, MiniClothes has retained all of its high-sellers and even attracted many more. 
                In fact, the CSO transformed Jamie’s most loyal users into fierce ambassadors, boosting the growth of MiniClothes for everyone’s benefit.
                </p>
        </Grid.Column>
    </Grid>
  </div>
)

export default Tokens;
