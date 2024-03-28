import React from 'react';
import Image from 'next/image.js';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from './data.js';

const Orders = () => {
  return (
    <div className='w-full text-xs inter min-h-screen'>
      <div className='p-4'>
        <div className='w-full m-auto p-4  rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Transfer</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                <div className=' p-3 rounded-lg overflow-hidden'>
                           <Image 
                            src={order.pic}
                            className='h-10 w-10 rounded-lg object-cover '
                           />
                        </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                      ${order.total.toLocaleString()}
                    </p>
                    <p className='text-gray-800 text-sm'>{order.name.first}</p>
                  </div>
                </div>
               
                <p className='hidden md:flex'>{order.date}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;
