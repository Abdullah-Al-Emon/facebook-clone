import React from 'react';
import './LastColumn.css'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { RiVideoAddFill } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'
import img from '../../../assets/r-native.jpg'
import img1 from '../../../assets/programmers.jpg'
import ActiveList from '../ReUsable/ActiveList';

const LastColumn = () =>
{
    return (
        <div className='last-column'>
            <div className='last-page-flex'>
                <p className='page-shortcuts'>Your Pages and Profiles</p>
                <div className='page-icon-div'>
                    <BiDotsHorizontalRounded className='page-icon' />
                </div>
            </div>
            <div className='last-list'>
                <div>
                    <img className='nav-img' src='https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-1/305652439_408667701404594_8759169416314342737_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=111&ccb=1-7&_nc_sid=05dcb7&_nc_eui2=AeFdta6NwTVEfskfwZul95pui--x6LMiAOaL77HosyIA5srE-X-zgzozGk_HJbQwi_O9X1ueXBfXlfIGyP9lr6o4&_nc_ohc=12YOyW6wc58AX_dAi9R&_nc_ht=scontent.fdac11-2.fna&oh=00_AfD1P1X3HAyj5WcJ1waQr5pNwQichDgP5uO6g_AF4alKtA&oe=63DA6AA3' alt="" />
                </div>
                <p>সুন্নাহ আমার আদর্শ</p>
            </div>
            <div className='page-other'>
                <div className='switch'>
                    <div>
                        <span className='i'></span>
                    </div>
                    <div>
                        Switch into Page
                    </div>
                </div>
                <div className='switch'>
                    <div>
                        <span className='j'></span>
                    </div>
                    <div>
                        Create promotion
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className='last-page-flex'>
                <p className='page-shortcuts'>Contacts</p>
                <div className='icons-div'>
                    <div className='page-icon-div'>
                        <RiVideoAddFill className='page-icon' />
                    </div>
                    <div className='page-icon-div'>
                        <AiOutlineSearch className='page-icon' />
                    </div>
                    <div className='page-icon-div'>
                        <BiDotsHorizontalRounded className='page-icon' />
                    </div>
                </div>
            </div>
            <ActiveList img={'https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/276169948_3058595251136498_3513931327847645840_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGSYn1n1yQv-lc6NoxNHZa4hpBqW1o072WGkGpbWjTvZTde1qlMcPsGK29vrnrPWAq_AkGfiWO3BKiLHdiL_g5Y&_nc_ohc=IOlFa9yv-WUAX_jkxtN&_nc_ht=scontent.fdac11-1.fna&oh=00_AfBy8an5WoMVi99ORFoIthMoqNEGqZJcYoWLzOeFWkm8bA&oe=63DA65AE'} title={'Md Kazi Sojib'} />
            <ActiveList img={'https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/280656756_5181176175254638_4165965498287455893_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFHWzz95vwE-ueKCjghjChspMzLqjM4N_ikzMuqMzg3-J7ksPYM9JJ4DjIQ8mWIZ_i-9AiysqDDK_kN9BBjmp07&_nc_ohc=n6RplRfM6gsAX-q9pKz&_nc_ht=scontent.fdac11-2.fna&oh=00_AfC_JorqmTztW68FZN4vLHy6UyFeSUSFt6lUXYMz35pJaQ&oe=63DAC52B'} title={'Nayme'} />
            <ActiveList img={'https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/272799776_1147969389075023_2483529840831974494_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHnT2GNzoB_UmpQ76TeKZnX5QW6zwKMw1blBbrPAozDVpdNAvyM1l8sJAV_QnC48n1g1GLAOwyKZSNQNglU2gj3&_nc_ohc=z-ZSIMMF92EAX94VmBs&tn=jmH2Mb2XhKo3nmqh&_nc_ht=scontent.fdac11-2.fna&oh=00_AfApNZBeStTpfBawAZxg8Bxegp1ox_bnHltQ7IE1ntH2cA&oe=63DB8B4A'} title={'Md Rasel Hossain'} />
            <ActiveList img={'https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/318887559_1863500744010342_2435481355892565880_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHx-vmNe98KlRVzr71-iJC7tL4wwJOt8wC0vjDAk63zACexu0jVViB5tIjDVDjtH3k2ZZ_oaz1_gc5aoeJOXC-e&_nc_ohc=u1P4siK3DfwAX84gah-&tn=jmH2Mb2XhKo3nmqh&_nc_ht=scontent.fdac11-2.fna&oh=00_AfCAP8kOFjVVPNVxOs8IeOyR6SmTND14T-Z9hkjs4cq95Q&oe=63DA649C'} title={'Solaiman Shadin'} />
            <ActiveList img={'https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/302586253_5401688709938912_5485166260517378960_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGA2TXY74xWZa8hMWtC0DeXhslj1DviYPeGyWPUO-Jg90yYSFsdCE0JzIqfzV9nB9Bu1md989HeiFwQFAFPPrx5&_nc_ohc=UmsKFbE5QEMAX8uykaH&_nc_ht=scontent.fdac11-1.fna&oh=00_AfCrhTrSK7quGiRvYNPy6yrpKmmPaEUFI7Cz1affvN2s1Q&oe=63DBD84B'} title={'Fahim Hossain Atul'} />
            <ActiveList img={'https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/283131619_3194111594193547_3016175501493835613_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHjGhuj43ayLFhCYpEV0rx8ppE335NE3oGmkTffk0TegUIRR_OIgDRO7M2JJuGYf0nRjbOc6gZ0cvzy4Mrz2WML&_nc_ohc=DKDNtUiaQlMAX8rhlw-&_nc_ht=scontent.fdac11-2.fna&oh=00_AfDQHZf1Z8b1sEgla6uC0OaDrE5Bag7B7KHCmFKJN8vaLg&oe=63DB54C3'} title={'KaZi NaHiD'} />
            <ActiveList img={'https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/306363001_3190909504555734_2737528364786933423_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHUjuZfJJvEqCwa5Rac4T2a4iTDgqD5BdHiJMOCoPkF0f1uVy9KYjqQv0ZZ7SUnhqowg4zPWxOW-QiyFijuCQ80&_nc_ohc=KnYOOQSurOwAX8W90I0&_nc_ht=scontent.fdac11-2.fna&oh=00_AfCrR1uBdrTHLWGI4PQ5gyP_UWK5WK4xlxrYz3TNaoFDfw&oe=63DBD41A'} title={'নাঈম খাঁন'} />
            <ActiveList img={'https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/322991030_488354783433002_440007582423883788_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH7dmASrb8VAorJW7wrAPLLLXRwrHGpw1MtdHCscanDU91u4X0KVYUTkJvpKE5YvNXWFvmYqL7iAuQ3sxDVrKK6&_nc_ohc=dkzOmAjcXtgAX-obWIc&_nc_ht=scontent.fdac11-2.fna&oh=00_AfDxM03aA9I014S_hY74omDvvrHe4bMy2C1w1jgzW8Z7_Q&oe=63DA4662'} title={'Tanmoy Parvez '} />
            <ActiveList img={'https://scontent.fdac11-2.fna.fbcdn.net/v/t1.6435-9/49569627_2028966560532693_7129220303439265792_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE8uj3u6BSRu_GvGWGomZhAnxJLBdCTq0KfEksF0JOrQmtKHkXCZhcH9R1pO9U8m9A1IjFd_fgZrSuOMhgWb-iI&_nc_ohc=Annw0qsVicQAX_KGGgy&_nc_ht=scontent.fdac11-2.fna&oh=00_AfBO8BURh7yQVoz0Seg5htc0YUxcX8o-his40q0j3AfTKA&oe=63FD70FD'} title={'Ilias Zaman'} />
            <div className="line"></div>
            <div className='last-page-flex'>
                <p className='page-shortcuts'>Groups Conversations</p>
                <div className='page-icon-div'>
                    {/* <BiDotsHorizontalRounded className='page-icon' /> */}
                </div>
            </div>
            <ActiveList img={img} title={'React Native Community'} />
            <ActiveList img={img1} title={'Programmers BD'} />
            <div className='fast-list'>
                <div className='list-icon-div'>
                    <HiPlus className='list-icon' />
                </div>
                <p>Create new group</p>
            </div>
        </div>
    );
};

export default LastColumn;