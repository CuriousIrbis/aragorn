import data from '../assets/text/previews.json'
import Intro from "../components/Intro";
import contactInfo from '../assets/text/contactinfo.json';
import type IContact from '../types/TContact';
import ContactCard from '../components/Contacts/ContactCard';
import accessebility from '../assets/text/accessability.json';
import Accessability from '../components/Contacts/Accessability';

const position3 = data[2];

export default function Contacts(){
    return (
        <div>
            <Intro 
                position={3}
                title={position3.title}
                header={position3.header}
                description={position3.description}
            />
            {contactInfo.map((contact: IContact) => (
                <ContactCard 
                    title={contact.title}
                    link={contact.link}
                    description={contact.description}
                />
            ))}
            <section className='flex flex-row justify-between px-17.5 py-20'>
                {accessebility.map((value) => (
                    <Accessability 
                        title={value.title}
                        description={value.description}
                    />
                ))}
            </section>

        </div>
    )
}