function addExperience() {
    const experienceGroup = document.querySelector('.experience-group').cloneNode(true);
    experienceGroup.querySelectorAll('input').forEach(input => input.value = '');
    document.querySelector('.form-section:nth-of-type(2)').appendChild(experienceGroup);
}

function addEducation() {
    const educationGroup = document.querySelector('.education-group').cloneNode(true);
    educationGroup.querySelectorAll('input').forEach(input => input.value = '');
    document.querySelector('.form-section:nth-of-type(3)').appendChild(educationGroup);
}

function addSkill() {
    const skill = document.getElementById('skill').value;
    if (skill.trim() !== '') {
        const skillsList = document.getElementById('skillsList');
        const skillItem = document.createElement('span');
        skillItem.textContent = skill;
        skillItem.className = 'skill-item';
        skillsList.appendChild(skillItem);
        document.getElementById('skill').value = '';
    }
}
