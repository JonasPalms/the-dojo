import { useCollection } from '../../hooks/useCollection'
import ProjectList from '../../components/ProjectList'

// styles
import './Dashboard.css'

export default function Dashboard() {

  const { documents, error } = useCollection('projects')

  return (
    <div>
      <h2 className='page-title'>Dashboard</h2>
      {error && <span className='error'>{error}</span>}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}
