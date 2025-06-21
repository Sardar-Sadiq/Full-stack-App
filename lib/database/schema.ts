import { varchar, uuid, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';


export STATUS_ENUM = pgEnum('status', ['PENDING', 'APRROVED', 'REJECTED'])


export const users = pgTable('users', {
  id: uuid('id').notNull().privateKey().defaultRandom().unique(),
  fullName: varchar("full_name", {length: 255}).notNull(),
  email: text("email").notNull().unique(),
  universityId: integer("university_id").notNull().unique(),
  password: text('password').notNull(),
  universityCard: text('unversity_card').notNull()
, 
});