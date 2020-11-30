# Epochs

Influenced by the model piloted by Satoshi in Bitcoin, Altitude will utilize a logarithmic supply model for each Accumulation phase — each cycle will mint 50% of the previous cycle’s supply until a total of 21M tokens are in circulation. 

The PWDR epoch schedule can be seen below:

| Event    |         Circulating @ Event Start        | Circulating @ Event End | Fixed APR, non-LP | Fixed APR, LP | Emissions during Epoch | Emissions Remaining | % Minted, during Epoch | % Minted, to-date |
|----------|:----------------------------------------:|:-----------------------:|:-----------------:|:-------------:|:----------------------:|:-------------------:|:----------------------:|:-----------------:|
|  Genesis | -                                        |            -            |         -         |       -       |            -           |         21M         |           0%           |         0%        |
|    LGE   |                     -                    |          5.25M          |         -         |       -       |          5.25M         |        15.75M       |           25%          |        25%        |
| Epoch #1 |                   5.25M                  |          13.25M         |        800%       |     4000%     |           8M           |        7.75M        |          38.1%         |       63.1%       |
| Epoch #2 |                  13.25M                  |          17.25M         |        400%       |     2000%     |           4M           |        3.75M        |         19.05%         |        75%        |
| Epoch #3 |                  17.25M                  |          19.25M         |        200%       |     1000%     |           2M           |        1.75M        |          9.52%         |       87.5%       |
| Epoch #4 |                  19.25M                  |          20.25M         |        100%       |      500%     |           1M           |         750K        |          4.76%         |       93.75%      |
| Epoch #5 |                  20.25M                  |          20.75M         |        50%        |      250%     |          500K          |         250K        |          2.38%         |       96.88%      |
| Epoch #6 |                  20.75M                  |           21M           |        25%        |      125%     |          250K          |          -          |          1.19%         |        100%       |