import '/src/style/layout/footer.scss'

import tg from '../../assets/img/png/tg-logo.png'
import vk from '../../assets/img/png/vk-logo.png'
import instagram from '../../assets/img/png/instagram-logo.png'

interface LinkType{
    title: string
    link: string
    img: string
}

const links: Array<LinkType> = [
    {
        title: 'тг',
        link: 'https://t.me/exchron0s',
        img: tg
    },
    {
        title: 'вк',
        link: 'https://vk.com/exchron0s',
        img: vk
    },
    {
        title: 'инстаграм',
        link: 'https://www.instagram.com/exchron0s/',
        img: instagram
    }
]

const linkMap = links.map((value: LinkType) => {
    return(
        <tr>
            <td>
                <h5>{value.title}</h5>
            </td>
            <td>
                <a href={value.link}><img src={value.img} alt={value.title} /></a>
            </td>
        </tr>
    )
})

export default function Footer(){
    return (
        <footer>
            <table>
                <thead>
                    <th>площадка</th>
                    <th>сслыка</th>
                </thead>
                <tbody>
                    {linkMap}
                </tbody>
            </table>
        </footer>
    )
}