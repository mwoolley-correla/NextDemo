import { processDemoSubmission } from "@/lib/demo-submission";
import { logInfo } from "@/lib/logging";
import { measureAsync } from "@/lib/telemetry";
import { NextResponse } from "next/server";

export async function GET() {
  logInfo("API demo GET requested", { route: "/api/demo" });

  return NextResponse.json({
    stage: 5,
    route: "/api/demo",
    message: "Example API route for the server actions vs API stage.",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const body = (await request.json()) as { name?: string; topic?: string };
  const result = await measureAsync(
    "api.demo.post",
    async () =>
      processDemoSubmission(
        {
          name: body.name ?? "",
          topic: body.topic ?? "",
        },
        "api"
      ),
    { route: "/api/demo" }
  );

  logInfo("API demo POST completed", {
    route: "/api/demo",
    success: result.success,
    source: result.source,
  });

  return NextResponse.json(result, {
    status: result.success ? 200 : 400,
  });
}
