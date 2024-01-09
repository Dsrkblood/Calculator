import { useContext, useState } from "react";

export const ProjectContext = createContext({
	selectedProjectId: undefined,
	projects: [],
	tasks: [],
});

export default function ProjectContextProvider({children}){
    
}