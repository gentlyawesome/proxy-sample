//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

contract Knight {
    string public name;
    uint256 public lvl;
    mapping(string => uint256) public actions;

    function initialize(string memory _name) external {
        name = _name;
        lvl = 1;
        actions["slash"] = 100;
    }
}
