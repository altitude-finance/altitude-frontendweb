// LGE interaction

export const claimLGE = async (LGE, user) => {
  try {
    const txHash = await LGE.methods
      .claim()
      .send({ from: user })
      .on('transactionHash', (tx) => tx.transactionHash)
    return txHash 
  } catch (e) {
    console.log(e)
    // return '0'
  }
}

export const contributeLGE = async (LGE, user, amount) => {
  try {
    const txHash = await LGE.methods
      .contribute()
      .send({ from: user, value: amount })
      .on('transactionHash', (tx) => tx.transactionHash)
    return txHash 
  } catch (e) {
    console.log(e)
    // return ''
  }
}

export const activateLGE = async (LGE, user) => {
  try {
    const txHash = await LGE.methods
      .activate()
      .send({ from: user })
      .on('transactionHash', (tx) => tx.transactionHash)
    return txHash 
  } catch (e) {
    console.log(e)
    // return ''
  }
}

export const getLGEStats = async (LGE, user) => {
  // total contributed, my contribution, time remaining, boards available
  try {
    const stats = await LGE.methods
      .getLGEStats(user)
      .call()
    
    return {
      active: stats._active,
      stats: stats._stats
    }
  } catch (e) {
    console.log(e)
    return []
  }
}

// lodge staking

export const depositLodge = async (user, id) => {

}

export const withdrawLodge = async (user, id) => {

}

export const getStatsLodge = async (user) => {

}

// Slopes

export const claimSlopes = async (user, pid) => {

}

export const depositSlopes = async (user, pid, amount) => {

}

export const withdrawSlopes = async (user, pid, amount) => {

}

export const claimAllSlopes = async (user) => {

}

export const migrateSlopes = async (user) => {

}

export const getStatsSlopes = async (user) => {
  // return array of all pools

  // 
}


// Avalanche

export const claimAvalanche = async (user) => {

}

export const depositAvalanche = async (user, amount) => {

}

export const withdrawAvalanche = async (user, amount) => {
  
}

export const getStatsAvalanche = async (user) => {
  
}