export default function Home() {
  const whatsapp =
    "https://wa.me/79144125768?text=" +
    encodeURIComponent(
      "Здравствуйте! Хочу записаться в Дом красоты. Подскажите, пожалуйста, свободные окошки.",
    );

  const services = [
    {
      number: "01",
      title: "Макияж",
      price: "от 2 000 ₽",
      text: "Дневной, вечерний, свадебный и креативный образ.",
      image: "/photos/look-pink.jpg",
      className: "service-card--wide",
    },
    {
      number: "02",
      title: "Укладки",
      price: "2 000–4 000 ₽",
      text: "Локоны и стойкие укладки под событие и настроение.",
      image: "/photos/look-hair.jpg",
      className: "",
    },
    {
      number: "03",
      title: "Брови",
      price: "от 800 ₽",
      text: "Форма, окрашивание и долговременная укладка.",
      image: "/photos/look-soft.jpg",
      className: "",
    },
    {
      number: "04",
      title: "Моментальный загар",
      price: "3 000–3 500 ₽",
      text: "Ровный оттенок и деликатное сияние кожи.",
      image: "/photos/look-detail.jpg",
      className: "service-card--wide",
    },
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Beauty Mafia — на главную">
          <span className="brand-mark">BM</span>
          <span>
            <strong>BEAUTY MAFIA</strong>
            <small>ДОМ КРАСОТЫ</small>
          </span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#about">О нас</a>
          <a href="#services">Услуги</a>
          <a href="#reviews">Отзывы</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="header-action" href={whatsapp} target="_blank" rel="noreferrer">
          Записаться
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Дом красоты · Комсомольск-на-Амуре</p>
          <h1>
            ТВОЯ КРАСОТА.
            <br />
            <span>ТВОИ ПРАВИЛА.</span>
          </h1>
          <p className="hero-lead">
            Собираем образы, которые хочется запомнить. Макияж, укладки,
            брови и моментальный загар — в атмосфере женственности, праздника
            и заботы.
          </p>
          <div className="hero-actions">
            <a className="button button--dark" href={whatsapp} target="_blank" rel="noreferrer">
              Выбрать время
            </a>
            <a className="text-link" href="#services">
              Смотреть услуги <span>↘</span>
            </a>
          </div>
          <div className="rating-line" aria-label="Рейтинг 5 из 5 по данным 2ГИС">
            <span className="stars">★★★★★</span>
            <strong>5.0</strong>
            <span>516 оценок в 2ГИС</span>
          </div>
        </div>

        <div className="hero-collage" aria-label="Работы мастеров из галереи 2ГИС">
          <figure className="photo photo--main">
            <img src="/photos/hero.jpg" alt="Вечерний макияж и укладка от мастеров салона" />
          </figure>
          <figure className="photo photo--top">
            <img src="/photos/look-pink.jpg" alt="Розовый креативный макияж" />
          </figure>
          <figure className="photo photo--bottom">
            <img src="/photos/look-glam.jpg" alt="Гламурный макияж" />
          </figure>
          <div className="collage-note">
            <span>308</span>
            <small>фото наших работ<br />в 2ГИС</small>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Направления салона">
        <div>
          <span>MAKEUP</span><i>✦</i><span>HAIR</span><i>✦</i>
          <span>BROWS</span><i>✦</i><span>GLOW</span><i>✦</i>
          <span>MAKEUP</span><i>✦</i><span>HAIR</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-kicker">О НАС / 01</div>
        <div className="about-heading">
          <h2>МЕСТО, ГДЕ МОЖНО <em>ВЫБРАТЬ СЕБЯ</em></h2>
          <p>
            Раньше нас знали как Beauty Mafia. Сегодня мы — Дом красоты,
            в котором сохранились та же энергия, внимание к деталям и любовь к
            выразительным образам.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card feature-card--image">
            <img src="/photos/salon-video.jpg" alt="Работа мастеров Дома красоты" />
            <span>РЕАЛЬНЫЕ РАБОТЫ</span>
          </article>
          <article className="feature-card feature-card--pink">
            <span className="feature-index">01</span>
            <h3>Всё в одном месте</h3>
            <p>Образ целиком: макияж, волосы и брови без спешки между салонами.</p>
          </article>
          <article className="feature-card feature-card--light">
            <span className="feature-index">02</span>
            <h3>Чувствуем тебя</h3>
            <p>Слышим пожелания и предлагаем детали, которые подходят именно тебе.</p>
          </article>
          <article className="feature-card feature-card--dark">
            <span className="feature-index">03</span>
            <h3>Стойкий результат</h3>
            <p>Образы выдерживают танцы, слёзы счастья, фотосессии и длинные праздники.</p>
          </article>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-title-row">
          <div className="section-kicker">УСЛУГИ / 02</div>
          <h2>СОЗДАЁМ <em>ТВОЙ ОБРАЗ</em></h2>
          <p>Цены обновлены по данным 2ГИС. Точную стоимость мастер подскажет перед записью.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className={`service-card ${service.className}`} key={service.number}>
              <img src={service.image} alt="" />
              <div className="service-overlay" />
              <span className="service-number">{service.number}</span>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div>
                  <strong>{service.price}</strong>
                  <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Записаться: ${service.title}`}>
                    ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="service-note">
          <span>Свадебный образ?</span>
          <p>Макияж и укладка одновременно — чтобы утро было спокойным, а образ держался до самого финала.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer">Обсудить образ</a>
        </div>
      </section>

      <section className="reviews section" id="reviews">
        <div className="section-kicker">ОТЗЫВЫ / 03</div>
        <div className="reviews-heading">
          <h2>ГОВОРЯТ, У НАС<br /><em>ТВОРИТСЯ ВОЛШЕБСТВО</em></h2>
          <a href="https://2gis.ru/komsomolsk-on-amur/firm/70000001063549153/tab/reviews" target="_blank" rel="noreferrer">
            Все отзывы в 2ГИС ↗
          </a>
        </div>
        <div className="reviews-grid">
          <blockquote>
            <span className="quote">“</span>
            <p>Мастера чувствуют моё настроение и делают именно то, что я хочу. Макияж шикарный, а укладка — естественная и стойкая.</p>
            <footer><strong>А С</strong><span>клиент Дома красоты</span></footer>
          </blockquote>
          <blockquote className="review--pink">
            <span className="quote">“</span>
            <p>Атмосфера очень крутая, пропитанная женственностью и праздником. Все пожелания были учтены — я нашла своё место красоты.</p>
            <footer><strong>Анна</strong><span>образ для фотосессии</span></footer>
          </blockquote>
          <blockquote>
            <span className="quote">“</span>
            <p>Красивое, атмосферное местечко! Девочки — добрые феечки и волшебницы, которые творят красоту.</p>
            <footer><strong>Наталья</strong><span>постоянная гостья</span></footer>
          </blockquote>
        </div>
      </section>

      <section className="contact section" id="contacts">
        <div className="contact-photo">
          <img src="/photos/look-soft.jpg" alt="Макияж от мастеров Дома красоты" />
          <span>BEAUTY<br />MAFIA</span>
        </div>
        <div className="contact-content">
          <div className="section-kicker">КОНТАКТЫ / 04</div>
          <h2>ТВОЁ ВРЕМЯ<br /><em>СИЯТЬ</em></h2>
          <p className="contact-lead">
            Напиши нам в WhatsApp — подберём мастера и удобное время.
          </p>
          <div className="contact-list">
            <div><span>АДРЕС</span><p>Комсомольск-на-Амуре<br />ул. Аллея Труда, 28 · 1 этаж</p></div>
            <div><span>РЕЖИМ</span><p>Ежедневно, 10:00–20:00<br />по предварительной записи</p></div>
            <div><span>ТЕЛЕФОН</span><a href="tel:+79144125768">+7 914 412-57-68</a></div>
          </div>
          <div className="contact-actions">
            <a className="button button--dark" href={whatsapp} target="_blank" rel="noreferrer">Написать в WhatsApp</a>
            <a className="text-link" href="https://2gis.ru/komsomolsk-on-amur/firm/70000001063549153" target="_blank" rel="noreferrer">
              Открыть в 2ГИС ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="brand brand--footer">
          <span className="brand-mark">BM</span>
          <span><strong>BEAUTY MAFIA</strong><small>ДОМ КРАСОТЫ</small></span>
        </div>
        <p>Красота начинается с выбора себя.</p>
        <span>© 2026 · Комсомольск-на-Амуре</span>
      </footer>

      <a className="mobile-book" href={whatsapp} target="_blank" rel="noreferrer">
        Записаться
      </a>
    </main>
  );
}
