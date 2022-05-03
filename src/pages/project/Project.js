// hooks 
import { useDocuments } from '../../hooks/useDocuments';
import { useParams } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';

// styles
import './Project.css'
import ProjectComments from './ProjectComments';

export default function Project() {

  const { id } = useParams();
  const { error, document } = useDocuments('projects', id)

  console.log(id);

  if (error) {
    return <div className='error'>{error}</div>
  }

  if (!document) {
    return <div className='loading'>Loading ...</div>
  }

  return (
    <div className='project-details'>
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  )
}
