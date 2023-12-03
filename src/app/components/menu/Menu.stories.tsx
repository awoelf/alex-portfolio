import type { Meta, StoryObj } from '@storybook/react';
import Menu from './Menu';

const meta: Meta<typeof Menu> = {
    component: Menu,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
    args: {
        Primary: true,
    }
};