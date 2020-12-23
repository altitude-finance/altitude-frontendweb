import daiSign from 'assets/img/dai-sign.png'
import linkSign from 'assets/img/link-sign.png'
import pwdrSign from 'assets/img/pwdr-eth-sign.png'
import shroomSign from 'assets/img/shroom-sign.png'
import rfiSign from 'assets/img/rfi-sign.png'
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
      lpAddress: "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940"
      
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
      lpAddress: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852"
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
      lpAddress: "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc"
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
      lpAddress: "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11"
    },
    {
      pid: 6,
      name: "",
      symbol: "LINK",
      sign: linkSign,
      logo: "",
      lpStaked: false,
      decimals: 18,
      address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
      lpAddress: "0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974"
    },
    {
      pid: 7,
      name: "",
      symbol: "RFI/ETH",
      sign: rfiSign,
      logo: "",
      lpStaked: true,
      decimals: 18,
      address: "0xA1AFFfE3F4D611d252010E3EAf6f4D77088b0cd7",
      lpAddress: "0x4C8341379E95f70c08Defb76C4F9C036525edc30"
    },
    {
      pid: 8,
      name: "",
      symbol: "SHROOM",
      sign: shroomSign,
      logo: "",
      lpStaked: false,
      decimals: 18,
      address: "0xEd0439EACf4c4965AE4613D77a5C2Efe10e5f183",
      lpAddress: "0x7D611e4CF1C7B94561C4cAA5602F329d108336e3"
    },
  ]
})

export default SlopesMap