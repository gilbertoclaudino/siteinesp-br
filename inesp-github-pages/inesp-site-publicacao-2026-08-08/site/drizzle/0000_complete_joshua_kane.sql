CREATE TABLE `manifestacoes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nome` text NOT NULL,
	`email` text NOT NULL,
	`telefone` text DEFAULT '' NOT NULL,
	`cidade` text DEFAULT '' NOT NULL,
	`assunto` text NOT NULL,
	`mensagem` text NOT NULL,
	`consentimento` integer NOT NULL,
	`criado_em` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
