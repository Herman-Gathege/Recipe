import React from "react";
import "./ProfilePage.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="https://placeholder.pics/svg/70x59" alt="Logo" />
//         <span className="logo-text">Recipe Room</span>
//       </div>
//       <ul className="nav-links">
//         <li>Home</li>
//         <li>Recipes</li>
//         <li>About us</li>
//       </ul>
//       <div className="nav-actions">
//         <img src="https://placeholder.pics/svg/24x24" alt="Notifications" />
//         <img src="https://placeholder.pics/svg/24x24" alt="Messages" />
//         <div className="avatar">L</div>
//         <span>Welcome Larry</span>
//       </div>
//     </nav>
//   );
// };

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <div className="profile-pic">
        <img
          src="https://placeholder.pics/svg/304x307"
          alt="Profile"
        />
        <button className="upload-btn">Upload image</button>
      </div>
      <div className="profile-info">
        <h2>Larry Mecha</h2>
        <div className="bio">
          <label>Bio</label>
          <textarea placeholder="Your bio"></textarea>
        </div>
        <div className="recipe-price">
          <label>Total Recipe Price</label>
          <input type="text" placeholder="Enter price" />
        </div>
        <div className="action-buttons">
          <button className="upload-recipe">Upload Recipe</button>
          <button className="add-to-kitchen">Add to kitchen</button>
        </div>
      </div>
    </section>
  );
};

const ActivitySection = () => {
  const activities = [
    "Your recipe got a like.",
    "Andrew commented.",
    "Your upload was successful.",
    "Preparing upload.",
    "New recipes for you.",
  ];

  return (
    <section className="activity-section">
      <h2>Your Activity</h2>
      <div className="activity-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <span>{activity}</span>
            <span>Thur 24th Sep 00:00</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const RecipeCard = ({ title, ratings, views, image }) => {
  return (
    
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-content">
        <h3 className="recipe-title">{title}</h3>
        <div className="ratings">
          <span>{ratings} ratings</span>
          <div className="stars">★★★★☆</div>
        </div>
        <p>{views} people viewed</p>
        <div className="card-actions">
          <div><img src="https://placeholder.pics/svg/24x24" alt="Comment" />Comment</div>
          <div><img src="https://placeholder.pics/svg/24x24" alt="Save" />Save</div>
          <div><img src="https://placeholder.pics/svg/24x24" alt="Share" />Share</div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribe-section">
        <p>Join us to get latest updates on upcoming events.</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
        <p>By signing up you agree to our privacy policies.</p>
      </div>
      <div className="footer-links">
        <div>
          <h4>Navigate</h4>
          <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <h4>Official</h4>
          <ul>
            <li>Privacy</li>
            <li>Accessibility</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul>
            <li>Recipe Room</li>
            <li>Recipe Room</li>
            <li>RecipeRoom@gmail.com</li>
            <li>+254700976984</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

function ProfilePage() {
  const recipes = [
    {
      title: "Mojito mocktail recipe",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    },
    {
      title: "How to make chapaiz fam",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    },
    {
      title: "How to cook intestines",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    },
    {
      title: "Tasty garlic butter thighs",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    },
    {
      title: "English fish and chips recipe",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    },
    {
      title: "How to make air fried pork ribs",
      ratings: "4.5",
      views: "200",
      image: "https://placeholder.pics/svg/368x404"
    }];

  return (
    <div className="ProfilePage">
      {/* <Navbar /> */}
      <ProfileSection />
      <ActivitySection />
      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;