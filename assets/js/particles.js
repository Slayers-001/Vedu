/**
 * Advanced Micro-Node Grid Background Simulation
 */
(function() {
    const canvas = document.getElementById("ambient-particle-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let pointNodes = [];
    const internalLimitCount = 65;

    function resizeViewportStage() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeViewportStage();
    window.addEventListener("resize", resizeViewportStage);

    class PrecisionNode {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 1.5 + 0.5;
            this.mx = (Math.random() - 0.5) * 0.18;
            this.my = (Math.random() - 0.5) * 0.18;
            this.color = Math.random() > 0.55 ? "rgba(0, 243, 255, 0.14)" : "rgba(255, 0, 127, 0.14)";
        }

        renderAndAdvance() {
            this.x += this.mx;
            this.y += this.my;

            if (this.x < 0 || this.x > canvas.width) this.mx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.my *= -1;

            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initMatrixNodes() {
        for (let i = 0; i < internalLimitCount; i++) {
            pointNodes.push(new PrecisionNode());
        }
    }

    function processingLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < pointNodes.length; i++) {
            pointNodes[i].renderAndAdvance();
        }
        requestAnimationFrame(processingLoop);
    }

    initMatrixNodes();
    processingLoop();
})();