import { NAppClient } from "@n1xyz/nts-sdk";
import { ContractIDL } from "../build/idl";

export default async function ({ client }: { client: NAppClient<ContractIDL> }) {
  await client.actions.init();
  await client.actions.increment(2);
  
  const count = await client.state.count();
  console.log('Current count:', count);
}
