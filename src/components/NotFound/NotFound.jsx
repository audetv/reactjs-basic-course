import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Страница не существует!</h1>
      <Link to='/'>На главную</Link>
    </div>
  );
};

export { NotFound };
