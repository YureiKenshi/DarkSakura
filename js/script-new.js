// Система частиц
class ParticleSystem {
    constructor() {
        this.particlesContainer = document.getElementById('particles');
        this.particles = [];
        this.maxParticles = 50;
        
        this.init();
    }
    
    init() {
        this.createParticles();
        this.animate();
    }
    
    createParticles() {
        for (let i = 0; i < this.maxParticles; i++) {
            this.createParticle();
        }
    }
    
    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Случайные параметры
        const size = Math.random() * 3 + 2;
        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${startX}px;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            opacity: ${Math.random() * 0.5 + 0.3};
        `;
        
        this.particlesContainer.appendChild(particle);
        this.particles.push(particle);
        
        // Удаляем частицу после анимации
        setTimeout(() => {
            if (this.particlesContainer.contains(particle)) {
                this.particlesContainer.removeChild(particle);
                this.particles = this.particles.filter(p => p !== particle);
                this.createParticle(); // Создаем новую частицу
            }
        }, (duration + delay) * 1000);
    }
    
    animate() {
        // Дополнительная анимация для частиц
        this.particles.forEach(particle => {
            const currentLeft = parseFloat(particle.style.left);
            const newLeft = currentLeft + (Math.random() - 0.5) * 2;
            particle.style.left = newLeft + 'px';
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Система управления темой
class ThemeManager {
    constructor() {
        this.themeSwitch = document.getElementById('theme-switch');
        this.themeIcon = this.themeSwitch.querySelector('.theme-icon');
        this.darkThemeToggle = document.getElementById('dark-theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        
        this.init();
    }
    
    init() {
        this.applyTheme(this.currentTheme);
        this.themeSwitch.addEventListener('click', () => this.toggleTheme());
        this.darkThemeToggle.addEventListener('change', (e) => {
            this.toggleTheme();
        });
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        
        // Добавляем эффект перехода
        document.body.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    }
    
    applyTheme(theme) {
        const body = document.body;
        const isDark = theme === 'dark';
        
        if (isDark) {
            body.classList.remove('light-theme');
            this.themeIcon.textContent = '🌙';
            this.darkThemeToggle.checked = true;
        } else {
            body.classList.add('light-theme');
            this.themeIcon.textContent = '☀️';
            this.darkThemeToggle.checked = false;
        }
    }
}

// Музыкальный плеер
class MusicPlayer {
    constructor() {
        this.playBtn = document.getElementById('play-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.progressFill = document.querySelector('.progress-fill');
        this.trackTitle = document.querySelector('.music-track');
        
        this.isPlaying = false;
        this.currentTrack = 0;
        this.progress = 0;
        
        this.playlist = [
            { title: 'Sakura - Anime OST', artist: 'Various Artists' },
            { title: 'Attack on Titan Theme', artist: 'Hiroyuki Sawano' },
            { title: 'Naruto Main Theme', artist: 'Toshio Masuda' },
            { title: 'Demon Slayer Opening', artist: 'LiSA' },
            { title: 'One Punch Man Theme', artist: 'JAM Project' }
        ];
        
        this.init();
    }
    
    init() {
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.previousTrack());
        this.nextBtn.addEventListener('click', () => this.nextTrack());
        
        this.updateTrackInfo();
        this.startProgressSimulation();
    }
    
    togglePlay() {
        this.isPlaying = !this.isPlaying;
        this.playBtn.textContent = this.isPlaying ? '⏸' : '▶';
        
        if (this.isPlaying) {
            this.playBtn.classList.add('playing');
            this.addPulseEffect();
        } else {
            this.playBtn.classList.remove('playing');
            this.removePulseEffect();
        }
    }
    
    addPulseEffect() {
        this.playBtn.style.animation = 'pulse 1s infinite';
    }
    
    removePulseEffect() {
        this.playBtn.style.animation = '';
    }
    
    previousTrack() {
        this.currentTrack = (this.currentTrack - 1 + this.playlist.length) % this.playlist.length;
        this.updateTrackInfo();
        this.progress = 0;
        this.updateProgress();
        this.addTrackChangeEffect();
    }
    
    nextTrack() {
        this.currentTrack = (this.currentTrack + 1) % this.playlist.length;
        this.updateTrackInfo();
        this.progress = 0;
        this.updateProgress();
        this.addTrackChangeEffect();
    }
    
    addTrackChangeEffect() {
        this.trackTitle.style.animation = 'typing 2s ease';
        setTimeout(() => {
            this.trackTitle.style.animation = '';
        }, 2000);
    }
    
    updateTrackInfo() {
        const track = this.playlist[this.currentTrack];
        this.trackTitle.textContent = track.title;
    }
    
    startProgressSimulation() {
        setInterval(() => {
            if (this.isPlaying) {
                this.progress += 0.5;
                if (this.progress >= 100) {
                    this.progress = 0;
                    this.nextTrack();
                }
                this.updateProgress();
            }
        }, 1000);
    }
    
    updateProgress() {
        this.progressFill.style.width = this.progress + '%';
    }
}

// Система избранного
class FavoritesManager {
    constructor() {
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        this.favoritesCount = document.querySelector('.favorites-count');
        this.favoritesLink = document.querySelector('.favorites-link');
        
        this.init();
    }
    
    init() {
        this.updateCount();
        this.favoritesLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.showFavorites();
        });
    }
    
    addToFavorites(anime) {
        if (!this.favorites.find(fav => fav.id === anime.id)) {
            this.favorites.push(anime);
            this.saveFavorites();
            this.updateCount();
            this.showNotification(`"${anime.title}" добавлено в избранное!`);
            this.addFavoritesEffect();
        }
    }
    
    addFavoritesEffect() {
        this.favoritesCount.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            this.favoritesCount.style.animation = '';
        }, 500);
    }
    
    removeFromFavorites(animeId) {
        this.favorites = this.favorites.filter(fav => fav.id !== animeId);
        this.saveFavorites();
        this.updateCount();
    }
    
    saveFavorites() {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
    
    updateCount() {
        this.favoritesCount.textContent = this.favorites.length;
    }
    
    showFavorites() {
        // Здесь можно добавить модальное окно со списком избранного
        console.log('Избранное:', this.favorites);
        this.showNotification(`У вас ${this.favorites.length} аниме в избранном`);
    }
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification-popup';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, rgb(98, 61, 95), rgb(147, 81, 144));
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Модальное окно для быстрого просмотра
class QuickViewModal {
    constructor() {
        this.modal = document.getElementById('quick-view-modal');
        this.closeBtn = this.modal.querySelector('.close');
        this.favoritesManager = new FavoritesManager();
        
        this.animeData = {
            'naruto': {
                title: 'Наруто',
                rating: '8.7',
                episodes: '220 эпизодов',
                year: '2002',
                genre: 'Экшен, Приключения',
                description: 'История о юном ниндзя Наруто Узумаки, который стремится стать Хокаге - лидером своей деревни.',
                poster: './image/anime/naruto.jpg'
            },
            'atack-on-titan': {
                title: 'Атака титанов',
                rating: '9.0',
                episodes: '25 эпизодов',
                year: '2013',
                genre: 'Экшен, Драма',
                description: 'Человечество живёт внутри городов, окружённых огромными стенами из-за таинственных гигантов.',
                poster: './image/anime/atack-on-titan.jpg'
            },
            'overlord': {
                title: 'Оверлорд',
                rating: '8.4',
                episodes: '13 эпизодов',
                year: '2015',
                genre: 'Фэнтези, Приключения',
                description: 'История о Момонге, игроке MMORPG, который оказался запертым в игре в момент её закрытия.',
                poster: './image/anime/overlord.jpg'
            },
            'the-blade-that-cut-the-demons': {
                title: 'Клинок, рассекающий демонов',
                rating: '8.9',
                episodes: '26 эпизодов',
                year: '2019',
                genre: 'Экшен, Фэнтези',
                description: 'История о Танджиро Камадо, чья семья была убита демонами, а сестра превращена в демона.',
                poster: './image/anime/the-blade-that-cut-the-demons.jpg'
            },
            'chainsaw-man': {
                title: 'Человек-бензопила',
                rating: '8.7',
                episodes: '12 эпизодов',
                year: '2022',
                genre: 'Экшен, Ужасы',
                description: 'История о Дэндзи, который становится Человеком-бензопилой, чтобы расплатиться с долгами.',
                poster: './image/anime/chainsaw-man.jpg'
            },
            'horimiya': {
                title: 'Хоримия',
                rating: '8.3',
                episodes: '13 эпизодов',
                year: '2021',
                genre: 'Романтика, Комедия',
                description: 'История о двух школьниках, которые скрывают свои истинные личности от одноклассников.',
                poster: './image/anime/horimiya.jpg'
            }
        };
        
        this.init();
    }
    
    init() {
        this.closeBtn.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });
        
        // Добавляем обработчики для карточек аниме
        document.querySelectorAll('[data-anime]').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const animeId = card.getAttribute('data-anime');
                this.open(animeId);
            });
        });
        
        // Обработчик для кнопки "В избранное" в модальном окне
        this.modal.querySelector('.favorite-btn').addEventListener('click', () => {
            const currentAnime = this.modal.getAttribute('data-current-anime');
            if (currentAnime && this.animeData[currentAnime]) {
                this.favoritesManager.addToFavorites({
                    id: currentAnime,
                    title: this.animeData[currentAnime].title
                });
            }
        });
    }
    
    open(animeId) {
        const anime = this.animeData[animeId];
        if (!anime) return;
        
        this.modal.setAttribute('data-current-anime', animeId);
        
        // Заполняем данные
        document.getElementById('modal-poster').src = anime.poster;
        document.getElementById('modal-rating').textContent = anime.rating;
        document.getElementById('modal-title').textContent = anime.title;
        document.getElementById('modal-episodes').textContent = anime.episodes;
        document.getElementById('modal-year').textContent = anime.year;
        document.getElementById('modal-genre').textContent = anime.genre;
        document.getElementById('modal-description').textContent = anime.description;
        
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Добавляем эффект появления
        this.modal.querySelector('.modal-content').style.animation = 'modalSlideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }
    
    close() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Система уведомлений
class NotificationSystem {
    constructor() {
        this.notifications = [];
        this.init();
    }
    
    init() {
        // Симуляция новых уведомлений
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% шанс нового уведомления
                this.addNotification();
            }
        }, 30000); // Каждые 30 секунд
    }
    
    addNotification() {
        const notifications = [
            { title: 'Новая серия', desc: 'Вышла новая серия "Наруто"', icon: '📺' },
            { title: 'Рекомендация', desc: 'Вам может понравиться "Человек-бензопила"', icon: '⭐' },
            { title: 'Обновление', desc: 'Добавлены новые аниме в каталог', icon: '🆕' }
        ];
        
        const notification = notifications[Math.floor(Math.random() * notifications.length)];
        this.showNotification(notification);
    }
    
    showNotification(notification) {
        const notificationElement = document.createElement('div');
        notificationElement.className = 'notification-popup';
        notificationElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 20px;">${notification.icon}</span>
                <div>
                    <div style="font-weight: bold; margin-bottom: 2px;">${notification.title}</div>
                    <div style="font-size: 12px; opacity: 0.8;">${notification.desc}</div>
                </div>
            </div>
        `;
        
        notificationElement.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, rgb(98, 61, 95), rgb(147, 81, 144));
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notificationElement);
        
        setTimeout(() => {
            notificationElement.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (document.body.contains(notificationElement)) {
                    document.body.removeChild(notificationElement);
                }
            }, 300);
        }, 5000);
    }
}

// Анимации
const animations = `
@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}
`;

// Добавляем стили анимаций
const styleSheet = document.createElement('style');
styleSheet.textContent = animations;
document.head.appendChild(styleSheet);

// Инициализация всех систем
document.addEventListener('DOMContentLoaded', function() {
    new ParticleSystem();
    new ThemeManager();
    new MusicPlayer();
    new FavoritesManager();
    new QuickViewModal();
    new NotificationSystem();
    
    // Добавляем эффект параллакса для фона
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const background = document.querySelector('.background-image');
        background.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
    
    // Добавляем эффект свечения для карточек
    document.querySelectorAll('.anime-container > div').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(247, 81, 236, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Добавляем эффект печатающегося текста для заголовков
    const titles = document.querySelectorAll('.anime-list-all h1');
    titles.forEach((title, index) => {
        setTimeout(() => {
            title.classList.add('typing-effect');
        }, index * 500);
    });
    
    // Добавляем неоновое свечение для логотипа
    const logo = document.querySelector('.logo a');
    logo.classList.add('neon-glow');
});