export const variants = {
   open: {
      opacity: 0,
      y: -500,
      transition: { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] },
   },
   closed: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
   },
}

export const variants2 = {
   open: {
      opacity: 0,
      top: "-50%",
      transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
   },
   closed: {
      opacity: 1,
      top: "50%",
      transition: { delay: 1, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
   },
}
