/**
 * The FRC eye, rebuilt as vector so it stays crisp at any size and inherits
 * the surrounding text colour — the iris is punched out of the eye with an
 * even-odd fill rather than painted, so whatever is behind the logo shows
 * through it and the mark works on paper and on dark alike.
 *
 * Two wordings exist: the original reads ROOKIE CARD, the site's own name is
 * plural. `plural` picks between them.
 */

const EYE =
  // The lens: two mirrored curves meeting in points at either side. Wide and
  // shallow — the original mark is a letterbox, not a circle.
  'M38 74 Q100 16 162 74 Q100 132 38 74 Z ' +
  // The iris, as a counter-shape — evenodd turns it into a hole.
  'M129 74 A29 29 0 1 1 71 74 A29 29 0 1 1 129 74 Z'

interface LogoProps {
  className?: string
  /** ROOKIE CARDS rather than the original singular ROOKIE CARD. */
  plural?: boolean
}

/** Full lockup: the eye, the monogram and the name curved around it. */
export function Logo({ className, plural = false }: LogoProps) {
  // The curves are separate per wording: the longer word needs a shallower
  // arc, or the final letters climb the sides of the eye.
  const bottomArc = plural ? 'M6 78 Q100 196 194 78' : 'M10 80 Q100 190 190 80'
  const bottomId = plural ? 'frc-arc-bottom-plural' : 'frc-arc-bottom'

  return (
    <svg
      className={className}
      viewBox="0 0 200 152"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path id="frc-arc-top" d="M8 68 Q100 -16 192 68" fill="none" />
        <path id={bottomId} d={bottomArc} fill="none" />
      </defs>

      <path d={EYE} fillRule="evenodd" />

      <text className="frc-logo-mono" x="100" y="74" textAnchor="middle" dominantBaseline="central">
        FRC
      </text>

      <text className="frc-logo-arc">
        <textPath href="#frc-arc-top" startOffset="50%" textAnchor="middle">
          FICTIONAL
        </textPath>
      </text>

      <text className="frc-logo-arc">
        <textPath href={`#${bottomId}`} startOffset="50%" textAnchor="middle">
          {plural ? 'ROOKIE CARDS' : 'ROOKIE CARD'}
        </textPath>
      </text>
    </svg>
  )
}

/** Eye and monogram only — the arc lettering is illegible below about 90px. */
export function LogoMark({ className }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="30 40 140 68"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={EYE} fillRule="evenodd" />
      <text className="frc-logo-mono" x="100" y="74" textAnchor="middle" dominantBaseline="central">
        FRC
      </text>
    </svg>
  )
}
