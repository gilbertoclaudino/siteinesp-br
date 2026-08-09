import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  ["O INESP", "/institucional"],
  ["Programas", "/programas"],
  ["Transparência", "/transparencia"],
  ["Notícias", "/noticias"],
  ["Parcerias", "/parcerias"],
];

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="site-shell">
    <header className="header"><div className="container header-inner">
      <Link className="brand" href="/" aria-label="INESP — Página inicial"><span className="brand-mark">IN</span><span><strong>INESP</strong><small>Ensino · Sociedade · Pesquisa</small></span></Link>
      <nav aria-label="Navegação principal">{nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav>
      <Link className="pill dark" href="/contato">Fale conosco <b>↗</b></Link>
    </div></header>
    {children}
    <footer><div className="container footer-grid">
      <div className="footer-about"><Link className="brand footer-brand" href="/"><span className="brand-mark">IN</span><span><strong>INESP</strong><small>Instituto Nacional de Ensino, Sociedade e Pesquisa</small></span></Link><p>Conhecimento, inclusão e impacto social a serviço das pessoas e dos territórios.</p></div>
      <div><h3>Institucional</h3><Link href="/institucional">Quem somos</Link><Link href="/programas">Programas</Link><Link href="/parcerias">Parcerias</Link></div>
      <div><h3>Integridade</h3><Link href="/transparencia">Transparência</Link><Link href="/institucional#governanca">Governança</Link><Link href="/contato">Contato</Link></div>
      <div><h3>Sede</h3><p>Av. Francisco Alves de Souza, nº 500<br/>Centro · Ipojuca/PE</p><p>CNPJ 53.300.805/0001-17</p></div>
    </div><div className="container footer-bottom"><span>© 2026 Instituto Nacional de Ensino, Sociedade e Pesquisa.</span><span><Link href="/privacidade">Privacidade</Link> · <Link href="/termos">Termos de Uso</Link></span></div></footer>
  </div>;
}
