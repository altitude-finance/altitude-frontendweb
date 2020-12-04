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
// import greenCircle from 'assets/img/greenCircleSlopeSign.png'

const SlopesMap = {
  pools: [
    {
      pid: 0,
      name: "Double Black Diamond",
      symbol: "PWDR/ETH LP",
      sign: pwdrSign,
      logo: altitudeLogo
    },
    {
      pid: 0,
      name: "Orange Diamond",
      symbol: "WBTC",
      sign: wbtcSign,
      logo: wbtcLogo
    },
    {
      pid: 2,
      name: "Silver Diamond",
      symbol: "WETH",
      sign: wethSign,
      logo: wethLogo
    },
    {
      pid: 3,
      name: "Green Square",
      symbol: "USDT",
      sign: usdtSign,
      logo: usdtLogo
    },
    {
      pid: 4,
      name: "Blue Circle",
      symbol: "USDC",
      sign: usdcSign,
      logo: usdcLogo
    },
    {
      pid: 5,
      name: "Gold Circle",
      symbol: "DAI",
      sign: daiSign,
      logo: daiLogo
    },
  ]
}

export default SlopesMap