import React from 'react';
import { FaHome, FaSearch, FaPlus, FaCalendarAlt } from 'react-icons/fa';
import './App.css';

const newMovies = [
  { title: 'The Mother', img: 'https://image.tmdb.org/t/p/w500/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg' },
  { title: 'Blood & Gold', img: 'https://image.tmdb.org/t/p/w500/6yr8c6JjSxQ6nKUg4BMVFKUMlQ8.jpg' },
  { title: 'F9', img: 'https://image.tmdb.org/t/p/w500/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg' },
  { title: 'Perfection', img: 'https://image.tmdb.org/t/p/w500/4U7hpTK0XTQBKT5M6tyDsqbJm7c.jpg' },
  { title: 'Extraction', img: 'https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg' },
  { title: 'Jawan', img: 'https://image.tmdb.org/t/p/w500/rl6U5ZQkpU6F2acK1b5G5FzUz6A.jpg' },
  { title: 'Transformers', img: 'https://image.tmdb.org/t/p/w500/6oH378KUfCEitzJkm07r97L0RsZ.jpg' },
  { title: 'IO', img: 'https://image.tmdb.org/t/p/w500/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg' },
];
const popularMovies = [
  { title: 'Pathaan', img: 'https://image.tmdb.org/t/p/w500/6nU6zJbSgVwPlQkJwQp0h8l4hK6.jpg' },
  { title: 'Echoes', img: 'https://image.tmdb.org/t/p/w500/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg' },
  { title: 'Peaky Blinders', img: 'https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg' },
  { title: 'Beast', img: 'https://image.tmdb.org/t/p/w500/wE0I6efAW4WE0XKkfzXz5E5GkHh.jpg' },
  { title: '83', img: 'https://image.tmdb.org/t/p/w500/1t0kA1t9Qd1Z4Vfqaki3P6KyHRc.jpg' },
  { title: 'Gray Man', img: 'https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg' },
  { title: 'Money Heist', img: 'https://image.tmdb.org/t/p/w500/moZgkT7t5FQFZ5j5YjZLwNG0Ax7.jpg' },
  { title: 'Vikram', img: 'https://image.tmdb.org/t/p/w500/1m3WgLaD1KxwFZz0R6Vtu3kHni.jpg' },
];

function App() {
  return (
    <div className="main-layout soft-bg">
      {/* 좌측 세로 네비게이션 */}
      <aside className="side-nav soft-nav">
        <img src="/MoodFlix (Logo).png" alt="MoodFLIX Logo" className="nav-logo-img" />
        <nav className="icon-nav">
          <FaHome className="nav-icon" />
          <FaSearch className="nav-icon" />
          <FaPlus className="nav-icon" />
          <FaCalendarAlt className="nav-icon" />
        </nav>
      </aside>
      {/* 우측 메인 컨텐츠 */}
      <main className="main-content soft-main">
        {/* 배너 */}
        <section className="banner-area soft-banner">
          <img className="banner-img" src="https://www.themoviedb.org/t/p/original/2xjA2dF74r6nG3cF6Gk5QhQ2F3S.jpg" alt="Money Heist" />
          <div className="banner-overlay soft-banner-overlay" />
          <div className="banner-texts">
            <h1 className="banner-title soft-banner-title">MONEY <span className="banner-title-red">HEIST</span></h1>
            <div className="banner-sub">PART 4</div>
            <button className="trailer-btn2 soft-btn">예고편 보기</button>
          </div>
        </section>
        {/* 이번주 신작 */}
        <section className="movie-section">
          <h2 className="movie-section-title">이번주 신작</h2>
          <div className="movie-row">
            {newMovies.map((m) => (
              <div className="movie-card3 soft-card" key={m.title}>
                <img src={m.img} alt={m.title} />
                <div className="movie-card-title">{m.title}</div>
              </div>
            ))}
          </div>
        </section>
        {/* 인기작 */}
        <section className="movie-section">
          <h2 className="movie-section-title">인기작</h2>
          <div className="movie-row">
            {popularMovies.map((m) => (
              <div className="movie-card3 soft-card" key={m.title}>
                <img src={m.img} alt={m.title} />
                <div className="movie-card-title">{m.title}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
