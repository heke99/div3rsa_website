import { budgetRanges, projectTypes } from "./content";
import { entities } from "./company";
export function validateContact(formData: FormData): Record<string, string> {
  const errors: Record<string, string> = {};
  const text = (key: string) => String(formData.get(key) || "").trim();
  for (const [key, max] of Object.entries({name:160,company:200,email:254,phone:60,message:8000})) {
    if (text(key).length > max) errors[key] = `Please use no more than ${max} characters.`;
  }
  if (!text("name")) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text("email"))) errors.email = "Please enter a valid email address.";
  if (!projectTypes.includes(text("projectType"))) errors.projectType = "Please choose a project type.";
  if (text("budget") && !budgetRanges.includes(text("budget"))) errors.budget = "Please choose a budget range.";
  if (!text("message")) errors.message = "Please tell us a little about your project.";
  if (text("preferredEntity") && !entities.some(entity => entity.id === text("preferredEntity"))) errors.preferredEntity = "Please choose one of the listed entities.";
  return errors;
}
