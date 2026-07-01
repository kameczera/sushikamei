import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Chatbot from "@/components/Chatbot";
import OrderButton from "@/components/OrderButton";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* ============================= HERO ============================= */}
        <section className="hero wrap" id="hero">
          <div className="hero-kanji-bg kanji" aria-hidden>
            寿
          </div>
          <div className="hero-grid">
            <div>
              <span className="hero-tag">
                <span className="dot" /> Alta gastronomia japonesa · Belo Horizonte
              </span>
              <h1>
                Sushi <span className="glow">Kamei</span>
              </h1>
              <div className="hero-jp kanji">亀井 寿司</div>
              <p className="lead">
                Barcos de sushi de tamanhos variados, jantares completos e
                buffet para eventos. Peixe fresco, corte artesanal e o rigor do
                sushiman <b style={{ color: "var(--ink)" }}>Hilton</b> — servidos
                à sua mesa ou à sua celebração em BH.
              </p>
              <div className="hero-actions">
                <OrderButton className="btn btn-primary">
                  Pedir pelo atendente IA
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </OrderButton>
                <a href="#sushis" className="btn btn-ghost">
                  Ver os sushis
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <b>100–200</b>
                  <span>peças por barco</span>
                </div>
                <div className="stat">
                  <b>R$110</b>
                  <span>jantar por pessoa</span>
                </div>
                <div className="stat">
                  <b>BH</b>
                  <span>entregas e eventos</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hinomaru-ring r2" aria-hidden />
              <div className="hinomaru-ring" aria-hidden />
              <div className="hinomaru">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/produtos/sushis/sushi_nigirisalmao.jpeg" alt="Niguiri de salmão do Sushi Kamei" />
              </div>
              <div className="hero-badge">
                <span className="kanji-mark kanji">鮮</span>
                <span>
                  <small>Sempre fresco</small>
                  <b>Feito na hora</b>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================= BARCOS ============================= */}
        <section id="barcos">
          <div className="divider-kanji" style={{ top: 20, left: -10, fontSize: "20rem" }} aria-hidden>
            舟
          </div>
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Delivery de barcos</span>
              <span className="title-kanji kanji">舟盛り</span>
              <h2 className="section-title">
                Barcos de <span className="accent">sushi</span>
              </h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Montamos barcos em tamanhos variados, do happy hour à grande
                celebração. Estas são as duas sugestões mais pedidas — mas é só
                falar com a gente que montamos o barco no tamanho que você
                precisa.
              </p>
            </Reveal>

            <div className="boats-grid">
              <Reveal className="card boat-card" delay={60}>
                <div className="boat-head">
                  <div className="boat-pieces">
                    100<span>peças</span>
                  </div>
                  <div className="boat-name kanji">小舟</div>
                </div>
                <div className="boat-price">
                  R$ 350<small> / barco</small>
                </div>
                <ul>
                  <li>Seleção variada de sushis e niguiris</li>
                  <li>Ideal para 4 a 6 pessoas</li>
                  <li>Montagem caprichada pronta para servir</li>
                  <li>Perfeito para um jantar em casa</li>
                </ul>
                <OrderButton className="btn btn-ghost">Pedir este barco</OrderButton>
              </Reveal>

              <Reveal className="card boat-card featured" delay={140}>
                <div className="ribbon">Mais pedido</div>
                <div className="boat-head">
                  <div className="boat-pieces">
                    200<span>peças</span>
                  </div>
                  <div className="boat-name kanji">大舟</div>
                </div>
                <div className="boat-price">
                  R$ 700<small> / barco</small>
                </div>
                <ul>
                  <li>Grande variedade de sushis, niguiris e enrolados</li>
                  <li>Ideal para 8 a 12 pessoas</li>
                  <li>Apresentação impecável, digna de vitrine</li>
                  <li>O preferido das grandes celebrações</li>
                </ul>
                <OrderButton className="btn btn-primary">Pedir este barco</OrderButton>
              </Reveal>
            </div>

            <Reveal className="boats-note" delay={120}>
              <span className="kanji" style={{ color: "var(--amber)", fontSize: "1.4rem" }}>
                自由
              </span>
              <p>
                <b style={{ color: "var(--ink)" }}>Tamanho sob medida:</b> também
                montamos barcos maiores ou menores. Conte quantas pessoas e a
                ocasião que fazemos um orçamento na hora.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============================= SUSHIS / GALERIA ============================= */}
        <section id="sushis">
          <div className="divider-kanji kanji" style={{ bottom: 40, right: -20, fontSize: "22rem" }} aria-hidden>
            鮨
          </div>
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Nosso cardápio é variado</span>
              <span className="title-kanji kanji">寿司の種類</span>
              <h2 className="section-title">
                Os <span className="accent">sushis</span>
              </h2>
            </Reveal>

            <Reveal className="note-banner" delay={40}>
              <span className="ic kanji">注</span>
              <p>
                Nosso cardápio é <b>bem variado</b> e muda conforme o dia — por
                isso <b>nem todos os sushis têm foto aqui</b>. As imagens abaixo
                são só uma amostra. Quando um item aparece com um{" "}
                <b>nome maior</b>, é porque ali vão{" "}
                <b>3 sushis diferentes juntos</b> no mesmo pedaço.
              </p>
            </Reveal>

            <div className="gallery-grid">
              <Reveal as="figure" className="g-item span-tall" delay={0}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/produtos/sashimi.jpeg" alt="Sashimi de salmão em formato de rosa" />
                <figcaption className="g-meta">
                  <span className="jp-tag kanji">刺身</span>
                  <b>Sashimi de Salmão</b>
                  <small>Fatias nobres, sem arroz</small>
                </figcaption>
              </Reveal>

              <Reveal as="figure" className="g-item span-wide" delay={80}>
                <span className="trio-flag">★ 3 sushis</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/produtos/sushis/sushi_salmaogrelado_skin_atum.jpeg" alt="Trio de niguiris: salmão grelhado, skin e atum" />
                <figcaption className="g-meta">
                  <span className="jp-tag kanji">三貫</span>
                  <b>Salmão Grelhado · Skin · Atum</b>
                  <small>Nome maior = 3 sushis diferentes no pedaço</small>
                </figcaption>
              </Reveal>

              <Reveal as="figure" className="g-item span-reg" delay={120}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/produtos/sushis/sushi_nigirisalmao.jpeg" alt="Niguiri de salmão" />
                <figcaption className="g-meta">
                  <span className="jp-tag kanji">握り</span>
                  <b>Niguiri de Salmão</b>
                </figcaption>
              </Reveal>

              <Reveal as="figure" className="g-item span-reg" delay={160}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/produtos/sushis/sushi_camarao.jpeg" alt="Niguiri de camarão" />
                <figcaption className="g-meta">
                  <span className="jp-tag kanji">海老</span>
                  <b>Niguiri de Camarão</b>
                </figcaption>
              </Reveal>

              <Reveal as="figure" className="g-item span-half" delay={60}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/produtos/temaki.jpeg" alt="Temaki de salmão" />
                <figcaption className="g-meta">
                  <span className="jp-tag kanji">手巻き</span>
                  <b>Temaki de Salmão</b>
                  <small>Cone de nori recheado e generoso</small>
                </figcaption>
              </Reveal>

              <Reveal as="figure" className="g-item span-half" delay={120}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/produtos/hot.jpeg" alt="Hot roll empanado e frito" />
                <figcaption className="g-meta">
                  <span className="jp-tag kanji">ホット</span>
                  <b>Hot Roll</b>
                  <small>Enrolado empanado e frito na hora</small>
                </figcaption>
              </Reveal>
            </div>

            <Reveal className="sushi-types" delay={80}>
              <h3>E ainda tem muito mais na variação</h3>
              <p className="sub">
                Alguns dos tipos que entram no rodízio dos nossos barcos e
                eventos (sem foto, mas com o mesmo capricho):
              </p>
              <div className="types-cols">
                <span>Niguiri de atum</span>
                <span>Joy (cream cheese)</span>
                <span>Uramaki Califórnia</span>
                <span>Hossomaki de salmão</span>
                <span>Filadélfia</span>
                <span>Skin (pele crocante)</span>
                <span>Gunkan</span>
                <span>Enrolado de pepino</span>
                <span>Hot Philadelphia</span>
                <span>Niguiri de skin grelhado</span>
                <span>Temaki da casa</span>
                <span>Combinados especiais</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================= JANTARES ============================= */}
        <section id="jantares">
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Experiência completa</span>
              <span className="title-kanji kanji">晩餐</span>
              <h2 className="section-title">
                <span className="accent">Jantares</span> Kamei
              </h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Um menu completo servido para o seu grupo: entrada, sushis
                variados à vontade e um prato quente. O cliente monta as escolhas
                e a gente cuida do resto.
              </p>
            </Reveal>

            <div className="dinner-grid">
              <Reveal className="dinner-price-box" delay={60}>
                <div className="big">
                  R$110<small> /pessoa</small>
                </div>
                <div className="per">Menu completo · 3 etapas</div>
                <div className="min">
                  <span>Mínimo de</span> <b>20</b> <span>pessoas</span>
                </div>
                <OrderButton className="btn btn-primary" style={{ marginTop: 26, width: "100%", justifyContent: "center" }}>
                  Reservar um jantar
                </OrderButton>
              </Reveal>

              <div className="courses">
                <Reveal className="course" delay={80}>
                  <div className="step kanji">前</div>
                  <div>
                    <h4>Entrada</h4>
                    <div className="choose">Escolha 2 das 3 opções</div>
                    <div className="opts">
                      <span>Gyoza</span>
                      <span>Rolinho primavera</span>
                      <span>Fry de frango</span>
                    </div>
                  </div>
                </Reveal>

                <Reveal className="course c-red" delay={140}>
                  <div className="step kanji">寿</div>
                  <div>
                    <h4>Sushis variados</h4>
                    <div className="choose">Incluso no menu</div>
                    <p className="fixed">
                      Uma seleção generosa e variada dos nossos sushis, niguiris e
                      enrolados — sempre fresquinhos e montados na hora.
                    </p>
                  </div>
                </Reveal>

                <Reveal className="course" delay={200}>
                  <div className="step kanji">熱</div>
                  <div>
                    <h4>Prato quente</h4>
                    <div className="choose">Escolha 1 das 3 opções</div>
                    <div className="opts">
                      <span>Yakisoba</span>
                      <span>Kare Rice (curry)</span>
                      <span>Carne com legumes</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============================= FESTAS / EVENTOS ============================= */}
        <section id="festas">
          <div className="divider-kanji kanji" style={{ top: 60, left: -30, fontSize: "20rem" }} aria-hidden>
            祝
          </div>
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Eventos & celebrações</span>
              <span className="title-kanji kanji">お祝い</span>
              <h2 className="section-title">
                Festas de 15 <span className="accent">&</span> formaturas
              </h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Buffet de sushi que vira atração na sua festa. Montamos mesas
                fartas e personalizadas para o grande dia. Valores combinados de
                acordo com o número de convidados e o cardápio.
              </p>
            </Reveal>

            <div className="events-grid">
              <Reveal as="article" className="card event-card" delay={60}>
                <div className="ev-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/festa15/festa15_sushis.jpeg" alt="Mesa de buffet de sushi para festa de 15 anos" />
                </div>
                <div className="ev-body">
                  <span className="ev-jp kanji">十五祭</span>
                  <h3>Festa de 15 anos</h3>
                  <p>
                    Uma mesa de sushi cheia de cor e variedade para a debutante e
                    os convidados. Montagem temática e reposição durante a festa.
                  </p>
                  <span className="ev-pill">Valor a combinar</span>
                </div>
              </Reveal>

              <Reveal as="article" className="card event-card" delay={140}>
                <div className="ev-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/festa15/festa_15_sushis.jpeg" alt="Buffet de sushi e sashimi para formatura" />
                </div>
                <div className="ev-body">
                  <span className="ev-jp kanji">卒業祝</span>
                  <h3>Formaturas</h3>
                  <p>
                    Comemore a conquista com um buffet japonês completo: sushis,
                    sashimis e enrolados servidos com apresentação impecável.
                  </p>
                  <span className="ev-pill">Valor a combinar</span>
                </div>
              </Reveal>
            </div>

            <Reveal style={{ textAlign: "center", marginTop: 36 }} delay={120}>
              <OrderButton className="btn btn-primary">
                Fazer um orçamento de festa
              </OrderButton>
            </Reveal>
          </div>
        </section>

        {/* ============================= SOBRE / HILTON ============================= */}
        <section id="sobre">
          <div className="wrap">
            <div className="about-grid">
              <Reveal className="about-photo" delay={40}>
                <div className="frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/equipe/hilton.jpeg" alt="Hilton, sushiman do Sushi Kamei" />
                </div>
                <div className="name-plate">
                  <span className="kanji">板前</span>
                  <span>
                    <b>Hilton</b>
                    <small style={{ color: "var(--ink-faint)" }}> · Sushiman</small>
                  </span>
                </div>
              </Reveal>

              <Reveal className="about-text" delay={120}>
                <span className="eyebrow">O sushiman</span>
                <h2 className="section-title" style={{ marginTop: 14 }}>
                  As mãos por trás <span className="accent">do Kamei</span>
                </h2>
                <p>
                  Cada barco, cada niguiri e cada festa do Sushi Kamei passa pelas
                  mãos do <b style={{ color: "var(--ink)" }}>Hilton</b>, nosso
                  sushiman. É dele o corte preciso, a escolha do peixe e aquele
                  acabamento que faz o sushi parecer (e ser) especial.
                </p>
                <p>
                  Tradição japonesa com a alma mineira: aqui em Belo Horizonte, o
                  Sushi Kamei leva à sua mesa o capricho de quem trata sushi como
                  arte — do pedido simples ao grande evento.
                </p>
                <div className="sig kanji">亀井 — 真心こめて</div>
                <p style={{ color: "var(--ink-faint)", fontSize: "0.85rem", marginTop: 4 }}>
                  “Kamei — feito com todo o coração.”
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================= CONTATO / CTA ============================= */}
        <section id="contato" className="contact">
          <div className="wrap">
            <Reveal className="contact-card">
              <div className="kanji-huge kanji">注文</div>
              <h2 className="section-title">
                Vamos criar algo <span className="accent">memorável</span>?
              </h2>
              <p>
                Fale com o nosso atendente de IA: ele monta o seu barco, esclarece
                as opções do jantar e prepara o orçamento da sua festa — com toda
                a atenção, a qualquer hora.
              </p>
              <div className="contact-actions">
                <OrderButton className="btn btn-primary">
                  Falar com o atendente IA
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </OrderButton>
                <a href="#barcos" className="btn btn-ghost">
                  Ver os barcos
                </a>
              </div>
              <div className="contact-meta">
                <div>
                  <b>Onde</b>
                  Belo Horizonte e região · MG
                </div>
                <div>
                  <b>Atendimento</b>
                  Atendente de IA 24h pelo site
                </div>
                <div>
                  <b>Eventos</b>
                  Festas e formaturas sob encomenda
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================= FOOTER ============================= */}
        <footer className="footer">
          <div className="wrap footer-grid">
            <div className="brand-mini">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/marca/logo.jpg" alt="Sushi Kamei" />
              <div>
                <b style={{ display: "block", letterSpacing: "0.16em" }}>SUSHI KAMEI</b>
                <span className="kanji">亀井 寿司</span>
              </div>
            </div>
            <small>
              © {new Date().getFullYear()} Sushi Kamei · Belo Horizonte – MG ·
              Sushi artesanal por Hilton
            </small>
          </div>
        </footer>
      </main>

      <Chatbot />
    </>
  );
}
