import { Project } from '../../types/global';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectSlide = ({ project }: { project: Project }) => {
  const { position } = project;

  const slideProps: { [key: string]: string | number } = {
    'data-x': position.x,
    'data-y': position.y,
    'data-z': position.z || 0,
  };

  if (position.rotate) {
    slideProps['data-rotate'] = position.rotate;
  }
  if (position.rotateY) {
    slideProps['data-rotate-y'] = position.rotateY;
  }

  return (
    <div id={project.id} className="step" {...slideProps}>
      <ProjectCard project={project} />
    </div>
  );
};

export default ProjectSlide;
