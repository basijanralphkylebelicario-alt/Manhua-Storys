(function () {
  /* ---------- DATA: 50 original stories (5 per genre) ---------- */
  const G = ["Fantasy","Action","Romance","Mystery","Sci-Fi","Comedy","Horror","Drama","Adventure","Slice of Life"];
  const A = ["Mara Velden","Joon Park","Elise Hart","Tomas Reyes","Ayla Moreno","Kenji Aoki","Nia Okafor","Luca Bianchi","Hana Lim","Owen Blake","Priya Nair","Sofia Duarte","Daniel Cruz","Mei Tan","Isaac Romero","Clara Weiss","Rafael Santos","Yuna Choi","Ben Alvarez","Lena Fischer"];
  // [title, chapter title, synopsis, opening paragraph]
  const R = [
    ["Limitness Predation","Chapter 1: The Warm Crown","A scullery maid discovers the dying king's crown answers only to her.","Mira had scrubbed the throne room floor for six years before the crown rolled off its cushion and stopped against her bucket. It was warm, and it hummed her name."],
    ["A Regressors Tale of Cultivation","Chapter 1: The First Light","A lamplighter follows lanterns that appear only for the lost.","Tomas lit the last lamp on Hollow Road and turned to go home, but one lantern further down was already burning. He had never lit it."],
    ["Damn Reincarnation","Chapter 1: A Map of Nowhere","The final mapmaker of a vanishing kingdom redraws a world that keeps changing.","Ilsa unrolled yesterday's map and found a river where the market used to be. The ink was still wet, and she had not drawn it."],
    ["I Became the First Prince","Chapter 1: Tea for the Tide","A coastal witch trades small spells for stories from sailors.","Nerys stirred her kettle at the edge of the harbor and counted seven boats coming home. There should have been eight."],
    ["Monster Streaming Star","Chapter 1: Overdue Scales","A nervous clerk is sent to collect unpaid taxes from a dragon.","Pell checked the ledger twice before knocking on the mountain. The dragon owed four hundred years of back taxes and had a very short temper."],

    ["The Necromancer Who Spares No Expense","Chapter 1: Package Zero","A courier must cross a warring city with a package no one will name.","Dax strapped the steel case to his back and counted the checkpoints between him and the river. There were nine, and the first was already closing."],
    ["Reverend Insanity ","Chapter 1: Ten Minutes Left","A retired bodyguard has one night to protect a witness.","Reiko had promised never to protect anyone again. The knock on her door came at eleven, and the clock on the wall said she had ten minutes."],
    ["The Martial Genius Who Remembers Everything Rebellion","Chapter 1: The Jump","Street runners fight a city that has banned the rooftops.","Jun measured the gap between towers, forty feet and a crosswind, and heard the drones turn toward her. She jumped anyway."],
    ["SSS-Class Suicide Hunter Last SSS-Class Suicide Hunter","Chapter 1: Sand and Thunder","A retired champion returns to the arena to save his student.","Bram hung his old gloves on a nail and swore he was finished. Then the crowd roared a name that was not his, and it was his student's."],
    ["Eternally Regressing Knight","Chapter 1: Brakes Optional","Rival racers chase a legend down a mountain road.","The mountain road had twenty-one hairpins and one rule. Kai pressed the pedal down at the first turn, and the rule no longer mattered."],

    ["My Girlfriend Returned as a Dragon","Chapter 1: Wet Ink","Two strangers fall in love through letters left on a park bench.","Sol found the first letter folded under the bench, soft with rain. The handwriting was careful, and it began with the words: whoever you are."],
    ["The Copying Skill With Affinity","Chapter 1: The 8:15 Regular","A barista and a commuter share a silent coffee ritual.","Hana knew the 8:15 customer's order before he reached the counter. He had never said a word to her, and today he left a note."],
    ["My Slain Dragon Bride","Chapter 1: The Return","An orchard owner meets her first love again after ten years.","Wren had planted these apple trees alone, so the footsteps in the rows startled her. The man at the gate was ten years older and still smiled the same way."],
    ["Solo Swordmaster","Chapter 1: Hello, Who's This?","A misdialed text becomes a daily conversation.","Eun-ji typed a message to her sister and sent it to the wrong number. The reply came in seconds, and it was kind."],
    ["The Regressor And The Blind Saint","Chapter 1: The Glow","A lonely student keeps seeing glowing lights wherever one classmate walks.","Noa saw the first light when Ari passed her in the hallway, a pale green flicker near his collar. Nobody else seemed to notice it."],

    ["A Painter Who Draws Dungeon","Chapter 1: Lesson at Twelve","A tutor finds that every student shares the same recurring dream.","Elan taught his last student at midnight, because the family insisted. Tonight the boy yawned and described, word for word, the dream the other students had."],
    ["Shadow Slave","Chapter 1: The Dark Beam","A detective investigates a lighthouse that stopped shining.","Inspector Okoro climbed one hundred and twelve steps to find the lamp room locked from inside. The lamp was still warm."],
    ["Sword Genius Endless Regression","Chapter 1: The Key Box","A locksmith inherits seven keys that open nothing.","Odile's uncle left her a small box with seven brass keys and a note that said: find the door. None of the locks in his house matched."],
    ["The Mage in Camouflage","Chapter 1: The Extra Line","An accountant finds payments made to someone who died years ago.","Piotr saw the extra line on page forty and stopped breathing. The payee had been dead for ten years, and the payments began last week."],
    ["Whispers of a Scheming Demon","Chapter 1: Stopped at Nine","A clockmaker's perfect alibi begins to unravel.","Every clock in the shop had stopped at nine, which was exactly when he claimed to be at home. Detective Sato wrote down the time and looked at his hands."],

    ["The Gene Of AI","Chapter 1: Night Shift","A station caretaker hears a song from an empty module.","Vesna ran the night shift alone on Orbit Seven, so the lullaby from Module C should not have existed. Module C had no power and no crew."],
    ["Nano Machine","Chapter 1: The Last Tree","A farmer guards the final orchard in a flooded future city.","Tavi watered the last apple tree on the roof of a drowned tower. Today the first fruit had grown, and someone below had noticed."],
    ["Real Man","Chapter 1: Fair Trade","A city sells memories as currency until a buyer returns one.","Lio sold a childhood birthday for rent and felt nothing but a small hole. A week later a stranger handed it back with a warning."],
    ["Techno Panic Universe","Chapter 1: Static","A radio operator receives a message from a colony that died decades ago.","Captain Ruiz listened to the static for hours before the voice came through, calm and cheerful, reading tomorrow's weather. Titan Colony had been silent for thirty years."],
    ["False Paradise","Chapter 1: Low Tide","A scavenger dives the flooded neon streets for lost data.","Bex pulled on the diving rig and dropped into Sector Nine, where the signs still glowed under three meters of water. Something below was glowing back."],

    ["Ramen Dungeon","Chapter 1: Grand Opening","The only restaurant on dungeon floor twelve serves adventurers and monsters alike.","Gus hung the sign over the dungeon door and put the broth on. His first customer was a goblin, and his second was a knight who wanted to fight it."],
    ["A Cat Adopted by Wolf Family?","Chapter 1: The Boardroom Nap","An intern realizes the company's real boss is a cat.","Priya noticed that every important decision happened right after the cat sat on a document. By Friday she was filing paperwork under its paw."],
    ["Rise of the Mountain Chief","Chapter 1: Who Ate the Spellbook","Three wizards share a cramped apartment and one very expensive rent.","Someone had eaten the spellbook, and the three roommates stared at the crumbs. Everyone agreed it was definitely not them."],
    ["Eat & GO","Chapter 1: Club Rules","A school club solves other people's problems and causes a few of its own.","The Paper Lantern Club had three members, one broken lantern and zero successful cases. Then a first-year walked in with a very strange request."],
    ["Take A Good Look At Me Now","Chapter 1: Wrong Cape","A delivery rider is mistaken for the city's greatest hero.","Milo delivered a pizza to the rooftop and the crowd below cheered. Somehow he was wearing a cape he did not remember putting on."],

    ["Im an Infinite Regressor But I've Got Stories to Tell","Chapter 1: Button Thirteen","An elevator button appears for a floor that doesn't exist.","Nell noticed it after midnight, a button marked thirteen in an eleven-story building. The elevator had already started to go up."],
    ["The Backwards House","Chapter 1: The Small Voice","A boy hears someone whispering his name from under the stairs.","Kenji heard it every night at three, a small voice under the stairs calling him gently. Tonight it stopped calling and started counting."],
    ["Harvest Moon Motel","Chapter 1: Vacancy","Travelers at a roadside motel find every room already occupied.","The sign said vacancy, but every key on the board was missing. Dara decided that was a problem for morning, which was her first mistake."],
    ["Moon Child","Chapter 1: Sunday Practice","A village choir sings only on nights when someone disappears.","Everyone in Ashmere loved the choir, and nobody asked why they smiled so much. Ivo sat in the back pew and noticed they never blinked."],
    ["The Unruly Immortals","Chapter 1: Channel Zero","A hotel television shows guests who haven't arrived yet.","Room 404 had one channel, and it showed the room, empty. Then the door opened on the screen, and Sam was standing there."],

    ["The Villain’s Pure Love","Chapter 1: The Recipe Box","A daughter learns her family's history from her mother's recipes.","Yuna opened the dented recipe box and found a stain on every card. Each one told a story her mother had never mentioned."],
    ["Cat And Dog","Chapter 1: Last Lesson","An old piano teacher must choose between her home and her students.","Madame Orlov counted the coins on her piano and knew it was not enough. Three students arrived anyway, because the lesson was the lesson."],
    ["Yearning The Nighful of you","Chapter 1: Anchors Up","Estranged brothers reunite to sell their late father's fishing boat.","The boat smelled of salt and diesel and their father. Dev and Marco stood on opposite sides of it and had not spoken in six years."],
    ["The Quiet Graduate","Chapter 1: Cap and Gown","A shy student faces graduation day with no one to attend.","Lena straightened her cap in the mirror and rehearsed a smile. Nobody was coming, and she had decided to go anyway."],
    ["Fields of Tomorrow","Chapter 1: First Rain","A farming family fights to save its land after a drought.","The sky stayed empty for ninety days before the first clouds arrived. Tomas's father looked up and did not dare to hope."],

    ["The Newbie Civil Servant Hunts Villains Before Going Home","Chapter 1: The Rising Sea","Sailors who hear the sea's moods search for an island that appears once a century.","Kora pressed her ear to the hull and heard the sea sigh, restless and hungry. It was the third night of the century's last full moon."],
    ["Got a Gallery in the Wild","Chapter 1: Parcel in Orbit","A courier delivers parcels between stations until one starts ticking.","Jett docked at Station Nine with a flat gray parcel under his arm. It was the quietest delivery of his career until it began to tick."],
    ["The Shepherd Wizard","Chapter 1: Base Camp","A team of climbers searches for a lost city above the clouds.","The team reached base camp at dawn, with thin air and thinner supplies. Above them the clouds parted for a moment and showed a tower."],
    ["Ode of the Brave","Chapter 1: North Is Wrong","A compass that always points the wrong way leads a girl to treasure.","Pia's grandfather gave her a compass and said: never trust it. It pointed south, and she had never been so sure she should follow it."],
    ["Black Badger","Chapter 1: Downstream","Two siblings float down a golden river toward a lost valley.","The river glowed amber at sunrise, and the raft drifted without a paddle. Rin held the map, and Ash held on."],

    ["Is It Bad That the Main Character’s a Roleplayer?","Chapter 1: The 6:40","Strangers at the same bus stop slowly become friends.","Jae arrived at the stop at 6:35 every morning and nodded at the old man with the thermos. Today he nodded first."],
    ["The Bakery Next Door","Chapter 1: Fresh Bread","A new baker and a veteran neighbor compete, then cooperate.","Pilar opened her bakery at five and the smell reached the old shop next door. Mr. Ferro knocked on the wall and shouted that she was too early."],
    ["Assistant Manager Lee's Survival Story","Chapter 1: Seeds","A teenager joins her grandfather's garden club of retired neighbors.","Hoa expected boredom and found a dozen retirees arguing about tomatoes. Her grandfather handed her a trowel without a word."],
    ["Monochrome Lovers","Chapter 1: Lanterns On","A student works a night market stall and meets the whole neighborhood.","Beni lit the stall's lantern at dusk and the street filled up within minutes. Everyone had a story, and most wanted to tell it over skewers."],
    ["Rainy Season Library","Chapter 1: Dry Corner","A small library becomes a refuge every time it rains.","When the first drops fell, the library door was already open. Mrs. Adeyemi put the kettle on and counted how many people would come."]
  ];
  // Two follow-up paragraphs per genre (edit freely)
  const MID = {
    "Fantasy":"Magic in that world never came free. Every wonder had a price, and the old stories agreed on one thing: the price was always paid by the person least ready for it.",
    "Action":"There was no time to plan, only to move. Every second shaved off the clock was a second someone else was running out of, and nobody was coming to help.",
    "Romance":"It was a small thing, really, the kind of moment people forget by evening. But the heart keeps its own records, and this one was already underlined.",
    "Mystery":"The facts refused to line up, and that was the first clue. Someone had arranged them neatly, which meant someone had something to hide.",
    "Sci-Fi":"The instruments agreed with each other, which was almost more worrying than if they had not. Whatever this was, it was consistent, and consistent things are made on purpose.",
    "Comedy":"Naturally, nothing went according to plan. Within five minutes there were three new problems, one of them on fire, and everyone was blaming the wrong person.",
    "Horror":"The house was silent in the way a held breath is silent. Every instinct said to leave, and every step said the exit had moved a little farther away.",
    "Drama":"Some conversations are put off for years because both people already know how they end. Today there was no more room left to put it off.",
    "Adventure":"The map ended here, which meant everything beyond was a guess. The wind picked up, the horizon opened, and the only way forward was forward.",
    "Slice of Life":"Nothing remarkable happened, and that was exactly what made the morning good. Small routines, repeated kindly, turn out to be the way people hold each other up."
  };
  const END = {
    "Fantasy":"By nightfall the first of many choices had been made. Behind the closed door the old magic stirred, and the real story, the one the legends skipped, began.",
    "Action":"The door slammed open, the clock hit zero, and the only thing left to decide was whether to run or to stand. To be continued.",
    "Romance":"Neither of them said what they were thinking. They didn't need to, because the next chapter had already begun in the quiet between them.",
    "Mystery":"The answer was close now, close enough to hear it breathe. One more question, one more door, and the whole picture would turn around.",
    "Sci-Fi":"The screen flickered once and settled. Whatever waited on the other side had been patient for a very long time, and it was done waiting.",
    "Comedy":"Everyone agreed to never speak of it again, which lasted until the next morning. Somewhere in the distance, something else exploded, right on schedule.",
    "Horror":"The light flickered, then held. It would have been easier if it had gone out, because then there would have been nothing to see.",
    "Drama":"It was not a happy ending, nor a sad one, but an honest one. For the first time in years, the words finally said what they were meant to say.",
    "Adventure":"The horizon was still far, the road still unknown, but the first step had been taken. Everything else was only distance.",
    "Slice of Life":"By evening the light turned gold and the street went quiet. It had been an ordinary day, and a good one, and that was plenty."
  };

  const S = R.map((r, i) => ({
    id: i + 1,
    n: String(i + 1).padStart(2, "0"),
    title: r[0], chapter: r[1], syn: r[2], hook: r[3],
    genre: G[Math.floor(i / 5)],
    author: A[i % A.length],
    rating: (4 + ((i * 7) % 10) / 10).toFixed(1)
  }));

  /* ---------- helpers ---------- */
  const $ = id => document.getElementById(id);
  const get = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
  const set = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  // Image box: shows the file name until a real image exists in /images
  const pic = (cls, file, alt) =>
    `<div class="pic ${cls}"><img src="images/${file}" alt="${alt}" loading="lazy" onerror="this.remove()"><span>${file}</span></div>`;
  const card = s =>
    `<article class="card">${pic("cv", `cover-${s.n}.jpg`, s.title + " cover")}<h3 title="${s.title}">${s.title}</h3><p class="mu">${s.genre} · ★ ${s.rating}</p><a class="btn" href="story.html?id=${s.id}">Read Story</a></article>`;

  /* ---------- FEATURE 1: dark / light mode ---------- */
  const root = document.documentElement;
  root.dataset.theme = get("theme", "dark");
  const tb = $("themeBtn");
  if (tb) tb.onclick = () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    set("theme", root.dataset.theme);
  };

  // nav: highlight current page + random story link
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".top nav a").forEach(a => {
    if (a.getAttribute("href") === here) a.classList.add("on");
  });
  const rnd = $("rand");
  if (rnd) rnd.href = "story.html?id=" + (1 + Math.floor(Math.random() * S.length));

  const page = document.body.dataset.page;

  /* ---------- HOME ---------- */
  if (page === "home") {
    // FEATURE 2: image slideshow
    const F = [0, 5, 10, 15, 20, 40].map(i => S[i]);
    const sl = $("slides");
    sl.innerHTML = F.map(s =>
      `<div class="slide">${pic("cv", `cover-${s.n}.jpg`, s.title + " cover")}<div><h2>${s.title}</h2><p class="mu">${s.genre} · by ${s.author} · ★ ${s.rating}</p><p>${s.syn}</p><a class="btn" href="story.html?id=${s.id}">Read Story</a></div></div>`).join("");
    let cur = 0;
    const show = i => {
      cur = (i + F.length) % F.length;
      [...sl.children].forEach((e, k) => e.classList.toggle("on", k === cur));
    };
    $("prev").onclick = () => show(cur - 1);
    $("next").onclick = () => show(cur + 1);
    show(0);
    setInterval(() => show(cur + 1), 6000);

    $("trending").innerHTML = S.slice(0, 12).map(card).join("");
    $("popular").innerHTML = [...S].sort((a, b) => b.rating - a.rating).slice(0, 6).map((s, i) =>
      `<li><a href="story.html?id=${s.id}">${pic("", `cover-${s.n}.jpg`, s.title + " cover")}<span><b><span class="rank">${i + 1}</span>${s.title}</b><span class="mu">${s.genre} · ★ ${s.rating}</span></span></a></li>`).join("");
    $("genres").innerHTML = G.map(g => `<a class="chip" href="browse.html?g=${encodeURIComponent(g)}">${g}</a>`).join("");
  }

  /* ---------- BROWSE ---------- */
  if (page === "browse") {
    const q = new URLSearchParams(location.search);
    let g = q.get("g") || "All";
    const term = (q.get("q") || "").toLowerCase();
    if ($("search")) $("search").value = q.get("q") || "";
    const draw = () => {
      $("chips").innerHTML = ["All", ...G].map(x => `<button class="chip${x === g ? " on" : ""}" data-g="${x}">${x}</button>`).join("");
      $("chips").querySelectorAll("button").forEach(b => b.onclick = () => { g = b.dataset.g; draw(); });
      const list = S.filter(s => (g === "All" || s.genre === g) &&
        (s.title + s.author + s.genre).toLowerCase().includes(term));
      $("count").textContent = `${list.length} ${list.length === 1 ? "story" : "stories"}`;
      $("grid").innerHTML = list.map(card).join("") || '<p class="empty">No stories match. Try another title or genre.</p>';
    };
    draw();
  }

  /* ---------- STORY ---------- */
  if (page === "story") {
    const id = parseInt(new URLSearchParams(location.search).get("id"), 10);
    const s = S[id - 1];
    const box = $("story");
    if (!s) {
      box.innerHTML = '<p class="empty">Story not found. <a class="btn" href="browse.html">Browse stories</a></p>';
    } else {
      document.title = s.title + " - Inkwell Stories";
      const prev = S[id - 2], next = S[id];
      box.innerHTML = `
        <div class="sbox">
          ${pic("cv", `cover-${s.n}.jpg`, s.title + " cover")}
          <div>
            <h1>${s.title}</h1>
            <p class="mu">By ${s.author} · ${s.genre} · ★ ${s.rating}</p>
            <div class="acts">
              <button class="btn alt" id="like">♡ Like</button>
              <button class="btn alt" id="syn">Hide synopsis</button>
            </div>
            <p id="synopsis"><b>Synopsis:</b> ${s.syn}</p>
          </div>
        </div>
        <section class="reader">
          <h2>${s.chapter}</h2>
          <p class="mu">Single chapter story</p>
         
          <p>${s.hook}</p>
          <p>${MID[s.genre]}</p>
          <p>${END[s.genre]}</p>
        </section>
        <nav class="pn" aria-label="Story navigation">
          ${prev ? `<a class="btn alt" href="story.html?id=${prev.id}">← ${prev.title}</a>` : "<span></span>"}
          ${next ? `<a class="btn alt" href="story.html?id=${next.id}">${next.title} →</a>` : "<span></span>"}
        </nav>`;

      // FEATURE 3: like button (remembered)
      const likes = get("likes", []);
      const lb = $("like");
      const paint = () => { const on = likes.includes(id); lb.classList.toggle("liked", on); lb.textContent = on ? "♥ Liked" : "♡ Like"; };
      lb.onclick = () => { const i = likes.indexOf(id); i > -1 ? likes.splice(i, 1) : likes.push(id); set("likes", likes); paint(); };
      paint();

      // FEATURE 4: show / hide synopsis
      $("syn").onclick = () => {
        const p = $("synopsis");
        p.hidden = !p.hidden;
        $("syn").textContent = p.hidden ? "Show synopsis" : "Hide synopsis";
      };

      // FEATURE 5: reading progress bar
      const bar = $("bar");
      const onScroll = () => {
        const h = document.documentElement.scrollHeight - innerHeight;
        bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + "%";
      };
      addEventListener("scroll", onScroll);
      onScroll();
    }
  }
})();
