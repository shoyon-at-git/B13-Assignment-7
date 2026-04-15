import React from 'react';

const SummaryCard = () => {
    return (
        <div className='my-10 gap-6 justify-between max-w-277.5 mx-auto grid grid-cols-2 md:grid-cols-4'>
            <div className='p-3 md:p-8 rounded-md shadow-2xl'>
                <h2 className='text-[32px] font-semibold'>10</h2>
                <p className='text-[#64748b]'>Total Friends</p>
            </div>
            <div className='p-3 md:p-8 rounded-md shadow-2xl'>
                <h2 className='text-[32px] font-semibold'>3</h2>
                <p className='text-[#64748b]'>On Track</p>
            </div>
            <div className='p-3 md:p-8 rounded-md shadow-2xl'>
                <h2 className='text-[32px] font-semibold'>6</h2>
                <p className='text-[#64748b]'>Need Attention</p>
            </div>
            <div className='p-3 md:p-8 rounded-md  shadow-2xl'>
                <h2 className='text-[32px] font-semibold'>12</h2>
                <p className='text-[#64748b]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default SummaryCard;