# Slopes Basics

The Slopes are the farming and lending pools in Altitude. When staking tokens in the Slopes, interest in earned in the form of PWDR tokens and the staked ERC20 token. Developers and Price Arbiters can borrow against the slopes by performing flash loans. 

All Slopes, with the exception of the PWDR-ETH LP Slope, have no risk of impermanent loss. Since the PWDR-ETH LP Slope is unique, different parameters are applied to this pool and it cannot be borrowed against.

## Fixed APR Farming

During the initial distribution phase, Slopes have a base fixed APR of 1000%. This does ​not​ guarantee a 1000% return for investors,it simply means more PWDR gets rewarded to stakers if the price drops during the distribution phase. The max supply prevents fixed APR Slopes from becoming unsustainable.
The APRs will decrease by approximately 50% after each avalanche epoch concludes to account for the decreasing supply of tokens remaining to be minted.


## Entry Fees

When entering a Slope, a 5% Fee is taken. This fee is split between a Round Robin fee and Token Buyback at a fixed ratio that varies each epoch. To encourage stakers to stay in the pool, the Round Robin fee is evenly distributed to all of the active pool participants. The remaining fee is converted to wETH and used to buyback PWDR. Bought back PWDR tokens are sent to the Avalanche during the Accumulation phase.