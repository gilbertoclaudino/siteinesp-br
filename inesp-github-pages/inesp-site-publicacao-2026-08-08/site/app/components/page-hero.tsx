export function PageHero({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return <section className="page-hero section"><div className="container page-hero-grid"><p className="eyebrow"><i/>{kicker}</p><div><h1>{title}</h1><p>{text}</p></div></div></section>;
}
