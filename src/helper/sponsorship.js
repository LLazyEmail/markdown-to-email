/**
 * Decide whether the sponsorship block should be rendered.
 *
 * The old inline check was
 *   `!process.env.PARSE === 'noAdv' || process.env.PARSE === 'full'`
 * `!` binds tighter than `===`, so the left side compared a boolean with a
 * string and was always false. The whole condition reduced to
 * `PARSE === 'full'`: sponsors were skipped for every other mode, including
 * the default (no PARSE set, which start.js treats as `full`).
 *
 * Intended rule: render sponsors unless this is an ad-free build. An
 * ad-free build is `PARSE=noAdv` or the `noAdv` env flag that
 * `checkHtml` in src/domain/helper-methods already uses.
 *
 * @param {{ PARSE?: string, noAdv?: string }} [env]
 * @returns {boolean}
 */
export function shouldRenderSponsorship(env = process.env) {
  return env.PARSE !== 'noAdv' && !env.noAdv;
}

export default shouldRenderSponsorship;
