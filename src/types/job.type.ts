export type Job = {
    id: string,
    title: string,
    type: string,
    description: string,
    location: string,
    salary: string,
    company: {
        name: string,
        description: string,
        contactEmail: string,
        contactPhone: string,
    }
}

export type JobProp = {
    job: Job
}

export type JobsProp = {
    jobs: Job[]
    setJobs: (jobs: Job[]) => void
}

type AddJob = {
    title: string;
    type: string;
    description: string;
    location: string;
    salary: string;
    company: {
        name: string;
        description: string;
        contactEmail: string;
        contactPhone: string;
    }
}
export type AddJobProp = {
    addJobSubmit: (job: AddJob) => void;
    
}

export type EditJobProp = {
    editJobSubmit: (job: AddJob, id: string) => void;
}

export type DeleteJobProp = {
    deleteJob: (id: string) => void;
}