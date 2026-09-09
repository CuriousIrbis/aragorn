import type ILink from '../types/TLinks'

import HOME from '../pages/Home';
import INTERESTS from '../pages/Interests';
import PROJECTS from '../pages/Projects';
import CONTACTS from '../pages/Contacts';

const links: Array<ILink> = [
    {
        address: '/',
        name: 'HOME',
        pageLink: HOME
    },
    {
        address: '/interests',
        name: 'ИНТЕРЕСЫ',
        pageLink: INTERESTS
    },
    {
        address: '/projects',
        name: 'ПРОЕКТЫ',
        pageLink: PROJECTS
    },
    {
        address: '/contacts',
        name: 'КОНТАКТЫ',
        pageLink: CONTACTS
    }
]

export default links