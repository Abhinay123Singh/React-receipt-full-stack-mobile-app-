import { db } from "./src/config/db.js";
import { favorites } from "./src/db/schema.js";

const seedData = [
  {
    userId: "user_123",
    recipeId: 101,
    title: "Spaghetti Carbonara",
    image: "https://example.com/carbonara.jpg",
    cookTime: "25 minutes",
    servings: "2",
  },
];

async function seed() {
  try {
    await db.insert(favorites).values(seedData);
    console.log("✅ Seeded test data!");
  } catch (err) {
    console.error("❌ Failed to seed data:", err);
  } finally {
    process.exit();
  }
}

seed();
