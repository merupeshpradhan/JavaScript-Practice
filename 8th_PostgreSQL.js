import axios from "axios";
import { neon } from "@neondatabase/serverless";

const sql = neon(
  "postgresql://neondb_owner:npg_mXSLEeZn12dg@ep-plain-firefly-at4mj2sv-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
);

async function fetchAndSaveUsers() {
  try {
    // 1. Fetch user from Axios API
    const response = await axios.get(
      "postgresql://neondb_owner:npg_mXSLEeZn12dg@ep-plain-firefly-at4mj2sv-pooler.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    );
    const apiUsers = response.data.data.data;

    // 2. Loop through the API data
    for (const user of apiUsers) {
      const fullName = `${user.name.first} ${user.name.last}`;
      const gender = user.gender;
      const email = user.email;

      // 3. Save each user into your Neon database table
      await sql`
        INSERT INTO users (name, gender, email) 
        VALUES (${fullName}, ${gender}, ${email})
        ON CONFLICT (email) DO NOTHING
      `;
      // Note: 'ON CONFLICT DO NOTHING' stops errors if the email already exists

      console.log(`Saved: ${fullName}`);
    }
  } catch (error) {
    console.error("Error running process:", error);
  }
}

fetchAndSaveUsers();
