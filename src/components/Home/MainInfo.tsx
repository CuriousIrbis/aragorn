// import styles from '../../styles/Home/maininfo.module.scss'

import photo from '../../assets/img/Фотография Марка.jpg'
import Info, { LinkInfo } from './Info';

export default function Maininfo(){
    return (
        <section className='flex flex-row justify-between pl-17.5 border border-dark-hacki font-jetbrains'>
            <section className='flex flex-col gap-12 w-full pt-20'>
                <section className='flex flex-row justify-between pr-12'>
                    <div className='text-dark-hacki flex flex-row gap-5 items-center'>
                        <p>#DEVELOPER</p>
                        <div className='bg-dark-hacki w-2 h-2 shadow-[0_0_10px_#7A6A50] rounded-full'></div>
                        <p>PORTFOLIO</p>
                    </div>
                    <div className='flex flex-row items-center gap-5 text-green'>
                        <div className='bg-green w-2 h-2 rounded-full shadow-[0_0_10px_green]'></div>
                        <p>open to work</p>
                    </div>
                </section>
                <section>
                    <h2 className='font-bold text-[50px]'>
                        ЕСАКОВ <span className='text-orange'>МАРК</span><br />
                        АЛЕКСАНДРОВИЧ
                    </h2>
                </section>
                <section className='border border-dark-hacki text-muted w-max px-12 py-4'>
                    <p className='text-dark-hacki'>Frontend разработчик</p>
                </section>
                <hr className='text-dark-hacki max-w-[80%]'/>
                <section className='flex flex-row gap-7 font-barlow pb-10'>
                    <Info 
                        title="ЛОКАЦИЯ"
                        info='Москва, Россия'
                    />
                    <Info 
                        title='СТЭК'
                        info='TS · React · Node'
                    />
                    <LinkInfo 
                        title='GITHUB'
                        info='https://github.com/CuriousIrbis'
                    />
                </section>
            </section>
            <section className='bg-[#3a2410] border-x border-dark-hacki'>
                <img src={photo} alt="" className='w-120 px-10 py-20' />
            </section>
        </section>
    )
}