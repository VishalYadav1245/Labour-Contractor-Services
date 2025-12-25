import { jobs } from "../data/job";
import JobCard from "./JobCard";

export default function Dashboard({ user }) {
  return (
    <div className="container">
      <h2 className="welcome">
        Welcome, {user.name} ({user.role})
      </h2>

      {user.role === "Labour" ? (
        <>
          <h3>Available Jobs</h3>
          <div className="job-grid">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </>
      ) : (
        <div className="card">
          <h3>Contractor Dashboard</h3>
          <ul>
            <li>Post new jobs</li>
            <li>View applicants</li>
            <li>Manage workers</li>
          </ul>
        </div>
      )}
    </div>
  );
}
