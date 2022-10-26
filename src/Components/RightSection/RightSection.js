import React from 'react';
import { BiVideo } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import { BsCheck2All } from "react-icons/bs";
import { AiFillFileZip } from "react-icons/ai";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiFillAudio } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import background from "./../images/bg.png"

const RightSection = () => {
    return (
        <div className='w-3/4 p-5' style={{ backgroundImage: `url(${background})` }}>
            <div className='flex justify-between mb-5 items-center'>
                <div>
                    <h1 className='text-2xl font-semibold'>Alice Whiteman</h1>
                    <p className='text-gray-500'>Online</p>
                </div>
                <div className='flex items-center'>
                    <BiVideo></BiVideo>
                    <IoCallOutline className='mx-8'></IoCallOutline>
                    <h1> | </h1>
                    <VscSearch className='mx-8'></VscSearch>
                    <img class="w-8 h-8 rounded-full" src="https://placeimg.com/194/194/people" alt="Rounded avatar" />
                </div>
            </div>
            <div className='w-36 flex rounded-sm pb-1 bg-gray-100'>
                <p className='pl-2 pt-2 font-semibold'>OK!</p>
                <AiFillLike className='mt-3 ml-2'></AiFillLike>
                <small className='ml-8 mt-5 text-xs'>6:01 PM</small>
            </div>
            <div className='float-right flex bg-[#c3fcc3] rounded-sm p-2'>
                <p className='mr-20'>Here are all the backgrounds.Let me know your favorite!</p>
                <small className='text-xs float-right mt-5'>6:01 PM</small>
                <BsCheck2All className='mt-5 mr-3 text-blue-500'></BsCheck2All>
            </div>
            <div className='bg-[#c3fcc3] float-right mt-4 p-3'>
                <div className='float-right bg-[#e5ffe5]  rounded-sm p-2'>
                    <div className=' flex items-center'>
                        <AiFillFileZip className='mr-3 text-4xl text-yellow-600'></AiFillFileZip>
                        <div>
                            <p className='mr-20'>Backgrounds.zip</p>
                            <p className='mr-20'>23.5 MB Compressed (zipped) folder</p>
                        </div>
                    </div>
                    <hr className='my-3' />
                    <div className='flex'>
                        <button className='w-1/2 py-2 mr-1 bg-gray-300'>Open</button>
                        <button className='w-1/2 py-2 bg-gray-300'>Save as...</button>
                    </div>

                </div>
                <div>
                    <BsCheck2All className='mt-5 float-right mr-3 text-blue-500'></BsCheck2All>
                    <small className='text-xs float-right mt-5'>6:01 PM</small>
                </div>
            </div>
            <h1 className='text-center text-2xl text-gray-400 mt-72'>Today</h1>
            <div class="w-80 bg-white rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3">
                <div className='p-3'>
                    <img src="https://placeimg.com/400/225/arch" alt="" />
                    <div className='flex'>
                        <p>This is beautiful!</p>
                        <small className='text-xs float-right ml-32 mt-5'>8:15 PM</small>
                    </div>
                </div>
            </div>
            <div className='float-right flex bg-[#c3fcc3] rounded-sm p-2'>
                <div className='flex items-center'>
                    <BsEmojiHeartEyes className='text-2xl mr-2'></BsEmojiHeartEyes>
                    <p className='mr-20'> Yes thats my fave too!</p>
                </div>
                <small className='text-xs float-right mt-5'>8:22 PM</small>
                <BsCheck2All className='mt-5 mr-3 text-gray-500'></BsCheck2All>
            </div>
            <div className='mt-16 flex items-center justify-between px-5 py-3 w-full bg-white'>
                <div className='flex items-center'>
                    <HiOutlineEmojiHappy></HiOutlineEmojiHappy>
                    <AiFillAudio className='mx-5'></AiFillAudio>
                    <p>|<small className='text-gray-500'>Type a message</small></p>
                </div>
                <AiOutlineSend></AiOutlineSend>
            </div>
        </div>
    );
};

export default RightSection;