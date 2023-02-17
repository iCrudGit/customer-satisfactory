import React from "react";

const Home = () => {
  return (
    <section className="mx-auto justify-center md:w-[67%] lg:w-[40%] sm:w-[30%]">
      <div>
        <h1 className="text-3xl mt-6 font-semibold">
          Customer Satisfactory Service Form
        </h1>
    
        <h1 className="mt-2 font-medium">Dear Client,</h1>
        <p className="w-[95vh] text-gray-600">
          Kindly fill-up this survey form and let us know your experience while transacting official business with us. 
          DILG shall comply with the Republic Act No. 10173 or the Data Privacy Act of 2012; any personal information you choose to share will be kept confidential.
        </p>
        <hr />

        <div>
          <h1 className="mt-2 font-medium">Client Type:</h1>
        
          <div className=" w-[95vh] flex space-x-10 text-center text-black font-semibold py-2 px-4 bg-yellow-300">
            
            <input type="radio" value="client" name="client" /> Client
            <input type="radio" value="client" name="client" /> Business
            <input type="radio" value="client" name="client" /> Government
            <hr />
          </div>
        </div>
        
        <div>
          <h1 className="mt-2 font-medium">Age:</h1>
        
          <div className="w-[95vh] flex space-x-5 text-center text-black font-semibold py-2 bg-yellow-300 px-4">
            <input className="mr-2" type="radio" value="age1" name="age" /> Below 18 y/o
            <input className="mr-2" type="radio" value="age2" name="age" /> 18-24 y/o
            <input className="mr-2" type="radio" value="age3" name="age" /> 25-34 y/o
            <input className="mr-2" type="radio" value="age4" name="age" /> 35-44 y/o
            <input className="mr-2" type="radio" value="age5" name="age" /> 45-54 y/o
            <input className="mr-2" type="radio" value="age5" name="age" /> 55-54 y/o
            <input className="mr-2" type="radio" value="age5" name="age" /> 65-54 y/o
            <hr />
          </div>
        </div>

        <div className="mt-2">
          <p className="w-[95vh] text-gray-600">
            <strong>Instructions:</strong> Select the statement that best describes your awareness and experience in using 
            the DILG Citizen’s Charter (CC). The Citizen’s Charter (CC) is an official document that reflects the services of a government agency/office including its requirements, fees, and processing times, among others.
          </p>
        </div>
        <hr />
        <div>
          <h1 className="mt-2 font-medium">CC1: Do you know about the Citizen's Charter?</h1>
          <div className=" w-[95vh] flex space-x-10 text-center text-black font-semibold py-2 px-4 bg-yellow-300">
            
            <input className="mr-2" type="radio" value="client" name="cc1" /> 1. Yes, aware before my transaction with this office.
            <input className="mr-2" type="radio" value="client" name="cc1" /> Business
            <input className="mr-2" type="radio" value="client" name="cc1" /> Government
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
