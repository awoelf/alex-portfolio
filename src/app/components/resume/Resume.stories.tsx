import type { Meta, StoryObj } from '@storybook/react';
import Resume from './Resume';

const meta: Meta<typeof Resume> = {
    component: Resume,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Resume>;

export const Primary: Story = {};