# Angular Lazy Loading Module Example

## Overview

This project demonstrates the creation of an Angular application (version 15+) that implements lazy loading modules. It includes a communication layer between the main application and the lazy-loaded modules, dynamically registers additional routes, and passes values through the communication layer.

## Features

- Angular version: 15+
- Lazy loading of modules
- Simple communication layer between the main application and lazy-loaded modules
- Dynamic route registration in lazy-loaded modules
- Value passing through the communication layer

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- Angular CLI (version 15 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yogesh-sapkal/lazyloading.git
   cd lazyloading
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

To run the application, use the following command:

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200`.

## Project Structure

- `src/`
  - `app/`
    - `core/` - Core services and modules
    - `lazy/` - Lazy loaded modules
    - `shared/` - Shared components and services
    - `app-routing.module.ts` - Main routing module
    - `app.module.ts` - Root application module

## Usage

1. **Lazy Loading Modules**: 
   - The application is structured to lazy load specific modules to enhance performance. 

2. **Communication Layer**: 
   - A service is implemented to facilitate communication between the main application and lazy-loaded modules.

3. **Dynamic Route Registration**: 
   - Additional routes can be dynamically registered when a lazy-loaded module is initialized.

4. **Value Passing**: 
   - Data can be passed from the main application to the lazy-loaded components via the communication layer.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or issues, please open an issue in this repository or contact me at [your-email@example.com].

---

Feel free to modify this README according to your project's specifics, including adding more details or sections as necessary!