pragma solidity ^0.4.0;
contract Inbox {

  string public message;

    /// Create a new ballot with $(_numProposals) different proposals.
    function Inbox(string intialmessage) public {
      message=intialmessage;
    }

    function setMessage(string newMessage) public {
        message=newMessage;
    }



}
