import { Link } from 'react-router-dom';


const photos = {
  pier: 'https://images.unsplash.com/pier-1507525428034-b723cf961d3e?w=1600&q=80',
  volleyball: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1600&q=80',
  sunset: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&q=80',
  longBeach: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1600&q=80',
  coachHuddle: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1600&q=80',
};

function Blog() {
  return (
    <main className="blog-page">
      <header className="blog-hero">
        <div className="blog-hero-inner">
          <Link to="/" className="blog-back">← Back to portfolio</Link>
          <p className="blog-eyebrow">Spring Break 2026 · Travel Journal</p>
          <h1>Sand, Scoreboards, and Sun</h1>
          <p className="blog-dek">
            Huntington, Long Beach, and North County — coaching,
            competing, and winning.
          </p>
          <div className="blog-meta">
            <span aria-hidden="true">·</span>
            <span>Huntington Beach & Long Beach, CA</span>
            <span aria-hidden="true">·</span>
          </div>
        </div>
      </header>

      <article className="blog-article">
        {/* ------- Post 1: Huntington Beach ------- */}
        <section className="blog-post">
          <h2>Huntington Beach</h2>

          <figure className="blog-figure blog-figure-wide">
            <img src={photos.pier} alt="Huntington Beach pier." />
            <figcaption>
              The classic Huntington Beach Pier.
            </figcaption>
          </figure>

          <p>
            I pulled into Huntington Beach on a Saturday morning with my bag, a
            cup full of Vigilante coffee, and a game plan. My plan for the first half of
            break was simple — coach my Tamarack 16s through a tournament at
            the north-side courts, catch up with my coaching friends, and try not to 
            get sunburned my shoulders before the drive up to Long Beach the next day.
          </p>

          <p>
            Huntington is a different planet during spring break, the courts
            between the pier run continuous from sunrise to dark.
            My athletes were nervous as for most of them it had been some time 
            since their last torunament so we took our time trying to get as warmed 
            up and confident in our ability as we could before our first game of the day.
             By the end of a very long day the team was done with pool play and grinding through the
            club level bracket. We proceeded to lose our second match but everyone was very happy to
             be done and on the way home sooner rather than later.
          </p>


          <p>
            After we packed up the tent me and the club director met up with some other 
            coaches from GCU and Washington who had both been previous Tamarack coaches. We got dinner nearby
            while waiting for traffic to die down then we all went our seperate ways to our homes. Like 
            always the traffic near Camp Pendelton was horrible and added an extra 30 minutes to my drive
            but I was listing to Halo lore youtube videos so it wasn't horrific.
          </p>
        </section>

        {/* ------- Post 2: Long Beach ------- */}
        <section className="blog-post">
          <h2>Long Beach Tournament</h2>

          <figure className="blog-figure blog-figure-wide">
            <img src={photos.longBeach} alt="Long Beach winning photo." />
            <figcaption>Me and my teammate Christian.</figcaption>
          </figure>

          <p>
            Long Beach was the "off half" of the weekend no coaching
            duties, no points to chase — just a doubles play day with 
            teammates Christian. We started off the day really strong grabbing breakfast burriots
            to get fueled up before a long day of playing in the sun and wind of Long Beach.
          </p>

          <p>
            We were in a pool of 4 teams so we were playing games to 28 and in every single game
            of poolplay we won but went to OT pretty much every game. We ended up taking 1st place in our 
            pool but but that did not mean we finished first of the day.
          </p>

          <p>
            After sitting around for over an hour waiting for the 5 team pools to finish we finally were able
            to start playoffs. We had won pool 5 so were seeded 5th out of 20 teams in the playoffs but right
            as we started to warm up a super gnarly wind picked up and my partner stuggled. We eneded up losing 15-21
            to a team we should have destroyed and a first round exit was not a good feeling. However we were able to
            leave earlier and get back home and get some dinner before having a chill night.
          </p>
        </section>

        {/* ------- Closing reflection ------- */}
        <section className="blog-post">
          <h2>What I'm taking home</h2>

          <p>
            The drive back down the 405 on Sunday night gave me a lot of time
            to think, which is either the best or worst thing about that
            stretch of road depending on traffic. A few things I'm bringing
            back into the next couple of weeks at school and at the shop:
          </p>

          <ul className="reflection-list">
            <li>
              <strong>Small margins matter.</strong> Every match I played that
              came down to a 3rd set was decided by one or two bad touches,
              not by the best play we made. Same story in code — the bug is
              almost never in the interesting part.
            </li>
            <li>
              <strong>Coaching makes you a better player, and vice versa.</strong>
              Stepping in and out of both roles in the same week forced me to
              actually articulate the things I normally just "feel."
            </li>
            <li>
              <strong>Rest days are a feature, not a bug.</strong> The Wednesday
              I did almost nothing but eat, walk, and nap was the day I played
              my best volleyball of the week on Thursday. Filing that away for
              finals season.
            </li>
          </ul>

          <p>
            Back to CSUSM on Monday. Huge thanks to the Tamarack families who
            made the Huntington half of the trip possible, to Marcus for
            dragging me into Long Beach, and to whoever runs the free parking
            lot at Belmont Shore — you saved me real money.
          </p>

          <p className="blog-signoff">— Jack</p>
        </section>
      </article>

      <div className="blog-footer-cta">
        <Link to="/" className="btn btn-primary">← Back to the portfolio</Link>
      </div>
    </main>
  );
}

export default Blog;
