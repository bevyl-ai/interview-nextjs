import { Restaurant } from "@/types/restaurant";

const getImageUrl = (index: number): string => {
  const i = (index % 20) + 1;
  const paddedIndex = i.toString().padStart(2, "0");
  return `https://raw.githubusercontent.com/IQAndreas/sample-images/d8a6378f05e3c49599cdaa890fd84985a43941b8/100-100-color/${paddedIndex}.jpg`;
};

export const mockRestaurants: Restaurant[] = [
  {
    id: "50060559",
    name: "New Great Wall",
    cuisine: "Chinese",
    priceRange: "$$",
    neighborhood: "Chinatown",
    rating: 4.2,
    createdAt: "2020-02-18T12:00:00Z",
    status: "open",
    imageUrl: getImageUrl(0),
    description: "Authentic Szechuan and Cantonese cuisine in the heart of Chinatown. Family-owned since 1998.",
    address: "28 Mott Street, New York, NY 10013",
    phone: "(212) 555-0142",
    hours: "Mon-Thu: 11:00 AM - 10:30 PM, Fri-Sun: 11:00 AM - 11:30 PM",
    reviews: [
      {
        score: 5,
        review: "Best authentic Chinese in Manhattan! The mapo tofu is incredible and the service is always friendly. I've been coming here for 5 years.",
        date: "2024-01-15T19:30:00Z",
        reviewer: "Sarah Chen"
      },
      {
        score: 4,
        review: "Solid lunch specials. Gets crowded on weekends but worth the wait.",
        date: "2024-01-10T13:00:00Z",
        reviewer: "Mike R."
      },
      {
        score: 3,
        review: "Food is good but they really need to renovate. The decor is stuck in the 90s.",
        date: "2024-01-05T18:45:00Z",
        reviewer: "Jennifer Liu"
      },
      {
        score: 5,
        review: "旺角的味道! Reminds me of home.",
        date: "2023-12-28T20:00:00Z",
        reviewer: "Tony Wong"
      },
      {
        score: 4,
        review: "Great dim sum on Sunday mornings. Pro tip: arrive before 10am to avoid the rush.",
        date: "2023-12-20T10:30:00Z",
        reviewer: "Lisa Park"
      }
    ]
  },
  {
    id: "50015219",
    name: "Ming Star Chinese Restaurant",
    cuisine: "Chinese",
    priceRange: "$",
    neighborhood: "Queens",
    rating: 3.8,
    createdAt: "2020-02-21T14:30:00Z",
    status: "open",
    imageUrl: getImageUrl(1),
    description: "Neighborhood Chinese takeout spot with generous portions and fast delivery.",
    address: "87-45 Queens Blvd, Elmhurst, NY 11373",
    phone: "(718) 555-0198",
    hours: "Daily: 11:00 AM - 11:00 PM",
    reviews: [
      {
        score: 4,
        review: "My go-to for late night Chinese delivery. Always hot, always fast.",
        date: "2024-01-18T22:30:00Z",
        reviewer: "David Martinez"
      },
      {
        score: 3,
        review: "Pretty standard American-Chinese food. Nothing special but reliable.",
        date: "2024-01-12T19:00:00Z",
        reviewer: "Rachel K."
      },
      {
        score: 5,
        review: "HUGE portions for the price!! The sesame chicken is addictive.",
        date: "2024-01-08T20:15:00Z",
        reviewer: "Josh Thompson"
      },
      {
        score: 2,
        review: "Used to be better. Quality has gone down since they changed owners last year.",
        date: "2023-12-15T18:30:00Z",
        reviewer: "longtime customer"
      }
    ]
  },
  {
    id: "50111099",
    name: "Sav-La-Mar",
    cuisine: "Caribbean",
    priceRange: "$$",
    neighborhood: "Queens",
    rating: 4.5,
    createdAt: "2021-08-03T11:15:00Z",
    status: "closed",
    imageUrl: getImageUrl(2),
    description: "Authentic Jamaican cuisine featuring jerk chicken, oxtail, and fresh seafood. Live reggae music on Friday nights.",
    address: "142-15 Liberty Ave, Jamaica, NY 11435",
    phone: "(718) 555-0267",
    hours: "Permanently closed",
    reviews: [
      {
        score: 5,
        review: "Devastated they closed!!! Best jerk chicken in NYC, hands down. The rice and peas were perfect every time.",
        date: "2023-10-01T14:00:00Z",
        reviewer: "Marcus Bailey"
      },
      {
        score: 5,
        review: "RIP to a real one. This place was a Queens institution. Nothing else comes close.",
        date: "2023-09-28T19:00:00Z",
        reviewer: "Denise J."
      },
      {
        score: 4,
        review: "Great food but terrible parking situation. Maybe that's why they closed?",
        date: "2023-09-15T18:30:00Z",
        reviewer: "Robert Singh"
      },
      {
        score: 5,
        review: "My family went here for 20 years. Three generations of amazing food. We miss you!",
        date: "2023-09-10T17:00:00Z",
        reviewer: "The Johnsons"
      },
      {
        score: 5,
        review: "The curry goat was life-changing. I dream about it still.",
        date: "2023-09-05T20:00:00Z",
        reviewer: "Chris P."
      },
      {
        score: 4,
        review: "Food was fire but the wait times were crazy on weekends.",
        date: "2023-08-30T13:00:00Z",
        reviewer: "Tiffany Washington"
      }
    ]
  },
  {
    id: "41699217",
    name: "Randall Manor Tavern",
    cuisine: "American",
    priceRange: "$$",
    neighborhood: "Staten Island",
    rating: 4.0,
    createdAt: "2020-01-27T16:45:00Z",
    status: "open",
    imageUrl: getImageUrl(3),
    description: "Classic American tavern with craft beers, burgers, and live sports. Staten Island's favorite local hangout.",
    address: "999 Forest Ave, Staten Island, NY 10310",
    phone: "(718) 555-0344",
    hours: "Mon-Fri: 4:00 PM - 2:00 AM, Sat-Sun: 12:00 PM - 2:00 AM",
    reviews: [
      {
        score: 5,
        review: "THE spot for Giants games. Great wings, cold beer, awesome crowd.",
        date: "2024-01-14T16:00:00Z",
        reviewer: "Tommy F."
      },
      {
        score: 3,
        review: "Typical sports bar. Nothing wrong with it but nothing special either.",
        date: "2024-01-07T19:30:00Z",
        reviewer: "Amanda Rodriguez"
      },
      {
        score: 4,
        review: "Burgers are legit! Try the Manor Special with bacon jam.",
        date: "2023-12-22T20:00:00Z",
        reviewer: "Steve O'Brien"
      }
    ]
  },
  {
    id: "50086567",
    name: "GFG Bakery Cafe",
    cuisine: "European",
    priceRange: "$",
    neighborhood: "Manhattan",
    rating: 4.3,
    createdAt: "2020-03-11T09:00:00Z",
    status: "open",
    imageUrl: getImageUrl(4),
    description: "Cozy European bakery specializing in fresh croissants, artisan breads, and specialty coffee.",
    address: "215 W 85th St, New York, NY 10024",
    phone: "(212) 555-0412",
    hours: "Daily: 7:00 AM - 7:00 PM",
    reviews: [
      {
        score: 5,
        review: "Croissants are PERFECT. Flaky, buttery, just like Paris. I come here every morning before work.",
        date: "2024-01-17T08:00:00Z",
        reviewer: "Marie Dubois"
      },
      {
        score: 4,
        review: "Great coffee and pastries but limited seating. Usually grab and go.",
        date: "2024-01-10T09:15:00Z",
        reviewer: "Kevin L."
      },
      {
        score: 5,
        review: "Hidden gem! The almond croissant is to die for.",
        date: "2024-01-03T10:30:00Z",
        reviewer: "Sophie Turner"
      },
      {
        score: 3,
        review: "Good but overpriced. $18 for avocado toast is insane even for UWS.",
        date: "2023-12-28T11:00:00Z",
        reviewer: "Budget Conscious"
      },
      {
        score: 5,
        review: "The owner Pierre is so sweet! He remembers everyone's order. Real neighborhood spot.",
        date: "2023-12-20T07:30:00Z",
        reviewer: "Local Resident"
      },
      {
        score: 4,
        review: "Excellent breads. I buy my sourdough here weekly.",
        date: "2023-12-15T14:00:00Z",
        reviewer: "James H."
      },
      {
        score: 5,
        review: "Best. Espresso. In. Manhattan.",
        date: "2023-12-10T08:45:00Z",
        reviewer: "Coffee Snob"
      }
    ]
  },
  {
    id: "50059183",
    name: "New Lucky Star",
    cuisine: "Chinese",
    priceRange: "$",
    neighborhood: "Bronx",
    rating: 3.5,
    createdAt: "2020-02-03T13:20:00Z",
    status: "temporarily-closed",
    imageUrl: getImageUrl(5),
    description: "Family-run Chinese takeout. Temporarily closed for renovations.",
    address: "2847 Grand Concourse, Bronx, NY 10468",
    phone: "(718) 555-0523",
    hours: "Temporarily closed - Reopening February 2024",
    reviews: [
      {
        score: 4,
        review: "Can't wait for them to reopen! Best lo mein in the Bronx.",
        date: "2024-01-05T18:00:00Z",
        reviewer: "Maria Santos"
      },
      {
        score: 2,
        review: "Honestly needed the renovation. Place was falling apart.",
        date: "2023-12-01T19:30:00Z",
        reviewer: "Anonymous"
      }
    ]
  },
  {
    id: "50068448",
    name: "Kung Fu Little Steamed Buns Ramen",
    cuisine: "Japanese",
    priceRange: "$$",
    neighborhood: "Midtown",
    rating: 4.4,
    createdAt: "2020-02-28T18:00:00Z",
    status: "open",
    imageUrl: getImageUrl(6),
    description: "Fusion ramen bar combining traditional Japanese techniques with Chinese steamed bun innovation.",
    address: "321 W 44th St, New York, NY 10036",
    phone: "(212) 555-0667",
    hours: "Mon-Sat: 11:30 AM - 10:00 PM, Sun: 12:00 PM - 9:00 PM",
    reviews: [
      {
        score: 5,
        review: "Mind = blown. Pork bun ramen is genius. Why didn't anyone think of this before??",
        date: "2024-01-16T19:00:00Z",
        reviewer: "Foodie Frank"
      },
      {
        score: 4,
        review: "Creative concept, well executed. The tonkotsu is rich and the buns are fluffy.",
        date: "2024-01-11T20:30:00Z",
        reviewer: "Jessica Yuan"
      },
      {
        score: 3,
        review: "Interesting but gimmicky. Regular ramen is better IMO.",
        date: "2024-01-05T18:15:00Z",
        reviewer: "Ramen Purist"
      },
      {
        score: 5,
        review: "OBSESSED!!! I've been here 4 times this month already!!!",
        date: "2023-12-29T19:45:00Z",
        reviewer: "Katie M."
      },
      {
        score: 5,
        review: "Perfect for theater district pre-show dinner. Fast service, unique food.",
        date: "2023-12-22T17:30:00Z",
        reviewer: "Broadway Bob"
      },
      {
        score: 4,
        review: "Vegetarian options are actually good! Try the mushroom bun ramen.",
        date: "2023-12-18T13:00:00Z",
        reviewer: "Plant Based Pat"
      },
      {
        score: 5,
        review: "Instagram gold and actually delicious. Win-win.",
        date: "2023-12-15T20:00:00Z",
        reviewer: "Influencer Iris"
      },
      {
        score: 4,
        review: "Pricy but worth it for the experience. Great date spot.",
        date: "2023-12-10T19:30:00Z",
        reviewer: "Dan the Man"
      }
    ]
  },
  {
    id: "50014229",
    name: "Ainsworth Midtown",
    cuisine: "American",
    priceRange: "$$$",
    neighborhood: "Manhattan",
    rating: 3.9,
    createdAt: "2020-02-21T20:30:00Z",
    status: "open",
    imageUrl: getImageUrl(7),
    description: "Upscale sports bar with elevated pub food, craft cocktails, and multiple screens for game day.",
    address: "45 E 33rd St, New York, NY 10016",
    phone: "(212) 555-0782",
    hours: "Mon-Wed: 11:30 AM - 12:00 AM, Thu-Fri: 11:30 AM - 2:00 AM, Sat: 11:00 AM - 2:00 AM, Sun: 11:00 AM - 12:00 AM",
    reviews: [
      {
        score: 2,
        review: "Overpriced mediocre food. $28 for mac and cheese? Come on.",
        date: "2024-01-13T21:00:00Z",
        reviewer: "Value Hunter"
      },
      {
        score: 4,
        review: "Great for groups and watching games. Food is decent, drinks are strong.",
        date: "2024-01-08T18:30:00Z",
        reviewer: "Sports Fan Sam"
      },
      {
        score: 5,
        review: "Love the vibe! Perfect for after-work drinks. The truffle fries are addictive.",
        date: "2024-01-03T19:00:00Z",
        reviewer: "Office Worker"
      },
      {
        score: 3,
        review: "It's fine. Nothing special but convenient location.",
        date: "2023-12-20T20:30:00Z",
        reviewer: "John Doe"
      },
      {
        score: 4,
        review: "Surprisingly good brunch! Bottomless mimosas ftw.",
        date: "2023-12-16T13:00:00Z",
        reviewer: "Brunch Bunch"
      }
    ]
  },
  {
    id: "50095880",
    name: "Madman Espresso",
    cuisine: "Coffee",
    priceRange: "$",
    neighborhood: "Financial District",
    rating: 4.6,
    createdAt: "2020-02-21T08:45:00Z",
    status: "open",
    imageUrl: getImageUrl(8),
    description: "Artisanal coffee shop with single-origin beans and expert baristas. A FiDi institution.",
    address: "17 John St, New York, NY 10038",
    phone: "(212) 555-0890",
    hours: "Mon-Fri: 6:30 AM - 6:00 PM, Sat-Sun: 8:00 AM - 5:00 PM",
    reviews: [
      {
        score: 5,
        review: "Best flat white downtown. The baristas really know their stuff.",
        date: "2024-01-17T07:30:00Z",
        reviewer: "Coffee Connoisseur"
      },
      {
        score: 5,
        review: "My morning ritual for 3 years. Consistent quality, friendly staff.",
        date: "2024-01-15T08:00:00Z",
        reviewer: "Wall Street Warren"
      },
      {
        score: 4,
        review: "Great coffee but always packed during morning rush. Come after 10am.",
        date: "2024-01-10T10:30:00Z",
        reviewer: "Patient Paula"
      },
      {
        score: 5,
        review: "They remember my order! Real community feel in the financial district.",
        date: "2024-01-05T08:15:00Z",
        reviewer: "Regular Roger"
      },
      {
        score: 3,
        review: "Good coffee but no wifi and limited seating.",
        date: "2023-12-28T14:00:00Z",
        reviewer: "Digital Nomad"
      },
      {
        score: 5,
        review: "Ethiopian pour-over changed my life. Worth the $7.",
        date: "2023-12-20T11:00:00Z",
        reviewer: "Pour Over Pete"
      },
      {
        score: 5,
        review: "The barista made a portrait of my dog in the foam. 10/10.",
        date: "2023-12-15T09:30:00Z",
        reviewer: "Dog Mom"
      },
      {
        score: 4,
        review: "Aussie-style coffee done right. Reminds me of Melbourne.",
        date: "2023-12-10T08:45:00Z",
        reviewer: "Aussie Alex"
      },
      {
        score: 5,
        review: "They source beans ethically and it shows in the quality.",
        date: "2023-12-05T10:00:00Z",
        reviewer: "Conscious Consumer"
      }
    ]
  },
  {
    id: "50038524",
    name: "Toad Style",
    cuisine: "Vegan",
    priceRange: "$$",
    neighborhood: "Brooklyn",
    rating: 4.7,
    createdAt: "2020-01-09T12:15:00Z",
    status: "closed",
    imageUrl: getImageUrl(9),
    description: "Innovative plant-based cuisine that even carnivores loved. Closed due to lease dispute.",
    address: "93 Ralph Ave, Brooklyn, NY 11221",
    phone: "(718) 555-0901",
    hours: "Permanently closed",
    reviews: [
      {
        score: 5,
        review: "This place converted me to veganism. The 'chicken' sandwich was unreal. WHY DID YOU LEAVE US?!",
        date: "2023-11-01T19:00:00Z",
        reviewer: "Devastated Diner"
      },
      {
        score: 5,
        review: "Best vegan spot in NYC. The mushroom walnut bolognese haunts my dreams.",
        date: "2023-10-28T20:00:00Z",
        reviewer: "Vegan Vanessa"
      },
      {
        score: 5,
        review: "I'm literally crying writing this review. Nothing will ever compare.",
        date: "2023-10-25T18:30:00Z",
        reviewer: "Emotional Eater"
      },
      {
        score: 4,
        review: "Great food but always had a 2 hour wait. Maybe that's why the landlord got greedy?",
        date: "2023-10-20T19:30:00Z",
        reviewer: "Practical Pete"
      },
      {
        score: 5,
        review: "Started a petition to bring them back. Link in my bio.",
        date: "2023-10-15T17:00:00Z",
        reviewer: "Activist Amy"
      },
      {
        score: 5,
        review: "My last meal here was transcendent. Thank you for everything.",
        date: "2023-10-10T20:00:00Z",
        reviewer: "Grateful Guest"
      },
      {
        score: 5,
        review: "Even my Texas BBQ-loving dad loved this place. That's saying something.",
        date: "2023-10-05T18:00:00Z",
        reviewer: "Converted Carnivore"
      },
      {
        score: 5,
        review: "The desserts!!! The chocolate avocado mousse!!! I can't...",
        date: "2023-10-01T21:00:00Z",
        reviewer: "Sweet Tooth Sally"
      },
      {
        score: 5,
        review: "Brooklyn lost a gem. Landlords are parasites.",
        date: "2023-09-28T19:00:00Z",
        reviewer: "Angry Local"
      },
      {
        score: 5,
        review: "If you're reading this in the future, know that we had something special and we lost it.",
        date: "2023-09-25T20:30:00Z",
        reviewer: "Time Capsule Tim"
      }
    ]
  },
  {
    id: "50019120",
    name: "New Topaz",
    cuisine: "Thai",
    priceRange: "$$",
    neighborhood: "Manhattan",
    rating: 4.1,
    createdAt: "2020-03-11T15:40:00Z",
    status: "open",
    imageUrl: getImageUrl(10),
    description: "Authentic Thai cuisine with adjustable spice levels. Known for their pad thai and mango sticky rice.",
    address: "127 W 56th St, New York, NY 10019",
    phone: "(212) 555-1023",
    hours: "Daily: 11:30 AM - 10:30 PM",
    reviews: [
      {
        score: 5,
        review: "Finally, a place that doesn't hold back on spice! Asked for Thai hot and they delivered.",
        date: "2024-01-14T19:30:00Z",
        reviewer: "Spice Lord"
      },
      {
        score: 3,
        review: "Decent Thai food but nothing special. There's better in Queens for half the price.",
        date: "2024-01-09T20:00:00Z",
        reviewer: "Thai Expert"
      },
      {
        score: 4,
        review: "Solid lunch special. $12 for pad see ew with spring roll and soup.",
        date: "2024-01-05T12:30:00Z",
        reviewer: "Lunch Regular"
      },
      {
        score: 5,
        review: "The tom yum soup cured my cold. Magic.",
        date: "2023-12-28T18:45:00Z",
        reviewer: "Sick Day Susan"
      },
      {
        score: 4,
        review: "Good for the area. Convenient to Carnegie Hall.",
        date: "2023-12-20T19:15:00Z",
        reviewer: "Concert Goer"
      },
      {
        score: 4,
        review: "Vegetarian options are plentiful and tasty.",
        date: "2023-12-15T20:30:00Z",
        reviewer: "Veggie Victor"
      }
    ]
  },
  {
    id: "50093768",
    name: "Taqueria Diana",
    cuisine: "Mexican",
    priceRange: "$",
    neighborhood: "Brooklyn",
    rating: 4.5,
    createdAt: "2020-01-23T11:30:00Z",
    status: "open",
    imageUrl: getImageUrl(11),
    description: "No-frills taqueria serving authentic street tacos, fresh guacamole, and homemade salsas.",
    address: "129 2nd Ave, Brooklyn, NY 11215",
    phone: "(718) 555-1156",
    hours: "Sun-Thu: 11:00 AM - 11:00 PM, Fri-Sat: 11:00 AM - 12:00 AM",
    reviews: [
      {
        score: 5,
        review: "$2 tacos that are better than any $5 hipster taco in Williamsburg. This is the real deal.",
        date: "2024-01-16T20:00:00Z",
        reviewer: "Taco Tuesday Tom"
      },
      {
        score: 5,
        review: "Al pastor is 🔥🔥🔥 Get extra pineapple!",
        date: "2024-01-12T19:30:00Z",
        reviewer: "Mexican Mike"
      },
      {
        score: 4,
        review: "Cash only is annoying but worth the ATM fee.",
        date: "2024-01-08T21:00:00Z",
        reviewer: "Card Carrier Carol"
      },
      {
        score: 5,
        review: "The grandma making tortillas by hand in the back is everything.",
        date: "2024-01-03T18:30:00Z",
        reviewer: "Authentic Andy"
      },
      {
        score: 5,
        review: "Moved to NYC from San Diego. This place makes me less homesick.",
        date: "2023-12-29T20:15:00Z",
        reviewer: "California Chris"
      },
      {
        score: 3,
        review: "Good tacos but the wait can be brutal on weekends.",
        date: "2023-12-22T21:30:00Z",
        reviewer: "Impatient Ian"
      },
      {
        score: 5,
        review: "Green salsa will change your life. Buy a container to go.",
        date: "2023-12-18T19:00:00Z",
        reviewer: "Salsa Savant"
      },
      {
        score: 5,
        review: "Best drunk food in Park Slope. Open late, cheap, delicious.",
        date: "2023-12-15T23:30:00Z",
        reviewer: "Night Owl Nick"
      }
    ]
  },
  {
    id: "50102397",
    name: "Baya Bar",
    cuisine: "Healthy",
    priceRange: "$$",
    neighborhood: "Midtown",
    rating: 4.2,
    createdAt: "2020-01-09T10:00:00Z",
    status: "temporarily-closed",
    imageUrl: getImageUrl(12),
    description: "Acai bowls, smoothies, and healthy wraps. Temporarily closed due to kitchen fire.",
    address: "445 Park Ave, New York, NY 10022",
    phone: "(212) 555-1234",
    hours: "Temporarily closed - Insurance pending",
    reviews: [
      {
        score: 4,
        review: "Hope they reopen soon. My morning acai bowl routine is ruined.",
        date: "2024-01-10T08:00:00Z",
        reviewer: "Morning Person"
      },
      {
        score: 5,
        review: "Best smoothie bowls in Midtown. Praying for a quick reopening!",
        date: "2024-01-05T09:30:00Z",
        reviewer: "Health Nut Helen"
      },
      {
        score: 3,
        review: "Overpriced but convenient for the office crowd.",
        date: "2023-12-15T12:00:00Z",
        reviewer: "Pragmatic Paul"
      }
    ]
  },
  {
    id: "50098726",
    name: "Sweetgreen",
    cuisine: "Healthy",
    priceRange: "$$",
    neighborhood: "Multiple Locations",
    rating: 4.0,
    createdAt: "2020-03-03T12:45:00Z",
    status: "open",
    imageUrl: getImageUrl(13),
    description: "Farm-to-table salads and warm bowls. Multiple locations across NYC.",
    address: "Multiple NYC Locations",
    phone: "(212) 555-1345",
    hours: "Mon-Fri: 10:30 AM - 9:00 PM, Sat-Sun: 11:00 AM - 8:00 PM",
    reviews: [
      {
        score: 3,
        review: "$18 for a salad is criminal but I keep coming back. Stockholm syndrome?",
        date: "2024-01-15T12:30:00Z",
        reviewer: "Conflicted Customer"
      },
      {
        score: 5,
        review: "The app makes ordering so easy. Harvest bowl is my go-to.",
        date: "2024-01-10T13:00:00Z",
        reviewer: "Tech Savvy Sal"
      },
      {
        score: 4,
        review: "Consistent quality across all locations. Reliable lunch option.",
        date: "2024-01-05T12:15:00Z",
        reviewer: "Corporate Cathy"
      },
      {
        score: 2,
        review: "Just buy ingredients and make it yourself for 1/3 the price.",
        date: "2023-12-28T13:30:00Z",
        reviewer: "DIY Dan"
      },
      {
        score: 4,
        review: "Good for what it is. The chicken pesto parm is actually filling.",
        date: "2023-12-20T12:45:00Z",
        reviewer: "Reasonable Rita"
      }
    ]
  },
  {
    id: "40704315",
    name: "Ramen-Ya",
    cuisine: "Japanese",
    priceRange: "$$",
    neighborhood: "East Village",
    rating: 4.4,
    createdAt: "2020-03-03T19:00:00Z",
    status: "open",
    imageUrl: getImageUrl(14),
    description: "Traditional ramen shop with rich broths simmered for 24 hours. No reservations.",
    address: "28 Cooper Sq, New York, NY 10003",
    phone: "(212) 555-1456",
    hours: "Daily: 12:00 PM - 11:00 PM",
    reviews: [
      {
        score: 5,
        review: "That first sip of tonkotsu broth... pure heaven. Worth the wait.",
        date: "2024-01-14T20:00:00Z",
        reviewer: "Ramen Ranger"
      },
      {
        score: 4,
        review: "Very good but not quite Ippudo level. Still, solid choice in EV.",
        date: "2024-01-08T19:30:00Z",
        reviewer: "Noodle Ninja"
      },
      {
        score: 5,
        review: "The soft boiled eggs are PERFECT. Dat yolk tho.",
        date: "2024-01-02T21:00:00Z",
        reviewer: "Egg Enthusiast"
      },
      {
        score: 3,
        review: "45 minute wait for a bowl of soup? Good but not THAT good.",
        date: "2023-12-26T18:30:00Z",
        reviewer: "Time Is Money"
      },
      {
        score: 5,
        review: "Vegetarian miso ramen is legit! Finally a place that doesn't neglect us.",
        date: "2023-12-20T19:45:00Z",
        reviewer: "Veggie Visitor"
      },
      {
        score: 5,
        review: "Late night ramen hits different. This place gets it.",
        date: "2023-12-18T22:30:00Z",
        reviewer: "Night Shift Nancy"
      },
      {
        score: 4,
        review: "Pro tip: Tuesday lunch is least crowded. You're welcome.",
        date: "2023-12-12T13:00:00Z",
        reviewer: "Strategic Steve"
      }
    ]
  },
  {
    id: "50036141",
    name: "My Bakery NY",
    cuisine: "Bakery",
    priceRange: "$",
    neighborhood: "Brooklyn",
    rating: 4.3,
    createdAt: "2020-01-16T07:30:00Z",
    status: "open",
    imageUrl: getImageUrl(15),
    description: "Neighborhood bakery turning out tangy sourdough, laminated pastries, and breakfast sandwiches from scratch.",
    address: "145 Bedford Ave, Brooklyn, NY 11211",
    phone: "(718) 555-1600",
    hours: "Tue-Sun: 7:00 AM - 7:00 PM",
    reviews: [
      {
        score: 5,
        review: "The morning baguette is impossibly airy; I buy one every commute.",
        date: "2024-01-21T07:45:00Z",
        reviewer: "Commute Kate"
      },
      {
        score: 4,
        review: "Cozy spot with reliable espresso, but Saturday lines can be long.",
        date: "2024-01-13T10:00:00Z",
        reviewer: "Park Slope Pat"
      }
    ]
  },
  {
    id: "41658786",
    name: "Piece-A-Cake Cookie Jar",
    cuisine: "Bakery",
    priceRange: "$",
    neighborhood: "Staten Island",
    rating: 4.1,
    createdAt: "2021-08-19T14:15:00Z",
    status: "closed",
    imageUrl: getImageUrl(16),
    description: "Homey cookie jar bakery known for decorated sugar cookies and seasonal rye crisps.",
    address: "432 Forest Ave, Staten Island, NY 10301",
    phone: "(718) 555-1601",
    hours: "Daily: 9:00 AM - 9:00 PM",
    reviews: [
      {
        score: 4,
        review: "The lavender honey cookie jar is adorable and delicious.",
        date: "2023-10-07T14:30:00Z",
        reviewer: "Staten Island Shelley"
      },
      {
        score: 5,
        review: "Baked the perfect birthday cookies for my daughter. They delivered with a smile.",
        date: "2023-09-28T12:00:00Z",
        reviewer: "Dad on a Deadline"
      }
    ]
  },
  {
    id: "50055392",
    name: "Bravo African Restaurant",
    cuisine: "African",
    priceRange: "$$",
    neighborhood: "Bronx",
    rating: 4.6,
    createdAt: "2020-02-26T16:20:00Z",
    status: "open",
    imageUrl: getImageUrl(17),
    description: "Savory Ivorian and West African plates served family-style with plantain, stews, and fragrant rice.",
    address: "221 E 138th St, Bronx, NY 10451",
    phone: "(718) 555-1602",
    hours: "Tue-Sun: 12:00 PM - 10:00 PM",
    reviews: [
      {
        score: 5,
        review: "The spicy peanut stew warmed my soul. Portions are generous.",
        date: "2024-01-12T18:30:00Z",
        reviewer: "Bronx Brianna"
      },
      {
        score: 4,
        review: "Friendly staff and bold flavors; would love a few more vegetarian sides.",
        date: "2023-12-05T20:00:00Z",
        reviewer: "Culinary Cory"
      }
    ]
  },
  {
    id: "50095381",
    name: "Mapo B.B.Q",
    cuisine: "Korean",
    priceRange: "$$$",
    neighborhood: "Queens",
    rating: 4.5,
    createdAt: "2020-01-09T18:30:00Z",
    status: "open",
    imageUrl: getImageUrl(18),
    description: "Modern Korean BBQ bar with high-quality meats, signature banchan, and a curated soju list.",
    address: "37-21 Union St, Flushing, NY 11354",
    phone: "(718) 555-1603",
    hours: "Daily: 4:00 PM - 12:00 AM",
    reviews: [
      {
        score: 5,
        review: "Smoked pork belly with kimchi fried rice is absolute heaven.",
        date: "2024-01-08T21:00:00Z",
        reviewer: "Soju Sam"
      },
      {
        score: 4,
        review: "Service is efficient but lines are long on Fridays. Reserve a table.",
        date: "2023-12-22T19:30:00Z",
        reviewer: "Flushing Fan"
      }
    ]
  },
  {
    id: "50035244",
    name: "Mamo Restaurant",
    cuisine: "Italian",
    priceRange: "$$$",
    neighborhood: "SoHo",
    rating: 4.3,
    createdAt: "2021-07-29T19:45:00Z",
    status: "open",
    imageUrl: getImageUrl(19),
    description: "Intimate SoHo trattoria serving house-made pastas and wood-fired seafood specials.",
    address: "12 Prince St, New York, NY 10012",
    phone: "(212) 555-1604",
    hours: "Tue-Sat: 5:00 PM - 11:00 PM, Sun: 5:00 PM - 10:00 PM",
    reviews: [
      {
        score: 5,
        review: "Cacio e pepe with bottarga was so silky. One of the best pastas in the hood.",
        date: "2024-01-19T20:30:00Z",
        reviewer: "Soho Sophia"
      },
      {
        score: 4,
        review: "Wine list is gorgeous but the tiramisu was a little dense.",
        date: "2024-01-05T21:15:00Z",
        reviewer: "Date Night Dave"
      }
    ]
  },
  {
    id: "50036584",
    name: "Bar Goto",
    cuisine: "Japanese",
    priceRange: "$$",
    neighborhood: "Lower East Side",
    rating: 4.7,
    createdAt: "2020-02-11T21:00:00Z",
    status: "open",
    imageUrl: getImageUrl(0),
    description: "Late-night sake bar offering small plates, shochu cocktails, and an approachable omakase menu.",
    address: "245 Eldridge St, New York, NY 10002",
    phone: "(212) 555-1605",
    hours: "Mon-Fri: 5:00 PM - 1:00 AM, Sat: 5:00 PM - 1:30 AM",
    reviews: [
      {
        score: 5,
        review: "Sake flight and smoked saba were perfect. Staff knows their bottles.",
        date: "2024-01-10T22:30:00Z",
        reviewer: "Night Owl Nia"
      },
      {
        score: 4,
        review: "Crowded on weekends but worth it for the cocktail list.",
        date: "2023-12-09T21:00:00Z",
        reviewer: "Chill Chad"
      }
    ]
  },
  {
    id: "50087651",
    name: "New Phoenix Chinese Restaurant",
    cuisine: "Chinese",
    priceRange: "$",
    neighborhood: "Staten Island",
    rating: 3.6,
    createdAt: "2020-02-12T13:10:00Z",
    status: "temporarily-closed",
    imageUrl: getImageUrl(1),
    description: "Classic Staten Island takeout known for sesame chicken and hearty lo mein, closed for structural repairs.",
    address: "2600 Hylan Blvd, Staten Island, NY 10306",
    phone: "(718) 555-1606",
    hours: "Temporarily closed for repairs",
    reviews: [
      {
        score: 4,
        review: "Miss their sesame chicken. Hoping they reopen with the same crew.",
        date: "2024-01-04T19:30:00Z",
        reviewer: "Hylan Hannah"
      },
      {
        score: 3,
        review: "Favorite late-night takeout until the floors started shaking. Fingers crossed.",
        date: "2023-12-20T21:00:00Z",
        reviewer: "Transit Tim"
      }
    ]
  },
  {
    id: "50098190",
    name: "La Gran Tijuana Taqueria",
    cuisine: "Mexican",
    priceRange: "$",
    neighborhood: "Brooklyn",
    rating: 4.4,
    createdAt: "2020-01-31T12:20:00Z",
    status: "open",
    imageUrl: getImageUrl(2),
    description: "Community taco spot slinging street-style al pastor and handmade tortillas with lively mariachi playlists.",
    address: "303 16th St, Brooklyn, NY 11215",
    phone: "(718) 555-1607",
    hours: "Daily: 11:00 AM - 10:00 PM",
    reviews: [
      {
        score: 5,
        review: "Tacos are $3 and better than any overpriced spot nearby. Pineapple is sweet and smoky.",
        date: "2024-01-11T19:30:00Z",
        reviewer: "Park Slope Pia"
      },
      {
        score: 4,
        review: "Order early, they sell out of birria by dinner rush.",
        date: "2023-12-23T18:45:00Z",
        reviewer: "Taco Tuesday Tim"
      }
    ]
  },
  {
    id: "50110563",
    name: "Wok In The Clouds",
    cuisine: "Indian",
    priceRange: "$$",
    neighborhood: "Astoria",
    rating: 4.2,
    createdAt: "2021-08-09T17:30:00Z",
    status: "closed",
    imageUrl: getImageUrl(3),
    description: "Inventive Indian dining with airy service and playful takes on street snacks—a loss to Astoria.",
    address: "82-25 37th Ave, Jackson Heights, NY 11372",
    phone: "(718) 555-1608",
    hours: "Permanently closed",
    reviews: [
      {
        score: 5,
        review: "The cloud bread appetizer was ethereal. So many dishes felt like art.",
        date: "2023-11-29T20:00:00Z",
        reviewer: "Culinary Cass"
      },
      {
        score: 4,
        review: "Felt a little theatrical, but the butter chicken was solid.",
        date: "2023-10-10T19:00:00Z",
        reviewer: "Queens Quentin"
      }
    ]
  },
  {
    id: "41665255",
    name: "McHale's Bar & Grill",
    cuisine: "Irish",
    priceRange: "$$",
    neighborhood: "Midtown",
    rating: 3.8,
    createdAt: "2020-01-23T20:00:00Z",
    status: "open",
    imageUrl: getImageUrl(4),
    description: "Irish-American pub with liberal sports broadcasts, shepherd's pie, and Guinness on tap.",
    address: "511 8th Ave, New York, NY 10018",
    phone: "(212) 555-1609",
    hours: "Daily: 11:30 AM - 2:00 AM",
    reviews: [
      {
        score: 4,
        review: "Love the pub grub and game-day energy. Brisket chili hits the spot.",
        date: "2024-01-15T20:30:00Z",
        reviewer: "Broadway Ben"
      },
      {
        score: 3,
        review: "Good for late-night beers but food is predictable.",
        date: "2023-12-28T22:00:00Z",
        reviewer: "Late Shift Lex"
      }
    ]
  },
  {
    id: "50081491",
    name: "Anatolia Mediterranean Cuisine",
    cuisine: "Mediterranean",
    priceRange: "$$$",
    neighborhood: "Manhattan",
    rating: 4.4,
    createdAt: "2020-01-28T18:45:00Z",
    status: "open",
    imageUrl: getImageUrl(5),
    description: "Bright Mediterranean kitchen with sharing plates, mezze towers, and a standout baklava cart.",
    address: "108 W 39th St, New York, NY 10018",
    phone: "(212) 555-1610",
    hours: "Mon-Thu: 11:30 AM - 10:30 PM, Fri-Sat: 11:30 AM - 11:00 PM, Sun: 11:30 AM - 10:00 PM",
    reviews: [
      {
        score: 5,
        review: "The lamb kebab is smoky with charred lemon. Service is polished.",
        date: "2024-01-06T19:45:00Z",
        reviewer: "Madison Mallory"
      },
      {
        score: 4,
        review: "Perfect date spot. Wish the bread service was warmer.",
        date: "2023-12-18T20:15:00Z",
        reviewer: "Traveling Tim"
      }
    ]
  },
  {
    id: "50109171",
    name: "Frontpage Restaurant",
    cuisine: "Caribbean",
    priceRange: "$$",
    neighborhood: "Bronx",
    rating: 4.1,
    createdAt: "2021-08-04T14:50:00Z",
    status: "open",
    imageUrl: getImageUrl(6),
    description: "Caribbean-American restaurant with jerk baskets, rum cocktails, and a vibrant mural of newspaper front pages.",
    address: "1182 Boston Rd, Bronx, NY 10456",
    phone: "(718) 555-1611",
    hours: "Daily: 12:00 PM - 11:00 PM",
    reviews: [
      {
        score: 5,
        review: "The jerk chicken was smoky and juicy with that buttery mac and cheese.",
        date: "2024-01-09T18:00:00Z",
        reviewer: "Bronx Babe"
      },
      {
        score: 4,
        review: "Great cocktails, just wish the conch fritters were crispier.",
        date: "2023-12-02T20:30:00Z",
        reviewer: "Rum Runner Ray"
      }
    ]
  },
  {
    id: "50101737",
    name: "Regalo De Juquila",
    cuisine: "Mexican",
    priceRange: "$",
    neighborhood: "Brooklyn",
    rating: 4.3,
    createdAt: "2020-02-27T11:40:00Z",
    status: "open",
    imageUrl: getImageUrl(7),
    description: "Unassuming Mexican kitchen from Oaxaca pouring mole, tlayudas, and mezcal flights.",
    address: "412 Clermont Ave, Brooklyn, NY 11238",
    phone: "(718) 555-1612",
    hours: "Tue-Sun: 12:00 PM - 10:00 PM",
    reviews: [
      {
        score: 5,
        review: "The mole negro is layered and complex—worth a special trip.",
        date: "2024-01-14T20:00:00Z",
        reviewer: "Brooklyn Bea"
      },
      {
        score: 4,
        review: "Spicy and soulful. Service can be slow when their mezcal flights sell out.",
        date: "2023-12-07T19:30:00Z",
        reviewer: "Spice Seeker Sean"
      }
    ]
  },
  {
    id: "40748570",
    name: "Springfield Diner",
    cuisine: "American",
    priceRange: "$",
    neighborhood: "Queens",
    rating: 3.9,
    createdAt: "2021-07-23T08:30:00Z",
    status: "temporarily-closed",
    imageUrl: getImageUrl(8),
    description: "Neighborhood diner with bottomless coffee and thick-cut pancakes, closed while new ownership retools the menu.",
    address: "210-52 Springfield Blvd, Queens, NY 11413",
    phone: "(718) 555-1613",
    hours: "Temporarily closed for renovations",
    reviews: [
      {
        score: 4,
        review: "Used to stop here every weekend for the perfect eggs benedict.",
        date: "2023-11-11T09:30:00Z",
        reviewer: "Commuter Carl"
      },
      {
        score: 3,
        review: "Classic diner energy but could clean up the booths.",
        date: "2023-10-15T08:45:00Z",
        reviewer: "Queens Quince"
      }
    ]
  },
  {
    id: "50111156",
    name: "Cork Wine Bar",
    cuisine: "French",
    priceRange: "$$$",
    neighborhood: "TriBeCa",
    rating: 4.5,
    createdAt: "2021-07-23T19:30:00Z",
    status: "open",
    imageUrl: getImageUrl(9),
    description: "Intimate wine bar pouring Loire whites, Burgundies, and small plates like gougères and duck confit tartines.",
    address: "94 Chambers St, New York, NY 10007",
    phone: "(212) 555-1614",
    hours: "Wed-Sat: 5:00 PM - 11:00 PM",
    reviews: [
      {
        score: 5,
        review: "Staff guided us through a perfect Loire flight. Tartines were buttery.",
        date: "2024-01-02T20:30:00Z",
        reviewer: "Date Night Dalia"
      },
      {
        score: 4,
        review: "Feels like a French garden party. Wish they opened earlier on weeknights.",
        date: "2023-12-19T21:00:00Z",
        reviewer: "Vineyard Victor"
      }
    ]
  },
  {
    id: "50103368",
    name: "Breniz Restaurant",
    cuisine: "Tex-Mex",
    priceRange: "$$",
    neighborhood: "Brooklyn",
    rating: 4.0,
    createdAt: "2021-08-23T13:00:00Z",
    status: "closed",
    imageUrl: getImageUrl(10),
    description: "Tex-Mex cantina that fused deep-dish enchiladas with craft margaritas, now shuttered.",
    address: "169 Montague St, Brooklyn, NY 11201",
    phone: "(718) 555-1615",
    hours: "Permanently closed",
    reviews: [
      {
        score: 4,
        review: "The queso is ridiculous and they made fresh tortillas to order.",
        date: "2023-10-10T20:30:00Z",
        reviewer: "Brooklyn Benny"
      },
      {
        score: 3,
        review: "Vibe was loud but mashed up too many influences.",
        date: "2023-09-22T21:00:00Z",
        reviewer: "Hipster Hannah"
      }
    ]
  },
  {
    id: "50099363",
    name: "K-Pop Haus",
    cuisine: "Korean",
    priceRange: "$$",
    neighborhood: "Manhattan",
    rating: 4.2,
    createdAt: "2020-03-10T17:15:00Z",
    status: "open",
    imageUrl: getImageUrl(11),
    description: "K-pop-themed comfort kitchen serving kimchi fries, tteokbokki, and boba milk teas.",
    address: "107 W 39th St, New York, NY 10018",
    phone: "(212) 555-1616",
    hours: "Daily: 11:30 AM - 11:00 PM",
    reviews: [
      {
        score: 5,
        review: "Kimchi fries and bubble tea kept us fueled for the late concert.",
        date: "2024-01-07T20:30:00Z",
        reviewer: "Concert Claire"
      },
      {
        score: 4,
        review: "Fun vibes but wait times pile up after 8pm.",
        date: "2023-12-30T21:00:00Z",
        reviewer: "Korean Kade"
      }
    ]
  },
  {
    id: "50018381",
    name: "The Hop Shop",
    cuisine: "American",
    priceRange: "$$",
    neighborhood: "Brooklyn",
    rating: 4.1,
    createdAt: "2020-01-15T21:30:00Z",
    status: "open",
    imageUrl: getImageUrl(12),
    description: "Neighborhood beer bar pouring taps from microbreweries alongside loaded pub sandwiches.",
    address: "66 S 6th St, Brooklyn, NY 11249",
    phone: "(718) 555-1617",
    hours: "Sun-Thu: 12:00 PM - 11:00 PM, Fri-Sat: 12:00 PM - 12:00 AM",
    reviews: [
      {
        score: 5,
        review: "Craft flights are rotating and the mac n' cheese is creamy perfection.",
        date: "2024-01-11T19:15:00Z",
        reviewer: "Beer Geek Barry"
      },
      {
        score: 4,
        review: "Great for game nights; gets loud but that’s part of the charm.",
        date: "2023-12-27T20:00:00Z",
        reviewer: "Rivalry Rowan"
      }
    ]
  },
  {
    id: "50097209",
    name: "KN Bakery",
    cuisine: "Bakery",
    priceRange: "$",
    neighborhood: "Bronx",
    rating: 3.7,
    createdAt: "2020-01-08T09:15:00Z",
    status: "open",
    imageUrl: getImageUrl(13),
    description: "South Bronx bakery crafting tres leches cakes, palmiers, and savory empanadas.",
    address: "340 E 150th St, Bronx, NY 10451",
    phone: "(718) 555-1618",
    hours: "Mon-Sun: 7:00 AM - 8:00 PM",
    reviews: [
      {
        score: 4,
        review: "Sweetest tres leches in the borough. Coffee is strong and smooth.",
        date: "2024-01-14T09:00:00Z",
        reviewer: "Flavor Fanatic Flo"
      },
      {
        score: 3,
        review: "Good pastries but seating is sparse.",
        date: "2023-12-05T10:30:00Z",
        reviewer: "Morning Morgan"
      }
    ]
  },
  {
    id: "50018146",
    name: "Gregory's Coffee",
    cuisine: "Coffee",
    priceRange: "$",
    neighborhood: "Midtown",
    rating: 4.0,
    createdAt: "2020-03-02T08:00:00Z",
    status: "open",
    imageUrl: getImageUrl(14),
    description: "Signature coffee roaster with bright shops, layered espresso, and pastry collaborations with local bakers.",
    address: "233 W 49th St, New York, NY 10019",
    phone: "(212) 555-1619",
    hours: "Mon-Fri: 6:30 AM - 8:00 PM, Sat-Sun: 7:00 AM - 7:00 PM",
    reviews: [
      {
        score: 5,
        review: "Perfectly velvety latte before a show. Staff always remembers my order.",
        date: "2024-01-03T07:20:00Z",
        reviewer: "Broadway Bree"
      },
      {
        score: 4,
        review: "Cute workspace but needs more plugs near the communal table.",
        date: "2023-12-18T16:00:00Z",
        reviewer: "Remote Rob"
      }
    ]
  },
  {
    id: "50084831",
    name: "The Ribbon",
    cuisine: "American",
    priceRange: "$$$",
    neighborhood: "Theater District",
    rating: 4.2,
    createdAt: "2020-02-25T18:30:00Z",
    status: "open",
    imageUrl: getImageUrl(15),
    description: "Grown-up American steakhouse with oysters, ample booths, and a rooftop for clinking a final nightcap.",
    address: "407 W 42nd St, New York, NY 10036",
    phone: "(212) 555-1620",
    hours: "Daily: 5:00 PM - 1:00 AM",
    reviews: [
      {
        score: 5,
        review: "Steak and seafood are top notch; valet is pricey but worth it for the location.",
        date: "2024-01-01T21:30:00Z",
        reviewer: "Stagehand Steve"
      },
      {
        score: 4,
        review: "Great for pre-show dinners; the truffle fries need more seasoning.",
        date: "2023-12-29T19:45:00Z",
        reviewer: "Curtain Call Clara"
      }
    ]
  },
  {
    id: "41399893",
    name: "La Colombe",
    cuisine: "Coffee",
    priceRange: "$",
    neighborhood: "SoHo",
    rating: 4.5,
    createdAt: "2020-03-10T10:45:00Z",
    status: "open",
    imageUrl: getImageUrl(16),
    description: "Cheery coffeehouse specializing in nitro cold brew, draft lattes, and pastries from local partners.",
    address: "189 Spring St, New York, NY 10012",
    phone: "(212) 555-1621",
    hours: "Daily: 7:00 AM - 8:00 PM",
    reviews: [
      {
        score: 5,
        review: "Draft latte is silky and the pastry counter rotates new favorites.",
        date: "2024-01-06T08:30:00Z",
        reviewer: "Soho Sam"
      },
      {
        score: 4,
        review: "Always busy but staff moves fast. Great people-watching spot.",
        date: "2023-12-21T14:00:00Z",
        reviewer: "Fashion Fiona"
      }
    ]
  },
  {
    id: "50043598",
    name: "Shake Shack",
    cuisine: "American",
    priceRange: "$$",
    neighborhood: "Queens",
    rating: 4.3,
    createdAt: "2020-02-10T12:30:00Z",
    status: "open",
    imageUrl: getImageUrl(17),
    description: "Regional outpost of the cult-favorite burger chain with crinkle fries and seasonal shakes.",
    address: "133-46 37th Ave, Flushing, NY 11354",
    phone: "(718) 555-1622",
    hours: "Daily: 11:00 AM - 10:00 PM",
    reviews: [
      {
        score: 5,
        review: "Flushing location is clean with fast service. Love the spicy chicken sandwich.",
        date: "2024-01-08T13:00:00Z",
        reviewer: "Queens Quentin"
      },
      {
        score: 4,
        review: "Always packed on weekends, but fries stay crispy.",
        date: "2023-12-30T14:45:00Z",
        reviewer: "Shack Scholar"
      }
    ]
  },
  {
    id: "41075977",
    name: "Sophie's Restaurant",
    cuisine: "Cuban",
    priceRange: "$",
    neighborhood: "Midtown",
    rating: 4.0,
    createdAt: "2021-08-24T12:15:00Z",
    status: "closed",
    imageUrl: getImageUrl(18),
    description: "Cuban comfort kitchen known for mojo roasted pork and coconut flan, now closed.",
    address: "140 E 41st St, New York, NY 10017",
    phone: "(212) 555-1623",
    hours: "Permanently closed",
    reviews: [
      {
        score: 5,
        review: "Mojo pork and plantains always hit. Miss the lunch rush vibes.",
        date: "2023-11-25T13:00:00Z",
        reviewer: "Midtown Maria"
      },
      {
        score: 4,
        review: "Sweet mango smoothie kept me going through meetings.",
        date: "2023-10-12T13:30:00Z",
        reviewer: "Desk Job Joe"
      }
    ]
  },
  {
    id: "50080592",
    name: "Aris Sports Bar Restaurant",
    cuisine: "Spanish",
    priceRange: "$$",
    neighborhood: "Brooklyn",
    rating: 3.8,
    createdAt: "2020-02-20T19:00:00Z",
    status: "open",
    imageUrl: getImageUrl(19),
    description: "Spanish sports bar pouring sangria pitchers alongside patatas bravas and grilled octopus.",
    address: "252 Flatbush Ave Ext, Brooklyn, NY 11201",
    phone: "(718) 555-1624",
    hours: "Mon-Sat: 12:00 PM - 2:00 AM, Sun: 12:00 PM - 12:00 AM",
    reviews: [
      {
        score: 4,
        review: "Big crowds for fútbol nights. Paella was generous and perfectly seasoned.",
        date: "2024-01-12T20:45:00Z",
        reviewer: "Fanatic Felix"
      },
      {
        score: 3,
        review: "Music a bit loud but the churros and sangria are on point.",
        date: "2023-12-15T21:30:00Z",
        reviewer: "Tiki Tara"
      }
    ]
  },
  {
    id: "41279614",
    name: "Blue Ribbon Sushi Bar & Grill",
    cuisine: "Japanese",
    priceRange: "$$$$",
    neighborhood: "Columbus Circle",
    rating: 4.6,
    createdAt: "2020-02-19T18:45:00Z",
    status: "open",
    imageUrl: getImageUrl(0),
    description: "Upscale sushi bar with omakase counter, grilled robata, and a hefty sake selection.",
    address: "97 W 60th St, New York, NY 10023",
    phone: "(212) 555-1625",
    hours: "Daily: 12:00 PM - 11:00 PM",
    reviews: [
      {
        score: 5,
        review: "Omakase was precise and the soy-marinated black cod melted.",
        date: "2024-01-10T19:00:00Z",
        reviewer: "Circle City Celine"
      },
      {
        score: 4,
        review: "Elegant spot but the price tag is steep. The grilled miso eggplant stole the show.",
        date: "2023-12-20T20:30:00Z",
        reviewer: "Midtown Miles"
      }
    ]
  },
  {
    id: "41410556",
    name: "Parador Caleno",
    cuisine: "Latin American",
    priceRange: "$$",
    neighborhood: "Queens",
    rating: 4.3,
    createdAt: "2020-03-12T13:40:00Z",
    status: "temporarily-closed",
    imageUrl: getImageUrl(1),
    description: "Colombian comfort eatery celebrated for arepas, empanadas, and jerk chicken, currently on hiatus.",
    address: "69-10 Roosevelt Ave, Queens, NY 11372",
    phone: "(718) 555-1626",
    hours: "Temporarily closed for staff training",
    reviews: [
      {
        score: 5,
        review: "Hands down the best arepas in Queens. Melty cheese and crackling crust.",
        date: "2023-11-18T19:00:00Z",
        reviewer: "Food Truck Fab"
      },
      {
        score: 4,
        review: "Miss their mango lassi and slow-roasted chicken every week.",
        date: "2023-10-22T18:30:00Z",
        reviewer: "Queensqueak Quinn"
      }
    ]
  },
  {
    id: "40383763",
    name: "Cousin John's Cafe And Bakery",
    cuisine: "Bakery",
    priceRange: "$",
    neighborhood: "Brooklyn",
    rating: 4.1,
    createdAt: "2021-07-22T09:30:00Z",
    status: "open",
    imageUrl: getImageUrl(2),
    description: "Family-owned cafe baking challah, babka, and selling bagels with classic spreads.",
    address: "132 Livingston St, Brooklyn, NY 11201",
    phone: "(718) 555-1627",
    hours: "Mon-Fri: 6:00 AM - 4:00 PM, Sat-Sun: 7:00 AM - 3:00 PM",
    reviews: [
      {
        score: 5,
        review: "Babka is legendary. Always grab a cinnamon roll for the train ride home.",
        date: "2024-01-05T09:15:00Z",
        reviewer: "Babka Becky"
      },
      {
        score: 4,
        review: "Coffee is hot and strong. Would love more seating.",
        date: "2023-12-19T10:00:00Z",
        reviewer: "Train Track Tyler"
      }
    ]
  },
  {
    id: "50042788",
    name: "Q Q Star",
    cuisine: "Chinese",
    priceRange: "$",
    neighborhood: "Brooklyn",
    rating: 3.9,
    createdAt: "2020-02-04T15:20:00Z",
    status: "open",
    imageUrl: getImageUrl(3),
    description: "Cash-only shop cooking spicy Szechuan noodles and hand-pulled dumplings.",
    address: "152 Wythe Ave, Brooklyn, NY 11249",
    phone: "(718) 555-1628",
    hours: "Daily: 11:00 AM - 10:00 PM",
    reviews: [
      {
        score: 4,
        review: "Dan dan noodles pack a punch. Bring cash and a napkin.",
        date: "2024-01-03T18:15:00Z",
        reviewer: "Spice Sleuth Sierra"
      },
      {
        score: 3,
        review: "Great dumplings but the place can get smoky.",
        date: "2023-12-27T19:45:00Z",
        reviewer: "Brooklyn Blaze"
      }
    ]
  },
  {
    id: "41486522",
    name: "Boxers NYC",
    cuisine: "American",
    priceRange: "$$",
    neighborhood: "Chelsea",
    rating: 3.7,
    createdAt: "2020-01-21T21:15:00Z",
    status: "open",
    imageUrl: getImageUrl(4),
    description: "Strip club turned cocktail lounge with elevated burgers, wings, and rooftop views.",
    address: "163 W 20th St, New York, NY 10011",
    phone: "(212) 555-1629",
    hours: "Daily: 12:00 PM - 2:00 AM",
    reviews: [
      {
        score: 4,
        review: "Solid burgers, fun DJs, and a roof deck that pops on Friday nights.",
        date: "2023-12-30T22:45:00Z",
        reviewer: "Chelsea Charlie"
      },
      {
        score: 3,
        review: "Atmosphere is buzzy but service slows down during busy sets.",
        date: "2023-12-10T21:20:00Z",
        reviewer: "Nightlife Nora"
      }
    ]
  },
  {
    id: "50005299",
    name: "Acey Ducey's",
    cuisine: "American",
    priceRange: "$$",
    neighborhood: "Queens",
    rating: 4.0,
    createdAt: "2020-03-05T17:00:00Z",
    status: "open",
    imageUrl: getImageUrl(5),
    description: "Stadium-style bar dishing out wings, loaded fries, and massive TVs for sports fans.",
    address: "27-15 43rd Ave, Queens, NY 11101",
    phone: "(718) 555-1630",
    hours: "Daily: 11:00 AM - 11:00 PM",
    reviews: [
      {
        score: 5,
        review: "Wings are crisp, and staff keep the beers flowing during the game.",
        date: "2024-01-14T20:00:00Z",
        reviewer: "Pumped Paul"
      },
      {
        score: 3,
        review: "Atmosphere is loud; bring earplugs if you hate noise.",
        date: "2023-12-28T21:45:00Z",
        reviewer: "Sports Skeptic Sarah"
      }
    ]
  },
  {
    id: "50080623",
    name: "Mocha Cafe",
    cuisine: "Coffee",
    priceRange: "$",
    neighborhood: "Harlem",
    rating: 4.2,
    createdAt: "2020-02-05T10:15:00Z",
    status: "open",
    imageUrl: getImageUrl(6),
    description: "Harlem coffee shop with cold brew on tap and signature espresso beverages.",
    address: "230 W 125th St, New York, NY 10027",
    phone: "(212) 555-1631",
    hours: "Mon-Fri: 7:00 AM - 8:00 PM, Sat-Sun: 8:00 AM - 6:00 PM",
    reviews: [
      {
        score: 5,
        review: "Loved the mocha iced latte after rehearsal. Smooth and not too sweet.",
        date: "2024-01-20T16:00:00Z",
        reviewer: "Harlem Harmony"
      },
      {
        score: 4,
        review: "Music is great but seating fills up fast on weekends.",
        date: "2023-12-11T14:00:00Z",
        reviewer: "Beanie Bill"
      }
    ]
  },
  {
    id: "40635454",
    name: "The Lowell",
    cuisine: "American",
    priceRange: "$$$$",
    neighborhood: "Upper East Side",
    rating: 4.8,
    createdAt: "2020-02-14T19:30:00Z",
    status: "open",
    imageUrl: getImageUrl(7),
    description: "Luxurious Upper East Side restaurant with gilded dining rooms, fine steaks, and refined weekend brunch.",
    address: "28 E 63rd St, New York, NY 10065",
    phone: "(212) 555-1632",
    hours: "Daily: 7:00 AM - 10:30 PM",
    reviews: [
      {
        score: 5,
        review: "Brunch with the lobster benedict is a splurge that never disappoints.",
        date: "2024-01-07T11:15:00Z",
        reviewer: "Upper East Uma"
      },
      {
        score: 5,
        review: "Staff treated us like royalty. The filet mignon was tender.",
        date: "2023-12-08T20:00:00Z",
        reviewer: "Regal Ray"
      }
    ]
  },
  {
    id: "50017814",
    name: "Max's Deli & Coffee Shop",
    cuisine: "Deli",
    priceRange: "$",
    neighborhood: "Financial District",
    rating: 3.9,
    createdAt: "2020-02-20T11:45:00Z",
    status: "closed",
    imageUrl: getImageUrl(8),
    description: "Classic Financial District deli known for breakfast sandwiches and oversized coffee, now closed.",
    address: "25 Broad St, New York, NY 10004",
    phone: "(212) 555-1633",
    hours: "Permanently closed",
    reviews: [
      {
        score: 4,
        review: "Best matzo ball soup at lunchtime. Miss that counter smell.",
        date: "2023-11-15T12:30:00Z",
        reviewer: "Trader Tom"
      },
      {
        score: 3,
        review: "Great for a quick bagel but seating is minimal.",
        date: "2023-10-30T09:00:00Z",
        reviewer: "Bull Market Bree"
      }
    ]
  },
  {
    id: "40510389",
    name: "Zaro's Bread Basket",
    cuisine: "Bakery",
    priceRange: "$",
    neighborhood: "Penn Station",
    rating: 3.5,
    createdAt: "2021-08-18T07:15:00Z",
    status: "open",
    imageUrl: getImageUrl(9),
    description: "No-frills bakery supplying commuters with bagels, challah, and grab-and-go sandwiches.",
    address: "815 7th Ave, New York, NY 10019",
    phone: "(212) 555-1634",
    hours: "Daily: 6:00 AM - 9:00 PM",
    reviews: [
      {
        score: 4,
        review: "Convenient for catching trains, and the sesame bagel is consistently chewy.",
        date: "2024-01-05T07:00:00Z",
        reviewer: "Station Sam"
      },
      {
        score: 3,
        review: "Crowds make it tough to grab a table, but the egg salad sandwich is reliable.",
        date: "2023-12-21T08:15:00Z",
        reviewer: "Platform Paige"
      }
    ]
  },
];

export const getAllCuisines = (): string[] => {
  const cuisineSet = new Set<string>();
  mockRestaurants.forEach((restaurant) => {
    cuisineSet.add(restaurant.cuisine);
  });
  return Array.from(cuisineSet).sort();
};
