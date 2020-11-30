import HOME_DOC from '../docs/altitude.md'
import BASICS_DOC from '../docs/basics.md'
import LGE_DOC from '../docs/lge.md'
import INITIAL_DIST_DOC from '../docs/initial-distribution.md'
import ECOSYSTEM_DOC from '../docs/ecosystem.md'

import SLOPES_DOC from '../docs/slopes.md'
import SLOPE_FEES_DOC from '../docs/slope-fees.md'
import ACTIVE_SLOPES_DOC from '../docs/active-slopes.md'

import AVALANCHE_DOC from '../docs/avalanche.md'
import EPOCHS_DOC from '../docs/epochs.md'

import FLASH_LOANS_DOC from '../docs/flash-loans.md'
import FLASH_LOAN_FEES_DOC from '../docs/flash-loan-fees.md'
import LOYALTY_DOC from '../docs/loyalty.md'

import LODGE_DOC from '../docs/lodge.md'
import BOARDS_DOC from '../docs/pwdr-boards.md'


const DocsRouteMap = {
  active: [
    {
      title: "Altitude Docs",
      path: "/docs",
    },
    {
      title: "Altitude Basics",
      path: "/docs/basics"
    },
    {
      title: "Distribution & Accumulation",
      items: [
        {
          title: "Liquidity Generation Event",
          path: "/docs/distribution"
        },
        {
          title: "Initial Distribution",
          path: "/docs/distribution/initial"
        },
        {
          title: "Ecosystem",
          path: "/docs/distribution/ecosystem"
        },
      ]
    },
    {
      title: "Slopes - Yield Farming",
      items: [
        {
          title: "Fixed APR Farming",
          path: "/docs/slopes"
        },
        {
          title: "Slope Entry Fees",
          path: "/docs/slopes/fees"
        },
        {
          title: "Active Slopes",
          path: "/docs/slopes/active"
        }
      ]
    },
    {
      title: "Avalanche",
      path: "/docs/avalanche"
    },
    {
      title: "Epochs",
      path: "/docs/epochs"
    },
    {
      title: "Flash Loans - Arbitration",
      items: [
        {
          title: "What are Flash Loans?",
          path: "/docs/flash-loans"
        },
        {
          title: "Flash Loan Fees",
          path: "/docs/flash-loans/fees"
        },
        {
          title: "Loyalty Points",
          path: "/docs/flash-loans/loyalty"
        }
      ]
    },
    {
      title: "The Lodge - NFTs",
      items: [
        {
          title: "Altitude NFT Bonuses",
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
    "/docs/basics": BASICS_DOC,
    "/docs/distribution": LGE_DOC,
    "/docs/distribution/initial": INITIAL_DIST_DOC,
    "/docs/distribution/ecosystem": ECOSYSTEM_DOC,
    "/docs/slopes": SLOPES_DOC,
    "/docs/slopes/fees": SLOPE_FEES_DOC,
    "/docs/slopes/active": ACTIVE_SLOPES_DOC,
    "/docs/avalanche": AVALANCHE_DOC,
    "/docs/epochs": EPOCHS_DOC,
    "/docs/flash-loans": FLASH_LOANS_DOC,
    "/docs/flash-loans/fees": FLASH_LOAN_FEES_DOC,
    "/docs/flash-loans/loyalty": LOYALTY_DOC,
    "/docs/lodge": LODGE_DOC,
    "/docs/lodge/boards": BOARDS_DOC
  },
  titleMappings: {
    "basics": "Altitude Basics",
    "distribution": "Distribution & Accumulation",
    "initial": "Initial Distribution",
    "ecosystem": "Ecosystem",
    "slopes": "Slopes",
    "fees": "Fees",
    "active": "Active Slopes",
    "avalanche": "Avalanche",
    "epochs": "Epochs",
    "flash-loans": "Flash Loans",
    "loyalty": "Loyalty",
    "lodge": "Lodge",
    "boards": "PWDR Boards"
  }
}

export default DocsRouteMap