// Lodge

export const getLodgeBalances = async (Lodge, user, ids) => {
  try {
    const balances = await Lodge.methods
      .balanceOfBatch(ids.map(() => user), ids)
      .call()
    return balances
  } catch (e) {
    console.log(e)
    return ids.map(() => '0')
  }
}

export const getLodgeApproval = async (Lodge, user, spender) => {
  try {
    const approval = await Lodge.methods
      .isApprovedForAll(user, spender)
      .call()
    return approval
  } catch (e) {
    console.log(e)
    return false
  }
}

export const setLodgeApproval = async (Lodge, user, spender) => {
  try {
    const txHash = await Lodge.methods
      .setApprovalForAll(spender, true)
      .send({ from: user })
      .on('transactionHash', (tx) => tx.transactionHash)
    return txHash
  } catch (e) {
    console.log(e)
  
  }
}

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
    return {
      active: false,
      stats: []
    }
  }
}

// loyalty/lodge staking

export const depositLoyalty = async (Loyalty, user, id) => {
  try {
    const txHash = await Loyalty.methods
      .deposit(id, 1)
      .send({ from: user })
      .on('transactionHash', (tx) => tx.transactionHash)
      return txHash 
  } catch (e) {
    console.log(e)
    // return 
  }
}

export const withdrawLoyalty = async (Loyalty, user, id) => {
  try {
    const txHash = await Loyalty.methods
      .withdraw(id, 1)
      .send({ from: user })
      .on('transactionHash', (tx) => tx.transactionHash)
      return txHash 
  } catch (e) {
    console.log(e)
    // return 
  }
}

export const getLoyaltyStats = async (Loyalty, user) => {
  try {
    const response = await Loyalty.methods
      .getLoyaltyStats(user)
      .call()
    
    return {
      active: response._active,
      approved: response._approved,
      balances: response._balances,
      stats: response._stats
    }
  } catch (e) {
    console.log(e)
    return {
      active: false,
      approved: false,
      balances: [],
      stats: [],
    }
  }
}

// Slopes

export const claimSlopes = async (Slopes, pid, user) => {
  try {
    const tx = await Slopes.methods
      .claim(pid)
      .send({ from: user })
      .on('transactionHash', (tx) => tx)
      return tx 
  } catch (e) {
    console.log(e)
    return false
  }
}

export const depositSlopes = async (Slopes, pid, user, amount) => {
  try {
    const tx = await Slopes.methods
      .deposit(pid, amount)
      .send({ from: user })
      .on('transactionHash', (tx) => tx)
      return tx 
  } catch (e) {
    console.log(e)
    return false 
  }
}

export const withdrawSlopes = async (Slopes, pid, user, amount) => {
  try {
    const tx = await Slopes.methods
      .withdraw(pid, amount)
      .send({ from: user })
      .on('transactionHash', (tx) => tx)
      return tx 
  } catch (e) {
    console.log(e)
    return false
  }
}

export const claimAllSlopes = async (Slopes, user) => {
  try {
    const tx = await Slopes.methods
      .claimAll()
      .send({ from: user })
      .on('transactionHash', (tx) => tx)
      return tx 
  } catch (e) {
    console.log(e)
    return false
  }
}

export const migrateSlopes = async (Slopes, user) => {
  try {
    const tx = await Slopes.methods
      .migrate()
      .send({ from: user })
      .on('transactionHash', (tx) => tx)
      return tx 
  } catch (e) {
    console.log(e)
    return false
  }
}

export const getSlopesStats = async (Slopes, user) => {
  // return array of all pools
  try {
    const stats = await Slopes.methods
      .getSlopesStats(user)
      .call()
    console.log(stats)
    return {
      active: stats._active,
      accumulating: stats._accumulating,
      stats: stats._stats
    }
  } catch (e) {
    console.log(e)
    return {
      active: false,
      stats: []
    }
  }
}

export const getPoolStats = async (Slopes, user, pid) => {
  // return array of one pool
  try {
    const pool = await Slopes.methods
      .getPoolStats(user, pid)
      .call()
    return pool
  } catch (e) {
    console.log(e)
    return []
  }
}

// Avalanche

export const claimAvalanche = async (Avalanche, user) => {
  try {
    const txHash = await Avalanche.methods
      .claim()
      .send({ from: user })
      .on('transactionHash', (tx) => tx.transactionHash)
      return txHash 
  } catch (e) {
    console.log(e)
    // return 
  }
}

export const depositAvalanche = async (Avalanche, user, amount) => {
  try {
    const txHash = await Avalanche.methods
      .deposit(amount)
      .send({ from: user })
      .on('transactionHash', (tx) => tx.transactionHash)
      return txHash 
  } catch (e) {
    console.log(e)
    // return 
  }
}

export const withdrawAvalanche = async (Avalanche, user, amount) => {
  try {
    const txHash = await Avalanche.methods
      .withdraw(amount)
      .send({ from: user })
      .on('transactionHash', (tx) => tx.transactionHash)
      return txHash 
  } catch (e) {
    console.log(e)
    // return 
  }
}

export const getAvalancheStats = async (Avalanche, user) => {
  try {
    const stats = await Avalanche.methods
      .getAvalancheStats(user)
      .call()
    
    return {
      active: stats._active,
      accumulating: stats._accumulating,
      stats: stats._stats
    }
  } catch (e) {
    console.log(e)
    return {
      active: false,
      accumulating: false,
      stats: []
    }
  }
}