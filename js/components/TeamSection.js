/* =====================================================================
   03 · TeamSection — Giá 1 nhân sự, nhận được 1 đội ngũ (sơ đồ quỹ đạo)
   ===================================================================== */
EB.components.TeamSection = {
  name: 'TeamSection',
  emits: ['open'],
  data: () => ({ c: window.EDUBIZ_CONTENT.team }),
  template: `
    <section class="sec" id="team">
      <sec-head num="03" :label="c.kicker" en="ONE PARTNER · FULL TEAM" />
      <div class="team-grid">
        <div class="team-copy">
          <grad-title :parts="c.title" />
          <p class="body-lg" v-reveal="'up'">{{ c.p1 }}</p>
          <p class="body" v-reveal="'up'">{{ c.p2 }}</p>
          <p class="turn" v-reveal="'up'"><ico n="spark" s="18"/> {{ c.turn }}</p>
          <p class="body" v-reveal="'up'">{{ c.p3 }}</p>
        </div>

        <div class="orbit-wrap" v-reveal="'zoom'">
          <div class="orbit">
            <span class="orbit-ring r1"></span><span class="orbit-ring r2"></span><span class="orbit-ring r3"></span>
            <div class="orbit-spin">
              <span v-for="(r, i) in c.roles" :key="i" class="orbit-node"
                    :style="{ '--a': (i * 360 / c.roles.length) + 'deg' }">
                <span class="orbit-node-in"><b>{{ String(i + 1).padStart(2, '0') }}</b>{{ r }}</span>
              </span>
            </div>
            <button class="orbit-core" type="button" @click="$emit('open', 'team')" data-cursor aria-label="Xem ảnh đội ngũ">
              <img src="assets/team.jpg" alt="Đội ngũ Edubiz Media">
              <span class="orbit-core-cap"><b>1</b> đối tác<br>Edubiz</span>
            </button>
          </div>
        </div>
      </div>

      <div class="gets">
        <div class="gets-card" v-reveal="'up'">
          <h3 class="gets-h">Nhà trường nhận được</h3>
          <ul>
            <li v-for="(g, i) in c.gets" :key="i" v-reveal="'left'" :data-delay="i * 90">
              <span class="ck"><ico n="check" s="16" w="2.6"/></span>{{ g }}
            </li>
          </ul>
        </div>
        <div class="gets-note" v-reveal="'up'" data-delay="150">
          <p class="lead">{{ c.note }}</p>
          <p class="small">{{ c.small }}</p>
          <a class="btn-primary" href="#pricing" v-magnetic data-cursor><span>Xem bảng giá</span><ico n="arrow" s="14" w="2"/></a>
        </div>
      </div>
    </section>`
};
