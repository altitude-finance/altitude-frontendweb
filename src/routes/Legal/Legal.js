import { Box, Container, Typography } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { HeaderView } from 'components/HeaderView'
import React from 'react'

export const Legal = () => {
  return (
    <HeaderView title="Legal">
      <Container maxWidth="lg">
        <Box mb={1}>
          <Alert severity="info">
            <AlertTitle>Attention Mountaineers</AlertTitle>
            Altitude Finance is an experimental project in the DeFi space. DeFi is new technology, still in its infancy. Climbing this mountain is not without risks!
          </Alert>
        </Box>
        

        <Typography variant="h4" gutterBottom>Disclaimer</Typography>
        <Typography variant="subtitle2" gutterBottom>Updated 2020-12-04</Typography>
        <Typography variant="body1" gutterBottom>
          Altitude Finance is a Decentralized Financial project using ERC20 and ERC1155 token standards on the Ethereum Blockchain.
          Information outlined on the Altitude Finance website and Whitepaper is made for illustrative purposes only and may not be
          representative of the final project. Contents of the Altitude Finance website and Whitepaper may evolve over time, 
          including but not limited to, changes to the domain name, changes to prose and other content, updates and adjusts to the
          roadmap, as well the addition or removal of functionalities. There is no guarantee that the utility of the Altitude Finance
          Tokens or Project defined above will be delivered as described in currently available information. By participating in any
          activities in the Altitude Finance ecosystem, including acquiring the PDWR ERC20 or Lodge ERC1155 token(s) through any means,
          you are agreeing to have no recourse, claim, action, judgment, or remedy against the team in the event that the Project described
          above is not delievered or otherwise realized in the same capacity as available information suggests. We very strongly recommend
          that you review all available information, including public contracts and code, to verify that these statements are accurate. 
        </Typography>
        <Typography variant="body1" gutterBottom> 

          If you are uncertain about any information presented or you are not prepared to incur financial losses, we strongly advise
          that you do not participate in any activities related to the Altitude Finance Team or PWDR/Lodge Tokens. We recommend that you
          consult with a licensed financial, legal, tax, and other advisors before participating in the Altitude Ecosystem.
        </Typography>

        <Typography variant="h4" gutterBottom>Privacy Policy</Typography>
        <Typography variant="body1" gutterBottom>
          This site uses cookies to optimize performance and provide a consistent user experience over multiple visits. Cookies are stored in a a client's browser.
          We do not track users with this information and we do not share any data with third parties. 
        </Typography>
      </Container>
      
    </HeaderView>
  )
}
