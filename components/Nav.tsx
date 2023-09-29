'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { Provider, useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

interface AuthProvider {
    id: string;
    name: string;
}

const Nav = () => {

const isUserLoggedIn =  true;
const [providers, setProviders] = useState(null);

useEffect(()=>{
    const setProviders = async () => {
        const response = await getProviders();
        setProviders(response);
    };

    setProviders();
}, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.svg' alt="Prompt builder" width={30} height={30} className='object-contain'/>
            <p className='logo_text'>PromptBuilder</p>
        </Link>
        {/* Mobile applications */}
        <div className='sm:flex hidden'>
            {isUserLoggedIn ?
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create-prompt" className='black_btn'>Create Post</Link>
                    <button className='outline_btn' type='button' onClick={() => signOut()} >
                        SignOut
                    </button>
                    <Link href="/profile" className=''>
                        <Image src='assets/images/logo.svg' 
                            width={36}
                            height={36}
                            className='rounded-full'
                            alt='profile picture of the user.'
                        />
                    </Link>
                </div>
                :
                <>
                    {
                        providers && Object.values(providers).map(
                            (provider)=> {
                                <button type='button'
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className='black_btn'
                                >
                                    SignIn with {provider.name}
                                </button>
                            }
                        )
                    }
                </>
            }
        </div>
    </nav>
  )
}

export default Nav