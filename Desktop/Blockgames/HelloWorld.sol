// SPDX-licence-Identifier: MIT

pragma solidity ^0.5.0;


//declaring the contract
contract HelloWorld {
    constructor () public{
        }
        string public message; // state variable

        //sets the message
        function setText(string memory text) public{
            message = text;
        }

        //displays the new/updated value of the message
        function displayText() public view returns(string memory) {
            return message;
        }
    
}