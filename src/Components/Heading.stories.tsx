import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';


export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum.',
        size: 'small'
    },
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: {
                type: 'inline-radio'
            }
        }
    }

} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps>  = {
    args: {
        size: 'small'
    }
}

export const Large: StoryObj<HeadingProps>  = {
    args: {
        size: 'large'
    }
}

export const CustomComponent: StoryObj<HeadingProps>  = {
    args: {
        asChild: true,
        children: (
            <h1>heading with h1</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    },
}