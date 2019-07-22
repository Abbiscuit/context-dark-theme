import React from 'react';
import Navbar from './components/navbar.component';
import BookList from './components/book-list.component';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/theme-toggle.component';
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
