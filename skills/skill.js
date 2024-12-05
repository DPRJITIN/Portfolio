document.addEventListener('DOMContentLoaded', () => {
    const mySkillItems = document.querySelectorAll('.myskill-item');
        
    mySkillItems.forEach(item => {
        const details = item.querySelector('.myskill-details');
        const expandIcon = item.querySelector('.expand-icon');
            
        if (!details || !expandIcon) return;

        // Initialize details to be hidden by default
        details.style.display = 'none';
        expandIcon.textContent = '▼';

        item.addEventListener('click', () => {
            const isExpanded = details.style.display === 'block';
            details.style.display = isExpanded ? 'none' : 'block';
            expandIcon.textContent = isExpanded ? '▼' : '▲';
        });
    });
});