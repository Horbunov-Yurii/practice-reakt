export const Event = ({ games }) => {
  return (
    <>
      {games.map(
        ({ id, images, title, genre, developer, year, platform, rating }) => (
          <li key={id}>
            <img src={images} alt={title} width="300" />
            <h3>Назва {title}</h3>
            <p>Жанр {genre}</p>
            <p>Розбобник {developer}</p>
            <time>Рік {year}</time>
            <p>Платформа {platform}</p>
            <p>Рейтинг {rating}</p>
          </li>
        ),
      )}
    </>
  );
};
