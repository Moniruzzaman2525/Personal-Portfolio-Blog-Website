/* eslint-disable @typescript-eslint/no-explicit-any */
import { getExperience } from '@/services/Experience';
import React from 'react';
import HomeExperienceSection from './Experience';

const ExperiencePage = async () => {
    const experience = await getExperience()
    return (
        <div className='py-10'>
            {experience?.data.map((experience: any) => (
                <HomeExperienceSection key={experience._id} experience={experience} />
            ))}

        </div>
    );
};

export default ExperiencePage;
