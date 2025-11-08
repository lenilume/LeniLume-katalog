
const pages = ["page_001.png", "page_002.png", "page_003.png", "page_004.png", "page_005.png", "page_006.png", "page_007.png", "page_008.png", "page_009.png"];
let current = 0;

function loadPages(idx) {
  const left = document.getElementById('left-page');
  const right = document.getElementById('right-page');
  const indicator = document.getElementById('page-indicator');

  if (pages.length === 0) return;
  const leftIdx = idx;
  const rightIdx = idx + 1;

  left.innerHTML = '';
  right.innerHTML = '';

  if (leftIdx < pages.length) {
    const img = document.createElement('img');
    img.src = 'assets/' + pages[leftIdx];
    left.appendChild(img);
  } else {
    left.innerHTML = '';
  }

  if (rightIdx < pages.length) {
    const img2 = document.createElement('img');
    img2.src = 'assets/' + pages[rightIdx];
    right.appendChild(img2);
  } else {
    right.innerHTML = '';
  }

  indicator.textContent = `Stranica ${$leftIdx+1$} - ${$Math.min(rightIdx+1, pages.length)$} / ${$pages.length$}`;
}

document.getElementById('prev').addEventListener('click', ()=>{
  if (pages.length === 0) return;
  current = Math.max(0, current-2);
  loadPages(current);
});

document.getElementById('next').addEventListener('click', ()=>{
  if (pages.length === 0) return;
  if (current + 2 < pages.length) current += 2;
  loadPages(current);
});

document.addEventListener('keydown', (e)=>{
  if (e.key === 'ArrowRight') document.getElementById('next').click();
  if (e.key === 'ArrowLeft') document.getElementById('prev').click();
});

if (pages.length > 0) loadPages(0);
