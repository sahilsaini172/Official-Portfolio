export const articleData = [
  {
    title: "Introduction to React — Building Dynamic User Interfaces",
    description: {
      p1: "React is a popular JavaScript library designed to build dynamic and interactive user interfaces, primarily for single-page applications (SPAs). Developed by Facebook engineer Jordan Walke, React revolutionizes how developers create web applications by introducing a component-based architecture and an efficient rendering process.",
      p2: "At its core, React leverages a concept known as the Virtual DOM — a lightweight in-memory representation of the real DOM. When the application's state changes, React creates a new Virtual DOM, compares it with the previous version, and identifies the minimal necessary updates. This selective update approach, called reconciliation, ensures faster rendering and improved performance compared to manipulating the entire DOM directly.",
      p3: "React applications are made up of components — self-contained, reusable building blocks that define portions of the UI. Components can be written as functions or classes, and they accept inputs called props while managing their internal state. JSX, a syntax extension that resembles HTML within JavaScript, makes writing these components intuitive and expressive, enhancing code readability.",
      p4: "Key features of React include one-way data binding from parent to child components, allowing for predictable data flow, and powerful state management capabilities through hooks like useState and useEffect. These features, combined with tools such as React Router for navigation, make React a versatile library for building modern web applications with smooth user experiences.",
      p5: `Overall, React's focus on performance optimization, modular design, and developer-friendly syntax has made it a top choice in front-end development today.`,
    },
  },
];
