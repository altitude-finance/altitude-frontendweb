import daiSign from 'assets/img/dai-sign.png'
import pwdrSign from 'assets/img/pwdr-eth-sign.png'
import usdcSign from 'assets/img/usdc-sign.png'
import usdtSign from 'assets/img/usdt-sign.png'
import wbtcSign from 'assets/img/wbtc-sign.png'
import wethSign from 'assets/img/weth-sign.png'
import usdcLogo from 'assets/img/usdc-logo.png'
import daiLogo from 'assets/img/dai-logo.png'
import wbtcLogo from 'assets/img/wbtc-logo.png'
import wethLogo from 'assets/img/weth-logo.png'
import usdtLogo from 'assets/img/usdt-logo.png'
import altitudeLogo from 'assets/img/altitude-logo.png'
import Addresses from './Addresses'
// import greenCircle from 'assets/img/greenCircleSlopeSign.png'

const SlopesMap = (chainId) => ({
  pools: [
    {
      pid: 0,
      name: "Double Black Diamond",
      symbol: "PWDR/ETH",
      sign: pwdrSign,
      logo: altitudeLogo,
      lpStaked: true,
      decimals: 18,
      address: Addresses.PWDR[chainId],
      lpAddress: Addresses.PWDRLP[chainId]
    },
    {
      pid: 1,
      name: "Silver Diamond",
      symbol: "WETH",
      sign: wethSign,
      logo: wethLogo,
      lpStaked: false,
      decimals: 18,
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      lpAddress: ""
    },
    {
      pid: 2,
      name: "Orange Diamond",
      symbol: "WBTC",
      sign: wbtcSign,
      logo: wbtcLogo,
      lpStaked: false,
      decimals: 8,
      address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      lpAddress: ""
      
    },
    {
      pid: 3,
      name: "Green Square",
      symbol: "USDT",
      sign: usdtSign,
      logo: usdtLogo,
      lpStaked: false,
      decimals: 6,
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      lpAddress: ""
    },
    {
      pid: 4,
      name: "Blue Circle",
      symbol: "USDC",
      sign: usdcSign,
      logo: usdcLogo,
      lpStaked: false,
      decimals: 6,
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      lpAddress: ""
    },
    {
      pid: 5,
      name: "Gold Circle",
      symbol: "DAI",
      sign: daiSign,
      logo: daiLogo,
      lpStaked: false,
      decimals: 18,
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      lpAddress: ""
    },
  ]
})

export default SlopesMap