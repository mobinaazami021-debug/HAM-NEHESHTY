// script.js — موبایل منو و افکت‌های ساده
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle && navToggle.addEventListener('click', function(){
    if(navLinks.style.display === 'flex') navLinks.style.display = 'none';
    else navLinks.style.display = 'flex';
  });

  // افکت ورود آرام عناصر
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('inview');
    });
  }, {threshold:0.12});
  document.querySelectorAll('.feature, .card, .interactive').forEach(el=>obs.observe(el));
});