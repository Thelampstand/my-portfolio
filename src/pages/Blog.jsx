import { Link } from 'react-router-dom';

// --- Photo sources ---
// These are Unsplash placeholder photos that match the vibe of the trip.
// Before you submit, swap the `src` values below with your own photos:
//   1) Drop your images in `src/assets/blog/` (create the folder).
//   2) Import them at the top of this file, e.g.:
//        import pierPhoto from '../assets/blog/huntington-pier.jpg';
//   3) Replace the src in the <img> tag with the imported variable.
// Keep the alt text so the page stays accessible.

const photos = {
  pier: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80',
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
          <h1>Sand, scoreboards, and the 405</h1>
          <p className="blog-dek">
            A week up the coast in Huntington and Long Beach — part coaching
            trip, part competing, part eating my way through the pier.
          </p>
          <div className="blog-meta">
            <span>April 6 – April 12, 2026</span>
            <span aria-hidden="true">·</span>
            <span>Huntington Beach & Long Beach, CA</span>
            <span aria-hidden="true">·</span>
            <span>6 min read</span>
          </div>
        </div>
      </header>

      <article className="blog-article">
        {/* ------- Post 1: Huntington Beach ------- */}
        <section className="blog-post">
          <h2>Day 1–3: Huntington Beach, where the courts never empty</h2>

          <figure className="blog-figure blog-figure-wide">
            <img src={photos.pier} alt="Huntington Beach pier at golden hour with volleyball nets in the foreground." />
            <figcaption>
              The walk from our rental to the north-side courts — classic
              Huntington stretch between the pier and Bolsa Chica.
            </figcaption>
          </figure>

          <p>
            I rolled into Huntington Beach on a Monday morning with two bags, a
            cooler full of Vigilante cold brew, and a stack of practice plans I
            was probably never going to open. My plan for the first half of
            break was simple — coach my Tamarack 16s through a tournament at
            the north-side courts, sneak in a few doubles matches of my own on
            the off-hours, and try not to sunburn my shoulders before the drive
            up to Long Beach on Thursday. I more or less nailed two of those.
          </p>

          <p>
            Huntington is a different planet during spring break. The courts
            between the pier and Warner run continuous from sunrise to dark.
            You show up at 6:30 a.m. to set your nets and there are already
            three games warming up from some junior college team that drove
            down from Fresno. My athletes were nervous — for most of them it
            was their first AAA-sanctioned event — so we did the thing coaches
            are supposed to do: we kept it light, kept it simple, and made them
            serve short until they trusted their own feet again. By the end of
            day two both teams were out of pool play and grinding through the
            bronze bracket. I was prouder of the second match they lost than
            the first one they won. That's usually how it goes.
          </p>

          <figure className="blog-figure blog-figure-split">
            <div>
              <img src={photos.volleyball} alt="Close-up of a beach volleyball court with two players at the net." />
              <figcaption>Sand level on Court 12.</figcaption>
            </div>
            <div>
              <img src={photos.coachHuddle} alt="Coach huddle with players under a pop-up canopy between matches." />
              <figcaption>Between-match huddle. Mostly water, a little strategy.</figcaption>
            </div>
          </figure>

          <p>
            On Tuesday night a couple of the other coaches and I played in the
            open king-of-the-court at the south-side courts. I have not been
            that humbled in a while. My partner and I took one game, held the
            king court for about forty-five seconds, and then got absolutely
            dismantled by a 19-year-old who is currently playing for Long Beach
            State. Competing as a player after a day of coaching is the best
            sanity check I know — it reminds you how small the margins are and
            how much the details matter when you can't think your way through
            a rally. Ate tacos afterwards at Sancho's. Worth it.
          </p>
        </section>

        <blockquote className="pull-quote">
          "Competing as a player after a day of coaching is the best sanity
          check I know — it reminds you how small the margins are."
        </blockquote>

        {/* ------- Post 2: Long Beach ------- */}
        <section className="blog-post">
          <h2>Day 4–6: Long Beach — slower pace, better food</h2>

          <figure className="blog-figure blog-figure-wide">
            <img src={photos.longBeach} alt="Long Beach coastline with the Queen Mary visible in the distance." />
            <figcaption>The view looking back from Belmont Shore.</figcaption>
          </figure>

          <p>
            Long Beach was the "off half" of the trip in theory. No coaching
            duties, no bracket to chase — just a two-day doubles showcase my
            old college teammate Marcus had signed us up for, plus a rest day
            wedged in between. In practice it ended up being the part of the
            week I'll remember longest. We were staying a block off Belmont
            Shore, which is the kind of neighborhood where the coffee shop
            owner wants to know your name, the grocery store has six different
            kinds of local hot sauce, and every third car in the parking lot
            has a roof rack with a surfboard on it. I fit in.
          </p>

          <p>
            The showcase itself went better than I had any right to expect.
            Marcus and I hadn't played a real match together in three years,
            but muscle memory is a real thing and his platform is still a
            brick wall. We went 4–1 in pool, lost in the semis to a couple of
            former AVP qualifiers, and closed out the bronze match in three.
            The crowd at Long Beach courts is rowdier than Huntington in a
            good way — it's a little more local, a little more loud — and
            playing in front of people who actually heckle you is a skill I've
            missed. My serve-receive felt shaky in warmups and fine by match
            three, which is either a sign of confidence or a sign I need to
            stop thinking so much.
          </p>

          <figure className="blog-figure blog-figure-wide">
            <img src={photos.sunset} alt="Beach sunset with two players silhouetted against the sky." />
            <figcaption>Last night of the trip. Somebody took this one for us.</figcaption>
          </figure>

          <p>
            The food is what really sold Long Beach for me. One of the other
            players took a group of us to a tiny Cambodian place off Anaheim
            Street for lunch on the rest day and I genuinely haven't stopped
            thinking about the lemongrass chicken since. We got dessert at a
            dessert place whose name I cannot pronounce, wandered around the
            Aquarium of the Pacific like we were twelve years old, and watched
            the sun drop into the water from a bench on the bike path. I took
            exactly two photos all day. Sometimes you just want to be there.
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
