import { List, ListItem, Text, Flex } from '@mantine/core';

export interface EducationInterface {
    school: string;
    degree: string;
    dateStart: string;
    dateEnd: string;
    description: Array<string>;
    gpa: string;
}

const Education = (props: EducationInterface) => {
    return (
        <Flex direction={'column'}>
            <Text>{props.degree}</Text>
            <Text>{props.school}</Text>
            <Text>{props.dateStart}{props.dateEnd ? (` - ${props.dateEnd}`) : null}</Text>
            {props.description ?
                <List withPadding listStyleType='square'>
                    {props.description.map((item) => <ListItem>{item}</ListItem>)}
                    <ListItem>{props.gpa}{' GPA'}</ListItem>
                </List> :
                null
            }
        </Flex>

    );
};

export default Education;