import Web3 from "web3";

// import Parking from "./contracts";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:7545")
  }
  //     contracts: [SimpleStorage, ComplexStorage, TutorialToken],
  //     events: {
  //       SimpleStorage: ["StorageSet"]
  //     }
};

export default options;
