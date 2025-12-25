export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h4>{job.title}</h4>
      <p>📍 {job.location}</p>
      <p>💰 {job.wage}</p>
      <p>🏗 {job.contractor}</p>
      <button className="apply-btn">Apply</button>
    </div>
  );
}
