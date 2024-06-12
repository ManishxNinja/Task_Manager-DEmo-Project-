
import NewProject from "./components/newProject";
import ProjectsSidebar from "./components/projectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const[projectsState,setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    }); 
  }

  function handleDeleteProject() {

    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    });

  }
  
  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState =>{
      return {
        ...prevState,
        selectedProjectId: null,

      };
    });
  }

  const selectProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  
  let content = <SelectedProject project={selectProject} onDelete={handleDeleteProject} />;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel = {handleCancelAddProject}/>
  }
  else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject = {handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject = {handleStartAddProject} 
        projects={projectsState.projects}
        onSelectProject= {handleSelectProject}  
      />
      {content}
    </main>
  );
}

export default App;
