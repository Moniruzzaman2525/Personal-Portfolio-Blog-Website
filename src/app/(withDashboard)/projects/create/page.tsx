"use client";

import ProjectForm from '@/components/dashboard/ProjectForm';
import React from 'react';
import { FieldValues } from 'react-hook-form';

const manageProjectsPage = () => {
    const onAddProject = (data: FieldValues) => {
        console.log(data)
    };
    return (
        <div>
            <ProjectForm onAddProject={onAddProject} />
        </div>
    );
};

export default manageProjectsPage;
