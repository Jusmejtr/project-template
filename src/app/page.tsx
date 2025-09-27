import { HydrateClient, prefetch, trpc } from "../trpc/server";
import { ClientGreeting } from "./client-greeting";
export default function Home() {
  prefetch(
    trpc.hello.queryOptions({
      /** input */
      text: "world",
    })
  );
  return (
    <HydrateClient>
      <div>...</div>
      {/** ... */}
      <ClientGreeting />
    </HydrateClient>
  );
}
