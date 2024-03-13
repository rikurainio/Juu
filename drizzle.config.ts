import type { Config } from "drizzle-kit";

export default {
  schema: "./src/shared/schema/*.ts",
  driver: "better-sqlite",
  out: ".drizzle",
} satisfies Config;
