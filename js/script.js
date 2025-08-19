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



// Панелька профиля с вкладками
document.addEventListener('DOMContentLoaded', function() {
    const toggleDiv = document.getElementById('profile-icon');
    const panel = document.getElementById('profile-icon-panel');
    const profileTabs = panel.querySelectorAll('.profile-tab');
    const profileTabContents = panel.querySelectorAll('.profile-tab-content');

    toggleDiv.addEventListener('click', function() {
        panel.classList.toggle('open');
    });

    // Переключение вкладок профиля
    profileTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Убираем активный класс со всех вкладок
            profileTabs.forEach(t => t.classList.remove('active'));
            profileTabContents.forEach(content => content.classList.remove('active'));
            
            // Добавляем активный класс к выбранной вкладке
            this.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });

    document.addEventListener('click', function(event) {
        if (!panel.contains(event.target) && !toggleDiv.contains(event.target)) {
            panel.classList.remove('open');
        }
    });
});

// Панелька уведомлений с вкладками
document.addEventListener('DOMContentLoaded', function() {
    const toggleDivN = document.getElementById('notification-icon');
    const panelN = document.getElementById('notification-icon-panel');
    const notificationTabs = panelN.querySelectorAll('.notification-tab');
    const notificationTabContents = panelN.querySelectorAll('.notification-tab-content');

    toggleDivN.addEventListener('click', function() {
        panelN.classList.toggle('open');
    });

    // Переключение вкладок уведомлений
    notificationTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Убираем активный класс со всех вкладок
            notificationTabs.forEach(t => t.classList.remove('active'));
            notificationTabContents.forEach(content => content.classList.remove('active'));
            
            // Добавляем активный класс к выбранной вкладке
            this.classList.add('active');
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });

    document.addEventListener('click', function(event) {
        if (!panelN.contains(event.target) && !toggleDivN.contains(event.target)) {
            panelN.classList.remove('open');
        }
    });
});
// Панелька поиска
document.addEventListener('DOMContentLoaded', function() {
    const toggleDivS = document.getElementById('search-button');
    const panelS = document.getElementById('search-button-panel');
    const overlay = document.getElementById('overlay');

    toggleDivS.addEventListener('click', function() {
        panelS.classList.toggle('open');
        overlay.classList.toggle("active");
    });

    document.addEventListener('click', function(event) {
        if (!panelS.contains(event.target) && !toggleDivS.contains(event.target)) {
            panelS.classList.remove('open');
        }
        if (!panelS.contains(event.target) && !toggleDivS.contains(event.target)) {
            overlay.classList.remove('active');
        }
    });
});









 





// Лепестки сакуры
function createSakura() {
    const container = document.querySelector(".sakura-container");
    if (!container) return;

    const petal = document.createElement("div");
    petal.classList.add("sakura");

    // Случайные параметры для естественного падения
    const randomLeft = Math.random() * window.innerWidth; // Стартовая позиция
    const randomDuration = 6 + Math.random() * 4; // Скорость падения (6-10 сек)
    const randomSway = (Math.random() - 0.5) * 100; // Качание (-50px до 50px)
    const randomRotate = (Math.random() - 0.5) * 360; // Вращение (-180° до 180°)
    const randomSize = 10 + Math.random() * 10; // Размер лепестка (10-20px)

    petal.style.left = `${randomLeft}px`;
    petal.style.animationDuration = `${randomDuration}s`;
    petal.style.width = `${randomSize}px`;
    petal.style.height = `${randomSize}px`;

    // Передаём параметры в CSS
    petal.style.setProperty("--sway", `${randomSway}px`);
    petal.style.setProperty("--rotate", `${randomRotate}deg`);

    container.appendChild(petal);

    // Удаляем лепесток после завершения анимации
    setTimeout(() => {
        petal.remove();
    }, randomDuration * 1000);
}

// Создаём лепестки каждые 200 мс
setInterval(createSakura, 200);

// Функциональность поиска
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchSubmit = document.getElementById('search-submit');
    const searchResults = document.getElementById('search-results');
    
    // Список аниме для поиска
    const animeList = [
        'Наруто', 'Атака титанов', 'Overlord', 'Клинок, рассекающий демонов',
        'Человек-бензопила', 'Хоримия', 'Ангел по соседству балует меня',
        'Величие в тени', 'Восхождение героя щита', 'Ванпанчмен',
        'О моём перерождении в слизь', 'Кагуя: в любви как на войне'
    ];
    
    function performSearch(query) {
        if (!query.trim()) {
            searchResults.innerHTML = '';
            return;
        }
        
        const filteredAnime = animeList.filter(anime => 
            anime.toLowerCase().includes(query.toLowerCase())
        );
        
        if (filteredAnime.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">Аниме не найдено</div>';
            return;
        }
        
        searchResults.innerHTML = filteredAnime.map(anime => 
            `<div class="search-result-item" onclick="selectAnime('${anime}')">${anime}</div>`
        ).join('');
    }
    
    // Поиск в реальном времени
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
    
    if (searchSubmit) {
        searchSubmit.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
    }
});

function selectAnime(animeName) {
    alert(`Выбрано аниме: ${animeName}`);
    // Здесь можно добавить логику перехода на страницу аниме
    document.getElementById('search-button-panel').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
}