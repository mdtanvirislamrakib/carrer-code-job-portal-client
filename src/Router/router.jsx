import React from 'react';

import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import JobDetails from '../Pages/JobDetails/JobDetails';
import Loader from "../Shared/Loader"
import PrivetRoute from '../Contexts/AuthContext/AuthProvider/PrivetRoute';
import JobApply from '../Component/JobApply/JobApply';
import MyApplication from '../Pages/MyApplication/MyApplication';
import JobAdd from '../Pages/JobAdd/JobAdd';
import MyPostedJob from '../Pages/MyPostedJob/MyPostedJob';
import ViewApplications from '../Pages/ViewApplications/ViewApplications';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component:Login,
      },
      {
        path: "/jobs/:id",
        element: <PrivetRoute>
          <JobDetails></JobDetails>
        </PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "MyApplication",
        element: <PrivetRoute>
          <MyApplication></MyApplication>
        </PrivetRoute>,
      },
      {
        path : "/applications/:job_id",
        element: <PrivetRoute>
          <ViewApplications></ViewApplications>
        </PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/applications/job/${params.job_id}`),
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "/addJob",
        element: <PrivetRoute>
          <JobAdd></JobAdd>
        </PrivetRoute>
      },
      {
        path: "/myPostedJob",
        element: <PrivetRoute>
          <MyPostedJob></MyPostedJob>
        </PrivetRoute>
      },
      {
        path: "/jobApply/:id",
        element: <PrivetRoute>
          <JobApply></JobApply>
        </PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
      }
    ]
  },
]);

export default router;