export const createCardVariants = (
  direction:
    | "fade"
    | "scale"
    | "scale"
    | "scale"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right" = "fade",
  distance = 40
) => {
  const base = { opacity: 0 };

  switch (direction) {
    case "fade":
      return { hidden: base, visible: { opacity: 1 } };
    case "scale":
      return {
        hidden: { ...base, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      };
    case "slide-up":
      return {
        hidden: { ...base, y: distance },
        visible: { opacity: 1, y: 0 },
      };
    case "slide-down":
      return {
        hidden: { ...base, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    case "slide-left":
      return {
        hidden: { ...base, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case "slide-right":
      return {
        hidden: { ...base, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    default:
      return { hidden: base, visible: { opacity: 1 } };
  }
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
