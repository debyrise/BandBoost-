import { z } from "zod";

// Basic required string
const requiredString = z.string().trim().min(1, "This field is required");

// Email validation
const emailField = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email("Invalid email address");

// Password pattern:
// - Min 8 characters
// - At least 1 uppercase letter
// - At least 1 lowercase letter
// - At least 1 number
// - At least 1 special character
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

const passwordField = z
  .string()
  .trim()
  .min(8, "Password must be at least 8 characters")
  .regex(
    passwordRegex,
    "Password must include uppercase, lowercase, number, and special character"
  );

// ✅ Phone number validation
// - Must be digits only
// - Between 7 and 15 characters (handles international formats)
// - Optional '+' prefix handled by countryCode in UI
const phoneNumberField = z
  .string()
  .trim()
  .regex(/^[0-9]+$/, 'This Required is field')
  .max(15, 'Phone number cannot exceed 15 digits')
  .min(10, 'Phone number cannot be less than 10 digits');

// Main schema for all fields
const auth = z.object({
  name: requiredString,
  email: emailField,
  password: passwordField,
  confirmPassword: passwordField, 
  emailOtp: requiredString.optional(),
  newPassword: passwordField,
  emailAuth: requiredString.optional(),
  phoneNumber: phoneNumberField,
  countryCode: z.string().optional(),
});

// ✅ Confirm password match schema (used for change password)
const changePasswordSchema = auth
  .pick({ password: true, confirmPassword: true })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ✅ Login schema
export const loginSchema = auth.pick({ email: true, password: true });
export type loginValues = z.infer<typeof loginSchema>;

// ✅ Signup schema — includes phone number and name
export const signUpSchema = auth.pick({
  name: true,
  email: true,
  password: true,
  phoneNumber: true,
  countryCode: true,
});
export type signUpValues = z.infer<typeof signUpSchema>;

// ✅ Recovery schema
export const recoverySchema = auth.pick({ email: true });
export type recoveryValues = z.infer<typeof recoverySchema>;

// ✅ Password recovery schema
export const passwordRecoverySchema = auth
  .pick({
    emailOtp: true,
    newPassword: true,
    confirmPassword: true,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type passwordRecoveryValues = z.infer<typeof passwordRecoverySchema>;

// ✅ Export change password schema
export { changePasswordSchema };
export type changePasswordValues = z.infer<typeof changePasswordSchema>;
