# How to run

```bash
$ yarn && yarn start
# ...
yarn run v1.22.19
$ tsx index.ts
[ 80001, 39848771n ]
/PATH_TO_PROJECT/viem-bug-verifySignature-reproducer/node_modules/viem/dist/cjs/utils/encoding/fromHex.js:34
    const value = BigInt(hex);
                  ^


TypeError: Cannot convert undefined to a BigInt
    at BigInt (<anonymous>)
    at hexToBigInt (/PATH_TO_PROJECT/viem-bug-verifySignature-reproducer/node_modules/viem/dist/cjs/utils/encoding/fromHex.js:34:19)
    at hexToNumber (/PATH_TO_PROJECT/viem-bug-verifySignature-reproducer/node_modules/viem/dist/cjs/utils/encoding/fromHex.js:58:19)
    at getChainId (/PATH_TO_PROJECT/viem-bug-verifySignature-reproducer/node_modules/viem/dist/cjs/actions/public/getChainId.js:9:29)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at <anonymous> (/PATH_TO_PROJECT/viem-bug-verifySignature-reproducer/index.ts:24:16)

Node.js v18.17.0
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```