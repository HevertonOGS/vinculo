import { apiFetch } from "@/lib/api";

export async function GET() {
  const health = await apiFetch<{ status: string }>('/health');

  return Response.json(health);
}