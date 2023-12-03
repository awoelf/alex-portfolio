import { Flex, Image, Text, Group, ActionIcon } from '@mantine/core';


export interface ExampleWorkInterface {
    image: string;
    title: string;
    github: string;
    url: string | undefined;
    dateStart: string;
    dateEnd: string | undefined;
    description: string;
    icons: React.JSX.Element;
}

const ExampleWork = (props: ExampleWorkInterface) => {
    return (
        <Flex direction={'column'}>
            <Image src={props.image || '/static/placeholder.jpg'} className='aspect-[7/4] rounded-md' />
            <Group>
                <Text>{props.title}</Text>
                <ActionIcon></ActionIcon>
            </Group>
        </Flex>
    );
};

export default ExampleWork;