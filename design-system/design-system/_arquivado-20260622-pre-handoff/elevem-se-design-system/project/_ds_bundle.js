/* @ds-bundle: {"format":3,"namespace":"ElevemSeDesignSystem_00d476","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Quote","sourcePath":"components/brand/Quote.jsx"},{"name":"Signature","sourcePath":"components/brand/Signature.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"bffe268f6561","components/brand/Quote.jsx":"61e9c05abeb4","components/brand/Signature.jsx":"3f17b9a5f2e6","components/core/Avatar.jsx":"13ce32439786","components/core/Badge.jsx":"7f43c14259fe","components/core/Button.jsx":"81f997f4ef35","components/core/Card.jsx":"1662f35cd84f","components/forms/Field.jsx":"d85d16e86a4a","components/forms/Input.jsx":"af9b2ffa4364","ui_kits/landing/Landing.jsx":"4f9d92eb5f1e","ui_kits/social/Social.jsx":"f577fc2adc63"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElevemSeDesignSystem_00d476 = window.ElevemSeDesignSystem_00d476 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Elevem-se brand mark. Two intertwined licks (vinho + dourado) rising
 * as a flat flame — union (casal) + elevation (Mago) + paixão/calor
 * (Amante). Composes the symbol with the serif wordmark and tagline.
 */
function Logo({
  variant = 'lockup',
  // 'lockup' | 'horizontal' | 'wordmark' | 'mark'
  tone = 'wine',
  // 'wine' (on light) | 'light' (on wine/dark)
  size = 72,
  // mark height in px
  tagline = true,
  style,
  ...rest
}) {
  const flameWine = tone === 'light' ? 'var(--ivory, #F4EEE2)' : 'var(--wine-600, #6E2A36)';
  const flameGold = tone === 'light' ? 'var(--gold-400, #D2B673)' : 'var(--gold-500, #C2A14D)';
  const wordColor = tone === 'light' ? 'var(--white-warm, #FFFDFA)' : 'var(--wine-700, #631E33)';
  const tagColor = tone === 'light' ? 'var(--gold-300, #E4D0A6)' : 'var(--gold-800, #735422)';
  const Mark = /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 120 120",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M59 99 C 51 80 46 58 51 40 C 54 31 58 30 60 33 C 56 31 49 44 44 64 C 42 80 50 92 59 99 Z",
    fill: flameWine
  }), /*#__PURE__*/React.createElement("path", {
    d: "M61 99 C 69 78 74 56 69 36 C 66 26 62 22 60 19 C 62 23 71 40 76 60 C 78 78 70 92 61 99 Z",
    fill: flameGold
  }));
  const Wordmark = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display, 'Spectral', Georgia, serif)",
      fontWeight: 500,
      color: wordColor,
      lineHeight: 1,
      fontSize: size * 0.62,
      letterSpacing: '0.01em'
    }
  }, "Elevem-se");
  const Tagline = tagline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans, 'Mulish', sans-serif)",
      fontWeight: 500,
      color: tagColor,
      textTransform: 'uppercase',
      letterSpacing: '0.32em',
      fontSize: Math.max(8, size * 0.13)
    }
  }, "Mentoria para casais") : null;
  if (variant === 'mark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        ...style
      }
    }, rest), Mark);
  }
  if (variant === 'wordmark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: size * 0.14,
        ...style
      }
    }, rest), Wordmark, Tagline);
  }
  if (variant === 'horizontal') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * 0.28,
        ...style
      }
    }, rest), Mark, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        flexDirection: 'column',
        gap: size * 0.1
      }
    }, Wordmark, Tagline));
  }

  // lockup (default) — stacked, centered
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: size * 0.2,
      ...style
    }
  }, rest), Mark, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: size * 0.14
    }
  }, Wordmark, Tagline));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Editorial pull quote / testimonial. Large Spectral italic over
 * light, with a signature gold rule and optional attribution.
 */
function Quote({
  children,
  cite,
  role,
  tone = 'light',
  // 'light' | 'wine'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  align = 'left',
  // 'left' | 'center'
  style,
  ...rest
}) {
  const onWine = tone === 'wine';
  const fontSize = {
    sm: 'var(--text-lg)',
    md: 'var(--text-xl)',
    lg: 'var(--text-2xl)'
  }[size] || 'var(--text-xl)';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: 'var(--space-5)',
      maxWidth: '40ch',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 1,
      background: onWine ? 'var(--rule-gold-on-wine)' : 'var(--rule-gold)'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 'var(--weight-medium)',
      fontSize,
      lineHeight: 'var(--leading-snug)',
      letterSpacing: '0.005em',
      color: onWine ? 'var(--text-on-wine-strong)' : 'var(--text-strong)'
    }
  }, children), (cite || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, cite && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-wide)',
      color: onWine ? 'var(--white-warm)' : 'var(--text-strong)'
    }
  }, cite), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-widest)',
      color: onWine ? 'var(--gold-300)' : 'var(--text-gold)'
    }
  }, role)));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Quote.jsx", error: String((e && e.message) || e) }); }

// components/brand/Signature.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mentor signature for the endorsed architecture (Elevem-se = method;
 * Maycko & Marcela = the mentors who sign it). Serif uppercase form:
 * name + fine rule with a dot + spaced surname. Brand colours —
 * Marcela = dourado, Maycko = vinho. 'couple' renders the joint lockup.
 */
function Signature({
  mentor = 'couple',
  // 'marcela' | 'maycko' | 'couple'
  tone = 'wine',
  // 'wine' (on light) | 'light' (on wine/dark)
  size = 'md',
  // 'sm' | 'md' | 'lg'
  role = false,
  // show the "dourado · prosperidade" sub-line
  style,
  ...rest
}) {
  const onDark = tone === 'light';
  const sizes = {
    sm: {
      name: 20,
      sur: 9.5,
      rule: 110
    },
    md: {
      name: 30,
      sur: 12,
      rule: 150
    },
    lg: {
      name: 42,
      sur: 15,
      rule: 200
    }
  };
  const s = sizes[size] || sizes.md;
  const palette = {
    marcela: {
      ink: onDark ? 'var(--gold-300)' : 'var(--gold-700)',
      line: onDark ? 'var(--gold-400)' : 'var(--gold-600)',
      role: 'Dourado · prosperidade'
    },
    maycko: {
      ink: onDark ? 'var(--ink-300)' : 'var(--ink-800)',
      line: onDark ? 'var(--ink-400)' : 'var(--ink-600)',
      role: 'Azul · estrutura'
    }
  };
  const data = {
    marcela: {
      name: 'MARCELA',
      sur: 'ZANARDO'
    },
    maycko: {
      name: 'MAYCKO',
      sur: 'ALVES'
    }
  };
  if (mentor === 'couple') {
    const ink = onDark ? 'var(--white-warm)' : 'var(--graphite-900)';
    const amp = onDark ? 'var(--gold-300)' : 'var(--gold-600)';
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-medium)',
        fontSize: s.name * 0.78,
        letterSpacing: '0.04em',
        color: ink,
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: '0.18em',
        ...style
      }
    }, rest), "Maycko ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: amp,
        fontStyle: 'italic',
        padding: '0 0.04em'
      }
    }, "&"), " Marcela");
  }
  const p = palette[mentor] || palette.maycko;
  const d = data[mentor] || data.maycko;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 9,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: s.name,
      letterSpacing: '0.14em',
      lineHeight: 1,
      color: p.ink
    }
  }, d.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: s.rule
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: p.line
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      flex: 'none',
      background: p.line
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: p.line
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: s.sur,
      letterSpacing: '0.42em',
      color: p.ink
    }
  }, d.sur), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.26em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--gold-300)' : 'var(--text-muted)',
      marginTop: 2
    }
  }, p.role));
}
Object.assign(__ds_scope, { Signature });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Signature.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar for mentor / testimonial portraits. Image or initials,
 * with an optional fine gold ring. Warm, restrained.
 */
function Avatar({
  src,
  alt = '',
  initials,
  size = 56,
  ring = true,
  style,
  ...rest
}) {
  const ringStyle = ring ? {
    boxShadow: 'inset 0 0 0 1px var(--gold-500), 0 0 0 4px var(--ivory)'
  } : {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-circle)',
      overflow: 'hidden',
      flex: 'none',
      background: 'var(--sand)',
      color: 'var(--wine-700)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: size * 0.4,
      letterSpacing: '0.02em',
      ...ringStyle,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-label": alt || undefined
  }, initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small uppercase label with wide tracking — the brand's "eyebrow".
 * Optionally prefixed with a short gold rule. Sets a refined,
 * editorial tone above headings.
 */
function Badge({
  children,
  tone = 'gold',
  // 'gold' | 'wine' | 'muted' | 'onWine'
  rule = false,
  // prefix a short gold rule
  style,
  ...rest
}) {
  const tones = {
    gold: {
      color: 'var(--text-gold)'
    },
    wine: {
      color: 'var(--wine-600)'
    },
    muted: {
      color: 'var(--text-muted)'
    },
    onWine: {
      color: 'var(--gold-300)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      lineHeight: 1,
      ...(tones[tone] || tones.gold),
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 28,
      height: 1,
      background: tone === 'onWine' ? 'var(--rule-gold-on-wine)' : 'var(--rule-gold)',
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Elevem-se button. Calm, premium. Primary = solid wine; secondary =
 * gold hairline outline; ghost = quiet text; gold = filled antique gold.
 * Hover/press handled in-component (self-contained, no extra CSS).
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost' | 'gold'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: 'var(--text-2xs)',
      gap: 8
    },
    md: {
      padding: '13px 28px',
      fontSize: 'var(--text-xs)',
      gap: 10
    },
    lg: {
      padding: '17px 38px',
      fontSize: 'var(--text-sm)',
      gap: 12
    }
  };
  const palettes = {
    primary: {
      base: {
        background: 'var(--action-primary)',
        color: 'var(--white-warm)',
        borderColor: 'var(--action-primary)'
      },
      hover: {
        background: 'var(--action-primary-hover)',
        borderColor: 'var(--action-primary-hover)'
      }
    },
    gold: {
      base: {
        background: 'var(--gold-500)',
        color: 'var(--wine-950)',
        borderColor: 'var(--gold-500)'
      },
      hover: {
        background: 'var(--gold-600)',
        color: 'var(--wine-950)',
        borderColor: 'var(--gold-600)'
      }
    },
    secondary: {
      base: {
        background: 'transparent',
        color: 'var(--text-brand)',
        borderColor: 'var(--gold-500)'
      },
      hover: {
        background: 'var(--wine-700)',
        color: 'var(--white-warm)',
        borderColor: 'var(--wine-700)'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: 'var(--text-brand)',
        borderColor: 'transparent'
      },
      hover: {
        background: 'color-mix(in srgb, var(--text-brand) 12%, transparent)',
        borderColor: 'transparent'
      }
    }
  };
  const s = sizes[size] || sizes.md;
  const pal = palettes[variant] || palettes.primary;
  const active = !disabled && hover ? {
    ...pal.base,
    ...pal.hover
  } : pal.base;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    "data-variant": variant,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      lineHeight: 1,
      border: '1px solid',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: !disabled && press ? 'translateY(0.5px) scale(0.99)' : 'none',
      transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      ...active,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card. Warm off-white with a hairline, soft warm shadow.
 * Variants: 'plain' (hairline), 'raised' (shadow), 'wine' (dark
 * section card), 'outline' (gold hairline, transparent).
 */
function Card({
  children,
  variant = 'plain',
  // 'plain' | 'raised' | 'wine' | 'outline'
  pad = 'md',
  // 'sm' | 'md' | 'lg'
  style,
  ...rest
}) {
  const pads = {
    sm: 'var(--space-5)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const variants = {
    plain: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--ring-hairline)',
      color: 'var(--text-body)'
    },
    raised: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)',
      color: 'var(--text-body)'
    },
    wine: {
      background: 'var(--surface-wine)',
      boxShadow: '0 24px 60px -30px rgba(46,14,26,0.5)',
      color: 'var(--text-on-wine)'
    },
    ink: {
      background: 'var(--ink-800)',
      boxShadow: '0 24px 60px -30px rgba(13,20,34,0.55)',
      color: 'var(--ink-100)'
    },
    outline: {
      background: 'transparent',
      boxShadow: 'inset 0 0 0 1px var(--gold-500)',
      color: 'var(--text-body)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-md)',
      padding: pads[pad] || pads.md,
      ...(variants[variant] || variants.plain),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Form field wrapper: label (Mulish label style), optional hint, the
 * control (children), and an optional error message.
 */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)',
      marginLeft: 4
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input. Quiet by default: bottom-rule style or soft box.
 * Focus brings a gold underline / ring. Self-contained focus state.
 */
function Input({
  variant = 'box',
  // 'box' | 'line'
  invalid = false,
  disabled = false,
  size = 'md',
  // 'sm' | 'md' | 'lg'
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      padding: variant === 'line' ? '8px 2px' : '10px 14px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: variant === 'line' ? '11px 2px' : '13px 16px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: variant === 'line' ? '14px 2px' : '16px 18px',
      fontSize: 'var(--text-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const borderColor = invalid ? 'var(--danger)' : focus ? 'var(--gold-500)' : 'var(--nude)';
  const base = {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-regular)',
    color: 'var(--text-strong)',
    background: variant === 'line' ? 'transparent' : 'var(--white-warm)',
    outline: 'none',
    transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
    opacity: disabled ? 0.5 : 1,
    ...s
  };
  const skin = variant === 'line' ? {
    border: 'none',
    borderBottom: `1px solid ${borderColor}`,
    borderRadius: 0
  } : {
    border: `1px solid ${borderColor}`,
    borderRadius: 'var(--radius-md)',
    boxShadow: focus && !invalid ? '0 0 0 3px var(--gold-100)' : 'none'
  };
  return /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      ...base,
      ...skin,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Landing.jsx
try { (() => {
/* Elevem-se — Landing / sales page UI kit.
   Real content from elevem-se.com.br, recreated in the new identity.
   Composes design-system primitives; DS bound at render (load-order-safe). */

let Logo, Badge, Button, Card, Quote, Signature;
function bindDS() {
  const NS = window.ElevemSeDesignSystem_00d476;
  ({
    Logo,
    Badge,
    Button,
    Card,
    Quote,
    Signature
  } = NS);
  // Resilience: if the bundle predates a component, fall back so the page never hard-crashes.
  if (!Signature) {
    Signature = ({
      tone
    }) => React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: 22,
        letterSpacing: '0.04em',
        color: tone === 'light' ? 'var(--white-warm)' : 'var(--graphite-900)'
      }
    }, 'Maycko & Marcela');
  }
}

/* ---------- helpers ---------------------------------------------------- */

function Photo({
  src,
  alt = '',
  ratio = '4 / 5',
  frame = true,
  position = '50% 30%',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--cream)',
      boxShadow: frame ? 'inset 0 0 0 1px var(--gold-500)' : 'none',
      position: 'relative',
      ...style
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      display: 'block'
    }
  }));
}
function Eyebrow({
  children,
  tone = 'gold'
}) {
  return /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    rule: true
  }, children);
}
function Section({
  children,
  bg = 'page',
  id,
  style
}) {
  const backgrounds = {
    page: 'var(--surface-page)',
    cream: 'var(--surface-sunken)',
    wine: 'var(--surface-wine)',
    deep: 'var(--surface-wine-deep)'
  };
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: backgrounds[bg],
      padding: 'var(--space-11) var(--space-6)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto'
    }
  }, children));
}
function Heading({
  children,
  tone = 'dark',
  size = 'var(--text-3xl)',
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: size,
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-tight)',
      color: tone === 'light' ? 'var(--white-warm)' : 'var(--text-strong)',
      margin: 'var(--space-4) 0 0',
      maxWidth: '22ch',
      textWrap: 'balance',
      ...style
    }
  }, children);
}

/* ---------- nav -------------------------------------------------------- */

function Nav() {
  const link = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    color: 'var(--text-body)',
    textDecoration: 'none',
    letterSpacing: '0.02em'
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'color-mix(in srgb, var(--ivory) 88%, transparent)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: 'var(--space-3) var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: "wine",
    size: 34,
    tagline: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#quem-somos",
    style: link
  }, "Quem somos"), /*#__PURE__*/React.createElement("a", {
    href: "#metodo",
    style: link
  }, "O m\xE9todo"), /*#__PURE__*/React.createElement("a", {
    href: "#ecossistema",
    style: link
  }, "Ecossistema"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Quero aplicar"))));
}

/* ---------- hero ------------------------------------------------------- */

function Hero() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "page",
    style: {
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Mentoria para casais"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-4xl)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--wine-700)',
      margin: 'var(--space-5) 0 0',
      textWrap: 'balance'
    }
  }, "Casais que crescem juntos n\xE3o dependem da sorte.", /*#__PURE__*/React.createElement("br", null), "Dependem de ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      background: 'linear-gradient(to bottom, transparent 60%, var(--highlight-warm) 60%)',
      padding: '0 0.06em'
    }
  }, "estrutura.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)',
      maxWidth: '48ch',
      margin: 'var(--space-6) 0 0'
    }
  }, "Uma mentoria exclusiva para casais que j\xE1 conquistaram muito e decidiram que o casamento tamb\xE9m precisa evoluir no mesmo n\xEDvel. Em 12 meses, voc\xEAs saem do modo autom\xE1tico e constroem um relacionamento estruturado, consciente e pr\xF3spero."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Quero aplicar para o Elevem-se"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-muted)'
    }
  }, "Processo seletivo por aplica\xE7\xE3o"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: "../../assets/photos/casal-01-web.jpg",
    alt: "Maycko e Marcela",
    ratio: "4 / 5",
    position: "50% 22%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-26px',
      bottom: '-22px',
      width: '62%'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "raised",
    pad: "md"
  }, /*#__PURE__*/React.createElement(Quote, {
    size: "sm",
    cite: "Maycko & Marcela",
    role: "Mentores"
  }, "Ensinamos o que vivemos e estruturamos."))))));
}

/* ---------- quem somos ------------------------------------------------- */

function QuemSomos() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "cream",
    id: "quem-somos"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 1.15fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    src: "../../assets/photos/casal-02-web.jpg",
    alt: "Marcela e Maycko",
    ratio: "4 / 5",
    position: "50% 20%"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Quem conduz"), /*#__PURE__*/React.createElement(Heading, null, "Marcela & Maycko"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)',
      maxWidth: '52ch',
      marginTop: 'var(--space-5)'
    }
  }, "Juntos h\xE1 mais de 20 anos, casados h\xE1 13, pais de tr\xEAs filhos. J\xE1 atravessamos as fases dif\xEDceis \u2014 e escolhemos crescer. A Elevem-se nasceu da pr\xE1tica, n\xE3o da teoria: ensinamos o que vivemos e estruturamos."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Signature, {
    mentor: "couple",
    tone: "wine",
    size: "md"
  })))));
}

/* ---------- dores ------------------------------------------------------ */

function Dores() {
  const pains = ['Conversam menos — e discutem pelos mesmos motivos de sempre.', 'Resolvem os problemas, mas não evoluem com eles.', 'A rotina engoliu a admiração que um tinha pelo outro.', 'O dinheiro, às vezes, gera uma tensão silenciosa.', 'Não querem se separar. Mas também não querem envelhecer no automático.'];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "page",
    id: "dores"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Talvez voc\xEA reconhe\xE7a"), /*#__PURE__*/React.createElement(Heading, null, "Voc\xEAs se amam. Mas sabem que poderiam estar melhores."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)',
      maxWidth: '40ch',
      marginTop: 'var(--space-5)'
    }
  }, "A casa funciona, os filhos est\xE3o bem, o trabalho anda. Mas o relacionamento est\xE1 apenas funcionando.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, pains.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderBottom: i < pains.length - 1 ? '1px solid var(--border-hairline)' : 'none',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--text-lg)',
      color: 'var(--gold-600)',
      minWidth: 34
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, p))))));
}

/* ---------- conceito (wine) -------------------------------------------- */

function Conceito() {
  const lines = ['Amor sem direção vira desgaste.', 'Boa intenção sem alinhamento vira conflito.', 'Prosperidade sem maturidade vira disputa.'];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "wine",
    id: "conceito"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onWine",
    rule: true
  }, "O conceito"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-4xl)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--white-warm)',
      margin: 'var(--space-5) 0 0',
      maxWidth: '18ch',
      textWrap: 'balance'
    }
  }, "Casamentos n\xE3o fracassam por falta de amor. Fracassam por falta de ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--gold-300)'
    }
  }, "estrutura.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-on-wine)',
      maxWidth: '22ch',
      margin: 0,
      lineHeight: 'var(--leading-normal)'
    }
  }, l))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 1,
      background: 'var(--rule-gold-on-wine)',
      margin: 'var(--space-8) 0 var(--space-5)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--text-xl)',
      color: 'var(--gold-100)',
      maxWidth: '30ch',
      margin: 0
    }
  }, "Relacionamento saud\xE1vel n\xE3o \xE9 aus\xEAncia de problemas. \xC9 constru\xE7\xE3o estrat\xE9gica.")));
}

/* ---------- método ----------------------------------------------------- */

function Metodo() {
  const fases = [{
    n: 'Fase 01',
    t: 'Elevação Individual',
    d: 'Primeiros 6 meses',
    items: ['Mentalidade e padrões subconscientes', 'Ressignificação de crenças', 'Espiritualidade aplicada', 'Saúde, energia e disciplina', 'Organização da rotina e do tempo']
  }, {
    n: 'Fase 02',
    t: 'Construção do Nós',
    d: 'Encontros + acompanhamento',
    items: ['Comunicação madura', 'Reconstrução da admiração', 'Intimidade e conexão', 'Alinhamento na criação dos filhos', 'Visão financeira conjunta, propósito e legado']
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "page",
    id: "metodo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "O m\xE9todo"), /*#__PURE__*/React.createElement(Heading, {
    style: {
      textAlign: 'center',
      maxWidth: '24ch'
    }
  }, "Doze meses, em duas fases"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      maxWidth: '48ch',
      marginTop: 'var(--space-4)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Seis meses de encontros e seis meses de acompanhamento. Primeiro cada um se eleva; depois, juntos, voc\xEAs constroem o n\xF3s.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-9)',
      alignItems: 'stretch'
    }
  }, fases.map((f, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: i === 0 ? 'ink' : 'wine',
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--text-lg)',
      color: 'var(--gold-300)'
    }
  }, f.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, f.d)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--white-warm)',
      margin: 0
    }
  }, f.t), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 1,
      background: i === 0 ? 'var(--ink-400)' : 'var(--rule-gold-on-wine)'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, f.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: i === 0 ? 'var(--ink-100)' : 'var(--text-on-wine)',
      paddingLeft: 18,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 9,
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: i === 0 ? 'var(--ink-400)' : 'var(--gold-400)'
    }
  }), it)))))));
}

/* ---------- ecossistema ------------------------------------------------ */

function Ecossistema() {
  const items = [['14', 'encontros estratégicos', 'Individuais e do relacionamento'], ['12', 'meses de acompanhamento', 'Do início ao fim do ciclo'], ['01', 'grupo exclusivo', 'Casais em alinhamento de valores'], ['—', 'planner personalizado', 'Estrutura da rotina a dois'], ['03', 'livros selecionados', 'Curadoria do casal'], ['03', 'sessões com Inês Marcel', 'Referência em hipnose clínica']];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "cream",
    id: "ecossistema"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "O que est\xE1 inclu\xEDdo"), /*#__PURE__*/React.createElement(Heading, null, "Isso n\xE3o \xE9 apenas mentoria. \xC9 um ecossistema."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)',
      maxWidth: '38ch',
      marginTop: 'var(--space-5)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Convites para experi\xEAncias e eventos, materiais e acompanhamento \u2014 tudo desenhado para sustentar a evolu\xE7\xE3o do casal por um ano inteiro.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2) var(--space-6)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderTop: '1px solid var(--border-hairline)',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--gold-700)',
      minWidth: 38,
      lineHeight: 1
    }
  }, it[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)'
    }
  }, it[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, it[2])))))));
}

/* ---------- exclusividade + garantia ----------------------------------- */

function Exclusividade() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "page",
    id: "exclusividade"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "ink",
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onWine",
    rule: true
  }, "Exclusividade"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--white-warm)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "N\xE3o trabalhamos com volume. Trabalhamos com profundidade."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-100)',
      margin: 0,
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Poucos casais por ciclo, com processo seletivo por aplica\xE7\xE3o e alinhamento de valores obrigat\xF3rio. Nem todos que aplicam entram \u2014 e isso \xE9 intencional.")), /*#__PURE__*/React.createElement(Card, {
    variant: "plain",
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Garantia de 30 dias"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-strong)',
      margin: 0,
      textWrap: 'balance'
    }
  }, "O risco \xE9 nosso, n\xE3o de voc\xEAs."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      margin: 0,
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Se aplicarem o m\xE9todo e n\xE3o perceberem evolu\xE7\xE3o real nos primeiros 30 dias, devolvemos o investimento."))));
}

/* ---------- legado (full-bleed photo) ---------------------------------- */

function Legado() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/casal-bw-web.jpg",
    alt: "Maycko e Marcela",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 28%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(42,16,22,0.92) 6%, rgba(42,16,22,0.45) 45%, rgba(42,16,22,0.25) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--space-6)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onWine",
    rule: true
  }, "Legado"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-4xl)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--white-warm)',
      margin: 'var(--space-4) 0 0',
      maxWidth: '24ch',
      textWrap: 'balance'
    }
  }, "No fim, ningu\xE9m \xE9 lembrado pelo que acumulou \u2014 e sim pela forma como amou, construiu e sustentou o pr\xF3prio casamento.")));
}

/* ---------- CTA final -------------------------------------------------- */

function FinalCta() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    tone: "wine",
    size: 52
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "A decis\xE3o \xE9 estrat\xE9gica")), /*#__PURE__*/React.createElement(Heading, {
    style: {
      textAlign: 'center',
      maxWidth: '20ch'
    }
  }, "Se o casamento de voc\xEAs pode viver em outro n\xEDvel"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-light)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      maxWidth: '46ch',
      marginTop: 'var(--space-4)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, "Preencham a aplica\xE7\xE3o. Se houver alinhamento, voc\xEAs entram. Se n\xE3o, indicamos o melhor caminho."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Quero aplicar para o Elevem-se"))));
}

/* ---------- footer ----------------------------------------------------- */

function Footer() {
  const link = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    color: 'var(--text-on-wine)',
    textDecoration: 'none',
    opacity: 0.85
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-wine-deep)',
      padding: 'var(--space-10) var(--space-6) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    tone: "light",
    size: 60
  }), /*#__PURE__*/React.createElement(Signature, {
    mentor: "couple",
    tone: "light",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/marcelazanardo",
    style: link
  }, "@marcelazanardo"), /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/maykoalvess",
    style: link
  }, "@maykoalvess"), /*#__PURE__*/React.createElement("a", {
    href: "https://youtube.com/@mayko.alvess",
    style: link
  }, "YouTube")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 1,
      background: 'var(--rule-gold-on-wine)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--gold-300)',
      opacity: 0.7,
      margin: 0
    }
  }, "\xA9 Elevem-se \xB7 Mentoria para casais")));
}

/* ---------- app -------------------------------------------------------- */

function LandingApp() {
  bindDS();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(QuemSomos, null), /*#__PURE__*/React.createElement(Dores, null), /*#__PURE__*/React.createElement(Conceito, null), /*#__PURE__*/React.createElement(Metodo, null), /*#__PURE__*/React.createElement(Ecossistema, null), /*#__PURE__*/React.createElement(Exclusividade, null), /*#__PURE__*/React.createElement(Legado, null), /*#__PURE__*/React.createElement(FinalCta, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.ElevemLandingApp = LandingApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Social.jsx
try { (() => {
/* Elevem-se — Social / Instagram carousel UI kit.
   Composes design-system primitives + Lucide line icons.
   DS primitives bound at render (load-order-safe). App -> window.ElevemSocialApp. */

let Logo, Badge, Button;
function bindDS() {
  const NS = window.ElevemSeDesignSystem_00d476;
  ({
    Logo,
    Badge,
    Button
  } = NS);
}
const {
  useState,
  useEffect,
  useRef
} = React;
function useLucide(dep) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) window.lucide.createIcons({
      attrs: {
        'stroke-width': 1.6
      },
      nameAttr: 'data-lucide'
    });
  }, [dep]);
  return ref;
}

/* ---------- carousel slides (4:5) -------------------------------------- */

const slideBase = {
  position: 'absolute',
  inset: 0,
  padding: '46px 42px',
  display: 'flex',
  flexDirection: 'column',
  transition: 'opacity 360ms var(--ease-standard)'
};
function CoverSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...slideBase,
      background: 'var(--ivory)',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    tone: "wine",
    size: 46
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    rule: true
  }, "Mentoria para casais"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 42,
      lineHeight: 1.06,
      color: 'var(--wine-700)',
      margin: '16px 0 0',
      letterSpacing: '-0.01em'
    }
  }, "Casais que crescem juntos n\xE3o dependem da sorte.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      background: 'linear-gradient(to bottom, transparent 60%, var(--highlight-warm) 60%)',
      padding: '0 .06em'
    }
  }, "Dependem de estrutura."))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--text-gold)'
    }
  }, "Arraste \u2192"));
}
function PrincipleSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...slideBase,
      background: 'var(--cream)',
      justifyContent: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 64,
      lineHeight: 1,
      color: 'var(--gold-600)'
    }
  }, "01"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 1,
      background: 'var(--rule-gold)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 33,
      lineHeight: 1.12,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Casamentos n\xE3o fracassam por falta de amor."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0,
      maxWidth: '30ch'
    }
  }, "Fracassam por falta de ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      color: 'var(--wine-600)'
    }
  }, "estrutura"), ". Amor sem dire\xE7\xE3o vira desgaste; boa inten\xE7\xE3o sem alinhamento vira conflito."));
}
function StructureSlide() {
  const lines = ['Comunicação madura', 'Admiração reconstruída', 'Visão financeira conjunta', 'Propósito e legado'];
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": "noturno",
    style: {
      ...slideBase,
      background: 'var(--ink-900)',
      justifyContent: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "O m\xE9todo \xB7 12 meses"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 32,
      lineHeight: 1.1,
      color: 'var(--white-warm)',
      margin: 0
    }
  }, "Estrutura se constr\xF3i com m\xE9todo."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '4px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, lines.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 16,
      color: 'var(--ink-100)',
      paddingLeft: 18,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 8,
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--gold-400)'
    }
  }), l))));
}
function QuoteSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...slideBase,
      background: 'var(--surface-wine)',
      justifyContent: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 1,
      background: 'var(--rule-gold-on-wine)'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 'var(--weight-medium)',
      fontSize: 38,
      lineHeight: 1.16,
      color: 'var(--white-warm)',
      margin: 0
    }
  }, "Ensinamos o que vivemos e estruturamos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: '0.08em',
      color: 'var(--white-warm)'
    }
  }, "Maycko & Marcela"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "Mentores")));
}
function CtaSlide() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...slideBase,
      background: 'var(--ivory)',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    tone: "wine",
    size: 58
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0,
      maxWidth: '26ch'
    }
  }, "Poucos casais por ciclo, por aplica\xE7\xE3o. Se houver alinhamento, vou chamar voc\xEAs para conversar. Toque em ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 500,
      color: 'var(--wine-700)'
    }
  }, "salvar"), " e me chame no direct."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--text-gold)'
    }
  }, "Processo seletivo aberto"));
}
const SLIDES = [CoverSlide, PrincipleSlide, StructureSlide, QuoteSlide, CtaSlide];

/* ---------- instagram post frame --------------------------------------- */

function PostFrame() {
  const [i, setI] = useState(0);
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const ref = useLucide(`${i}-${saved}-${liked}`);
  const go = d => setI(p => Math.min(SLIDES.length - 1, Math.max(0, p + d)));
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: 'min(440px, 92vw)',
      background: 'var(--white-warm)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '13px 15px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--wine-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'inset 0 0 0 1px var(--gold-500)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/elevemse-monogram-light.svg",
    width: "26",
    height: "26",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "elevem.se"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, "Mentoria para casais")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "more-horizontal",
    style: {
      marginLeft: 'auto',
      width: 20,
      height: 20,
      color: 'var(--graphite-700)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      background: 'var(--ivory)'
    }
  }, SLIDES.map((S, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: idx === i ? 1 : 0,
      pointerEvents: idx === i ? 'auto' : 'none',
      transition: 'opacity 360ms var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(S, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      background: 'rgba(42,35,38,0.55)',
      color: '#fff',
      fontSize: 11,
      padding: '3px 9px',
      borderRadius: 'var(--radius-pill)',
      backdropFilter: 'blur(4px)'
    }
  }, i + 1, "/", SLIDES.length), i > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => go(-1),
    "aria-label": "Anterior",
    style: navBtn('left')
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left",
    style: {
      width: 18,
      height: 18
    }
  })), i < SLIDES.length - 1 && /*#__PURE__*/React.createElement("button", {
    onClick: () => go(1),
    "aria-label": "Pr\xF3ximo",
    style: navBtn('right')
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 18,
      height: 18
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '12px 15px 6px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(v => !v),
    style: iconBtn,
    "aria-label": "Curtir"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "heart",
    style: {
      width: 24,
      height: 24,
      color: liked ? 'var(--wine-600)' : 'var(--graphite-900)',
      fill: liked ? 'var(--wine-600)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "message-circle",
    style: {
      width: 24,
      height: 24,
      color: 'var(--graphite-900)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "send",
    style: {
      width: 24,
      height: 24,
      color: 'var(--graphite-900)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSaved(v => !v),
    style: {
      ...iconBtn,
      marginLeft: 'auto'
    },
    "aria-label": "Salvar"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bookmark",
    style: {
      width: 24,
      height: 24,
      color: saved ? 'var(--gold-700)' : 'var(--graphite-900)',
      fill: saved ? 'var(--gold-600)' : 'none'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 6,
      paddingBottom: 8
    }
  }, SLIDES.map((_, idx) => /*#__PURE__*/React.createElement("span", {
    key: idx,
    onClick: () => setI(idx),
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      cursor: 'pointer',
      background: idx === i ? 'var(--wine-600)' : 'var(--graphite-100)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 15px 16px',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "elevem.se"), ' ', "O casamento de voc\xEAs est\xE1 funcionando \u2014 ou est\xE1 apenas no autom\xE1tico? Salve este carrossel e leia at\xE9 o fim. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--wine-600)'
    }
  }, "#casalestruturado #mentoriaparacasais")));
}
function navBtn(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 10,
    transform: 'translateY(-50%)',
    width: 32,
    height: 32,
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(251,248,242,0.82)',
    color: 'var(--wine-700)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: 'var(--shadow-sm)',
    backdropFilter: 'blur(4px)'
  };
}
const iconBtn = {
  border: 'none',
  background: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'inline-flex'
};

/* ---------- app -------------------------------------------------------- */

function SocialApp() {
  bindDS();
  const ref = useLucide('app');
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      minHeight: '100vh',
      background: 'var(--surface-sunken)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 26,
      padding: '40px 16px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    rule: true
  }, "Conte\xFAdo \xB7 carrossel"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Use as setas ou os pontos para navegar pelo carrossel.")), /*#__PURE__*/React.createElement(PostFrame, null));
}
window.ElevemSocialApp = SocialApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Social.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.Signature = __ds_scope.Signature;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

})();
