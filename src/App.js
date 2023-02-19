import Directory from './components/directory/directory.component';



const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },

    {
      id: 2,
      title: "Jactets",
      imageUrl: "https://i.ibb.co/px2tCc3/jactets.png",
    },

    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },

    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },

    {
      id: 5,
      title: "Mans",
      imageUrl: "https://i.ibb.co/R70vBrQ/mans.png",
    },
  ];

  return (
    <Directory categories ={categories} />
  );
};

export default App;