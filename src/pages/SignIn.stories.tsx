import toBeInTheDocument from '@testing-library/jest-dom'
import { Meta, StoryObj } from '@storybook/react';
import { SignIn } from './SignIn';
import { within, userEvent, waitFor} from "@storybook/testing-library";
import { expect } from '@storybook/jest';
import { rest } from 'msw';

export default {
    title: 'Components/SignIn',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions',(req,res,ctx) => {
                    return res(ctx.json({
                        message: 'login realizado!'
                    }))
                })
            ]
        }
    }

} as Meta

export const Default: StoryObj = {

    play: async ({ canvasElement }) => {

        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Type your e-mail'),'gusta@test.com');
        userEvent.type(canvas.getByPlaceholderText('*******'),'123');

        userEvent.click(canvas.getByRole('button'));

        await waitFor(() => {
            return expect(canvas.getByText('Login Realizado com sucesso!')).toBeInTheDocument()
        })
    }

}
