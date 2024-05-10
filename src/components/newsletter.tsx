import { actions } from "astro:actions";
import React from "react";

export default function NewsletterReact() {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const results = await actions.newsLetter(formData);
    console.log(results);
  }

  return (
    <form
      method="POST"
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        defaultValue={"default-email@email.com"}
        style={{
          marginBottom: "10px",
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <label>
        <input
          type="checkbox"
          name="subscribe"
          style={{ marginRight: "5px" }}
          checked
        />
        Subscribe
      </label>
      <button
        type="submit"
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}
