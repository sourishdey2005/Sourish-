import React, { useEffect, useRef } from 'react';

const ComputationalCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 460);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle generative graph nodes
    const nodeCount = 28;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseX: number;
      baseY: number;
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1.2,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    let tick = 0;

    const render = () => {
      tick += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Fine coordinate grid & axes lines (extremely subtle)
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = '#f4f4f5';

      const gridSize = 48;
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Origin indicator marker
      ctx.strokeStyle = '#e4e4e7';
      ctx.strokeRect(24, 24, 12, 12);
      ctx.fillStyle = '#a1a1aa';
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillText('f(x, y) = α·∇L', 42, 33);
      ctx.fillText('LATENCY: 12ms', width - 90, 33);

      // Update & draw nodes
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Soft rebound
        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > height - 10) node.vy *= -1;

        // Gentle pull towards mouse
        const dxMouse = mouseX - node.x;
        const dyMouse = mouseY - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 100) {
          node.x -= (dxMouse / distMouse) * 0.8;
          node.y -= (dyMouse / distMouse) * 0.8;
        }

        // Draw connections
        for (let j = i + 1; j < nodeCount; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.45;
            ctx.strokeStyle = `rgba(161, 161, 170, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#27272a';
        ctx.fill();

        // Subtle coordinate label for occasional nodes
        if (i % 7 === 0) {
          ctx.fillStyle = '#a1a1aa';
          ctx.font = '8px "JetBrains Mono", monospace';
          ctx.fillText(`[${Math.round(node.x)}, ${Math.round(node.y)}]`, node.x + 4, node.y - 4);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl border border-zinc-200 bg-white/60 overflow-hidden flex flex-col justify-between p-4 select-none">
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-zinc-100 pb-2.5">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          SYSTEM_STATE: CONVERGED
        </span>
        <span>RMT COVARIANCE DENOISED</span>
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-400 border-t border-zinc-100 pt-2 bg-white/70 backdrop-blur-xs">
        <span>DIMENSION: 120+ EQUITIES</span>
        <span>λ+ = σ²(1 + √(N/T))²</span>
      </div>
    </div>
  );
};

export default ComputationalCanvas;
