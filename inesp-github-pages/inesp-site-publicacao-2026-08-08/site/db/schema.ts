import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const manifestacoes = sqliteTable("manifestacoes", {
  id: integer("id").primaryKey({ autoIncrement: true }), nome: text("nome").notNull(), email: text("email").notNull(), telefone: text("telefone").notNull().default(""), cidade: text("cidade").notNull().default(""), assunto: text("assunto").notNull(), mensagem: text("mensagem").notNull(), consentimento: integer("consentimento", { mode: "boolean" }).notNull(), criadoEm: text("criado_em").notNull().default(sql`CURRENT_TIMESTAMP`),
});
