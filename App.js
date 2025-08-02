const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nHJJVocQbAdfUQHDEXeVu0V8MJqnnacJvQ&s"
          alt="Logo"
          className="logo-image"
        />
      </div>
      <nav className="nav-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>

      <div className="restrocards-list">
        <RestroCard
          name="Restaurant 1"
          cuisines={["Indian", "Chinese"]}
          cloudinaryImageId="https://b.zmtcdn.com/data/pictures/3/21475873/d61c9aef08259abedf39f6a833735ab7.jpg"
          lastMileTravelString="2.5 km"
        />
        <RestroCard
          name="Restaurant 1"
          cuisines={["Indian", "Chinese"]}
          cloudinaryImageId="https://b.zmtcdn.com/data/pictures/3/21475873/d61c9aef08259abedf39f6a833735ab7.jpg"
          lastMileTravelString="2.5 km"
        />
        <RestroCard
          name="Restaurant 1"
          cuisines={["Indian", "Chinese"]}
          cloudinaryImageId="https://b.zmtcdn.com/data/pictures/3/21475873/d61c9aef08259abedf39f6a833735ab7.jpg"
          lastMileTravelString="2.5 km"
        />
        <RestroCard
          name="Restaurant 1"
          cuisines={["Indian", "Chinese"]}
          cloudinaryImageId="https://b.zmtcdn.com/data/pictures/3/21475873/d61c9aef08259abedf39f6a833735ab7.jpg"
          lastMileTravelString="2.5 km"
        />
        <RestroCard
          name="Restaurant 1"
          cuisines={["Indian", "Chinese"]}
          cloudinaryImageId="https://b.zmtcdn.com/data/pictures/3/21475873/d61c9aef08259abedf39f6a833735ab7.jpg"
          lastMileTravelString="2.5 km"
        />
        <RestroCard
          name="Restaurant 1"
          cuisines={["Indian", "Chinese"]}
          cloudinaryImageId="https://b.zmtcdn.com/data/pictures/3/21475873/d61c9aef08259abedf39f6a833735ab7.jpg"
          lastMileTravelString="2.5 km"
        />
        <RestroCard
          name="Restaurant 1"
          cuisines={["Indian", "Chinese"]}
          cloudinaryImageId="https://b.zmtcdn.com/data/pictures/3/21475873/d61c9aef08259abedf39f6a833735ab7.jpg"
          lastMileTravelString="2.5 km"
        />
        <RestroCard
          name="Restaurant 1"
          cuisines={["Indian", "Chinese"]}
          cloudinaryImageId="https://b.zmtcdn.com/data/pictures/3/21475873/d61c9aef08259abedf39f6a833735ab7.jpg"
          lastMileTravelString="2.5 km"
        />
        {/* Repeat restrocard for more restaurants */}
      </div>
    </main>
  );
};

const RestroCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="restrocard">
      <img src={cloudinaryImageId} alt="Restaurant" className="restro-image" />
      <h2>{name}</h2>
      <p>Rating: {lastMileTravelString}</p>
      <p>Cuisine: {cuisines.join(", ")}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Kishor Tech. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
