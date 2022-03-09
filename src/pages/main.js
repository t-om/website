import React from 'react';

const MainPage = () => {


    return (
        <main>
            <section className='w-full h-full grid grid-cols-5'>
                <section className='h-full col-span-2 pb-32 flex flex-row justify-end items-center'>
                    <nav className=''>
                        <ul className='flex flex-col gap-2 text-2xl font-light text-primary-light cursor-pointer'>
                            <li>recipes<div className='w-8 mt-1 border-t border-primary-light invisible'/></li>
                            <li>food<div className='w-8 mt-1 border-t border-primary-light invisible'/></li>
                            <li>music<div className='w-8 mt-1 border-t border-primary-light invisible'/></li>
                            <li>cinema<div className='w-8 mt-1 border-t border-primary-light invisible'/></li>
                            <li>code<div className='w-8 mt-1 border-t border-primary-light invisible'/></li>
                        </ul>
                    </nav>
                </section>
            </section>
        </main>
    );
};

export default MainPage;