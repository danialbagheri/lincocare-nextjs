import { theme } from "theme";

export interface BrandDetailsType {
  id: string;
  name: string;
  fullName?: string;
  imageSrc: string;
  whiteLogoSrc?: string;
  mt: string;
  description: string;
  color: string;
  borderColor: string;
  knowMoreLink: string;
  brandWebsiteLink: string;
  subtitle: string;
  privateLabel?: boolean;
  socialMediaLinks: { title: string; link: string }[][];
  detailedDescription: string;
  products?: {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
  }[];
}

export const BRANDS_ID = {
  CALYPSO: "calypso",
  CABANA: "cabana",
  SILKIA_PEDICARE: "silkiaPedicare",
  SILKIA_DEPILATORY: "silkiaDepilatory",
  DIMPLES: "dimples",
  SUN_TROPIC: "sunTropic",
  RE_GEN: "reGen",
  PRIVATE_LABEL: "privateLabel",
};

export const BRANDS = [
  {
    id: BRANDS_ID.CALYPSO,
    name: "Calypso",
    imageSrc: "/images/brands/calypso.png",
    whiteLogoSrc: "/images/brands/whiteLogo/Calypso-white.svg",
    mt: "0px",
    description:
      "Calypso offers an extensive collection of sun care products formulated to meet the needs of all skin types and the entire family.",
    color: theme.palette.calypsoOrange.main,
    borderColor: theme.palette.calypsoOrange.main,
    knowMoreLink: "/brands/calypso",
    brandWebsiteLink: "Calypsosun.com",
    subtitle: "Sun protection for the whole family",
    socialMediaLinks: [
      [{ title: "Facebook", link: "" }],
      [{ title: "Twitter", link: "" }],
      [{ title: "Instagram", link: "" }],
      [{ title: "#StayProtected", link: "" }],
    ],
    products: [
      {
        id: "calypso_1",
        title: "Sun protection",
        description:
          "Our sun protection products are designed by skincare specialists to provide all over body and scalp protection that lasts all day. They are recommended by many independent sources for their high quality and exceptionally low price.",
        imgSrc: "Calypso-sun-protection.png",
      },
      {
        id: "calypso_2",
        title: "Kids/sensitive",
        description:
          "These non-greasy, water-resistant sun protection products are specially designed for children and those with sensitive skin. The range includes our popular All School Day Long Sun Lotion and our Disappearing Coloured Blue Lotion Spray.",
        imgSrc: "Calypso-kids-sensitive.png",
      },
      {
        id: "calypso_3",
        title: "After sun",
        description:
          "Our after sun range contains Menthol, known for its dramatic cooling effect and Aloe Vera extracts, which will restore your skin to its natural balance. Your skin will be noticeably softer and smoother, enabling you to prolong your tan.",
        imgSrc: "Calypso-after-sun.png",
      },
      {
        id: "calypso_4",
        title: "Tanning",
        description:
          "Our advanced tanning formulas contain carrot oil and Monoi Tahiti. Carrot oil accelerates your skin’s natural tanning process while Monoi Tahiti has moisturising and soothing properties that help to nourish and soften your skin after sun exposure.",
        imgSrc: "Calypso-tanning.png",
      },
      {
        id: "calypso_5",
        title: "Health care",
        description:
          "Ranging from insect repellent to sun burn relief, we have a range of creams and sprays to help you recover from bites, stings and sun damage. They contain the anti-irritant Iricalmin to provide instant relief and plant-derived phospholipids to help restore the protective lipid film of your skin.",
        imgSrc: "Calypso-healthcare.png",
      },
    ],
    detailedDescription:
      "Calypso is a British sun care brand which aims to provide customers with quality sun care products at exceptionally low prices. All our sunscreens are developed by sun care experts and are tested to Colipa standards. Our products are sold in many chain stores in the UK including Asda, Aldi, Home Bargains, Wilkinson and Quality Save. They are also exported to many European, Asian and Middle Eastern countries.",
  },
  {
    id: BRANDS_ID.CABANA,
    name: "Cabana",
    imageSrc: "/images/brands/cabana.png",
    whiteLogoSrc: "/images/brands/whiteLogo/Cabana-white.svg",
    mt: "0",
    description:
      "Cabana combines protection and tan enhancement, offering a dual benefit to ensure your safety while achieving a gorgeous tan.",
    color: theme.palette.cabanaBrown.main,
    borderColor: theme.palette.lincoBlue.main,
    knowMoreLink: "/brands/cabana",
    brandWebsiteLink: "Cabanasun.co.uk ",
    subtitle: "Love the sun, love your skin",
    socialMediaLinks: [
      [{ title: "Facebook", link: "" }],
      [{ title: "Twitter", link: "" }],
      [{ title: "Instagram", link: "" }],
      [
        { title: "#CABANAFUN", link: "" },
        { title: "#CABANAFUN", link: "" },
      ],
    ],
    products: [
      {
        id: "cabana_1",
        title: "Sun Protection",
        description:
          "Our sun protection products offer UVA and UVB protection to help prevent burning and premature ageing. They contain Vitamin E, an antioxidant that protects and repairs your skin, and have a beautiful tropical aroma.",
        imgSrc: "Cabana-sun-protection.png",
      },
      {
        id: "cabana_2",
        title: "Kids/Sensitive",
        description:
          "These water-resistant sun protection products are specially designed for children. They protect skin from burning 30 times longer than natural protection and their gentle moisturisers replenish the natural oils lost through exposure to the sun, wind and water.",
        imgSrc: "Cabana-kids-sensitive.png",
      },
      {
        id: "cabana_3",
        title: "After Sun",
        description:
          "These specially formulated after sun products will cool and refresh your skin after a day in the sun. They contain Aloe Vera, known for its natural moisturising and healing abilities.",
        imgSrc: "Cabana-after-sun.png",
      },
      {
        id: "cabana_4",
        title: "Tanning",
        description:
          "Our range of tanning products are specifically designed to give tan lovers the best of both worlds. They provide a high level of sun protection whilst helping to build a deep, long-lasting tan.",
        imgSrc: "Cabana-tanning.png",
      },
    ],
    detailedDescription:
      "Cabana offers a combination of sun protection and tan enhancer to help you stay safe while tanning. This brand contains many different products, including our bestsellers, the Dry Coco Oil and Tropical Sun Lotion Spray. Cabana is exported to Europe, Latin America, North America and Asia.",
  },
  {
    id: BRANDS_ID.SILKIA_PEDICARE,
    name: "Silkia Skin",
    fullName: "Silkia Pedicare",
    imageSrc: "/images/brands/silkiaPedicare.png",
    whiteLogoSrc: "/images/brands/whiteLogo/Pedicare-white.svg",
    mt: "0",
    description:
      "Silkia PediCare Cracked Heel Repair Cream is a specially formulated treatment using multi-patented Keratin technology to actively repair your dry, cracked heels.",
    color: theme.palette.silkiaBlue.main,
    borderColor: theme.palette.primary.main,
    knowMoreLink: "/brands/silkiaPedicare",
    brandWebsiteLink: "Silkia.com",
    subtitle: "For silky smooth skin",
    socialMediaLinks: [
      [{ title: "Facebook", link: "" }],
      [{ title: "Twitter", link: "" }],
      [{ title: "Instagram", link: "" }],
    ],
    products: [
      {
        id: "silkia_pedicare_1",
        title: "Cracked Heel Repair Cream",
        description:
          "Silkia Skin centres around well nourished skin. The best selling Cracked Heel Repair Cream is a specially formulated treatment using multi-patented Keratin technology to actively repair your dry, cracked heels.",
        imgSrc: "Silkia-cream.png",
      },
      {
        id: "silkia_pedicare_2",
        title: "Cracked Heel Repair Roll-on",
        description:
          "PediCare Cracked Heel Repair Cream is available in tube and roll-on format and you can buy it at Asda, Trago Mills, Bodycare, Home Bargains, Poundworld and Rayburn in the UK.",
        imgSrc: "Silkia-rollon.png",
      },
    ],
    detailedDescription:
      "Silkia PediCare Cracked Heel Repair is a specially formulated treatment using multi-patented Keratin technology to actively repair your dry, cracked heels. It is clinically proven to aid the body’s natural recovery process. It helps prevent infection and boosts the fundamental skin repair process after just 48 hours. The formulation consists of Urea as well as pure Keratin, which is sourced from a keratin technology group based in the United States. Numerous clinical tests have shown that the formula works in sync with the body to repair damaged skin in only two days.",
  },
  {
    id: BRANDS_ID.SILKIA_DEPILATORY,
    name: "Silkia",
    fullName: "Silkia Depilatory",
    imageSrc: "/images/brands/silkiaDepilatory.png",
    whiteLogoSrc: "/images/brands/whiteLogo/Silkia-white.svg",
    mt: "03px",
    description:
      "Silkia Depilatory is your ultimate solution for hair removal, delivering long-lasting smoothness that leaves others curious about your secret.",
    color: theme.palette.silkiaDepilatory.main,
    borderColor: theme.palette.primary.main,
    knowMoreLink: "/brands/silkiaDepilatory",
    brandWebsiteLink: "Silkiadepilatory.co.uk",
    subtitle: "For silky smooth skin",
    socialMediaLinks: [
      [{ title: "Facebook", link: "" }],
      [{ title: "Twitter", link: "" }],
      [{ title: "Instagram", link: "" }],
    ],
    products: [
      {
        id: "silkia_depilatory_1",
        title: "Hair Removal Cream",
        description:
          "Silkia Hair Removal Cream is a gentle way of removing hair from the legs, arms and bikini line. Highly effective and quick and easy to use, the specially-formulated cream contains aloe vera to leave skin feeling luxuriously soft with a soothing finish.",
        imgSrc: "Silkia-hair-removal.png",
      },
      {
        id: "silkia_depilatory_2",
        title: "Hair Removal Spray Foam",
        description:
          "The Silkia Hair Removal Spray Foam can be used to remove hair on the arms, legs and bikini line. The velvety foaming spray coats skin quickly and has a delicate rose scent. Aloe vera is incorporated into the foam to provide skin with a hydrating moisturiser. Silkia’s Hair Removal Spray Foam works on wet skin and is ideal for use in the shower or bath.",
        imgSrc: "Silkia-spray-foam.png",
      },
      {
        id: "silkia_depilatory_3",
        title: "Face Wax Strips",
        description:
          "Silkia Face Wax Strips are ideal for those hard to reach areas on the face. With sunflower and damask rose oil, Silkia’s wax formula will leave skin soft and smooth. The post-wax aloe vera cream provided in the pack helps to sooth skin afterwards for optimum comfort and that silky feeling.",
        imgSrc: "Silkia-wax-strips.png",
      },
    ],
    detailedDescription:
      "Nothing can compete with the confidence that smooth skin brings. Silkia Depilatory is your one stop hair removal essential, providing you with long lasting smoothness that makes everyone wonder what your secret is. Silkia offers a wide range of depilatory products for legs, underarms, upper lips and the bikini line. Our products are available to buy from Bodycare in the UK and on Amazon. Silkia is also exported to many European and Middle Eastern countries.",
  },
  {
    id: BRANDS_ID.DIMPLES,
    name: "Dimples",
    imageSrc: "/images/brands/dimples.png",
    whiteLogoSrc: "/images/brands/whiteLogo/Dimples-white.svg",
    mt: "06px",
    description:
      "The Dimples range encompasses body wax strips, hair removal cream, bleach cream, and spray foams, ensuring that regardless of your skin type or preferences, you'll find the perfect product for you.",
    color: theme.palette.dimplesBlue.main,
    borderColor: theme.palette.lincoBlue.main,
    knowMoreLink: "/brands/dimples",
    brandWebsiteLink: "Dimplesdepilatory.com/",
    subtitle: "The secret to smooth skin",
    socialMediaLinks: [
      [{ title: "Facebook", link: "" }],
      [{ title: "Twitter", link: "" }],
      [{ title: "Instagram", link: "" }],
      [{ title: "#StayProtected", link: "" }],
    ],
    products: [
      {
        id: "dimples_1",
        title: "HAIR REMOVAL CREAM",
        description:
          "Dimples Hair Removal Cream is the gentle, easy way to remove hair and the result lasts up to twice as long as shaving. It works by dissolving hair below the skin’s surface, leaving you with gorgeous, stubble-free skin. It is enriched with antioxidant Vitamin E andanti-inflammatory pro-vitamin B5 to leave your skin moisturised, soft and healthy.",
        imgSrc: "Dimples-creaml.png",
      },
      {
        id: "dimples_2",
        title: "HAIR REMOVAL SPRAY FOAM",
        description:
          "Hair Removal Spray Foam is the gentle, easy way to remove hair and the result lasts up to twice as long as shaving. It works by dissolving hair below the skin’s surface, leaving you with gorgeous, stubble-free skin. It is enriched with antioxidant Vitamin E and anti-inflammatory pro-vitamin B5 to leave your skin moisturised, soft and healthy. Choose from the relaxing, feminine Rose, the energising Lemon or the floral scent of Jasmine fragrances.",
        imgSrc: "Dimples-spray-foam.png",
      },
      {
        id: "dimples_3",
        title: "WAX BODY STRIPS",
        description:
          "Dimples Wax Strips are quick and easy to use, and because they remove hair from the root, you can enjoy elegant, beautiful skin for up to 6 weeks. With three different wax strips, you’re certain to find the right one for your needs. All our wax strips contain Soothex, a natural anti-inflammatory to calm your skin, and come with our gorgeous aloe vera post-wax cream for a perfect finish.",
        imgSrc: "Dimples-wax-body.png",
      },
    ],
    detailedDescription:
      "Established in Manchester in the United Kingdom in 1979, Dimples is a British brand with decades of experience in hair removal. Our customers love us for our high-quality products and providing smooth skin at a price that won’t break the bank. Dimples is now one of the top depilatories brands in the market and is sold at home and abroad. Our dedicated product development team is constantly searching for new and innovative products to add to this range so our customers have a wide range of options to meet their depilatory needs. Our range includes body wax strips, hair removal cream, bleach cream and spray foams so that no matter your skin type or preferences, there’s a Dimples product for you.",
  },
  // {
  //   id: BRANDS_ID.SUN_TROPIC,
  //   name: "Sun Tropic",
  //   imageSrc: "/images/brands/sunTropic.png",
  //   whiteLogoSrc: "/images/brands/whiteLogo/SunTropic-white.svg",
  //   mt: "03px",
  //   description:
  //     "This unique handbag size range offers both UVA and UVB protection. Our water-resistant products provide peace of mind, ensuring you stay sunburn-free for your beach and pool days.",
  //   color: theme.palette.sunTropic.main,
  //   borderColor: theme.palette.lincoBlue.main,
  //   knowMoreLink: "/brands/sunTropic",
  //   brandWebsiteLink: "Suntropic.co.uk",
  //   subtitle: "Your beach day essential",
  //   socialMediaLinks: [
  //     [{ title: "Facebook", link: "" }],
  //     [{ title: "Twitter", link: "" }],
  //     [{ title: "Instagram", link: "" }],
  //   ],
  //   products: [
  //     {
  //       id: "sun_tropic_1",
  //       title: "Sun Lotions",
  //       description:
  //         "This unique handbag size range offers both UVA and UVB protection. All the products in this range are water-resistant, so you don’t need to worry about getting burned at the beach or in the pool. The sun lotions are available in low, medium and high factors.",
  //       imgSrc: "Tropic-sun-lotion.png",
  //     },
  //     {
  //       id: "sun_tropic_2",
  //       title: "Deep Tanning Oils",
  //       description:
  //         "For those who want to achieve a natural long-lasting tan, we offer an Original Carrot Oil and a Deep Tanning Oil.",
  //       imgSrc: "Tropic-tanning-oil.png",
  //     },
  //     {
  //       id: "sun_tropic_3",
  //       title: "Deep Tanning Gel ",
  //       description:
  //         "If you prefer to use a gel instead of an oil to achieve a gorgeous deep tan, then you can try our Deep Tanning Oil Gel and Original Carrot Oil Gel. The light and easily absorbed formula contains moisturisers and is a natural tan accelerator.",
  //       imgSrc: "Tropic-tanning-gel.png",
  //     },
  //     {
  //       id: "sun_tropic_4",
  //       title: "Clear Gel",
  //       description:
  //         "Sun Tropic offers a range of Clear Gel sun protection that is water resistant, dries quickly and allows you to enjoy your day carefree.",
  //       imgSrc: "Tropic-clear-gel",
  //     },
  //     {
  //       id: "sun_tropic_5",
  //       title: "After Sun Lotion",
  //       description:
  //         "Sun Tropic also provides sun lovers with a cooling, moisturising After Sun Lotion and an Aloe Vera After Sun Gel. They not only refresh and repair your skin after a long day in the sun, but they also help to prolong your holiday tan.",
  //       imgSrc: "Tropic-after-sun.png",
  //     },
  //   ],
  //   detailedDescription:
  //     "This unique handbag size range offers both UVA and UVB protection. All the products in this range are water-resistant, so you don’t need to worry about getting burned at the beach or in the pool. The sun lotions are available in low, medium and high factors. For those who want to achieve a natural long-lasting tan, we offer an Original Carrot Oil Gel and a Deep Tanning Oil Gel. Sun Tropic also provides sun lovers with a cooling, moisturising After Sun Lotion and an Aloe Vera After Sun Gel to help your skin recover after a long day in the sun. Sun Tropic is available to buy from Venture Blue, Convenience Distribution and Woolacombe Shop in the UK. It is exported to Thailand and several European countries.",
  // },
  {
    id: BRANDS_ID.RE_GEN,
    name: "Re-Gen",
    imageSrc: "/images/brands/reGen.png",
    whiteLogoSrc: "/images/brands/whiteLogo/Regen-white.svg",
    mt: "0px",
    description:
      "Discover Re-Gen, a dedicated line of skincare products designed to combat the effects of ageing, scars, stretch marks, dry skin, and uneven skin tone.",
    color: theme.palette.regenPink.main,
    borderColor: theme.palette.primary.main,
    knowMoreLink: "/brands/reGen",
    brandWebsiteLink: "Regenoil.co.uk",
    subtitle: "The secret to sensational skin",
    socialMediaLinks: [
      [{ title: "Facebook", link: "" }],
      [{ title: "Twitter", link: "" }],
      [{ title: "Instagram", link: "" }],
    ],
    products: [
      {
        id: "re_gen_1",
        title: "Re-Gen Oil",
        description:
          "Re-Gen Oil puts the beauty back into your skin with a special formula that works wonders. It adds elasticity, locks in moisture and reduces the appearance of a wide range of minor imperfections to give you smooth, supple skin.",
        imgSrc: "Regen-oil.png",
      },
      {
        id: "re_gen_2",
        title: "Re-Gen Gel",
        description:
          "Re-Gen Gel is a non-greasy emollient formulation proven to help treat, soothe and moisturise dry, rough or chapped skin. Its oleo-gel consistency retains moisture lost by exposure to daily weather conditions, frequent showering and dry indoor ambiances. It is suitable for sensitive skin and can be used on the face and body.",
        imgSrc: "Regen-gel.png",
      },
      {
        id: "re_gen_3",
        title: "Re-Gen Cream",
        description:
          "This specially formulated product helps prevent and provides treatment for stretch marks, scars, dry skin and blemishes. It contains the active ingredient PCL Liquid for skin regeneration, as well as other essential ingredients including Vitamin E, Lavender, Calendula, Chamomile and Rosemary Oils.",
        imgSrc: "Regen-cream.png",
      },
      {
        id: "re_gen_4",
        title: "Re-Gen Serum",
        description:
          "Re-Gen Serum is a specially formulated product which helps lift and firm facial and neck contours while diminishing blemishes and pigmentation marks. Its unique, concentrated formula contains the highly effective ingredient PCL Liquid™ for reviving skin radiance and easy absorption, ensuring effective results for dry and ageing skin.",
        imgSrc: "Regen-serum.png",
      },
      {
        id: "re_gen_5",
        title: "Re-Gen Spray",
        description:
          "Re-Gen Oil Continuous Spray is a specially formulated product which helps improve the appearance of stretch marks, scars and ageing skin. Its unique and safe formula contains the highly effective ingredient PCL Liquid™ for skin regeneration and easy absorption, ensuring effective results for dry and blemished skin.",
        imgSrc: "Regen-spray.png",
      },
    ],
    detailedDescription:
      "Re-Gen is a range of specialised skin care products that help to fight against ageing, scars, stretch marks, dry skin and uneven skin tone. All our products are affordable and manufactured to the highest quality standards. Re-Gen is available to buy in many chain stores throughout the UK including Asda, Trago Mills, Bodycare and Semichem. You can also purchase it from some UK pharmacies including Murrays, Sundrelle and Numark. It is exported to the Republic of Ireland, Australia, Indonesia and Malaysia.",
  },
  {
    id: BRANDS_ID.PRIVATE_LABEL,
    name: "Private label",
    imageSrc: "/images/brands/privateLabel.png",
    mt: "60px",
    description:
      "This unique handbag size range offers both UVA and UVB protection. All products are water-resistant, so you don’t need to worry about getting burned at the beach or in the pool.",
    color: "#EFF1F3",
    borderColor: theme.palette.lincoBlue.main,
    knowMoreLink: "/privateLabel",
    brandWebsiteLink: "",
    privateLabel: true,
    subtitle: "",
    socialMediaLinks: [
      [{ title: "Facebook", link: "" }],
      [{ title: "Twitter", link: "" }],
      [{ title: "Instagram", link: "" }],
      [{ title: "#StayProtected", link: "" }],
    ],
    detailedDescription: "",
  },
];
