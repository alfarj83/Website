function switchTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.custom-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content and activate tab
    document.getElementById(tabName + '-tab').style.display = 'block';
    event.target.classList.add('active');
}