import type { Meta, StoryObj } from '@storybook/react';
import ExampleWork, { ExampleWorkInterface } from './ExampleWork';
import { SiTypescript, SiCypress, SiNetlify, SiNextdotjs } from '@icons-pack/react-simple-icons';

const meta: Meta<typeof ExampleWork> = {
    component: ExampleWork,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof ExampleWork>;

const example: ExampleWorkInterface = {
    image: '/static/citation-maker.png',
    title: 'Citation Maker',
    github: 'https://github.com/awoelf/citation-maker',
    url: 'https://citation-maker.netlify.app/',
    dateStart: 'Aug 2023',
    dateEnd: 'Nov 2023',
    description: 'A citation generator website that simplifies the citation-making process. Features a light and dark theme, local storage states, and editing and copying citations.',
    icons: [
        { element: <SiTypescript />, label: 'Typescript' },
        { element: <SiNextdotjs />, label: 'Next.js' },
        { element: <SiCypress />, label: 'Cypress' },
        { element: <SiNetlify />, label: 'Netlify' },
    ]
};

export const Primary: Story = {
    render: () => <ExampleWork {...example} />
};