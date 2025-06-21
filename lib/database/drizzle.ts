
import config from "@/lib/config";
import {drizzle} from "drizzle-orm/neon-http"
import {neon} from "@neondatabase/serverless";

if (!config.env.databaseUrl) {
    throw new Error("Database URL is missing in environment config.");
}

const sql = neon(config.env.databaseUrl);

export const db = drizzle( {client: sql});
