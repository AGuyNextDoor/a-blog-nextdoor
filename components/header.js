import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client';

const Header = () => {
  const [session, loading] = useSession();

  return (
    <header>

        <>
          {!session && (
            <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signin();
              }}
            >
              <div className="acc_button acc_text text-center cursor custom_button button-form-font navbar_shadow mx-2 p-2">Sign in</div>
            </a>
          )}
          {session && (
            <><div className="dropdown">
                <a 
                    className="" 
                    type="button" 
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true"
                    aria-expanded="false">
                    <img
                      style={{ backgroundImage: `url(${session.user.image})` }}
                      className="avatar"
                      />
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div className="dropdown-item">
                    <Link href="/Turing_Judges/Profile">👉 Profile</Link>
                  </div>
                  <div className="dropdown-item">
                      <Link
                        href="/api/auth/signout"
                        onClick={(e) => {
                          e.preventDefault();
                          signout();
                        }}
                        >
                        🚪 Sign out
                      </Link>
                        </div>
                </div>
            </div>
            </>
          )}
        </>

      <style jsx>{`
        header {
          margin-bottom: 0px;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 42rem;
          margin: 0 auto;
          padding: 0.2rem 1.25rem;
        }
        .logo {
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 600;
        }
        .avatar {
          border-radius: 1rem;
          float: left;
          height: 4rem;
          width: 6.67rem;
          background-color: white;
          background-size: cover;
          border: 2px solid #ddd;
        }
        .signInButton,
        .signOutButton {
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem 1rem;
        }
        .signInButton {
          background-color: #1eb1fc;
        }
        .signInButton:hover {
          background-color: #1b9fe2;
        }
        .signOutButton {
          background-color: #333;
        }
        .signOutButton:hover {
          background-color: #555;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: -70%;
          z-index: 1000;
          display: none;
          float: left;
          min-width: 10rem;
          padding: .5rem 0;
          margin: .125rem 0 0;
          font-size: 1rem;
          color: #212529;
          text-align: left;
          list-style: none;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid rgba(0,0,0,.15);
          -moz-border-radius: .25rem;
          border-radius: .25rem;
        }
        .show>.dropdown-menu {
          display: block;
          position: absolute;
        }
        @media (max-width: 768px) {
          .dropdown-menu {
            position: absolute;
            top: 100%;
            left: -15%;
            z-index: 1000;
            display: none;
            float: left;
            min-width: 10rem;
            padding: .5rem 0;
            margin: .125rem 0 0;
            font-size: 1rem;
            color: #212529;
            text-align: left;
            list-style: none;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid rgba(0,0,0,.15);
            -moz-border-radius: .25rem;
            border-radius: .25rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
