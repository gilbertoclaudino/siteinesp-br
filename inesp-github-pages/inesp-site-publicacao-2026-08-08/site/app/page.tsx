import Link from "next/link";
import { SiteShell } from "./components/site-shell";

const pillars = [
  ["01", "Educação que amplia horizontes", "Formação e acesso ao ensino como instrumentos de autonomia e desenvolvimento regional."],
  ["02", "Pesquisa aplicada à realidade", "Conhecimento orientado a desafios públicos, sociais e territoriais, com método e evidências."],
  ["03", "Inclusão com resultados", "Projetos que aproximam oportunidades de pessoas e grupos historicamente sub-representados."],
  ["04", "Governança e transparência", "Integridade, monitoramento e prestação de contas como partes de cada iniciativa."],
];

export default function Home() {
  return <SiteShell><main>
    <section className="hero section"><div className="orb o1"/><div className="orb o2"/><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow"><i/>Associação civil sem fins econômicos</p><h1>Transformamos vidas pela educação. <em>Geramos oportunidades.</em></h1><p className="lead">O INESP conecta educação, pesquisa e impacto social para construir respostas concretas aos desafios das pessoas e dos territórios.</p><div className="actions"><Link className="pill dark" href="/programas/mega-vestibular-social">Mega Vestibular Social <b>↗</b></Link><Link className="pill outline" href="/programas/vestibular-da-mulher">Vestibular da Mulher</Link></div></div>
      <div className="hero-card"><div className="card-top"><span>Atuação integrada</span><span>● OSC</span></div><div className="letters">{["I","N","E","S","P"].map(x=><span key={x}>{x}</span>)}</div><div className="card-bottom"><span>Educação</span><span>Sociedade</span><span>Pesquisa</span></div></div>
    </div><div className="container facts"><div><strong>Desde 2023</strong><span>Estatuto social registrado</span></div><div><strong>36 objetivos</strong><span>Finalidades estatutárias</span></div><div><strong>Abrangência nacional</strong><span>Sede em Ipojuca/PE</span></div></div></section>

    <section className="statement section"><div className="container two-col"><p className="kicker">Nossa razão de existir</p><div><h2>Fazer o conhecimento chegar onde ele pode mudar uma história.</h2><p className="body-large">Atuamos na convergência entre políticas públicas, educação e desenvolvimento social. Cada projeto nasce de um diagnóstico, ganha forma com parceiros e deve ser acompanhado por indicadores.</p><Link className="text-link" href="/institucional">Conheça o INESP <b>→</b></Link></div></div></section>

    <section className="pillars section"><div className="container"><div className="section-head"><div><p className="kicker">Como atuamos</p><h2>Quatro compromissos.<br/>Um só propósito.</h2></div><p>Estratégia institucional orientada por relevância social, qualidade técnica e responsabilidade pública.</p></div><div className="pillar-grid">{pillars.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="programs section"><div className="container"><div className="section-head light"><div><p className="kicker">Programas prioritários</p><h2>Acesso, equidade<br/>e futuro.</h2></div><Link className="text-link" href="/programas">Conheça todos <b>→</b></Link></div><div className="program-grid">
      <article><div className="program-art blue"><b>MVS</b></div><div className="program-copy"><span>Acesso à educação</span><h3>Mega Vestibular Social</h3><p>Seleção social que aproxima estudantes de oportunidades de formação e bolsas ofertadas por instituições parceiras.</p><Link href="/programas/mega-vestibular-social">Conhecer o programa <b>↗</b></Link></div></article>
      <article><div className="program-art coral"><b>VM</b></div><div className="program-copy"><span>Equidade e autonomia</span><h3>Vestibular da Mulher</h3><p>Inclusão educacional e profissional com atenção às realidades sociais e familiares vividas pelas mulheres.</p><Link href="/programas/vestibular-da-mulher">Conhecer o programa <b>↗</b></Link></div></article>
    </div></div></section>

    <section className="transparency section"><div className="container transparency-grid"><div><p className="kicker">Transparência ativa</p><h2>Confiança se constrói com informação acessível.</h2></div><div><p>Governança, documentos institucionais, parcerias, prestações de contas e resultados devem ser apresentados com linguagem clara e proteção dos dados pessoais.</p><Link className="pill dark" href="/transparencia">Acessar o portal <b>↗</b></Link></div></div></section>
  </main></SiteShell>;
}
