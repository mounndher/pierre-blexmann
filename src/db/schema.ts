import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

/**
 * Messages received through the public contact form.
 * Only what the form actually collects — nothing more.
 */
export const contactMessages = pgTable("contact_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  nom: text("nom").notNull(),
  email: text("email").notNull(),
  telephone: text("telephone"),
  societe: text("societe"),
  sujet: text("sujet").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type ContactMessage = typeof contactMessages.$inferSelect;
