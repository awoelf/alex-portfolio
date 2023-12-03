import type { Meta, StoryObj } from '@storybook/react';
import Education, { EducationInterface } from './Education';

const meta: Meta<typeof Education> = {
    component: Education,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Education>;

const degree: EducationInterface = {
    school: 'University of North Texas',
    degree: 'Bachelor of Applied Arts and Sciences',
    dateStart: 'Aug 2021',
    dateEnd: 'May 2023',
    description: ['Data analysis and data structures', 'Consumer behavior and marketing experiences', 'Interpersonal communication', 'Workplace conflict resolution'],
    gpa: '3.78'
};

export const Primary: Story = {
    render: () => <Education {...degree} />
};