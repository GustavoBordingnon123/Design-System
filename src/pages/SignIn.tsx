import axios from 'axios';
import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { TextInput } from "../Components/TextInput";
import { Text } from "../Components/Text";
import { Envelope, Lock } from "phosphor-react";
import Logo from "../logo";
import { FormEvent, useState } from "react";

export function SignIn(){

    const[isUserSignedIn,setUserSignedIn] = useState(false)

    async function handleSignIn(event: FormEvent){
        
        event.preventDefault()

        await axios.post('/sessions',{
            email: 'gusta@test.com',
            password: '1234'
        })

        setUserSignedIn(true)
    }

   return (
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>

        <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='large' classname='mt-2'>
            Ignite lab
        </Heading>

        <Text size='large' classname='text-gray-400 mt-1'>
            log in to access
        </Text>

        <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-4'>

            {isUserSignedIn && <Text>Login Realizado com sucesso!</Text>}

            <label htmlFor='email' className='flex flex-col gap-3'>
            <Text classname='font-semibold'>E-mail address</Text>
            <TextInput.Root>
                <TextInput.Icon>
                <Envelope />
                </TextInput.Icon>

                <TextInput.Input type="email" id='email' placeholder='Type your e-mail' />
            </TextInput.Root>
            </label>

            <label htmlFor='password' className='flex flex-col gap-3'>
            <Text classname='font-semibold'>Your password</Text>
            <TextInput.Root>
                <TextInput.Icon>
                <Lock />
                </TextInput.Icon>

                <TextInput.Input type="password" id="password" placeholder='*******' />
            </TextInput.Root>
            </label>

            <label htmlFor='remember' className='flex items-center gap-2'>
            <Checkbox id="remember" />
            <Text size='small' classname='text-gray-200 hover:cursor-pointer'>remember-me for 30 days</Text>
            </label>

            <Button type='submit' className='mt-4'>Join in the web-site</Button>

            <footer className='flex flex-col items-center gap-4 mt-2'>
            <Text asChild size='small'>
                <a href='' className='text-gray-400 underline hover:text-gray-200'>Forgot your password?</a>
            </Text>
            <Text asChild size='small'>
                <a href='' className='text-gray-400 underline hover:text-gray-200'>Dont have an acount? create now</a>
            </Text>
            </footer>

        </form>

        

        </header>

        
    </div>
   )
}