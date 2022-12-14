require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.9",
  networks: {
    lukso: {
      url: process.env.STAGING_LUKSO_URL,
      accounts: [process.env.TEST_ACCOUNT_PRIVATE_KEY],
    },
  },
};