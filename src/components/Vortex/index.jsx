import { useRef, useEffect } from "react";

const Vortex = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Vivid colors for dots
    const colors = [
      "rgb(255, 0, 0)", // Red
      "rgb(255, 165, 0)", // Orange
      "rgb(255, 255, 0)", // Yellow
      "rgb(0, 255, 0)", // Green
      "rgb(0, 0, 255)", // Blue
      "rgb(128, 0, 128)", // Purple
      "rgb(255, 0, 255)", // Magenta
    ];

    // Particle class for dots
    class Particle {
      constructor(x, y, color, speed, angle) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = speed;
        this.angle = angle;
        this.size = Math.random() * 3 + 1; // Dot size
        this.alpha = 1;
      }

      update(centerX, centerY) {
        this.angle += 0.02; // Swirl speed
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.alpha -= 0.005; // Fade out
        if (this.alpha <= 0) {
          this.alpha = 1;
          this.x = centerX;
          this.y = centerY;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color
          .replace(")", `, ${this.alpha})`)
          .replace("rgb", "rgba");
        ctx.fill();
      }
    }

    // Create particles
    const particles = [];
    for (let i = 0; i < 200; i++) {
      // Multiple strands/dots
      particles.push(
        new Particle(
          canvas.width / 2,
          canvas.height / 2,
          colors[Math.floor(Math.random() * colors.length)],
          Math.random() * 2 + 1,
          Math.random() * Math.PI * 2
        )
      );
    }

    // Resize canvas
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particles.forEach((particle) => {
        particle.update(centerX, centerY);
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

export default Vortex;
