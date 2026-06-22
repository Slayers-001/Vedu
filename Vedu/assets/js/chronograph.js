/**
 * Automated Precision Chronograph Counting Logic
 */
(function() {
    const epochTargetNode = "August 25, 2026 00:00:00";
    
    const nodeDays = document.getElementById("days");
    const nodeHours = document.getElementById("hours");
    const nodeMinutes = document.getElementById("minutes");
    const nodeSeconds = document.getElementById("seconds");

    if (!nodeDays || !nodeHours || !nodeMinutes || !nodeSeconds) return;

    function computeTimeRemaining() {
        const absoluteTargetValue = new Date(epochTargetNode).getTime();
        const absoluteCurrentValue = new Date().getTime();
        const differenceVector = absoluteTargetValue - absoluteCurrentValue;

        if (differenceVector <= 0) {
            const telemetryElement = document.querySelector(".system-status-indicator");
            if (telemetryElement) {
                telemetryElement.innerHTML = "CELEBRATION_ACTIVE";
                telemetryElement.style.color = "#00ff66";
                telemetryElement.style.borderColor = "rgba(0,255,102,0.3)";
            }
            nodeDays.innerText = "00"; nodeHours.innerText = "00"; nodeMinutes.innerText = "00"; nodeSeconds.innerText = "00";
            clearInterval(chronographTimerEngineLoopId);
            return;
        }

        const deltaDays = Math.floor(differenceVector / (1000 * 60 * 60 * 24));
        const deltaHours = Math.floor((differenceVector % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const deltaMinutes = Math.floor((differenceVector % (1000 * 60 * 60)) / (1000 * 60));
        const deltaSeconds = Math.floor((differenceVector % (1000 * 60)) / 1000);

        nodeDays.innerText = deltaDays.toString().padStart(2, "0");
        nodeHours.innerText = deltaHours.toString().padStart(2, "0");
        nodeMinutes.innerText = deltaMinutes.toString().padStart(2, "0");
        nodeSeconds.innerText = deltaSeconds.toString().padStart(2, "0");
    }

    computeTimeRemaining();
    const chronographTimerEngineLoopId = setInterval(computeTimeRemaining, 1000);
})();