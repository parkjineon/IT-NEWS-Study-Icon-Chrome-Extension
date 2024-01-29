
const article = document.querySelector('article');

if (article) {
 
  const badge = document.createElement('p');
  badge.textContent = `졸려요 테스트 중`;

  const heading = article.querySelector('h1');
  const date = article.querySelector('time')?.parentNode;
  (date ?? heading).insertAdjacentElement('afterend', badge);
}