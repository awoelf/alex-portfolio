import { Flex, NavLink } from '@mantine/core';
import { House, Moon, Award, FileText, PersonLinesFill, Window } from 'react-bootstrap-icons';

const Menu = () => {
    return (
        <Flex direction={'column'}>
            <NavLink label='Change Theme' leftSection={<Moon />} />
            <NavLink label='Introduction' leftSection={<House />} />
            <NavLink label='Example Work' leftSection={<Window />} />
            <NavLink label='Education' leftSection={<Award />} />
            <NavLink label='Resume' leftSection={<FileText />} />
            <NavLink label='Contact' leftSection={<PersonLinesFill />} />
        </Flex>
    );
};

export default Menu;