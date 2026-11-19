import Link from "next/link";

/**
 * Long-form body for /glossary/header-vs-lintel.
 *
 * Written to stay inside what the cited sources support: no span, size or
 * bearing-length figures are given, because those depend on the load and
 * the code edition in force locally. Where the International Residential
 * Code is mentioned, only the existence and purpose of Section R602.7 and
 * its span tables is stated. Do not add specific sizing numbers here without
 * a source and a reason a homeowner needs them.
 *
 * Rendered inside <Prose>, so direct children pick up article typography.
 */
export function HeaderVsLintelArticle() {
  return (
    <>
      <h2 id="short-answer">The short answer</h2>
      <p>
        A <strong>header</strong> is the horizontal member over an opening in a framed wall, the kind built from
        wood or steel studs. A <strong>lintel</strong> is the horizontal member over an opening in masonry: brick,
        concrete block or stone. Each one picks up the weight that the missing section of wall would have carried
        and passes it to the wall on either side of the opening.
      </p>
      <p>
        The job is identical. What changes is the material, how it is held up, how it fails, and which trade
        repairs it. That last part is why the distinction matters when you are reading an inspection report or a
        contractor&apos;s quote.
      </p>

      <HeaderLintelDiagram />

      <h2 id="what-is-a-header">What a header is</h2>
      <p>
        In a wood-framed house the walls are rows of vertical studs. Cut an opening for a door or window and you
        remove some of those studs, so something has to carry what they were holding. That is the header. It sits
        across the top of the opening and rests on shortened studs called <strong>jack studs</strong> (also called
        trimmers). Full-height <strong>king studs</strong> stand beside the jacks and tie the assembly into the
        wall. Short <strong>cripple studs</strong> fill the space between the header and the top of the wall.
      </p>
      <p>Common header materials:</p>
      <ul>
        <li>Two or three pieces of dimensional lumber nailed together, the most common in older and smaller openings.</li>
        <li>Engineered wood such as laminated veneer lumber (LVL) or glulam, used for wider openings.</li>
        <li>Steel, or steel sandwiched between lumber, for long spans such as wide patio or garage doors.</li>
      </ul>
      <p>
        In a load-bearing wall the header is sized, not guessed. The International Residential Code covers headers
        in Section R602.7 and provides span tables that set the header size, and the number of jack studs under each
        end, from the width of the opening, the width of the building and what the wall supports above it. A
        header under a roof only is not the same as one under a second floor. Local codes are based on these tables
        but can differ, so the building department or an engineer has the final word.
      </p>
      <p>
        In a wall that carries no load from above, the same code section does not require a load-bearing header.
        That is why the framing over an interior closet door is often just a flat piece of lumber.
      </p>

      <h2 id="what-is-a-lintel">What a lintel is</h2>
      <p>
        Masonry cannot span an opening on its own. Brick and block are strong when squeezed and weak when asked to
        bend, so the units above a window need something stiff underneath them. That is the lintel. Its ends rest
        on the masonry at each side of the opening.
      </p>
      <p>Common lintel types on houses:</p>
      <ul>
        <li>
          <strong>Steel angle.</strong> An L-shaped length of steel, the usual choice over windows, doors and
          garage openings in brick veneer. Often you can see its bottom edge as a thin dark line above the window.
        </li>
        <li>
          <strong>Precast or reinforced concrete.</strong> A solid concrete bar, common in block walls.
        </li>
        <li>
          <strong>Reinforced masonry.</strong> Block or brick with steel bars and grout inside, so the lintel looks
          like the rest of the wall.
        </li>
        <li>
          <strong>Stone.</strong> A single long stone, found on older houses.
        </li>
      </ul>
      <p>
        A brick arch does the same job without a beam, by turning the load into a push along the curve. Some
        arches still have a steel angle hidden behind them.
      </p>
      <p>
        Water is the lintel&apos;s main enemy. Masonry is not waterproof, so a properly built opening has flashing
        above the lintel and small drainage gaps called{" "}
        <Link href="/glossary/weep-hole">weep holes</Link> to let water back out. When that drainage is missing or
        sealed shut, a steel lintel sits wet and rusts.
      </p>

      <h2 id="comparison">Header vs. lintel at a glance</h2>
      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Header</th>
              <th scope="col">Lintel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Wall type</th>
              <td>Wood- or steel-framed walls</td>
              <td>Brick, block or stone, including brick veneer</td>
            </tr>
            <tr>
              <th scope="row">Usual materials</th>
              <td>Doubled lumber, LVL, glulam, sometimes steel</td>
              <td>Steel angle, precast concrete, reinforced masonry, stone</td>
            </tr>
            <tr>
              <th scope="row">What it rests on</th>
              <td>Jack studs, beside full-height king studs</td>
              <td>The masonry on each side of the opening</td>
            </tr>
            <tr>
              <th scope="row">Can you see it?</th>
              <td>No. It is behind drywall and siding</td>
              <td>Often. The edge of a steel angle shows above the opening</td>
            </tr>
            <tr>
              <th scope="row">How it usually fails</th>
              <td>Undersized or cut during a remodel; rot from a leak</td>
              <td>Rust that swells and lifts the brick; sagging</td>
            </tr>
            <tr>
              <th scope="row">What you notice</th>
              <td>Drywall cracks at the corners, a door or window that binds</td>
              <td>Rust stains, cracked mortar above the opening</td>
            </tr>
            <tr>
              <th scope="row">Who repairs it</th>
              <td>Framing or general contractor</td>
              <td>Mason</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="brick-houses-have-both">Many brick houses have both</h2>
      <p>
        Most brick houses built in the last several decades are wood-framed, with a single layer of brick on the
        outside as cladding. That is brick veneer. Over each window in a house like this there are two separate
        members doing two separate jobs:
      </p>
      <ul>
        <li>A wood <strong>header</strong> inside the framed wall, carrying the roof and floor loads of the house.</li>
        <li>
          A steel <strong>lintel</strong> in the brick, carrying only the brick directly above the opening.
        </li>
      </ul>
      <p>
        This matters when something looks wrong. Cracked brick above a window on a veneer house usually points to
        the lintel or to the brick itself, not to the structure holding up the house. On an older house with solid
        masonry walls, where the brick is the structure, the lintel is carrying real building load and the same
        crack deserves more urgency. If you are not sure which kind of house you have, a home inspector or mason
        can tell you in a few minutes.
      </p>

      <h2 id="why-the-words-get-mixed-up">Why the two words get mixed up</h2>
      <p>
        In British usage, &quot;lintel&quot; covers every beam over an opening, whatever the wall is made of. In
        the US, carpenters say &quot;header&quot; and masons say &quot;lintel,&quot; and plenty of people use
        whichever word they learned first. Neither is wrong in conversation. On a written quote, though, ask which
        member the contractor means, because replacing a header and replacing a lintel are different jobs, done by
        different trades, at different prices.
      </p>

      <h2 id="signs-of-trouble">Signs of trouble</h2>
      <h3>Around a header</h3>
      <ul>
        <li>Cracks in drywall or plaster running diagonally up from the top corners of a door or window.</li>
        <li>A door or window that used to work and now sticks, rubs or will not latch.</li>
        <li>Trim across the top of the opening that has bowed, or a gap that has opened above it.</li>
        <li>Any of these appearing after a remodel that widened an opening or removed part of a wall.</li>
      </ul>
      <h3>Around a lintel</h3>
      <ul>
        <li>Rust stains on the brick below the ends of the lintel, or steel that is flaking in layers.</li>
        <li>A horizontal crack in the mortar joint along the top of the opening.</li>
        <li>Stair-step cracks in the mortar rising from the upper corners of the opening.</li>
        <li>Brick above the opening that has lifted, bulged outward or dropped.</li>
      </ul>
      <p>
        Rusting steel takes up more room than the steel it started as, so a corroding lintel pushes the brick above
        it upward and outward. Masons and inspectors call this rust jacking.
      </p>
      <p>
        One caution: a crack pattern is a clue, not a diagnosis. Stair-step cracks can also come from foundation
        movement or from the normal expansion and shrinkage of masonry, and a sticking door can be seasonal
        humidity. Our guide to{" "}
        <Link href="/advice/cracked-brick-veneer">cracked brick veneer</Link> covers how to read the pattern and
        what the repairs typically cost.
      </p>

      <h2 id="when-to-call-a-professional">When to call a professional</h2>
      <p>Call a structural engineer, before a contractor, when:</p>
      <ul>
        <li>You want to add or widen an opening in a wall that may be load-bearing.</li>
        <li>A header, a lintel or the masonry above an opening is visibly sagging.</li>
        <li>A crack is getting longer or wider, or brick has moved out of line.</li>
        <li>The house has solid masonry walls and the lintel is damaged.</li>
      </ul>
      <p>
        An engineer&apos;s written report tells a contractor exactly what to build, and it gives you something to
        hold the finished work against. For the repair itself, a framing or general contractor handles a header
        and a mason handles a lintel. New or enlarged openings in a load-bearing wall are structural work, and
        building departments generally require a permit for it; ask yours before work starts.
      </p>
      <p>Three things to avoid:</p>
      <ul>
        <li>
          <strong>Do not cut into a wall to &quot;see what is there&quot;</strong> until you know whether it is{" "}
          <Link href="/glossary/load-bearing-wall">load-bearing</Link>.
        </li>
        <li>
          <strong>Do not seal weep holes</strong> or caulk a crack shut and call it fixed. That traps water and
          hides the symptom.
        </li>
        <li>
          <strong>Do not accept &quot;it should be fine&quot;</strong> from a contractor who is moving or widening
          an opening. Ask for the sizing in writing, and see how to{" "}
          <Link href="/advice/vetting-a-contractor">vet a contractor</Link> before you sign.
        </li>
      </ul>
    </>
  );
}

/**
 * Original two-panel diagram: a framed opening (header on jack studs) beside
 * a brick opening (steel angle lintel). Proportions are illustrative only.
 */
function HeaderLintelDiagram() {
  const navy = "var(--color-navy-900)";
  const amber = "var(--color-amber-700)";
  const line = "var(--color-ink-600)";
  const bricks: Array<{ x: number; y: number; w: number }> = [];
  for (let row = 0; row < 11; row++) {
    const y = 40 + row * 20;
    const offset = row % 2 === 0 ? 0 : 20;
    for (let x = 340 - offset; x < 620; x += 40) {
      const x0 = Math.max(x, 340);
      const x1 = Math.min(x + 40, 620);
      if (x1 - x0 <= 0) continue;
      // Leave the opening clear below the lintel line.
      if (y >= 120 && x1 > 420 && x0 < 540) {
        if (x0 < 420) bricks.push({ x: x0, y, w: 420 - x0 });
        if (x1 > 540) bricks.push({ x: 540, y, w: x1 - 540 });
        continue;
      }
      bricks.push({ x: x0, y, w: x1 - x0 });
    }
  }
  return (
    <figure className="my-8">
      <svg
        viewBox="0 0 660 320"
        role="img"
        aria-labelledby="hvl-title hvl-desc"
        className="w-full h-auto rounded-lg border border-ink-200 bg-white"
      >
        <title id="hvl-title">Header in a wood-framed wall compared with a lintel in a brick wall</title>
        <desc id="hvl-desc">
          Left: a framed opening with a header resting on jack studs, king studs beside them and cripple studs
          above. Right: a brick opening with a steel angle lintel resting on the brick at each side.
        </desc>

        {/* ---- Left: wood framing ---- */}
        <text x="160" y="24" textAnchor="middle" fontSize="14" fontWeight="600" fill={navy}>
          Wood-framed wall: header
        </text>
        <g fill="none" stroke={line} strokeWidth="1.5">
          <rect x="40" y="40" width="240" height="10" />
          <rect x="40" y="250" width="240" height="10" />
          {/* outer studs */}
          <rect x="40" y="50" width="10" height="200" />
          <rect x="270" y="50" width="10" height="200" />
          {/* king studs */}
          <rect x="80" y="50" width="10" height="200" />
          <rect x="230" y="50" width="10" height="200" />
          {/* jack studs */}
          <rect x="90" y="120" width="10" height="130" />
          <rect x="220" y="120" width="10" height="130" />
          {/* cripples */}
          <rect x="125" y="50" width="10" height="42" />
          <rect x="155" y="50" width="10" height="42" />
          <rect x="185" y="50" width="10" height="42" />
        </g>
        <rect x="90" y="92" width="140" height="28" fill={amber} fillOpacity="0.25" stroke={amber} strokeWidth="2" />
        <text x="160" y="111" textAnchor="middle" fontSize="13" fontWeight="600" fill={navy}>
          Header
        </text>
        <text x="160" y="190" textAnchor="middle" fontSize="12" fill={line}>
          Opening
        </text>
        <text x="160" y="282" textAnchor="middle" fontSize="11" fill={line}>
          Jack studs sit under each end of the header;
        </text>
        <text x="160" y="298" textAnchor="middle" fontSize="11" fill={line}>
          short cripple studs fill in above it.
        </text>

        {/* ---- Right: masonry ---- */}
        <text x="480" y="24" textAnchor="middle" fontSize="14" fontWeight="600" fill={navy}>
          Brick wall: lintel
        </text>
        <g fill="none" stroke={line} strokeWidth="1">
          {bricks.map((b, i) => (
            <rect key={i} x={b.x} y={b.y} width={b.w} height={20} />
          ))}
        </g>
        <rect x="400" y="114" width="160" height="6" fill={amber} stroke={amber} strokeWidth="1" />
        <text x="480" y="140" textAnchor="middle" fontSize="13" fontWeight="600" fill={navy}>
          Steel lintel
        </text>
        <text x="480" y="190" textAnchor="middle" fontSize="12" fill={line}>
          Opening
        </text>
        <text x="480" y="282" textAnchor="middle" fontSize="11" fill={line}>
          The lintel ends rest on the brick
        </text>
        <text x="480" y="298" textAnchor="middle" fontSize="11" fill={line}>
          at each side of the opening.
        </text>
      </svg>
      <figcaption className="mt-2 text-sm text-ink-600">
        Same job, different wall. Simplified diagram, not to scale.
      </figcaption>
    </figure>
  );
}
