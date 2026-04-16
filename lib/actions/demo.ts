"use server";

import { type DemoResult, processDemoSubmission } from "@/lib/demo-submission";

export async function submitDemoViaServerAction(
  _previousState: DemoResult | null,
  formData: FormData
): Promise<DemoResult> {
  const name = String(formData.get("name") ?? "");
  const topic = String(formData.get("topic") ?? "");

  return processDemoSubmission({ name, topic }, "server-action");
}
