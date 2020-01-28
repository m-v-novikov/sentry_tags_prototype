import React, {useEffect} from "react";
import * as Sentry from '@sentry/browser';

const Users = () => {
  // useEffect(() => {
  //   Sentry.configureScope(scope => {
  //     scope.setTag('own-users', 'users');
  //   });
  // }, [])

  return (
    <div>
      <h1>Users page</h1>
      <button className="users" onClick={() => [{a: 1}].map(item => console.log(item.b[`users-${Math.random()}`]))}>Break the Users</button>
    </div>
  )
};

export default Users;
