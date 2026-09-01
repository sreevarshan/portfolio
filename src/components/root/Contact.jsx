import { useState } from "react";
import { Switch } from "@headlessui/react";

// SVGs for Contact Info
const MailIcon = () => (
  <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h-3a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-6 h-6 text-sky-500 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
    message: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message should be at least 10 characters long";
    }
    if (!formData.agreed) tempErrors.agreed = "You must agree to the privacy policy";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSwitchChange = (checked) => {
    setFormData((prev) => ({ ...prev, agreed: checked }));
    if (errors.agreed) {
      setErrors((prev) => ({ ...prev, agreed: "" }));
    }
  };

  const [apiError, setApiError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setApiError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phoneNumber: "",
        message: "",
        agreed: false,
      });

      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (err) {
      console.error("Form submit error:", err);
      setApiError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen pt-28 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have a question or want to collaborate? Feel free to reach out! I'd love to connect.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Panel: Contact Info */}
          <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-28">
            <div className="p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30 shadow-xs">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch Directly
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-150/40 dark:border-indigo-900/30 shrink-0">
                    <MailIcon />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mail</h4>
                    <p className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                      sreevarshan152000@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-150/40 dark:border-emerald-900/30 shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                    <p className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                      +91-9789489905
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-150/40 dark:border-sky-900/30 shrink-0">
                    <MapPinIcon />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</h4>
                    <p className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                      Salem, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-450 leading-relaxed px-2">
              * Active hours: Monday to Friday, 9:00 AM - 6:00 PM (IST). Expect a response within 24 hours.
            </p>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl bg-gray-50/50 dark:bg-gray-800/30 border border-gray-200/50 dark:border-gray-700/30 shadow-xs">
              
              {apiError && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 text-sm font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {apiError}
                </div>
              )}

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-sm font-semibold flex items-center gap-2 animate-fade-in-down">
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thank you! Your message was sent successfully. I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-750 dark:text-gray-300">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`block w-full rounded-xl bg-white dark:bg-gray-900 px-4 py-2.5 text-base text-gray-900 dark:text-white border ${
                          errors.firstName
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-250 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-indigo-500/15"
                        } focus:outline-hidden focus:ring-4 transition-all duration-200`}
                        placeholder="Jane"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                      )}
                    </div>
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-750 dark:text-gray-300">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`block w-full rounded-xl bg-white dark:bg-gray-900 px-4 py-2.5 text-base text-gray-900 dark:text-white border ${
                          errors.lastName
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-250 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-indigo-500/15"
                        } focus:outline-hidden focus:ring-4 transition-all duration-200`}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-750 dark:text-gray-300">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`block w-full rounded-xl bg-white dark:bg-gray-900 px-4 py-2.5 text-base text-gray-900 dark:text-white border ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-250 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-indigo-500/15"
                      } focus:outline-hidden focus:ring-4 transition-all duration-200`}
                      placeholder="jane.doe@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-750 dark:text-gray-300">
                      Company <span className="text-gray-400 dark:text-gray-500 text-xs font-normal">(Optional)</span>
                    </label>
                    <div className="mt-2">
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="block w-full rounded-xl bg-white dark:bg-gray-900 px-4 py-2.5 text-base text-gray-900 dark:text-white border border-gray-250 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15 focus:outline-hidden transition-all duration-200"
                        placeholder="Company Inc."
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-750 dark:text-gray-300">
                      Phone number <span className="text-gray-400 dark:text-gray-500 text-xs font-normal">(Optional)</span>
                    </label>
                    <div className="mt-2">
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="block w-full rounded-xl bg-white dark:bg-gray-900 px-4 py-2.5 text-base text-gray-900 dark:text-white border border-gray-250 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15 focus:outline-hidden transition-all duration-200"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-750 dark:text-gray-300">
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`block w-full rounded-xl bg-white dark:bg-gray-900 px-4 py-2.5 text-base text-gray-900 dark:text-white border ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-250 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-indigo-500/15"
                      } focus:outline-hidden focus:ring-4 transition-all duration-200`}
                      placeholder="Tell me about your project, idea, or role opportunity..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>
                </div>

                {/* Switch Agreement */}
                <div className="flex gap-x-4 items-center">
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={formData.agreed}
                      onChange={handleSwitchChange}
                      className="group flex w-9 flex-none cursor-pointer rounded-full bg-gray-250 dark:bg-gray-750 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-4"
                      />
                    </Switch>
                  </div>
                  <label className="text-sm text-gray-600 dark:text-gray-350 select-none">
                    By selecting this, you agree to allow me to store this info to contact you back.
                  </label>
                </div>
                {errors.agreed && (
                  <p className="text-xs text-red-500 mt-1">{errors.agreed}</p>
                )}

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600 transition-colors disabled:bg-indigo-400 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Let's talk"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
