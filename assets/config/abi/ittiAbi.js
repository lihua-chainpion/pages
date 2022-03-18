function getIttiAbi() {
	return [{
		"inputs": [],
		"name": "_fixedDelegatePrice",
		"outputs": [{
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}],
		"stateMutability": "view",
		"type": "function"
	},
		{
			"inputs": [{
				"internalType": "address",
				"name": "inviterAddress",
				"type": "address"
			}],
			"name": "applyForDelegate",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [{
				"internalType": "uint256",
				"name": "usdtAmount",
				"type": "uint256"
			}],
			"name": "enchangeTokenWithUsdt",
			"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
	];
}
