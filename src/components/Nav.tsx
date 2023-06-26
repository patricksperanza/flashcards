"use client"
import { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import Menu from "./Menu"
import Link from "next/link"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { LiteralUnion, ClientSafeProvider } from "next-auth/react"
import { BuiltInProviderType } from "next-auth/providers"

const Nav = () => {
  const { data: session } = useSession()
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null)

  console.log(session)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }

    setUpProviders()
  }, [])

  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <div className="flex flex-col items-center relative">
      <div className="flex justify-between items-center py-4 px-2 md:px-4 w-full l:w-3/4">
        <div className="w-[100px] flex justify-start">
          <FaBars
            className="cursor-pointer"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
        </div>
        <Link href="/">
          <h1 className="text-mdmd:text-xl font-semibold">
            Full Stack Flashcards
          </h1>
        </Link>
        <div className="w-[100px] flex justify-end">
          {session ? (
            <>
              <button
                className="border border-blue-500 px-5 py-1 rounded text-[10px] bg-blue-500 ease-in duration-100 active:bg-blue-600"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
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
                        signIn(provider.id)
                      }}
                      className="border border-blue-500 px-5 py-1 rounded text-[10px] hover:bg-blue-500 ease-in duration-100 active:bg-blue-600"
                    >
                      Sign in
                    </button>
                  )
                })
              ) : (
                <div className="border border-blue-500 px-5 py-1 rounded text-[10px] hover:bg-blue-500 ease-in duration-100 active:bg-blue-600">
                  ...
                </div>
              )}
            </>
          )}
        </div>

        {toggleDropdown && <Menu setToggleDropdown={setToggleDropdown} />}
      </div>

      <div className="border-b-2 border-sky-500 w-3/4"></div>
    </div>
  )
}

export default Nav
