export type DemoInput = {
  name: string;
  topic: string;
};

export type DemoResult = {
  success: boolean;
  source: "server-action" | "api";
  message: string;
  errors: Partial<Record<keyof DemoInput, string>>;
  receivedAt: string;
};

export async function processDemoSubmission(
  input: DemoInput,
  source: DemoResult["source"]
): Promise<DemoResult> {
  await new Promise((resolve) => setTimeout(resolve, 350));

  const errors: Partial<Record<keyof DemoInput, string>> = {};
  const cleanedName = input.name.trim();
  const cleanedTopic = input.topic.trim();

  if (cleanedName.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (cleanedTopic.length < 8) {
    errors.topic = "Topic must be at least 8 characters so the example has enough data to validate.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      source,
      message: "Validation failed. Fix the highlighted fields and try again.",
      errors,
      receivedAt: new Date().toISOString(),
    };
  }

  return {
    success: true,
    source,
    message: `Saved ${cleanedName}'s demo request about ${cleanedTopic}.`,
    errors: {},
    receivedAt: new Date().toISOString(),
  };
}
