import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import FeedbackSection from './Feedback/FeedbackSection';
import { beforeAfterPics } from './services/imgService';
import WelcomeBox from "./WelcomeBox/WelcomeBox";
import ServiceListBox from './ServicesBox/ServiceListBox';

import Contact from './Contact/Contact';
import ServiceListBySize from './ServicesBox/ServiceListBySize';
import BaseServices from './ServicesBox/BaseServices';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <WelcomeBox />
      },
      {
        path: "/feedback",
        element: <FeedbackSection data={beforeAfterPics} />
      },
      {
        path: "/services",
        element: <ServiceListBox />,
        children: [
          {
            path: "/services",
            element: <BaseServices/>
          },
          {
            path: "/services/base",
            element: <BaseServices />
          },
          {
            path: "/services/size",
            element: <ServiceListBySize />
          },
          // {
          //   path: "/services/info",
          //   element: <Important />
          // },
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);


