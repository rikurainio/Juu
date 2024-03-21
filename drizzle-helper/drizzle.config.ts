import type { Config } from "drizzle-kit";
import path from "node:path";

/** DB_LOCATION is the location where the electron app stores user data:
 * app.getPath('userData')
 * For example on windows this gives:
 * userData The directory for storing your app's configuration files, 
 * which by default is the appData directory appended with your app's name. 
 * By convention files storing user data should be written to this directory, 
 * and it is not recommended to write large files here because some 
 * environments may backup this directory to cloud storage.
 * 
 * so on windows for example: C:\Users\You\AppData\Roaming\juu
  */

export default {
  dbCredentials: { url: path.join(process.env.DB_LOCATION as string, 'db.sqlite')},
  schema: "../src/shared/schema/*.ts",
  driver: "better-sqlite",
  out: "../.drizzle",
} satisfies Config;
