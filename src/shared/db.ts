import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema/index";

const sqlite = new Database("juu.db");
export const db = drizzle(sqlite, { schema });
