import { LoginScreen } from "@/components/sites/ykyw/login-screen";

type Search = {
  from?: string | string[];
  intent?: string | string[];
  agent?: string | string[];
};

function one(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const query = await searchParams;
  return (
    <LoginScreen
      from={one(query.from) || "/m/166282"}
      intent={one(query.intent)}
      agentId={one(query.agent)}
    />
  );
}
