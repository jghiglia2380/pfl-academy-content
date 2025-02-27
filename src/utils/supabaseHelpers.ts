import supabase from "../utils/supabase";
import { toast } from "react-toastify";

export const saveSkillBuilder = async (
  skillBuilderData,
  skillBuilderJson,
  userId,
  skillBuilderId
) => {
  try {
    console.log(skillBuilderData);
    if (skillBuilderData) {
      if (
        JSON.stringify(skillBuilderData.skillbuilder_json) ===
        JSON.stringify(skillBuilderJson)
      ) {
        console.log("No changes detected, skipping update.");
        return skillBuilderData; // Return existing data to avoid unnecessary updates
      }
      // Update existing skill builder
      const { error } = await supabase
        .from("skillbuilders")
        .update({ skillbuilder_json: skillBuilderJson })
        .eq("id", skillBuilderData.id);

      if (error) {
        console.error("Error updating skill builder:", error.message);
        toast.error("Failed to update skill builder. Please try again.");
        return null;
      } else {
        toast.success("Skill builder updated successfully.");
        return { ...skillBuilderData, skillbuilder_json: skillBuilderJson }; // Return updated data
      }
    } else {
      const { data, error } = await supabase
        .from("skillbuilders")
        .insert([
          {
            user_id: userId,
            skillbuilder_id: skillBuilderId,
            skillbuilder_json: skillBuilderJson,
          },
        ])
        .select()
        .single(); // Select inserted data

      if (error) {
        console.error("Error inserting skill builder:", error.message);
        toast.error("Failed to save skill builder. Please try again.");
        return null;
      } else {
        toast.success("Skill builder saved successfully.");
        return data; // Return new skill builder data
      }
    }
  } catch (error) {
    console.error("Error saving skill builder:", error.message);
    return null;
  }
};

export const getSkillBuilder = async (userId, skillBuilderId) => {
  if (!userId || !skillBuilderId) {
    console.error("Invalid user or skill builder ID.");
    return null;
  }

  try {
    const { data, error } = await supabase
      .from("skillbuilders")
      .select("*")
      .eq("user_id", userId)
      .eq("skillbuilder_id", skillBuilderId)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        // No matching record found (not really an error)
        return null;
      }
      console.error("Error fetching skill builder:", error.message);
      return null;
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error("Unexpected error fetching skill builder:", error.message);
    return null;
  }
};
