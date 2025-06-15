// This file is a conceptual holder for deployed contract addresses.
// In a real deployment, these values should ideally be loaded from
// environment variables for security and flexibility.

export const DPP_TOKEN_ADDRESS: string =
  process.env.NEXT_PUBLIC_DPP_TOKEN_ADDRESS ||
  "YOUR_DEPLOYED_DPP_TOKEN_PROXY_ADDRESS";

export const NORU_TOKEN_ADDRESS: string =
  process.env.NEXT_PUBLIC_NORU_TOKEN_ADDRESS ||
  "YOUR_DEPLOYED_NORU_TOKEN_PROXY_ADDRESS";

export const GOVERNOR_ADDRESS: string =
  process.env.NEXT_PUBLIC_GOVERNOR_ADDRESS ||
  "YOUR_DEPLOYED_GOVERNOR_CONTRACT_ADDRESS";
