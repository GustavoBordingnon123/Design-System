import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react'

export interface HeadingProps {
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({size = 'medium', children, asChild }: HeadingProps){

    const Comp = asChild ? Slot : 'h2';

    return(
        <Comp 
            className={clsx(
                "text-gray-100 font-bold font-sans",
                {
                    'text-large': size == 'small',
                    'text-extraLarge': size == 'medium',
                    'text-biggest': size == 'large'
                }
            )}
            >
                {children}
            </Comp>
    )
}