const phone = "+79241115544";
const twoGis = "https://2gis.ru/komsomolsk-on-amur/firm/70000001081793691";

const services = [
  {
    number: "01",
    title: "Волосы",
    text: "Женские стрижки, сложные окрашивания, наращивание, кератин и ботокс для волос.",
    note: "Стрижка от 1 700 ₽",
    image: "/photos/studio-04.jpg",
  },
  {
    number: "02",
    title: "Ногти",
    text: "Аппаратный и японский маникюр, гель-лак, наращивание гелем и женский педикюр.",
    note: "Точная цена при записи",
    image: "/photos/studio-09.jpg",
  },
  {
    number: "03",
    title: "Брови и ресницы",
    text: "Коррекция, окрашивание, ламинирование и наращивание — от естественного до выразительного эффекта.",
    note: "Подберём процедуру",
    image: "/photos/service-brows-user.png",
  },
  {
    number: "04",
    title: "Солярий",
    text: "Вертикальный турбосолярий для ровного оттенка и красивого сияния кожи.",
    note: "По предварительной записи",
    image: "/photos/service-solarium-user.png",
  },
];

const gallery = [
  ["/photos/gallery-hair-left-user.png", "Гладкие светлые волосы после ухода"],
  ["/photos/studio-10.jpg", "Интерьер пространства красоты"],
  ["/photos/gallery-hair-user.png", "Укладка на тёмные волосы"],
  ["/photos/studio-06.jpg", "Зона ожидания салона"],
  ["/photos/studio-11.jpg", "Укладка на длинные волосы"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Пространство красоты Анны Цветинской — на главную">
          <span className="brand-mark">АЦ</span>
          <span className="brand-name">
            <strong>АННА ЦВЕТИНСКАЯ</strong>
            <small>ПРОСТРАНСТВО КРАСОТЫ</small>
          </span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#services">Услуги</a>
          <a href="#gallery">Работы</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="header-action" href={`tel:${phone}`}>Записаться</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Комсомольск-на-Амуре</p>
          <h1>КРАСОТА<br /><em>В ВАШЕМ РИТМЕ</em></h1>
          <p className="hero-lead">
            Пространство, где мастера слышат ваши пожелания и создают образ, в котором легко быть собой.
          </p>
          <div className="hero-actions">
            <a className="button button--gold" href={`tel:${phone}`}>Записаться</a>
            <a className="text-link" href="#services">Посмотреть услуги <span>↓</span></a>
          </div>
          <div className="rating-line" aria-label="Рейтинг 4,9 из 5 по данным 2ГИС">
            <span className="stars">★★★★★</span>
            <strong>4,9</strong>
            <a href={`${twoGis}/tab/reviews`} target="_blank" rel="noreferrer">70 оценок в 2ГИС ↗</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/photos/studio-05.jpg" alt="Работа мастера пространства красоты Анны Цветинской" />
          <div className="hero-badge"><strong>48</strong><span>фото работ<br />в 2ГИС</span></div>
          <div className="hero-monogram">АЦ</div>
        </div>
      </section>

      <section className="intro section">
        <p className="section-kicker">О пространстве / 01</p>
        <div className="intro-grid">
          <h2>ВАША КРАСОТА<br /><em>В НАДЁЖНЫХ РУКАХ</em></h2>
          <div>
            <p>В одном месте собраны процедуры для волос, ногтей, бровей и ресниц, а также солярий. Спокойная атмосфера, внимательные мастера и результат, который подходит именно вам.</p>
            <dl className="facts">
              <div><dt>4,9</dt><dd>рейтинг</dd></div>
              <div><dt>52</dt><dd>отзыва</dd></div>
              <div><dt>4</dt><dd>направления</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <p className="section-kicker">Услуги / 02</p>
          <h2>ВСЁ ДЛЯ<br /><em>ВАШЕГО ОБРАЗА</em></h2>
          <p>Актуальные направления по данным карточки студии в 2ГИС. Стоимость конкретной процедуры уточните при записи.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <img src={service.image} alt={`${service.title} в пространстве красоты Анны Цветинской`} />
              <div className="service-shade" />
              <span className="service-number">{service.number}</span>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div><strong>{service.note}</strong><a href={`tel:${phone}`} aria-label={`Записаться: ${service.title}`}>↗</a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery section" id="gallery">
        <div className="gallery-heading">
          <div><p className="section-kicker">Работы и атмосфера / 03</p><h2>В ДЕТАЛЯХ —<br /><em>НАША ЛЮБОВЬ</em></h2></div>
          <a className="text-link" href="https://2gis.ru/komsomolsk-on-amur/gallery/firm/70000001081793691" target="_blank" rel="noreferrer">Все 48 фото в 2ГИС ↗</a>
        </div>
        <div className="gallery-grid">
          {gallery.map(([src, alt], index) => <figure key={src} className={`gallery-item gallery-item--${index + 1}`}><img src={src} alt={alt} /></figure>)}
        </div>
      </section>

      <section className="reviews-strip">
        <div><strong>4,9</strong><span>рейтинг в 2ГИС</span></div>
        <p>«Лучшее время для красоты — сейчас»</p>
        <a href={`${twoGis}/tab/reviews`} target="_blank" rel="noreferrer">Читать 52 отзыва ↗</a>
      </section>

      <section className="contact section" id="contacts">
        <div className="contact-photo"><img src="/photos/studio-10.jpg" alt="Интерьер пространства красоты Анны Цветинской" /><span>ПРОСТРАНСТВО<br />КРАСОТЫ</span></div>
        <div className="contact-content">
          <p className="section-kicker">Контакты / 04</p>
          <h2>ВАШЕ ВРЕМЯ<br /><em>ДЛЯ СЕБЯ</em></h2>
          <p className="contact-lead">Позвоните — подберём услугу, мастера и удобное время.</p>
          <div className="contact-list">
            <div><span>АДРЕС</span><p>Комсомольск-на-Амуре<br />проспект Первостроителей, 41 · 1 этаж</p></div>
            <div><span>РЕЖИМ</span><p>10:00–19:00<br />актуальный график смотрите в 2ГИС</p></div>
            <div><span>ТЕЛЕФОН</span><a href={`tel:${phone}`}>+7 924 111-55-44</a></div>
          </div>
          <div className="contact-actions">
            <a className="button button--gold" href={`tel:${phone}`}>Позвонить</a>
            <a className="text-link" href={twoGis} target="_blank" rel="noreferrer">Открыть в 2ГИС ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="brand brand--footer"><span className="brand-mark">АЦ</span><span className="brand-name"><strong>АННА ЦВЕТИНСКАЯ</strong><small>ПРОСТРАНСТВО КРАСОТЫ</small></span></div>
        <p>Красота в вашем ритме.</p>
        <span>© 2026 · Комсомольск-на-Амуре</span>
      </footer>
      <a className="mobile-book" href={`tel:${phone}`}>Записаться</a>
    </main>
  );
}
