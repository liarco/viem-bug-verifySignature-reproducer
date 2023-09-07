import { createPublicClient, http } from 'viem';
import { polygonMumbai } from 'viem/chains';

const customPolygonMumbai = {
  ...polygonMumbai,
  rpcUrls: {
    default: {
        http: ["https://rpc-mumbai.maticvigil.com"],
    },
    public: {
        http: ["https://rpc-mumbai.maticvigil.com"],
    },
  },
};

(async () =>{
  const defaultClient = createPublicClient({ chain: polygonMumbai, transport: http() });
  const customClient = createPublicClient({ chain: customPolygonMumbai, transport: http() });

  // Works as expected
  console.log([await customClient.getChainId(), await customClient.getBlockNumber()]);

  // Fails
  console.log([await defaultClient.getChainId(), await defaultClient.getBlockNumber()]);
})();