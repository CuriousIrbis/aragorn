import type ILink from '../types/TLinks'

import HOME from '../pages/Home';
import INTERESTS from '../pages/Interests';
import PROJECTS from '../pages/Projects';
import CONTACTS from '../pages/Contacts';

const links: Array<ILink> = [
    {
        address: '/',
        name: 'HOME',
        pageLink: HOME,
        description: ''
    },
    {
        address: '/interests',
        name: 'ИНТЕРЕСЫ',
        pageLink: INTERESTS,
        description: 'Чем я занимаюсь вне работы'
    },
    {
        address: '/projects',
        name: 'ПРОЕКТЫ',
        pageLink: PROJECTS,
        description: 'Пет-проекты и учебные работы'
    },
    {
        address: '/contacts',
        name: 'КОНТАКТЫ',
        pageLink: CONTACTS,
        description: 'Давайте поговорим'
    }
]

export default links