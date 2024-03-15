import type { Config } from "drizzle-kit";

export default {
  dbCredentials: {
    url: "../juu.db"
  },
  schema: "../src/shared/schema/*.ts",
  driver: "better-sqlite",
  out: "../.drizzle",
} satisfies Config;
