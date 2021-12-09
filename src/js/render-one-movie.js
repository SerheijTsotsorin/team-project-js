import refs from './refs';
import { closeEscape, closeMovieWindow, closeBackdrop } from './close-movie-card';

export function openMovieWindow({
  title,
  genres,
  poster_path,
  //   backdrop_path,
  overview,
  original_title,
  vote_average,
  vote_count,
  popularity,
}) {
  refs.movieDetailsContainer.innerHTML = '';
  refs.backdrop.classList.remove('visually-hidden');
  refs.body.classList.add('overflow-hidden');
  refs.aboutFilmWindow.addEventListener('click', closeBackdrop);
  refs.closeBtn.addEventListener('click', closeMovieWindow);
  refs.closeBtnMobile.addEventListener('click', closeMovieWindow);
  window.addEventListener('keydown', closeEscape);
  const genresSTR = genres.map(genre => genre.name).join(', ');

  const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  //   const backdropPath = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
  //   console.log(posterPath);
  //   console.log(backdropPath);

  const aboutMovieMarkup = `
        <div class="pop-up__container">

          <div class="pop-up__thumb">
                <picture>
                    <source srcset="${posterPath}" media="(min-width: 1024px)" width="396px" />
                    <source srcset="${posterPath}" media="(min-width: 768px)" width="264px" height="374px"/>
                    <source srcset="${posterPath}" media="(min-width: 320px)" width="240px" height="356px"/>
                    <img class="pop-up__poster" src="${posterPath}" alt="Movie poster" loading="lazy"/>
                </picture>
          </div>

          <div class="movie-details-container">

              <h1 class="pop-up__title">${title}</h1>

              <div class="movie-details">
                  <ul class="movie-details__keys">
                      <li class="vote-key detail">Vote / Votes</li>
                      <li class="popularity-key detail">Popularity</li>
                      <li class="title-key detail">Original Title
                      
                      </li>
                      <li class="genre-key">Genre</li>
                  </ul>
                  <ul class="movie-details__values">
                      <li class="vote-value detail"><span class="vote-value__accent">${vote_average}</span><span
                              class="vote-value__slash">/</span><span class="vote-value__last value">${vote_count}</span></li>
                      <li class="popularity-value detail value">${popularity}</li>
                      <li class="title-value detail value">${original_title}
                      
                      </li>
                      <li class="genre-value value">${genresSTR}</li>
                  </ul>
              </div>

              <div class="about">
                  <p class="about__title">about</p>
                  <p class="about__description">${overview}</p>
              </div>
              <ul class="pop-up-buttons">
                  <li class="pop-up-buttons__items">
                      <button class="pop-up-btn js-watched" type="button" data-watched>
                          add to watched
                      </button>
                  </li>
                  <li class="pop-up-buttons__items">
                      <button class="pop-up-btn js-queue" type="button" data-queue>
                          add to queue
                      </button>
                  </li>
              </ul>
          </div>
        </div>
        `;
  refs.movieDetailsContainer.innerHTML = aboutMovieMarkup;

  //   refs.closeBtn.addEventListener('click', closeMovieWindow);
  //   refs.closeBtnMobile.addEventListener('click', closeMovieWindow);
  //   window.addEventListener('keydown', closeEscape);
  //   closeMovieWindow();
  //   closeEscape();
}
