function getConfig() {
  return {
    chainId: '0x3',
    chainName: 'Ropsten Test Network',
    ittcContract: {
      address: '0x518955b9346ee238e2c0dbad7021c7e59b355485',
      abi: getIttcAbi(),
      inviteBaseUrl: 'https://lihua-chainpion.github.io/pages/index.html?inviter=',
    },
    usdtContract: {
      address: '0xd014cd2dea75a1e989be84af0291ddf7e427f64d',
      abi: getUsdtAbi(),
    },
  }
}
