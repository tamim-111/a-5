# 🧱 Dev Stack

A modern and responsive technology stack builder built with React, TypeScript, Tailwind CSS, and DaisyUI.

Dev Stack allows developers to explore popular web development technologies and create their own personalized technology stack. Users can add technologies, remove them, and manage their selected stack easily.

## 🚀 Live Demo

[Live Site](https://ph-a5-dev-stack.netlify.app/)

## 📦 GitHub Repository

[GitHub Repository](https://github.com/tamim-111/a-5)

---

## ✨ Features

- 🔍 Explore popular development technologies with their category, difficulty, rating, and description.
- 🧰 Build your own technology stack by adding and removing technologies.
- 🔔 Get instant feedback using React Toastify for add, duplicate, remove, and remove-all actions.
- 📱 Fully responsive design for mobile, tablet, and desktop devices.
- ⏳ Loading state while technology data is being loaded from the JSON file.
- 🎨 Consistent gradient-based visual theme throughout the application.

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify
- HTML5
- CSS3
- JSON

---

## 📂 Project Structure

```text
src/
├── assets/
│   └── images/
│
├── components/
│   ├── Navbar/
│   │   └── Navbar.tsx
│   │
│   ├── Hero/
│   │   └── Hero.tsx
│   │
│   ├── Technologies/
│   │   ├── TechnologyCard.tsx
│   │   └── TechnologyGrid.tsx
│   │
│   ├── Stack/
│   │   ├── StackItem.tsx
│   │   └── StackSidebar.tsx
│   │
│   └── Footer/
│       └── Footer.tsx
│
├── data/
│   └── technologies.json
│
├── types/
│   └── technology.ts
│
├── App.tsx
└── main.tsx
```

---

# ⚙️ Getting Started

## 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

## 2. Go to the project directory

```bash
cd dev-stack
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

# 🧩 How It Works

The technology information is stored in a local JSON file:

```text
src/data/technologies.json
```

The application loads the data using `fetch()` and `useEffect()`.

Each technology follows the shared TypeScript interface:

```ts
Technology
```

Users can then add technologies to their personal stack.

The selected technologies are stored in React state:

```ts
selectedTechnologies
```

When a technology is added or removed, the UI updates automatically.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to read and write because we can describe the UI and its logic together.

Example:

```tsx
const App = () => {
  return <h1>Hello React</h1>;
};
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

For example, in this project, the selected technologies are stored in state, while technology information is passed to child components through props.

---

## 3. What does the useState hook do, and where did you use it in this project?

`useState` allows a React component to store and update data.

In this project, we used it in `App.tsx` to manage:

- Technology data
- Selected technologies
- Loading state

Example:

```tsx
const [selectedTechnologies, setSelectedTechnologies] =
  useState<Technology[]>([]);
```

When the selected technologies change, React automatically updates the UI.

---

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` allows us to perform side effects in a React component.

We used it to load the technology data from the JSON file when the application starts.

Example:

```tsx
useEffect(() => {
  const loadTechnologies = async () => {
    const response = await fetch("/data/technologies.json");

    const data = await response.json();

    setTechnologies(data);
  };

  loadTechnologies();
}, []);
```

The empty dependency array means the effect runs when the component is mounted.

---

## 5. Why does every item in a .map() list need a unique key prop?

React uses the `key` to identify each item in a list.

A unique key helps React understand which item has changed, been added, or removed.

For example:

```tsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
));
```

Using the technology's unique `id` makes it a good key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

In this project, we used it to show the loading state while the JSON data is being loaded.

```tsx
{loading ? (
  <p>Loading technologies...</p>
) : (
  <TechnologyGrid
    technologies={technologies}
    selectedTechnologies={selectedTechnologies}
    onAddToStack={handleAddToStack}
  />
)}
```

We also use conditional rendering for the empty stack message.

```tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackItems />
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

For example:

```tsx
<TechnologyCard
  technology={technology}
  isAdded={isAdded}
  onAddToStack={handleAddToStack}
/>
```

A child can communicate back to the parent by calling a function received through props.

For example:

```tsx
onAddToStack(technology);
```

Here, `App.tsx` owns the state and provides the function, while the child component calls that function when the user clicks **Add to Stack**.

---

# 🎯 Future Improvements

Possible future improvements include:

- Technology search functionality
- Category filtering
- Technology sorting
- Persistent stack using localStorage
- Authentication
- User-specific saved stacks
- Backend API integration

---

## 👨‍💻 Author

**Muhammad Tamim**

Computer Science & Engineering Student  
Full Stack Developer

---

## 📄 License

This project was created for educational and learning purposes.
