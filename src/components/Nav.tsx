"use client";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { LiteralUnion, ClientSafeProvider } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

const Nav = () => {
  const { data: session } = useSession();
  const [toggleMenuDropdown, setToggleMenuDropdown] = useState(false);
  const [toggleLogoutDropdown, setToggleLogoutDropdown] = useState(false);
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  // Get the Providers from Next Auth
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <div className="l:w-3/4 flex w-full items-center justify-between px-2 py-4 md:px-4">
        <div className="flex w-[100px] justify-start">
          <FaBars
            className="cursor-pointer"
            onClick={() => setToggleMenuDropdown((prev) => !prev)}
          />
        </div>
        <Link href="/">
          <h1 className="text-mdmd:text-xl font-semibold">
            Full Stack Flashcards
          </h1>
        </Link>
        <div className="flex w-[100px] justify-end">
          {session ? (
            <>
              {session.user?.image !== null &&
                session.user?.image !== undefined && (
                  <div className="relative">
                    <Image
                      src={session?.user?.image}
                      alt="user image"
                      width={28}
                      height={28}
                      className="cursor-pointer rounded-full"
                      onClick={() => setToggleLogoutDropdown((prev) => !prev)}
                    />
                    {toggleLogoutDropdown && (
                      <button
                        className="absolute right-1 top-8 w-20 cursor-pointer rounded border bg-slate-800 px-4 py-2 text-[10px] hover:bg-slate-900"
                        onClick={() => signOut()}
                      >
                        Sign Out
                      </button>
                    )}
                  </div>
                )}
            </>
          ) : (
            <>
              {providers ? (
                Object.values(providers).map((provider) => {
                  return (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                      className="rounded border border-blue-500 bg-blue-500 px-5 py-1 text-[10px] duration-100 ease-in active:bg-blue-600"
                    >
                      Sign in
                    </button>
                  );
                })
              ) : (
                <div className="rounded border border-blue-500 px-5 py-1 text-[10px] duration-100 ease-in hover:bg-blue-500 active:bg-blue-600">
                  ...
                </div>
              )}
            </>
          )}
        </div>

        {toggleMenuDropdown && (
          <Menu setToggleMenuDropdown={setToggleMenuDropdown} />
        )}
      </div>

      <div className="w-3/4 border-b-2 border-sky-500"></div>
    </div>
  );
};

export default Nav;
