const groupTotals = {
    group1: 0,
    group2: 0,
    group3: 0,
    group4: 0
  };
  
  const goal = 25000;
  
  // Function to update progress for a group
  function updateProgress(group, amount) {
    groupTotals[group] += amount;
    const progressElement = document.getElementById(`${group}-progress`);
    const percentage = Math.min((groupTotals[group] / goal) * 100, 100); // Cap at 100%
    progressElement.style.width = `${percentage}%`;
  }
  
  setTimeout(() => updateProgress('group1', 2450), 1000); 
  setTimeout(() => updateProgress('group2', 2785), 2000); 
  setTimeout(() => updateProgress('group3', 1260), 3000);
  setTimeout(() => updateProgress('group4', 5530), 4000); 
  