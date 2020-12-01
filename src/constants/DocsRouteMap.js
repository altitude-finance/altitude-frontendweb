import HOME_DOC from '../docs/altitude.md'
import ECOSYSTEM_DOC from '../docs/ecosystem.md'

import TOKEN_DOC from '../docs/token/token.md'
import LGE_DOC from '../docs/token/lge.md'
import PHASES_DOC from '../docs/token/phases.md'
import EPOCHS_DOC from '../docs/token/epochs.md'

import SLOPES_DOC from '../docs/slopes/slopes.md'
import ACTIVE_SLOPES_DOC from '../docs/slopes/active.md'

import AVALANCHE_DOC from '../docs/avalanche/avalanche.md'

import FLASH_LOAN_DOC from '../docs/flash/flash.md'
import LOYALTY_DOC from '../docs/flash/loyalty.md'

import LODGE_DOC from '../docs/lodge/lodge.md'
import BOARDS_DOC from '../docs/lodge/boards.md'


const DocsRouteMap = {
  active: [
    {
      title: "Altitude Docs",
      path: "/docs",
    },
    {
      title: "Ecosystem",
      path: "/docs/ecosystem"
    },  
    {
      title: "PWDR - Token",
      items: [
        {
          title: "PWDR Basics",
          path: "/docs/token"
        },
        {
          title: "Liquidity Generation Event",
          path: "/docs/token/lge"
        },
        {
          title: "Accumulation & Distribution",
          path: "/docs/token/phases"
        },
        {
          title: "Epochs",
          path: "/docs/token/epochs"
        }
      ]
    },
    {
      title: "Slopes - Yield Farming",
      items: [
        {
          title: "Slopes Basics",
          path: "/docs/slopes"
        },
        {
          title: "Active Slopes",
          path: "/docs/slopes/active"
        }
      ]
    },
    {
      title: "Avalanche - Buybacks",
      path: "/docs/avalanche",
      items: [
        {
          title: "Avalanche Basics",
          path: "/docs/avalanche"
        },
        // {
        //   title: "Token Stabilization",
        //   path: "/docs/slopes/liquidity"
        // },
      ]
    },
    {
      title: "Flash Loans - Arbitration",
      items: [
        {
          title: "Flash Loan Basics",
          path: "/docs/flash"
        },
        {
          title: "Loyalty Points",
          path: "/docs/flash/loyalty"
        }
      ]
    },
    {
      title: "Lodge - NFTs",
      items: [
        {
          title: "Lodge Basics",
          path: "/docs/lodge"
        },
        {
          title: "PWDR Boards",
          path: "/docs/lodge/boards"
        }
      ]
    }
  ],
  mappings: {
    "/docs": HOME_DOC,
    "/docs/ecosystem": ECOSYSTEM_DOC,
    "/docs/token": TOKEN_DOC,
    "/docs/token/lge": LGE_DOC,
    "/docs/token/phases": PHASES_DOC,
    "/docs/token/epochs": EPOCHS_DOC,
    "/docs/slopes": SLOPES_DOC,
    "/docs/slopes/active": ACTIVE_SLOPES_DOC,
    "/docs/avalanche": AVALANCHE_DOC,
    // "/docs/avalanche/liquidity": AVALANCHE_DOC,
    "/docs/flash": FLASH_LOAN_DOC,
    // "/docs/flash/dev": FLASH_LOAN_DEV_DOC,
    "/docs/flash/loyalty": LOYALTY_DOC,
    "/docs/lodge": LODGE_DOC,
    "/docs/lodge/boards": BOARDS_DOC
  },
  titleMappings: {
    "docs": "Altitude Docs",
    "ecosystem": "Ecosystem",
    "token": "PWDR",
    "lge": "LGE",
    "phases": "Phases",
    "epochs": "Epochs",
    "slopes": "Slopes",
    "active": "Active",
    "avalanche": "Avalanche",
    "flash": "Flash",
    "loyalty": "Loyalty",
    "lodge": "Lodge",
    "boards": "Boards"
  }
}

export default DocsRouteMap