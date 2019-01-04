import React from 'react';
import { Route, Switch ,routerRedux, Redirect} from 'dva/router';
import App from './routes/app'
import dynamic from 'dva/dynamic'

const { ConnectedRouter } = routerRedux  // 用这个代替router可以在dva里面添加location属性

function RouterConfig({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })

  const routers =[
    {
      path: '/first',
      models: () => [import('./models/first')],
      component: () => import('./routes/first/First'),
    },
    {
      path: '/second',
      models: () => [import('./models/second')],
      component: () => import('./routes/second/Second'),
    },
  ]
  return (
    <ConnectedRouter history={history}>
    <App>
    <Switch>
        <Route path="/" exact render={ () => (<Redirect to='/first' />) } />
        {
          routers.map(({ path, ...dynamics },key) => {
            return <Route 
              key={key}
              path={path}
              component={
                dynamic({
                  app,
                  ...dynamics
                })
              }
            >
            </Route> 
          })
        }
        <Route component={error} />
      </Switch>
    </App>
    </ConnectedRouter>
  );
}

export default RouterConfig;
