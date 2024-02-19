/* Import Styles */
/* Reset CSS */
import "@/src/assets/styles/devtz007_css_sass_library/css/reset_lb.css";
/* Main CSS */
import "@/src/style.css";

/* Import Native Modules */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import ReportWebVitals from "./reportWebVitals";

/* Import Custom Components */


/* Create a React root for rendering the app */
const root = ReactDOM.createRoot(document.getElementById("root"));

/* App Component */
const App = () => {
  /* State to store the calculated header height */
  const [headerHeight, setHeaderHeight] = useState(null);

  /* Effect to run once on mount to calculate and set the header height */
  useEffect(() => {
    /* Find the header element in the DOM */
    const headerElem = document.querySelector("header");

    /* Check if the header element is found */
    if (headerElem) {
      /* Calculate the header height */
     const calculatedHeaderHeight = headerElem.offsetHeight;

      /* Set the calculated header height to the state */
      setHeaderHeight(calculatedHeaderHeight);
    }

  });

  return (
    <React.StrictMode>
      <main style={{ "--header-height": `${headerHeight}px` }}>

      </main>
    </React.StrictMode>
  );
};

/* Render the app to the root element */
root.render(<App />);

/* Report web vitals to the console or send to an analytics endpoint */
ReportWebVitals(console.log);
