import React from 'react';

const Quiz = () => {
    return (
        <div className='flex justify-center'>
            <div className='card w-7/12 bg-base-100 shadow-xl'>
                <div className='card-body'>


                    <h3 className="mb-5 text-lg font-medium text-gray-900">How much do you expect to use each month?</h3>
                    <ul className="grid gap-6 w-full md:grid-cols-2">
                        <li>
                            <input type="radio" id="hosting-small-c" name="hosting" value="hosting-small-b" className="hidden peer" required="" />
                            <label for="hosting-small-c" className="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded-lg border border-gray-700 cursor-pointer  peer-checked:bg-rose-500 peer-checked:border-emerald-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-300 ">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">0-020 MB</div>

                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="hosting-small-d" name="hosting" value="hosting-small-b" className="hidden peer" required="" />
                            <label for="hosting-small-d" className="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded-lg border border-gray-700 cursor-pointer  peer-checked:bg-rose-500 peer-checked:border-emerald-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-300 ">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">0-020 MB</div>

                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="hosting-small-f" name="hosting" value="hosting-small-b" className="hidden peer" required="" />
                            <label for="hosting-small-f" className="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded-lg border border-gray-700 cursor-pointer  peer-checked:bg-emerald-500 peer-checked:border-emerald-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-300 ">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">0-020 MB</div>

                                </div>
                            </label>
                        </li>
                        <li>
                            <input type="radio" id="hosting-small-g" name="hosting" value="hosting-small-b" className="hidden peer" required="" />
                            <label for="hosting-small-g" className="inline-flex justify-between items-center p-5 w-full text-gray-900 bg-white rounded-lg border border-gray-700 cursor-pointer  peer-checked:bg-emerald-500 peer-checked:border-emerald-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-300 ">
                                <div className="block">
                                    <div className="w-full text-lg font-semibold">0-020 MB</div>

                                </div>
                            </label>
                        </li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Quiz;