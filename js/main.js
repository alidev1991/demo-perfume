/* ─────────────────────────────────────────
   REZVAN — main.js
   ───────────────────────────────────────── */

/* ── ناوبار: blur هنگام اسکرول ── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });


/* ── فیلتر دسته‌بندی محصولات ── */
const filterTabs  = document.querySelectorAll('.filter-tab');
const productCards = document.querySelectorAll('.product-card');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const filter = tab.dataset.filter;

    productCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
    });
  });
});


/* ── کلیک روی کارت دسته‌بندی → فیلتر محصولات ── */
const collectionCards = document.querySelectorAll('.collection-card');

collectionCards.forEach(card => {
  const selectCollection = () => {
    const filter = card.dataset.filter;
    const matchingTab = document.querySelector(`.filter-tab[data-filter="${filter}"]`);

    if (matchingTab) {
      matchingTab.click();
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
  };

  card.addEventListener('click', selectCollection);
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectCollection();
    }
  });
});


/* ── سؤالات پرتکرار: فقط یک پاسخ باز ── */
const faqItems = document.querySelectorAll('.faq__item');

const closeFaqItem = item => {
  const button = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');

  item.classList.remove('is-open');
  button.setAttribute('aria-expanded', 'false');
  answer.setAttribute('aria-hidden', 'true');
};

faqItems.forEach(item => {
  const button = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    faqItems.forEach(otherItem => {
      if (otherItem !== item) closeFaqItem(otherItem);
    });

    if (isOpen) {
      closeFaqItem(item);
      return;
    }

    item.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
    answer.setAttribute('aria-hidden', 'false');
  });
});
