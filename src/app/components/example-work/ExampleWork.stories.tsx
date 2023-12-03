import type { Meta, StoryObj } from '@storybook/react';
import ExampleWork from './ExampleWork';

const meta: Meta<typeof ExampleWork> = {
    component: ExampleWork,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ExampleWork>;

export const Primary: Story = {};