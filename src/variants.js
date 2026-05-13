import { stagger } from "framer-motion"

 export const rvariants = {
    hidden:{
      x:'100px',
      opacity:0,
    },
    visible:{
       x:'0px',
      opacity:1,
    },
    
  }
  export const lvariants = {
    hidden:{
      x:'-100px',
      opacity:0,
    },
    visible:{
       x:'0px',
      opacity:1,
    },
    
  }
  export const bvariants = {
    hidden:{
      y:'100px',
      opacity:0,
    },
    visible:{
       y:'0px',
      opacity:1,
    },
    
  }

  export const container = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.2,

      },
    },

  } 
  export const pro= {
    hidden:{
      opacity:0,
      y:60,
      scale:0.9
    },
    visible:{
      opacity:1,
      y:0,
      scale:1
    },

  }