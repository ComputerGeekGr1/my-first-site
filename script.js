window.onload = function () {

    // "Click Me" button for lab 0
    var clickMeBtn = document.getElementById('clickMeBtn');
    clickMeBtn.addEventListener('click', function () {
        alert("Let's Rock!!");
    });

    // Sidebar toggle
    var toggleBtn = document.getElementById('sidebarToggleBtn');
    var sidebar = document.getElementById('sidebarMenu');
    var hamburger = document.getElementById('hamburgerIcon')

    hamburger.classList.add('change');

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-closed');

        hamburger.classList.toggle(
            'change',
            !sidebar.classList.contains('sidebar-closed')
        )
        
    });


    // Labs
    var LABS = [
        { key: 'lab0', label: 'Lab 0' },
        { key: 'lab1', label: 'Lab 1' }
    ];

    var navList = document.getElementById('sidebarNavList');
    var activeLab = 'lab0';

    function showLab(key) {
        activeLab = key;

        document.querySelectorAll('.lab-section').forEach(function (section) {
            section.classList.toggle('active-lab', section.id === key);
        });

        document.querySelectorAll('.sidebar-nav-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.dataset.key === key);
        });
    }

    LABS.forEach(function (lab) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'sidebar-nav-btn';
        btn.dataset.key = lab.key;
        btn.style.setProperty('--grad-from', '#6366f1');
        btn.style.setProperty('--grad-to', '#8b5cf6');

        var label = document.createElement('span');
        label.className = 'sidebar-label';
        label.textContent = lab.label;
        btn.appendChild(label);

        btn.addEventListener('click', function () {
            showLab(lab.key);
        });

        navList.appendChild(btn);
    });

    showLab(activeLab);
};