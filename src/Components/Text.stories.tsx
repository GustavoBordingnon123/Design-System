import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';


export default {
    title: 'Components/Text',
    component: Text,
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

} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps>  = {
    args: {
        size: 'small'
    }
}

export const Large: StoryObj<TextProps>  = {
    args: {
        size: 'large'
    }
}

export const CustomComponent: StoryObj<TextProps>  = {
    args: {
        asChild: true,
        children: (
            <p>Text with  p tag</p>
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