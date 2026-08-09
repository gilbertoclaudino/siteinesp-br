import { C as __toESM, t as require_jsx_runtime, y as require_react } from "../index.js";
//#region app/components/contact-form.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ContactForm() {
	const [state, setState] = (0, import_react.useState)("idle"), [msg, setMsg] = (0, import_react.useState)("");
	async function submit(e) {
		e.preventDefault();
		setState("sending");
		const f = e.currentTarget, d = new FormData(f), p = Object.fromEntries(d.entries());
		p.consentimento = d.get("consentimento") === "on";
		try {
			const res = await fetch("/api/contato", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(p)
			}), r = await res.json();
			if (!res.ok) throw new Error(r.error || "Falha no envio");
			setState("success");
			setMsg(`Solicitação registrada. Protocolo ${r.protocolo}.`);
			f.reset();
		} catch (x) {
			setState("error");
			setMsg(x instanceof Error ? x.message : "Não foi possível enviar.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "contact-card",
		onSubmit: submit,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "form-grid",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Nome completo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "nome",
						maxLength: 120,
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["E-mail", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "email",
						type: "email",
						maxLength: 160,
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Telefone ou WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "telefone",
						maxLength: 30
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Cidade/UF", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "cidade",
						maxLength: 100
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Assunto", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				name: "assunto",
				required: true,
				defaultValue: "",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: "Selecione"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mega Vestibular Social" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Vestibular da Mulher" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Parceria institucional" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Voluntariado" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Transparência" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Outro assunto" })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Mensagem", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				name: "mensagem",
				rows: 6,
				maxLength: 2e3,
				required: true
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "honeypot",
				children: ["Website", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "website",
					tabIndex: -1
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "check",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "consentimento",
					type: "checkbox",
					required: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Autorizo o tratamento destes dados para resposta à solicitação, conforme a Política de Privacidade." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "pill dark",
				disabled: state === "sending",
				children: [
					state === "sending" ? "Enviando..." : "Enviar solicitação",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "↗" })
				]
			}),
			msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `form-status ${state}`,
				role: "status",
				children: msg
			})
		]
	});
}
//#endregion
export { ContactForm };
