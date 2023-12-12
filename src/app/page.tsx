'use client';

import Head from 'next/head';
import * as React from 'react';

import Admin from '@/app/admin/page';
import SideBar from '@/app/components/drawer';
import DashBoard from '@/app/dashboard/page';
import Forme from '@/app/forme/page';
import Messages from '@/app/messages/page';
import More from '@/app/more/page';
import Services from '@/app/services/page';
import UsersPage from '@/app/users/page';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [active, setactive] = React.useState(0);
  const changeActive = (index) => {
    setactive(index);
  };
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <div
        style={{
          background: 'linear-gradient(to right,#0e0e0f, #071955)',
          paddingBottom: 100,
        }}
      >
        <SideBar onclick={changeActive} active={active} />
        <div style={{ marginTop: 60, marginLeft: 60 }}>
          {active == 0 ? (
            <DashBoard></DashBoard>
          ) : active == 1 ? (
            <UsersPage></UsersPage>
          ) : active == 2 ? (
            <Admin></Admin>
          ) : active == 3 ? (
            <Forme></Forme>
          ) : active == 4 ? (
            <Messages></Messages>
          ) : active == 5 ? (
            <Services></Services>
          ) : (
            <More></More>
          )}
        </div>
      </div>
    </main>
  );
}
