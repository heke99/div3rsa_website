type InsertOptions = {
  table: string;
  payload: Record<string, unknown> | Record<string, unknown>[];
  returning?: "minimal" | "representation";
};

export async function supabaseInsert<T = unknown>({ table, payload, returning = "representation" }: InsertOptions): Promise<T[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase environment variables are missing");
  }

  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: `return=${returning}`,
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Supabase insert failed for ${table}: ${message}`);
  }

  if (returning === "minimal") {
    return [];
  }

  return (await response.json()) as T[];
}


export async function supabasePatch({
  table,
  match,
  payload,
}: {
  table: string;
  match: Record<string, string>;
  payload: Record<string, unknown>;
}) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase environment variables are missing");
  }

  const filters = new URLSearchParams();
  for (const [key, value] of Object.entries(match)) {
    filters.set(key, `eq.${value}`);
  }

  const response = await fetch(`${url}/rest/v1/${table}?${filters.toString()}`, {
    method: "PATCH",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Supabase patch failed for ${table}: ${message}`);
  }
}
