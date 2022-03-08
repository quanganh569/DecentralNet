import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StakingPage from './pages/StakingPage';
import MainLayout from '~components/layouts/MainLayout';
import FaucetPage from '~pages/FaucetPage';
import WrapNearPage from '~pages/WrapNearPage';
import Header from '~pages/Header';
import ContentLayout from '~pages/ContentLayout';

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-400 to-purple-700">
      <Header />

      <ContentLayout />
    </div>
    // <Router>
    //     <MainLayout>
    //         <div className="relative pb-24 overflow-x-hidden xs:flex xs:flex-col md:flex md:flex-col">
    //             <Switch>
    //                 <Route path="/" exact component={AutoHeight(StakingPage)} />
    //                 <Route path="/staking" component={AutoHeight(StakingPage)} />
    //                 <Route path="/faucet" component={AutoHeight(FaucetPage)} />
    //                 <Route path="/wrap-near" component={AutoHeight(WrapNearPage)} />
    //             </Switch>
    //         </div>
    //     </MainLayout>
    // </Router>
  );
}

// decorate any components with this HOC to display them as vertical-align middle
// use individual fn is needed since `h-4/5` is not a appropriate style rule for
// any components
// function AutoHeight(Comp: any) {
//   return (props: any) => {
//     return (
//       <div className="xs:flex xs:flex-col md:flex md:flex-col justify-center h-4/5 lg:mt-12 relative xs:mt-8">
//         <Comp {...props} />
//       </div>
//     );
//   };
// }

export default App;
