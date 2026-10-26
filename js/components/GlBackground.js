/* =====================================================================
   GlBackground — nền 3D WebGL (Three.js): sóng hạt, vũ trụ sao,
   khối hình học bóng & biểu tượng "Play" của Edubiz bay theo cuộn trang.
   ===================================================================== */
EB.components.GlBackground = {
  name: 'GlBackground',
  /* logo EduBiz đặt ở tâm quả cầu: là ảnh HTML đè lên canvas, vị trí tính theo tâm quả cầu mỗi khung hình
     (không đưa ảnh vào WebGL vì Chrome chặn texture khi mở index.html trực tiếp từ ổ đĩa) */
  template: `<canvas ref="cv" id="gl" aria-hidden="true"></canvas>
    <div ref="logo" class="gl-logo" aria-hidden="true"><img src="assets/logo-dark.png" alt=""><span>M E D I A</span></div>`,
  mounted() {
    if (!window.THREE) return;
    const T = THREE;
    const cv = this.$refs.cv;
    const logoEl = this.$refs.logo;
    let renderer;
    try {
      renderer = new T.WebGLRenderer({ canvas: cv, antialias: true, alpha: false, powerPreference: 'high-performance' });
    } catch (e) { cv.style.display = 'none'; logoEl.style.display = 'none'; return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    renderer.setClearColor(0x050814, 1);

    const scene = new T.Scene();
    scene.fog = new T.FogExp2(0x050814, 0.034);
    const cam = new T.PerspectiveCamera(52, 1, 0.1, 200);
    cam.position.set(0, 0.6, 14);

    /* lights */
    scene.add(new T.AmbientLight(0x4050a0, 0.55));
    const L1 = new T.PointLight(0x24e5d5, 2.4, 60); L1.position.set(-8, 6, 8); scene.add(L1);
    const L2 = new T.PointLight(0xd946ef, 2.2, 60); L2.position.set(9, -3, 6); scene.add(L2);
    const L3 = new T.PointLight(0x8b5cf6, 1.8, 60); L3.position.set(0, 8, -6); scene.add(L3);

    const palette = [new T.Color(0x24e5d5), new T.Color(0x8b5cf6), new T.Color(0xec4899), new T.Color(0x60a5fa)];

    /* ---------- starfield */
    const SN = EB.COARSE ? 900 : 2200;
    const sg = new T.BufferGeometry();
    const sp = new Float32Array(SN * 3), sc = new Float32Array(SN * 3);
    for (let i = 0; i < SN; i++) {
      const r = 18 + Math.random() * 60, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
      sp[i * 3] = r * Math.sin(ph) * Math.cos(th);
      sp[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.6;
      sp[i * 3 + 2] = r * Math.cos(ph) - 20;
      const c = palette[i % 4].clone().lerp(new T.Color(1, 1, 1), Math.random() * 0.5);
      sc[i * 3] = c.r; sc[i * 3 + 1] = c.g; sc[i * 3 + 2] = c.b;
    }
    sg.setAttribute('position', new T.BufferAttribute(sp, 3));
    sg.setAttribute('color', new T.BufferAttribute(sc, 3));
    const dot = (() => {
      const c = document.createElement('canvas'); c.width = c.height = 64;
      const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.35, 'rgba(255,255,255,.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      x.fillStyle = g; x.fillRect(0, 0, 64, 64); return new T.CanvasTexture(c);
    })();
    const stars = new T.Points(sg, new T.PointsMaterial({ size: 0.28, map: dot, vertexColors: true, transparent: true, depthWrite: false, blending: T.AdditiveBlending }));
    scene.add(stars);

    /* ---------- wave grid of particles */
    const GX = EB.COARSE ? 70 : 120, GZ = EB.COARSE ? 40 : 60;
    const wg = new T.BufferGeometry();
    const wp = new Float32Array(GX * GZ * 3), wc = new Float32Array(GX * GZ * 3);
    for (let ix = 0; ix < GX; ix++) for (let iz = 0; iz < GZ; iz++) {
      const i = (ix * GZ + iz) * 3;
      wp[i] = (ix - GX / 2) * 0.42; wp[i + 1] = -4.2; wp[i + 2] = (iz - GZ) * 0.42 + 8;
      const c = palette[0].clone().lerp(palette[2], ix / GX);
      wc[i] = c.r; wc[i + 1] = c.g; wc[i + 2] = c.b;
    }
    wg.setAttribute('position', new T.BufferAttribute(wp, 3));
    wg.setAttribute('color', new T.BufferAttribute(wc, 3));
    const wave = new T.Points(wg, new T.PointsMaterial({ size: 0.11, map: dot, vertexColors: true, transparent: true, opacity: .9, depthWrite: false, blending: T.AdditiveBlending }));
    scene.add(wave);

    /* ---------- hero orb (icosahedron + wire shell + rings) */
    const orb = new T.Group();
    const core = new T.Mesh(new T.IcosahedronGeometry(2.1, 1),
      new T.MeshStandardMaterial({ color: 0x1a1f5c, emissive: 0x2a0f5c, emissiveIntensity: .55, metalness: .85, roughness: .22, flatShading: true }));
    const shell = new T.Mesh(new T.IcosahedronGeometry(2.75, 2),
      new T.MeshBasicMaterial({ color: 0x24e5d5, wireframe: true, transparent: true, opacity: .16 }));
    orb.add(core, shell);
    const ringMat = (c, o) => new T.MeshBasicMaterial({ color: c, transparent: true, opacity: o, side: T.DoubleSide });
    const r1 = new T.Mesh(new T.TorusGeometry(3.5, 0.025, 8, 160), ringMat(0x24e5d5, .7)); r1.rotation.x = 1.2;
    const r2 = new T.Mesh(new T.TorusGeometry(4.1, 0.018, 8, 160), ringMat(0xd946ef, .55)); r2.rotation.set(1.9, .5, 0);
    const r3 = new T.Mesh(new T.TorusGeometry(4.7, 0.012, 8, 160), ringMat(0x8b5cf6, .45)); r3.rotation.set(.4, 1.2, 0);
    orb.add(r1, r2, r3);
    /* satellites orbiting */
    const sats = [];
    for (let i = 0; i < 5; i++) {
      const m = new T.Mesh(new T.SphereGeometry(0.13, 16, 16), new T.MeshBasicMaterial({ color: palette[i % 4] }));
      m.userData = { r: 3.5 + (i % 3) * 0.6, s: 0.35 + i * 0.09, o: i * 1.25, tilt: 0.3 + i * 0.35 };
      orb.add(m); sats.push(m);
    }
    orb.position.set(4.6, 0.8, 0);
    scene.add(orb);

    /* ---------- Edubiz "play" triangles */
    const triShape = new T.Shape();
    triShape.moveTo(-0.8, -1); triShape.lineTo(1.1, 0); triShape.lineTo(-0.8, 1); triShape.lineTo(-0.8, -1);
    const triGeo = new T.ExtrudeGeometry(triShape, { depth: 0.38, bevelEnabled: true, bevelThickness: 0.12, bevelSize: 0.12, bevelSegments: 4 });
    triGeo.center();

    /* ---------- floating shapes */
    const geos = [
      triGeo,
      new T.TorusKnotGeometry(0.7, 0.22, 120, 16),
      new T.OctahedronGeometry(0.9, 0),
      new T.TorusGeometry(0.8, 0.28, 20, 60),
      triGeo,
      new T.DodecahedronGeometry(0.85, 0),
      new T.IcosahedronGeometry(0.8, 0),
      triGeo
    ];
    const floats = [];
    const spots = [
      [-6.5, 3.2, -2], [-4, -2.6, -5], [7.5, -3.5, -6], [-8, -0.5, -12],
      [5, 4.5, -14], [-5.5, 3.5, -20], [6, -1, -24], [-6, 1.5, -30],
      [5.5, -3, -34], [-5.5, 4, -40], [7, 2, -44], [-7, -2, -50]
    ];
    spots.forEach((p, i) => {
      const color = palette[i % 4];
      const mat = new T.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 0.22, metalness: .7, roughness: .25, flatShading: i % 2 === 0
      });
      const m = new T.Mesh(geos[i % geos.length], mat);
      const s = 0.7 + Math.random() * 0.6;
      m.scale.setScalar(s);
      m.position.set(p[0], p[1], p[2]);
      m.userData = { base: p.slice(), sp: 0.2 + Math.random() * 0.4, ph: Math.random() * 6.28, rs: (Math.random() - .5) * 0.8 };
      scene.add(m); floats.push(m);
    });

    /* ---------- state */
    let W = 0, H = 0, scrollP = 0, sp2 = 0, mx = 0, my = 0, tmx = 0, tmy = 0, raf = 0, running = true;
    const resize = () => {
      W = innerWidth; H = innerHeight;
      renderer.setSize(W, H, false);
      cam.aspect = W / H; cam.updateProjectionMatrix();
      orb.position.x = W < 820 ? 0 : 4.6;
      orb.position.y = W < 820 ? 2.2 : 0.8;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      scrollP = max > 0 ? scrollY / max : 0;
    };
    const onMove = (e) => { tmx = (e.clientX / innerWidth - .5) * 2; tmy = (e.clientY / innerHeight - .5) * 2; };
    const onVis = () => { running = !document.hidden; if (running) { last = performance.now(); loop(); } };
    addEventListener('resize', resize, { passive: true });
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('visibilitychange', onVis);
    resize(); onScroll();

    let last = performance.now(), t = 0;
    const orbPos = new T.Vector3();
    const loop = () => {
      if (!running) return;
      raf = requestAnimationFrame(loop);
      const now = performance.now(); const dt = Math.min(0.05, (now - last) / 1000); last = now;
      t += EB.REDUCE ? dt * 0.15 : dt;
      sp2 += (scrollP - sp2) * (1 - Math.exp(-4 * dt));
      mx += (tmx - mx) * (1 - Math.exp(-3 * dt));
      my += (tmy - my) * (1 - Math.exp(-3 * dt));

      /* camera flies forward through the scene as the page scrolls */
      cam.position.z = 14 - sp2 * 46;
      cam.position.x = mx * 0.9 + Math.sin(sp2 * 6.28) * 1.6;
      cam.position.y = 0.6 - my * 0.6 + Math.cos(sp2 * 4) * 0.8;
      cam.lookAt(Math.sin(sp2 * 3) * 1.2, 0, cam.position.z - 14);

      /* orb */
      core.rotation.x = t * 0.18; core.rotation.y = t * 0.24;
      shell.rotation.y = -t * 0.12; shell.rotation.z = t * 0.06;
      r1.rotation.z = t * 0.3; r2.rotation.z = -t * 0.22; r3.rotation.z = t * 0.16;
      const pulse = 1 + Math.sin(t * 1.6) * 0.025;
      core.scale.setScalar(pulse);
      sats.forEach((s) => {
        const u = s.userData, a = t * u.s + u.o;
        s.position.set(Math.cos(a) * u.r, Math.sin(a) * u.r * Math.sin(u.tilt), Math.sin(a) * u.r * Math.cos(u.tilt));
      });
      orb.position.z = -sp2 * 8;

      /* floats bob & spin */
      floats.forEach((m) => {
        const u = m.userData;
        m.position.y = u.base[1] + Math.sin(t * u.sp + u.ph) * 0.45;
        m.position.x = u.base[0] + Math.cos(t * u.sp * 0.7 + u.ph) * 0.25;
        m.rotation.x += dt * (0.25 + u.rs); m.rotation.y += dt * (0.35 - u.rs * .5);
      });

      /* wave grid */
      const a = wg.attributes.position.array;
      for (let ix = 0; ix < GX; ix++) for (let iz = 0; iz < GZ; iz++) {
        const i = (ix * GZ + iz) * 3;
        a[i + 1] = -4.2 + Math.sin(ix * 0.28 + t * 1.2) * 0.38 + Math.cos(iz * 0.32 + t * 0.9) * 0.38;
      }
      wg.attributes.position.needsUpdate = true;
      wave.position.z = cam.position.z - 14;

      /* logo bám tâm quả cầu: chiếu tâm sang toạ độ màn hình, co giãn theo khoảng cách camera */
      cam.updateMatrixWorld();
      orbPos.copy(orb.position);
      const dist = cam.position.distanceTo(orbPos);
      orbPos.project(cam);
      const vis = orbPos.z < 1 && dist > 3;
      if (vis) {
        const px = (H / 2) / Math.tan(cam.fov * Math.PI / 360) / dist;      // số pixel cho 1 đơn vị 3D
        const lw = 2.1 * 1.5 * px * pulse;                                     // rộng ~75% đường kính lõi
        const op = Math.min(1, Math.max(0, (dist - 4) / 6)) * (W < 820 ? 0.3 : 1);   // điện thoại: quả cầu nằm sau tiêu đề nên logo mờ như hình chìm
        logoEl.style.width = lw.toFixed(1) + 'px';
        logoEl.style.opacity = op.toFixed(3);
        logoEl.style.transform = `translate3d(${((orbPos.x + 1) / 2 * W).toFixed(1)}px,${((1 - orbPos.y) / 2 * H).toFixed(1)}px,0) translate(-50%,-50%)`;
      } else logoEl.style.opacity = 0;

      stars.rotation.y = t * 0.012 + sp2 * 0.6;
      L1.position.x = -8 + Math.sin(t * .5) * 3; L2.position.y = -3 + Math.cos(t * .4) * 3;
      renderer.render(scene, cam);
    };
    loop();

    this._cleanup = () => {
      running = false; cancelAnimationFrame(raf);
      removeEventListener('resize', resize); removeEventListener('scroll', onScroll);
      removeEventListener('pointermove', onMove); document.removeEventListener('visibilitychange', onVis);
      renderer.dispose();
    };
  },
  beforeUnmount() { this._cleanup && this._cleanup(); }
};
