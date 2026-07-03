import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: "standard" | "cloud" | "server" | "chip" | "database";
  label: string;
  pulsePhase: number;
  pulseSpeed: number;
}

interface Packet {
  fromNodeIndex: number;
  toNodeIndex: number;
  progress: number;
  speed: number;
  color: string;
}

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 180,
    };

    // Keep track of elements
    let nodes: Node[] = [];
    let packets: Packet[] = [];

    // Labels for the hubs to personalize Yassin's portfolio
    const hubLabels = {
      cloud: "INPT Cloud",
      server: "Kolla DevOps",
      chip: "IoT Edge",
      database: "Data Node",
    };

    // Initialize network nodes
    const initNetwork = () => {
      nodes = [];
      packets = [];
      const isMobile = width < 768;
      const numNodes = isMobile ? 22 : 45;

      // 1. Create special hub nodes for Yassin's fields
      const hubTypes: Array<"cloud" | "server" | "chip" | "database"> = [
        "cloud",
        "server",
        "chip",
        "database",
      ];

      // Keep hubs well within viewport bounds
      const hubPad = isMobile ? 80 : 120;
      hubTypes.forEach((type, idx) => {
        // Place hubs in different quadrants, clamped away from edges
        let hX = width * 0.25;
        let hY = height * 0.25;

        if (idx === 1) {
          hX = width * 0.75;
          hY = height * 0.25;
        } else if (idx === 2) {
          hX = width * 0.25;
          hY = height * 0.75;
        } else if (idx === 3) {
          hX = width * 0.75;
          hY = height * 0.75;
        }

        // Clamp initial positions away from edges
        hX = Math.max(hubPad, Math.min(width - hubPad, hX + (Math.random() - 0.5) * 80));
        hY = Math.max(hubPad, Math.min(height - hubPad, hY + (Math.random() - 0.5) * 80));

        nodes.push({
          x: hX,
          y: hY,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: isMobile ? 12 : 16,
          type,
          label: hubLabels[type],
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        });
      });

      // 2. Create standard distributed/device nodes
      for (let i = 0; i < numNodes; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: 2 + Math.random() * 3,
          type: "standard",
          label: "",
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        });
      }
    };

    initNetwork();

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNetwork();
    };

    window.addEventListener("resize", handleResize);

    // Mouse handlers (attached to window to capture anywhere)
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleWindowClick = (e: MouseEvent) => {
      // Find closest node to click to launch custom pings
      let closestNodeIdx = -1;
      let minDist = 300;

      nodes.forEach((node, idx) => {
        const dx = node.x - e.clientX;
        const dy = node.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          minDist = dist;
          closestNodeIdx = idx;
        }
      });

      if (closestNodeIdx !== -1) {
        // Trigger packets along all connections from this node
        const maxConnections = 150; // max connection distance
        nodes.forEach((otherNode, oIdx) => {
          if (closestNodeIdx === oIdx) return;
          const dx = nodes[closestNodeIdx].x - otherNode.x;
          const dy = nodes[closestNodeIdx].y - otherNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnections) {
            packets.push({
              fromNodeIndex: closestNodeIdx,
              toNodeIndex: oIdx,
              progress: 0,
              speed: 0.012 + Math.random() * 0.015,
              color: getRandomPacketColor(),
            });
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleWindowClick);

    const getRandomPacketColor = () => {
      const colors = [
        "rgba(56, 189, 248, 0.85)", // sky blue
        "rgba(129, 140, 248, 0.85)", // indigo
        "rgba(52, 211, 153, 0.85)", // emerald
        "rgba(251, 191, 36, 0.85)", // amber
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Custom Canvas Hub Icon Drawing functions
    const drawCloudHub = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      isLight: boolean
    ) => {
      c.save();
      c.translate(x, y);
      c.strokeStyle = color;
      c.lineWidth = 1.8;
      c.fillStyle = isLight ? "rgba(56, 189, 248, 0.12)" : "rgba(56, 189, 248, 0.06)";

      c.beginPath();
      c.moveTo(-size * 0.8, size * 0.2);
      c.arc(-size * 0.4, size * 0.2, size * 0.4, Math.PI, Math.PI * 1.5);
      c.arc(0, -size * 0.1, size * 0.5, Math.PI * 1.2, Math.PI * 1.9);
      c.arc(size * 0.5, size * 0.2, size * 0.4, Math.PI * 1.6, Math.PI * 2);
      c.lineTo(-size * 0.8, size * 0.2);
      c.closePath();
      c.fill();
      c.stroke();
      c.restore();
    };

    const drawDatabaseHub = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      isLight: boolean
    ) => {
      c.save();
      c.translate(x, y);
      c.strokeStyle = color;
      c.lineWidth = 1.8;
      c.fillStyle = isLight ? "rgba(52, 211, 153, 0.12)" : "rgba(52, 211, 153, 0.06)";

      const w = size * 0.9;
      const h = size * 1.1;

      for (let i = 0; i < 3; i++) {
        const dy = -h / 2.2 + i * (h / 2.4);
        c.beginPath();
        c.ellipse(0, dy, w, h / 4.5, 0, 0, Math.PI * 2);
        c.fill();
        c.stroke();

        if (i < 2) {
          c.beginPath();
          c.moveTo(-w, dy);
          c.lineTo(-w, dy + h / 2.4);
          c.moveTo(w, dy);
          c.lineTo(w, dy + h / 2.4);
          c.stroke();
        }
      }
      c.restore();
    };

    const drawChipHub = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      isLight: boolean
    ) => {
      c.save();
      c.translate(x, y);
      c.strokeStyle = color;
      c.lineWidth = 1.8;
      c.fillStyle = isLight ? "rgba(251, 191, 36, 0.12)" : "rgba(251, 191, 36, 0.06)";

      const s = size * 0.9;
      c.beginPath();
      c.rect(-s, -s, s * 2, s * 2);
      c.fill();
      c.stroke();

      // Pin legs
      const pinLen = size * 0.35;
      c.beginPath();
      for (let i = -1; i <= 1; i++) {
        const offset = i * (s * 0.5);
        // Top & Bottom pins
        c.moveTo(offset, -s);
        c.lineTo(offset, -s - pinLen);
        c.moveTo(offset, s);
        c.lineTo(offset, s + pinLen);
        // Left & Right pins
        c.moveTo(-s, offset);
        c.lineTo(-s - pinLen, offset);
        c.moveTo(s, offset);
        c.lineTo(s + pinLen, offset);
      }
      c.stroke();
      c.restore();
    };

    const drawServerHub = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      isLight: boolean
    ) => {
      c.save();
      c.translate(x, y);
      c.strokeStyle = color;
      c.lineWidth = 1.8;
      c.fillStyle = isLight ? "rgba(129, 140, 248, 0.12)" : "rgba(129, 140, 248, 0.06)";

      const w = size * 0.95;
      const h = size * 1.1;

      // Outer Box
      c.beginPath();
      c.rect(-w, -h, w * 2, h * 2);
      c.fill();
      c.stroke();

      // Horizontal dividers
      c.beginPath();
      c.moveTo(-w, -h / 3);
      c.lineTo(w, -h / 3);
      c.moveTo(-w, h / 3);
      c.lineTo(w, h / 3);
      c.stroke();

      // Server Lights
      c.fillStyle = "#10b981"; // active led
      c.beginPath();
      c.arc(-w * 0.6, -h * 0.65, 2, 0, Math.PI * 2);
      c.arc(-w * 0.6, 0, 2, 0, Math.PI * 2);
      c.arc(-w * 0.6, h * 0.65, 2, 0, Math.PI * 2);
      c.fill();

      c.fillStyle = color; // connection led
      c.beginPath();
      c.arc(-w * 0.45, -h * 0.65, 1.8, 0, Math.PI * 2);
      c.arc(-w * 0.45, 0, 1.8, 0, Math.PI * 2);
      c.arc(-w * 0.45, h * 0.65, 1.8, 0, Math.PI * 2);
      c.fill();

      c.restore();
    };

    // Main animation loop
    const animate = () => {
      // Clear canvas with a transparent overlay to retain soft trails or keep it perfectly clean
      ctx.clearRect(0, 0, width, height);

      // Detect theme dynamically from document body
      const isLightMode = document.body.classList.contains("light-mode");

      // Set styles based on theme
      const nodeColor = isLightMode ? "rgba(100, 116, 139, 0.4)" : "rgba(255, 255, 255, 0.15)";
      const lineColor = isLightMode ? "rgba(148, 163, 184, 0.15)" : "rgba(255, 255, 255, 0.04)";
      const mouseLineColor = isLightMode ? "rgba(14, 165, 233, 0.3)" : "rgba(56, 189, 248, 0.15)";
      const labelColor = isLightMode ? "rgba(30, 41, 59, 0.8)" : "rgba(241, 245, 249, 0.85)";

      // Smooth mouse interpolation for beautiful, organic movement
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Define interactive/attract range
      const connectionDist = 160;

      // 1. Draw connection lines
      ctx.lineWidth = 0.85;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            // Calculate opacity proportional to proximity
            const alpha = (1 - dist / connectionDist) * (isLightMode ? 0.22 : 0.45);
            ctx.strokeStyle = isLightMode
              ? `rgba(148, 163, 184, ${alpha})`
              : `rgba(255, 255, 255, ${alpha * 0.25})`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // 2. Draw lines from mouse to nearby nodes
      if (mouse.x > 0 && mouse.y > 0) {
        nodes.forEach((node) => {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = 1 - dist / mouse.radius;
            ctx.strokeStyle = isLightMode
              ? `rgba(14, 165, 233, ${alpha * 0.25})`
              : `rgba(56, 189, 248, ${alpha * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();

            // Gently attract node to mouse
            if (node.type !== "standard") {
              // Hubs have more inertia/weight, move slower
              node.x -= dx * 0.003;
              node.y -= dy * 0.003;
            } else {
              node.x -= dx * 0.008;
              node.y -= dy * 0.008;
            }
          }
        });
      }

      // 3. Spawn random packet signals to represent live network traffic
      if (Math.random() < (isLightMode ? 0.03 : 0.045) && packets.length < 35) {
        // Pick a random node that has connections
        const fromIdx = Math.floor(Math.random() * nodes.length);
        const candidates: number[] = [];

        nodes.forEach((node, idx) => {
          if (idx === fromIdx) return;
          const dx = nodes[fromIdx].x - node.x;
          const dy = nodes[fromIdx].y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            candidates.push(idx);
          }
        });

        if (candidates.length > 0) {
          const toIdx = candidates[Math.floor(Math.random() * candidates.length)];
          packets.push({
            fromNodeIndex: fromIdx,
            toNodeIndex: toIdx,
            progress: 0,
            speed: 0.006 + Math.random() * 0.012,
            color: getRandomPacketColor(),
          });
        }
      }

      // 4. Update and draw packet signals (pulses of data)
      packets.forEach((pkt, index) => {
        pkt.progress += pkt.speed;

        // Calculate current position
        const fromNode = nodes[pkt.fromNodeIndex];
        const toNode = nodes[pkt.toNodeIndex];

        if (fromNode && toNode) {
          const px = fromNode.x + (toNode.x - fromNode.x) * pkt.progress;
          const py = fromNode.y + (toNode.y - fromNode.y) * pkt.progress;

          // Draw small glowing pulse
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = pkt.color;
          ctx.fill();

          // Subtle shadow / glow trail
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = pkt.color.replace("0.85", "0.2");
          ctx.fill();
        }

        // Remove packets that arrived
        if (pkt.progress >= 1) {
          packets.splice(index, 1);
        }
      });

      // 5. Update and Draw nodes
      nodes.forEach((node) => {
        // Handle velocity and boundary bounce
        node.x += node.vx;
        node.y += node.vy;

        if (node.type !== "standard") {
          // Hub nodes bounce off edges with generous padding so icons + labels stay visible
          const hubPad = 100;
          if (node.x < hubPad) { node.x = hubPad; node.vx = Math.abs(node.vx); }
          if (node.x > width - hubPad) { node.x = width - hubPad; node.vx = -Math.abs(node.vx); }
          if (node.y < hubPad) { node.y = hubPad; node.vy = Math.abs(node.vy); }
          if (node.y > height - hubPad) { node.y = height - hubPad; node.vy = -Math.abs(node.vy); }
        } else {
          // Standard nodes wrap around with small padding
          const pad = 40;
          if (node.x < -pad) node.x = width + pad;
          if (node.x > width + pad) node.x = -pad;
          if (node.y < -pad) node.y = height + pad;
          if (node.y > height + pad) node.y = -pad;
        }

        // Increment pulsing phases
        node.pulsePhase += node.pulseSpeed;
        const scale = 1 + Math.sin(node.pulsePhase) * 0.08;

        if (node.type === "standard") {
          // Simple client / IoT node dot
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * scale, 0, Math.PI * 2);
          ctx.fillStyle = nodeColor;
          ctx.fill();
        } else {
          // Draw customized architectural hub representing Yassin's skills
          let hubColor = "rgba(56, 189, 248, 0.75)"; // default sky blue
          if (node.type === "database") hubColor = "rgba(52, 211, 153, 0.75)"; // emerald
          if (node.type === "chip") hubColor = "rgba(251, 191, 36, 0.75)"; // amber
          if (node.type === "server") hubColor = "rgba(129, 140, 248, 0.75)"; // indigo

          const hubSize = node.radius * scale;

          if (node.type === "cloud") {
            drawCloudHub(ctx, node.x, node.y, hubSize, hubColor, isLightMode);
          } else if (node.type === "database") {
            drawDatabaseHub(ctx, node.x, node.y, hubSize, hubColor, isLightMode);
          } else if (node.type === "chip") {
            drawChipHub(ctx, node.x, node.y, hubSize, hubColor, isLightMode);
          } else if (node.type === "server") {
            drawServerHub(ctx, node.x, node.y, hubSize, hubColor, isLightMode);
          }

          // Blinking core center
          ctx.beginPath();
          ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = hubColor;
          ctx.fill();

          // Text labels for Hubs to look incredibly cool
          ctx.font = '600 9px "JetBrains Mono", var(--font-mono), monospace';
          ctx.fillStyle = labelColor;
          ctx.textAlign = "center";
          ctx.fillText(node.label, node.x, node.y + node.radius + 15);

          // Subtle connection dots
          ctx.strokeStyle = hubColor.replace("0.75", "0.2");
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -8 }}
    />
  );
}
