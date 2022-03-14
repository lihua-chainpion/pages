function getConfig() {
  return {
    chainId: '0x5',
    chainName: 'Goerli Test Network',
    ittcContract: {
      address: '0xeecc47bfc4fddefa6c6b5310b05ced18d5fbc255',
      abi: getIttcAbi(),
      inviteBaseUrl: 'https://lihua-chainpion.github.io/pages/index.html?inviter=',
    },
    usdtContract: {
      address: '0xF3A1e1a81C62BF26970a1461e2b40a0f51F1A88f',
      abi: getUsdtAbi(),
    },
  }
}
