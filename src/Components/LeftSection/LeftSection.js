import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";
import { BiVideo } from "react-icons/bi";
import { BsCheck2All } from "react-icons/bs";

const LeftSection = () => {
    return (
        <div className='w-1/4'>
            <h4 className='text-xl mx-3 mt-2'>Whatsapp Beta</h4>
            <div>
                <div className='flex justify-between items-center m-3'>
                    <h1 className='text-2xl font-semibold'>Chat</h1>
                    <div className='flex justify-between'>
                        <AiOutlinePlus className='mx-10'></AiOutlinePlus>
                        <FiSettings></FiSettings>
                    </div>
                </div>
                <div class="relative m-3">
                    <input className='p-2 w-full text-sm text-gray-900 bg-gray-50 border focus:border-0' type="search" placeholder='Search or start new chat' name="" id="" />
                    <div class="flex absolute inset-y-0 right-3 items-center px-3 pointer-events-none">
                        <VscSearch></VscSearch>
                    </div>
                </div>
                <div className='flex justify-between m-3'>
                    <div className='flex items-center'>
                        <img class="w-10 h-10 rounded-full" src="https://placeimg.com/191/191/people" alt="Rounded avatar" />
                        <div className='mx-3'>
                            <h4 className='font-semibold'>Maya Kasuma</h4>
                            <p>Yes OK!</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-blue-400 font-semibold'>3:48 PM</p>
                        <span className='bg-blue-400 rounded-full text-white float-right px-2' >1</span>
                    </div>
                </div>
                <div className='flex justify-between m-3'>
                    <div className='flex items-center'>
                        <img class="w-10 h-10 rounded-full" src="https://placeimg.com/192/192/people" alt="Rounded avatar" />
                        <div className='mx-3'>
                            <h4 className='font-semibold'>Steve Ballmer</h4>
                            <p>Developers,Developers</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-blue-400 font-semibold'>2:54 PM</p>
                        <span className='bg-blue-400 rounded-full text-white float-right px-2' >4</span>
                    </div>
                </div>
                <div className='flex justify-between m-3'>
                    <div className='flex items-center'>
                        <img class="w-10 h-10 rounded-full" src="https://placeimg.com/193/193/people" alt="Rounded avatar" />
                        <div className='mx-3'>
                            <h4 className='font-semibold'>Stasa Benko</h4>
                            <p>Call me when you can</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-blue-400 font-semibold'>10:04 PM</p>
                        <span className='bg-blue-400 rounded-full text-white float-right px-2' >1</span>
                    </div>
                </div>
                <div className='bg-blue-100'>
                    <div className='flex justify-between py-2 m-3'>
                        <div className='flex items-center'>
                            <img class="w-10 h-10 rounded-full" src="https://placeimg.com/194/194/people" alt="Rounded avatar" />
                            <div className='mx-3'>
                                <h4 className='font-semibold'>Alice Whiteman</h4>
                                <div className='flex items-center'>
                                    <BsCheck2All className='mr-2 text-blue-500'></BsCheck2All>
                                    <p>Yes thats my face too!</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-gray-400 font-semibold'>8:32 AM</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between m-3'>
                    <div className='flex items-center'>
                        <img class="w-10 h-10 rounded-full" src="https://placeimg.com/195/195/people" alt="Rounded avatar" />
                        <div className='mx-3'>
                            <h4 className='font-semibold'>Clippy</h4>
                            <p>Where are you?</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-gray-400 font-semibold'>12:32 AM</p>
                    </div>
                </div>
                <div className='flex justify-between m-3'>
                    <div className='flex items-center'>
                        <img class="w-10 h-10 rounded-full" src="https://placeimg.com/196/196/people" alt="Rounded avatar" />
                        <div className='mx-3'>
                            <h4 className='font-semibold'>Henry Strachan</h4>
                            <p className='text-blue-400 font-semibold'>Typing...</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-gray-400 font-semibold'>05/11</p>
                    </div>
                </div>
                <div className='flex justify-between m-3'>
                    <div className='flex items-center'>
                        <img class="w-10 h-10 rounded-full" src="https://placeimg.com/197/197/people" alt="Rounded avatar" />
                        <div className='mx-3'>
                            <h4 className='font-semibold'>Jihoon Seo</h4>
                            <div className='flex items-center'>
                                <BsCheck2All className='mr-2'></BsCheck2All>
                                <BiVideo className='mr-2'></BiVideo>
                                <p>Big Jump!</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-400 font-semibold'>05/11</p>
                    </div>
                </div>
                <div className='flex justify-between m-3'>
                    <div className='flex items-center'>
                        <img class="w-10 h-10 rounded-full" src="https://placeimg.com/198/198/people" alt="Rounded avatar" />
                        <div className='mx-3'>
                            <h4 className='font-semibold'>Big Backs Clubs</h4>
                            <p>Rebecca!Yum!is</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-400 font-semibold'>05/11</p>
                    </div>
                </div>
                <div className='flex justify-between m-3'>
                    <div className='flex items-center'>
                        <img class="w-10 h-10 rounded-full" src="https://placeimg.com/199/199/people" alt="Rounded avatar" />
                        <div className='mx-3'>
                            <h4 className='font-semibold'>Mary Patricia</h4>
                            <p>Yes definitely!</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-400 font-semibold'>04/11</p>
                    </div>
                </div>
                <div className='flex justify-between m-3'>
                    <div className='flex items-center'>
                        <img class="w-10 h-10 rounded-full" src="https://placeimg.com/200/200/people" alt="Rounded avatar" />
                        <div className='mx-3'>
                            <h4 className='font-semibold'>James Robert</h4>
                            <p>Thanks for this information!</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-400 font-semibold'>03/11</p>
                    </div>
                </div>
                <div className='flex justify-between m-3'>
                    <div className='flex items-center'>
                        <img class="w-10 h-10 rounded-full" src="https://placeimg.com/201/201/people" alt="Rounded avatar" />
                        <div className='mx-3'>
                            <h4 className='font-semibold'>David william</h4>
                            <p>I reach at home</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-400 font-semibold'>03/11</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSection;