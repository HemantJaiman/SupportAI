/**
 * SupportAI Agent Shared Layout Components
 */
function renderAgentLayout(activeNav) {
    // Render Sidebar Component
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = `
            <aside class="sidebar" id="sidebar">
                <div class="sidebar-brand">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 8C19.85 8 10 16.28 10 26.5C10 32.18 13.12 37.22 18 40.56V52L27.2 44.36C28.76 44.6 30.36 44.74 32 44.74C44.15 44.74 54 36.72 54 26.5C54 16.28 44.15 8 32 8Z" fill="#4880e8" />
                        <circle cx="23" cy="27" r="3.5" fill="#ffffff" />
                        <circle cx="33" cy="27" r="3.5" fill="#ffffff" />
                        <circle cx="43" cy="27" r="3.5" fill="#ffffff" />
                        <circle cx="32" cy="6" r="3" fill="#4880e8" />
                        <line x1="32" y1="9" x2="32" y2="14" stroke="#4880e8" stroke-width="2.5" stroke-linecap="round" />
                    </svg>
                    <span class="sidebar-brand-name">SupportAI</span>
                </div>

                <nav class="sidebar-nav">
                    <a href="Agent_dashboard.html" class="nav-item ${activeNav === 'dashboard' ? 'active' : ''}" id="nav-dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="3" width="7" height="7" rx="1" />
                            <rect x="3" y="14" width="7" height="7" rx="1" />
                            <rect x="14" y="14" width="7" height="7" rx="1" />
                        </svg>
                        <span>Dashboard</span>
                    </a>

                    <a href="Agent_Ticket_Queue.html" class="nav-item ${activeNav === 'queue' ? 'active' : ''}" id="nav-ticket-queue">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                        </svg>
                        <span>Ticket Queue</span>
                    </a>

                    <a href="#" class="nav-item ${activeNav === 'knowledge' ? 'active' : ''}" id="nav-knowledge-assistant">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Knowledge Assistant</span>
                    </a>
                </nav>

                <div class="sidebar-footer">
                    <a href="../login.html" class="nav-item logout" id="nav-logout">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        <span>Logout</span>
                    </a>
                </div>
            </aside>
        `;
    }

    // Render Top Bar Header Component
    const topbarContainer = document.getElementById('topbar-container');
    if (topbarContainer) {
        topbarContainer.innerHTML = `
            <header class="top-bar" id="top-bar">
                <div class="user-profile" id="user-profile">
                    <div class="user-avatar">AS</div>
                    <span class="user-name">Agent Smith</span>
                </div>
            </header>
        `;
    }
}
