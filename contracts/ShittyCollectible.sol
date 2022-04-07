// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ShittyCollectible is ERC721PresetMinterPauserAutoId {
    constructor()
        ERC721PresetMinterPauserAutoId(
            "ShittyCollectible",
            "SCO",
            "https://my-json-server.typicode.com/hieudauto/nft-json-server/tokens/"
        )
    {}
}
