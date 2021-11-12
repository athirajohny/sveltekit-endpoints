export const get = () => {
    const post = [
        {
            "name": "callsign-controller",
            "description": "Callsign Controller"
            },
            {
            "name": "ekyc-controller",
            "description": "EKYC Controller"
            },
            {
            "name": "jarvis-controller",
            "description": "Jarvis Controller"
            },
            {
            "name": "send-money-controller",
            "description": "Send Money Controller"
            },
            {
            "name": "wallet-controller",
            "description": "Wallet Controller"
            }
    ];
	return {
		body: {
			post,
		},
	};
};


   