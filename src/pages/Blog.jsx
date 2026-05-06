import { Link } from 'react-router-dom';

// Photos live in /public so they ship with the deployed site.
// import.meta.env.BASE_URL handles the GitHub Pages /my-portfolio/ prefix.
const base = import.meta.env.BASE_URL;
const photos = {
  pier: `${base}pier.jpg`,
  preTournament: `${base}pre_tournament.JPG`,
  block: `${base}jack_block.JPG`,
  sixMan: `${base}760_6man.jpeg`,
};

function Blog() {
  return (
    <main className="blog-page">
      <header
        className="blog-hero"
        style={{ '--hero-bg': `url(${photos.sixMan})` }}
      >
        <div className="blog-hero-inner">
          <Link to="/" className="blog-back">← Back to portfolio</Link>
          <p className="blog-eyebrow">Spring Break 2026 · Travel Journal</p>
          <h1>Sand, Scoreboards, and Sun</h1>
          <p className="blog-dek">
            Huntington Beach, Long Beach, and North County — coaching,
            competing, and winning.
          </p>
          
        </div>
      </header>

      <article className="blog-article">
        <section className="blog-post">
          <h2>Huntington Beach</h2>

          <figure className="blog-figure blog-figure-wide">
            <img src={photos.pier} alt="Huntington Beach pier on tournament morning." />
            <figcaption>
              The classic Huntington Beach Pier.
            </figcaption>
          </figure>

          <p>
            I pulled into Huntington Beach on a Saturday morning with my backpack, a
            cup full of Vigilante coffee, and a game strategy to win. My plan for the first half of
            break was simple — coach my Tamarack team through a tournament at
            the pier courts, catch up with my coaching friends who are also there, and try not to 
            get too sunburned before the drive up to Long Beach the next day.
          </p>

          <p>
            Huntington beach is a different planet during spring break as everyone from the inland empire comes out
            and the courts between the pier run continuous from sunrise to dark with every level of volleyball.
            My athletes were nervous as for a lot of the younger ones not in high school it had been some time 
            since their last torunament and the amount of people at the beach was not helping.
            We took our time trying to focus on getting as warmed up as possible and confident in our ability to 
            play good volleyball before our first game of the day. By the end of a very long day the team was 
            done with pool play and grinding through the club level bracket which is right below gold. 
            We proceeded to lose our second match in the semis but everyone was very happy to be done and on
            the way home sooner rather than later as most were going back to Oceanside.
          </p>

          <figure className="blog-figure blog-figure-wide">
            <img src={photos.preTournament} alt="Pre-tournament setup at Huntington Beach." />
            <figcaption>Pre-tournament — tent up, courts ready.</figcaption>
          </figure>

          <p>
            After we packed up the tent me and the club director met up with some other coaches from GCU
            and Washington who had both been previous Tamarack coaches. We got dinner nearby at a burrito spot 
            while waiting for traffic to die down then we all went our seperate ways to our homes. Like 
            always the traffic near Camp Pendelton was horrible and added an extra 30 minutes to my drive
            but I was listing to Halo lore youtube videos so it wasn't horrific.
          </p>
        </section>

        {/* ------- Post 2: Long Beach ------- */}
        <section className="blog-post">
          <h2>Long Beach Tournament</h2>

          <figure className="blog-figure blog-figure-wide">
            <img src={photos.block} alt="Mid-game block at Long Beach." />
            <figcaption>Up at the net in Long Beach.</figcaption>
          </figure>

          <p>
            Long Beach was the second half of the weekend with no coaching duties, no BVCA trophy to chase — 
            just a doubles play day with my teammates Christian. We started off the day really strong grabbing
            breakfast in Oceanside to get fueled up before a long day of playing in the sun and wind of Long Beach.
          </p>

          <p>
            Like all other beach volleyball tournaments we started 30 minutes late because without someone 
            breathing down your neck people will run late. We were in a pool of 4 teams so we were playing
            games to 28 and in every single game of poolplay we won but went to OT pretty much every game 
            which killed our energy. We ended up taking 1st place in our pool by going undefeated but but 
            that did not mean we finished first of the tournament.
          </p>

          <p>
            After sitting around for over an hour waiting for the 5 team pools to finish we finally were able
            to start playoffs we had won pool 5 so were seeded 5th out of 20 teams in the playoffs. Up until this 
            point it had been a beautiful day with super low wind and a little bit of cloud cover but right
            as we started to warm up for our first game against the 12 seed a super gnarly wind picked up and 
            my partner stuggled. We eneded up losing 15-21 to a team we should have destroyed and a first round 
            exit was not a good feeling after winning our pool. However because of an early exit we were able to 
            leave earlier than expected and get back home and have some dinner before a chill night to recover.
          </p>
        </section>

        
      </article>

      <div className="blog-footer-cta">
        <Link to="/" className="btn btn-primary">← Back to the portfolio</Link>
      </div>
    </main>
  );
}

export default Blog;
