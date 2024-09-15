import Database from "better-sqlite3";
import * as schema from "./schema/index.schema";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { app } from "electron";

const sqlite = new Database(`${app.getPath("userData")}/db.sqlite`);
export const db = drizzle(sqlite, { schema });
