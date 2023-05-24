import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi2";
import { GiWorld } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import { TiLocationOutline } from "react-icons/ti";
import { BsHouseDoor } from "react-icons/bs";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    address: "",
    country: "",
  });

  const [selectedCountryLabel, setSelectedCountryLabel] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [inputError, setInputError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name == "name" && value.length < 2) {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
      setInputError("Name must have at least 2 characters");
    } else if (name == "address" && value.length < 5) {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
      setInputError("Address must have at least 5 characters");
    } else if (name === "phone") {
      const formattedValue = value.replace(/[^0-9+()]/g, "");
      setFormData((prevState) => ({ ...prevState, [name]: formattedValue }));
    } else if (name == "country") {
      const selectedIndex = event.target.options.selectedIndex;
      const selectedLabel = event.target.options[selectedIndex].text;
      setSelectedCountryLabel(selectedLabel);
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
      setInputError(null);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    // <>
    //   <button
    //     className='{isDark ? "Disable" : "Enable"} p-2'
    //     onClick={handleToggleDarkMode}
    //   >
    //     <i>
    //       {isDark ? <FaMoon/> : <FaSun/>}
    //     </i>

    //   </button>
    //   <BrowserRouter>
    //     <div className="container mx-auto shadow-lg shadow-black rounded-lg pb-20 w-screen ">
    //       <Header />

    //       <hr className="border-t border-black dark:border-slate-500 border-solid" />

    //       <div className="flex items-center justify-center h-full">
    //         <div className="p-1 sm:p-6 md:p-8 lg:p-10 w-2/5">
    //           <SideBar />
    //         </div>

    //         <div className=" p-1 sm:p-6 md:p-8 lg:p-10 w-3/5">
    //           <Routes>
    //             <Route index element={<Name />} />
    //             <Route path="2" element={<City />} />
    //             <Route path="3" element={<Tel />} />
    //             <Route path="4" element={<Address />} />
    //             <Route path="5" element={<Country />} />
    //             <Route path='finish' element={<Finish />}/>
    //           </Routes>
    //         </div>
    //       </div>
    //     </div>
    //   </BrowserRouter>
    // </>
    <>
      <Router>
        <div>
          <h2 className="font-bold">Wilson</h2>
          <button
            className='{isDark ? "Disable" : "Enable"} p-1 float-right'
            onClick={handleToggleDarkMode}
          >
            <i>{isDark ? <FaMoon /> : <FaSun />}</i>
          </button>
        </div>

        <div className="container mx-auto shadow-lg shadow-black rounded-lg w-screen pb-20">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <hr className="border-t border-black dark:border-slate-500 border-solid" />
                  <div className="flex items-center justify-center h-full">
                    <div className="p-1 sm:p-6 md:p-8 lg:p-10 w-2/5">
                      <ul className="flex flex-col sm:items-end items-center justify-between relative text-right space-y-5">
                        <li className="flex items-center justify-between md:gap-3">
                          <p className="hidden md:block font-bold">
                            Your Name <br />
                            <span className="lg:text-sm text-xs font-light">
                              First Middle Last
                            </span>
                          </p>
                          <div className="flex items-center justify-between space-x-4">
                            <i
                              className={`icon bg-gray-600 p-3 rounded-full flex items-end ${
                                currentStep === 1 ? "active" : ""
                              }`}
                            >
                              <HiOutlineUser />
                            </i>

                            <div
                              className={`w-1 rounded-full p-1 bg-gray-600 dark:bg-blue-950 border border-solid border-black dark:border-slate-400 dot ${
                                currentStep == 1 ? "active" : ""
                              }`}
                            ></div>
                          </div>
                        </li>

                        <span className="h-[90%] border border-slate-700 border-solid flex-end absolute sm:right-[44px] vs:right-[83px] xs:right-[72px] right-[64px] -z-10"></span>

                        <li className="flex items-center justify-between md:gap-3">
                          <p className="hidden md:block font-bold">
                            City <br />
                            Location
                          </p>
                          <div className="flex items-center justify-between space-x-4">
                            <i
                              className={`bg-gray-600 p-3 rounded-full flex items-end icon ${
                                currentStep === 2 ? "active" : ""
                              }`}
                            >
                              <TiLocationOutline />
                            </i>

                            <div
                              className={`w-1 rounded-full p-1 bg-gray-600 dark:bg-blue-950 border border-solid border-black dark:border-slate-400 dot ${
                                currentStep == 2 ? "active" : ""
                              }`}
                            ></div>
                          </div>
                        </li>

                        <li className="flex items-center justify-between md:gap-3">
                          <p className="hidden md:block font-bold">
                            Telephone <br />
                            Number
                          </p>
                          <div className="flex items-center justify-between space-x-4">
                            <i
                              className={`bg-gray-600 p-3 rounded-full flex items-end icon ${
                                currentStep === 3 ? "active" : ""
                              }`}
                            >
                              <BiPhoneCall />
                            </i>

                            <div
                              className={`w-1 rounded-full p-1 bg-gray-600 dark:bg-blue-950 border border-solid border-black dark:border-slate-400 dot ${
                                currentStep == 3 ? "active" : ""
                              }`}
                            ></div>
                          </div>
                        </li>

                        <li className="flex items-center justify-between md:gap-3">
                          <p className="hidden md:block font-bold">
                            House <br />
                            Address
                          </p>
                          <div className="flex items-center justify-between space-x-4">
                            <i
                              className={`bg-gray-600 p-3 rounded-full flex items-end icon ${
                                currentStep === 4 ? "active" : ""
                              }`}
                            >
                              <BsHouseDoor />
                            </i>

                            <div
                              className={`w-1 rounded-full p-1 bg-gray-600 dark:bg-blue-950 border border-solid border-black dark:border-slate-400 dot ${
                                currentStep == 4 ? "active" : ""
                              }`}
                            ></div>
                          </div>
                        </li>

                        <li className="flex items-center justify-between md:gap-3">
                          <p className="hidden md:block font-bold">
                            Country of <br />
                            Residence
                          </p>
                          <div className="flex items-center justify-between space-x-4">
                            <i
                              className={`bg-gray-600 p-3 rounded-full flex items-end icon ${
                                currentStep === 5 ? "active" : ""
                              }`}
                            >
                              <GiWorld />
                            </i>

                            <div
                              className={`w-1 rounded-full p-1 bg-gray-600 dark:bg-blue-950 border border-solid border-black dark:border-slate-400 dot ${
                                currentStep == 5 ? "active" : ""
                              }`}
                            ></div>
                          </div>
                        </li>

                        <span className="lg:h-[150%] h-[133%] sm:h-[147%] md:h-[143%] border-black dark:border-slate-500 w-px border-l block absolute lg:-top-[104px] -top-[80px] sm:-top-[88px] md:-top-[95px] sm:right-[5px] vs:right-[43px] xs:right-[32px] right-[23px] -z-10"></span>
                      </ul>
                    </div>
                    <div className="p-1 sm:p-6 md:p-8 lg:p-10 w-3/5">
                      {currentStep === 1 && (
                        <div className="flex flex-col justify-between items-start w-full">
                          <div className="">
                            <p className="text-sm">Step {currentStep}/5</p>
                            <h2 className="font-bold text-lg md:text-xl">
                              Lets Start With Your Name
                            </h2>
                            <p className="text-sm">
                              Please fill the details below
                            </p>
                          </div>
                          <span className="border border-solid dark:border-slate-500 border-black w-full my-5"></span>

                          <label className="w-full">
                            Enter your Name
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="focus:outline-none border-blue-500 border-solid border-2 w-full rounded-xl md:py-4 py-2 text-black block"
                              required
                            />
                          </label>
                          {inputError && (
                            <div className="text-red-500 text-xs sm:text-sm md:text-base">
                              {inputError}
                            </div>
                          )}
                        </div>
                      )}
                      {currentStep === 2 && (
                        <div className="flex flex-col justify-between items-start w-full">
                          <div className="">
                            <p className="text-sm">Step {currentStep}/5</p>
                            <h2 className="font-bold text-lg md:text-xl">
                              Next, Where do you Stay?
                            </h2>
                            <p className="text-sm">
                              Please fill the details below
                            </p>
                          </div>
                          <span className="border border-solid dark:border-slate-500 border-black w-full my-5"></span>

                          <label className="w-full">
                            Enter your Location
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              className="focus:outline-none border-blue-500 border-solid border-2 w-full rounded-xl md:py-4 py-2 text-black block"
                              required
                            />
                          </label>
                        </div>
                      )}
                      {currentStep === 3 && (
                        <div className="flex flex-col justify-between items-start w-full">
                          <div>
                            <p className="text-sm">Step {currentStep}/5</p>
                            <h2 className="font-extrabold sm:font-bold md:text-xl sm:text-lg text-md">
                              Next, Input your Telephone Number
                            </h2>
                            <p className="text-sm">
                              Please fill the details below
                            </p>
                          </div>
                          <span className="border border-solid dark:border-slate-500 border-black w-full my-5"></span>
                          <label className="w-full">
                            Enter your Telephone Number
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="focus:outline-none border-blue-500 border-solid border-2 w-full rounded-xl md:py-4 py-2 text-black block"
                              required
                            />
                          </label>
                        </div>
                      )}
                      {currentStep === 4 && (
                        <div className="flex flex-col justify-between items-start w-full">
                          <div>
                            <p className="text-sm">Step {currentStep}/5</p>
                            <h2 className="font-bold md:text-xl text-lg">
                              Then, your Address
                            </h2>
                            <p className="text-sm">
                              Please fill the details below
                            </p>
                          </div>
                          <span className="border border-solid dark:border-slate-500 border-black w-full my-5"></span>
                          <label className="w-full">
                            Enter your Address
                            <input
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className="focus:outline-none border-blue-500 border-solid border-2 w-full rounded-xl md:py-4 py-2 text-black block"
                              required
                            />
                          </label>
                          {inputError && (
                            <div className="text-red-500 text-xs sm:text-sm md:text-base">
                              {inputError}
                            </div>
                          )}
                        </div>
                      )}
                      {currentStep === 5 && (
                        <div className="flex flex-col justify-between items-start w-full">
                          <div>
                            <p className="text-sm">Step {currentStep}/5</p>
                            <h2 className="font-bold md:text-xl text-lg">
                              And Finally, Which Country do you reside in?
                            </h2>
                            <p className="text-sm">
                              Please fill the details below
                            </p>
                          </div>

                          <span className="border border-solid border-black dark:border-slate-500 w-full my-5"></span>
                          <label className="w-full">
                            Country
                            <select
                              name="country"
                              //class="form-control"
                              id="country"
                              className="w-full border-blue-500 border-2 border-solid md:py-4 py-2 rounded-xl focus:outline-none text-black"
                              value={formData.country}
                              onChange={handleInputChange}
                            >
                              <option value="0" label="Select a Country ... ">
                                Select a Country ...{" "}
                              </option>
                              <optgroup
                                id="country-optgroup-Africa"
                                label="Africa"
                              >
                                <option value="DZ" label="Algeria">
                                  Algeria
                                </option>
                                <option value="AO" label="Angola">
                                  Angola
                                </option>
                                <option value="BJ" label="Benin">
                                  Benin
                                </option>
                                <option value="BW" label="Botswana">
                                  Botswana
                                </option>
                                <option value="BF" label="Burkina Faso">
                                  Burkina Faso
                                </option>
                                <option value="BI" label="Burundi">
                                  Burundi
                                </option>
                                <option value="CM" label="Cameroon">
                                  Cameroon
                                </option>
                                <option value="CV" label="Cape Verde">
                                  Cape Verde
                                </option>
                                <option
                                  value="CF"
                                  label="Central African Republic"
                                >
                                  Central African Republic
                                </option>
                                <option value="TD" label="Chad">
                                  Chad
                                </option>
                                <option value="KM" label="Comoros">
                                  Comoros
                                </option>
                                <option value="CI" label="Côte d’Ivoire">
                                  Côte d’Ivoire
                                </option>
                                <option
                                  value="CD"
                                  label=" Democratic Republic of Congo"
                                >
                                  Democratic Republic of Congo
                                </option>
                                <option value="DJ" label="Djibouti">
                                  Djibouti
                                </option>
                                <option value="EG" label="Egypt">
                                  Egypt
                                </option>
                                <option value="GQ" label="Equatorial Guinea">
                                  Equatorial Guinea
                                </option>
                                <option value="ER" label="Eritrea">
                                  Eritrea
                                </option>
                                <option value="ET" label="Ethiopia">
                                  Ethiopia
                                </option>
                                <option value="GA" label="Gabon">
                                  Gabon
                                </option>
                                <option value="GM" label="Gambia">
                                  Gambia
                                </option>
                                <option value="GH" label="Ghana">
                                  Ghana
                                </option>
                                <option value="GN" label="Guinea">
                                  Guinea
                                </option>
                                <option value="GW" label="Guinea-Bissau">
                                  Guinea-Bissau
                                </option>
                                <option value="KE" label="Kenya">
                                  Kenya
                                </option>
                                <option value="LS" label="Lesotho">
                                  Lesotho
                                </option>
                                <option value="LR" label="Liberia">
                                  Liberia
                                </option>
                                <option value="LY" label="Libya">
                                  Libya
                                </option>
                                <option value="MG" label="Madagascar">
                                  Madagascar
                                </option>
                                <option value="MW" label="Malawi">
                                  Malawi
                                </option>
                                <option value="ML" label="Mali">
                                  Mali
                                </option>
                                <option value="MR" label="Mauritania">
                                  Mauritania
                                </option>
                                <option value="MU" label="Mauritius">
                                  Mauritius
                                </option>
                                <option value="YT" label="Mayotte">
                                  Mayotte
                                </option>
                                <option value="MA" label="Morocco">
                                  Morocco
                                </option>
                                <option value="MZ" label="Mozambique">
                                  Mozambique
                                </option>
                                <option value="NA" label="Namibia">
                                  Namibia
                                </option>
                                <option value="NE" label="Niger">
                                  Niger
                                </option>
                                <option value="NG" label="Nigeria">
                                  Nigeria
                                </option>
                                <option value="RE" label="Réunion">
                                  Réunion
                                </option>
                                <option value="RW" label="Rwanda">
                                  Rwanda
                                </option>
                                <option
                                  value="CG"
                                  label="Republic of the Congo"
                                >
                                  Republic of the Congo
                                </option>
                                <option value="SH" label="Saint Helena">
                                  Saint Helena
                                </option>
                                <option value="SN" label="Senegal">
                                  Senegal
                                </option>
                                <option value="SC" label="Seychelles">
                                  Seychelles
                                </option>
                                <option value="SL" label="Sierra Leone">
                                  Sierra Leone
                                </option>
                                <option value="SO" label="Somalia">
                                  Somalia
                                </option>
                                <option value="ZA" label="South Africa">
                                  South Africa
                                </option>
                                <option value="SD" label="Sudan">
                                  Sudan
                                </option>
                                <option value="SZ" label="Swaziland">
                                  Swaziland
                                </option>
                                <option
                                  value="ST"
                                  label="São Tomé and Príncipe"
                                >
                                  São Tomé and Príncipe
                                </option>
                                <option value="TZ" label="Tanzania">
                                  Tanzania
                                </option>
                                <option value="TG" label="Togo">
                                  Togo
                                </option>
                                <option value="TN" label="Tunisia">
                                  Tunisia
                                </option>
                                <option value="UG" label="Uganda">
                                  Uganda
                                </option>
                                <option value="EH" label="Western Sahara">
                                  Western Sahara
                                </option>
                                <option value="ZM" label="Zambia">
                                  Zambia
                                </option>
                                <option value="ZW" label="Zimbabwe">
                                  Zimbabwe
                                </option>
                              </optgroup>
                              <optgroup
                                id="country-optgroup-Americas"
                                label="Americas"
                              >
                                <option value="AI" label="Anguilla">
                                  Anguilla
                                </option>
                                <option value="AG" label="Antigua and Barbuda">
                                  Antigua and Barbuda
                                </option>
                                <option value="AR" label="Argentina">
                                  Argentina
                                </option>
                                <option value="AW" label="Aruba">
                                  Aruba
                                </option>
                                <option value="BS" label="Bahamas">
                                  Bahamas
                                </option>
                                <option value="BB" label="Barbados">
                                  Barbados
                                </option>
                                <option value="BZ" label="Belize">
                                  Belize
                                </option>
                                <option value="BM" label="Bermuda">
                                  Bermuda
                                </option>
                                <option value="BO" label="Bolivia">
                                  Bolivia
                                </option>
                                <option value="BR" label="Brazil">
                                  Brazil
                                </option>
                                <option
                                  value="VG"
                                  label="British Virgin Islands"
                                >
                                  British Virgin Islands
                                </option>
                                <option value="CA" label="Canada">
                                  Canada
                                </option>
                                <option value="KY" label="Cayman Islands">
                                  Cayman Islands
                                </option>
                                <option value="CL" label="Chile">
                                  Chile
                                </option>
                                <option value="CO" label="Colombia">
                                  Colombia
                                </option>
                                <option value="CR" label="Costa Rica">
                                  Costa Rica
                                </option>
                                <option value="CU" label="Cuba">
                                  Cuba
                                </option>
                                <option value="DM" label="Dominica">
                                  Dominica
                                </option>
                                <option value="DO" label="Dominican Republic">
                                  Dominican Republic
                                </option>
                                <option value="EC" label="Ecuador">
                                  Ecuador
                                </option>
                                <option value="SV" label="El Salvador">
                                  El Salvador
                                </option>
                                <option value="FK" label="Falkland Islands">
                                  Falkland Islands
                                </option>
                                <option value="GF" label="French Guiana">
                                  French Guiana
                                </option>
                                <option value="GL" label="Greenland">
                                  Greenland
                                </option>
                                <option value="GD" label="Grenada">
                                  Grenada
                                </option>
                                <option value="GP" label="Guadeloupe">
                                  Guadeloupe
                                </option>
                                <option value="GT" label="Guatemala">
                                  Guatemala
                                </option>
                                <option value="GY" label="Guyana">
                                  Guyana
                                </option>
                                <option value="HT" label="Haiti">
                                  Haiti
                                </option>
                                <option value="HN" label="Honduras">
                                  Honduras
                                </option>
                                <option value="JM" label="Jamaica">
                                  Jamaica
                                </option>
                                <option value="MQ" label="Martinique">
                                  Martinique
                                </option>
                                <option value="MX" label="Mexico">
                                  Mexico
                                </option>
                                <option value="MS" label="Montserrat">
                                  Montserrat
                                </option>
                                <option value="AN" label="Netherlands Antilles">
                                  Netherlands Antilles
                                </option>
                                <option value="NI" label="Nicaragua">
                                  Nicaragua
                                </option>
                                <option value="PA" label="Panama">
                                  Panama
                                </option>
                                <option value="PY" label="Paraguay">
                                  Paraguay
                                </option>
                                <option value="PE" label="Peru">
                                  Peru
                                </option>
                                <option value="PR" label="Puerto Rico">
                                  Puerto Rico
                                </option>
                                <option value="BL" label="Saint Barthélemy">
                                  Saint Barthélemy
                                </option>
                                <option
                                  value="KN"
                                  label="Saint Kitts and Nevis"
                                >
                                  Saint Kitts and Nevis
                                </option>
                                <option value="LC" label="Saint Lucia">
                                  Saint Lucia
                                </option>
                                <option value="MF" label="Saint Martin">
                                  Saint Martin
                                </option>
                                <option
                                  value="PM"
                                  label="Saint Pierre and Miquelon"
                                >
                                  Saint Pierre and Miquelon
                                </option>
                                <option
                                  value="VC"
                                  label="Saint Vincent and the Grenadines"
                                >
                                  Saint Vincent and the Grenadines
                                </option>
                                <option value="SR" label="Suriname">
                                  Suriname
                                </option>
                                <option value="TT" label="Trinidad and Tobago">
                                  Trinidad and Tobago
                                </option>
                                <option
                                  value="TC"
                                  label="Turks and Caicos Islands"
                                >
                                  Turks and Caicos Islands
                                </option>
                                <option value="VI" label="U.S. Virgin Islands">
                                  U.S. Virgin Islands
                                </option>
                                <option value="US" label="United States">
                                  United States
                                </option>
                                <option value="UY" label="Uruguay">
                                  Uruguay
                                </option>
                                <option value="VE" label="Venezuela">
                                  Venezuela
                                </option>
                              </optgroup>
                              <optgroup id="country-optgroup-Asia" label="Asia">
                                <option value="AF" label="Afghanistan">
                                  Afghanistan
                                </option>
                                <option value="AM" label="Armenia">
                                  Armenia
                                </option>
                                <option value="AZ" label="Azerbaijan">
                                  Azerbaijan
                                </option>
                                <option value="BH" label="Bahrain">
                                  Bahrain
                                </option>
                                <option value="BD" label="Bangladesh">
                                  Bangladesh
                                </option>
                                <option value="BT" label="Bhutan">
                                  Bhutan
                                </option>
                                <option value="BN" label="Brunei">
                                  Brunei
                                </option>
                                <option value="KH" label="Cambodia">
                                  Cambodia
                                </option>
                                <option value="CN" label="China">
                                  China
                                </option>
                                <option value="GE" label="Georgia">
                                  Georgia
                                </option>
                                <option value="HK" label="Hong Kong SAR China">
                                  Hong Kong SAR China
                                </option>
                                <option value="IN" label="India">
                                  India
                                </option>
                                <option value="ID" label="Indonesia">
                                  Indonesia
                                </option>
                                <option value="IR" label="Iran">
                                  Iran
                                </option>
                                <option value="IQ" label="Iraq">
                                  Iraq
                                </option>
                                <option value="IL" label="Israel">
                                  Israel
                                </option>
                                <option value="JP" label="Japan">
                                  Japan
                                </option>
                                <option value="JO" label="Jordan">
                                  Jordan
                                </option>
                                <option value="KZ" label="Kazakhstan">
                                  Kazakhstan
                                </option>
                                <option value="KW" label="Kuwait">
                                  Kuwait
                                </option>
                                <option value="KG" label="Kyrgyzstan">
                                  Kyrgyzstan
                                </option>
                                <option value="LA" label="Laos">
                                  Laos
                                </option>
                                <option value="LB" label="Lebanon">
                                  Lebanon
                                </option>
                                <option value="MO" label="Macau SAR China">
                                  Macau SAR China
                                </option>
                                <option value="MY" label="Malaysia">
                                  Malaysia
                                </option>
                                <option value="MV" label="Maldives">
                                  Maldives
                                </option>
                                <option value="MN" label="Mongolia">
                                  Mongolia
                                </option>
                                <option value="MM" label="Myanmar [Burma]">
                                  Myanmar [Burma]
                                </option>
                                <option value="NP" label="Nepal">
                                  Nepal
                                </option>
                                <option value="NT" label="Neutral Zone">
                                  Neutral Zone
                                </option>
                                <option value="KP" label="North Korea">
                                  North Korea
                                </option>
                                <option value="OM" label="Oman">
                                  Oman
                                </option>
                                <option value="PK" label="Pakistan">
                                  Pakistan
                                </option>
                                <option
                                  value="PS"
                                  label="Palestinian Territories"
                                >
                                  Palestinian Territories
                                </option>
                                <option
                                  value="YD"
                                  label="People's Democratic Republic of Yemen"
                                >
                                  People's Democratic Republic of Yemen
                                </option>
                                <option value="PH" label="Philippines">
                                  Philippines
                                </option>
                                <option value="QA" label="Qatar">
                                  Qatar
                                </option>
                                <option value="SA" label="Saudi Arabia">
                                  Saudi Arabia
                                </option>
                                <option value="SG" label="Singapore">
                                  Singapore
                                </option>
                                <option value="KR" label="South Korea">
                                  South Korea
                                </option>
                                <option value="LK" label="Sri Lanka">
                                  Sri Lanka
                                </option>
                                <option value="SY" label="Syria">
                                  Syria
                                </option>
                                <option value="TW" label="Taiwan">
                                  Taiwan
                                </option>
                                <option value="TJ" label="Tajikistan">
                                  Tajikistan
                                </option>
                                <option value="TH" label="Thailand">
                                  Thailand
                                </option>
                                <option value="TL" label="Timor-Leste">
                                  Timor-Leste
                                </option>
                                <option value="TR" label="Turkey">
                                  Turkey
                                </option>
                                <option value="TM" label="Turkmenistan">
                                  Turkmenistan
                                </option>
                                <option value="AE" label="United Arab Emirates">
                                  United Arab Emirates
                                </option>
                                <option value="UZ" label="Uzbekistan">
                                  Uzbekistan
                                </option>
                                <option value="VN" label="Vietnam">
                                  Vietnam
                                </option>
                                <option value="YE" label="Yemen">
                                  Yemen
                                </option>
                              </optgroup>
                              <optgroup
                                id="country-optgroup-Europe"
                                label="Europe"
                              >
                                <option value="AL" label="Albania">
                                  Albania
                                </option>
                                <option value="AD" label="Andorra">
                                  Andorra
                                </option>
                                <option value="AT" label="Austria">
                                  Austria
                                </option>
                                <option value="BY" label="Belarus">
                                  Belarus
                                </option>
                                <option value="BE" label="Belgium">
                                  Belgium
                                </option>
                                <option
                                  value="BA"
                                  label="Bosnia and Herzegovina"
                                >
                                  Bosnia and Herzegovina
                                </option>
                                <option value="BG" label="Bulgaria">
                                  Bulgaria
                                </option>
                                <option value="HR" label="Croatia">
                                  Croatia
                                </option>
                                <option value="CY" label="Cyprus">
                                  Cyprus
                                </option>
                                <option value="CZ" label="Czech Republic">
                                  Czech Republic
                                </option>
                                <option value="DK" label="Denmark">
                                  Denmark
                                </option>
                                <option value="DD" label="East Germany">
                                  East Germany
                                </option>
                                <option value="EE" label="Estonia">
                                  Estonia
                                </option>
                                <option value="FO" label="Faroe Islands">
                                  Faroe Islands
                                </option>
                                <option value="FI" label="Finland">
                                  Finland
                                </option>
                                <option value="FR" label="France">
                                  France
                                </option>
                                <option value="DE" label="Germany">
                                  Germany
                                </option>
                                <option value="GI" label="Gibraltar">
                                  Gibraltar
                                </option>
                                <option value="GR" label="Greece">
                                  Greece
                                </option>
                                <option value="GG" label="Guernsey">
                                  Guernsey
                                </option>
                                <option value="HU" label="Hungary">
                                  Hungary
                                </option>
                                <option value="IS" label="Iceland">
                                  Iceland
                                </option>
                                <option value="IE" label="Ireland">
                                  Ireland
                                </option>
                                <option value="IM" label="Isle of Man">
                                  Isle of Man
                                </option>
                                <option value="IT" label="Italy">
                                  Italy
                                </option>
                                <option value="JE" label="Jersey">
                                  Jersey
                                </option>
                                <option value="LV" label="Latvia">
                                  Latvia
                                </option>
                                <option value="LI" label="Liechtenstein">
                                  Liechtenstein
                                </option>
                                <option value="LT" label="Lithuania">
                                  Lithuania
                                </option>
                                <option value="LU" label="Luxembourg">
                                  Luxembourg
                                </option>
                                <option value="MK" label="Macedonia">
                                  Macedonia
                                </option>
                                <option value="MT" label="Malta">
                                  Malta
                                </option>
                                <option value="FX" label="Metropolitan France">
                                  Metropolitan France
                                </option>
                                <option value="MD" label="Moldova">
                                  Moldova
                                </option>
                                <option value="MC" label="Monaco">
                                  Monaco
                                </option>
                                <option value="ME" label="Montenegro">
                                  Montenegro
                                </option>
                                <option value="NL" label="Netherlands">
                                  Netherlands
                                </option>
                                <option value="NO" label="Norway">
                                  Norway
                                </option>
                                <option value="PL" label="Poland">
                                  Poland
                                </option>
                                <option value="PT" label="Portugal">
                                  Portugal
                                </option>
                                <option value="RO" label="Romania">
                                  Romania
                                </option>
                                <option value="RU" label="Russia">
                                  Russia
                                </option>
                                <option value="SM" label="San Marino">
                                  San Marino
                                </option>
                                <option value="RS" label="Serbia">
                                  Serbia
                                </option>
                                <option
                                  value="CS"
                                  label="Serbia and Montenegro"
                                >
                                  Serbia and Montenegro
                                </option>
                                <option value="SK" label="Slovakia">
                                  Slovakia
                                </option>
                                <option value="SI" label="Slovenia">
                                  Slovenia
                                </option>
                                <option value="ES" label="Spain">
                                  Spain
                                </option>
                                <option
                                  value="SJ"
                                  label="Svalbard and Jan Mayen"
                                >
                                  Svalbard and Jan Mayen
                                </option>
                                <option value="SE" label="Sweden">
                                  Sweden
                                </option>
                                <option value="CH" label="Switzerland">
                                  Switzerland
                                </option>
                                <option value="UA" label="Ukraine">
                                  Ukraine
                                </option>
                                <option
                                  value="SU"
                                  label="Union of Soviet Socialist Republics"
                                >
                                  Union of Soviet Socialist Republics
                                </option>
                                <option value="GB" label="United Kingdom">
                                  United Kingdom
                                </option>
                                <option value="VA" label="Vatican City">
                                  Vatican City
                                </option>
                                <option value="AX" label="Åland Islands">
                                  Åland Islands
                                </option>
                              </optgroup>
                              <optgroup
                                id="country-optgroup-Oceania"
                                label="Oceania"
                              >
                                <option value="AS" label="American Samoa">
                                  American Samoa
                                </option>
                                <option value="AU" label="Australia">
                                  Australia
                                </option>
                                <option value="BV" label="Bouvet Island">
                                  Bouvet Island
                                </option>
                                <option
                                  value="IO"
                                  label="British Indian Ocean Territory"
                                >
                                  British Indian Ocean Territory
                                </option>
                                <option value="CX" label="Christmas Island">
                                  Christmas Island
                                </option>
                                <option
                                  value="CC"
                                  label="Cocos [Keeling] Islands"
                                >
                                  Cocos [Keeling] Islands
                                </option>
                                <option value="CK" label="Cook Islands">
                                  Cook Islands
                                </option>
                                <option value="FJ" label="Fiji">
                                  Fiji
                                </option>
                                <option value="PF" label="French Polynesia">
                                  French Polynesia
                                </option>
                                <option
                                  value="TF"
                                  label="French Southern Territories"
                                >
                                  French Southern Territories
                                </option>
                                <option value="GU" label="Guam">
                                  Guam
                                </option>
                                <option
                                  value="HM"
                                  label="Heard Island and McDonald Islands"
                                >
                                  Heard Island and McDonald Islands
                                </option>
                                <option value="KI" label="Kiribati">
                                  Kiribati
                                </option>
                                <option value="MH" label="Marshall Islands">
                                  Marshall Islands
                                </option>
                                <option value="FM" label="Micronesia">
                                  Micronesia
                                </option>
                                <option value="NR" label="Nauru">
                                  Nauru
                                </option>
                                <option value="NC" label="New Caledonia">
                                  New Caledonia
                                </option>
                                <option value="NZ" label="New Zealand">
                                  New Zealand
                                </option>
                                <option value="NU" label="Niue">
                                  Niue
                                </option>
                                <option value="NF" label="Norfolk Island">
                                  Norfolk Island
                                </option>
                                <option
                                  value="MP"
                                  label="Northern Mariana Islands"
                                >
                                  Northern Mariana Islands
                                </option>
                                <option value="PW" label="Palau">
                                  Palau
                                </option>
                                <option value="PG" label="Papua New Guinea">
                                  Papua New Guinea
                                </option>
                                <option value="PN" label="Pitcairn Islands">
                                  Pitcairn Islands
                                </option>
                                <option value="WS" label="Samoa">
                                  Samoa
                                </option>
                                <option value="SB" label="Solomon Islands">
                                  Solomon Islands
                                </option>
                                <option
                                  value="GS"
                                  label="South Georgia and the South Sandwich Islands"
                                >
                                  South Georgia and the South Sandwich Islands
                                </option>
                                <option value="TK" label="Tokelau">
                                  Tokelau
                                </option>
                                <option value="TO" label="Tonga">
                                  Tonga
                                </option>
                                <option value="TV" label="Tuvalu">
                                  Tuvalu
                                </option>
                                <option
                                  value="UM"
                                  label="U.S. Minor Outlying Islands"
                                >
                                  U.S. Minor Outlying Islands
                                </option>
                                <option value="VU" label="Vanuatu">
                                  Vanuatu
                                </option>
                                <option value="WF" label="Wallis and Futuna">
                                  Wallis and Futuna
                                </option>
                              </optgroup>
                              <optgroup
                                id="country-optgroup-Antartica"
                                label="Antarctica"
                              >
                                <option value="AQ" label="Antarctica">
                                  Antarctica
                                </option>
                              </optgroup>
                            </select>
                          </label>
                        </div>
                      )}
                      <br />
                      {currentStep > 1 && (
                        <button
                          onClick={handlePrevious}
                          className="rounded-xl bg-blue-400 p-2 text-xs sm:text-sm md:text-base "
                        >
                          Previous Step
                        </button>
                      )}
                      {currentStep < 5 && (
                        <button
                          onClick={handleNext}
                          className="rounded-xl bg-blue-500 p-2 text-xs sm:text-sm md:text-base float-right"
                        >
                          Next Step
                        </button>
                      )}
                      {currentStep === 5 && (
                        <Link to="/results" className="float-right">
                          See Results
                        </Link>
                      )}
                    </div>
                  </div>
                </>
              }
            />
            <Route
              path="/results"
              element={
                <>
                <div className="w-full h-full ml-5 mt-3 space-y-8">
                  <h2 className="font-bold text-xl">Your Information</h2>
                  <p className="font-medium">
                    Name : <span className="font-normal">{formData.name}</span>{" "}
                  </p>
                  <p className="font-medium">
                    City : <span className="font-normal">{formData.city}</span>{" "}
                  </p>
                  <p className="font-medium">
                    Phone : <span className="font-normal">{formData.phone}</span>{" "}
                  </p>
                  <p className="font-medium">
                    Address :{" "}
                    <span className="font-normal">{formData.address}</span>
                  </p>
                  <p className="font-medium">
                    Country :{" "}
                    <span className="font-normal">{selectedCountryLabel}</span>
                  </p>
                </div>
                  
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
