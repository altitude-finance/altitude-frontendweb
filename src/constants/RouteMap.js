import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import BarChartIcon from '@material-ui/icons/BarChart'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import TerrainIcon from '@material-ui/icons/Terrain';
// import OpenInNewIcon from '@material-ui/icons/OpenInNew'; // External Links
// import StoreIcon from '@material-ui/icons/Store'; // OpenSea
import DescriptionIcon from '@material-ui/icons/Description';
import CachedIcon from '@material-ui/icons/Cached';

const RouteMap = {
  active: [
    {
      title: "Home",
      path: "/",
      icon: () => <HomeIcon />
    },
    {
      title: "Slopes",
      path: "/slopes",
      icon: () => <TerrainIcon />
    },
    {
      title: "Avalanche",
      path: "/avalanche",
      icon: () => <CachedIcon />
    },
    {
      title: "Lodge",
      path: "/lodge",
      icon: () => <EmojiEventsIcon />
    },
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: () => <BarChartIcon />
    },
    {
      title: "Docs",
      path: "/docs",
      icon: () => <DescriptionIcon />
    },
  ],
  external: [
    // {
    //   title: "Chart",
    //   path: "https://chart.altitude.finance/",
    // }
  ],
  footer: [
    {
      title: "Account",
      path: "/account"
    },
    {
      // title: "Whitepaper",
      title: "Legal",
      path: "/legal"
    }
  ]
}

export default RouteMap