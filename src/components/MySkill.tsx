import React from 'react';
import SkillSection from './SkillSection';
import { getSkills } from '@/services/Skills';

const MySkill = async () => {
    const skills = await getSkills()
    return (
        <div>
            <SkillSection skills={skills.data} />
        </div>
    );
};

export default MySkill;
