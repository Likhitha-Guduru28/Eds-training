import { loadCSS } from '../../scripts/aem.js';

/* ---------- IMAGES ----------
   For testing, these names point to the demo theme's pictures.
   For your real site: delete a line below and put your own file
   with the same name in the /images folder. */
const DEMO = 'https://demo.themexbd.com/wpx/technowp/wp-content/uploads/';
const REMOTE = {
  'logo.png': '2025/04/technowp-logo.png',
  'logo-white.png': '2025/04/technowp-logot.png',
  'about.jpg': '2025/04/technowp-about.jpg',
  'gallery-1.jpg': '2021/08/blog-01.jpg',
  'gallery-2.jpg': '2021/06/blog-02.jpg',
  'gallery-3.jpg': '2021/06/blog-03.jpg',
  'gallery-4.jpg': '2021/06/blog-04.jpg',
  'gallery-5.jpg': '2021/06/blog-05.jpg',
  'gallery-6.jpg': '2021/06/blog-06.jpg',
  'gallery-7.jpg': '2021/06/blog-07.jpg',
  'gallery-8.jpg': '2021/06/blog-08.jpg',
  'gallery-9.jpg': '2021/06/blog-09.jpg',
  'card-1.jpg': '2022/10/pro-0.jpg',
  'card-2.jpg': '2022/10/pro-07.jpg',
  'card-3.jpg': '2022/10/pro-08.jpg',
  'card-4.jpg': '2022/10/pro-09.jpg',
  'team-1.jpg': '2024/06/team03.png',
  'team-2.jpg': '2024/06/team01.png',
  'team-3.jpg': '2024/06/team02.png',
  'user-1.jpg': '2022/10/testi-05.png',
  'user-2.jpg': '2022/10/admin.png',
  'brand-1.png': '2024/06/b1.png',
  'brand-2.png': '2024/06/b2.png',
  'brand-3.png': '2024/06/b3.png',
  'brand-4.png': '2024/06/b4.png',
  'brand-5.png': '2024/06/b5.png',
};
const img = (n) => (REMOTE[n] ? DEMO + REMOTE[n] : `/images/${n}`);

/* ---------- CONTENT (edit text here) ---------- */
const NAV = ['Home', 'About', 'Service', 'Pages', 'Blog', 'Contact'];
const STATS = [
  ['fa-rocket', 523, 'Projects Done'],
  ['fa-user-tie', 29, 'Business Partners'],
  ['fa-headset', 230, 'Clients Support'],
  ['fa-trophy', 69, 'Awards Winning'],
];
const SOLUTIONS = [
  ['fa-lock', 'Best Security'],
  ['fa-chart-column', 'High Performance'],
  ['fa-laptop-code', 'Info Technology'],
  ['fa-headset', '24/7 Support'],
  ['fa-rocket', 'IT Management'],
  ['fa-screwdriver-wrench', 'Repair Service'],
  ['fa-magnifying-glass-chart', 'Data & Analytics'],
  ['fa-handshake', 'Certified Company'],
];
const FILTERS = ['All Work', 'Creative', 'Design', 'Development', 'Managment'];
const GALLERY = [
  ['Always look at the solution', 'Design Development'],
  ['Secrets About Solution', 'Design Managment'],
  ['Orange Is the New Black', 'Creative Development'],
  ['Contribution To Humanity', 'Design Managment'],
  ['You Will Never Believe These', 'Creative Managment'],
  ['Great solution to all human', 'Design Development'],
  ['Seven Things You Probably', 'Design Managment'],
  ['New Short Video Series', 'Creative Development'],
  ['Teach Knowledge', 'Design Managment'],
];
const PLANS = [['Premium Plan', '09'], ['Standard Plan', '25'], ['Popular Plan', '42']];
const PLAN_ITEMS = ['1 Month support', 'Data Analytics', 'Machine Learning', '1 Month update', 'Business Analytics'];
const TEAM = [
  ['Galib Biswash', 'Founder'],
  ['Sonia Akter', 'Co-Founder'],
  ['Belal Khan', 'Supporter'],
];
const FAQ_TEXT = 'A process that maintains nuisance organisms below economic thresholds, is a complex ecological process often mediated by biodiversity, Agricultural intensification results of this chimpionsship, thank you all.';
const FAQ = [
  ['You are some questions and answer', FAQ_TEXT],
  ['Company History and mission', FAQ_TEXT],
  ['We are here to Solution in company', FAQ_TEXT],
  ['You are some company policy', FAQ_TEXT],
];
const CARDS = [
  ['Client Communication', 'card-1.jpg'],
  ['Teach Knowledge', 'card-2.jpg'],
  ['Business Analytics', 'card-3.jpg'],
  ['Software Development', 'card-4.jpg'],
];
const NEWS = [
  ['Management', 'gallery-2.jpg', 'Always look at the solution, not the problem.'],
  ['Marketing', 'gallery-3.jpg', '7 Secrets About Nonprofit That For The Past 50 Years.'],
  ['Support', 'gallery-4.jpg', 'Netflix’s “Orange Is the New Black” Brings'],
];
const MARQUEE = ['IT MANAGEMENT', 'CLOUD SERVICE', 'IT SERVICE', 'TECHNOLOGY', 'IT SOLUTION'];
const LOREM = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const SOCIAL_TOP = ['facebook-f', 'x-twitter', 'instagram'];

/* ---------- HELPERS ---------- */
const heading = (t, p = LOREM) => `<div class="tw-head"><h2>${t}</h2><p>${p}</p></div>`;
const social = (list, cls) => `<div class="${cls}">${list.map((s) => `<a href="#" aria-label="${s}"><i class="fa-brands fa-${s}"></i></a>`).join('')}</div>`;

const heroSlide = (title, firstBtn, on) => `
  <section class="tw-hero ${on ? 'on' : ''}" style="--bg:url('${img('hero.jpg')}')"><div class="tw-container">
    <h1>${title}</h1>
    <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, eiusmod to incididunt ut labore et dolore magna aliqua. designing in a way of just not only professions</p>
    <div class="tw-btns"><a class="tw-btn tw-btn-sq" href="#about">${firstBtn}</a><a class="tw-btn tw-btn-sq" href="#contact">Contact Us</a></div>
    ${social(['facebook-f', 'x-twitter', 'instagram', 'dribbble'], 'tw-soc-box')}
  </div></section>`;

function sections() {
  return `
  <div class="tw-topbar"><div class="tw-container tw-topbar-in">
    <div class="tw-topbar-l">
      <span><i class="fa-regular fa-house"></i> Dakra park ipsum dolor sit met, connected uk.</span>
      <span><i class="fa-solid fa-mobile-screen"></i> +81257 8785 472</span>
      <span><i class="fa-regular fa-envelope"></i> demo@example.com</span>
    </div>
    <div class="tw-topbar-r"><span><i class="fa-regular fa-clock"></i> Open hours: 9am-6pm</span>
      ${social(SOCIAL_TOP, 'tw-soc-plain')}</div>
  </div></div>

  <header class="tw-nav"><div class="tw-container tw-nav-in">
    <a href="/" class="tw-logo"><img class="tw-logo-dark" src="${img('logo.png')}" alt="TechnoWP"><img class="tw-logo-white" src="${img('logo-white.png')}" alt="TechnoWP"></a>
    <button class="tw-burger" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>
    <nav class="tw-menu">
      ${NAV.map((n, i) => `<a href="#${n.toLowerCase()}" class="${i === 0 ? 'active' : ''}">${n}${['Home', 'Pages'].includes(n) ? ' <i class="fa-solid fa-angle-down"></i>' : ''}</a>`).join('')}
      <a href="#" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></a>
      <a href="#contact" class="tw-btn">Get Quotes</a>
    </nav>
  </div></header>

  <div id="home"></div>
  ${heroSlide('Super IT Service For<br>Digital Business', 'Read More', true)}
  ${heroSlide('Super AI Service For<br>Digital Business', 'Get Started', false)}

  <section class="tw-about" id="about"><div class="tw-container tw-split">
    <img src="${img('about.jpg')}" alt="About us" loading="lazy">
    <div><h2>We are here to Solution with 15 years experience</h2>
      <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, eiusmod to tempor incididunt ut labore et dolore magna aliqua. designing in a way of just not only professions, how in a passion for our company. We have to a tendency to believe thes that smart looking.</p>
      <ul class="tw-check"><li>Deep Expertise &amp; Leadership</li><li>Custom Software Development</li><li>Software Product Development</li></ul>
      <a class="tw-btn tw-btn-pill" href="#">Read More</a></div>
  </div></section>

  <section class="tw-stats"><div class="tw-container tw-grid4">
    ${STATS.map(([i, n, l]) => `<div class="tw-card tw-stat"><i class="fa-solid ${i}"></i><strong>${n} +</strong><span>${l}</span></div>`).join('')}
  </div></section>

  <section class="tw-sec" id="service"><div class="tw-container">
    ${heading('Our Best It Solution')}
    <div class="tw-grid4">${SOLUTIONS.map(([i, t]) => `<div class="tw-card tw-sol"><i class="fa-solid ${i}"></i><h3>${t}</h3><p>Lorem ipsum dolor sit met, connected elit sed.</p></div>`).join('')}</div>
  </div></section>

  <section class="tw-cta" style="--bg:url('${img('cta.jpg')}')"><div class="tw-container tw-cta-in">
    <div><small>GET STARTED TODAY ?</small><h2>Collaborate Consulting exists to find the place where</h2></div>
    <a class="tw-btn tw-btn-sq" href="#contact">Click Me</a>
  </div></section>

  <section class="tw-sec"><div class="tw-container">
    ${heading('Our Support Gallery')}
    <div class="tw-filters">${FILTERS.map((f, i) => `<button class="${i === 0 ? 'on' : ''}" data-f="${f}">${f}</button>`).join('')}</div>
    <div class="tw-grid3 tw-gal">${GALLERY.map(([t, c], i) => `<figure data-c="${c}"><img src="${img(`gallery-${i + 1}.jpg`)}" alt="${t}" loading="lazy"><figcaption><h3>${t}</h3><span>${c.split(' ').join(' · ')}</span></figcaption></figure>`).join('')}</div>
  </div></section>

  <section class="tw-sec tw-grey"><div class="tw-container">
    ${heading('Our Best Support Price')}
    <div class="tw-grid3">${PLANS.map(([n, p]) => `<div class="tw-card tw-plan"><h3>${n}</h3>
      <div class="tw-price"><small>$</small><b>${p}</b><span>Per Month</span></div>
      <ul>${PLAN_ITEMS.map((x) => `<li><i class="fa-solid fa-circle-chevron-right"></i> ${x}</li>`).join('')}</ul>
      <a class="tw-btn tw-btn-sq" href="#">Read More</a></div>`).join('')}</div>
  </div></section>

  <section class="tw-sec"><div class="tw-container tw-grid2">
    ${[['Mariya Jannat', 'Developer', 'user-1.jpg'], ['Monwar Hossain', 'IT Supporter', 'user-2.jpg']].map(([n, r, im]) => `
      <div class="tw-card tw-testi"><div class="tw-testi-top"><img src="${img(im)}" alt="${n}" loading="lazy"><div><h4>${n}</h4><span>${r}</span></div></div>
      <div class="tw-rate"><span>☆☆☆☆☆</span> Excellent</div>
      <p>The financial markets generally are unpredictable. So that one has to have different scenario dolor sit amet, consectetur adipisicing elit, sed do sod tempor.</p></div>`).join('')}
  </div></section>

  <div class="tw-marquee"><div class="tw-marquee-in">${[...MARQUEE, ...MARQUEE].map((w) => `<span>**${w}</span>`).join('')}</div></div>

  <section class="tw-sec"><div class="tw-container">
    ${heading('Our Best Support Team')}
    <div class="tw-grid3">${TEAM.map(([n, r], i) => `<div class="tw-card tw-team"><img src="${img(`team-${i + 1}.jpg`)}" alt="${n}" loading="lazy">
      <h4>${n}</h4><span>${r}</span><p>Lorem ipsum dolor sit amen.</p>${social(['facebook-f', 'x-twitter', 'instagram', 'vimeo-v'], 'tw-soc-round')}</div>`).join('')}</div>
  </div></section>

  <section class="tw-sec"><div class="tw-container tw-split">
    <img src="${img('about.jpg')}" alt="FAQ" loading="lazy">
    <div><small class="tw-blue">Faq</small><h2>The best secure services provide company</h2>
      <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div class="tw-faq">${FAQ.map(([q, a], i) => `<div class="tw-faq-i ${i === 0 ? 'open' : ''}"><button>${q}<i class="fa-solid fa-angle-down"></i></button><div class="tw-faq-a"><p>${a}</p></div></div>`).join('')}</div></div>
  </div></section>

  <section class="tw-sec"><div class="tw-container">
    <h2 class="tw-center">Our Best Gallery</h2>
    <div class="tw-grid4 tw-cards">${CARDS.map(([t, im]) => `<div class="tw-gcard"><img src="${img(im)}" alt="${t}" loading="lazy"><div class="tw-gcard-t"><h3>${t}</h3><a href="#">IT Service</a></div></div>`).join('')}</div>
  </div></section>

  <section class="tw-sec" id="contact"><div class="tw-container tw-contact">
    <div class="tw-info">
      <div class="tw-card"><i class="fa-solid fa-location-dot"></i><div><h4>Company Location</h4><p>dakra park ipsum dolor sit met, connected uk.</p></div></div>
      <div class="tw-card"><i class="fa-solid fa-mobile-screen"></i><div><h4>Company Phone</h4><p>+881257 8785 472, +881347 874582452</p></div></div>
      <div class="tw-card"><i class="fa-regular fa-envelope"></i><div><h4>Company Gmail</h4><p>demo@example.com, info@example.com</p></div></div>
    </div>
    <form class="tw-form"><h2>If you any problem Please contact us</h2>
      <div class="tw-grid2"><input placeholder="Name" required><input placeholder="Phone"><input type="email" placeholder="Email" required><input placeholder="Subject"></div>
      <textarea rows="6" placeholder="Message"></textarea>
      <button class="tw-btn tw-btn-sq tw-full" type="submit">Submit Request</button></form>
  </div></section>

  <section class="tw-brands"><div class="tw-container tw-brand-row">${[1, 2, 3, 4, 5].map((n) => `<img src="${img(`brand-${n}.png`)}" alt="Brand ${n}" loading="lazy">`).join('')}</div></section>

  <section class="tw-sec" id="blog"><div class="tw-container">
    ${heading('Our Company Latest News')}
    <div class="tw-grid3">${NEWS.map(([tag, im, t]) => `<article class="tw-card tw-news"><div class="tw-news-img"><img src="${img(im)}" alt="${t}" loading="lazy"><span class="tw-tag"><i class="fa-regular fa-bookmark"></i> ${tag}</span></div>
      <div class="tw-news-b"><h3>${t}</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p><a class="tw-btn-line" href="#">Read More</a></div></article>`).join('')}</div>
  </div></section>

  <footer class="tw-footer"><div class="tw-container tw-footer-in">
    <div><img src="${img('logo-white.png')}" alt="TechnoWP" class="tw-flogo"><p>Lorem ipsum dolor sit amet, coectetur adipiscing eiusmod tempor cons ect- etur adipiscing elit, sed happy diverse business team.</p>
      ${social(['facebook-f', 'x-twitter', 'linkedin-in', 'instagram'], 'tw-soc-box tw-soc-black')}</div>
    <div><h4>Important Link</h4><ul>${['About', 'Service', 'Portfolio', 'Contact', 'Blog'].map((l) => `<li><a href="#">${l}</a></li>`).join('')}</ul></div>
    <div><h4>Quick Info</h4><ul class="tw-qi"><li><i class="fa-regular fa-house"></i> dakra park ipsum dolor sit met, connected uk.</li><li><i class="fa-solid fa-mobile-screen"></i> +8803212365, 81257 8785 472</li><li><i class="fa-regular fa-envelope"></i> demo@example.com</li><li><i class="fa-regular fa-clock"></i> Open hours: 9am-6pm</li></ul></div>
    <div><h4>Recent Posts</h4>${NEWS.map(([, im, t]) => `<div class="tw-rp"><img src="${img(im)}" alt="" loading="lazy"><div><a href="#">${t}</a><small>October 18, 2022</small></div></div>`).join('')}</div>
  </div><div class="tw-copy">Technowp © 2025 - Designed by Wpdream</div></footer>
  <button class="tw-top" aria-label="Back to top"><i class="fa-solid fa-chevron-up"></i></button>`;
}

/* ---------- BEHAVIOUR ---------- */
export default function decorate(block) {
  loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
  block.innerHTML = sections();

  const nav = block.querySelector('.tw-nav');
  const top = block.querySelector('.tw-top');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 120);
    top.classList.toggle('show', window.scrollY > 300);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  block.querySelector('.tw-burger').addEventListener('click', () => block.querySelector('.tw-menu').classList.toggle('open'));

  block.querySelectorAll('.tw-filters button').forEach((b) => b.addEventListener('click', () => {
    block.querySelectorAll('.tw-filters button').forEach((x) => x.classList.toggle('on', x === b));
    block.querySelectorAll('.tw-gal figure').forEach((f) => {
      f.hidden = b.dataset.f !== 'All Work' && !f.dataset.c.includes(b.dataset.f);
    });
  }));

  block.querySelectorAll('.tw-faq-i button').forEach((b) => b.addEventListener('click', () => {
    const item = b.parentElement;
    const was = item.classList.contains('open');
    block.querySelectorAll('.tw-faq-i').forEach((i) => i.classList.remove('open'));
    if (!was) item.classList.add('open');
  }));

  block.querySelector('.tw-form').addEventListener('submit', (e) => e.preventDefault());

  const slides = block.querySelectorAll('.tw-hero');
  let cur = 0;
  setInterval(() => {
    slides[cur].classList.remove('on');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('on');
  }, 6000);
}