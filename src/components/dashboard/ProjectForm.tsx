/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PPForm from "../form/PPForm";
import PPInput from "../form/PPInput";
import PPTextarea from "../form/PPTextarea";

interface ProjectFormProps {
    onAddProject: (project: any) => void;
}

const ProjectForm = ({ onAddProject }: ProjectFormProps) => {
    return (
        <PPForm onSubmit={onAddProject} style={{ backgroundColor: "white", padding: "24px", borderRadius: "8px", boxShadow: "0px 2px 6px rgba(0,0,0,0.1)" }}>
            <h3 className="text-xl font-semibold mb-4">Create a New Project</h3>
            <PPInput type="text" name="title" label="Project Title" placeholder="Enter project title" />
            <PPInput type="text" name="image" label="Project Image URL" placeholder="Enter image URL (optional)" />
            <PPInput type="text" name="liveLink" label="Live Project Link" placeholder="Enter project live URL" />
            <PPTextarea name="description" label="Project Description" placeholder="Describe your project..." rows={4} />
        </PPForm>
    );
};

export default ProjectForm;
