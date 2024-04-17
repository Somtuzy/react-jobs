import { useEffect, useState } from 'react'
import axios from "axios"
import Spinner from './Spinner'
import JobListing from './JobListing'
import FilterJobs from "./FilterJobs"
import { JobListingsProp } from '../types/listing.type'
import { Job } from '../types/job.type'

const JobListings = ({ isHome = false }: JobListingsProp) => {
    const [jobs, setJobs] = useState<Job[]>([])
    const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        const url = isHome ? "/api/jobs?_limit=3" : "/api/jobs"
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setJobs(res.data)
            })
            .catch(e => {
                console.log(e)
                setErrorMessage(`There was an error fetching recent jobs: ${e.message}`)
            })
            .finally(() => setLoading(false))
    }, [])

    const jobsToRender = filteredJobs.length > 0 ? filteredJobs : jobs
    return (
        <div>
            {/* <!-- Filter Jobs --> */}
            <FilterJobs jobs={jobs} setJobs={setFilteredJobs}/>
            {/* <!-- All Jobs --> */}
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? "Recent Jobs" : "Browse Jobs"}
                    </h2>


                    {/* <!-- Job Listing 1 --> */}
                    {errorMessage ?
                        <h1 className='text-center'>{errorMessage}</h1> :
                        loading ? <Spinner loading={loading} /> :
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {jobsToRender?.map(job => (<JobListing key={job.id} job={job} />))}
                            </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default JobListings