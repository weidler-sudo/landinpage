import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    const nodes: Node[] = [];
    const NODE_COUNT = 55;
    const CONNECTION_DISTANCE = 160;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.012;

      // Move nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulsePhase += 0.02;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(0, 102, 255, ${alpha})`);
            grad.addColorStop(0.5, `rgba(0, 212, 255, ${alpha * 1.3})`);
            grad.addColorStop(1, `rgba(124, 58, 237, ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        const pulse = (Math.sin(node.pulsePhase) + 1) * 0.5;
        const currentRadius = node.radius + pulse * 1.5;
        const currentOpacity = node.opacity * (0.6 + pulse * 0.4);

        // Outer glow
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, currentRadius * 4);
        glow.addColorStop(0, `rgba(0, 102, 255, ${currentOpacity * 0.6})`);
        glow.addColorStop(1, 'rgba(0, 102, 255, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 180, 255, ${currentOpacity})`;
        ctx.fill();
      });

      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.65,
      }}
      aria-hidden="true"
    />
  );
}
