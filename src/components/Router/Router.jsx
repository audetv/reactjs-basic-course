import { Switch, Route } from 'react-router-dom';
import { Layout } from '../Layout';
import { NotFound } from '../NotFound';
import { Profile } from '../Profile';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={Layout} />
      <Route exact path='/chat/:chatId'>
        <Layout />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export { Router };
