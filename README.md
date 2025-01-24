# Assignment

## Description

This project is a responsive web application featuring a dynamic header with a menu bar ,Frame and Info components. The application is designed to provide a seamless user experience across different screen sizes, utilizing React and Tailwind CSS for styling. The header includes a logo, navigation items, a contact button, and a hamburger menu icon that appears on smaller screens.

## Features

- **Responsive Design**: The layout adjusts based on the screen size, ensuring usability on both desktop and mobile devices.
- **Dynamic Menu Bar**: Utilizes PrimeReact's Menubar component to manage navigation items effectively.
- **Image Handling**: Images are styled to maintain their aspect ratios while being responsive to the parent container's size.
- **Hover Effects**: Interactive elements such as buttons and images have hover effects for enhanced user engagement.
- **Animations**: Custom animations are applied to enhance visual appeal.
- **Media Queries**: Custom styles are applied using media queries to handle specific design requirements for smaller screens.

## Key Components

### 1. Navbar Component

The `Navbar` component includes:
- A logo that changes based on screen size.
- A menu bar with various navigation items, implemented using PrimeReact's Menubar.
- A button for contacting experts, which includes an icon that only appears on larger screens.
- A hamburger menu icon that appears on smaller screens.

### 2. Frame Component

The `Frame` component displays two images:
- The main frame image (`frame`) adjusts its width responsively while maintaining a fixed height.
- The second frame image (`frame1`) remains consistent in size across all screen sizes but has hover effects for scaling.

### 3. Info Component

The `Info` component features text animations that enhance user engagement:
- **Typing Animation**: Text within the component animates as if it is being typed out. This effect draws attention and adds a dynamic element to the UI.

## Animations

### Frame Component Animation

The `Frame` component utilizes a custom animation that gradually expands the width of the frame image from `0%` to `100%`, creating a smooth reveal effect when the component mounts. This animation enhances the visual experience by providing an engaging entrance for the image.
Additionally, the `Frame` component features a text section that includes:
- A prominent heading with dynamic typing animation that draws attention to the message about achieving dreams at a university.
- A descriptive paragraph providing information about expert help and personalized guidance.
- A call-to-action button encouraging users to take action with Ambitio.

### Info Component Animation

It features dynamic text that emphasizes user satisfaction and encourages exploration of products. The component is visually appealing with a gradient background, responsive design, and smooth entrance animations.

## Responsive Behavior

The application employs Tailwind CSS classes to manage responsiveness:
- Flexbox is used for layout alignment.
- Media queries ensure specific styles are applied when the viewport width is less than 650px, such as displaying the hamburger icon next to the button.

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **PrimeReact**: For UI components like Menubar.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Shreya-Trigunayat/Assignment.git
   cd yourproject
2. Install dependencies:
   ```bash
   npm install
3.  Start the development server: npm run dev

## Usage

Navigate through the menu items in the navbar. On smaller screens, click the hamburger icon to access the menu options. Hover over buttons to see interactive effects.

