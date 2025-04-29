export interface Testimonial {
  content : string,
  author : {
    name : string,
    role : string
  }
}

export const testimonials : Testimonial[] = [
  {
    content : "Honestly, Hassan learns insanely fast. I’ve seen him go from basics to building real apps in no time. He’s got that natural dev brain — smart, curious, and always leveling up. Whether it's Laravel, React, or anything new, he just gets it. Super proud of how far he’s come, and I know he’s only getting started.",
    author : {
      name : 'Mustafa ZROUR',
      role : 'Full Stack Trainee'
    }
  },
  {
    content : "Hassan isn’t just smart — he’s built different. Every time we tackle a new topic in class, he’s already ten steps ahead, testing it out in a real project. Whether it's backend with Laravel or frontend with React, he understands things deeply and fast. He’s got that full stack mindset, and you can tell he loves what he does. It’s motivating to study alongside someone that driven.",
    author : {
      name : 'Hicham BOUKAFFA', 
      role : 'Full Stack Trainee'
    }
  },
]
