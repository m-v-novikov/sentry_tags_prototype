import React, {useEffect} from "react";
import * as Sentry from '@sentry/browser';

const User = () => {
  let asd;
  // useEffect(() => {
  //   Sentry.configureScope(scope => {
  //     scope.setTag('own-user', 'user');
  //   });
  // }, []);

  return (
    <div>
      <h1>User page</h1>
      <button className="user" onClick={() => asd.asfd/*[{a: 1}].map(item => console.log(item.b[`user-${Math.random()}`]))*/}>Break the User</button>
    </div>
  )
};

export default User;
