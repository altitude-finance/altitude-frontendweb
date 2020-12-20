import NormalBoard from 'assets/img/snowboard-normal.gif'
import BronzeBoard from 'assets/img/snowboard-bronze.gif'
import SilverBoard from 'assets/img/snowboard-silver.gif'
import GoldBoard from 'assets/img/snowboard-gold.gif'

export const getBoardImage = (staked) => {
  if (staked === '1') {
    return GoldBoard
  } else if (staked === '2') {
    return SilverBoard
  } else if (staked === '3') {
    return BronzeBoard
  } else {
    return NormalBoard
  }
}

export const getBoard = (id) => {
  // id = staked id + 1
  if (id === '1') {
    return "Golden"
  } else if (id === '2') {
    return "Silver"
  } else if (id === '3') {
    return "Bronze"
  } else {
    return "Normal"
  }
}