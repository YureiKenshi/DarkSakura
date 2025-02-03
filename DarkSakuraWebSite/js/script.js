// Скролл аниме контейнера
document.querySelectorAll('.big-anime-container').forEach(wrapper => {
  const container = wrapper.querySelector('.anime-container');
  const btnLeft = wrapper.querySelector('.scroll-button-left');
  const btnRight = wrapper.querySelector('.scroll-button-right');
  
  const scrollAmount = 200;

  btnLeft.addEventListener('click', () => {
      container.scrollLeft -= scrollAmount;
  });

  btnRight.addEventListener('click', () => {
      container.scrollLeft += scrollAmount;
  });

  // Перетаскивание мышкой
  let isDragging = false;
  let startX, startScrollLeft;

  container.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startScrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing';
      e.preventDefault();
  });

  container.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      container.scrollLeft = startScrollLeft - deltaX;
  });

  const stopDragging = () => {
      isDragging = false;
      container.style.cursor = 'grab';
  };

  container.addEventListener('mouseup', stopDragging);
  container.addEventListener('mouseleave', stopDragging);
});



// Панелька профиля
document.addEventListener('DOMContentLoaded', function() {
    const toggleDiv = document.getElementById('profile-icon');
    const panel = document.getElementById('profile-icon-panel');

    toggleDiv.addEventListener('click', function() {
        panel.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!panel.contains(event.target) && !toggleDiv.contains(event.target)) {
            panel.classList.remove('open');
        }
    });
});
// Панелька уведомлений
document.addEventListener('DOMContentLoaded', function() {
    const toggleDivN = document.getElementById('notification-icon');
    const panelN = document.getElementById('notification-icon-panel');

    toggleDivN.addEventListener('click', function() {
        panelN.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!panelN.contains(event.target) && !toggleDivN.contains(event.target)) {
            panelN.classList.remove('open');
        }
    });
});










 