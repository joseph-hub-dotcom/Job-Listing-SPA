import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetchJobs from './useFetchJobs';

const JobList = () => {
  const { jobs, loading, error } = useFetchJobs('https://www.arbeitnow.com/api/job-board-api');


  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {jobs.slice(0,4).map((job) => (
        <Card key={job.slug} style={{ width: '18rem', margin: '1rem' }}>
          <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
            <Card.Text><strong>Location:</strong> {job.location}</Card.Text>
            <Card.Text><strong>Remote:</strong> {job.remote ? 'Yes' : 'No'}</Card.Text>
            <Card.Text><strong>Job Types:</strong> { job.job_types.join(', ')}</Card.Text>
            <Card.Text><strong>Tags:</strong> {job.tags.join(', ')}</Card.Text>
            <Button variant="primary" href={job.url} target="_blank" rel="noopener noreferrer">
              View Job
            </Button>
          </Card.Body>
        </Card>
      ))}

    </>
  );
};

export default JobList;

