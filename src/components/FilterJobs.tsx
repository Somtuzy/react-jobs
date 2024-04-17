import { JobsProp } from "../types/job.type"

const Filter = ({jobs, setJobs}: JobsProp) => {
    const filterJobs = (value: string) => {
        if(value){
            setJobs(jobs.filter(job => {
                const jobsToRender = job.title.toLowerCase().includes(value) || 
                job.type.toLowerCase().includes(value) || 
                job.location.toLowerCase().includes(value) || 
                job.company.name.toLowerCase().includes(value) 

                return jobsToRender
            }))
        } else {
            setJobs([])
        }
    }

    return (
        <div>
            {/* <!-- Filter Jobs --> */}
            <section className="bg-blue-50 py-4">
                <div className="container mx-auto px-4">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            placeholder="Filter jobs..."
                            onChange={(e) => filterJobs(e.target.value)}
                        />
                    </div>
                </div>
            </section></div>
    )
}

export default Filter