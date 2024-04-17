import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import JobPage, { jobLoader } from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"
import NotFoundPage from "./pages/NotFoundPage"
import axios from "axios"
import EditJobPage from "./pages/EditJobPage"

function App() {
  const addJobSubmit = async (newJob: any) => {
    await axios.post('/api/jobs', newJob)
  }

  const editJobSubmit = async (newJob: any, id: string) => {
    await axios.patch(`/api/jobs/${id}`, newJob)
  }

  const deleteJob = async (id: string) => {
    await axios.delete(`/api/jobs/${id}`)
  }
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <MainLayout />}>
        <Route index element={ <HomePage />}/>
        <Route path="/add-job" element={ <AddJobPage addJobSubmit={addJobSubmit} />}/>
        <Route path="/jobs" element={ <JobsPage />}/>
        <Route path="/jobs/edit/:id" element={ <EditJobPage editJobSubmit={editJobSubmit} />} loader={jobLoader}/>
        <Route path="/jobs/:id" element={ <JobPage deleteJob={deleteJob} />} loader={jobLoader}/>
        <Route path="*" element={ <NotFoundPage />}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App