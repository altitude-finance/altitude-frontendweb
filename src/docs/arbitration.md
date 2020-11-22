# Arbitration

Developers can utilize the liquidity generated from the Slopes by deploying contracts which perform Flash Loans. When flash loans are performed with Altitude, developers are charged a market leading fee to complete the transaction. Loyalty Points are rewarded on successful flash loans, which incentivizes usage and rewards developers with an increasingly cheaper source of borrowable funds.

## Flash Loans

Flash Loans are special types of transactions which only occur on the blockchain. Flash Loans are uncollateralized loans which allow developers to instantly access liquidity for a small fee. Borrowers can use funds from the Slopes as long as they are paid back within one block. If the transaction is not completed within one block and all borrowed funds plus the fee are not paid back, it is completely reversed. This ensures that funds remain safe and depositers are able to withdraw at any time.

Learn more on implementing Flash Loans from the Altitude Slopes in your project here [link]().

## Fee Breakdown

Whenever a developer wants to take a Flash Loan, they must pay a fee to complete the transaction. The fee amount is based on their Loyalty Points (detailed below). This fee is evenly split among all stakers in the Slope.

## Loyalty Points

Each time a successful Flash Loan is performed in Altitude, Loyalty Points are awarded to the address of the borrower. Loyalty Points are rewarded at a rate of 1 point per $1 in fees paid back to the Slopes.  

The initial tranches are as follows:
- Tranche 0: 0.080% Fee, Base Level
- Tranche 1: 0.070% Fee, 100 Loyalty Points
- Tranche 2: 0.060% Fee, 500 Loyalty Points
- Tranche 3: 0.050% Fee, 1000 Loyalty Points
- Tranche 4: 0.040% Fee, 5000 Loyalty Points
- Tranche 5: 0.030% Fee, 10000 Loyalty Points
- Tranche 6: 0.020% Fee, 50000 Loyalty Points
- Tranche 7: 0.010% Fee, 100000 Loyalty Points
