# open-fx-bridge

This is utility which allows users to quickly deploy ERC721 tokens on Polygon without needing to map them.

The code uses FxPortal to achieve the functionality.

The contract should implement `IERC721`, `IERC721Metadata` and `owner()` for the same.

Mapping Example =>

Here the L1 sends message to L2 to deploy a ERC721 on behalf of the user: https://goerli.etherscan.io/tx/0xc313f33f034bf3c8ab23ac285fba50dc63f1bc2003f0560d4b57a93b02b313a9



On L2, this becomes the norm:

https://mumbai.polygonscan.com/tx/0x078ecaa10dab8246235ea0fd78622bd710c771fc44c97ce693b772c2841e761d


A final receive message makes the mapping complete.

Example mapping:
Goerli :  https://goerli.etherscan.io/token/0x65A3c47D32E5895D1BA1a07ca5c3A79B3f077fC9
Mumbai : https://mumbai.polygonscan.com/token/0xda2575f526cae920b6be8355c821443880add5ad
