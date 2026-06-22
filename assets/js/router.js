/**
 * Stateful Single-Page View Routing Engine
 * Swaps active viewport states natively without reloading modules.
 */
document.addEventListener("DOMContentLoaded", () => {
    const viewSwitchButtons = document.querySelectorAll(".view-switch-btn");
    const activeViewPanels = document.querySelectorAll(".view-panel");

    if (viewSwitchButtons && activeViewPanels) {
        viewSwitchButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const requestedTargetID = btn.getAttribute("data-target");

                // Remove active styling markers from past selections
                viewSwitchButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                // Evaluate viewport layer visibilities
                activeViewPanels.forEach(panel => {
                    if (panel.id === requestedTargetID) {
                        panel.classList.add("active");
                    } else {
                        panel.classList.remove("active");
                    }
                });
            });
        });
    }

    console.log("%c SYSTEM NODE READY // MULTI-VIEW ROUTER OVERHAUL COMPLETE ", "background: #ff007f; color: #fff; font-weight: bold;");
});