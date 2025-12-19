import React, { useState } from "react";

import One from "./Components/One";
import Two from "./Components/Two";
import Three from "./Components/Three";
import Four from "./Components/Four";
import Five from "./Components/Five";
import Six from "./Components/Six";
import Seven from "./Components/Seven";
import Eight from "./Components/Eight";
import Nine from "./Components/Nine";
import Ten from "./Components/Ten";

import Question11 from "./Components/Question11";
import Question12 from "./Components/Question12";
import Question13 from "./Components/Question13";
import Question14 from "./Components/Question14";
import Question15 from "./Components/Question15";
import Router from "./Components/Routing";

import Question21 from "./Components/Question21";
import Question22 from "./Components/Question22";
import Question23 from "./Components/Question23";
import Question24 from "./Components/Question24";
import Question25 from "./Components/Question25";
import Question26 from "./Components/Question26";
import Question27 from "./Components/Question27";
import Question28 from "./Components/Question28";
import Question29 from "./Components/Question29";
import Question30 from "./Components/Question30";

const App = () => {
  const Card = ({ children, narrow = false }) => (
    <div
      className={`bg-white p-6 rounded-xl shadow-md mx-auto w-full ${
        narrow ? "max-w-md" : "max-w-3xl"
      }`}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="w-full max-w-5xl space-y-6">
        <Card>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">React Assignment - All 30 Exercises</h1>
          <p className="text-gray-600"><span className="uppercase">umubyeyi</span> Cynthia  224005683</p>
          <p className="text-gray-600"><span className="uppercase">umuhuza</span> Evodie   224017149</p>
        </Card>
        
        <Card>
          <p className="text-2xl font-semibold mb-4">Question 1</p>
          <One />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 2</p>
          <Two />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 3</p>
          <Three text="Click Me" color="bg-blue-500 "/>
          <Three text="Click here" color="bg-p-urple-500 "/>
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 4</p>
          <Four name="Niragire Janette" age={25} email="janexample.com" />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 5</p>
          <Five />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 6</p>
          <Six />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 7</p>
          <Seven />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 8</p>
          <Eight />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 9</p>
          <Nine />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 10</p>
          <Ten />
        </Card>

        <Card narrow>
          <p className="text-2xl font-semibold mb-4">Question 11</p>
          <Question11 />
        </Card>

        <Card narrow>
          <p className="text-2xl font-semibold mb-4">Question 12</p>
          <Question12 />
        </Card>

        <Card narrow>
          <p className="text-2xl font-semibold mb-4">Question 13</p>
          <Question13 />
        </Card>

        <Card narrow>
          <p className="text-2xl font-semibold mb-4">Question 14</p>
          <Question14 />
        </Card>

        <Card narrow>
          <p className="text-2xl font-semibold mb-4">Question 15</p>
          <Question15 />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 16 - 20 </p>
          <Router />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 21</p>
          <Question21 />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 22</p>
          <Question22 />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 23</p>
          <Question23 />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 24</p>
          <Question24 />
        </Card>

        <Card>
          <p className="text-2xl font-semibold mb-4">Question 25</p>
          <Question25 />
        </Card>

        <Card narrow>
          <p className="text-2xl font-semibold mb-4">Question 26</p>
          <Question26 />
        </Card>

        <Card narrow>
          <p className="text-2xl font-semibold mb-4">Question 27</p>
          <Question27 />
        </Card>

        <Card narrow>
          <p className="text-2xl font-semibold mb-4">Question 28</p>
          <Question28 />
        </Card>

        <Card narrow>
          <p className="text-2xl font-semibold mb-4">Question 29</p>
          <Question29 />
        </Card>

        <Card narrow>
          <p className="text-2xl font-semibold mb-4">Question 30</p>
          <Question30 />
        </Card>
      </div>
    </div>
  );
};

export default App;
