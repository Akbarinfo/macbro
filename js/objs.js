const macObj = {
  name: "Mac Book Air 13-inch",
  ram: [
    {
      ramSize: 8,
      active: true,
      memory: [
        {
          active: true,
          size: 256,
          price: '12 497 000',
        },
        {
          active: false,
          size: 512,
          price: '15 066 000',
        },
      ],
    },
    {
      ramSize: 16,
      active: false,
      memory: [
        {
          active: false,
          size: 256,
          price: '16 935 000',
        },
        {
          active: true,
          size: 512,
          price: '19 270 500',
        },
        {
          active: false,
          size: 1024,
          price: '21 606 500',
        },
      ],
    },
  ],
  colors: [
    {
      id: 1,
      name: "Tilla rang",
      active: true,
      color: '#d29d00',
      img: "img/gold.webp",
      imgs: ['img/gold.webp', 'img/gold.1.webp', 'img/gold.2.webp', 'img/gold.3.webp', 'img/gold.4.webp'],
    },
    {
      id: 2,
      name: "Kumush rang",
      active: false,
      color: 'silver',
      img: "img/silver.webp",
      imgs: ['img/silver.webp', 'img/silver1.webp', 'img/silver2.webp', 'img/silver3.webp', 'img/silver4.webp'],
    },
    {
      id: 3,
      name: "Kosmik kulrang",
      active: false,
      color: 'grey',
      img: "img/gray.webp",
      imgs: ['img/gray.webp', 'img/gray1.webp', 'img/gray2.webp', 'img/gray3.webp', 'img/gray4.webp'],
    },
  ],
};