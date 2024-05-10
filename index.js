const updateSkill = (skillId, value) => {
    const skill = document.getElementById(skillId);
    const progress = skill.querySelector('.skill__progress');
    const skillValue = skill.querySelector('.skill__value');
    
    progress.style.width = `${value}%`;
    skillValue.textContent = `${value} / 100`;
  }
  
  const htmlLevel = prompt('Zadajte svoju úroveň HTML (0-100):');
  const cssLevel = prompt('Zadajte svoju úroveň CSS (0-100):');
  const jsLevel = prompt('Zadajte svoju úroveň JavaScriptu (0-100):');
  
  updateSkill('skill1', htmlLevel);
  updateSkill('skill2', cssLevel);
  updateSkill('skill3', jsLevel);
