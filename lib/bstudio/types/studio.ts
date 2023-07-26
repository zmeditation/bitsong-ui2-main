/**
 * The options used to create a bitsong-js studio instance.
 */
export interface CreateStudioOptions {
  /**
   * The rpc url to use for the studio.
   * This is used to connect to the bitsong blockchain.
   *
   * @type {string}
   */
  rpcUrl: string;

  /**
   * The bech32 prefix used to encode addresses.
   *
   * @type {string}
   */
  bech32Prefix: string;

  /**
   * The gas multiplier used to simulate gas usage.
   * This is used to estimate the gas usage of a transaction.
   *
   * @type {number}
   */
  gasMultiplier: number;

  /**
   * The gas price to use for transactions.
   * This can be a string in the format "1ubtsg" (equal to "0.000001btsg").
   *
   * @type {string}
   */
  gasPrice: string;

  /**
   * The domain to use for the web3 token.
   * This is used to create a web3 token that can be used to authenticate
   * with the studio.
   *
   * @type {string}
   */
  web3TokenDomain: string;

  /**
   * The time to live for the web3 token.
   * This is used to create a web3 token that can be used to authenticate
   * with the studio.
   *
   * @type {number}
   */
  web3TokenTtl: number;
}
