const benefits = [
  ["↗", "Mais controle", "Tenha uma visão completa do negócio em tempo real."],
  ["⚡", "Mais agilidade", "Atenda melhor e mais rápido com processos integrados."],
  ["◇", "Menos desperdício", "Controle estoque e compras com precisão."],
  ["$", "Mais lucro", "Relatórios inteligentes para decisões melhores."],
  ["▣", "Acesse de onde estiver", "No celular ou computador, sempre com você."],
];

const features = [
  ["▦", "Gestão de mesas", "Visualize o salão em tempo real e controle aberturas e fechamentos."],
  ["≡", "Pedidos e cardápio", "Envie pedidos para a cozinha sem papel, erros ou demora."],
  ["▣", "Caixa inteligente", "Fechamento, sangrias, entradas e saídas com segurança."],
  ["◇", "Estoque completo", "Controle de estoque, fichas técnicas e alertas de reposição."],
  ["↗", "Delivery integrado", "Centralize pedidos do salão, retirada e delivery."],
  ["▥", "Relatórios avançados", "Vendas, produtos, equipe e clientes em poucos cliques."],
  ["◎", "Clientes e fidelidade", "Cadastros, histórico de consumo e relacionamento."],
  ["♙", "Usuários e permissões", "Acessos seguros e personalizados para sua equipe."],
];

const plans = [
  {
    name: "Essencial",
    price: "89",
    description: "Ideal para quem está começando.",
    items: ["Gestão de mesas e pedidos", "Cardápio digital", "Caixa e vendas", "Relatórios básicos", "Suporte por chat"],
  },
  {
    name: "Profissional",
    price: "149",
    description: "Para negócios que querem crescer.",
    badge: "Mais escolhido",
    items: ["Tudo do plano Essencial", "Estoque completo", "Relatórios avançados", "Delivery integrado", "Suporte prioritário"],
  },
  {
    name: "Completo",
    price: "249",
    description: "Para quem quer o máximo de controle.",
    items: ["Tudo do plano Profissional", "Clientes e fidelidade", "Usuários e permissões", "Integrações e filiais", "Suporte dedicado"],
  },
];

const testimonials = [
  ["Marcos André", "Proprietário — Bar do Zé", "O Aqui Comanda mudou nossa rotina. Ganhamos tempo, reduzimos erros e hoje temos muito mais controle."],
  ["Juliana Ferreira", "Gerente — Padaria Real", "Interface simples, suporte incrível e relatórios que ajudam demais nas decisões do dia a dia."],
  ["Ricardo Souza", "Sócio — Sabor & Cia", "O controle de estoque e os pedidos organizados nos ajudaram a aumentar o faturamento em 20%."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Aqui Comanda - início">
          <img src="/brand/aqui-comanda-logo.png" alt="Aqui Comanda" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#produto">Produto</a>
          <a href="#recursos">Funcionalidades</a>
          <a href="#planos">Planos</a>
          <a href="#clientes">Clientes</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <div className="header-actions">
          <a className="text-link" href="#produto">Entrar</a>
          <a className="button button-dark button-small" href="#planos">Começar agora</a>
        </div>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow">✓ Sistema simples para bares e restaurantes</span>
          <h1>SEU NEGÓCIO<br />NO COMANDO,<br />DE VERDADE.</h1>
          <p>Pedidos, mesas, estoque e caixa <strong>em um só lugar.</strong></p>
          <div className="hero-actions">
            <a className="button button-orange" href="#planos">Começar agora <span>→</span></a>
            <a className="button button-outline" href="#produto">Ver como funciona <span>▶</span></a>
          </div>
          <div className="mini-benefits">
            <span>✓ Fácil de usar</span><span>✓ Tudo integrado</span><span>✓ Suporte de verdade</span>
          </div>
        </div>

        <div className="dashboard-wrap" aria-label="Prévia do painel Aqui Comanda">
          <div className="dashboard">
            <aside className="dash-sidebar">
              <div className="dash-logo"><img src="/brand/aqui-comanda-logo-reversed.png" alt="Aqui Comanda" /></div>
              {["Resumo", "Pedidos", "Mesas", "Caixa", "Estoque", "Delivery", "Clientes", "Relatórios"].map((item, i) => (
                <span className={i === 0 ? "active" : ""} key={item}>{["⌂","≡","▦","▣","◇","↗","◎","▥"][i]} {item}</span>
              ))}
            </aside>
            <div className="dash-main">
              <div className="dash-top"><b>Resumo do dia</b><span>12 de maio de 2026⌄</span></div>
              <div className="stats-grid">
                <div><small>Vendas do dia</small><b>R$ 6.842,50</b><em>↑ 12,6% este mês</em></div>
                <div><small>Pedidos</small><b>128</b><em>↑ 8% este mês</em></div>
                <div><small>Ticket médio</small><b>R$ 53,45</b><em>↑ 3,2% este mês</em></div>
              </div>
              <div className="dash-content">
                <div className="tables-card">
                  <div className="card-head"><b>Mesas abertas</b><a href="#recursos">Ver todas</a></div>
                  <div className="tables">
                    {["01","02","03","04","05","06"].map((table, i) => <span className={i === 4 ? "busy" : ""} key={table}>{table}<small>{i === 4 ? "R$ 118,00" : i % 2 ? "16 min" : "23 min"}</small></span>)}
                  </div>
                </div>
                <div className="orders-card">
                  <div className="card-head"><b>Pedidos em preparo</b><a href="#recursos">Ver todos</a></div>
                  {["#1257 · Mesa 02", "#1258 · Mesa 04", "#1259 · Delivery"].map((order, i) => <p key={order}><b>{order}</b><span>{12 - i * 3} min</span><small>{["Cheeseburger + Batata", "Frango grelhado + Suco", "Porção + Cerveja"][i]}</small></p>)}
                </div>
              </div>
              <div className="chart-card">
                <div><b>Vendas por período</b><small>Últimas 24 horas</small></div>
                <div className="chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              </div>
            </div>
            <div className="stock-alert">
              <b>⚠ Estoque baixo</b>
              <span>Cerveja Long Neck <em>12 un.</em></span>
              <span>Refrigerante Lata <em>6 un.</em></span>
              <span>Picanha <em>2,1 kg</em></span>
              <span>Queijo Mussarela <em>1,3 kg</em></span>
              <a href="#recursos">Ver todos</a>
            </div>
          </div>
        </div>
      </section>

      <section className="trust section-shell">
        <p>Mais de 3.000 estabelecimentos já confiam no Aqui Comanda</p>
        <div className="logos"><span>Bar do Zé</span><span>Padaria Real</span><span>BOTECO DO AMIGÃO</span><span>Sabor & Cia</span><span>RESTAURANTE PÃO NOSSO</span></div>
      </section>

      <section className="benefits section-shell" id="produto">
        <div className="section-heading"><span>POR QUE O AQUI COMANDA?</span><h2>Feito para simplificar sua rotina<br />e aumentar seus resultados</h2></div>
        <div className="benefit-grid">
          {benefits.map(([icon, title, text]) => <article key={title}><span className="icon-circle">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="steps section-shell">
        <div className="section-heading"><span>DO CADASTRO AO RESULTADO</span><h2>Como funciona na prática</h2></div>
        <div className="step-grid">
          {[
            ["01", "Cadastre seu negócio", "Em poucos minutos, seu sistema está pronto."],
            ["02", "Organize tudo", "Cadastre mesas, cardápio, produtos, equipe e estoque."],
            ["03", "Use no dia a dia", "Faça pedidos, controle mesas e estoque com facilidade."],
            ["04", "Acompanhe e cresça", "Veja relatórios, tome decisões e aumente seus resultados."],
          ].map(([number, title, text]) => <article key={number}><b>{number}</b><span /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="features section-shell" id="recursos">
        <div className="section-heading"><span>UM SISTEMA. TODA A OPERAÇÃO.</span><h2>Tudo que seu negócio precisa,<br />em um só lugar</h2></div>
        <div className="feature-grid">
          {features.map(([icon, title, text]) => <article key={title}><span className="feature-icon">{icon}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="testimonials section-shell" id="clientes">
        <div className="section-heading"><span>HISTÓRIAS REAIS</span><h2>Quem usa, aprova</h2></div>
        <div className="testimonial-grid">
          {testimonials.map(([name, role, quote], i) => <article key={name}><div className="stars">★★★★★</div><blockquote>“{quote}”</blockquote><div className="person"><span>{["MA","JF","RS"][i]}</span><div><b>{name}</b><small>{role}</small></div></div></article>)}
        </div>
      </section>

      <section className="pricing section-shell" id="planos">
        <div className="section-heading"><span>PLANOS TRANSPARENTES</span><h2>Planos que cabem no seu bolso</h2><p>Sem fidelidade. Cancele quando quiser.</p></div>
        <div className="pricing-grid">
          {plans.map((plan) => <article className={plan.badge ? "featured" : ""} key={plan.name}>
            {plan.badge && <span className="plan-badge">{plan.badge}</span>}
            <h3>{plan.name}</h3><p>{plan.description}</p>
            <div className="price"><span>R$</span><b>{plan.price}</b><span>/mês</span></div>
            <ul>{plan.items.map(item => <li key={item}>✓ {item}</li>)}</ul>
            <a className={plan.badge ? "button button-orange" : "button button-outline"} href="#contato">Começar agora</a>
          </article>)}
        </div>
        <p className="pricing-note">✓ Atualizações gratuitas &nbsp; · &nbsp; ✓ Cancelamento fácil &nbsp; · &nbsp; ✓ Suporte humano</p>
      </section>

      <section className="faq section-shell" id="duvidas">
        <div className="section-heading"><span>AINDA TEM DÚVIDAS?</span><h2>Perguntas frequentes</h2></div>
        <div className="faq-grid">
          {[
            ["O Aqui Comanda funciona offline?", "O atendimento continua mesmo em uma oscilação rápida de internet e os dados são sincronizados assim que a conexão volta."],
            ["Há taxa de adesão ou fidelidade?", "Não. Você começa sem taxa de adesão e pode cancelar quando quiser."],
            ["Como funciona o plano e a cobrança?", "A cobrança é mensal e você pode mudar de plano conforme o seu negócio cresce."],
            ["Meus dados estão seguros?", "Sim. Cada negócio possui um ambiente independente, com usuários e permissões próprios."],
            ["Posso cancelar quando quiser?", "Sim, sem multa ou burocracia. Nosso objetivo é manter você pela qualidade do produto."],
            ["Vocês oferecem treinamento?", "Sim. Todos os planos incluem onboarding e materiais rápidos para sua equipe."],
          ].map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="final-cta section-shell" id="contato">
        <div className="cta-icon"><img src="/brand/aqui-comanda-icon.png" alt="" /></div>
        <div><h2>Pronto para ter seu negócio<br /><strong>no comando, de verdade?</strong></h2><p>Teste grátis por 7 dias. Sem cartão. Sem compromisso.</p></div>
        <a className="button button-orange" href="https://wa.me/5511999999999">Começar agora <span>→</span></a>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="brand brand-light" href="#inicio"><img src="/brand/aqui-comanda-logo-reversed.png" alt="Aqui Comanda" /></a>
            <p>O sistema simples e completo para bares, lanchonetes, padarias e restaurantes.</p>
            <div className="socials"><span>◎</span><span>f</span><span>◉</span></div>
          </div>
          <div><h3>Produto</h3><a href="#recursos">Funcionalidades</a><a href="#planos">Planos</a><a href="#produto">Integrações</a><a href="#clientes">Novidades</a></div>
          <div><h3>Recursos</h3><a href="#duvidas">Central de ajuda</a><a href="#produto">Vídeos</a><a href="#duvidas">Materiais</a><a href="#contato">Contato</a></div>
          <div><h3>Fale com a gente</h3><a href="tel:+5511981234567">(11) 98123-4567</a><a href="mailto:contato@aquicomanda.com.br">contato@aquicomanda.com.br</a><p>Seg a Sex, 8h às 18h</p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Aqui Comanda. Todos os direitos reservados.</span><span>Termos de uso &nbsp; · &nbsp; Privacidade</span></div>
      </footer>
    </main>
  );
}
