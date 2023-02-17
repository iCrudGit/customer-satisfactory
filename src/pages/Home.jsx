import React from "react";

const Home = () => {
  return (
    <section className="px-2 mx-auto justify-center md:w-[67%] lg:w-[40%] sm:w-[30%]">
      <div>

          <div className="md:w-[67%] lg:w-[95vh] mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <h1 className="text-3xl mt-6 font-semibold">
            [CSS] Customer Satisfactory Service
            </h1>
          </div>
      
    
        <h1 className="mt-2 font-medium">Dear Client,</h1>
        <p className="md:w-[67%] lg:w-[95vh] text-gray-600">
          Kindly fill-up this survey form and let us know your experience while transacting official business with us. 
          DILG shall comply with the Republic Act No. 10173 or the Data Privacy Act of 2012; any personal information you choose to share will be kept confidential.
        </p>
        <hr />

        <div>
          <h1 className="mt-2 font-medium">Client Type:</h1>
         
            <ul className="flex space-x-5 px-3 py-2 text-center font-semibold rounded bg-yellow-400 text-black md:w-[67%] lg:w-[95vh] uppercase">
              <li className="flex items-center">
                  <input type="radio" value="client" name="client" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">Client</label>
              </li>
              <li className="flex items-center">
                  <input type="radio" value="client" name="client" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">Business</label>
              </li>
              <li className="flex items-center">
                  <input type="radio" value="client" name="client" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">GovernmentXX</label>
              </li>
            </ul>
    
        </div>
        

        <div>
          <h1 className="mt-2 font-medium">Select Age:</h1>
         
            <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-semibold rounded bg-yellow-400 text-black md:w-[67%] lg:w-[95vh] uppercase">
              <li className="flex items-center">
                  <input type="radio" value="age1" name="age" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">Below 18</label>
              </li>
              <li className="flex items-center">
                  <input type="radio" value="age2" name="age" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">18-24</label>
              </li>
              <li className="flex items-center">
                  <input type="radio" value="age3" name="age" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">25-34</label>
              </li>
              <li className="flex items-center">
                  <input type="radio" value="age4" name="age" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">35-44</label>
              </li>
              <li className="flex items-center">
                  <input type="radio" value="age5" name="age" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">45-54</label>
              </li>
              <li className="flex items-center">
                  <input type="radio" value="age6" name="age" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">55-64</label>
              </li>
              <li className="flex items-center">
                  <input type="radio" value="age7" name="age" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">65 Above</label>
              </li>
              <li> <label className="ml-1">Years Old</label></li>
            </ul>
    
        </div>
        

        <div className="mt-2">
          <p className="md:w-[67%] lg:w-[95vh] text-gray-600">
            <strong>Instructions:</strong> Select the statement that best describes your awareness and experience in using 
            the DILG Citizen’s Charter (CC). The Citizen’s Charter (CC) is an official document that reflects the services of a government agency/office including its requirements, fees, and processing times, among others.
          </p>
        </div>
        <hr />
        <div>
          <h1 className="mt-2 font-medium">CC1: Do you know about the Citizen's Charter?</h1>
         
            <ul className="px-3 py-2 text-center font-semibold rounded bg-yellow-400 text-black md:w-[67%] lg:w-[95vh] uppercase">
              <li className="flex items-center">
                  <input type="radio" value="cc1a" name="cc2" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">1. Yes, aware before my transaction with this office.</label>
              </li>
              <hr />
              <li className="flex items-center">
                  <input type="radio" value="cc1b" name="cc2" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">2. Yes, but aware only when I saw the CC of this office.</label>
              </li>
              <hr />
              <li className="flex items-center">
                  <input type="radio" value="cc1c" name="cc2" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">3. No, not aware of the CC. (Skip question CC2 nd CC3.)</label>
              </li>
            </ul>
    
        </div>
        <hr />
        <div>
          <h1 className="mt-2 font-medium">CC2: Do you know about the Citizen's Charter?</h1>
         
            <ul className="px-3 py-2 text-center font-semibold rounded bg-yellow-400 text-black md:w-[67%] lg:w-[95vh] uppercase">
              <li className="flex items-center">
                  <input type="radio" value="cc2a" name="cc1" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">1. Yes, aware before my transaction with this office.</label>
              </li>
              <hr />
              <li className="flex items-center">
                  <input type="radio" value="cc2b" name="cc1" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">2. Yes, but aware only when I saw the CC of this office.</label>
              </li>
              <hr />
              <li className="flex items-center">
                  <input type="radio" value="cc2c" name="cc1" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">3. No, not aware of the CC. (Skip question CC2 nd CC3.)</label>
              </li>
            </ul>
    
        </div>
        <hr />
        <div>
          <h1 className="mt-2 font-medium">CC2: Do you know about the Citizen's Charter?</h1>
         
            <ul className="px-3 py-2 text-center font-semibold rounded bg-yellow-400 text-black md:w-[67%] lg:w-[95vh] uppercase">
              <li className="flex items-center">
                  <input type="radio" value="cc2a" name="cc1" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">1. Yes, aware before my transaction with this office.</label>
              </li>
              <hr />
              <li className="flex items-center">
                  <input type="radio" value="cc2b" name="cc1" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label className="ml-1">2. Yes, but aware only when I saw the CC of this office.</label>
              </li>
            
            </ul>
    
        </div>
      </div>
    </section>
  );
};

export default Home;
