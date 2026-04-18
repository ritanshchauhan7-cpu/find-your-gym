import { useState } from "react";
import "./App.css";

function App() {
  const gyms = [
    {
      name: "PowerFit Gym",
      location: "Whitefield",
      price: 2000,
      goals: ["fat loss", "general fitness"],
      beginner: true,
      whatsapp: "919999999999"
    },
    {
      name: "Elite Fitness",
      location: "Whitefield",
      price: 5000,
      goals: ["muscle gain"],
      beginner: false,
      whatsapp: "919999999999"
    },
    {
      name: "Flex Zone",
      location: "Indiranagar",
      price: 3000,
      goals: ["fat loss", "muscle gain"],
      beginner: true,
      whatsapp: "919999999999"
    },
    {
      name: "Muscle Factory",
      location: "Whitefield",
      price: 4000,
      goals: ["muscle gain"],
      beginner: true,
      whatsapp: "919999999999"
    }]
    
  

  const [budget, setBudget] = useState(3000);
  const [goal, setGoal] = useState("fat loss");
  const [experience, setExperience] = useState("beginner");
  const [location, setLocation] = useState("Whitefield");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filtered = gyms.filter((gym) => {
      return (
        gym.location === location &&
        gym.price <= budget &&
        gym.goals.includes(goal) &&
        (experience === "beginner" ? gym.beginner : true)
      );
    });

    setResults(filtered.slice(0, 3));
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Find Your Gym 💪</h1>

        <form onSubmit={handleSubmit}>
          <label>Location</label>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="Whitefield">Whitefield</option>
            <option value="Indiranagar">Indiranagar</option>
          </select>

          <label>Budget</label>
          <select onChange={(e) => setBudget(Number(e.target.value))}>
            <option value={2000}>Under ₹2000</option>
            <option value={3000}>Under ₹3000</option>
            <option value={5000}>Under ₹5000</option>
          </select>

          <label>Goal</label>
          <select onChange={(e) => setGoal(e.target.value)}>
            <option value="fat loss">Fat Loss</option>
            <option value="muscle gain">Muscle Gain</option>
          </select>

          <label>Experience</label>
          <select onChange={(e) => setExperience(e.target.value)}>
            <option value="beginner">Beginner</option>
            <option value="advanced">Advanced</option>
          </select>

          <button type="submit">Find Gyms</button>
        </form>

        <div className="results">
          {results.length === 0 && (
            <p className="empty">No gyms yet. Try filters 👆</p>
          )}

          {results.map((gym, index) => (
            <div key={index} className="gym-card">
              <h3>{gym.name}</h3>
              <p>₹{gym.price}</p>
              <p>{gym.goals.join(", ")}</p>
              {gym.beginner && <p>Beginner Friendly</p>}

              <a
                href={`https://wa.me/${gym.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;