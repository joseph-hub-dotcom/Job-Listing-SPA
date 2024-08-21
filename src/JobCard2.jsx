import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetchJobs from "./useFetchJobs";
import { useState } from "react";
import Form from "react-bootstrap/Form";

const JobList = () => {
  const { jobs, loading, error } = useFetchJobs(
    "https://www.arbeitnow.com/api/job-board-api"
  );

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10; // Number of jobs to display per page
  // Filter jobs based on search query
  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company_name.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const removeHTMLTags = (str) => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Determine the total number of pages
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Navigate to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <h3>We found {jobs.length} jobs for you!</h3>

      <Form>
        <Form.Control
          style={{ width: "40rem", borderColor: "black" }}
          type="text"
          placeholder="Search jobs"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Form>
      {currentJobs.map((job) => (
        <div key={job.slug} className="jobDiv">
          <div>
            <p className="companyName">{job.company_name}</p>
            <p className="jobTitle">{job.title}</p>
            <span>📍{job.location} |</span>
            <span style={{ marginLeft: "7px" }}>
              💻
              {job.job_types && job.job_types.length > 0
                ? job.job_types.join(", ")
                : "Hello"}{" "}
              |
            </span>
            <span style={{ marginLeft: "7px" }}>
              🏠{job.remote ? "Remote" : "!Remote"}
            </span>
          </div>
          <div className="jobTags">
            <p>{job.tags.join(", ")}</p>
            <div style={{ textAlign: "right" }}>
              <Button href={job.url} target="_blank" rel="noopener noreferrer">
                View Job
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className="pagination">
        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style={{ marginRight: "10px" }}>
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{ marginLeft: "10px" }}>
          Next
        </Button>
      </div>
    </>
  );
};

export default JobList;
