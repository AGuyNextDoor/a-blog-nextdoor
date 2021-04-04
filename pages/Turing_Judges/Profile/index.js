import Link from 'next/link';
import React from "react";
import Header from "../../../components/header"
import { useSession } from 'next-auth/client';

const ProfilePage = () => {
  const [session, loading] = useSession();

  return (
    <div className="margin_sidebar">
      <h2>
        Hello
      </h2>
      <Header></Header>
      {session && (
        <>
        <h3>
          {Object.keys(session.user).map(val => <p>{val}</p>)}
        </h3>
        <p>
          {session.user.email}
        </p>
        </>
      )
      }
    </div>
  );
};

export default ProfilePage;