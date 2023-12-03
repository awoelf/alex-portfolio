import { Flex, Image, Text, Group, Space, Box, Tooltip } from '@mantine/core';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import { SiGithub } from '@icons-pack/react-simple-icons';

export interface ExampleWorkInterface {
    image: string | undefined;
    title: string;
    github: string;
    url: string;
    dateStart: string;
    dateEnd: string;
    description: string;
    icons: Array<icon>;
}

interface icon {
    element: React.JSX.Element;
    label: string;
}

const ExampleWork = (props: ExampleWorkInterface) => {
    return (
        <Flex direction={'column'}>
            <a href='props.url'>
                <Image src={props.image || '/static/placeholder.jpg'} className='aspect-[7/4] rounded-md' />
            </a>
            <Space h={'sm'} />
            <Flex justify={'space-between'}>
                <Group>
                    <Text>{props.title}</Text>
                    {props.url ? <a href={props.url}><BoxArrowUpRight /></a> : null}
                    {props.github ? <a href={props.github}><SiGithub size={18} /></a> : null}
                </Group>
                <Group>
                    <Text>{props.dateStart}{props.dateEnd ? (` - ${props.dateEnd}`) : null}</Text>
                </Group>
            </Flex>
            <Space h={'sm'} />
            <Text>{props.description}</Text>
            <Space h={'sm'} />
            {props.icons ? (
                <Box>
                    <Text>{'Built with'}</Text>
                    <Space h={'xs'} />
                    <Group>
                        {props.icons.map((item) => <Tooltip label={item.label}>
                            {item.element}
                        </Tooltip>)}
                    </Group>
                </Box>
            ) :
                null
            }
        </Flex>
    );
};

export default ExampleWork;