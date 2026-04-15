"use client"
import { FriendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';

const SummaryCard = () => {
    const {friends} = useContext(FriendContext)

    let onTrack = 0;
    let needAttention = 0;

    friends.forEach((f) => {
        if (f.status === "on-track") {
            onTrack++;
        } else {
            needAttention++;
        }
    });

    return (
        <div className='my-10 gap-6 justify-between max-w-277.5 mx-auto grid grid-cols-2 md:grid-cols-4'>
            
            <div className='p-3 md:p-8 rounded-md shadow-2xl hover:shadow-md'>
                <h2 className='text-[32px] font-semibold'>{friends.length}</h2>
                <p className='text-[#64748b]'>Total Friends</p>
            </div>

            <div className='p-3 md:p-8 rounded-md shadow-2xl hover:shadow-md'>
                <h2 className='text-[32px] font-semibold'>{onTrack}</h2>
                <p className='text-[#64748b]'>On Track</p>
            </div>

            <div className='p-3 md:p-8 rounded-md shadow-2xl hover:shadow-md'>
                <h2 className='text-[32px] font-semibold'>{needAttention}</h2>
                <p className='text-[#64748b]'>Need Attention</p>
            </div>

            <div className='p-3 md:p-8 rounded-md shadow-2xl hover:shadow-md'>
                <h2 className='text-[32px] font-semibold'>12</h2>
                <p className='text-[#64748b]'>Interactions This Month</p>
            </div>

        </div>
    );
};

export default SummaryCard;