import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";

const Waitlist = lazy(() => import("./Waitlist"));

const Routing = () => {
  return (
    // <Suspense fallback={<PageLoader />}>
    <Routes>
      {/* <Route path="*" element={<NotFound />} /> */}

      {/* <Route path="/auth/login" element={<Login />} /> */}
      {/* <Route path="/auth/register" element={<Register />} /> */}

      <Route path="/" element={<Navigate to="/waitlist-page" replace />} />
      <Route path="waitlist-page" element={<Waitlist />} />

      <Route path="comp-test" element={<App />} />

      {/* <Route path="/jobs" element={<Navigate to="/jobs/listing" replace />} />
      <Route path="jobs" element={<Jobs />}>
        <Route path="listing" element={<JobsListing />} />
        <Route path="saved" element={<SavedJobs />} />
        <Route path="applied" element={<AppliedJobs />} />
        <Route path=":jobId" element={<JD />} />
      </Route> */}
    </Routes>
    // </Suspense>
  );
};

export default Routing;
