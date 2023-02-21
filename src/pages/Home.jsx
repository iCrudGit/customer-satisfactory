import React, { useState } from "react";

const Home = () => {
  const [client, setClient] = useState("");
  const [age, setAge] = useState("");
  const [ccone, setCcone] = useState("");
  const [cctwo, setCctwo] = useState("");
  const [ccthree, setCcthree] = useState("");

  const [saone, setSaone] = useState("");
  const [satwo, setSatwo] = useState("");
  const [sathree, setSathree] = useState("");
  const [safour, setSafour] = useState("");
  const [safive, setSafive] = useState("");
  const [sasix, setSasix] = useState("");
  const [saseven, setSaseven] = useState("");
  const [saeight, setSaeight] = useState("");
  const [sanine, setSanine] = useState("");

  const [fullname, setFullname] = useState("");
  const [csscode, setCsscode] = useState("");

  const handleData = (e) =>{
    e.preventDefault();
    console.log(
      client + ' ' 
      + age + ' ' 
      + fullname + ' ' 
      + csscode + ' ' 
      + ccone + ' ' 
      + cctwo + ' '
      + ccthree + ' '
      + saone + ' '
      + satwo + ' '
      + sathree + ' '
      + safour + ' '
      + safive + ' '
      + sasix + ' '
      + saseven + ' '
      + saeight + ' '
      + sanine + ''
      );
  }

  return (
    <section className="px-2 mx-auto justify-center md:w-[67%] lg:w-[40%] sm:w-[30%]">
      <div>
        <div
          className="md:w-[67%] lg:w-[95vh] mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <h1 className="text-3xl mt-6 font-semibold">
            [CSS] Customer Satisfactory Service Edit
          </h1>
        </div>

        <h1 className="mt-2 font-medium">Dear Client,</h1>
        <p className="md:w-[67%] lg:w-[95vh] text-gray-600">
          Kindly fill-up this survey form and let us know your experience while
          transacting official business with us. DILG shall comply with the
          Republic Act No. 10173 or the Data Privacy Act of 2012; any personal
          information you choose to share will be kept confidential.
        </p>
        <hr />

        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            Client Type:
          </h1>

          <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-semibold rounded bg-yellow-400 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="client"
                name="client"
                onChange={(e)=>setClient(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Client</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="business"
                name="client"
                onChange={(e)=>setClient(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Business</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="government"
                name="client"
                onChange={(e)=>setClient(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Government</label>
            </li>
          </ul>
        </div>

        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            Select Age:
          </h1>

          <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-semibold rounded bg-yellow-400 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="age1"
                name="age"
                onChange={(e)=>setAge(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Below 18</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="age2"
                name="age"
                onChange={(e)=>setAge(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">18-24</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="age3"
                name="age"
                onChange={(e)=>setAge(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">25-34</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="age4"
                name="age"
                onChange={(e)=>setAge(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">35-44</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="age5"
                name="age"
                onChange={(e)=>setAge(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">45-54</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="age6"
                name="age"
                onChange={(e)=>setAge(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">55-64</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="age7"
                name="age"
                onChange={(e)=>setAge(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">65 Above</label>
            </li>
            <li>
              {" "}
              <label className="ml-1">Years Old</label>
            </li>
          </ul>
        </div>

        <div className="mt-2">
          <p className="md:w-[67%] lg:w-[95vh] text-gray-600 text-xl">
            <strong>Instructions:</strong> Select the statement that best
            describes your awareness and experience in using the DILG Citizen’s
            Charter (CC). The Citizen’s Charter (CC) is an official document
            that reflects the services of a government agency/office including
            its requirements, fees, and processing times, among others.
          </p>
        </div>
        <hr />
        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            CC1: Do you know about the Citizen's Charter?
          </h1>

          <ul className="px-3 py-2 text-center font-semibold rounded bg-yellow-400 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="cc1a"
                name="cc1"
                onChange={(e)=>setCcone(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">
                1. Yes, aware before my transaction with this office.
              </label>
            </li>
            <hr />
            <li className="flex items-center">
              <input
                type="radio"
                value="cc1b"
                name="cc1"
                onChange={(e)=>setCcone(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">
                2. Yes, but aware only when I saw the CC of this office.
              </label>
            </li>
            <hr />
            <li className="flex items-center">
              <input
                type="radio"
                value="cc1c"
                name="cc1"
                onChange={(e)=>setCcone(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">
                3. No, not aware of the CC. (Skip question CC2 nd CC3.)
              </label>
            </li>
          </ul>
        </div>
        <hr />
        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            CC2: If your answer to the previous question is Yes, did you see
            this office's CC?
          </h1>

          <ul className="px-3 py-2 text-center font-semibold rounded bg-yellow-400 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="cc2a"
                name="cc2"
                onChange={(e)=>setCctwo(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">1. Yes, the CC was easy to find.</label>
            </li>
            <hr />
            <li className="flex items-center">
              <input
                type="radio"
                value="cc2b"
                name="cc2"
                onChange={(e)=>setCctwo(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">
                2. Yes, but the CC was hard to find.
              </label>
            </li>
            <hr />
            <li className="flex items-center">
              <input
                type="radio"
                value="cc2c"
                name="cc2"
                onChange={(e)=>setCctwo(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">
                3. No, I did not see this office's CC.
              </label>
            </li>
          </ul>
        </div>
        <hr />
        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            CC3: If your answer to the previous question is Yes, did you use the
            CC as a guide for the services you availed?
          </h1>

          <ul className="px-3 py-2 text-center font-semibold rounded bg-yellow-400 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="cc3a"
                name="cc3"
                onChange={(e)=>setCcthree(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">1. Yes, I was able to use the CC.</label>
            </li>
            <hr />
            <li className="flex items-center">
              <input
                type="radio"
                value="cc3b"
                name="cc3"
                onChange={(e)=>setCcthree(e.target.value)}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">
                2. No, I was not able to use the CC.
              </label>
            </li>
          </ul>
        </div>

        <div className="mt-2">
          <p className="md:w-[67%] lg:w-[95vh] text-gray-600 text-xl">
            <strong>Instructions:</strong> For the following items, put a check
            mark(check) on the column that best describes your satisfaction
            level.
          </p>
        </div>

        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            1. I am satisfied with the service that availed.
          </h1>

          <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-medium rounded bg-yellow-100 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="q1a"
                name="sa1"
                onChange={(e)=>setSaone(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q1b"
                name="sa1"
                onChange={(e)=>setSaone(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q1c"
                name="sa1"
                onChange={(e)=>setSaone(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Neither Agree nor Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q1d"
                name="sa1"
                onChange={(e)=>setSaone(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q1e"
                name="sa1"
                onChange={(e)=>setSaone(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q1f"
                name="sa1"
                onChange={(e)=>setSaone(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Not aplicable</label>
            </li>
          </ul>
        </div>

        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            2. I spent an acceptable amount of time for my transaction.
          </h1>

          <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-medium rounded bg-yellow-100 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="q2a"
                name="sa2"
                onChange={(e)=>setSatwo(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q2b"
                name="sa2"
                onChange={(e)=>setSatwo(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q2c"
                name="sa2"
                onChange={(e)=>setSatwo(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Neither Agree nor Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q2d"
                name="sa2"
                onChange={(e)=>setSatwo(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q2e"
                name="sa2"
                onChange={(e)=>setSatwo(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q2f"
                name="sa2"
                onChange={(e)=>setSatwo(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Not aplicable</label>
            </li>
          </ul>
        </div>

        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            3. The office accurately informed me and followed the transaction's
            requirements and steps.{" "}
          </h1>

          <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-medium rounded bg-yellow-100 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="q3a"
                name="sa3"
                onChange={(e)=>setSathree(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q3b"
                name="sa3"
                onChange={(e)=>setSathree(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q3c"
                name="sa3"
                onChange={(e)=>setSathree(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Neither Agree nor Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q3d"
                name="sa3"
                onChange={(e)=>setSathree(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q3e"
                name="sa3"
                onChange={(e)=>setSathree(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q3f"
                name="sa3"
                onChange={(e)=>setSathree(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Not aplicable</label>
            </li>
          </ul>
        </div>

        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            4. My online transaction (including steps and payment) was simple
            and convenient.
          </h1>

          <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-medium rounded bg-yellow-100 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="q4a"
                name="sa4"
                onChange={(e)=>setSafour(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q4b"
                name="sa4"
                onChange={(e)=>setSafour(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q4c"
                name="s42"
                onChange={(e)=>setSafour(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Neither Agree nor Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q4d"
                name="sa4"
                onChange={(e)=>setSafour(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q4e"
                name="sa4"
                onChange={(e)=>setSafour(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q4f"
                name="sa4"
                onChange={(e)=>setSafour(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Not aplicable</label>
            </li>
          </ul>
        </div>

        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            5. I easily found information about my transaction from the office
            or its website.
          </h1>

          <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-medium rounded bg-yellow-100 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="q5a"
                name="sa5"
                onChange={(e)=>setSafive(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q5b"
                name="sa5"
                onChange={(e)=>setSafive(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q5c"
                name="sa5"
                onChange={(e)=>setSafive(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Neither Agree nor Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q5d"
                name="sa5"
                onChange={(e)=>setSafive(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q5e"
                name="sa5"
                onChange={(e)=>setSafive(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q5f"
                name="sa5"
                onChange={(e)=>setSafive(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Not aplicable</label>
            </li>
          </ul>
        </div>

        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            6. I paid an acceptable amount of fees for my transaction.
          </h1>

          <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-medium rounded bg-yellow-100 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="q6a"
                name="sa6"
                onChange={(e)=>setSasix(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q6b"
                name="sa6"
                onChange={(e)=>setSasix(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q6c"
                name="sa6"
                onChange={(e)=>setSasix(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Neither Agree nor Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q6d"
                name="sa6"
                onChange={(e)=>setSasix(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q6e"
                name="sa6"
                onChange={(e)=>setSasix(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q6f"
                name="sa6"
                onChange={(e)=>setSasix(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Not aplicable</label>
            </li>
          </ul>
        </div>

        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            7. I am confident that my online transaction was secure.
          </h1>

          <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-medium rounded bg-yellow-100 text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="q7a"
                name="sa7"
                onChange={(e)=>setSaseven(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q7b"
                name="sa7"
                onChange={(e)=>setSaseven(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q7c"
                name="sa7"
                onChange={(e)=>setSaseven(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Neither Agree nor Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q7d"
                name="sa7"
                onChange={(e)=>setSaseven(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q7e"
                name="sa7"
                onChange={(e)=>setSaseven(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q7f"
                name="sa7"
                onChange={(e)=>setSaseven(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Not aplicable</label>
            </li>
          </ul>
        </div>

        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 ">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            8. The office's online support was available, or (if asked
            questions) was quick to respond.
          </h1>

          <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-medium rounded bg-white text-black md:w-[67%] lg:w-[95vh] uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="q8a"
                name="sa8"
                onChange={(e)=>setSaeight(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-white-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q8b"
                name="sa8"
                onChange={(e)=>setSaeight(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q8c"
                name="sa8"
                onChange={(e)=>setSaeight(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Neither Agree nor Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q8d"
                name="sa8"
                onChange={(e)=>setSaeight(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q8e"
                name="sa8"
                onChange={(e)=>setSaeight(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q8f"
                name="sa8"
                onChange={(e)=>setSaeight(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Not aplicable</label>
            </li>
          </ul>
        </div>

        <div className="lg:flex flex-col md:w-[67%] lg:w-[97vh] px-2 py-2 mb-2 border-4 border-gray-500 bg-yellow-300 rounded">
          <h1 className="mt-2 font-large text-black font-bold text-xl uppercase">
            9. I got what I needed from the government office.
          </h1>

          <ul className="lg:flex lg:space-x-5 px-3 py-2 text-center font-medium rounded bg-white text-black md:w-[67%] lg:w-[95vh] mb-2 uppercase">
            <li className="flex items-center">
              <input
                type="radio"
                value="q9a"
                name="sa9"
                onChange={(e)=>setSanine(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q9b"
                name="sa9"
                onChange={(e)=>setSanine(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q9c"
                name="sa9"
                onChange={(e)=>setSanine(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Neither Agree nor Disagree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q9d"
                name="sa9"
                onChange={(e)=>setSanine(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q9e"
                name="sa9"
                onChange={(e)=>setSanine(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Strongly Agree</label>
            </li>
            <li className="flex items-center">
              <input
                type="radio"
                value="q9f"
                name="sa9"
                onChange={(e)=>setSanine(e.target.value)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-1">Not aplicable</label>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <h5 className="mt-2 font-bold text-xl">EMPLOYEE INFORMATION:</h5>
          </div>
          <div className="flex flex-col">
            <div>
              <input
                className="bg-gray-200 w-full md:w-[67%] lg:w-[80%] lg:ml-20 py-2 px-2 mb-2 mt-2 rounded"
                type="text"
                placeholder="Full Name here.."
                value={fullname}
                name="fullname"
                onChange={(e)=>setFullname(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h5 className="mt-2 font-bold text-xl">CSS-CODE:</h5>
          </div>
          <div className="flex flex-col">
            <div>
              <input
                className=" bg-gray-200 w-full md:w-[67%] lg:w-[80%] lg:ml-20 py-2 px-2 mb-2 mt-2 rounded"
                type="text"
                value={csscode}
                name="csscode"
                onChange={(e)=>setCsscode(e.target.value)}
                placeholder="Enter code here..."
              />
            </div>
            <div>
              <button 
                className="w-full md:w-[67%] lg:w-[80%] lg:ml-20 text-xl bg-red-500 py-2 px-2 mb-5 font-semibold text-white hover:bg-red-700 rounded"
                type="submit"
                onClick={handleData}
              >
                SUBMIT DATA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
