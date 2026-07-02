import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log("Fetching Database Stats...\n");

  const { data: courses, error } = await supabase
    .from("courses")
    .select("id, title, description, image_src, units(id, title, lessons(id, title, challenges(id)))");

  if (error) {
    console.error("Error fetching courses:", error);
    return;
  }

  console.log("=== COURSE SUMMARY ===");
  for (const course of courses || []) {
    let totalUnits = course.units ? course.units.length : 0;
    let totalLessons = 0;
    let totalChallenges = 0;

    if (course.units) {
      for (const unit of course.units) {
        totalLessons += unit.lessons ? unit.lessons.length : 0;
        if (unit.lessons) {
          for (const lesson of unit.lessons) {
            totalChallenges += lesson.challenges ? lesson.challenges.length : 0;
          }
        }
      }
    }

    console.log(`[ID: ${course.id}] ${course.title} (Image: ${course.image_src})`);
    console.log(`  - Description: ${course.description ? course.description.substring(0, 30) + '...' : 'None'}`);
    console.log(`  - Units: ${totalUnits}`);
    console.log(`  - Lessons: ${totalLessons}`);
    console.log(`  - Challenges: ${totalChallenges}\n`);
  }

  console.log("=== UNIT DETAILS (For Python - Title containing 'Python') ===");
  const pythonCourse = courses?.find(c => c.title.toLowerCase().includes("python"));
  if (pythonCourse && pythonCourse.units) {
    for (const unit of pythonCourse.units.sort((a,b) => a.id - b.id)) {
      const lessonsInUnit = unit.lessons ? unit.lessons.length : 0;
      console.log(`  Unit ${unit.id}: ${unit.title} - ${lessonsInUnit} lessons`);
    }
  } else {
    console.log("No course with 'Python' in title found.");
  }
}

main();
